import React, { useEffect, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Copy,
  BookHeart,
  ChefHat,
  Zap,
  Shield,
  Trophy,
  BookOpen,
  Layers,
  Lightbulb,
  Rocket,
  Cpu,
  Target,
  Compass,
  GraduationCap,
  Flame,
  Mail,
  FileText,
  Brain,
  ShoppingCart,
  ArrowUpRight,
  Check,
  Sparkles,
  Globe,
  Code2,
  Database,
  Bot,
  Video,
  Users,
  Route,
  Monitor,
  Workflow,
} from "lucide-react";
import "./App.css";

const socialLinks = [
  {
    name: "Portfolio",
    url: "https://portfolio-new-seven-henna.vercel.app/",
    icon: <BookHeart />,
  },
  {
    name: "GitHub",
    url: "https://github.com/Saxena-Shivam",
    icon: <Github />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shivam-saxena-aa8754289/",
    icon: <Linkedin />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/its_the_shivam_/",
    icon: <Instagram />,
  },
  {
    name: "Twitter",
    url: "https://x.com/Shivam562006",
    icon: <Twitter />,
  },
  {
    name: "Gmail",
    url: "mailto:shivamsaxena562006@gmail.com",
    icon: <Mail />,
  },
  {
    name: "Resume",
    url: "https://shivam-accounts.vercel.app//Shivam_RESUME.pdf",
    icon: <FileText />,
  },

  // Coding Profiles
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/shivamsaxena562006",
    icon: <Zap />,
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/s_raja",
    icon: <ChefHat />,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/shivamsaxena56/",
    icon: <Trophy />,
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/user/shivamsaxenni1/",
    icon: <BookOpen />,
  },
  {
    name: "Codolio",
    url: "https://codolio.com/profile/shivam56",
    icon: <Lightbulb />,
  },
  {
    name: "TUF",
    url: "https://takeuforward.org/profile/shivamsaxena56",
    icon: <Rocket />,
  },
  {
    name: "TLE",
    url: "https://www.tle-eliminators.com/my-profile",
    icon: <Flame />,
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/shivamsaxena56",
    icon: <Shield />,
  },
  {
    name: "HackerEarth",
    url: "https://www.hackerearth.com/@shivam5572/",
    icon: <Layers />,
  },
  {
    name: "AtCoder",
    url: "https://atcoder.jp/users/shivamsaxena56",
    icon: <Cpu />,
  },
  {
    name: "SPOJ",
    url: "https://www.spoj.com/",
    icon: <Target />,
  },
  {
    name: "CSES",
    url: "https://cses.fi/user/338893",
    icon: <Compass />,
  },
  {
    name: "NXTWAVE",
    url: "https://learning.ccbp.in/profile/47756418-44a9-4c4f-8459-7e90976d6e93",
    icon: <GraduationCap />,
  },

  // Projects
  {
    name: "AcadSync",
    url: "https://acadsync.in/",
    icon: <Brain />,
  },
  {
    name: "Grocto",
    url: "https://grocto-frontend.onrender.com/",
    icon: <ShoppingCart />,
  },
  {
    name: "UniCom",
    url: "https://arc-woad-kappa.vercel.app/home",
    icon: <Users />,
  },
  {
    name: "Neuromancers",
    url: "https://neuromancers.vercel.app/",
    icon: <Bot />,
  },
  {
    name: "Syncly",
    url: "https://syncly-one.vercel.app/",
    icon: <Workflow />,
  },
  {
    name: "Portfolio-OS",
    url: "https://shivam-potfolio-os.vercel.app/",
    icon: <Monitor />,
  },
  {
    name: "JRM-Route",
    url: "https://jrm-iota.vercel.app/",
    icon: <Route />,
  },
  {
    name: "My-Tube",
    url: "https://my-tube-website.vercel.app/",
    icon: <Video />,
  },
];
const getAccentStyles = (name) => {
  const lower = name.toLowerCase();

  if (
    /(portfolio|project|studio|syncly|neuromancers|jrm|route|unicom)/.test(
      lower,
    )
  ) {
    return {
      accent: "#8b5cf6",
      glow: "rgba(139, 92, 246, 0.3)",
      ring: "rgba(147, 197, 253, 0.8)",
    };
  }

  if (
    /(codeforces|codechef|leetcode|hackerrank|hackerearth|atcoder|spoj|cses|geeks|tuf|tle|codolio|nxtwave)/.test(
      lower,
    )
  ) {
    return {
      accent: "#f59e0b",
      glow: "rgba(245, 158, 11, 0.22)",
      ring: "rgba(251, 191, 36, 0.8)",
    };
  }

  if (
    /(instagram|twitter|linkedin|github|x.com|youtube|facebook)/.test(lower)
  ) {
    return {
      accent: "#ec4899",
      glow: "rgba(236, 72, 153, 0.24)",
      ring: "rgba(192, 132, 252, 0.9)",
    };
  }

  if (/(gmail|resume|cv|mail|profile|about)/.test(lower)) {
    return {
      accent: "#22c55e",
      glow: "rgba(34, 197, 94, 0.22)",
      ring: "rgba(134, 239, 172, 0.9)",
    };
  }

  return {
    accent: "#60a5fa",
    glow: "rgba(96, 165, 250, 0.2)",
    ring: "rgba(125, 211, 252, 0.8)",
  };
};

