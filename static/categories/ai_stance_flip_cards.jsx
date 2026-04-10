import React, { useMemo, useState } from "react";
import {
  ShieldAlert,
  Rocket,
  Scale,
  Ban,
  PauseCircle,
  Flag,
  Hourglass,
  Clock3,
  UserX,
  HelpCircle,
  RotateCcw,
} from "lucide-react";

const categories = [
  {
    id: "extinctionists",
    title: 'Categorized as “Extinctionists”',
    nickname: "Extinctionists",
    quote: '“It’s fine, or good, if AI kills us.”',
    color: "#e8c2ba",
    accent: "#8f4e43",
    Icon: ShieldAlert,
    names: [
      "Richard Sutton",
      "Larry Page",
      "Jürgen Schmidhuber",
      "Hugo de Garis",
      "Robin Hanson",
      "Beff Jezos",
    ],
  },
  {
    id: "optimistic-accelerationists",
    title: 'Categorized as “Optimistic Accelerationists”',
    nickname: "Optimistic Accelerationists",
    quote: '“We should race ahead on AI, because doing so isn’t dangerous.”',
    color: "#ead5cf",
    accent: "#8b5e52",
    Icon: Rocket,
    names: [
      "Mark Zuckerberg",
      "Yann LeCun",
      "Andrew Ng",
      "Greg Brockman",
      "Jensen Huang",
      "Rodney Brooks",
      "Marc Andreessen",
      "Peter Thiel",
      "Garry Tan",
      "Reid Hoffman",
    ],
  },
  {
    id: "centrists",
    title: 'Categorized as “Centrists”',
    nickname: "Centrists",
    quote: '“Some amount of regulation is warranted, but nothing too extreme.”',
    color: "#e5dbda",
    accent: "#6b5c5b",
    Icon: Scale,
    names: [
      "Sundar Pichai",
      "Satya Nadella",
      "Fei-Fei Li",
      "Ray Kurzweil",
      "roon",
      "davidad",
      "Tyler Cowen",
      "Steven Pinker",
    ],
  },
  {
    id: "anti-ai-shai-skeptics",
    title: 'Categorized as “Anti-AI SHAI Skeptics”',
    nickname: "SHAI Skeptics",
    quote: '“Superhuman AI isn’t a real issue, but govs should halt the AI race for other reasons.”',
    color: "#c9e6ea",
    accent: "#36656b",
    Icon: Ban,
    names: [
      "Daron Acemoğlu",
      "Beeban Kidron",
      "Meredith Whittaker",
      "Wenonah Hauter",
    ],
  },
  {
    id: "agnostic-halters",
    title: 'Categorized as “Agnostic Halters”',
    nickname: "Agnostic Halters",
    quote: '“On the fence about superhuman AI, but favors a coordinated halt.”',
    color: "#cfeff5",
    accent: "#2b6472",
    Icon: PauseCircle,
    names: [
      "Mike Mullen",
      "Jonathan Berry",
      "Alexandria Ocasio-Cortez",
      "Steve Wozniak",
      "Beatrice Fihn",
      "John Mather",
      "Moshe Vardi",
      "Lan Xue",
      "Peter Singer",
      "Nnenna Nwakanma",
      "Christine Rosen",
      "Walter Kim",
      "Kate Bush",
    ],
  },
  {
    id: "resigned-racers",
    title: 'Categorized as “Resigned Racers”',
    nickname: "Resigned Racers",
    quote: '“Gov shutdown preferable, but not feasible.”',
    color: "#d7efc9",
    accent: "#4b7a3c",
    Icon: Flag,
    names: [
      "Dario Amodei",
      "Elon Musk",
      "Mustafa Suleyman",
      "Alex Karp",
      "Ajeya Cotra",
      "Leopold Aschenbrenner",
    ],
  },
  {
    id: "delayists",
    title: 'Categorized as “Delayists”',
    nickname: "Delayists",
    quote: '“Ban SHAI” and “align SHAI” both promising.',
    color: "#ecd7e8",
    accent: "#7a476c",
    Icon: Hourglass,
    names: ["Geoff Hinton", "Demis Hassabis", "Frank Wilczek"],
  },
  {
    id: "eventualists",
    title: 'Categorized as “Eventualists”',
    nickname: "Eventualists",
    quote: '“Ban superhuman AI now, build it someday.”',
    color: "#eed7e6",
    accent: "#8a4c74",
    Icon: Clock3,
    names: [
      "Susan Rice",
      "Jon Wolfsthal",
      "Mark Beall",
      "Marjorie Taylor Green",
      "Mary Robinson",
      "Kersti Kaljulaid",
      "Desmond Browne",
      "Ralph Nader",
      "Andrew Yao",
      "Yi Zeng",
      "Ya-Qin Zhang",
      "George Church",
      "Neil deGrasse Tyson",
    ],
  },
  {
    id: "butlerians",
    title: 'Categorized as “Butlerians”',
    nickname: "Butlerians",
    quote: '“Never build superhuman AI.”',
    color: "#efc9dd",
    accent: "#8b4561",
    Icon: UserX,
    names: [
      "Yoshua Bengio",
      "Stuart Russell",
      "Bart Selman",
      "Eliezer Yudkowsky",
      "Nate Soares",
      "Viktoriya Krakovna",
      "Andrew Critch",
      "Connor Leahy",
      "David Krueger",
      "Max Tegmark",
      "Yuval Noah Harari",
      "Toby Ord",
      "Holly Elmore",
      "Anna Salamon",
      "Tristan Harris",
      "Leslie Griffiths",
      "Steve Bannon",
      "Bernie Sanders",
      "Roman Yampolskiy",
      "Glenn Beck",
    ],
  },
  {
    id: "anti-gov-racers",
    title: 'Categorized as “Anti-Gov Racers”',
    nickname: "Anti-Gov Racers",
    quote: '“Superhuman AI poses enormous risks, but government intervention is even scarier.”',
    color: "#d7f0d6",
    accent: "#467245",
    Icon: HelpCircle,
    names: ["Vitalik Buterin"],
  },
];

