const ContactForm = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-black/10 mt-10">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl text-white font-bold mb-6 text-center">Contact Me</h2>

        <form
          action="https://formspree.io/f/mdkzaqea" // 🔁 Replace with your actual Formspree endpoint
          method="POST"
          className="space-y-6 bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/70 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/70 outline-none"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/70 outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-white/80 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
