import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Utils } from "../..";
import { Developer } from "../../constants";

export const UIBuilderDevelopers: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "Who to Contact?",
      isApplyMotion: true,
      className: "uppercase",
    },
    {
      type: "p",
      text: "Stuck? No worries, we’ve got your back. Here’s how to get help:",
    },
    {
      type: "div",
      className: "grid grid-cols-2 sm:grid-cols-1 sm:gap-2 gap-4",
      children: Utils.getDeveloperData(["charan", "swoyam", "dinesh"]).map(
        (developer: Developer) => {
          return {
            type: "user",
            name: developer?.fullName,
            url: developer?.email,
            avatar: developer?.avatar,
          };
        }
      ),
    },
  ],
};
