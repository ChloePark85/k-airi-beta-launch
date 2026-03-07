import { Gamepad2, MessageCircle, Music, Brain, Clock } from "lucide-react";

const features = [
  { icon: Gamepad2, text: "다양한 게임 직접 플레이 — FPS, RPG, 전략 등" },
  { icon: MessageCircle, text: "시청자와 실시간 대화 — 맥락을 이해하는 자연스러운 소통" },
  { icon: Music, text: "노래 & 엔터테인먼트 — 한국어 노래 가능" },
  { icon: Brain, text: "시청자 기억 — 단골 시청자를 기억하고 반응" },
  { icon: Clock, text: "24/7 무휴 스트리밍 — 새벽에도, 명절에도" },
];

const FeaturesSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-3xl mx-auto">
      <h2 className="section-title">주요 기능</h2>
      <p className="text-center text-muted-foreground mb-12">K-AIRI가 할 수 있는 것들</p>
      <div className="space-y-4">
        {features.map((f) => (
          <div key={f.text} className="neon-card p-5 flex items-center gap-4">
            <f.icon className="w-6 h-6 text-neon-purple shrink-0" />
            <span className="text-foreground">{f.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
