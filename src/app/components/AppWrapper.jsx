// src/app/components/AppWrapper.jsx
'use client';

import { useState, useEffect } from 'react';
import Preloader from './Preloader'; // Loader UI

export default function AppWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ye function tab call hoga jab window ke saare resources (images, scripts) load ho jayenge
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Check karein ki page pehle se load toh nahi ho chuka
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // Agar nahi hua hai, toh 'load' event ka intezaar karein
      window.addEventListener('load', handleLoad);
    }

    // Cleanup: Component ke unmount hone par event listener ko hatayein
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []); // [] ka matlab ye effect sirf ek baar (component mount hone par) chalega

  // Jab tak isLoading true hai, Preloader dikhayein
  // Jab false ho jaaye, toh actual content (children) dikhayein
  return <>{isLoading ? <Preloader /> : children}</>;
}