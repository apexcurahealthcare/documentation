"use client";
import { Button } from "@heroui/react";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { Utils } from "../utils";
type props = {
  previous: {
    href: string;
    label: string;
  };
  next: {
    href: string;
    label: string;
  };
};
const Pagination = ({ previous, next }: props) => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ y: [20, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="grid grid-cols-2">
        {previous?.label ? (
          <Button
            variant="light"
            className="place-self-start"
            startContent={<FaChevronLeft />}
            onPress={()=> {
              Utils.scrollToTop();
              router.push(previous.href)
            }}
          >
            {previous?.label}
          </Button>
        ) : (
          <div></div>
        )}
        {next?.label ? (
          <Button
            variant="light"
            className="place-self-end"
            endContent={<FaChevronRight />}
            onPress={()=> {
              Utils.scrollToTop();
              router.push(next.href);
            }}
          >
            {next?.label}
          </Button>
        ) : (
          <div></div>
        )}
      </div>
    </motion.div>
  );
};

export default Pagination;
