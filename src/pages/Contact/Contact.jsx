import React from "react";
import { Helmet } from "react-helmet";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const handleForm = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Message send successful",
      showConfirmButton: false,
      timer: 1500,
    });
    e.target.reset();
  };
  return (
    <div className="max-w-7xl mx-auto px-5 py-20">
      <Helmet>
        <title>Runova | Contact</title>
      </Helmet>

      <h2 className="text-4xl font-bold italic text-center mb-2">
        <span className="text-primary">Contact</span> Us
      </h2>
      <div className="divider mb-15"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Contact Form */}
        <form
          onSubmit={handleForm}
          className="space-y-5 bg-secondary p-8 rounded-xl shadow-lg"
        >
          <div className="space-y-2">
            <label className="block font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered bg-secondary w-full"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="input bg-secondary input-bordered w-full"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block font-semibold">Message</label>
            <textarea
              className="textarea bg-secondary textarea-bordered w-full"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button className="btn bg-primary hover:bg-accent w-full">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-5 text-lg bg-secondary p-8 rounded-xl shadow-lg">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-primary" />{" "}
            <span>pritomproshad@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-primary" /> <span>+8801758665178</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-primary" />{" "}
            <span>Naogaon, Bangladesh</span>
          </div>
          <p className="text-base-content/70 pt-4">
            We’re here to help with any inquiries related to marathons,
            registration, or platform usage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
