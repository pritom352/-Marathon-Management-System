import React, { useContext } from "react";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router";

const Footer = () => {
  const { user } = useContext(AuthContext);

  const links = (
    <ul className="flex flex-col gap-2 text-base-content">
      <li>
        <NavLink
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group relative inline-block w-fit"
        >
          Home
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-200"></span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/marathons"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group relative inline-block w-fit"
        >
          Marathons
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-200"></span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group relative inline-block w-fit"
        >
          About Us
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-200"></span>
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/dashboard"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group relative inline-block w-fit"
          >
            Dashboard
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-200"></span>
          </NavLink>
        </li>
      )}
    </ul>
  );

  return (
    <div className="pt-20">
      <footer className="bg-secondary py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 flex-wrap max-w-7xl mx-auto px-6">
          {/* Branding */}
          <div className="flex-1 min-w-[250px]">
            <h2 className="text-3xl font-bold italic mb-4">
              <span className="text-primary">Run</span>ova
            </h2>
            <p className="text-sm text-gray-400">
              Create events, register participants, and manage everything easily
              and securely on our platform.
            </p>
          </div>

          {/* Links */}
          <div className="flex-1 min-w-[250px]">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
              {links}
            </div>
          </div>

          {/* Contact */}
          <div className="flex-1 min-w-[250px]">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
              <ul className="space-y-2 text-base-content">
                <li className="flex items-center gap-2">
                  <FaEnvelope /> pritomproshad@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <FaPhoneAlt /> +8801758665178
                </li>
                <li className="flex items-center gap-2">
                  <FaMapMarkerAlt /> Naogaon, BD
                </li>
              </ul>
            </div>
          </div>

          {/* Social */}
          <div className="flex-1 min-w-[250px]">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <div className="flex flex-col gap-3 text-base-content">
                <a
                  href="https://facebook.com"
                  className="hover:text-primary flex items-center gap-2"
                >
                  <FaFacebookF size={20} /> Facebook
                </a>
                <a
                  href="https://github.com"
                  className="hover:text-primary flex items-center gap-2"
                >
                  <FaGithub size={20} /> GitHub
                </a>
                <a
                  href="https://twitter.com"
                  className="hover:text-primary flex items-center gap-2"
                >
                  <FaSquareXTwitter size={20} /> Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
          VibeVenue. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
