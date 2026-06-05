import React, { useEffect, useState } from "react";
import "./App.css";

const ROUND_TIME = 18;
const LEADERBOARD_KEY = "yanmar_power_league_scores";
const LEADS_KEY = "yanmar_power_league_leads";

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
    subtitle: "Quiz. Strike. Climb the league.",
    languageIntro: "Choose your language",
    teamIntro: "Pick your match team",
    readyTitle: "Match setup complete",
    readyCopy: "Five original quiz rounds. Correct answers score goals, speed adds bonus points and a streak turns pressure into power.",
    start: "Start match",
    back: "Back",
    changeLanguage: "Language",
    changeTeam: "Team",
    round: "Round",
    score: "Score",
    streak: "Streak",
    best: "Best",
    time: "Time",
    powerPlay: "50/50 Power Play",
    powerUsed: "Power Play used",
    goal: "Goal",
    saved: "Saved",
    timeout: "Time ran out",
    next: "Next round",
    finish: "Finish match",
    complete: "Full time",
    resultPerfect: "Perfect striker!",
    resultStrong: "Strong performance!",
    resultGood: "Nice effort!",
    resultTry: "Training ground ready",
    correct: "Correct",
    bonus: "Bonus",
    prizeTitle: "Win an awesome prize",
    prizeText: "Leave your email address below for a chance to win.",
    emailPlaceholder: "Enter your email address",
    emailErrorEmpty: "Please enter your email address.",
    emailErrorInvalid: "Please enter a valid email address.",
    prizeButton: "Enter Prize Draw",
    thanks: "You're in!",
    thanksSub: "Thanks for joining the prize draw.",
    playAgain: "Play Again",
    newGame: "New setup",
    leaderboard: "Leaderboard",
    noScores: "No saved scores yet.",
    teamNetherlands: "Team Netherlands",
    teamJapan: "Team Japan",
    nlMotto: "Orange pressure, clean finish.",
    jpMotto: "Calm build-up, sharp strike.",
  },
  nl: {
    title: "Yanmar Power League",
    subtitle: "Quiz. Schiet. Klim in de league.",
    languageIntro: "Kies je taal",
    teamIntro: "Kies je wedstrijdteam",
    readyTitle: "Wedstrijd staat klaar",
    readyCopy: "Vijf originele quizrondes. Goede antwoorden scoren goals, snelheid geeft bonuspunten en een streak maakt druk om in power.",
    start: "Start wedstrijd",
    back: "Terug",
    changeLanguage: "Taal",
    changeTeam: "Team",
    round: "Ronde",
    score: "Score",
    streak: "Streak",
    best: "Beste",
    time: "Tijd",
    powerPlay: "50/50 Power Play",
    powerUsed: "Power Play gebruikt",
    goal: "Goal",
    saved: "Gepakt",
    timeout: "Tijd voorbij",
    next: "Volgende ronde",
    finish: "Wedstrijd afronden",
    complete: "Full time",
    resultPerfect: "Perfecte spits!",
    resultStrong: "Sterke score!",
    resultGood: "Netjes gedaan!",
    resultTry: "Training Ground Ready",
    correct: "Goed",
    bonus: "Bonus",
    prizeTitle: "Win een te gekke prijs",
    prizeText: "Laat hieronder je e-mailadres achter en maak kans om te winnen.",
    emailPlaceholder: "Vul je e-mailadres in",
    emailErrorEmpty: "Vul je e-mailadres in.",
    emailErrorInvalid: "Vul een geldig e-mailadres in.",
    prizeButton: "Doe mee aan de winactie",
    thanks: "Je doet mee!",
    thanksSub: "Bedankt voor het meedoen aan de winactie.",
    playAgain: "Speel opnieuw",
    newGame: "Nieuwe setup",
    leaderboard: "Leaderboard",
    noScores: "Nog geen opgeslagen scores.",
    teamNetherlands: "Team Netherlands",
    teamJapan: "Team Japan",
    nlMotto: "Oranje druk, zuivere afronding.",
    jpMotto: "Rustige opbouw, scherpe aanval.",
  },
};

