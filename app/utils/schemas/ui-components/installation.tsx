import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Code } from "@heroui/react";

export const UIComponentsInstallation: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-6 sm:gap-4",
  children: [
    {
      type: "h2",
      text: "Installation",
      className: "uppercase",
    },
    {
      type: "p",
      text: (
        <>
          This guide will walk you through the steps to install the{" "}
          <Code>@apexcura/ui-components</Code> package in your project. Let’s
          get started!
        </>
      ),
    },
    {
      type: "h3",
      id: "install-the-package",
      text: "Install the Package 📦",
    },
    {
      type: "p",
      text: (
        <>
          To install the <Code>@apexcura/ui-components</Code> package, run the
          following command in your project directory:
        </>
      ),
    },
    {
      type: "snippet",
      text: `npm install @apexcura/ui-components`,
    },
    {
      type: "p",
      text: "This will add the library to your project’s node_modules and update your package.json file.",
    },
    {
      type: "h3",
      id: "whats-next",
      text: "What’s Next? 🚀",
    },
    {
      type: "p",
      text: (
        <>
          Once the package is installed, you can start using the components in
          your project. Here’s an example of how to import and use a{" "}
          <Code>Button</Code>
          component:
        </>
      ),
    },
    {
      type: "code",
      code: `import { Button } from '@apexcura/ui-components';

const MyComponent = () => {
  return (
    <Button onClick={() => alert('Hello, team!')}>
      Click Me
    </Button>
  );
};
`,
    },
  ],
};
