import testimonials from "../public/data/testimonials.json";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  return (
    <div id="testimonials" className="p-4 my-20">
      <h2 className="py-4">Testimonials</h2>
      <div className="flex flex-wrap justify-around">
        {testimonials.map((testimonial) => (
          <TestimonialItem key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
