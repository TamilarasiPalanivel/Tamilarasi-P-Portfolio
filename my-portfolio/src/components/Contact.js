const Contact = () => {
    return (
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 rounded bg-gray-800 text-white"
            rows="4"
          ></textarea>
          <button className="bg-yellow-500 px-4 py-2 rounded">Send</button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  