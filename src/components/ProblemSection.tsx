import { Globe, XCircle, MessageSquare } from "lucide-react";

const problems = [
  { icon: Globe, title: "영어만 지원", desc: "기존 AI 스트리머는 영어 위주. 한국어 지원은 전무한 상황.", color: "270" },
  { icon: XCircle, title: "중단된 프로젝트", desc: "기술 부족으로 시작만 하고 사라진 AI 방송 프로젝트들.", color: "320" },
  { icon: MessageSquare, title: "텍스트만 지원", desc: "진짜 '방송'이 아닌, 텍스트 채팅봇에 불과한 수준.", color: "0" },
];

const ProblemSection = () => (
  <section className="py-28 px-6 relative">
    <div className="max-w-5xl mx-auto">
      <h2 className="section-title">기존 AI 스트리머의 한계</h2>
      <p className="section-subtitle">왜 아직 진짜 AI 버튜버가 없었을까요?</p>
      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((p, i) => (
          <div key={p.title} className={`neon-card p-8 text-center space-y-5 animate-fade-up`} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="inline-flex p-4 rounded-2xl" style={{ background: `hsl(${p.color} 70% 50% / 0.1)` }}>
              <p.icon className="w-7 h-7" style={{ color: `hsl(${p.color} 70% 65%)` }} />
            </div>
            <h3 className="text-xl font-bold font-display">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
