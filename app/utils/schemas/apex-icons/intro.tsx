import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Constants } from "../../constants";
import { Code } from "@heroui/react";

const project = Constants.PROJECTS.find((p: any) => p.route === "/apex-icons");

export const ApexIconsIntro: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-6 sm:gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "Introduction",
      isApplyMotion: true,
      className: "uppercase",
    },
    {
      type: "image",
      src: project?.img?.src || "",
      alt: `${project?.name} Image`,
      className: "sm:h-[200px]",
      isBlurred: true,
      isApplyMotion: true,
    },
    {
      type: "p",
      isApplyMotion: true,
      text: (
        <>
          <span className="font-semibold">Apexcura Icons</span> is a collection
          of scalable vector icons that can be easily integrated into your
          projects.
        </>
      ),
    },
    {
      type: "p",
      isApplyMotion: true,
      text: (
        <>
          The icons are loaded via a script file and use a class-based approach,
          similar to{" "}
          <a
            href="https://fontawesome.com/"
            target="_blank"
            className="text-primary border-b border-primary border-dotted font-medium"
          >
            FontAwesome
          </a>
          . You can customize the size, color, and behavior of the icons using
          utility classes like <Code>aci-dynamic-size</Code> ,{" "}
          <Code>aci-no-colorize</Code> , and Tailwind CSS classes.
        </>
      ),
    },
    {
      type: "p",
      isApplyMotion: true,
      text: (
        <>
          Built with{" "}
          <span className="font-semibold">
            React, Webpack, and Tailwind CSS
          </span>
          , this library is designed to help us build consistent, scalable, and
          visually stunning icons faster and more efficiently.
        </>
      ),
    },
    {
      type: "p",
      isApplyMotion: true,
      text: `This library is all about making our lives easier. It provides a set of reusable, customizable, and well-documented icons that follow our design standards and best practices.`,
    },
  ],
};
