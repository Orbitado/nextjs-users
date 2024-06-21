"use client";
import React from "react";
import { useState } from "react";
const ButtonId = ({ id }) => {
  const [showId, setShowId] = useState(false);

  return (
    <div>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowId(!showId)}
      >
        {showId ? "Hide Id" : "Show Id"}
      </button>
      <p className="text-xl left-[50%] translate-x-[-50%] mt-2 fixed">
        {showId && (
          <p>
            <span className="font-bold">Id:</span>
            {` ${id}`}
          </p>
        )}
      </p>
    </div>
  );
};

export default ButtonId;
