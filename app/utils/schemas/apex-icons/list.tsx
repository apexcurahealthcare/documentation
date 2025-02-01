import { NodeSchema } from "@/app/lib/ViewBuilder";

export const ApexIconsList: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4",
  children: [
    {
      type: "div",
      children: [
        {
          type: "h3",
          text: "List of available icons",
          isApplyMotion: true,
        },
        {
          type: "p",
          text: "Click on any icon to copy",
          className: "text-xs font-medium text-gray-400",
          isApplyMotion: true,
        },
      ],
    },
    {
      type: "icons",
    },
  ],
};
