import ReviewCard from "../components/ReviewCard";
import { reviews } from "../data";

function CustomerReviews() {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customer</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our sastified customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 items-center justify-evenly gap-14 max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard review={review} key={review.customerName} />
        ))}
      </div>
    </section>
  );
}

export default CustomerReviews;
