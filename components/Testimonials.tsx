import testimonials from "../public/data/testimonials.json";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  return (
    <div id="testimonials" className="p-4 my-20">
      <h2 className="py-4">Testimonials</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialItem key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
