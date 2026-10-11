import Link from "next/link";
import UseCasePage, { type UseCaseContent } from "../components/UseCasePage";
import { FAQ_APP, FAQ_COST, FAQ_LOCATION, FAQ_SOLD_OUT, buildUseCaseMetadata } from "../lib/useCases";

const PATH = "/call-ahead-turn-orders";

export const metadata = buildUseCaseMetadata(
  PATH,
  "Take Turn Orders Off the Phone",
  "Golfers call the grill from the course to order at the turn. Pre-orders move that call to their phone: paid up front, timed to arrival, no one on the line.",
  "Replace the call-ahead number on the tee sign with a pre-order golfers place from the cart. Paid up front, timed to their arrival.",
);

const content: UseCaseContent = {
  path: PATH,
  label: "Call-Ahead Turn Orders",
  h1: <>Take Turn Orders<br />Off the Phone.</>,
  intro:
    "Plenty of courses run the turn on a phone number: a sign on the tee before the turn that says call ahead to the grill. Someone at the counter answers mid-rush, writes the order down over cart noise and hopes the group shows up. Foreturn IQ moves that call to the golfer's own phone. They order from the cart, pay up front, and your kitchen sees exactly when to start.",
  heroCta: "Run a Pilot at Your Turn",
  compare: {
    heading: "The Same Turn Order, Taken Two Ways",
    before: "Call-ahead by phone",
    rows: [
      ["How the order starts", "The golfer finds the number on the tee sign and calls the grill.", "The golfer scans the QR code on the cart and orders on their own phone."],
      ["Who handles it", "Whoever is nearest the phone, usually in the middle of ringing someone up.", "Nobody. It lands in the kitchen queue on its own."],
      ["When prep starts", "When the written ticket reaches the kitchen.", "Timed to the group's arrival, and tightened by their phone's location as they approach."],
      ["When it's paid", "At pickup, if the group stops.", "Up front, by card, before prep starts."],
      ["Three groups at once", "Calls stack up or ring out.", "Three tickets in the queue, ordered by arrival."],
      ["At pickup", "A name called across the patio.", "A 4-character pickup code."],
    ],
    note: (
      <>
        For the full breakdown of phone orders across the whole round, including what the calls cost in staff time, see{" "}
        <Link href="/phone-orders-vs-pre-orders" className="text-navy font-semibold underline underline-offset-4">
          Phone Orders vs Pre-Orders
        </Link>
        .
      </>
    ),
  },
  benefits: {
    heading: "A Turn That Runs Without the Phone",
    sub: "Orders come in from the cart, paid and timed. The counter serves the people standing at it.",
    items: [
      { title: "No phone ringing during the rush", body: "Turn calls arrive at the same moment groups are standing at the counter. With pre-orders, golfers order from the cart and the ticket goes straight to the kitchen queue. Nobody has to pick up." },
      { title: "The kitchen knows when, not just what", body: "Each ticket shows the group's predicted arrival and when to start, bucketed Prepare Now, Coming Up and Later Today. If the golfer shares their location, the prep window tightens as they get closer to the turn, so food is ready when they pull up." },
      { title: "Paid before the grill starts", body: "A call-ahead order is a promise. A pre-order is paid by card before prep begins, so a group that skips the stop doesn't leave you with food nobody pays for." },
      { title: "Nothing misheard over cart noise", body: "Golfers tap items from your own menu, so the ticket says exactly what they picked. Pickup uses a 4-character code instead of a name shouted across the patio." },
    ],
  },
  steps: {
    heading: <>Scan on the Front Nine.<br />Pick Up at the Turn.</>,
    sub: "No hardware to install and nothing to change at the counter.",
    items: [
      { title: "QR codes go on the carts", body: "Golfers scan the code on the front nine. It opens your menu in their phone's browser, with no app and no account." },
      { title: "Golfer picks At the Turn and pays", body: "They choose their food and drinks, select the At the Turn pickup window and pay by card. The order lands in your kitchen queue right away." },
      { title: "Kitchen preps on time, golfer picks up with a code", body: "The ticket shows when to start. When the group pulls up, staff match the 4-character code and hand the order over." },
    ],
  },
  faqs: [
    { q: "Do we have to get rid of our call-ahead number?", a: "No. Keep it for the regular who always calls or anyone who would rather talk to a person. Pre-orders take the routine turn calls off the counter so the calls you still take get full attention." },
    FAQ_APP,
    FAQ_LOCATION,
    { ...FAQ_SOLD_OUT, q: "What if we run out of something mid-round?" },
    FAQ_COST,
  ],
  demo: {
    title: "Run It at Your Turn",
    body: "We set up a pilot around a few tee times so you can compare it with your call-ahead line before committing to anything.",
  },
};

export default function CallAheadTurnOrdersPage() {
  return <UseCasePage c={content} />;
}
