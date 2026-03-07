import { Gamepad2, MessageCircle, Music, Brain, Clock } from "lucide-react";

const features = [
  { icon: Gamepad2, text: "다양한 게임 직접 플레이 — FPS, RPG, 전략 등" },
  { icon: MessageCircle, text: "시청자와 실시간 대화 — 맥락을 이해하는 자연스러운 소통" },
  { icon: Music, text: "노래 & 엔터테인먼트 — 한국어 노래 가능" },
  { icon: Brain, text: "시청자 기억 — 단골 시청자를 기억하고 반응" },
  { icon: Clock, text: "24/7 무휴 스트리밍 — 새벽에도, 명절에도" },
];

const FeaturesSection = () => (
  <section className="py-28 px-6 relative">
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-8 blur-[120px]" style={{ background: "hsl(270 80% 55%)" }} />
    </div>
    <div className="max-w-3xl mx-auto relative z-10">
      <h2 className="section-title">주요 기능</h2>
      <p className="section-subtitle">K-AIRI가 할 수 있는 것들</p>
      <div className="space-y-4">
        {features.map((f, i) => (
          <div key={f.text} className="neon-card p-6 flex items-center gap-5 animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="shrink-0 p-3 rounded-xl" style={{ background: "hsl(var(--neon-purple) / 0.1)" }}>
              <f.icon className="w-5 h-5 text-neon-purple" />
            </div>
            <span className="text-foreground text-sm md:text-base">{f.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
