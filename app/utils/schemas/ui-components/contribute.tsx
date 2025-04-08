import CustomLink from "@/app/lib/CustomLink";
import { NodeSchema } from "@/app/lib/ViewBuilder";
import NPMLOGIN from "@/public/assets/npm-login.jpg";
import { Code } from "@heroui/react";

const NPM_LOGIN = [
  {
    description: "Check whether you are already logged in with npm or not",
  },
  {
    type: "p",
    code: "npm whoami",
  },
  {
    description: "If you're logged in, this will return your npm username.",
  },
  {
    description: "If not, it will show an error like Not logged in.",
  },
  {
    description:
      "If you're not logged in, use the following command to log in:",
  },
  {
    type: "p",
    code: "npm adduser",
  },
  {
    description:
      "It will ask you to hit enter to a link that will open in the browser.",
  },
  {
    description:
      "There you need to either create a new npm account or login with existing one.",
  },
  {
    description:
      "After successful login you can again check whether you are logged or not using command:",
  },
  {
    type: "p",
    code: "npm whoami",
  },
  {
    description:
      "If you're not logged in, but you already have an account then you can hit:",
  },
  {
    type: "p",
    code: "npm login",
  },
  {
    description:
      "npm adduser will create a new user and logs in whereas npm login logs in directly",
  },
];
const INSTALLATION = [
  {
    description: "Clone the Repository",
  },
  {
    type: "p",
    code: "github.com/ApexCura/ui-components",
  },
  {
    description: "Install Dependencies",
  },
  { type: "p", code: "npm i" },
];
const PREREQUISITES = [
  {
    id: 1,
    list: [
      {
        description: (
          <>
            <CustomLink
              href="https://nodejs.org/en/download"
              text="Node.js v16+"
            />
            and npm/yarn installed
          </>
        ),
      },
      {
        description: "Git installed",
      },
      {
        description: "Access to our private npm registry",
      },
    ],
  },
];
const PREREQUISITES_STEPS = PREREQUISITES.reduce((acc: any, step: any) => {
  acc = [
    ...acc,
    {
      type: "ol",
      children: step.list.map((matter: any) => ({
        type: matter?.type || "li",
        isApplyMotion: true,
        text: (
          <>
            {matter?.heading && (
              <>
                <span className="font-semibold">{matter.heading}</span>:{" "}
              </>
            )}
            {matter?.description}
          </>
        ),
        code: matter?.code,
        className: matter?.className,
      })),
    },
  ];
  return acc;
}, []);
export const UIComponentsContribute: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "Want to contribute",
      isApplyMotion: true,
      className: "uppercase",
    },
    {
      type: "p",
      text: "We welcome contributions to our UI components library! Follow this guide to set up the development environment, make changes, and publish updates.",
    },
    {
      id: "prerequisites",
      type: "h3",
      text: "Prerequisites",
    },
    ...PREREQUISITES_STEPS,
    {
      id: "npm-login",
      type: "h3",
      text: "Npm Login",
    },
    {
      type: "ol",
      children: NPM_LOGIN.map((matter: any) => ({
        type: matter?.type || "li",
        isApplyMotion: true,
        text: (
          <>
            {matter?.heading && (
              <>
                <span className="font-semibold">{matter.heading}</span>:{" "}
              </>
            )}
            {matter?.description}
          </>
        ),
        code: matter?.code,
        className: matter?.className,
      })),
    },
    {
      type: "p",
      text: "If everything goes well, you will find redis container like this with name mine-redis",
    },
    {
      type: "image",
      src: NPMLOGIN?.src,
      alt: `Npm login Image`,
      className: "h-auto sm:h-[200px]",
      isBlurred: false,
      isApplyMotion: true,
    },
    {
      type: "divider",
      variant: "dotted"
    },
    {
      id: "installation",
      type: "h3",
      text: "Installation",
    },
    {
      type: "ol",
      children: INSTALLATION.map((matter: any) => ({
        type: matter?.type || "li",
        isApplyMotion: true,
        text: (
          <>
            {matter?.heading && (
              <>
                <span className="font-semibold">{matter.heading}</span>:{" "}
              </>
            )}
            {matter?.description}
          </>
        ),
        code: matter?.code,
        className: matter?.className,
      })),
    },
    {
      type: "p",
      text: (
        <>
          Checkout to <Code>master</Code> branch and make your changes either in
          the same branch or in a new branch.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          Once you are done with the changes, open <Code>package.json</Code> and
          increment the version number.
        </>
      ),
    },
    {
      type: "p",
      text: "After that hit",
    },
    {
      type: "snippet",
      text: "npm publish --access public",
    },
    {
      type: "p",
      text: "This will build the project using webpack and publish a new version.",
    },
    {
      type: "alert",
      color: "warning",
      text: "Never hit this command with existing or previous version numbers. That will throw errors in the console.",
    },
  ],
};
