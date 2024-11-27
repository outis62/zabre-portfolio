import React from "react";


export default function Footer() {
  return (
    <footer className="container mx-auto text-[10px]">
      <div className="flex justify-between items-center mt-12 text-[10px] border-t-2 py-4">
        <span className="flex">
          Copyright 2024 &copy; Built by&nbsp;
          <a href="javascript:void(0);" target="_blank">
            YTech
          </a>
        </span>
        <ul className="flex gap-5">
          <li>Privacy Policy</li>
          <li>Termes & Conditions</li>
          <li>Disclaimer</li>
          <li>Support</li>
          <li>FAQ</li>
        </ul>
      </div>
    </footer>
  );
}
