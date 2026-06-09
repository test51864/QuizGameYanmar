import React, { useEffect, useState } from "react";

const questionBank = {
  en: [
    {
      id: 1,
      question: "Where does Yanmar come from?",
      answers: ["Japan", "USA", "Germany"],
      correct: 0,
      fact: "Yanmar was founded in Japan.",
    },
    {
      id: 2,
      question: "No power on site?",
      answers: ["Generator", "Tractor", "Boat"],
      correct: 0,
      fact: "Generators provide power when electricity is unavailable.",
    },
    {
      id: 3,
      question: "Compact tractor power?",
      answers: ["10 hp", "25–50 hp", "200 hp"],
      correct: 1,
      fact: "Compact tractors balance size and power.",
    },
    {
      id: 4,
      question: "What does a pump do?",
      answers: ["Move water", "Make energy", "Cool air"],
      correct: 0,
      fact: "Pumps move water in real situations.",
    },
    {
      id: 5,
      question: "Where is a Yanmar marine engine used?",
      answers: ["Boat", "Car", "Train"],
      correct: 0,
      fact: "Marine engines are used in boats.",
    },
  ],
  nl: [
    {
      id: 1,
      question: "Waar komt Yanmar vandaan?",
      answers: ["Japan", "VS", "Duitsland"],
      correct: 0,
      fact: "Yanmar is opgericht in Japan.",
    },
    {
      id: 2,
      question: "Geen stroom op locatie?",
      answers: ["Generator", "Tractor", "Boot"],
      correct: 0,
      fact: "Generatoren leveren stroom als er geen elektriciteit is.",
    },
    {
      id: 3,
      question: "Hoeveel vermogen heeft een compacte tractor ongeveer?",
      answers: ["10 pk", "25–50 pk", "200 pk"],
      correct: 1,
      fact: "Compacte tractors combineren formaat en kracht.",
    },
    {
      id: 4,
      question: "Wat doet een pomp?",
      answers: ["Water verplaatsen", "Energie maken", "Lucht koelen"],
      correct: 0,
      fact: "Pompen verplaatsen water in praktijksituaties.",
    },
    {
      id: 5,
      question: "Waar gebruik je een Yanmar marine engine?",
      answers: ["Boot", "Auto", "Trein"],
      correct: 0,
      fact: "Marine engines worden gebruikt in boten.",
    },
  ],
};

const copy = {
  en: {
    title: "Yanmar Power League",
    chooseLanguage: "Choose your language",
    chooseTeam: "Choose your team",
    languageIntro: "Select a language to begin.",
    teamIntro: "Choose a team before the match starts.",
    teamNetherlands: "Team Netherlands",
    teamJapan: "Team Japan",
    start: "Start Match",
    back: "Back",
    intro:
      "Score goals, test your Yanmar knowledge, and finish with a chance to win an awesome prize.",
    goals: "Goals",
    round: "Round",
    goalText: "GOAL!",
    saveText: "SAVED!",
    missText: "MISS!",
    correctText: "Correct answer!",
    wrongText: "Wrong answer!",
    next: "Next Round",
    finish: "Finish Match",
    complete: "Penalty Shootout Complete",
    score: "Score",
    prizeTitle: "Win an awesome prize 🎁",
    prizeText: "Leave your email address below for a chance to win.",
    emailPlaceholder: "Enter your email address",
    emailError1: "Please enter your email address.",
    emailError2: "Please enter a valid email address.",
    prizeBtn: "Enter Prize Draw",
    thanks: "You're in! ✅",
    thanksSub: "Thanks for joining the prize draw.",
    playAgain: "Play Again",
    changeLanguage: "Change language",
    changeTeam: "Change team",
    perfect: "Perfect striker!",
    solid: "Strong performance!",
    nice: "Nice effort!",
  },
  nl: {
    title: "Yanmar Power League",
    chooseLanguage: "Kies je taal",
    chooseTeam: "Kies je team",
    languageIntro: "Selecteer eerst een taal om te beginnen.",
    teamIntro: "Kies daarna een team voordat de wedstrijd start.",
    teamNetherlands: "Team Netherlands",
    teamJapan: "Team Japan",
    start: "Start wedstrijd",
    back: "Terug",
    intro:
      "Scoor goals, test je Yanmar-kennis en maak daarna kans op een te gekke prijs.",
    goals: "Goals",
    round: "Ronde",
    goalText: "GOAL!",
    saveText: "GEPAKT!",
    missText: "MIS!",
    correctText: "Goed antwoord!",
    wrongText: "Fout antwoord!",
    next: "Volgende ronde",
    finish: "Wedstrijd afronden",
    complete: "Penalty Shootout klaar",
    score: "Score",
    prizeTitle: "Win een te gekke prijs 🎁",
    prizeText:
      "Laat hieronder je e-mailadres achter en maak kans om te winnen.",
    emailPlaceholder: "Vul je e-mailadres in",
    emailError1: "Vul je e-mailadres in.",
    emailError2: "Vul een geldig e-mailadres in.",
    prizeBtn: "Doe mee aan de winactie",
    thanks: "Je doet mee! ✅",
    thanksSub: "Bedankt voor het meedoen aan de winactie.",
    playAgain: "Speel opnieuw",
    changeLanguage: "Taal wijzigen",
    changeTeam: "Team wijzigen",
    perfect: "Perfecte spits!",
    solid: "Sterke score!",
    nice: "Netjes gedaan!",
  },
};

