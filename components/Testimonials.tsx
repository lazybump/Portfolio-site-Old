import testimonials from "../public/data/testimonials.json";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  return (
    <div id="testimonials" className="w-full p-2 my-20">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-primary-color">
          Testimonials
        </p>
        <h2 className="py-4 mb-10">Here what they have to say</h2>
        <div className="flex flex-wrap justify-around">
          {testimonials.map((testimonial) => (
            <TestimonialItem key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
