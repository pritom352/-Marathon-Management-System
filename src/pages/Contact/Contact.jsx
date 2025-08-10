import React from "react";
import { Helmet } from "react-helmet";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import contactIMG from "../../assets/contactIMG.jpg";
import Swal from "sweetalert2";

const Contact = () => {
  const handleForm = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Message sent successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    e.target.reset();
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <Helmet>
        <title>Runova | Contact</title>
      </Helmet>

      {/* Banner */}
      <div
        className="bg-primary text-white rounded-lg py-20 flex flex-col items-center justify-center mb-16 bg-cover bg-center"
        style={{
          backgroundImage: `url(${contactIMG})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.5)", // optional for dark overlay to improve text visibility
        }}
      >
        <h1 className="text-5xl font-extrabold tracking-wide mb-4">CONTACT</h1>
        <p className="text-lg max-w-xl text-center opacity-90">
          Get in touch with us for any inquiries, support, or feedback.
        </p>
      </div>

      {/* Main Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Part */}
        <div className="flex flex-col justify-center bg-secondary p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-3 text-primary">
            WE'D LOVE TO HEAR FROM YOU
          </h2>
          <div className="w-20 border-b-4 border-primary mb-8"></div>

          <div className="space-y-6 text-gray-900 text-lg">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-primary text-xl" />
              <span>pritomproshad@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-primary text-xl" />
              <span>+8801758665178</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-primary text-xl" />
              <span>Naogaon, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Right Part - Form */}
        <form
          onSubmit={handleForm}
          className="space-y-6 bg-secondary p-10 rounded-xl shadow-lg"
        >
          <div className="space-y-2">
            <label className="block font-semibold text-gray-800">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered bg-secondary w-full focus:border-primary focus:ring-primary"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block font-semibold text-gray-800">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered bg-secondary w-full focus:border-primary focus:ring-primary"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block font-semibold text-gray-800">Message</label>
            <textarea
              className="textarea textarea-bordered bg-secondary w-full focus:border-primary focus:ring-primary"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button className="btn bg-primary hover:bg-accent text-white w-full">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
