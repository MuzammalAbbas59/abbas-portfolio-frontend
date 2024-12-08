import { useEffect, useState } from "react";

const SoftwareEngineer = ({ experiences }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-yellow-300 mb-6">Software Engineer Experience</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences && experiences.length > 0 ? (
          experiences.map((experience, index) => (
            <div
              key={index}
              className={`bg-gray-800 p-6 rounded shadow-lg transition ${
                isVisible
                  ? index % 2 === 0
                    ? "animate-slide-in-top" // Card comes from top for even items
                    : "animate-slide-in-right" // Card comes from the right for odd items
                  : ""
              }`}
            >
              <h3 className="text-xl font-semibold text-yellow-300">{experience.title}</h3>
              <p className="text-white">{experience.description}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-white">No experiences available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default SoftwareEngineer;
