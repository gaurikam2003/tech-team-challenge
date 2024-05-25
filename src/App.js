import React from "react";
import "./App.css";
import data from "./members_details.json";

import MemberCard from "./components/MemberCard";

function App() {
  return (
    <div className=" flex justify-center items-center w-full">
      <div className=" flex-col m-10">
        <h1 className=" font-bold text-purple-700 text-4xl rounded-lg p-4 w-1/2 text-center bg-purple-100">
          Meet the Orientation Committee!
        </h1>
        <div className="flex flex-wrap items-center justify-center h-1/4 bg-gray-100 rounded-lg mt-4">
          {data.map((member) => (
            <MemberCard member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
