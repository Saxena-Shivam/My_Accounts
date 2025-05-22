import React, { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Instagram, Code, Copy } from "lucide-react";
import "./App.css";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/Saxena-Shivam", icon: <Github /> },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shivam-saxena-aa8754289/",
    icon: <Linkedin />,
  },
  { name: "Twitter", url: "https://x.com/Shivam562006", icon: <Twitter /> },
  {
    name: "Instagram",
    url: "https://www.instagram.com/its_the_shivam_/",
    icon: <Instagram />,
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/shivamsaxena562006",
    icon: <Code />,
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/shivamsaxena56",
    icon: <Code />,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/shivamsaxena56/",
    icon: <Code />,
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/user/shivamsaxenni1/",
    icon: <Code />,
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/shivamsaxena56",
    icon: <Code />,
  },
  {
    name: "HackerEarth",
    url: "https://www.hackerearth.com/@shivam5572/",
    icon: <Code />,
  },
  {
    name: "AtCoder",
    url: "https://atcoder.jp/users/shivamsaxena56",
    icon: <Code />,
  },
  { name: "SPOJ", url: "https://www.spoj.com/", icon: <Code /> },
];

export default function SocialLinksPage() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (url, index) => {
    navigator.clipboard.writeText(url);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <>
      <div
        className="custom-dot-cursor"
        style={{ left: cursor.x, top: cursor.y }}
      />
      <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-8 relative overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {socialLinks.map((link, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-white to-gray-100 transition-all duration-300 rounded-2xl shadow-xl flex flex-col items-center"
            >
              <div className="text-3xl mb-2 text-purple-600">{link.icon}</div>
              <p className="font-semibold text-lg mb-3 text-gray-800">
                {link.name}
              </p>
              <div className="flex flex-col w-full gap-2">
                <button
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white hover:bg-purple-600 hover:text-white cursor-pointer py-2 px-4 rounded transition"
                  onClick={() => copyToClipboard(link.url, index)}
                >
                  <Copy className="w-4 h-4" /> Copy URL
                </button>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white hover:bg-purple-600 hover:text-white cursor-pointer py-2 px-4 rounded transition text-center"
                >
                  Visit
                </a>
              </div>
              {copiedIndex === index && (
                <p className="text-sm text-green-500 mt-2">Copied!</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
