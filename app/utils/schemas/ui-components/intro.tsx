import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Constants } from "../../constants";
const project = Constants.PROJECTS.find(
  (p: any) => p.route === "/ui-components"
);

export const UIComponentsIntro: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-6 sm:gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "Introduction",
      isApplyMotion: true,
      className: "uppercase"
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
          Hello team! 👋 Welcome to the official documentation for{" "}
          <span className="font-semibold">{project?.name}</span>, our
          organization’s very own UI components library.
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
            React, TypeScript, Ant Design (AntD), and Tailwind CSS
          </span>
          , this library is designed to help us build consistent, scalable, and
          visually stunning applications faster and more efficiently.
        </>
      ),
    },
    {
      type: "p",
      isApplyMotion: true,
      text: `This library is all about making our lives easier. It provides a set of reusable, customizable, and well-documented components that follow our design standards and best practices. Whether you’re working on a new feature, fixing a bug, or prototyping an idea, this library is here to save you time and effort.`,
    },
    {
      type: "h3",
      id: "why-this-library",
      isApplyMotion: true,
      text: "Why This Library? 🤔",
    },
    {
      type: "p",
      isApplyMotion: true,
      text: "Here’s why we built this and why it matters:",
    },
    {
      type: "ul",
      children: Constants.INTRO_MATTERS.map((matter: any, index: number) => ({
        type: "li",
        isApplyMotion: true,
        text: (
          <>
            <span className="font-semibold">{matter.heading}</span>:{" "}
            {matter.description}
          </>
        ),
      })),
    },
  ],
};
