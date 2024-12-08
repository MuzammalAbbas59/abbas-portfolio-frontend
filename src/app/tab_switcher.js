
"use client"; // This tells Next.js this component uses client-side functionality

import { useState } from "react";
import SoftwareEngineer from "../components/software_engineer";
import Poetry from "../components/poetry";

const TabSwitcher = ({ poems, experiences }) => {
  const [tab, setTab] = useState("software"); // Tab state to switch between Software Engineer and Poetry sections

  return (
    <div>
      {/* Tab buttons for switching between sections */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setTab("software")}
          className={`px-4 py-2 mx-2 rounded ${
            tab === "software" ? "bg-yellow-400 text-black" : "bg-gray-700 text-white"
          }`}
        >
          Software Engineer
        </button>
        <button
          onClick={() => setTab("poetry")}
          className={`px-4 py-2 mx-2 rounded ${
            tab === "poetry" ? "bg-yellow-400 text-black" : "bg-gray-700 text-white"
          }`}
        >
          Poet
        </button>
      </div>

      {/* Render different components based on selected tab */}
      <div className="mt-10">
        {tab === "software" ? (
          <SoftwareEngineer experiences={experiences} />
        ) : (
          <Poetry poems={poems} />
        )}
      </div>
    </div>
  );
};

export default TabSwitcher;

