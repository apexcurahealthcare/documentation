import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Constants } from "../../constants";
import { Code } from "@heroui/react";

const project = Constants.PROJECTS.find((p: any) => p.route === "/third-party");

export const ThirdPartyIntro: NodeSchema = {
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
          This section provides detailed documentation for third-party tools and
          services used in our projects. Whether you're setting up{" "}
          <span className="font-semibold">BullMQ</span> for queue management,
          configuring an <span className="font-semibold">ICD Server</span> on
          Linux, or using <span className="font-semibold">MobaXterm</span> for
          remote connections, you'll find everything you need here.
        </>
      ),
    },
  ],
};
