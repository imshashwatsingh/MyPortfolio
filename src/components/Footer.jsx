import React from "react";

const profiles = [
  { name: "GitHub", url: "https://github.com/imshashwatsingh" },
  { name: "LinkedIn", url: "https://linkedin.com/in/shashwat-singh14/" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-center py-6 text-white font-sans">
      <div className="flex flex-wrap justify-center gap-6 mb-4">
        {profiles.map((profile, index) => (
          <a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium hover:transition duration-300 text-white hover:text-green-400"
          >
            {profile.name}
          </a>
        ))}
      </div>
      <p className="text-sm md:text-base mt-4 px-4 text-gray-400 leading-relaxed">
        © {new Date().getFullYear()} Made with ❤️ by <a  target="_blank"
            rel="noopener noreferrer" href={profiles[1].url} >Shashwat Singh</a>
      </p>
    </footer>
  );
};

export default Footer;
