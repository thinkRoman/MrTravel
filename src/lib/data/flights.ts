export interface FlightOption {
  id: string;
  airline: string;
  price: string;
  perPerson?: string;
  segments: string[];
  duration: string;
  stops: string;
  fare: string;
  baggage: string;
  recommended?: boolean;
  note?: string;
}

export interface FlightRoute {
  id: string;
  title: string;
  detail: string;
  options: FlightOption[];
}

export const flightRoutes: FlightRoute[] = [
  {
    id: "sfo-fco",
    title: "Outbound — Ash, Billy & Ria",
    detail: "SFO → Rome (FCO), Wed Dec 16, 2026 · 3 adults · one way",
    options: [
      {
        id: "sfo-fco-0",
        airline: "British Airways",
        price: "$4,019 total",
        perPerson: "$1,340/person",
        segments: [
          "BA 284: SFO 5:25 PM Dec 16 → LHR 11:50 AM Dec 17 (10h25m)",
          "BA 556: LHR 1:15 PM → FCO 4:55 PM Dec 17 (2h40m)",
        ],
        duration: "14h30m",
        stops: "1 stop",
        fare: "Non-refundable, changeable",
        baggage: "1 carry-on shown",
        recommended: true,
      },
      {
        id: "sfo-fco-1",
        airline: "ITA Airways (budget)",
        price: "$2,373 total",
        perPerson: "$791/person",
        segments: [
          "AS 303 (Alaska): SFO 9:58 AM → LAX 11:27 AM Dec 16",
          "AZ 621: LAX 3:20 PM → FCO 12:20 PM Dec 17 (12h00m)",
        ],
        duration: "17h22m",
        stops: "1 stop",
        fare: "Non-refundable, changeable",
        baggage: "1 carry-on shown",
      },
      {
        id: "sfo-fco-2",
        airline: "United Airlines",
        price: "$5,094 total",
        perPerson: "$1,698/person",
        segments: [
          "UA 2650: SFO 8:10 AM → ORD 2:39 PM Dec 16",
          "UA 970: ORD 3:40 PM → FCO 7:45 AM Dec 17 (9h05m)",
        ],
        duration: "14h35m",
        stops: "1 stop",
        fare: "Non-refundable, NOT changeable",
        baggage: "Carry-on 1, checked 0 shown",
      },
    ],
  },
  {
    id: "dfw-fco",
    title: "Rohith — round trip",
    detail: "DFW ↔ Rome (FCO) · out Fri Dec 18, 2026, back Sat Jan 2, 2027 · 1 adult",
    options: [
      {
        id: "dfw-fco-0",
        airline: "Air France",
        price: "$2,527",
        segments: [
          "OUT: AF 87 DFW 7:00 PM Dec 18 → CDG 11:15 AM Dec 19; AF 1504 CDG 12:55 PM → FCO 3:00 PM Dec 19 (13h00m)",
          "BACK: AF 1405 FCO 8:45 PM Jan 2 → CDG 11:00 PM; AF 86 CDG 1:10 PM Jan 3 → DFW 4:50 PM Jan 3 (27h05m, overnights in Paris)",
        ],
        duration: "13h00m out / 27h05m back",
        stops: "1 stop each way",
        fare: "Non-refundable, changeable",
        baggage: "1 carry-on shown",
        recommended: true,
        note: "The 8:45 PM Jan 2 departure lets him hop Catania → Rome during the day on Jan 2 and connect. Trade-off: lands Dallas Jan 3, not Jan 2.",
      },
      {
        id: "dfw-fco-1",
        airline: "Air France (early return)",
        price: "$2,644",
        segments: [
          "OUT: same as above — lands FCO 3:00 PM Dec 19",
          "BACK: AF 1005 FCO 6:00 AM Jan 2 → CDG 8:15 AM; AF 86 CDG 1:10 PM → DFW 4:50 PM Jan 2 (17h50m)",
        ],
        duration: "17h50m return",
        stops: "1 stop each way",
        fare: "Non-refundable, changeable",
        baggage: "Carry-on 1, checked 0 shown",
        note: "Home same day Jan 2, but the 6:00 AM FCO departure means positioning to Rome on Jan 1.",
      },
    ],
  },
  {
    id: "cta-sfo",
    title: "Return — Ria & Billy",
    detail: "Catania (CTA) → SFO · Wed Jan 6, 2027 · 2 adults · one way",
    options: [
      {
        id: "cta-sfo-0",
        airline: "ITA Airways",
        price: "$1,500 total",
        perPerson: "$750/person",
        segments: [
          "AZ 1712: CTA 7:15 PM Jan 6 → FCO 8:40 PM Jan 6",
          "Overnight Fiumicino (as planned)",
          "AZ 640: FCO 9:10 AM Jan 7 → SFO 1:10 PM Jan 7 (13h00m nonstop)",
        ],
        duration: "26h55m",
        stops: "1 stop",
        fare: "Non-refundable, changeable",
        baggage: "Carry-on only — no checked bag included",
        recommended: true,
      },
      {
        id: "cta-sfo-1",
        airline: "Lufthansa",
        price: "$3,913 total",
        segments: [
          "LH 5087: CTA 11:40 AM → FCO 1:10 PM Jan 6; LH 1869 FCO 2:10 PM → MUC 3:40 PM; LH 458 MUC 4:45 PM → SFO 7:35 PM Jan 6",
        ],
        duration: "16h55m",
        stops: "2 stops",
        fare: "Non-refundable, changeable",
        baggage: "1 checked bag included",
        note: "Home same day.",
      },
      {
        id: "cta-sfo-2",
        airline: "Swiss / Lufthansa",
        price: "$3,899 total",
        segments: [
          "LX 3427: CTA 6:00 AM → FCO 7:25 AM Jan 6; LX 1727 FCO 9:35 AM → ZRH 11:20 AM; LX 38 ZRH 1:15 PM → SFO 4:30 PM Jan 6",
        ],
        duration: "19h30m",
        stops: "2 stops",
        fare: "Non-refundable, changeable",
        baggage: "1 checked bag included",
        note: "Home same day.",
      },
    ],
  },
  {
    id: "cta-del",
    title: "Return — Ash",
    detail: "Catania (CTA) → Delhi (DEL) · Wed Jan 6, 2027 · 1 adult · one way",
    options: [
      {
        id: "cta-del-0",
        airline: "Lufthansa / ITA",
        price: "$451",
        segments: [
          "AZ 1710: CTA 10:15 AM → FCO 11:40 AM Jan 6",
          "AZ 770: FCO 1:35 PM → DEL 1:55 AM Jan 7 (7h50m)",
        ],
        duration: "11h10m",
        stops: "1 stop",
        fare: "Non-refundable, changeable",
        baggage: "1 checked bag included",
        recommended: true,
        note: "Cheapest AND fastest.",
      },
      {
        id: "cta-del-1",
        airline: "Air India",
        price: "$543",
        segments: [
          "AZ 1754: CTA 4:30 PM → FCO 5:50 PM Jan 6",
          "AI 122: FCO 9:00 PM → DEL 10:20 AM Jan 7 (8h50m, nonstop Rome–Delhi leg)",
        ],
        duration: "13h20m",
        stops: "1 stop",
        fare: "Non-refundable, changeable",
        baggage: "1 checked bag included",
      },
      {
        id: "cta-del-2",
        airline: "ITA",
        price: "$477",
        segments: [
          "AZ 1722: CTA 6:00 AM → FCO 7:25 AM Jan 6",
          "AZ 770: FCO 1:35 PM → DEL 1:55 AM Jan 7 (7h50m)",
        ],
        duration: "15h25m",
        stops: "1 stop",
        fare: "Non-refundable, changeable",
        baggage: "1 checked bag included",
      },
    ],
  },
];
