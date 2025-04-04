import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 absolute text-white right-1 rounded-2xl mt-5">
      <div
        className="min-w-60 text-center text-red-400 text-sm px-5 py-2"
      >
        <span>© 2025 <span className="font-semibold text-white">CTRL + WIN</span> All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;