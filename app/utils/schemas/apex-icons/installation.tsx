import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Constants } from "../../constants";
import { Code } from "@heroui/react";

const project = Constants.PROJECTS.find((p: any) => p.route === "/apex-icons");

export const ApexIconsInstallation: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4",
  children: [
    {
      type: "h2",
      text: "Installation",
      isApplyMotion: true,
      className: "uppercase",
    },
    {
      type: "p",
      text: (
        <>
          This guide will walk you through the steps to integrating{" "}
          <Code>{project?.name}</Code> script in your project. Let’s get
          started!
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
          To use <span className="font-semibold">Apexcura Icons</span>, you need
          to include the script file in your project’s <Code>index.html</Code>.
          Add the following line to the <Code>{"<head>"}</Code> section of your{" "}
          <Code>index.html</Code>
        </>
      ),
    },
    {
      type: "snippet",
      text: `https://suite.apexcura.com/api/public/scripts/apexcura.icons.js`,
    },
    {
      type: "h3",
      id: "usage",
      text: "Usage 🚀",
    },
    {
      type: "p",
      text: (
        <>
          Once the script is included, you can start using the icons in your
          project. The icons are added using the <Code>{"<i>"}</Code> tag with
          specific class names. Here’s the basic syntax:
        </>
      ),
    },
    {
      type: "code",
      code: `<i className="aci aci-{icon-name}"></i>`,
    },
    {
      type: "ul",
      children: Constants.ICONS_USAGE.map((matter: any, index: number) => ({
        type: "li",
        isApplyMotion: true,
        text: (
          <>
            <Code>{matter.heading}</Code>
            {" : "}
            <span
              dangerouslySetInnerHTML={{ __html: matter.description }}
            ></span>
          </>
        ),
      })),
    },
    {
      type: "div",
      className: "space-y-2",
      children: [
        {
          type: "h4",
          text: "Example: Displaying an Icon",
        },
        {
          type: "p",
          text: "To display an 'add' icon, use the following code:",
        },
        {
          type: "code",
          code: `<i className="aci aci-add"></i>`,
        },
      ],
    },
    {
      type: "h3",
      id: "customizing-icons",
      text: "Customizing Icons 🎨",
    },
    {
      type: "p",
      text: "You can customize the appearance and behavior of the icons using the following utility classes:",
    },
    {
      type: "div",
      className: "space-y-2",
      children: [
        {
          type: "h4",
          text: (
            <>
              1. Dynamic Sizing (<Code>aci-dynamic-size</Code>)
            </>
          ),
        },
        {
          type: "p",
          text: (
            <span>
              Use the <Code>aci-dynamic-size</Code> class to enable dynamic
              sizing for the icon. You can then use Tailwind CSS classes like{" "}
              <Code>size-6</Code> or <Code>size-[12px]</Code> to set the size.
            </span>
          ),
        },
        {
          type: "code",
          code: `<i className="aci aci-add aci-dynamic-size size-[12px]"></i>`,
        },
      ],
    },

    {
      type: "div",
      className: "space-y-2",
      children: [
        {
          type: "h4",
          text: (
            <>
              2. Prevent Color Override (<Code>aci-no-colorize</Code>)
            </>
          ),
        },
        {
          type: "p",
          text: (
            <span>
              If the icon is pre-colored and you don’t want to override its
              color, use the <Code>aci-no-colorize</Code> class.
            </span>
          ),
        },
        {
          type: "code",
          code: `<i className="aci aci-add aci-no-colorize"></i>`,
        },
      ],
    },
    {
      type: "div",
      className: "space-y-2",
      children: [
        {
          type: "h4",
          text: "3. Custom Colors",
        },
        {
          type: "p",
          text: (
            <span>
              To change the color of the icon, use Tailwind CSS text color
              classes like <Code>text-primary</Code> , <Code>text-red-500</Code>{" "}
              , etc.
            </span>
          ),
        },
        {
          type: "code",
          code: `<i className="aci aci-add text-primary"></i>`,
        },
      ],
    },
    {
      type: "div",
      className: "space-y-2",
      children: [
        {
          type: "h4",
          text: "4. Combining Classes",
        },
        {
          type: "p",
          text: "You can combine multiple classes to achieve the desired look and behavior.",
        },
        {
          type: "code",
          code: `<i className="aci aci-add aci-dynamic-size size-[24px] text-blue-500"></i>`,
        },
      ],
    },
    {
      type: "h3",
      id: "available-icons",
      text: "Available Icons 🖼️",
    },
    {
      type: "p",
      text: "And then you are ready to go! Click next to view the list of available icons",
    },
  ],
};