function GlobalStyles() {
  return (
    <style>{`
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        background: #0f172a;
      }

      button, input {
        font-family: inherit;
      }

      .app-shell {
        min-height: 100vh;
        background:
          radial-gradient(circle at top, #38bdf8 0%, #0f172a 38%, #166534 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        padding: 24px;
      }

      .main-card {
        width: 100%;
        max-width: 980px;
        padding: 30px;
        border-radius: 28px;
        background: rgba(255,255,255,0.12);
        backdrop-filter: blur(14px);
        box-shadow: 0 24px 50px rgba(0,0,0,0.35);
        text-align: center;
        border: 1px solid rgba(255,255,255,0.16);
        transition: opacity 0.2s ease, transform 0.2s ease;
      }

      .main-card.fading {
        opacity: 0.75;
        transform: scale(0.995);
      }

      .yanmar-logo {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        color: #e6002d;
        font-weight: 900;
        font-style: italic;
        letter-spacing: 2px;
        font-size: 64px;
        line-height: 1;
        text-transform: uppercase;
        text-shadow: 0 6px 16px rgba(0,0,0,0.18);
      }

      .glass-button {
        padding: 14px 22px;
        border-radius: 14px;
        border: 1px solid rgba(255,255,255,0.25);
        background: rgba(255,255,255,0.08);
        color: white;
        cursor: pointer;
        font-weight: 700;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
        box-shadow: 0 10px 20px rgba(0,0,0,0.16);
      }

      .glass-button:hover {
        transform: translateY(-1px);
        box-shadow: 0 16px 24px rgba(0,0,0,0.2);
      }

      .start-button,
      .prize-button {
        padding: 16px 26px;
        border-radius: 16px;
        border: none;
        font-weight: 800;
        font-size: 16px;
        cursor: pointer;
        background: linear-gradient(180deg, #fef08a, #facc15);
        color: #0f172a;
        box-shadow: 0 14px 24px rgba(0,0,0,0.25);
        transition: transform 0.15s ease;
      }

      .start-button:active,
      .prize-button:active {
        transform: scale(0.98);
      }

      .select-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 20px;
        max-width: 720px;
        margin: 0 auto 24px auto;
      }

      .select-card {
        width: 100%;
        padding: 16px;
        border-radius: 26px;
        border: 1px solid rgba(255,255,255,0.18);
        background: linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06));
        color: white;
        cursor: pointer;
        box-shadow: 0 18px 36px rgba(0,0,0,0.22);
        backdrop-filter: blur(10px);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .select-card:hover {
        transform: translateY(-2px) scale(1.01);
        box-shadow: 0 24px 42px rgba(0,0,0,0.26);
      }

      .select-visual {
        width: 100%;
        height: 140px;
        border-radius: 18px;
        margin-bottom: 16px;
        overflow: hidden;
        position: relative;
        box-shadow: inset 0 0 0 1px rgba(255,255,255,0.18);
      }

      .select-title {
        font-size: 22px;
        font-weight: 800;
        letter-spacing: 0.2px;
      }

      .top-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
        margin-top: 18px;
        margin-bottom: 18px;
      }

      .pill {
        padding: 8px 14px;
        border-radius: 999px;
        font-weight: 700;
        box-shadow: 0 10px 20px rgba(0,0,0,0.12);
        background: rgba(255,255,255,0.14);
      }

      .score-pill.bump {
        transform: scale(1.06);
        box-shadow: 0 0 0 8px rgba(250,204,21,0.12);
      }

      .question-title {
        font-size: 34px;
        margin-bottom: 18px;
      }

      .arena {
        margin: 20px auto;
        width: 100%;
        height: 330px;
        border-radius: 26px;
        background:
          linear-gradient(180deg, #93c5fd 0%, #86efac 30%, #166534 100%);
        position: relative;
        overflow: hidden;
        box-shadow:
          inset 0 18px 30px rgba(255,255,255,0.18),
          inset 0 -14px 22px rgba(0,0,0,0.18);
      }

      .stadium {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 76px;
        background: linear-gradient(180deg, #0f172a, #1e293b);
      }

      .goal {
        position: absolute;
        top: 32px;
        left: 50%;
        transform: translateX(-50%);
        width: 270px;
        height: 130px;
        border: 7px solid white;
        border-bottom: none;
        border-radius: 18px 18px 0 0;
        background:
          repeating-linear-gradient(90deg, rgba(255,255,255,0.28) 0 10px, rgba(255,255,255,0.07) 10px 20px),
          repeating-linear-gradient(0deg, rgba(255,255,255,0.15) 0 10px, transparent 10px 20px);
        box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
        z-index: 2;
      }

      .goal.shake {
        animation: netShake 0.55s ease 0.72s both;
        box-shadow: 0 0 28px rgba(255,255,255,0.4);
      }

      .goal-line {
        position: absolute;
        top: 162px;
        left: 50%;
        transform: translateX(-50%);
        width: 290px;
        height: 6px;
        background: white;
        border-radius: 999px;
        z-index: 3;
      }

      .result-banner {
        position: absolute;
        top: 86px;
        left: 50%;
        transform: translateX(-50%) scale(0.7);
        opacity: 0;
        z-index: 30;
        padding: 12px 22px;
        border-radius: 999px;
        background: rgba(255,255,255,0.98);
        color: #0f172a;
        font-size: 38px;
        font-weight: 1000;
        letter-spacing: 1px;
        text-transform: uppercase;
        box-shadow: 0 12px 26px rgba(0,0,0,0.25);
        pointer-events: none;
        white-space: nowrap;
      }

      .result-banner.show {
        animation: bannerPop 0.42s ease forwards;
      }

      .result-banner.goal {
        color: #16a34a;
      }

      .result-banner.save,
      .result-banner.miss {
        color: #dc2626;
      }

      .keeper {
        position: absolute;
        top: 138px;
        left: 50%;
        transform: translateX(-50%);
        width: 78px;
        height: 88px;
        z-index: 15;
        transition: transform 0.45s ease;
      }

      .keeper-head {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background: #f2c9a5;
        margin: 0 auto -2px;
        border: 3px solid #0f172a;
      }

      .keeper-body {
        width: 54px;
        height: 48px;
        background: #2563eb;
        border: 4px solid #0f172a;
        border-radius: 14px;
        margin: 0 auto;
        position: relative;
      }

      .keeper-body:before,
      .keeper-body:after {
        content: "";
        position: absolute;
        top: 8px;
        width: 36px;
        height: 11px;
        background: #2563eb;
        border: 3px solid #0f172a;
        border-radius: 999px;
      }

      .keeper-body:before {
        left: -36px;
        transform: rotate(-22deg);
      }

      .keeper-body:after {
        right: -36px;
        transform: rotate(22deg);
      }

      .keeper-legs {
        width: 60px;
        height: 26px;
        margin: 0 auto;
        position: relative;
      }

      .keeper-legs:before,
      .keeper-legs:after {
        content: "";
        position: absolute;
        top: -2px;
        width: 12px;
        height: 30px;
        background: #0f172a;
        border-radius: 999px;
      }

      .keeper-legs:before {
        left: 14px;
        transform: rotate(14deg);
      }

      .keeper-legs:after {
        right: 14px;
        transform: rotate(-14deg);
      }

      .keeper.goal {
        transform: translateX(-145%) rotate(-32deg);
      }

      .keeper.save {
        transform: translateX(-50%) translateY(-22px) scale(1.14);
      }

      .keeper.miss {
        transform: translateX(-140%) rotate(-28deg);
      }

      .ball {
        position: absolute;
        left: 50%;
        bottom: 34px;
        width: 48px;
        height: 48px;
        margin-left: -24px;
        border-radius: 50%;
        background:
          radial-gradient(circle at 35% 32%, #ffffff 0 24%, transparent 25%),
          radial-gradient(circle at 62% 62%, #0f172a 0 16%, transparent 17%),
          radial-gradient(circle at 30% 72%, #0f172a 0 12%, transparent 13%),
          white;
        border: 4px solid #0f172a;
        z-index: 22;
        box-shadow: 0 10px 18px rgba(0,0,0,0.28);
      }

      .ball.goal {
        animation: ballGoal 1.05s cubic-bezier(.2,.7,.2,1) forwards;
      }

      .ball.save {
        animation: ballSave 1.05s cubic-bezier(.2,.7,.2,1) forwards;
      }

      .ball.miss {
        animation: ballMiss 1.05s cubic-bezier(.2,.7,.2,1) forwards;
      }

      .shot-line {
        position: absolute;
        left: 50%;
        bottom: 58px;
        width: 5px;
        height: 0;
        background: rgba(255,255,255,0.75);
        transform-origin: bottom;
        z-index: 10;
        opacity: 0;
        border-radius: 999px;
      }

      .shot-line.goal {
        height: 218px;
        transform: rotate(24deg);
        animation: lineShow 0.45s ease forwards;
      }

      .shot-line.save {
        height: 132px;
        transform: rotate(0deg);
        animation: lineShow 0.45s ease forwards;
      }

      .shot-line.miss {
        height: 255px;
        transform: rotate(48deg);
        animation: lineShow 0.45s ease forwards;
      }

      .confetti {
        position: absolute;
        inset: 0;
        pointer-events: none;
        display: none;
        z-index: 35;
      }

      .confetti.show {
        display: block;
      }

      .confetti span {
        position: absolute;
        top: -20px;
        width: 10px;
        height: 18px;
        background: #facc15;
        animation: confettiFall 1.2s ease forwards;
      }

      .confetti span:nth-child(1) { left: 12%; animation-delay: 0.05s; background: #facc15; }
      .confetti span:nth-child(2) { left: 24%; animation-delay: 0.12s; background: #22c55e; }
      .confetti span:nth-child(3) { left: 37%; animation-delay: 0.02s; background: #ffffff; }
      .confetti span:nth-child(4) { left: 51%; animation-delay: 0.16s; background: #ef4444; }
      .confetti span:nth-child(5) { left: 63%; animation-delay: 0.08s; background: #facc15; }
      .confetti span:nth-child(6) { left: 76%; animation-delay: 0.18s; background: #22c55e; }
      .confetti span:nth-child(7) { left: 88%; animation-delay: 0.10s; background: #ffffff; }

      .answer-grid {
        display: grid;
        gap: 12px;
        max-width: 720px;
        margin: 0 auto;
      }

      .answer-button {
        display: block;
        width: 100%;
        margin: 0 auto;
        padding: 15px 18px;
        border-radius: 16px;
        background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.88));
        color: #0f172a;
        font-weight: 800;
        font-size: 16px;
        cursor: pointer;
        border: 2px solid rgba(255,255,255,0.6);
        box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease, border-color 0.15s ease;
      }

      .answer-button:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 14px 24px rgba(0,0,0,0.2);
      }

      .answer-button:disabled {
        cursor: not-allowed;
      }

      .answer-button.correct {
        background: linear-gradient(180deg, #dcfce7, #bbf7d0);
        border-color: #22c55e;
        color: #14532d;
      }

      .answer-button.wrong {
        background: linear-gradient(180deg, #fee2e2, #fecaca);
        border-color: #ef4444;
        color: #7f1d1d;
      }

      .feedback-box {
        margin: 18px auto 0 auto;
        padding: 14px 16px;
        border-radius: 18px;
        max-width: 720px;
        background: rgba(255,255,255,0.13);
        border: 1px solid rgba(255,255,255,0.17);
      }

      .feedback-title {
        font-size: 21px;
        font-weight: 900;
        margin-bottom: 6px;
      }

      .feedback-title.goal {
        color: #bbf7d0;
      }

      .feedback-title.save,
      .feedback-title.miss {
        color: #fecaca;
      }

      .next-button {
        margin-top: 16px;
        padding: 14px 22px;
        border-radius: 16px;
        border: none;
        cursor: pointer;
        font-weight: 900;
        font-size: 16px;
        background: linear-gradient(180deg, #fef08a, #facc15);
        color: #0f172a;
        box-shadow: 0 14px 24px rgba(0,0,0,0.25);
      }

      .email-input {
        width: 100%;
        padding: 16px 18px;
        border-radius: 16px;
        border: 1px solid rgba(255,255,255,0.35);
        outline: none;
        font-size: 16px;
        background: rgba(255,255,255,0.96);
        color: #0f172a;
        box-shadow: 0 10px 20px rgba(0,0,0,0.15);
      }

      .result-label {
        display: inline-block;
        margin-top: 6px;
        padding: 10px 16px;
        border-radius: 999px;
        background: rgba(255,255,255,0.12);
        border: 1px solid rgba(255,255,255,0.18);
        font-weight: 800;
        letter-spacing: 0.2px;
      }

      @keyframes bannerPop {
        0% {
          opacity: 0;
          transform: translateX(-50%) scale(0.7);
        }
        70% {
          opacity: 1;
          transform: translateX(-50%) scale(1.08);
        }
        100% {
          opacity: 1;
          transform: translateX(-50%) scale(1);
        }
      }

      @keyframes ballGoal {
        0% {
          left: 50%;
          bottom: 34px;
          transform: scale(1) rotate(0deg);
        }
        65% {
          left: 64%;
          bottom: 198px;
          transform: scale(0.78) rotate(540deg);
        }
        100% {
          left: 69%;
          bottom: 245px;
          transform: scale(0.56) rotate(920deg);
        }
      }

      @keyframes ballSave {
        0% {
          left: 50%;
          bottom: 34px;
          transform: scale(1) rotate(0deg);
        }
        72% {
          left: 50%;
          bottom: 164px;
          transform: scale(0.82) rotate(520deg);
        }
        100% {
          left: 50%;
          bottom: 150px;
          transform: scale(0.82) rotate(580deg);
        }
      }

      @keyframes ballMiss {
        0% {
          left: 50%;
          bottom: 34px;
          transform: scale(1) rotate(0deg);
        }
        70% {
          left: 90%;
          bottom: 210px;
          transform: scale(0.75) rotate(560deg);
        }
        100% {
          left: 109%;
          bottom: 255px;
          transform: scale(0.62) rotate(920deg);
        }
      }

      @keyframes netShake {
        0%, 100% {
          transform: translateX(-50%);
        }
        20% {
          transform: translateX(calc(-50% - 8px));
        }
        40% {
          transform: translateX(calc(-50% + 8px));
        }
        60% {
          transform: translateX(calc(-50% - 5px));
        }
        80% {
          transform: translateX(calc(-50% + 5px));
        }
      }

      @keyframes lineShow {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 0.55;
        }
      }

      @keyframes confettiFall {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(330px) rotate(420deg);
          opacity: 0;
        }
      }

      @media (max-width: 760px) {
        .app-shell {
          padding: 10px;
          align-items: flex-start;
        }

        .main-card {
          padding: 18px;
          border-radius: 22px;
        }

        .yanmar-logo {
          font-size: 44px;
        }

        .main-card h1 {
          font-size: 34px !important;
        }

        .question-title {
          font-size: 26px;
          line-height: 1.15;
        }

        .top-row {
          justify-content: center;
        }

        .pill {
          font-size: 14px;
        }

        .arena {
          height: 310px;
          border-radius: 20px;
        }

        .goal {
          width: 230px;
          height: 118px;
          top: 32px;
        }

        .goal-line {
          top: 150px;
          width: 246px;
        }

        .keeper {
          top: 126px;
          width: 68px;
          height: 80px;
        }

        .ball {
          width: 54px;
          height: 54px;
          margin-left: -27px;
          bottom: 26px;
        }

        .result-banner {
          top: 78px;
          font-size: 31px;
          padding: 10px 18px;
        }

        .answer-button {
          font-size: 15px;
          padding: 14px 15px;
        }

        @keyframes ballGoal {
          0% {
            left: 50%;
            bottom: 26px;
            transform: scale(1) rotate(0deg);
          }
          65% {
            left: 63%;
            bottom: 175px;
            transform: scale(0.78) rotate(540deg);
          }
          100% {
            left: 68%;
            bottom: 215px;
            transform: scale(0.56) rotate(920deg);
          }
        }

        @keyframes ballSave {
          0% {
            left: 50%;
            bottom: 26px;
            transform: scale(1) rotate(0deg);
          }
          72% {
            left: 50%;
            bottom: 142px;
            transform: scale(0.82) rotate(520deg);
          }
          100% {
            left: 50%;
            bottom: 130px;
            transform: scale(0.82) rotate(580deg);
          }
        }

        @keyframes ballMiss {
          0% {
            left: 50%;
            bottom: 26px;
            transform: scale(1) rotate(0deg);
          }
          70% {
            left: 91%;
            bottom: 185px;
            transform: scale(0.75) rotate(560deg);
          }
          100% {
            left: 112%;
            bottom: 228px;
            transform: scale(0.62) rotate(920deg);
          }
        }
      }
    `}</style>
  );
}

