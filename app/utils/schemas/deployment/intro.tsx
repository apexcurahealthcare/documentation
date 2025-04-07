import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Constants } from "../../constants";

const project = Constants.PROJECTS.find((p: any) => p.route === "/deployment");

export const DeploymentIntro: NodeSchema = {
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
          Here&apos;s a comprehensive Deployment Documentation covering both
          Manual Build & Deployment and CI/CD Pipeline approaches for our
          applications.
        </>
      ),
    },
  ],
};
