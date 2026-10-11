import UseCasePage, { type UseCaseContent } from "../components/UseCasePage";
import { FAQ_COST, buildUseCaseMetadata } from "../lib/useCases";

const PATH = "/weather-delay-food-orders";

export const metadata = buildUseCaseMetadata(
  PATH,
  "Weather Delays Without Wasted Food at the Turn",
  "When the horn blows, a fixed pickup time keeps counting down. Prep that follows the golfer's location waits until the group starts moving toward you again.",
  "During a lightning hold, food timed to the clock gets made for golfers stuck in shelter. Prep that follows their location waits.",
);

const content: UseCaseContent = {
  path: PATH,
  label: "Weather Delays",
  h1: <>Weather Delays<br />Without Wasted Food.</>,
  intro:
    "When the horn blows for lightning, the course stops. Groups head for shelter or sit in their carts, and nobody knows how long it will last. Orders on a fixed schedule keep coming due, so food gets made for golfers who are nowhere near the turn. With Foreturn IQ, prep follows where each group actually is.",
  heroCta: "Run a Pilot at Your Course",
  compare: {
    heading: "The Same Delay, Handled Two Ways",
    before: "Fixed pickup times",
    rows: [
      ["When play stops", "Tickets keep counting down to the original pickup time.", "A group that isn't getting closer doesn't move up the queue."],
      ["When play resumes", "The kitchen guesses who is coming and when.", "Prep windows tighten again as groups start moving toward you."],
      ["Food made early", "Sits under a heat lamp or gets thrown out.", "Less is made early, because prep waits for the group."],
      ["Groups that call it a day", "Food made for golfers who went home.", "Cancel the order from the queue and the golfer gets a full refund to their card."],
    ],
  },
  benefits: {
    heading: "A Delay That Doesn't Cost You the Food",
    sub: "Prep tied to where golfers are, not to a time set before the weather turned.",
    items: [
      { title: "Prep waits when play stops", body: "The prep window tightens only as a golfer gets closer, so a group sitting out a lightning hold on the back nine isn't pushed to Prepare Now by the clock." },
      { title: "The queue sorts itself when play resumes", body: "As groups start moving again, their tickets move up in the order they're actually approaching, so the kitchen isn't hit with every delayed order at once." },
      { title: "Less food in the trash", body: "Burgers and fries made for a group stuck in shelter usually get thrown out. Firing to real arrival means less is made before anyone can eat it." },
      { title: "Clean refunds for groups that leave", body: "If a group calls it a day, cancel the order from the queue and they get a full refund to their card, service fee included." },
    ],
  },
  steps: {
    heading: <>Play Stops.<br />Prep Waits.<br />Fire When They Move.</>,
    sub: "For every golfer sharing location, the queue adjusts on its own.",
    items: [
      { title: "Golfers order and share location", body: "They order before the round or from the cart and allow location, so their ticket follows where they are." },
      { title: "The horn blows, and their tickets hold", body: "While groups sit out the delay, they aren't getting closer, so their prep windows don't tighten." },
      { title: "Play resumes, and prep picks back up", body: "As each group heads toward pickup, its ticket moves up and the kitchen fires it as they approach." },
    ],
  },
  faqs: [
    { q: "What about golfers who don't share their location?", a: "Their orders run on the estimated arrival time, like any scheduled order, so they still come due on the clock during a delay. Keep an eye on those tickets, or cancel and refund them from the queue if the group heads in." },
    { q: "What if we close the grill during the delay?", a: "Turn items off in the admin panel and golfers stop seeing them right away. Orders already paid for can be cancelled from the queue with a full refund to the golfer's card, service fee included." },
    FAQ_COST,
  ],
  demo: {
    title: "See It at Your Course",
    body: "We set up a pilot around a few tee times so you can see how the queue tracks real arrivals before committing to anything.",
  },
};

export default function WeatherDelayFoodOrdersPage() {
  return <UseCasePage c={content} />;
}
