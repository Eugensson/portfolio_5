import { contactList } from "@/lib/data";

export const Contact = () => {
  return (
    <section className="section bg-primary" id="contact">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <div className="w-full mb-8 lg:bg-contact lg:bg-center lg:bg-contain lg:bg-no-repeat">
            <h2 className="section-title">Get in Touch</h2>
          </div>
          <p className="subtitle w-full max-w-200 text-sm md:text-base">
            Have a project in mind or need web development expertise? Get in
            touch to discuss your ideas, request a quote, or start building a
            fast, responsive, and SEO-optimized website tailored to your
            business needs.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-x-8">
          <ul className="mb-12 lg:mb-0 lg:pt-2 flex flex-1 flex-col items-start space-y-8">
            {contactList.map(
              ({ id, icon: Icon, title, subtitle, description }) => (
                <li key={id} className="flex flex-col lg:flex-row gap-x-4">
                  <div className="size-14 mt-2 mb-4 lg:mb-0 flex items-start justify-center rounded-sm">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="mb-1 tetxt-xl font-body">{title}</h4>
                    <p className="mb-1">{subtitle}</p>
                    <p className="font-normal text-accent">{description}</p>
                  </div>
                </li>
              )
            )}
          </ul>
          <form className="w-full max-w-195 space-y-8">
            <div className="flex gap-8">
              <input
                className="input"
                type="text"
                name="name"
                id="name"
                placeholder="Your full name"
              />
              <input
                className="input"
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
              />
            </div>
            <input
              className="input"
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Your message"
              className="textarea"
            />
            <button type="submit" className="btn btn-lg">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
