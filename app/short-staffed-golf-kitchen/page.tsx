import UseCasePage, { type UseCaseContent } from "../components/UseCasePage";
import { FAQ_COST, FAQ_LOCATION, FAQ_SOLD_OUT, buildUseCaseMetadata } from "../lib/useCases";

const PATH = "/short-staffed-golf-kitchen";

export const metadata = buildUseCaseMetadata(
  PATH,
  "Run the Grill With One Cook at Your Golf Course",
  "On a short-staffed day, one person runs the grill, the counter and the phone. A timed pre-order queue shows what to cook next, sorted by who arrives first.",
  "One cook, one queue: golfers order and pay on their phones, and tickets are sorted by who is actually arriving next.",
);

const content: UseCaseContent = {
  path: PATH,
  label: "Short-Staffed Kitchens",
  h1: <>Run the Grill<br />With One Cook.</>,
  intro:
    "On a weekday with one person on the line, the same cook is running the grill, the counter and the phone. Every ticket feels urgent, and the one that matters is whichever group is pulling up next. Foreturn IQ puts every order in one queue, paid and sorted by arrival, so one cook always knows what to start.",
  heroCta: "Run a Pilot at Your Course",
  compare: {
    heading: "The Same Shift, Two Ways",
    before: "Counter, phone and paper",
    rows: [
      ["Taking orders", "Stop cooking to answer the phone or ring someone up.", "Golfers order and pay on their own phones."],
      ["Deciding what's next", "Whatever ticket is on top, or whoever is waiting.", "The queue: Prepare Now, Coming Up, Later Today."],
      ["Timing", "A guess at when each group will show.", "Each ticket's prep window tightens as the golfer gets closer."],
      ["Payment", "Handled at the window, one golfer at a time.", "Paid by card before the order reaches the kitchen."],
      ["Handoff", "Matching names to bags.", "A 4-character code per order."],
    ],
  },
  benefits: {
    heading: "One Cook, One Queue",
    sub: "Fewer jobs for the person on the line, and a clear answer to what's next.",
    items: [
      { title: "No phone to answer", body: "Orders come in from golfers' phones, so the cook isn't pulled off the grill to write one down." },
      { title: "No register for pre-orders", body: "Pre-orders are paid by card up front. Handing one over takes a code check, not a transaction." },
      { title: "A to-do list that updates itself", body: "Tickets are bucketed by when to start. When golfers share their location, tickets move up as they get closer, so the next job is always at the top." },
      { title: "See the rush before it hits", body: "Coming Up shows what's on the way, so the cook can prep ahead in a quiet minute instead of reacting when three groups pull up." },
    ],
  },
  steps: {
    heading: <>Golfers Order.<br />The Queue Sorts.<br />You Cook.</>,
    sub: "Setup takes an afternoon: a menu, QR codes on the carts and your Stripe account.",
    items: [
      { title: "Golfers order and pay from the cart", body: "They scan the QR code, pick items and a pickup window, and pay by card." },
      { title: "The queue sorts by arrival", body: "Tickets land in Prepare Now, Coming Up or Later Today, and move up as golfers get closer when they share location." },
      { title: "Cook, then hand off with a code", body: "Start what's in Prepare Now. When the golfer arrives, match the 4-character code and hand it over." },
    ],
  },
  faqs: [
    { q: "Do we need new hardware?", a: "No. The kitchen queue runs in a web browser on a screen you already have." },
    FAQ_LOCATION,
    FAQ_SOLD_OUT,
    FAQ_COST,
  ],
  demo: {
    title: "Make the Next Shift Easier",
    body: "We set up a pilot around a few tee times so you can see the queue on a real shift before committing to anything.",
  },
};

export default function ShortStaffedGolfKitchenPage() {
  return <UseCasePage c={content} />;
}
