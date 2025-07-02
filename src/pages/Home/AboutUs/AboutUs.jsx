import React from "react";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <div className="  bg-accent text-[#1E1E1E] px-4 md:px-10 my-20">
      <div className="max-w-6xl mx-auto space-y-10">
        <h1 className="text-3xl md:text-5xl font-bold text-primary text-center mb-2">
          About <span className="text-secondary">Runova</span>
        </h1>
        <div className="divider mb-15"></div>

        <p className="text-lg leading-8 text-center max-w-3xl mx-auto">
          Runova is a powerful and intuitive platform built to simplify marathon
          event management for organizers and participants alike. Whether you're
          hosting a city-wide race or joining your first 5K, Runova connects the
          community through fitness, organization, and innovation.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-accent rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-primary mb-2">
              For Organizers
            </h3>
            <p className="text-sm leading-relaxed">
              Easily publish events, manage participants, track registrations,
              and update event details—all from your personalized dashboard.
            </p>
          </div>

          <div className="bg-accent rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-primary mb-2">For Runners</h3>
            <p className="text-sm leading-relaxed">
              Discover marathons, apply in seconds, stay informed, and prepare
              with confidence. Registration and details—right at your
              fingertips.
            </p>
          </div>

          <div className="bg-accent rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-primary mb-2">Our Vision</h3>
            <p className="text-sm leading-relaxed">
              We believe in connecting people through purpose and passion.
              Runova aims to build a future where fitness events are inclusive,
              accessible, and digitally seamless.
            </p>
          </div>
        </div>

        <div className="text-center pt-10">
          <h4 className="text-2xl font-semibold text-secondary mb-4">
            Want to get started?
          </h4>
          <Link to={"/marathons"}>
            <button className="bg-primary hover:bg-secondary text-white font-medium px-6 py-2 rounded-full transition">
              Explore Marathons
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
