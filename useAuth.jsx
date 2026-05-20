@tailwind base;
@tailwind components;
@tailwind utilities;
.hs-card { background:var(--hs-card-bg); border:1px solid rgba(0,75,135,.12); border-top:3px solid var(--hs-clarity-sky); border-radius:var(--hs-r-lg); padding:16px 18px; }
.hs-card-plain { background:var(--hs-card-bg); border:1px solid rgba(0,75,135,.12); border-radius:var(--hs-r-lg); padding:16px 18px; }
.badge-verdict { display:inline-flex; align-items:center; font-family:var(--hs-font-head); font-size:10px; font-weight:700; padding:3px 9px; border-radius:var(--hs-r-full); letter-spacing:.02em; }
.badge-go    { background:var(--hs-go-bg); color:var(--hs-go-text); border:1px solid rgba(26,107,58,.2); }
.badge-nogo  { background:var(--hs-no-bg); color:var(--hs-no-text); border:1px solid rgba(184,50,36,.2); }
.badge-maybe { background:var(--hs-mb-bg); color:var(--hs-mb-text); border:1px solid rgba(184,114,8,.2); }
