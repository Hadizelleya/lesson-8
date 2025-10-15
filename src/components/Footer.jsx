import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  const socialMedia = [
    {
      name: "facebook",
      icon: <FaFacebook />,
      url: "https://www.facebook.com",
    },
    {
      name: "instagram",
      icon: <FaInstagramSquare />,
      url: "https://www.instagram.com",
    },
    {
      name: "Twitter",
      icon: <FaSquareXTwitter />,
      url: "https://www.twitter.com",
    },
    {
      name: "youtube",
      icon: <FaYoutube />,
      url: "https://www.youtube.com",
    },
  ];

  const supportLinks = [
    {
      label: "devloopmint@gmail.com",
      value: "mailto:devloopmint@gmail.com",
    },
    {
      label: "03555666",
      value: "tel:+96103555666",
    },
    {
      label: "Address: lebanon",
      value: "lebanon",
    },
  ];

  return (
    <div className="bg-(--color-bg) flex items-center justify-evenly p-4">
      <div className="flex flex-col items-center gap-2">
        {socialMedia.map((app) => (
          <Link
            key={app.name}
            target="_blank"
            to={app.url}
            className=" text-(--color-white) text-3xl "
          >
            {app.icon}
          </Link>
        ))}
      </div>

      <div className="flex flex-col items-center gap-2">
        {supportLinks.map((link) => (
          <Link
            key={link.value}
            className="text-2xl text-(--color-white)"
            to={link.value}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
