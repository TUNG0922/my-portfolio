"use client";
import { X } from "lucide-react";

interface MyStoryProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MyStory({ isOpen, onClose }: MyStoryProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 text-gray-200 rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
        >
          <X size={24} />
        </button>

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          My Story
        </h2>

        {/* Content */}
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          I come from an athletic background, having represented Kedah as a{" "}
          <span className="text-teal-400 font-semibold">Badminton State Player</span>. 
          Since Form 4, I made the difficult decision to step away from 
          competitive badminton to focus on academics — a choice that taught me 
          discipline, perseverance, and how to set clear priorities.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Even after shifting focus, badminton remained an important part of my journey. 
          At <span className="text-teal-400 font-semibold">Universiti Putra Malaysia (UPM)</span>, 
          I proudly represented my university in{" "}
          <span className="text-white font-semibold">MASUM</span> and{" "}
          <span className="text-white font-semibold">SUKIPT</span> tournaments, 
          continuing my passion for sports while balancing my studies.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          During university, I also worked hard to excel academically while 
          actively contributing as a{" "}
          <span className="text-teal-400 font-semibold">college representative</span>. 
          These experiences strengthened my leadership, teamwork, and 
          public speaking skills — pushing me outside my comfort zone and shaping me 
          into someone who embraces growth through challenges.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          Across sports, academics, and extracurricular activities, I learned the 
          importance of <span className="font-semibold text-white">time management</span>, 
          discipline, and continuous self-improvement. I strive to balance different 
          aspects of life while always pushing myself to become better every day.
        </p>
      </div>
    </div>
  );
}
