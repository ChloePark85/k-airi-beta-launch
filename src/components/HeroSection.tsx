import kairiCharacter from "@/assets/kairi-character.png";

const HeroSection = () => {
  const scrollToSignup = () => {
    document.getElementById("beta-signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center px-6 py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-[100px]" style={{ background: "hsl(270 80% 60%)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-[100px]" style={{ background: "hsl(180 80% 50%)" }} />
      </div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Character */}
        <div className="flex justify-center animate-float">
          <img
            src={kairiCharacter}
            alt="K-AIRI AI 버튜버 캐릭터"
            className="w-80 md:w-[420px] drop-shadow-[0_0_40px_hsl(270,80%,60%,0.5)]"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left space-y-6">
          <span className="neon-badge">🇰🇷 한국 최초 AI 버튜버</span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight glow-text">
            24시간<br />
            쉬지 않는<br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-neon)" }}>
              스트리머
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            AI가 직접 게임하고, 대화하고, 노래하는 — 세계 최초 한국어 AI 버튜버 K-AIRI를 만나보세요.
          </p>
          <button onClick={scrollToSignup} className="neon-button">
            🚀 베타 테스터 신청하기
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-scroll">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
          <path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
