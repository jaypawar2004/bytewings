// src/app/components/FadedNode.jsx
"use client";
import React from "react";
// 1. ReactFlow waale imports HATA DIYE
import { UserIcon } from "@heroicons/react/24/outline";

// 2. Props ko '{ data, selected }' se badal kar '{ name, active }' kar diya
function FadedNode({ name, active }) {
  
  // 3. 'isActive' ko 'selected' ki jagah seedha 'active' prop se set kiya
  const isActive = active;

  return (
    <>
      {/* 4. ReactFlow waala <Handle> tag HATA DIYA */}
      
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-full transition-all
          ${
            isActive // Ab yeh 'active' prop se chalega
              ? "bg-white border border-black shadow-lg"
              : "bg-gray-50 text-gray-400 opacity-60"
          }`}
      >
        <div
          className={`p-2 rounded-full ${
            isActive ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          <UserIcon className="w-5 h-5" />
        </div>
        
        {/* 5. 'data.label' ki jagah 'name' prop ka istemaal kiya */}
        <p className="text-lg font-medium">{name}</p>
      </div>
    </>
  );
}

export default FadedNode;