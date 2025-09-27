import { serviceList } from "@/lib/data";

export const Services = () => {
  return (
    <section className="section bg-tertiary" id="services">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <div className="w-full mb-8 lg:bg-services lg:bg-center lg:bg-contain lg:bg-no-repeat">
            <h2 className="section-title">Services I Provide</h2>
          </div>
          <p className="subtitle w-full max-w-200 text-sm md:text-base">
            I provide modern and responsive web development services, including
            website design, front-end development, and optimization. With
            expertise in JavaScript, React, and Next.js, I build fast,
            user-friendly, and SEO-optimized websites that help businesses
            attract more clients and grow online.
          </p>
        </div>
        <ul className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {serviceList.map(({ icon: Icon, name, description }) => (
            <li key={name} className="p-6 rounded-2xl bg-secondary">
              <div className="size-12 mb-24 flex items-center justify-center rounded-sm text-accent">
                <Icon size={28} />
              </div>
              <h4 className="mb-2 text-xl font-medium">{name}</h4>
              <p className="text-sm md:text-base">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
