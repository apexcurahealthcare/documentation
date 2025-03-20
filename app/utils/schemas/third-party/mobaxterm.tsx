import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Code } from "@heroui/react";
import MOBA from "../../../../public/assets/moba.jpg";
import MOBACONNECTED from "../../../../public/assets/moba-connected.jpg";
import MOBAHOME from "../../../../public/assets/moba-main-page.jpg";
import MOBASESSION from "../../../../public/assets/moba-session.jpg";
import { Constants } from "../../constants";
const STEPS_MASTER = [
  {
    id: 1,
    heading: "Download MobaXterm",
    list: [
      {
        description: (
          <>
            Go to the{" "}
            <a
              href="https://mobaxterm.mobatek.net/download-home-edition.html"
              target="_blank"
              className="text-primary border-b border-primary border-dotted font-medium"
            >
              MobaXterm website
            </a>{" "}
          </>
        ),
      },
      {
        description: "Choose a stable version",
      },
    ],
  },
  {
    id: 2,
    heading: "Install MobaXterm",
    list: [
      {
        description: (
          <>
            Run the installer <Code>MobaXterm_Installer_vXX.X.msi</Code>.
          </>
        ),
      },
      {
        description:
          "Follow the on-screen instructions to complete the installation.",
      },
      {
        description: "Launch MobaXterm from the Start menu.",
      },
    ],
  },
];
const DOWNLOAD_STEPS = STEPS_MASTER.reduce((acc: any, step: any) => {
  acc = [
    ...acc,
    {
      type: "h4",
      text: `Step ${step.id}:  ${step.heading}`,
    },
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

const renderList = (list: any) =>
  list.map((matter: any) => ({
    type: "li",
    isApplyMotion: true,
    text: (
      <>
        {matter.heading && (
          <>
            <span className="font-semibold">{matter.heading}</span>:{" "}
          </>
        )}
        {matter.description}
      </>
    ),
  }));
export const ThirdPartyMobaXterm: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "MobaXterm",
    },
    {
      type: "image",
      src: MOBA?.src,
      alt: `Moba Image`,
      className: "sm:h-[200px]",
      isApplyMotion: true,
    },
    {
      id: "introduction",
      type: "h3",
      text: "Introduction",
    },
    {
      type: "p",
      text: (
        <>
          <a
            href="https://mobaxterm.mobatek.net/"
            target="_blank"
            className="text-primary border-b border-primary border-dotted font-medium"
          >
            MobaXterm
          </a>{" "}
          is a powerful terminal for Windows that combines a multi-tabbed SSH
          client, X server, and a suite of network tools. It’s perfect for
          developers and system administrators who need to work with remote
          servers, transfer files, and run graphical Linux applications on
          Windows.
        </>
      ),
    },
    {
      type: "h3",
      id: "installation",
      text: "Installation",
    },
    ...DOWNLOAD_STEPS,
    {
      type: "p",
      text: "If everything goes well, you will find the home screen like this",
    },
    {
      type: "image",
      src: MOBAHOME?.src,
      alt: `Moba Homepage`,
      className: "h-auto",
      isBlurred: false,
      isApplyMotion: true,
    },
    {
      type: "h3",
      id: "connection",
      text: "Connecting to a Remote Server",
    },
    {
      type: "ol",
      children: renderList(Constants.MOBA_REMOTE_SERVER_STEPS),
    },
    {
      type: "image",
      src: MOBASESSION?.src || "",
      alt: `Moba session Image`,
      className: "h-auto",
      isBlurred: false,
      isApplyMotion: true,
    },
    {
      type: "p",
      text: "If session connected successfully, then you will see the screen like this",
    },
    {
      type: "image",
      src: MOBACONNECTED?.src || "",
      alt: `Moba connected Image`,
      className: "h-auto",
      isBlurred: false,
      isApplyMotion: true,
    },
    {
      type: "p",
      text: "Now you are inside the server and can access the projects that are available in it and perform whatever actions you want.",
    },
  ],
};
