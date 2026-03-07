import kairiCharacter from "@/assets/kairi-character.png";

const HeroSection = () => {
  const scrollToSignup = () => {
    document.getElementById("beta-signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center px-6 py-20 relative overflow-hidden grid-pattern">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]" style={{ background: "hsl(270 80% 55%)" }} />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full opacity-12 blur-[100px]" style={{ background: "hsl(180 80% 50%)" }} />
        <div className="absolute top-[60%] left-[50%] w-[300px] h-[300px] rounded-full opacity-8 blur-[80px]" style={{ background: "hsl(320 80% 55%)" }} />
      </div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Character */}
        <div className="flex justify-center order-2 md:order-1">
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-full blur-[60px] opacity-30" style={{ background: "hsl(270 80% 60%)" }} />
            <img
              src={kairiCharacter}
              alt="K-AIRI AI 버튜버 캐릭터"
              className="relative w-72 md:w-[400px] drop-shadow-[0_0_50px_hsl(270,80%,60%,0.4)]"
            />
          </div>
        </div>

        {/* Text */}
        <div className="text-center md:text-left space-y-7 order-1 md:order-2">
          <div className="animate-fade-up">
            <span className="neon-badge">🇰🇷 한국 최초 AI 버튜버</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] glow-text font-display animate-fade-up-delay-1">
            24시간<br />
            쉬지 않는<br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-neon)" }}>
              스트리머
            </span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed animate-fade-up-delay-2">
            AI가 직접 게임하고, 대화하고, 노래하는 —<br className="hidden md:block" />
            세계 최초 한국어 AI 버튜버 <span className="shimmer-text font-semibold">K-AIRI</span>를 만나보세요.
          </p>
          <div className="animate-fade-up-delay-3">
            <button onClick={scrollToSignup} className="neon-button">
              🚀 베타 테스터 신청하기
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-scroll">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase font-display">Scroll</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
