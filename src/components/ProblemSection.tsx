import { Globe, XCircle, MessageSquare } from "lucide-react";

const problems = [
  { icon: Globe, title: "영어만 지원", desc: "기존 AI 스트리머는 영어 위주. 한국어 지원은 전무한 상황." },
  { icon: XCircle, title: "중단된 프로젝트", desc: "기술 부족으로 시작만 하고 사라진 AI 방송 프로젝트들." },
  { icon: MessageSquare, title: "텍스트만 지원", desc: "진짜 '방송'이 아닌, 텍스트 채팅봇에 불과한 수준." },
];

const ProblemSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="section-title">기존 AI 스트리머의 한계</h2>
      <p className="text-center text-muted-foreground mb-12">왜 아직 진짜 AI 버튜버가 없었을까요?</p>
      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((p) => (
          <div key={p.title} className="neon-card p-8 text-center space-y-4">
            <div className="inline-flex p-3 rounded-xl" style={{ background: "hsl(0 70% 50% / 0.15)" }}>
              <p.icon className="w-7 h-7 text-red-400" />
            </div>
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-muted-foreground text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
