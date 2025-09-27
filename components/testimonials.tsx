import { TestimonialSlider } from "@/components/testimonial-slider";

export const Testimonials = () => {
  return (
    <section className="section bg-secondary" id="testimonials">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <div className="w-full mb-8 lg:bg-testimonials lg:bg-center lg:bg-contain lg:bg-no-repeat">
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <p className="subtitle w-full max-w-200 text-sm md:text-base">
            Hear from our satisfied clients who have experienced high-quality
            web development, responsive design, and seamless user experiences.
            Their testimonials highlight our commitment to delivering fast,
            reliable, and SEO-optimized websites tailored to each business.
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};
