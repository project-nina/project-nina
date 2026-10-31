// An illustrated Kiwi bay villa, drawn twice: tired (before) and freshly done up (after).
// Shared geometry, different paint, so the slider reveal lines up perfectly.

type Props = { state: "tired" | "fresh"; scheme?: "villa" | "bungalow" | "subdivision" };

const palettes = {
  tired: {
    sky: "#c7cbcf",
    skyLow: "#d9d6cf",
    hills: "#9ea39a",
    grass: "#9b9a5e",
    grassDark: "#7e7d48",
    boards: "#b8b0a2",
    boardLine: "#9d9586",
    trim: "#a49c8d",
    roof: "#86593d",
    roofLine: "#6d4630",
    door: "#6e6457",
    glass: "#6f7b80",
    fence: "#a69d8c",
    path: "#a8a294",
    chimney: "#8f6c5a",
    deck: "#7d7262",
  },
  fresh: {
    sky: "#a9dcf3",
    skyLow: "#e3f4fb",
    hills: "#8fbf86",
    grass: "#6cad4e",
    grassDark: "#4f8f39",
    boards: "#f7f2e8",
    boardLine: "#e2d9c8",
    trim: "#ffffff",
    roof: "#b23b2b",
    roofLine: "#922c1f",
    door: "#1f5e63",
    glass: "#cfe9f3",
    fence: "#ffffff",
    path: "#d8cdb8",
    chimney: "#a8442f",
    deck: "#8b6a4e",
  },
};

