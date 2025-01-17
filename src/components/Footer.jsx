import React from "react";

const profiles = [
  { name: "GitHub", url: "https://github.com/imshashwatsingh" },
  { name: "LinkedIn", url: "https://linkedin.com/in/shashwat-singh14/" },
];

const Footer = () => {
  return (
    <footer
      className="bg-primary text-center py-6"
      style={{
        fontFamily: "Arial, sans-serif"
      }}
    >
      <div
        className="flex justify-center gap-8 mb-4"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {profiles.map((profile, index) => (
          <a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-lg font-medium transition duration-300 text-green-500"
            style={{
              color: "#fff",
              fontSize: "18px",
              fontWeight: "500",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#22c55e")}
            onMouseLeave={(e) => (e.target.style.color = "#fff")}
          >
            {profile.name}
          </a>
        ))}
      </div>
      <p
        className="text-md mt-4 text-black"
        style={{
          margin: "10px 0",
          color: "#fff",
          fontSize: "16px",
          padding: "0 20px",
          lineHeight: "1.5",
        }}
      >
        © {new Date().getFullYear()} Shashwat Singh. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