const teams = {
  netherlands: {
    labelKey: "teamNetherlands",
    short: "NL",
    main: "#f97316",
    secondary: "#21468b",
    accent: "#ffffff",
    flag: "netherlands",
    mottoKey: "nlMotto",
  },
  japan: {
    labelKey: "teamJapan",
    short: "JP",
    main: "#ffffff",
    secondary: "#bc002d",
    accent: "#101820",
    flag: "japan",
    mottoKey: "jpMotto",
  },
};

function getQuestions(language) {
  return questionBank[language] || questionBank.en;
}

function readStoredList(key) {
  try {
    return JSON.parse(window.localStorage.getItem(key) || "[]");
  } catch (error) {
    return [];
  }
}

function writeStoredList(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function getResultLabel(t, correctCount, total) {
  if (correctCount === total) return t.resultPerfect;
  if (correctCount >= Math.ceil(total * 0.6)) return t.resultStrong;
  if (correctCount > 0) return t.resultGood;
  return t.resultTry;
}

function BrandMark() {
  return (
    <div className="brand-mark" aria-label="Yanmar Power League">
      <span className="brand-name">YANMAR</span>
      <span className="brand-bar" />
    </div>
  );
}

function Flag({ type }) {
  return (
    <span className={`flag flag-${type}`} aria-hidden="true">
      <span />
    </span>
  );
}

function PrimaryButton({ children, className = "", ...props }) {
  return (
    <button className={`btn btn-primary ${className}`} type="button" {...props}>
      {children}
    </button>
  );
}

function GhostButton({ children, className = "", ...props }) {
  return (
    <button className={`btn btn-ghost ${className}`} type="button" {...props}>
      {children}
    </button>
  );
}

function SelectionCard({ title, text, children, onClick }) {
  return (
    <button className="selection-card" type="button" onClick={onClick}>
      <span className="selection-art">{children}</span>
      <span className="selection-title">{title}</span>
      <span className="selection-text">{text}</span>
    </button>
  );
}

function TeamKit({ teamId }) {
  const team = teams[teamId];
  return (
    <span
      className={`team-kit team-kit-${teamId}`}
      style={{
        "--team-main": team.main,
        "--team-secondary": team.secondary,
        "--team-accent": team.accent,
      }}
    >
      <span className="kit-shirt" />
      <span className="kit-badge">{team.short}</span>
    </span>
  );
}

function Stadium({ feedback, shotState, teamId, t }) {
  const team = teams[teamId] || teams.netherlands;

  return (
    <section
      className={`stadium stadium-${shotState}`}
      aria-label="Penalty field"
      style={{
        "--team-main": team.main,
        "--team-secondary": team.secondary,
        "--team-accent": team.accent,
      }}
    >
      <div className="stadium-stands">
        <span>YANMAR</span>
        <span>POWER</span>
        <span>LEAGUE</span>
      </div>
      <div className="goal-frame">
        <span className="goal-net" />
      </div>
      <div className="keeper" aria-hidden="true">
        <span className="keeper-head" />
        <span className="keeper-body" />
        <span className="keeper-arm keeper-arm-left" />
        <span className="keeper-arm keeper-arm-right" />
        <span className="keeper-leg keeper-leg-left" />
        <span className="keeper-leg keeper-leg-right" />
      </div>
      <div className="penalty-spot" />
      <div className="ball" aria-hidden="true">
        <span className="ball-core" />
      </div>
      <div className="pitch-mark pitch-mark-left" />
      <div className="pitch-mark pitch-mark-right" />
      {feedback ? (
        <div className={`stadium-callout ${feedback.correct ? "is-goal" : "is-save"}`}>
          {feedback.timedOut ? t.timeout : feedback.correct ? t.goal : t.saved}
        </div>
      ) : null}
    </section>
  );
}

function Leaderboard({ entries, t }) {
  return (
    <div className="leaderboard">
      <h2>{t.leaderboard}</h2>
      {entries.length === 0 ? (
        <p>{t.noScores}</p>
      ) : (
        <ol>
          {entries.slice(0, 5).map((entry, index) => (
            <li key={`${entry.date}-${entry.email}-${index}`}>
              <span className="leader-rank">#{index + 1}</span>
              <span className="leader-name">{entry.name}</span>
              <span className="leader-score">{entry.score}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState(null);
  const [team, setTeam] = useState(null);
  const [phase, setPhase] = useState("language");
  const [questions, setQuestions] = useState(() => getQuestions("en"));
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [displayScore, setDisplayScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [shotState, setShotState] = useState("idle");
  const [timeLeft, setTimeLeft] = useState(ROUND_TIME);
  const [hiddenAnswers, setHiddenAnswers] = useState([]);
  const [powerPlayUsed, setPowerPlayUsed] = useState(false);
  const [history, setHistory] = useState([]);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [leaderboard, setLeaderboard] = useState(() => readStoredList(LEADERBOARD_KEY));

  const lang = language || "en";
  const t = copy[lang];
  const currentQuestion = questions[current];
  const selectedTeam = team ? teams[team] : null;
  const correctCount = history.filter((item) => item.correct).length;
  const accuracy = questions.length ? Math.round((correctCount / questions.length) * 100) : 0;
  const timerPercent = Math.max(0, Math.min(100, (timeLeft / ROUND_TIME) * 100));
  const progressPercent = questions.length ? ((current + (phase === "complete" ? 1 : 0)) / questions.length) * 100 : 0;
  const resultLabel = getResultLabel(t, correctCount, questions.length || getQuestions(lang).length);

  useEffect(() => {
    if (displayScore === score) return undefined;

    const timeout = window.setTimeout(() => {
      const diff = score - displayScore;
      const step = Math.max(1, Math.ceil(Math.abs(diff) / 10));
      setDisplayScore((value) => (diff > 0 ? Math.min(score, value + step) : Math.max(score, value - step)));
    }, 24);

    return () => window.clearTimeout(timeout);
  }, [displayScore, score]);

  useEffect(() => {
    if (phase !== "match" || feedback || selected !== null || !currentQuestion) return undefined;

    if (timeLeft <= 0) {
      handleAnswer(null, true);
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setTimeLeft((value) => Math.max(0, value - 1));
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [phase, feedback, selected, timeLeft, currentQuestion]);

  function resetRound(nextIndex) {
    setCurrent(nextIndex);
    setSelected(null);
    setFeedback(null);
    setShotState("idle");
    setTimeLeft(ROUND_TIME);
    setHiddenAnswers([]);
  }

  function chooseLanguage(nextLanguage) {
    setLanguage(nextLanguage);
    setQuestions(getQuestions(nextLanguage));
    setTeam(null);
    setEmailSubmitted(false);
    setEmailError("");
    setPhase("team");
  }

  function chooseTeam(nextTeam) {
    setTeam(nextTeam);
    setPhase("ready");
  }

  function startMatch() {
    setQuestions(getQuestions(lang));
    setScore(0);
    setDisplayScore(0);
    setStreak(0);
    setBestStreak(0);
    setPowerPlayUsed(false);
    setHistory([]);
    setEmail("");
    setEmailError("");
    setEmailSubmitted(false);
    resetRound(0);
    setPhase("match");
  }

  function handleAnswer(index, timedOut = false) {
    if (feedback || selected !== null || !currentQuestion) return;

    const correct = index === currentQuestion.correct;
    const nextStreak = correct ? streak + 1 : 0;
    const direction = index === 0 ? "left" : index === 2 ? "right" : "center";
    const earned = correct ? 100 + timeLeft * 5 + nextStreak * 20 : 0;

    setSelected(timedOut ? -1 : index);
    setShotState(timedOut ? "timeout" : correct ? `goal-${direction}` : `save-${direction}`);

    window.setTimeout(() => {
      setScore((value) => value + earned);
      setStreak(nextStreak);
      setBestStreak((value) => Math.max(value, nextStreak));
      setHistory((items) => [
        ...items,
        {
          id: currentQuestion.id,
          correct,
          answer: index,
          timedOut,
          earned,
          timeLeft,
        },
      ]);
      setFeedback({ correct, timedOut, earned });
    }, 430);
  }

  function usePowerPlay() {
    if (powerPlayUsed || feedback || selected !== null || !currentQuestion) return;

    const wrongAnswers = currentQuestion.answers
      .map((answer, index) => index)
      .filter((index) => index !== currentQuestion.correct);
    const hidden = wrongAnswers.sort(() => Math.random() - 0.5).slice(0, 1);

    setHiddenAnswers(hidden);
    setPowerPlayUsed(true);
  }

  function goNext() {
    if (current >= questions.length - 1) {
      setShotState("idle");
      setSelected(null);
      setFeedback(null);
      setPhase("complete");
      return;
    }

    resetRound(current + 1);
  }

  function resetSetup() {
    setLanguage(null);
    setTeam(null);
    setPhase("language");
    setQuestions(getQuestions("en"));
    setScore(0);
    setDisplayScore(0);
    setStreak(0);
    setBestStreak(0);
    setSelected(null);
    setFeedback(null);
    setShotState("idle");
    setTimeLeft(ROUND_TIME);
    setHiddenAnswers([]);
    setPowerPlayUsed(false);
    setHistory([]);
    setEmail("");
    setEmailError("");
    setEmailSubmitted(false);
  }

  function submitEmail(event) {
    event.preventDefault();

    const trimmed = email.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);

    if (!trimmed) {
      setEmailError(t.emailErrorEmpty);
      return;
    }

    if (!valid) {
      setEmailError(t.emailErrorInvalid);
      return;
    }

    const entry = {
      name: trimmed.split("@")[0].slice(0, 14) || "Player",
      email: trimmed,
      score,
      correct: correctCount,
      total: questions.length,
      accuracy,
      team,
      language: lang,
      date: new Date().toISOString(),
    };

    const nextLeaderboard = [...leaderboard, entry]
      .sort((a, b) => b.score - a.score || b.correct - a.correct)
      .slice(0, 10);
    const nextLeads = [...readStoredList(LEADS_KEY), entry].slice(-50);

    writeStoredList(LEADERBOARD_KEY, nextLeaderboard);
    writeStoredList(LEADS_KEY, nextLeads);
    setLeaderboard(nextLeaderboard);
    setEmailError("");
    setEmailSubmitted(true);
  }

  if (phase === "language") {
    return (
      <main className="game-shell">
        <section className="panel intro-panel">
          <BrandMark />
          <p className="eyebrow">{copy.en.subtitle}</p>
          <h1>{copy.en.title}</h1>
          <div className="selection-grid language-grid">
            <SelectionCard title="Nederlands" text="NL" onClick={() => chooseLanguage("nl")}>
              <Flag type="netherlands" />
            </SelectionCard>
            <SelectionCard title="English" text="EN" onClick={() => chooseLanguage("en")}>
              <Flag type="uk" />
            </SelectionCard>
          </div>
        </section>
      </main>
    );
  }

  if (phase === "team") {
    return (
      <main className="game-shell">
        <section className="panel intro-panel">
          <BrandMark />
          <p className="eyebrow">{t.languageIntro}</p>
          <h1>{t.teamIntro}</h1>
          <div className="selection-grid">
            {Object.entries(teams).map(([teamId, teamInfo]) => (
              <SelectionCard
                key={teamId}
                title={t[teamInfo.labelKey]}
                text={t[teamInfo.mottoKey]}
                onClick={() => chooseTeam(teamId)}
              >
                <TeamKit teamId={teamId} />
              </SelectionCard>
            ))}
          </div>
          <div className="panel-actions">
            <GhostButton onClick={() => setPhase("language")}>{t.back}</GhostButton>
          </div>
        </section>
      </main>
    );
  }

  if (phase === "ready" && selectedTeam) {
    return (
      <main className="game-shell">
        <section className="panel ready-panel">
          <BrandMark />
          <div className="ready-layout">
            <div className="ready-copy">
              <p className="eyebrow">{t[selectedTeam.labelKey]}</p>
              <h1>{t.readyTitle}</h1>
              <p>{t.readyCopy}</p>
              <div className="match-facts">
                <span>{questions.length} rounds</span>
                <span>{ROUND_TIME}s timer</span>
                <span>50/50</span>
              </div>
              <div className="panel-actions panel-actions-left">
                <PrimaryButton onClick={startMatch}>{t.start}</PrimaryButton>
                <GhostButton onClick={() => setPhase("team")}>{t.changeTeam}</GhostButton>
                <GhostButton onClick={resetSetup}>{t.changeLanguage}</GhostButton>
              </div>
            </div>
            <Stadium feedback={null} shotState="idle" teamId={team} t={t} />
          </div>
        </section>
      </main>
    );
  }

  if (phase === "complete") {
    return (
      <main className="game-shell">
        <section className="panel results-panel">
          <BrandMark />
          <p className="eyebrow">{t.complete}</p>
          <h1>{resultLabel}</h1>
          <div className="result-grid">
            <div className="result-score">
              <span>{displayScore}</span>
              <small>{correctCount}/{questions.length} {t.correct} - {accuracy}%</small>
            </div>
            <div className="result-stats">
              <span>{t.best}: {bestStreak}</span>
              <span>{t.score}: {score}</span>
              <span>{team && selectedTeam ? t[selectedTeam.labelKey] : ""}</span>
            </div>
          </div>

          <div className="finish-grid">
            <form className="prize-form" onSubmit={submitEmail} noValidate>
              <h2>{t.prizeTitle}</h2>
              <p>{t.prizeText}</p>
              <label>
                <span>{t.emailPlaceholder}</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={t.emailPlaceholder}
                  disabled={emailSubmitted}
                />
              </label>
              {emailError ? <div className="form-error">{emailError}</div> : null}
              {emailSubmitted ? (
                <div className="form-success">
                  <strong>{t.thanks}</strong>
                  <span>{t.thanksSub}</span>
                </div>
              ) : (
                <PrimaryButton className="full-width" type="submit">{t.prizeButton}</PrimaryButton>
              )}
            </form>
            <Leaderboard entries={leaderboard} t={t} />
          </div>

          <div className="panel-actions">
            <PrimaryButton onClick={startMatch}>{t.playAgain}</PrimaryButton>
            <GhostButton onClick={resetSetup}>{t.newGame}</GhostButton>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="game-shell">
      <section className="panel match-panel">
        <header className="match-header">
          <BrandMark />
          <div className="match-status">
            <span>{t.score}: {displayScore}</span>
            <span>{t.streak}: {streak}</span>
            <span>{t.round} {current + 1}/{questions.length}</span>
          </div>
        </header>

        <div className="progress-track" aria-hidden="true">
          <span style={{ width: `${progressPercent}%` }} />
        </div>

        <div className="match-grid">
          <div className="question-zone">
            <div className="question-meta">
              <span>{t.round} {current + 1}</span>
              <span>{questions.length} total</span>
            </div>
            <h1>{currentQuestion.question}</h1>
            <div className="timer-row">
              <span>{t.time}: {timeLeft}s</span>
              <span className="timer-track" aria-hidden="true">
                <span style={{ width: `${timerPercent}%` }} />
              </span>
            </div>

            <div className="answer-grid">
              {currentQuestion.answers.map((answer, index) => {
                const isHidden = hiddenAnswers.includes(index);
                const isCorrect = feedback && index === currentQuestion.correct;
                const isWrongPick = feedback && selected === index && selected !== currentQuestion.correct;

                return (
                  <button
                    key={answer}
                    type="button"
                    className={`answer-option ${selected === index ? "is-selected" : ""} ${isCorrect ? "is-correct" : ""} ${isWrongPick ? "is-wrong" : ""} ${isHidden ? "is-hidden" : ""}`}
                    onClick={() => handleAnswer(index)}
                    disabled={Boolean(feedback) || selected !== null || isHidden}
                  >
                    <span className="answer-letter">{String.fromCharCode(65 + index)}</span>
                    <span>{isHidden ? "--" : answer}</span>
                  </button>
                );
              })}
            </div>

            <div className="power-row">
              <GhostButton onClick={usePowerPlay} disabled={powerPlayUsed || Boolean(feedback) || selected !== null}>
                {powerPlayUsed ? t.powerUsed : t.powerPlay}
              </GhostButton>
            </div>

            {feedback ? (
              <div className={`feedback ${feedback.correct ? "is-correct" : "is-wrong"}`} aria-live="polite">
                <div>
                  <strong>{feedback.timedOut ? t.timeout : feedback.correct ? t.goal : t.saved}</strong>
                  <p>{currentQuestion.fact}</p>
                </div>
                <span>{t.bonus}: +{feedback.earned}</span>
                <PrimaryButton onClick={goNext}>{current >= questions.length - 1 ? t.finish : t.next}</PrimaryButton>
              </div>
            ) : null}
          </div>

          <div className="field-zone">
            <div className="team-strip">
              {selectedTeam ? (
                <>
                  <Flag type={selectedTeam.flag} />
                  <span>{t[selectedTeam.labelKey]}</span>
                </>
              ) : null}
            </div>
            <Stadium feedback={feedback} shotState={shotState} teamId={team} t={t} />
          </div>
        </div>
      </section>
    </main>
  );
}