function YanmarLogo() {
  return <div className="yanmar-logo">YANMAR</div>;
}

function GlassButton({ children, onClick, style = {} }) {
  return (
    <button className="glass-button" onClick={onClick} style={style}>
      {children}
    </button>
  );
}

function SelectCard({ onClick, title, children }) {
  return (
    <button className="select-card" onClick={onClick}>
      <div className="select-visual">{children}</div>
      <div className="select-title">{title}</div>
    </button>
  );
}

function NLFlag() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{ height: "33.33%", background: "#AE1C28" }} />
      <div style={{ height: "33.33%", background: "#FFFFFF" }} />
      <div style={{ height: "33.33%", background: "#21468B" }} />
    </div>
  );
}

function UKFlag() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: "#012169",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "160%",
          height: "18px",
          background: "white",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(35deg)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "160%",
          height: "18px",
          background: "white",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(-35deg)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "160%",
          height: "8px",
          background: "#C8102E",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(35deg)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "160%",
          height: "8px",
          background: "#C8102E",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(-35deg)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "50%",
          height: "30px",
          background: "white",
          transform: "translateY(-50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          width: "30px",
          background: "white",
          transform: "translateX(-50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "50%",
          height: "14px",
          background: "#C8102E",
          transform: "translateY(-50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          width: "14px",
          background: "#C8102E",
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
}

