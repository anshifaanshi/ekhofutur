import React from "react";
import { useLocation } from "react-router-dom";

const mapping = {
  
  "/solar": "https://solar-two-nu.vercel.app/",
  "/pureflow": "https://pureflow-xi.vercel.app/",
  "/wellnes":"https://wellnesscenter-six.vercel.app/",
  "/coworking":"https://coworkingspace-psi.vercel.app/",
  "/it":"https://itservice-92jh.vercel.app/",
  "/ekhora":"https://travel-mu-ivory.vercel.app/",
  "/compliment":"https://cookware-three.vercel.app/",
  "/homeappliances":"https://homeappliances-one.vercel.app/",
  "/speech":"https://speech-iota-one.vercel.app/",
  '/lubnas':"https://coruscating-blancmange-28365c.netlify.app/",
  "/trendsetter":"https://trendsetter-three.vercel.app/",
  "/oldschool" :"https://oldschool-three.vercel.app/",
  // add all other routes here
};

export default function RedirectPage() {
  const location = useLocation();
  const externalLink = mapping[location.pathname];

  if (!externalLink) return <div>Page not found</div>;

  return (
    <iframe
      src={externalLink}
      title="Redirect Page"
      className="w-full h-screen"
      style={{ border: "none" }}
    ></iframe>
  );
}