function CardFace({ category, flipped }) {
  const Icon = category.Icon;

  return (
    <div
      className="absolute inset-0 rounded-3xl border border-black/10 p-5 sm:p-6 shadow-lg [backface-visibility:hidden]"
      style={{ backgroundColor: category.color }}
      aria-hidden={flipped}
    >
      <div className="flex h-full flex-col justify-between gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
              categorized as
            </div>
            <h2 className="mt-2 text-xl sm:text-2xl font-black leading-tight text-black/85">
              {category.nickname}
            </h2>
          </div>
          <div
            className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border border-black/10 bg-white/55 shadow-sm"
            style={{ color: category.accent }}
          >
            <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
          </div>
        </div>

        <div className="rounded-2xl bg-white/45 p-4 backdrop-blur-sm border border-white/40">
          <div className="text-sm font-semibold uppercase tracking-wide text-black/50">
            Front
          </div>
          <p className="mt-2 text-base sm:text-lg leading-relaxed text-black/80">
            {category.quote}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm text-black/55">
          <span className="font-medium">Tap to flip</span>
          <span className="inline-flex items-center gap-1 font-medium">
            <RotateCcw className="h-4 w-4" />
            names on back
          </span>
        </div>
      </div>
    </div>
  );
}

function CardBack({ category, flipped }) {
  return (
    <div
      className="absolute inset-0 rounded-3xl border border-black/10 bg-white p-5 sm:p-6 shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]"
      aria-hidden={!flipped}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
              back of card
            </div>
            <h3 className="mt-2 text-xl sm:text-2xl font-black text-black/85 leading-tight">
              {category.nickname}
            </h3>
          </div>
          <div
            className="rounded-full px-3 py-1 text-xs sm:text-sm font-semibold"
            style={{ backgroundColor: category.color, color: category.accent }}
          >
            {category.names.length} name{category.names.length === 1 ? "" : "s"}
          </div>
        </div>

        <div className="mt-4 min-h-0 flex-1 overflow-auto rounded-2xl border border-black/8 bg-black/[0.02] p-4">
          <ul className="grid grid-cols-1 gap-2 text-sm sm:text-base leading-relaxed text-black/80">
            {category.names.map((name) => (
              <li
                key={name}
                className="rounded-xl border border-black/6 bg-white px-3 py-2 shadow-sm"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 text-sm font-medium text-black/50">Tap again to return</div>
      </div>
    </div>
  );
}

function FlipCard({ category, isFlipped, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="group relative h-[340px] w-full text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-black/20 rounded-3xl"
      aria-pressed={isFlipped}
      aria-label={`${isFlipped ? "Show front of" : "Flip"} ${category.nickname} card`}
    >
      <div
        className="relative h-full w-full rounded-3xl transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        <CardFace category={category} flipped={isFlipped} />
        <CardBack category={category} flipped={isFlipped} />
      </div>
    </button>
  );
}

export default function AIStanceFlipCardsPage() {
  const [flipped, setFlipped] = useState({});

  const sortedCategories = useMemo(() => categories, []);

  const toggle = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const flipAll = (value) => {
    const next = {};
    for (const category of categories) next[category.id] = value;
    setFlipped(next);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#faf7f3,white_55%)] text-black">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <header className="mb-6 sm:mb-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="text-xs sm:text-sm uppercase tracking-[0.22em] text-black/45 font-semibold">
                Interactive category cards
              </div>
              <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black/90">
                Flip the card to see who’s behind each label
              </h1>
              <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-black/65">
                Front: category + shorthand description. Back: names only. Built for tap-first use on phones and tablets, but still clean on desktop.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => flipAll(false)}
                className="rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold shadow-sm transition hover:shadow"
              >
                Show fronts
              </button>
              <button
                type="button"
                onClick={() => flipAll(true)}
                className="rounded-2xl border border-black/10 bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow"
              >
                Show backs
              </button>
            </div>
          </div>
        </header>

        <section className="mb-6 rounded-3xl border border-black/8 bg-white/80 p-4 sm:p-5 shadow-sm">
          <p className="text-sm sm:text-base leading-relaxed text-black/65">
            <span className="font-semibold text-black/75">Note:</span> This interactive layout mirrors the uploaded chart’s color-coded categories and short descriptions. It keeps the source’s cautionary framing in mind: the categorizations are presented as tentative and subject to revision.
          </p>
        </section>

        <main className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sortedCategories.map((category) => (
            <FlipCard
              key={category.id}
              category={category}
              isFlipped={Boolean(flipped[category.id])}
              onToggle={() => toggle(category.id)}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
