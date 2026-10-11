import Link from "next/link";
import UseCasePage, { type UseCaseContent } from "../components/UseCasePage";
import { FAQ_COST, FAQ_LOCATION, FAQ_SOLD_OUT, buildUseCaseMetadata } from "../lib/useCases";

const PATH = "/shotgun-start-food-orders";

export const metadata = buildUseCaseMetadata(
  PATH,
  "Shotgun Start Food Orders Without the Pileup",
  "On a shotgun start, every group reaches the turn at a different time. Pre-orders fire each group's food as their phone shows them getting close.",
  "Take every outing order before the shotgun, paid up front, and fire each group's food as they actually get close.",
);

const content: UseCaseContent = {
  path: PATH,
  label: "Shotgun Starts & Outings",
  h1: <>Shotgun Start Food Orders,<br />Without the Pileup.</>,
  intro:
    "On a shotgun start, every group tees off at once from a different hole, so the turn doesn't come on any schedule. The kitchen either makes food early and watches it sit, or gets buried when six groups pull up together. Foreturn IQ takes each order before the shotgun and fires it as that group actually gets close.",
  heroCta: "Run a Pilot at Your Next Outing",
  compare: {
    heading: "The Same Outing, Run Two Ways",
    before: "Sheets, tabs and phone calls",
    rows: [
      ["When orders come in", "On a sheet at registration, by phone, or all at once at the counter.", "Before the shotgun, from each golfer's phone, paid up front."],
      ["When prep starts", "When someone guesses the first groups are close.", "Per group, as their phone's location shows them getting close."],
      ["Groups arriving together", "A crush at the counter and a line that slows the field.", "Tickets lined up in the order groups are actually arriving."],
      ["Payment", "Run on a tab or collected at the counter.", "Paid by card before the kitchen starts."],
      ["At pickup", "Names shouted across a crowded patio.", "A 4-character code for every order."],
    ],
    note: (
      <>
        Running a weekly league instead of a one-off event? See{" "}
        <Link href="/golf-league-pre-orders" className="text-navy font-semibold underline underline-offset-4">
          Golf League Pre-Orders
        </Link>
        .
      </>
    ),
  },
  benefits: {
    heading: "An Outing Your Kitchen Can Plan For",
    sub: "A count before the first tee shot, and each group's food fired as they get close.",
    items: [
      { title: "A count before the first tee shot", body: "Golfers order before the shotgun, so the kitchen sees the full picture before play starts: what to stock, what to prep ahead and what to make to order." },
      { title: "Prep follows each group", body: "With groups starting on different holes, there is no single turn time. When golfers share their location, each group's prep window tightens as they get closer, so food is made for the group that's actually arriving." },
      { title: "No crush at the counter", body: "Groups pick up with a code instead of waiting to order and pay, so the line moves and the field keeps its pace." },
      { title: "Paid before the kitchen starts", body: "Every order is paid by card up front, so there are no tabs to chase after the event and no food made for a group that never stops." },
    ],
  },
  steps: {
    heading: <>Share a Link.<br />Tee Off.<br />Pick Up.</>,
    sub: "For member-guests, charity scrambles and corporate outings.",
    items: [
      { title: "Share the pre-order link with the field", body: "Send it with the event details or put QR codes on the carts. Golfers order from their own phone, with no app and no account." },
      { title: "Golfers order, pay and share location", body: "They pick food and drinks and a pickup window, pay by card, and allow location so the kitchen can time their order." },
      { title: "The kitchen works the queue as groups approach", body: "Tickets move up as each group gets closer. Staff hand over each order with its 4-character code." },
    ],
  },
  faqs: [
    { q: "Can the event organizer send the link ahead of time?", a: "Yes. The pre-order link can go out with the event email, the registration confirmation or a text to the field, and the QR codes on the carts work on the day." },
    FAQ_LOCATION,
    FAQ_SOLD_OUT,
    FAQ_COST,
  ],
  demo: {
    title: "Run It at Your Next Outing",
    body: "We set up a pilot around an outing on your calendar so you can see the queue on your busiest kind of day before committing to anything.",
  },
};

export default function ShotgunStartFoodOrdersPage() {
  return <UseCasePage c={content} />;
}
