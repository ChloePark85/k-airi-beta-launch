import { useState } from "react";
import { toast } from "sonner";

interface SignupData {
  name: string;
  email: string;
  platform: string;
  interest: string;
  message: string;
  submittedAt: string;
}

const BetaSignupSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    platform: "",
    interest: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const entry: SignupData = { ...form, submittedAt: new Date().toISOString() };
      const existing = JSON.parse(localStorage.getItem("beta_signups") || "[]");
      
      // Check duplicate email
      if (existing.some((s: SignupData) => s.email === form.email)) {
        toast.error("이미 신청된 이메일입니다!");
        setLoading(false);
        return;
      }

      existing.push(entry);
      localStorage.setItem("beta_signups", JSON.stringify(existing));
      
      await new Promise((r) => setTimeout(r, 600));
      setSubmitted(true);
      toast.success("베타 테스터 신청이 완료되었습니다! 🎉");
    } catch {
      toast.error("오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="beta-signup" className="py-28 px-6">
        <div className="max-w-lg mx-auto text-center neon-card p-14 space-y-5 animate-fade-up">
          <div className="text-6xl mb-2">🎉</div>
          <h2 className="text-3xl font-bold font-display">신청 완료!</h2>
          <p className="text-muted-foreground leading-relaxed">
            베타 테스터로 등록되었습니다.<br />
            K-AIRI의 첫 방송 소식을 이메일로 보내드릴게요!
          </p>
          <div className="pt-2">
            <span className="neon-badge">✉️ {form.email}</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="beta-signup" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-[100px]" style={{ background: "hsl(180 80% 50%)" }} />
      </div>
      <div className="max-w-lg mx-auto relative z-10">
        <h2 className="section-title">베타 테스터 신청</h2>
        <div className="text-center mb-10">
          <span className="neon-badge-fire">🔥 선착순 50명</span>
        </div>

        <form onSubmit={handleSubmit} className="neon-card p-8 md:p-10 space-y-6">
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-muted-foreground">이름</label>
            <input
              required
              maxLength={50}
              className="neon-input"
              placeholder="홍길동"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-muted-foreground">이메일</label>
            <input
              required
              type="email"
              maxLength={100}
              className="neon-input"
              placeholder="hello@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-muted-foreground">선호 플랫폼</label>
              <select
                required
                className="neon-input"
                value={form.platform}
                onChange={(e) => setForm({ ...form, platform: e.target.value })}
              >
                <option value="">선택</option>
                <option value="chzzk">치지직</option>
                <option value="youtube">유튜브</option>
                <option value="both">둘 다</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-muted-foreground">관심 분야</label>
              <select
                required
                className="neon-input"
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
              >
                <option value="">선택</option>
                <option value="game">게임</option>
                <option value="chat">대화</option>
                <option value="music">음악</option>
                <option value="all">전부 다!</option>
              </select>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-muted-foreground">하고 싶은 말 <span className="text-muted-foreground/50">(선택)</span></label>
            <textarea
              maxLength={500}
              className="neon-input min-h-[90px] resize-none"
              placeholder="K-AIRI에게 바라는 점이나 기대되는 점을 적어주세요!"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <button type="submit" disabled={loading} className="neon-button w-full text-center disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                  <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                </svg>
                제출 중...
              </span>
            ) : "🚀 베타 테스터 신청하기"}
          </button>
          <p className="text-xs text-center text-muted-foreground/50">
            신청 정보는 안전하게 보관되며, 베타 안내 외 용도로 사용되지 않습니다.
          </p>
        </form>
      </div>
    </section>
  );
};

export default BetaSignupSection;
