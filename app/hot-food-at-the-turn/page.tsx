import Link from "next/link";
import UseCasePage, { type UseCaseContent } from "../components/UseCasePage";
import { FAQ_APP, FAQ_COST, FAQ_LOCATION, buildUseCaseMetadata } from "../lib/useCases";

const PATH = "/hot-food-at-the-turn";

export const metadata = buildUseCaseMetadata(
  PATH,
  "Hot Food at the Turn, Whatever the Pace",
  "A round can run fast or slow, so a fixed pickup time is usually wrong. Prep that tightens as golfers get closer has food coming off the grill as they arrive.",
  "A pickup time set at the first tee is a guess. Prep that tightens as golfers get closer keeps turn food hot, fast group or slow.",
);

const content: UseCaseContent = {
  path: PATH,
  label: "Hot Food at the Turn",
  h1: <>Hot Food at the Turn,<br />Whatever the Pace.</>,
  intro:
    "A Saturday round can run anywhere from four hours to five and a half. A pickup time set at the first tee is a guess, and the food pays for it: made too early it sits under a heat lamp, made too late the group waits or drives on. Foreturn IQ tightens the prep window as the golfer gets closer, so food comes off the grill when they pull up.",
  heroCta: "Run a Pilot at Your Turn",
  compare: {
    heading: "The Same Burger, Timed Two Ways",
    before: "A fixed pickup time",
    rows: [
      ["How timing is set", "Once, when the order is placed.", "Estimated when the order is placed, then tightened as the golfer gets closer."],
      ["A slow group", "Food is ready early and sits.", "Prep waits until they're actually close."],
      ["A fast group", "They arrive before the food is ready.", "Their window tightens sooner, so prep starts sooner."],
      ["What the golfer gets", "Whatever has been sitting, or a wait.", "Food made for the moment they arrive."],
    ],
    note: (
      <>
        Still taking turn orders by phone? See{" "}
        <Link href="/call-ahead-turn-orders" className="text-navy font-semibold underline underline-offset-4">
          Call-Ahead Turn Orders
        </Link>
        .
      </>
    ),
  },
  benefits: {
    heading: "Food Made for the Moment They Arrive",
    sub: "Timing that follows the round as it's actually played.",
    items: [
      { title: "Pace of play stops being a guess", body: "Fast groups and slow groups get different timing on their own. When golfers share location, the prep window follows their progress around the course." },
      { title: "Less food sitting under the lamp", body: "Fries and burgers are good for a few minutes. Starting prep as the group gets close keeps food from going limp while it waits." },
      { title: "The turn golfers remember", body: "Hot food is what golfers remember about the turn. Getting the timing right is most of getting the food right." },
      { title: "The kitchen knows what's next", body: "The queue is bucketed Prepare Now, Coming Up and Later Today, and tickets move up as golfers approach, so the line always knows what to start." },
    ],
  },
  steps: {
    heading: <>Order on the Front Nine.<br />Eat at the Turn.</>,
    sub: "No hardware and nothing new for golfers to learn.",
    items: [
      { title: "Golfer orders from the cart", body: "They scan the QR code, pick food and drinks, choose At the Turn and pay by card. No app, no account." },
      { title: "Their phone shares location", body: "With permission, the ticket's timing follows them around the course. Without it, the order runs on the estimated time." },
      { title: "Kitchen fires as they approach", body: "When the ticket reaches Prepare Now, the kitchen starts. The golfer picks up with a 4-character code." },
    ],
  },
  faqs: [
    FAQ_LOCATION,
    { q: "Does it work for drinks and cold items too?", a: "Yes. Anything on your menu can be pre-ordered. Timing matters most for hot food, but every order goes through the same queue." },
    FAQ_APP,
    FAQ_COST,
  ],
  demo: {
    title: "Try It at Your Turn",
    body: "We set up a pilot around a few tee times so you can see the timing on your own grill before committing to anything.",
  },
};

export default function HotFoodAtTheTurnPage() {
  return <UseCasePage c={content} />;
}
