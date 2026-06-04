export function injectGlobalStyles(): void {
  if (document.getElementById("portfolio-global-styles")) return;

  // Google Fonts
  const fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href =
    "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600;700&display=swap";
  document.head.appendChild(fontLink);

  // CSS Global
  const style = document.createElement("style");
  style.id = "portfolio-global-styles";
  style.textContent = `

    :root {
      --c-silent-navy:  #102a6b;
      --c-sandy-amber:  #cea273;
      --c-blue-current: #015185;
      --c-sky-blue:     #5990c0;
      --c-light-cream:  #fcedd3;
      --c-deep-ink:     #0f1217;
      --c-ocean-blue:   #27606c;
      --c-fog-aqua:     #7baaab;
      --c-soft-shell:   #c68d5d;
      --c-warm-sand:    #e6bd8b;

      --font-display: 'Playfair Display', Georgia, serif;
      --font-body:    'DM Sans', sans-serif;

      --section-px:   48px;
      --section-py:   110px;
      --max-width:    1040px;

      --ease-smooth:  cubic-bezier(0.4, 0, 0.2, 1);
      --duration-md:  0.3s;
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      overscroll-behavior: none;         
      scroll-behavior: smooth;            
      height: 100%;
    }

    body {
      overscroll-behavior: none;         
      overflow-x: hidden;                 
      min-height: 100%;
      font-family: var(--font-body);
      background-color: var(--c-deep-ink);
      color: var(--c-light-cream);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    #root, [data-reactroot] {
      overscroll-behavior: none;
      min-height: 100vh;
    }

    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: var(--c-deep-ink);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--c-ocean-blue);
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--c-fog-aqua);
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: var(--font-display);
      line-height: 1.1;
    }

    p, span, li, button, input, textarea, a {
      font-family: var(--font-body);
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    button {
      cursor: pointer;
      border: none;
      background: none;
    }

    input, textarea {
      outline: none;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(28px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    .anim-fade-up {
      animation: fadeInUp 0.65s var(--ease-smooth) both;
    }
    .anim-fade-up-delay-1 { animation-delay: 0.1s; }
    .anim-fade-up-delay-2 { animation-delay: 0.22s; }
    .anim-fade-up-delay-3 { animation-delay: 0.34s; }
    .anim-fade-up-delay-4 { animation-delay: 0.46s; }

    .text-gradient-teal-amber {
      background: linear-gradient(90deg, var(--c-fog-aqua) 0%, var(--c-warm-sand) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .portfolio-section {
      padding: var(--section-py) var(--section-px);
      width: 100%;
    }

    .section-inner {
      max-width: var(--max-width);
      margin: 0 auto;
    }

    @media (max-width: 768px) {
      :root {
        --section-px: 24px;
        --section-py: 72px;
      }
    }

  `;
  document.head.appendChild(style);
}
