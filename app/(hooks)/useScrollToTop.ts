"use client";
import { useEffect } from "react";

const useScrollToTop = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && !window?.location?.hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);
};

export default useScrollToTop;