function CanvasBackground({ reducedMotion }) {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(0);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = reducedMotion
        ? 32
        : Math.min(120, Math.max(58, Math.floor((width * height) / 18)));
      const nextParticles = [];

      for (let i = 0; i < count; i += 1) {
        nextParticles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2.2 + 0.6,
          alpha: Math.random() * 0.8 + 0.2,
        });
      }

      particlesRef.current = nextParticles;
    };

    const handlePointerMove = (event) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
      mouseRef.current.active = true;
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (!reducedMotion) {
        const particles = particlesRef.current;
        const mouse = mouseRef.current;

        for (let i = 0; i < particles.length; i += 1) {
          const particle = particles[i];
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < 0 || particle.x > width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > height) particle.vy *= -1;

          if (mouse.active) {
            const dx = particle.x - mouse.x;
            const dy = particle.y - mouse.y;
            const distance = Math.hypot(dx, dy) || 1;

            if (distance < 140) {
              const force = (140 - distance) / 140;
              particle.x += (dx / distance) * force * 2.6;
              particle.y += (dy / distance) * force * 2.6;
            }
          }

          const glow = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.radius * 12,
          );
          glow.addColorStop(0, `rgba(168, 85, 247, ${particle.alpha})`);
          glow.addColorStop(0.4, "rgba(96, 165, 250, 0.18)");
          glow.addColorStop(1, "rgba(96, 165, 250, 0)");

          ctx.beginPath();
          ctx.fillStyle = glow;
          ctx.arc(particle.x, particle.y, particle.radius * 8, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.fillStyle = `rgba(255,255,255,${particle.alpha})`;
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        for (let i = 0; i < particles.length; i += 1) {
          const a = particles[i];
          for (let j = i + 1; j < particles.length; j += 1) {
            const b = particles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const distance = Math.hypot(dx, dy) || 1;

            if (distance < 90) {
              const alpha = 1 - distance / 90;
              ctx.beginPath();
              ctx.strokeStyle = `rgba(168, 85, 247, ${alpha * 0.3})`;
              ctx.lineWidth = 0.7;
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }

        if (mouse.active) {
          const glow = ctx.createRadialGradient(
            mouse.x,
            mouse.y,
            0,
            mouse.x,
            mouse.y,
            90,
          );
          glow.addColorStop(0, "rgba(168, 85, 247, 0.28)");
          glow.addColorStop(0.35, "rgba(59, 130, 246, 0.14)");
          glow.addColorStop(1, "rgba(59, 130, 246, 0)");
          ctx.beginPath();
          ctx.fillStyle = glow;
          ctx.arc(mouse.x, mouse.y, 90, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [reducedMotion]);

  return (
    <canvas ref={canvasRef} className="canvas-background" aria-hidden="true" />
  );
}

function TiltCard({ link, index, copiedIndex, copyToClipboard }) {
  const cardRef = useRef(null);
  const accent = getAccentStyles(link.name);
  const isCopied = copiedIndex === index;

  const handlePointerMove = (event) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 12;
    const rotateX = (0.5 - py) * 12;

    card.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`);
    card.style.setProperty("--mx", `${(px * 100).toFixed(2)}%`);
    card.style.setProperty("--my", `${(py * 100).toFixed(2)}%`);
  };

  const handlePointerLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    card.style.setProperty("--mx", "50%");
    card.style.setProperty("--my", "50%");
    document.body.classList.remove("cursor-card-hover");
  };

  const handleMouseEnter = () => {
    document.body.classList.add("cursor-card-hover");
  };

  return (
    <article
      ref={cardRef}
      className="social-card"
      onMouseMove={handlePointerMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handlePointerLeave}
      style={{
        "--card-accent": accent.accent,
        "--card-glow": accent.glow,
        "--card-ring": accent.ring,
      }}
    >
      <div className="social-card__glow" aria-hidden="true" />

      <div className="social-card__header">
        <div className="social-card__icon-wrap">
          <div className="social-card__icon">{link.icon}</div>
        </div>
      </div>

      <div className="social-card__body">
        <h2>{link.name}</h2>
      </div>

      <div className="social-card__actions">
        <button
          type="button"
          className="action-button copy-button"
          onMouseEnter={() =>
            document.body.classList.add("cursor-button-hover")
          }
          onMouseLeave={() =>
            document.body.classList.remove("cursor-button-hover")
          }
          onClick={() => copyToClipboard(link.url, index)}
          aria-label={`Copy ${link.name} URL`}
        >
          {isCopied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
          <span>{isCopied ? "Copied!" : "Copy URL"}</span>
        </button>

        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="action-button visit-button"
          onMouseEnter={() =>
            document.body.classList.add("cursor-button-hover")
          }
          onMouseLeave={() =>
            document.body.classList.remove("cursor-button-hover")
          }
          aria-label={`Visit ${link.name}`}
        >
          <span>Visit</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

export default function SocialLinksPage() {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const targetRef = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const currentRef = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const tick = () => {
      const outer = cursorOuterRef.current;
      const inner = cursorInnerRef.current;

      if (!outer || !inner) return;

      currentRef.current.x +=
        (targetRef.current.x - currentRef.current.x) * 0.18;
      currentRef.current.y +=
        (targetRef.current.y - currentRef.current.y) * 0.18;

      outer.style.transform = `translate(${currentRef.current.x}px, ${currentRef.current.y}px) translate(-50%, -50%)`;
      inner.style.transform = `translate(${currentRef.current.x}px, ${currentRef.current.y}px) translate(-50%, -50%)`;
      requestAnimationFrame(tick);
    };

    const moveHandler = (event) => {
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;
    };

    const downHandler = () => {
      document.body.classList.add("cursor-pressed");
    };

    const upHandler = () => {
      document.body.classList.remove("cursor-pressed");
    };

    const rafId = requestAnimationFrame(tick);
    window.addEventListener("pointermove", moveHandler);
    window.addEventListener("pointerdown", downHandler);
    window.addEventListener("pointerup", upHandler);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", moveHandler);
      window.removeEventListener("pointerdown", downHandler);
      window.removeEventListener("pointerup", upHandler);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => {
      prefersReducedMotion.current = mediaQuery.matches;
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const copyToClipboard = async (url, index) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = url;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      setCopiedIndex(index);
      window.setTimeout(
        () => setCopiedIndex((value) => (value === index ? null : value)),
        2000,
      );
    } catch (error) {
      console.warn("Clipboard copy failed:", error);
    }
  };

  return (
    <div className="social-page">
      <CanvasBackground reducedMotion={prefersReducedMotion.current} />

      <div className="ambient-grid" aria-hidden="true" />
      <div className="ambient-orb orb-one" aria-hidden="true" />
      <div className="ambient-orb orb-two" aria-hidden="true" />
      <div className="ambient-orb orb-three" aria-hidden="true" />

      <div
        className="custom-cursor custom-cursor__outer"
        ref={cursorOuterRef}
        aria-hidden="true"
      />
      <div
        className="custom-cursor custom-cursor__inner"
        ref={cursorInnerRef}
        aria-hidden="true"
      />

      <main className="social-shell">
        <header className="hero-section">
          <div className="hero-badge">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Available Everywhere • Building • Learning</span>
          </div>
          <h1>Connect With Me</h1>
          <p>Everything you need to explore my work, profiles and projects.</p>
        </header>

        <section className="social-grid" aria-label="Social profile links">
          {socialLinks.map((link, index) => (
            <TiltCard
              key={`${link.name}-${index}`}
              link={link}
              index={index}
              copiedIndex={copiedIndex}
              copyToClipboard={copyToClipboard}
            />
          ))}
        </section>

        <footer className="page-footer">
          <span>Built with ❤️ and code</span>
          <span>© 2026 Shivam Saxena</span>
        </footer>
      </main>
    </div>
  );
}
