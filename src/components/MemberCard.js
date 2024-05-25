import React, { useState } from "react";

export default function MemberCard({ member }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleHoverEnter = () => {
    setShowDetails(true);
  };

  const handleHoverLeave = () => {
    setShowDetails(false);
  };

  return (
    <div onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>
      <div className="flex flex-row justify-center items-center p-4 m-4 bg-purple-300 rounded-lg w-64 h-80 hover:w-96 hover:items-start hover:justify-start">
        {!showDetails && (
          <div className="flex flex-col">
            <img
              className=" w-50 h-50 rounded-lg"
              src={member.picture}
              alt={member.name}
            />
            <h2 className=" mt-1 font-bold text-purple-700 text-lg">
              {member.name}
            </h2>
            <p className=" text-gray-500 font-semibold">{member.position}</p>
          </div>
        )}

        {showDetails && (
          <div className="flex flex-row">
            <div>
              <img
                className=" w-40 h-40 rounded-lg"
                src={member.picture}
                alt={member.name}
              />
              <h2 className=" mt-1 font-bold text-purple-700 text-sm">
                {member.name}
              </h2>
            </div>

            <div className="ml-4 flex flex-col">
              <p className="text-gray-700">BIO</p>
              <p className="text-gray-700">email@email.com</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
