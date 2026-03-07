import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "첫 방송은 언제인가요?",
    a: "2026년 상반기 내 베타 방송을 목표로 하고 있습니다. 베타 테스터로 신청하시면 가장 먼저 소식을 받아보실 수 있어요!",
  },
  {
    q: "어떤 게임을 할 수 있나요?",
    a: "FPS, RPG, 전략 시뮬레이션 등 다양한 장르를 지원할 예정입니다. 시청자 투표로 게임을 선택하는 기능도 준비 중이에요.",
  },
  {
    q: "무료인가요?",
    a: "베타 기간 동안은 완전 무료입니다! 정식 출시 후에도 기본 시청은 무료로 제공할 예정입니다.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title">자주 묻는 질문</h2>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="neon-card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left font-semibold"
              >
                {faq.q}
                <ChevronDown
                  className={`w-5 h-5 text-neon-cyan shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? "200px" : "0", opacity: open === i ? 1 : 0 }}
              >
                <p className="px-6 pb-6 text-muted-foreground text-sm">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