export default function Villa({ state, scheme = "villa" }: Props) {
  const p = palettes[state];
  const tired = state === "tired";
  const boardLines = [];
  for (let y = 214; y < 400; y += 12) boardLines.push(y);
  const pickets = [];
  for (let x = 30; x < 780; x += 22) {
    if (x > 440 && x < 520) continue; // gate gap
    pickets.push(x);
  }

  return (
    <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" preserveAspectRatio="xMidYMax slice">
      <defs>
        <linearGradient id={`sky-${state}-${scheme}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={p.sky} />
          <stop offset="1" stopColor={p.skyLow} />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill={`url(#sky-${state}-${scheme})`} />

      {/* sun or gloomy cloud */}
      {tired ? (
        <g fill="#b3b7bb">
          <ellipse cx="640" cy="70" rx="70" ry="24" />
          <ellipse cx="600" cy="60" rx="40" ry="22" />
          <ellipse cx="160" cy="90" rx="60" ry="18" />
        </g>
      ) : (
        <g>
          <circle cx="680" cy="70" r="34" fill="#ffd54a" />
          <g stroke="#ffd54a" strokeWidth="5" strokeLinecap="round">
            <line x1="680" y1="18" x2="680" y2="6" />
            <line x1="732" y1="70" x2="744" y2="70" />
            <line x1="717" y1="33" x2="726" y2="24" />
            <line x1="643" y1="33" x2="634" y2="24" />
            <line x1="717" y1="107" x2="726" y2="116" />
          </g>
          <g fill="#ffffff" opacity="0.9">
            <ellipse cx="170" cy="80" rx="52" ry="16" />
            <ellipse cx="205" cy="70" rx="30" ry="16" />
          </g>
        </g>
      )}

      {/* Port Hills */}
      <path d="M0 330 C120 260 220 280 320 300 C430 240 560 250 800 300 L800 420 L0 420 Z" fill={p.hills} />

      {/* ground */}
      <rect x="0" y="400" width="800" height="100" fill={p.grass} />

      {scheme === "subdivision" && (
        <g>
          {/* second home at the back of the section */}
          <rect x="660" y="300" width="120" height="100" fill={tired ? p.grass : "#e9e1d2"} opacity={tired ? 0 : 1} />
          {!tired && <polygon points="650,302 720,256 790,302" fill="#3b4552" />}
          {!tired && <rect x="705" y="340" width="26" height="60" fill={p.door} />}
          {tired && (
            <g stroke="#e8e2d4" strokeWidth="3" strokeDasharray="10 8" fill="none">
              <rect x="660" y="300" width="120" height="100" />
            </g>
          )}
        </g>
      )}

      {/* chimney */}
      <rect x="560" y="104" width="30" height="60" fill={p.chimney} />
      <rect x="555" y="98" width="40" height="10" fill={p.roofLine} />

      {/* main roof */}
      <polygon points="330,232 372,148 628,148 668,232" fill={p.roof} />
      {[392, 422, 452, 482, 512, 542, 572, 602].map((x) => (
        <line key={x} x1={x} y1="150" x2={x + (x - 500) * 0.15} y2="230" stroke={p.roofLine} strokeWidth="2" opacity="0.6" />
      ))}
      {tired && (
        <g fill="#5c3a26" opacity="0.7">
          <path d="M430 160 l6 0 l4 60 l-8 0 z" />
          <path d="M540 170 l5 0 l3 50 l-7 0 z" />
          <rect x="470" y="180" width="26" height="14" fill="#a3a09a" />
        </g>
      )}

      {/* main body */}
      <rect x="320" y="214" width="320" height="186" fill={p.boards} />
      {boardLines.map((y) => (
        <line key={y} x1="320" y1={y} x2="640" y2={y} stroke={p.boardLine} strokeWidth="1.5" />
      ))}

      {/* front bay with gable */}
      <rect x="178" y="200" width="164" height="200" fill={p.boards} />
      {boardLines.map((y) => (
        <line key={`b${y}`} x1="178" y1={y} x2="342" y2={y} stroke={p.boardLine} strokeWidth="1.5" />
      ))}
      <polygon points="162,206 260,118 358,206" fill={p.roof} />
      <polygon points="186,200 260,134 334,200" fill={p.boards} />
      <polygon points="186,200 260,134 334,200" fill="none" stroke={p.trim} strokeWidth="5" />
      {/* gable finial and fretwork */}
      <line x1="260" y1="134" x2="260" y2="104" stroke={p.trim} strokeWidth="5" />
      <circle cx="260" cy="168" r="10" fill="none" stroke={p.trim} strokeWidth="4" />

      {/* bay window */}
      <rect x="200" y="252" width="120" height="104" fill={p.trim} />
      <rect x="208" y="260" width="32" height="88" fill={p.glass} />
      <rect x="244" y="260" width="32" height="88" fill={p.glass} />
      <rect x="280" y="260" width="32" height="88" fill={p.glass} />
      <rect x="196" y="352" width="128" height="10" fill={p.trim} />
      {tired ? (
        <g>
          {/* boarded and cracked */}
          <rect x="242" y="270" width="40" height="10" fill="#8a7a62" transform="rotate(-12 262 275)" />
          <rect x="240" y="312" width="40" height="10" fill="#8a7a62" transform="rotate(10 260 317)" />
          <path d="M214 270 l12 22 l-6 14 l10 20" stroke="#4c5559" strokeWidth="2" fill="none" />
        </g>
      ) : (
        <g>
          <rect x="204" y="358" width="112" height="14" rx="4" fill="#7a4b2f" />
          {[214, 232, 252, 272, 292, 308].map((x, i) => (
            <circle key={x} cx={x} cy="356" r="7" fill={i % 2 ? "#f4b43a" : "#e8566b"} />
          ))}
        </g>
      )}

      {/* verandah roof (bullnose) */}
      <path d="M342 262 Q342 244 362 244 L640 244 L640 268 L342 268 Z" fill={tired ? "#7b6f62" : "#4a5563"} />
      {/* fretwork between posts */}
      {[362, 452, 542].map((x) => (
        <path key={x} d={`M${x} 268 h88 M${x + 4} 268 q10 14 20 0 q10 14 20 0 q10 14 20 0 q10 14 20 0`} stroke={p.trim} strokeWidth="3" fill="none" />
      ))}
      {/* posts */}
      {[360, 450, 540, 632].map((x, i) => (
        <rect
          key={x}
          x={x - 4}
          y="268"
          width="8"
          height="132"
          fill={p.trim}
          transform={tired && i === 2 ? `rotate(4 ${x} 400)` : undefined}
        />
      ))}

      {/* windows on verandah */}
      {[384, 566].map((x) => (
        <g key={x}>
          <rect x={x} y="296" width="52" height="76" fill={p.trim} />
          <rect x={x + 6} y="302" width="40" height="30" fill={p.glass} />
          <rect x={x + 6} y="336" width="40" height="30" fill={p.glass} />
        </g>
      ))}
      {tired && <path d="M572 304 l14 18 l-4 10 l12 14" stroke="#4c5559" strokeWidth="2" fill="none" />}

      {/* front door with fanlight */}
      <rect x="474" y="290" width="48" height="110" fill={p.trim} />
      <rect x="480" y="306" width="36" height="94" fill={p.door} />
      <path d="M480 304 a18 12 0 0 1 36 0 z" fill={p.glass} />
      <circle cx="510" cy="356" r="3" fill={tired ? "#3d3a35" : "#f4b43a"} />

      {/* deck and steps */}
      <rect x="342" y="396" width="298" height="10" fill={p.deck} />
      <rect x="470" y="406" width="56" height="8" fill={p.deck} />
      <rect x="464" y="414" width="68" height="8" fill={p.deck} />

      {/* peeling paint patches */}
      {tired && (
        <g fill="#8c8473">
          <path d="M350 230 q20 -6 34 6 q-6 14 -24 12 z" />
          <path d="M600 320 q18 -4 26 8 q-10 12 -26 6 z" />
          <path d="M190 220 q14 -2 22 8 q-8 10 -22 4 z" />
          <path d="M300 372 q16 -6 28 4 q-6 12 -24 10 z" />
          <path d="M420 384 q12 -6 22 2 q-6 10 -20 8 z" />
        </g>
      )}
      {/* sagging gutter */}
      {tired && <path d="M330 234 Q420 248 520 236 L668 234" stroke="#6d6253" strokeWidth="5" fill="none" />}

      {/* path */}
      <polygon points="470,422 526,422 560,500 436,500" fill={p.path} />

      {/* tree on the left */}
      <rect x="82" y="300" width="14" height="110" fill={tired ? "#6b5a48" : "#6d4c33"} />
      {tired ? (
        <g stroke="#6b5a48" strokeWidth="5" strokeLinecap="round" fill="none">
          <path d="M89 320 l-30 -40 M89 310 l26 -46 M75 300 l-12 -30 M104 290 l18 -12" />
          <circle cx="60" cy="282" r="10" fill="#8d8b5b" stroke="none" />
          <circle cx="116" cy="268" r="8" fill="#8d8b5b" stroke="none" />
        </g>
      ) : (
        <g>
          <circle cx="89" cy="282" r="54" fill="#3f8a3a" />
          <circle cx="60" cy="300" r="34" fill="#4c9a43" />
          <circle cx="120" cy="296" r="32" fill="#4c9a43" />
          {[
            [70, 270],
            [104, 262],
            [86, 300],
            [124, 292],
            [56, 304],
            [96, 238],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill="#ffd54a" />
          ))}
        </g>
      )}

      {/* picket fence */}
      <rect x="24" y="428" width="420" height="6" fill={p.fence} />
      <rect x="520" y="428" width="262" height="6" fill={p.fence} />
      {pickets.map((x, i) => {
        if (tired && (i === 4 || i === 15 || i === 26)) return null; // missing pickets
        const lean = tired && i % 5 === 2 ? `rotate(${i % 2 ? 9 : -8} ${x + 6} 470)` : undefined;
        return (
          <path
            key={x}
            d={`M${x} 470 L${x} 418 L${x + 6} 410 L${x + 12} 418 L${x + 12} 470 Z`}
            fill={p.fence}
            transform={lean}
          />
        );
      })}

      {/* grass and weeds in front */}
      <rect x="0" y="470" width="800" height="30" fill={p.grassDark} />
      {tired ? (
        <g stroke="#7e7d48" strokeWidth="3" strokeLinecap="round">
          {[40, 130, 210, 300, 380, 580, 660, 740].map((x) => (
            <path key={x} d={`M${x} 472 l-6 -34 M${x + 6} 472 l4 -42 M${x + 12} 472 l10 -30`} />
          ))}
        </g>
      ) : (
        <g>
          {[40, 120, 200, 280, 360, 590, 670, 750].map((x, i) => (
            <g key={x}>
              <line x1={x} y1="474" x2={x} y2="454" stroke="#3f7f2f" strokeWidth="3" />
              <circle cx={x} cy="450" r="7" fill={["#e8566b", "#f4b43a", "#ffffff", "#b07bd8"][i % 4]} />
            </g>
          ))}
        </g>
      )}

      {/* letterbox */}
      <rect x="742" y="440" width="6" height="40" fill={tired ? "#6b5a48" : "#5a4636"} />
      <rect x="728" y="420" width="34" height="24" rx="4" fill={tired ? "#8f8476" : "#c8432b"} transform={tired ? "rotate(-10 745 432)" : undefined} />

      {/* sign */}
      {tired ? (
        <g transform="rotate(-6 640 440)">
          <rect x="636" y="430" width="6" height="50" fill="#6b5a48" />
          <rect x="600" y="404" width="80" height="34" fill="#e8e2d4" stroke="#8f8476" strokeWidth="2" />
          <text x="640" y="426" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" fontSize="13" fill="#6d6253">AS IS?</text>
        </g>
      ) : (
        <g>
          <rect x="636" y="430" width="6" height="50" fill="#5a4636" />
          <rect x="596" y="400" width="88" height="36" rx="6" fill="#1c2534" />
          <text x="640" y="423" textAnchor="middle" fontFamily="sans-serif" fontWeight="800" fontSize="13" fill="#f4b43a">LOVED AGAIN</text>
        </g>
      )}
    </svg>
  );
}
