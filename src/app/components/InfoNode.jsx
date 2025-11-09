// components/InfoNode.js
"use client";
import React from "react";

function InfoNode({ data }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-xl border border-gray-200 max-w-xs text-center">
      <p className="text-gray-700">{data.label}</p>
    </div>
  );
}

export default InfoNode;