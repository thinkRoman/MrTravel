export interface TransferCard {
  label: string;
  details: string[];
  warning?: string;
}

export interface ItineraryDay {
  date: string;
  title: string;
  location: string;
  stay?: string;
  highlights: string[];
  transfer?: TransferCard;
  flag?: string;
}

export const itinerary: ItineraryDay[] = [
  {
    date: "Wed Dec 16",
    title: "Depart SFO",
    location: "San Francisco → Rome",
    highlights: [
      "Ash, Billy & Ria depart SFO → Rome (FCO).",
      "Proposed: British Airways via London, lands FCO 4:55 PM Dec 17.",
    ],
  },
  {
    date: "Thu Dec 17",
    title: "Arrive Rome",
    location: "Rome",
    stay: "Rome · night 1 of 4",
    highlights: [
      "Piazza Navona, Pantheon area, Trevi Fountain.",
      "Easy dinner — keep it flexible for tiredness and rain.",
    ],
  },
  {
    date: "Fri Dec 18",
    title: "Ancient Rome",
    location: "Rome",
    stay: "Rome · night 2 of 4",
    highlights: [
      "Colosseum (reserved entry), Roman Forum, Palatine Hill.",
      "Finish in Monti for dinner.",
      "Rohith departs DFW → Rome on the evening flight.",
    ],
  },
  {
    date: "Sat Dec 19",
    title: "Vatican day",
    location: "Rome",
    stay: "Rome · night 3 of 4",
    highlights: [
      "Vatican / St. Peter's (reserve ahead).",
      "Spanish Steps or Trastevere in the evening.",
      "Rohith arrives Rome (3:00 PM via Paris or 6:10 PM via London).",
    ],
  },
  {
    date: "Sun Dec 20",
    title: "Rome rest day",
    location: "Rome",
    stay: "Rome · night 4 of 4",
    highlights: [
      "Rohith recovers from the flight; relaxed group day in Rome.",
      "No fixed plan — wander, revisit favorites.",
    ],
  },
  {
    date: "Mon Dec 21",
    title: "Rome → Naples",
    location: "Naples",
    stay: "Naples · night 1 of 2",
    highlights: [
      "Historic centre: Spaccanapoli, San Gregorio Armeno (Christmas nativity workshops — busy before Christmas, start early).",
      "Duomo, Santa Chiara. Pizza in its home city.",
    ],
    transfer: {
      label: "Getting there: Rome → Naples",
      details: [
        "High-speed train, Roma Termini → Napoli Centrale, 1h08m–1h15m.",
        "Trains run every 15–30 minutes all day.",
        "Working plan: depart ~9:15 AM, arrive ~10:28–10:30 AM.",
        "Be at the platform 10–15 minutes early — no airline-style check-in.",
      ],
      warning:
        "Times are indicative — recheck the actual departure when booking. The 1h10m figure is the fastest-train time; mid-morning trains often run 1h15–1h25.",
    },
  },
  {
    date: "Tue Dec 22",
    title: "Naples, part two",
    location: "Naples",
    stay: "Naples · night 2 of 2",
    highlights: [
      "Cappella Sansevero — the Veiled Christ (TIMED ENTRY, book ~60 days ahead, 45–60 min).",
      "Via Toledo, Quartieri Spagnoli, Galleria Umberto I, Piazza del Plebiscito.",
    ],
  },
  {
    date: "Wed Dec 23",
    title: "Naples → Bari → Puglia",
    location: "Valle d'Itria",
    stay: "Masseria · night 1 of 3",
    highlights: [
      "Fly Naples → Bari; collect the rental car.",
      "Polignano a Mare: Lama Monachile cove, old town, caffè speciale (lemon + amaretto).",
      "Drive to the masseria in Valle d'Itria.",
    ],
    transfer: {
      label: "Getting there: Naples → Bari",
      details: [
        "Direct flight exists (~45–55 min) but Wednesday Dec 23 operation is UNVERIFIED.",
        "Verify on ryanair.com and neosair.it before locking the day.",
        "Backup: direct FlixBus, ~3h05m, ~$24, multiple daily — faster door-to-door than a connecting flight.",
        "Day flow: Naples hotel → NAP airport 20–30 min · Bari airport → Polignano 35–40 min · Polignano → masseria 45–60 min.",
      ],
      warning:
        "Do not lock Dec 23 plans until the direct flight's Wednesday schedule is confirmed.",
    },
  },
  {
    date: "Thu Dec 24",
    title: "Alberobello + Ostuni",
    location: "Valle d'Itria",
    stay: "Masseria · night 2 of 3",
    highlights: [
      "Alberobello — Rione Monti trulli panorama (Belvedere Santa Lucia), quieter Aia Piccola, Trullo Sovrano.",
      "Ostuni, the White City — cathedral, belvederes over the olive groves.",
      "Christmas Eve dinner at the masseria.",
    ],
  },
  {
    date: "Fri Dec 25",
    title: "Matera day trip",
    location: "Valle d'Itria",
    stay: "Masseria · night 3 of 3",
    highlights: [
      "Sassi districts (Caveoso & Barisano), a furnished cave house, a rock-cut church, viewpoint across the Gravina.",
      "Matera bread, peperoni cruschi, Aglianico wine.",
    ],
    flag: "Christmas Day — some sites and restaurants may be closed. Open question: swap with Dec 24, or keep?",
  },
  {
    date: "Sat Dec 26",
    title: "Masseria → Lecce",
    location: "Lecce",
    stay: "Lecce · night 1 of 2",
    highlights: ["Drive from the masseria to Lecce.", "Evening in the Baroque old town."],
  },
  {
    date: "Sun Dec 27",
    title: "Full Lecce day",
    location: "Lecce",
    stay: "Lecce · night 2 of 2",
    highlights: [
      "Piazza del Duomo (beautiful illuminated), Basilica di Santa Croce, Roman amphitheatre at Piazza Sant'Oronzo.",
      "Evening passeggiata. Pasticciotto for breakfast, rustico leccese.",
    ],
  },
  {
    date: "Mon Dec 28",
    title: "Bari → Palermo",
    location: "Palermo",
    stay: "Palermo · night 1 of 3",
    highlights: ["Return the rental car at Bari Airport; fly Bari → Palermo."],
    transfer: {
      label: "Getting there: Bari → Palermo",
      details: [
        "Direct Ryanair, ~1h05m–1h10m, roughly once daily.",
        "Indicative options: ~6:00 AM → 7:10 AM for a full Palermo day, or ~7:00 PM → 8:10 PM for a relaxed morning.",
        "Lecce → Bari airport is a 1h45m–2h drive; allow 1.5 hours for domestic check-in and rental-car return.",
        "Palermo airport → city: 35–50 minutes.",
      ],
      warning: "Times are indicative — recheck when booking.",
    },
  },
  {
    date: "Tue Dec 29",
    title: "Palermo city",
    location: "Palermo",
    stay: "Palermo · night 2 of 3",
    highlights: [
      "Palatine Chapel, Norman Palace, Palermo Cathedral.",
      "Ballarò market and street food.",
    ],
  },
  {
    date: "Wed Dec 30",
    title: "Monreale",
    location: "Palermo",
    stay: "Palermo · night 3 of 3",
    highlights: [
      "Monreale Cathedral — gold mosaics (Christ Pantocrator), Benedictine cloister.",
      "Half-day with a relaxed lunch; easy evening in Palermo.",
    ],
  },
  {
    date: "Thu Dec 31",
    title: "Cefalù → Taormina · NYE",
    location: "Taormina",
    stay: "Taormina · night 1 of 2",
    highlights: [
      "Collect the Sicily car; Cefalù — cathedral, seafront, long lunch.",
      "Drive to Taormina. New Year's Eve dinner in Taormina (book early; arrival afternoon/evening).",
    ],
  },
  {
    date: "Fri Jan 1",
    title: "Mount Etna",
    location: "Taormina",
    stay: "Taormina · night 2 of 2",
    highlights: [
      "Guided Etna excursion — weather-dependent; the licensed guide chooses the route.",
      "Etna wines. Last full day with Rohith.",
    ],
  },
  {
    date: "Sat Jan 2",
    title: "Rohith departs · Ortigia",
    location: "Ortigia",
    stay: "Ortigia · night 1 of 4",
    highlights: [
      "Rohith → Catania Airport, flies Catania → Rome → DFW.",
      "Ash, Billy & Ria drive Taormina → Ortigia.",
    ],
  },
  {
    date: "Sun Jan 3",
    title: "Ortigia + Syracuse",
    location: "Ortigia",
    stay: "Ortigia · night 2 of 4",
    highlights: [
      "Ortigia old town and the Syracuse Neapolis Archaeological Park.",
      "Greek Theatre, Ear of Dionysius, Roman amphitheatre.",
    ],
  },
  {
    date: "Mon Jan 4",
    title: "Noto + Marzamemi",
    location: "Ortigia",
    stay: "Ortigia · night 3 of 4",
    highlights: [
      "Noto — Corso Vittorio Emanuele, Cathedral of San Nicolò, Palazzo Ducezio (honey-colored Baroque, best in low winter light).",
      "Marzamemi — old tonnara, Piazza Regina Margherita, harbor walk (seasonal; lunch only if restaurants open).",
    ],
  },
  {
    date: "Tue Jan 5",
    title: "Modica + Ragusa Ibla",
    location: "Ortigia",
    stay: "Ortigia · night 4 of 4",
    highlights: [
      "Modica — San Giorgio cathedral staircase, Corso Umberto, chocolate tasting (grainy traditional style).",
      "Ragusa Ibla in the afternoon.",
    ],
  },
  {
    date: "Wed Jan 6",
    title: "Fly home",
    location: "Catania Airport",
    highlights: [
      "Drive Ortigia → Catania Airport, return the car.",
      "Ria & Billy: Catania → Rome → SFO (overnight Fiumicino, land SFO Jan 7 1:10 PM).",
      "Ash: Catania → Rome → Delhi (lands Jan 7 1:55 AM).",
    ],
  },
  {
    date: "Thu Jan 7",
    title: "Arrivals",
    location: "Home",
    highlights: [
      "Ria & Billy land SFO 1:10 PM.",
      "Ash lands Delhi 1:55 AM.",
    ],
  },
];
