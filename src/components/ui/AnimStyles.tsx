"use client";

export function AnimStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
@keyframes float-slow {
  0%,100% { transform: translate(0,0) scale(1); }
  50%     { transform: translate(30px,-20px) scale(1.05); }
}
@keyframes float-med {
  0%,100% { transform: translate(0,0) scale(1); }
  50%     { transform: translate(-40px,25px) scale(1.08); }
}
@keyframes float-fast {
  0%,100% { transform: translate(0,0) scale(1); }
  50%     { transform: translate(20px,30px) scale(0.96); }
}
@keyframes gradient-shift {
  0%,100% { background-position: 0% 50%; }
  50%     { background-position: 100% 50%; }
}
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes pulse-ring {
  0%   { transform: scale(0.8); opacity: 0.6; }
  100% { transform: scale(1.8); opacity: 0; }
}
@keyframes dash {
  to { stroke-dashoffset: -400; }
}
@keyframes blink {
  50% { opacity: 0; }
}
@keyframes msg-in {
  0%   { opacity: 0; transform: translateY(6px) scale(0.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes orbit {
  from { transform: rotate(0deg) translateX(var(--r)) rotate(0deg); }
  to   { transform: rotate(360deg) translateX(var(--r)) rotate(-360deg); }
}
@keyframes fade-up {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.reveal { opacity: 0; }
.reveal.in { animation: fade-up 0.9s cubic-bezier(.22,.61,.36,1) forwards; }
.marquee-track { animation: marquee 38s linear infinite; }
.grad-text {
  background: linear-gradient(92deg,#0B0B0E 0%,#7C3AED 45%,#EC4899 75%,#0B0B0E 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 9s ease-in-out infinite;
}
.cursor::after {
  content: "";
  display: inline-block;
  width: 3px; height: 0.9em;
  margin-left: 4px;
  background: #7C3AED;
  vertical-align: -0.05em;
  animation: blink 1s steps(2) infinite;
}
      `.trim(),
      }}
    />
  );
}