function ResultLabel({ score, total, t }) {
  let text = t.nice;
  if (score === total) text = t.perfect;
  else if (score >= Math.ceil(total * 0.6)) text = t.solid;

  return <div className="result-label">{text}</div>;
}

function PenaltyArena({ shotState, shotKey, t }) {
  const isGoal = shotState === "goal";
  const isSave = shotState === "save";
  const isMiss = shotState === "miss";
  const active = shotState !== "idle";

  const bannerText = isGoal
    ? t.goalText
    : isSave
    ? t.saveText
    : isMiss
    ? t.missText
    : "";

  return (
    <div className="arena">
      <div className="stadium" />

      <div className={isGoal ? "goal shake" : "goal"} />
      <div className="goal-line" />

      <div
        className={`result-banner ${active ? "show" : ""} ${
          active ? shotState : ""
        }`}
      >
        {bannerText}
      </div>

      <div className={`confetti ${isGoal ? "show" : ""}`}>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className={`keeper ${active ? shotState : ""}`}>
        <div className="keeper-head" />
        <div className="keeper-body" />
        <div className="keeper-legs" />
      </div>

      <div
        key={`line-${shotKey}`}
        className={`shot-line ${active ? shotState : ""}`}
      />

      <div
        key={`ball-${shotKey}`}
        className={`ball ${active ? shotState : ""}`}
      />
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState(null);
  const [team, setTeam] = useState(null);
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [displayScore, setDisplayScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [shotState, setShotState] = useState("idle");
  const [shotKey, setShotKey] = useState(0);
  const [screenFading, setScreenFading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  const lang = language || "en";
  const t = copy[lang];
  const questions = questionBank[lang];
  const q = questions[current];
  const isLastQuestion = current === questions.length - 1;

  useEffect(() => {
    if (displayScore === score) return;

    const timeout = setTimeout(() => {
      setDisplayScore((prev) => (prev < score ? prev + 1 : score));
    }, 140);

    return () => clearTimeout(timeout);
  }, [displayScore, score]);

  function resetGameState() {
    setStarted(false);
    setCurrent(0);
    setScore(0);
    setDisplayScore(0);
    setSelected(null);
    setShowFeedback(false);
    setShotState("idle");
    setShotKey((k) => k + 1);
    setEmail("");
    setEmailSubmitted(false);
    setEmailError("");
    setScreenFading(false);
  }

  function animateScreenChange(cb) {
    setScreenFading(true);
    setTimeout(() => {
      cb();
      setScreenFading(false);
    }, 180);
  }

  function chooseLanguage(nextLanguage) {
    animateScreenChange(() => {
      resetGameState();
      setLanguage(nextLanguage);
    });
  }

  function chooseTeam(nextTeam) {
    animateScreenChange(() => {
      setStarted(false);
      setCurrent(0);
      setScore(0);
      setDisplayScore(0);
      setSelected(null);
      setShowFeedback(false);
      setShotState("idle");
      setShotKey((k) => k + 1);
      setEmail("");
      setEmailSubmitted(false);
      setEmailError("");
      setScreenFading(false);
      setTeam(nextTeam);
    });
  }

  function handleAnswer(index) {
    if (showFeedback || selected !== null) return;

    setSelected(index);

    const correct = index === q.correct;

    setShotKey((k) => k + 1);

    if (correct) {
      setShotState("goal");
    } else {
      const wrongOutcome = current % 2 === 0 ? "save" : "miss";
      setShotState(wrongOutcome);
    }

    setTimeout(() => {
      if (correct) setScore((s) => s + 1);
      setShowFeedback(true);
    }, 520);
  }

  function next() {
    if (current === questions.length - 1) {
      animateScreenChange(() => setCurrent((c) => c + 1));
      return;
    }

    animateScreenChange(() => {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowFeedback(false);
      setShotState("idle");
      setShotKey((k) => k + 1);
    });
  }

  function restart() {
    animateScreenChange(() => {
      setCurrent(0);
      setScore(0);
      setDisplayScore(0);
      setSelected(null);
      setShowFeedback(false);
      setShotState("idle");
      setShotKey((k) => k + 1);
      setEmail("");
      setEmailSubmitted(false);
      setEmailError("");
    });
  }

  function submitEmail() {
    const trimmed = email.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);

    if (!trimmed) {
      setEmailError(t.emailError1);
      return;
    }

    if (!valid) {
      setEmailError(t.emailError2);
      return;
    }

    const entry = {
      email: trimmed,
      score,
      team,
      language,
      date: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("yanmar_leads") || "[]");
    existing.push(entry);
    localStorage.setItem("yanmar_leads", JSON.stringify(existing));

    console.log("Stored emails:", existing);

    setEmailError("");
    setEmailSubmitted(true);
  }

  function getAnswerClass(index) {
    if (!showFeedback && selected !== index) return "";

    if (showFeedback && index === q.correct) return "correct";
    if (showFeedback && selected === index && index !== q.correct) return "wrong";

    return "";
  }

  function renderLanguageScreen() {
    return (
      <div className="app-shell">
        <div className={`main-card ${screenFading ? "fading" : ""}`}>
          <YanmarLogo />
          <h1 style={{ fontSize: "46px", marginBottom: "8px", marginTop: "18px" }}>
            {copy.en.title}
          </h1>
          <p
            style={{
              fontSize: "18px",
              opacity: 0.95,
              maxWidth: "720px",
              margin: "0 auto 24px auto",
            }}
          >
            {copy.en.languageIntro}
          </p>

          <div style={{ fontSize: "24px", fontWeight: 800, marginBottom: "18px" }}>
            {copy.en.chooseLanguage}
          </div>

          <div className="select-grid">
            <SelectCard onClick={() => chooseLanguage("nl")} title="Nederlands">
              <NLFlag />
            </SelectCard>

            <SelectCard onClick={() => chooseLanguage("en")} title="English">
              <UKFlag />
            </SelectCard>
          </div>
        </div>
      </div>
    );
  }

  function renderTeamScreen() {
    return (
      <div className="app-shell">
        <div className={`main-card ${screenFading ? "fading" : ""}`}>
          <YanmarLogo />
          <h1 style={{ fontSize: "46px", marginBottom: "8px", marginTop: "18px" }}>
            {t.title}
          </h1>

          <p
            style={{
              fontSize: "18px",
              opacity: 0.95,
              maxWidth: "720px",
              margin: "0 auto 24px auto",
            }}
          >
            {t.teamIntro}
          </p>

          <div style={{ fontSize: "24px", fontWeight: 800, marginBottom: "18px" }}>
            {t.chooseTeam}
          </div>

          <div className="select-grid">
            <SelectCard
              onClick={() => chooseTeam("netherlands")}
              title={t.teamNetherlands}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "#ff8c00",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "56px",
                }}
              >
                🇳🇱
              </div>
            </SelectCard>

            <SelectCard onClick={() => chooseTeam("japan")} title={t.teamJapan}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "#0f2747",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "56px",
                }}
              >
                🇯🇵
              </div>
            </SelectCard>
          </div>

          <GlassButton onClick={() => setLanguage(null)}>{t.back}</GlassButton>
        </div>
      </div>
    );
  }

  function renderStartScreen() {
    return (
      <div className="app-shell">
        <div className={`main-card ${screenFading ? "fading" : ""}`}>
          <YanmarLogo />

          <div
            className="pill"
            style={{
              display: "inline-block",
              background: team === "netherlands" ? "#ff8c00" : "#0f2747",
              marginTop: "18px",
            }}
          >
            {team === "netherlands" ? "🇳🇱 Team Netherlands" : "🇯🇵 Team Japan"}
          </div>

          <h1 style={{ fontSize: "46px", marginBottom: "8px", marginTop: "18px" }}>
            {t.title}
          </h1>

          <p
            style={{
              fontSize: "18px",
              opacity: 0.95,
              maxWidth: "720px",
              margin: "0 auto 24px auto",
            }}
          >
            {t.intro}
          </p>

          <button className="start-button" onClick={() => setStarted(true)}>
            {t.start}
          </button>

          <div
            style={{
              marginTop: "18px",
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <GlassButton onClick={() => setLanguage(null)}>
              {t.changeLanguage}
            </GlassButton>

            <GlassButton onClick={() => setTeam(null)}>{t.changeTeam}</GlassButton>
          </div>
        </div>
      </div>
    );
  }

  function renderFinalScreen() {
    return (
      <div className="app-shell">
        <div className={`main-card ${screenFading ? "fading" : ""}`}>
          <YanmarLogo />

          <div
            style={{
              fontSize: "80px",
              marginBottom: "10px",
              marginTop: "18px",
            }}
          >
            🏆
          </div>

          <h1 style={{ fontSize: "42px", marginBottom: "6px" }}>
            {t.complete}
          </h1>

          <h2
            style={{
              marginTop: 0,
              color: "#fef08a",
              fontSize: "48px",
              fontWeight: 900,
            }}
          >
            {t.score}: {score}/{questions.length}
          </h2>

          <ResultLabel score={score} total={questions.length} t={t} />

          <div
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "999px",
              margin: "20px auto",
              boxShadow:
                "0 0 0 20px rgba(250,204,21,0.08), 0 0 60px rgba(250,204,21,0.2)",
            }}
          />

          {!emailSubmitted ? (
            <div style={{ maxWidth: "560px", margin: "20px auto 0 auto" }}>
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  marginBottom: "10px",
                }}
              >
                {t.prizeTitle}
              </div>

              <p style={{ opacity: 0.96, marginBottom: "16px" }}>
                {t.prizeText}
              </p>

              <input
                className="email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
              />

              {emailError ? (
                <div
                  style={{
                    color: "#fecaca",
                    marginTop: "10px",
                    fontWeight: 700,
                  }}
                >
                  {emailError}
                </div>
              ) : null}

              <button
                className="prize-button"
                onClick={submitEmail}
                style={{ marginTop: "16px", width: "100%" }}
              >
                {t.prizeBtn}
              </button>
            </div>
          ) : (
            <div style={{ marginTop: "20px" }}>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: 800,
                  color: "#bbf7d0",
                }}
              >
                {t.thanks}
              </div>
              <p style={{ opacity: 0.96 }}>{t.thanksSub}</p>
            </div>
          )}

          <GlassButton onClick={restart} style={{ marginTop: "24px" }}>
            {t.playAgain}
          </GlassButton>
        </div>
      </div>
    );
  }

  function renderGameScreen() {
    const currentOutcome =
      shotState === "goal"
        ? t.goalText
        : shotState === "save"
        ? t.saveText
        : shotState === "miss"
        ? t.missText
        : "";

    const feedbackTitle =
      selected === q.correct
        ? `${t.correctText} ${t.goalText}`
        : `${t.wrongText} ${currentOutcome}`;

    return (
      <div className="app-shell">
        <div className={`main-card ${screenFading ? "fading" : ""}`}>
          <YanmarLogo />

          <div className="top-row">
            <div
              className="pill"
              style={{
                background: team === "netherlands" ? "#ff8c00" : "#0f2747",
              }}
            >
              {team === "netherlands" ? "🇳🇱 Team Netherlands" : "🇯🇵 Team Japan"}
            </div>

            <div
              className={`pill score-pill ${
                displayScore !== score ? "bump" : ""
              }`}
            >
              ⚽ {t.goals}: {displayScore}
            </div>

            <div className="pill">
              {t.round} {current + 1}/{questions.length}
            </div>
          </div>

          <h2 className="question-title">{q.question}</h2>

          <PenaltyArena shotState={shotState} shotKey={shotKey} t={t} />

          <div className="answer-grid">
            {q.answers.map((answer, index) => (
              <button
                key={answer}
                className={`answer-button ${getAnswerClass(index)}`}
                disabled={showFeedback || selected !== null}
                onClick={() => handleAnswer(index)}
              >
                {answer}
              </button>
            ))}
          </div>

          {showFeedback ? (
            <div className="feedback-box">
              <div className={`feedback-title ${shotState}`}>
                {feedbackTitle}
              </div>

              <div style={{ opacity: 0.95 }}>{q.fact}</div>

              <button className="next-button" onClick={next}>
                {isLastQuestion ? t.finish : t.next}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <>
      <GlobalStyles />

      {!language
        ? renderLanguageScreen()
        : !team
        ? renderTeamScreen()
        : !started
        ? renderStartScreen()
        : current >= questions.length
        ? renderFinalScreen()
        : renderGameScreen()}
    </>
  );
}
