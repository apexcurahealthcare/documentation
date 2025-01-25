import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Constants } from "../constants";

const project = Constants.PROJECTS.find(
  (p: any) => p.route === "/ui-components"
);

export const UIComponents: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-6",
  children: [
    {
      type: "h1",
      text: "Introduction",
    },
    {
      type: "image",
      src: project?.img?.src || "",
      alt: `${project?.name} Image`,
      isBlurred: true,
      isZoomed: true,
    },
    {
      type: "p",
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
      text: `This library is all about making our lives easier. It provides a set of reusable, customizable, and well-documented components that follow our design standards and best practices. Whether you’re working on a new feature, fixing a bug, or prototyping an idea, this library is here to save you time and effort.`,
    },
    {
      type: "h3",
      text: "Why This Library? 🤔",
    },
    {
      type: "p",
      text: "Here’s why we built this and why it matters:",
    },
    {
      type: "ul",
      children: Constants.INTRO_MATTERS.map((matter: any) => ({
        type: "li",
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
