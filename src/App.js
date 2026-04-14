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
    goalText: "GOAL ⚽🔥",
    saveText: "Saved by the keeper 🧤",
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
    goalText: "GOAL ⚽🔥",
    saveText: "Gepakt door de keeper 🧤",
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

function YanmarLogo() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "0 auto" }}
    >
      <div
        style={{
          color: "#e6002d",
          fontWeight: 900,
          fontStyle: "italic",
          letterSpacing: "2px",
          fontSize: "64px",
          lineHeight: 1,
          textTransform: "uppercase",
          textShadow: "0 6px 16px rgba(0,0,0,0.18)",
        }}
      >
        YANMAR
      </div>
    </div>
  );
}

function GlassButton({ children, onClick, style = {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "14px 22px",
        borderRadius: "14px",
        border: "1px solid rgba(255,255,255,0.25)",
        background: "rgba(255,255,255,0.08)",
        color: "white",
        cursor: "pointer",
        fontWeight: 700,
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
        boxShadow: "0 10px 20px rgba(0,0,0,0.16)",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-1px)";
        e.currentTarget.style.boxShadow = "0 16px 24px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.16)";
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = "scale(0.98)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
    >
      {children}
    </button>
  );
}

function SelectCard({ onClick, title, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        padding: "16px",
        borderRadius: "26px",
        border: "1px solid rgba(255,255,255,0.18)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))",
        color: "white",
        cursor: "pointer",
        boxShadow: "0 18px 36px rgba(0,0,0,0.22)",
        backdropFilter: "blur(10px)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px) scale(1.01)";
        e.currentTarget.style.boxShadow = "0 24px 42px rgba(0,0,0,0.26)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 18px 36px rgba(0,0,0,0.22)";
      }}
    >
      <div
        style={{
          width: "100%",
          height: "140px",
          borderRadius: "18px",
          marginBottom: "16px",
          overflow: "hidden",
          position: "relative",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.18)",
        }}
      >
        {children}
      </div>
      <div style={{ fontSize: "22px", fontWeight: 800, letterSpacing: 0.2 }}>
        {title}
      </div>
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
          transformOrigin: "center",
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
          transformOrigin: "center",
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
          transformOrigin: "center",
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
          transformOrigin: "center",
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

  return (
    <div
      style={{
        display: "inline-block",
        marginTop: "6px",
        padding: "10px 16px",
        borderRadius: "999px",
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.18)",
        fontWeight: 800,
        letterSpacing: 0.2,
      }}
    >
      {text}
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

  const containerStyle = {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, #38bdf8 0%, #0f172a 38%, #166534 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    color: "white",
    padding: "24px",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "980px",
    padding: "30px",
    borderRadius: "28px",
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(14px)",
    boxShadow: "0 24px 50px rgba(0,0,0,0.35)",
    textAlign: "center",
    border: "1px solid rgba(255,255,255,0.16)",
    opacity: screenFading ? 0.75 : 1,
    transform: screenFading ? "scale(0.995)" : "scale(1)",
    transition: "opacity 0.2s ease, transform 0.2s ease",
  };

  const answerButtonStyle = {
    display: "block",
    width: "100%",
    margin: "10px auto",
    padding: "14px 18px",
    borderRadius: "16px",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.88))",
    color: "#0f172a",
    fontWeight: 700,
    fontSize: "16px",
    cursor: "pointer",
    border: "1px solid rgba(255,255,255,0.6)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
    transition:
      "transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease",
  };

  function resetGameState() {
    setStarted(false);
    setCurrent(0);
    setScore(0);
    setDisplayScore(0);
    setSelected(null);
    setShowFeedback(false);
    setShotState("idle");
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
      setEmail("");
      setEmailSubmitted(false);
      setEmailError("");
      setScreenFading(false);
      setTeam(nextTeam);
    });
  }

  function handleAnswer(index) {
    if (showFeedback) return;
    setSelected(index);
    const correct = index === q.correct;
    setShotState(correct ? "goal" : "save");
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

  if (!language) {
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <YanmarLogo />
          <h1
            style={{ fontSize: "46px", marginBottom: "8px", marginTop: "18px" }}
          >
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
          <div
            style={{ fontSize: "24px", fontWeight: 800, marginBottom: "18px" }}
          >
            {copy.en.chooseLanguage}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
              maxWidth: "720px",
              margin: "0 auto",
            }}
          >
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

  if (!team) {
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <YanmarLogo />
          <h1
            style={{ fontSize: "46px", marginBottom: "8px", marginTop: "18px" }}
          >
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
          <div
            style={{ fontSize: "24px", fontWeight: 800, marginBottom: "18px" }}
          >
            {t.chooseTeam}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
              maxWidth: "720px",
              margin: "0 auto 24px auto",
            }}
          >
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

  if (!started) {
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <YanmarLogo />
          <div
            style={{
              display: "inline-block",
              padding: "10px 16px",
              borderRadius: "999px",
              background: team === "netherlands" ? "#ff8c00" : "#0f2747",
              marginTop: "18px",
              fontWeight: 800,
              boxShadow: "0 12px 24px rgba(0,0,0,0.18)",
            }}
          >
            {team === "netherlands" ? "🇳🇱 Team Netherlands" : "🇯🇵 Team Japan"}
          </div>
          <h1
            style={{ fontSize: "46px", marginBottom: "8px", marginTop: "18px" }}
          >
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
          <button
            onClick={() => setStarted(true)}
            style={{
              padding: "16px 26px",
              borderRadius: "16px",
              border: "none",
              fontWeight: 800,
              fontSize: "16px",
              cursor: "pointer",
              background: "linear-gradient(180deg, #fef08a, #facc15)",
              color: "#0f172a",
              boxShadow: "0 14px 24px rgba(0,0,0,0.25)",
              transition: "transform 0.15s ease",
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "scale(0.98)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
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
            <GlassButton onClick={() => setTeam(null)}>
              {t.changeTeam}
            </GlassButton>
          </div>
        </div>
      </div>
    );
  }

  if (current >= questions.length) {
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
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
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                style={{
                  width: "100%",
                  padding: "16px 18px",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.35)",
                  outline: "none",
                  fontSize: "16px",
                  boxSizing: "border-box",
                  background: "rgba(255,255,255,0.96)",
                  color: "#0f172a",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                }}
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
                onClick={submitEmail}
                style={{
                  marginTop: "16px",
                  width: "100%",
                  padding: "16px 18px",
                  borderRadius: "16px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 800,
                  fontSize: "16px",
                  background: "linear-gradient(180deg, #fef08a, #facc15)",
                  color: "#0f172a",
                  boxShadow: "0 14px 24px rgba(0,0,0,0.25)",
                }}
              >
                {t.prizeBtn}
              </button>
            </div>
          ) : (
            <div style={{ marginTop: "20px" }}>
              <div
                style={{ fontSize: "30px", fontWeight: 800, color: "#bbf7d0" }}
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

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <YanmarLogo />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginTop: "18px",
            marginBottom: "18px",
          }}
        >
          <div
            style={{
              padding: "8px 14px",
              borderRadius: "999px",
              background: team === "netherlands" ? "#ff8c00" : "#0f2747",
              fontWeight: 700,
              boxShadow: "0 10px 20px rgba(0,0,0,0.16)",
            }}
          >
            {team === "netherlands" ? "🇳🇱 Team Netherlands" : "🇯🇵 Team Japan"}
          </div>
          <div
            style={{
              padding: "8px 14px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.14)",
              fontWeight: 700,
              boxShadow:
                displayScore !== score
                  ? "0 0 0 8px rgba(250,204,21,0.12)"
                  : "0 10px 20px rgba(0,0,0,0.12)",
              transform: displayScore !== score ? "scale(1.06)" : "scale(1)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            ⚽ {t.goals}: {displayScore}
          </div>
          <div
            style={{
              padding: "8px 14px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.14)",
              fontWeight: 700,
              boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
            }}
          >
            {t.round} {current + 1}/{questions.length}
          </div>
        </div>

        <h2 style={{ fontSize: "34px", marginBottom: "18px" }}>{q.question}</h2>

        <div
          style={{
            margin: "20px auto",
            width: "100%",
            height: 300,
            borderRadius: 26,
            background:
              "linear-gradient(180deg, #93c5fd 0%, #86efac 30%, #166534 100%)",
            position: "relative",
            overflow: "hidden",
            boxShadow:
              "inset 0 18px 30px rgba(255,255,255,0.18), inset 0 -14px 22px rgba(0,0,0,0.18)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 70,
              background: "linear-gradient(180deg, #0f172a, #1e293b)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 28,
              left: "50%",
              transform: "translateX(-50%)",
              width: 250,
              height: 116,
              border: "6px solid white",
              borderBottom: "none",
              borderRadius: "18px 18px 0 0",
              background:
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.22) 0 10px, rgba(255,255,255,0.06) 10px 20px)",
              boxShadow:
                shotState === "goal"
                  ? "0 0 24px rgba(255,255,255,0.26)"
                  : "none",
              transition: "box-shadow 0.3s ease",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 78,
              left:
                shotState === "save"
                  ? "66%"
                  : shotState === "goal"
                  ? "48%"
                  : "50%",
              transform:
                shotState === "save"
                  ? "translateX(-50%) rotate(22deg) scale(1.14)"
                  : shotState === "goal"
                  ? "translateX(-50%) rotate(-6deg) scale(0.98)"
                  : "translateX(-50%) rotate(0deg) scale(1)",
              transition: "all 0.48s cubic-bezier(.2,.8,.2,1)",
              zIndex: 4,
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                fontSize: 72,
                lineHeight: 1,
                filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.25))",
              }}
            >
              🧤
            </div>
            <div
              style={{
                fontSize: 72,
                lineHeight: 1,
                filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.25))",
              }}
            >
              🧤
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom:
                shotState === "goal" ? 176 : shotState === "save" ? 118 : 18,
              left:
                shotState === "save"
                  ? "66%"
                  : shotState === "goal"
                  ? "36%"
                  : "50%",
              transform:
                shotState === "goal"
                  ? "translateX(-50%) scale(0.7) rotate(-22deg)"
                  : shotState === "save"
                  ? "translateX(-50%) scale(0.92) rotate(6deg)"
                  : "translateX(-50%) scale(1) rotate(0deg)",
              fontSize: 40,
              transition: "all 0.48s cubic-bezier(.2,.8,.2,1)",
              zIndex: 3,
              filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.28))",
            }}
          >
            ⚽
          </div>
          {shotState === "goal" ? (
            <div
              style={{
                position: "absolute",
                top: 108,
                left: "36%",
                transform: "translateX(-50%)",
                width: 132,
                height: 132,
                borderRadius: "999px",
                border: "3px solid rgba(255,255,255,0.3)",
                boxShadow: "0 0 0 14px rgba(255,255,255,0.06)",
                opacity: 0.8,
              }}
            />
          ) : null}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 72,
              background: "rgba(255,255,255,0.08)",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "10px",
            maxWidth: "680px",
            margin: "0 auto",
          }}
        >
          {q.answers.map((a, i) => {
            const isCorrect = i === q.correct;
            const isChosen = i === selected;
            let dynamicStyle = { ...answerButtonStyle };

            if (showFeedback) {
              if (isCorrect) {
                dynamicStyle = {
                  ...dynamicStyle,
                  background: "linear-gradient(180deg, #dcfce7, #bbf7d0)",
                  border: "1px solid #22c55e",
                };
              } else if (isChosen) {
                dynamicStyle = {
                  ...dynamicStyle,
                  background: "linear-gradient(180deg, #fee2e2, #fecaca)",
                  border: "1px solid #ef4444",
                };
              } else {
                dynamicStyle = {
                  ...dynamicStyle,
                  opacity: 0.74,
                };
              }
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                style={dynamicStyle}
                onMouseEnter={(e) => {
                  if (!showFeedback) {
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow =
                      "0 14px 24px rgba(0,0,0,0.18)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    dynamicStyle.boxShadow || "0 10px 20px rgba(0,0,0,0.15)";
                }}
                onMouseDown={(e) => {
                  if (!showFeedback)
                    e.currentTarget.style.transform = "scale(0.985)";
                }}
                onMouseUp={(e) => {
                  if (!showFeedback)
                    e.currentTarget.style.transform = "translateY(-1px)";
                }}
              >
                {a}
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div
            style={{
              marginTop: "18px",
              padding: "18px",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.14)",
              border: "1px solid rgba(255,255,255,0.16)",
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: "28px" }}>
              {selected === q.correct ? t.goalText : t.saveText}
            </h3>
            <p style={{ marginBottom: "16px", opacity: 0.96 }}>{q.fact}</p>
            <button
              onClick={next}
              style={{
                padding: "14px 22px",
                borderRadius: "14px",
                border: "none",
                cursor: "pointer",
                fontWeight: 800,
                background: "linear-gradient(180deg, #fef08a, #facc15)",
                color: "#0f172a",
                boxShadow: "0 14px 24px rgba(0,0,0,0.22)",
              }}
            >
              {isLastQuestion ? t.finish : t.next}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
