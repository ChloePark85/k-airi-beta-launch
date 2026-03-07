import { useState } from "react";

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
    // TODO: Lovable Cloud 연동 시 Supabase beta_signups 테이블에 저장
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="beta-signup" className="py-24 px-6">
        <div className="max-w-lg mx-auto text-center neon-card p-12 space-y-4">
          <div className="text-5xl">🎉</div>
          <h2 className="text-2xl font-bold">신청 완료!</h2>
          <p className="text-muted-foreground">
            베타 테스터로 등록되었습니다.<br />
            K-AIRI의 첫 방송 소식을 이메일로 보내드릴게요!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="beta-signup" className="py-24 px-6">
      <div className="max-w-lg mx-auto">
        <h2 className="section-title">베타 테스터 신청</h2>
        <div className="text-center mb-8">
          <span className="neon-badge">🔥 선착순 50명</span>
        </div>

        <form onSubmit={handleSubmit} className="neon-card p-8 space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">이름</label>
            <input
              required
              maxLength={50}
              className="neon-input"
              placeholder="홍길동"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">이메일</label>
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
          <div>
            <label className="block text-sm font-medium mb-2">선호 플랫폼</label>
            <select
              required
              className="neon-input"
              value={form.platform}
              onChange={(e) => setForm({ ...form, platform: e.target.value })}
            >
              <option value="">선택해주세요</option>
              <option value="chzzk">치지직</option>
              <option value="youtube">유튜브</option>
              <option value="both">둘 다</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">관심 분야</label>
            <select
              required
              className="neon-input"
              value={form.interest}
              onChange={(e) => setForm({ ...form, interest: e.target.value })}
            >
              <option value="">선택해주세요</option>
              <option value="game">게임</option>
              <option value="chat">대화</option>
              <option value="music">음악</option>
              <option value="all">전부 다!</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">하고 싶은 말 (선택)</label>
            <textarea
              maxLength={500}
              className="neon-input min-h-[80px] resize-none"
              placeholder="K-AIRI에게 바라는 점이나 기대되는 점을 적어주세요!"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <button type="submit" disabled={loading} className="neon-button w-full text-center disabled:opacity-50">
            {loading ? "제출 중..." : "🚀 베타 테스터 신청하기"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default BetaSignupSection;
