import { Radio, Gamepad2, MessageCircle, Volume2 } from "lucide-react";

const solutions = [
  { icon: Radio, title: "24시간 라이브", desc: "잠들지 않는 AI. 언제 접속해도 방송 중!", delay: "0s" },
  { icon: Gamepad2, title: "실시간 게임", desc: "직접 게임을 플레이하고 반응하는 AI", delay: "0.1s" },
  { icon: MessageCircle, title: "채팅 반응", desc: "시청자 채팅에 실시간으로 대화하고 반응", delay: "0.2s" },
  { icon: Volume2, title: "한국어 음성", desc: "자연스러운 한국어 음성으로 소통", delay: "0.3s" },
];

const SolutionSection = () => (
  <section className="py-28 px-6 relative">
    <div className="max-w-5xl mx-auto">
      <h2 className="section-title">K-AIRI가 다른 이유</h2>
      <p className="section-subtitle">진짜 AI 버튜버는 이래야 합니다</p>
      <div className="grid sm:grid-cols-2 gap-6">
        {solutions.map((s) => (
          <div key={s.title} className="neon-card p-8 flex items-start gap-5 animate-fade-up" style={{ animationDelay: s.delay }}>
            <div className="shrink-0 inline-flex p-3.5 rounded-2xl" style={{ background: "hsl(var(--neon-cyan) / 0.1)" }}>
              <s.icon className="w-7 h-7 text-neon-cyan" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 font-display">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
