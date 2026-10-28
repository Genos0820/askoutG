import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure, princess?",
      "Even Dumbledore would say yes, princess!",
      "10 points from Gryffindor, princess!",
      "Think again, princess!",
      "Is this a Horcrux-level mistake, princess?",
      "I solemnly swear I'm up to no good... except this date",
      "Wingardium Leviosa-ing my hopes, princess...",
      "The Sorting Hat says YES, princess!",
      "Don't make me use the Imperius Curse, princess!",
      "Have a heart, princess! Even Snape has one.",
      "Accio yes button, princess!",
      "Not even a little bit, princess?",
      "Ron would've said yes by now, princess!",
      "Is that your final answer, princess?",
      "You're breaking my heart, princess ;(",
      "Expecto Patronum! Please say yes, princess!",
      "After all this time? Always... say yes, princess.",
      "Plsss princess? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-yellow-500 selection:text-black">
      {yesPressed ? (
        <>
          <Sparkles />
          <div className="hp-letter relative max-w-md mx-4 p-8 md:p-10 text-center text-amber-950 shadow-2xl">
            <div className="text-5xl mb-2">✉️</div>
            <div className="text-sm tracking-widest uppercase">
              Hogwarts School of Witchcraft and Wizardry
            </div>
            <h2 className="hp-letter-title text-3xl md:text-4xl font-black my-4">
              It&apos;s a date princess ;)
            </h2>
            <p className="text-lg leading-relaxed">
              Dear Princess Garima,
              <br />
              We are pleased to inform you that you have been accepted to one
              magical evening with me. Please bring your wand, your best smile
              and an appetite.
            </p>
            <p className="mt-4 text-lg">Yours, with all my magic ⚡</p>
          </div>
        </>
      ) : (
        <>
          <Sparkles />
          <div className="fixed top-10 md:left-24 left-6 text-6xl md:text-8xl hp-flicker -z-10">🕯️</div>
          <div className="fixed bottom-16 md:right-24 right-10 text-6xl md:text-8xl hp-float -z-10">🦉</div>
          <div className="fixed top-12 md:right-32 right-8 text-5xl md:text-7xl hp-float -z-10">⚡</div>
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Will you go out with me princess?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-emerald-700 hover:bg-emerald-600 border-2 border-yellow-500 text-yellow-100 font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-800 hover:bg-red-700 border-2 border-yellow-500 rounded-lg text-yellow-100 font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const Sparkles = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    {Array.from({ length: 24 }).map((_, i) => (
      <span
        key={i}
        className="hp-spark"
        style={{
          left: `${(i * 37) % 100}%`,
          animationDelay: `${(i % 8) * 0.9}s`,
          animationDuration: `${6 + (i % 5) * 1.5}s`,
          fontSize: `${10 + (i % 4) * 6}px`,
        }}
      >
        {i % 6 === 0 ? "🕯️" : "✨"}
      </span>
    ))}
  </div>
);
