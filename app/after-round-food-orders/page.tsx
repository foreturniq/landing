import UseCasePage, { type UseCaseContent } from "../components/UseCasePage";
import { FAQ_APP, FAQ_COST, FAQ_LOCATION, buildUseCaseMetadata } from "../lib/useCases";

const PATH = "/after-round-food-orders";

export const metadata = buildUseCaseMetadata(
  PATH,
  "After-Round Food Ready When They Walk Off 18",
  "Golfers finishing 18 often head for the parking lot. Let them order on the back nine so food is ready as they walk off, timed to when they actually finish.",
  "Golfers order on the back nine with an After Round pickup, and food is ready as they walk off 18, timed to when they finish.",
);

const content: UseCaseContent = {
  path: PATH,
  label: "After-Round Orders",
  h1: <>Food Ready When<br />They Walk Off 18.</>,
  intro:
    "Plenty of golfers finish 18 and head straight for the parking lot. Some meant to eat but didn't want to wait in line; others didn't think about it until they were driving home. Foreturn IQ lets them order on the back nine with an After Round pickup, so the food is ready as they walk off the green.",
  heroCta: "Run a Pilot at Your Course",
  compare: {
    heading: "The Same Group, After the Round",
    before: "Order at the counter",
    rows: [
      ["When they decide", "Walking past the clubhouse, if the line is short.", "On the back nine, from the cart."],
      ["The wait", "Order, pay, then wait for the food.", "Already paid, with food timed to when they finish."],
      ["Timing", "The kitchen starts when they reach the window.", "The prep window tightens as they play the last holes, when they share location."],
      ["Groups in a hurry", "Skip it and go home.", "Grab the order with a 4-character code and go."],
    ],
  },
  benefits: {
    heading: "Revenue That Used to Leave in the Parking Lot",
    sub: "An order placed on the back nine is a sale that would otherwise drive away.",
    items: [
      { title: "Catch the group before they leave", body: "A golfer deciding on the 15th hole has time to order. The same golfer walking past a line at the window usually keeps walking." },
      { title: "Timed to the finish, not a guess", body: "Rounds rarely end on schedule. When golfers share location, the prep window tightens as they play the last holes, so food is ready when they walk off." },
      { title: "To-go without the wait", body: "Golfers heading home pick up with a code and go, which suits anyone with somewhere to be." },
      { title: "Paid before you start", body: "Every after-round order is paid by card up front, so food made for a group is food that's already sold." },
    ],
  },
  steps: {
    heading: <>Order on the Back Nine.<br />Pick Up at 18.</>,
    sub: "Same QR code, same queue, a different pickup window.",
    items: [
      { title: "Golfer orders from the cart", body: "They scan the QR code, choose the After Round pickup window and pay by card." },
      { title: "Timing follows their last holes", body: "With location shared, the prep window tightens as they approach the finish. Without it, the order runs on the estimated time." },
      { title: "Food is ready as they walk off", body: "The kitchen fires from Prepare Now and hands the order over with its 4-character code." },
    ],
  },
  faqs: [
    { q: "Can golfers eat at the clubhouse or take it home?", a: "Either. After Round orders are picked up the same way whether the golfer sits down at the 19th hole or takes the food home." },
    FAQ_LOCATION,
    FAQ_APP,
    FAQ_COST,
  ],
  demo: {
    title: "Catch Them Before They Leave",
    body: "We set up a pilot around a few tee times so you can see how many after-round orders you pick up before committing to anything.",
  },
};

export default function AfterRoundFoodOrdersPage() {
  return <UseCasePage c={content} />;
}
