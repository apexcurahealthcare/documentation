import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Code } from "@heroui/react";
import { Helpers } from "../../helpers";
import { Constants } from "../../constants";

export const UIBuilderLinking: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4 sm:gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "Npm Link",
      className: "uppercase",
    },
    {
      type: "h3",
      id: "what-does-it-mean",
      text: "What does it mean?",
    },
    {
      type: "p",
      text: "Imagine you’re building an npm package that exports a component, but since the package doesn’t have a local environment to run and test the component directly, you need a way to test it in other projects.",
    },
    {
      type: "p",
      text: (
        <>
          That’s where <Code>npm link</Code> comes in handy.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          It creates a global <b>symlink</b>—a shortcut that points to your
          package’s directory—so you can link the package globally and use it as
          a dependency in other projects while you’re developing without
          actually installing using <Code>npm install PACKAGE_NAME</Code>
        </>
      ),
    },
    {
      type: "h3",
      id: "install-the-package",
      text: "Install the Package",
    },
    {
      type: "ol",
      children: Helpers.renderHeadingList(Constants.NPM_LINK_STEPS),
    },
    {
      type: "alert",
      color: "secondary",
      text: "To get the path of react package, go to node_modules/react and right click. Select Copy Path option.",
    },
    {
      type: "divider",
      variant: "dotted"
    },
    {
      type: "h3",
      id: "development-workflow",
      text: "Development Workflow",
    },
    {
      type: "p",
      text: "Run this in your UI-Builder package to get real-time changes:",
    },
    {
      type: "code",
      code: `npm run watch`,
    },
    {
      type: "p",
      text: "This simultaneously:",
    },
    {
      type: "ol",
      children: Helpers.renderHeadingList(Constants.NPM_LINK_WATCH),
    },
    {
      type: "p",
      text: "Now you are able to preview your package changes directly in a react project without pubishing the changes.",
    },
    {
      type: "divider",
      variant: "dotted"
    },
    {
      type: "h3",
      id: "active-links",
      text: "Active Links",
    },
    {
      type: "p",
      text: (
        <>
          A symlink can get disconnected if you modify the{" "}
          <Code>package.json</Code> file or install a new package in either your
          component package or the parent React project.
        </>
      ),
    },
    {
      type: "p",
      text: "To check if the symlink is still active, you can use the command:",
    },
    {
      type: "code",
      code: "npm ls --link=true",
    },
    {
      type: "p",
      text: "If the output is empty, it means the symlink is no longer active in that project.",
    },
    {
      type: "p",
      text: (
        <>
          In that case, just run the <Code>npm link</Code> command again to
          re-establish the connection between the projects.
        </>
      ),
    },
    {
      type: "divider",
      variant: "dotted"
    },
    {
      type: "h3",
      id: "watching",
      text: "Watching",
    },
    {
      type: "p",
      text: (
        <>
          Comming to watching, you need to watch both TypeScript and CSS files
          for changes. The <Code>npm run watch</Code> command runs{" "}
          <Code>tsc -w</Code>, which watches TypeScript files and automatically
          recompiles them. This helps keep your linked React project up to date
          when you change any TypeScript code.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          However, <Code>tsc -w</Code> doesn’t watch CSS files. For CSS, we use
          Tailwind to generate a minified file in the dist/css folder using
          script <Code>build:css</Code>. When you change CSS, you’ll need to run{" "}
          <Code>npm run watch</Code> again to rebuild the CSS and update the
          output. This setup helps keep your component package and the React
          project in sync during development.
        </>
      ),
    },
  ],
};
