"use client";
import React, { useEffect, useState } from 'react'
declare global {
  interface Window {
    acIcons: { [key: string]: string };
  }
}
const IconsList = () => {
  const [icons, setIcons] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const script = document.createElement("script");
    const timestamp = new Date().getTime(); // Generate a unique timestamp
    script.src = `https://dev.apexcura.com/api/public/scripts/apexcura.icons.js?t=${timestamp}`;
    script.onload = () => {
      // console.log(window?.acIcons);
      if (window?.acIcons) {
        setIcons(window?.acIcons);
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <span dangerouslySetInnerHTML={{ __html: icons["aci-dashboard"] }}></span>
  );
};
export default IconsList;