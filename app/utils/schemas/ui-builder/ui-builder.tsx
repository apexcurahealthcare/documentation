import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Constants } from "../../constants";
import { Helpers } from "../../helpers";

export const UIBuilderUIBuilder: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4 sm:gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "UI Builder",
      className: "uppercase",
    },
    {
      type: "p",
      text: "The core of the ApexCura UI Builder is the UI Builder Component - a renderer that transforms JSON schemas into React components. The component handles element rendering, state management, event handling, and data flow.",
    },
    {
      type: "h3",
      id: "what-it-does",
      text: "What does it do?",
    },
    {
      type: "ul",
      children: Helpers.renderHeadingList(Constants.UI_BUILDER_WHAT_IT_DOES)
    },
    {
      type: "h3",
      id: "schema-driven-approach",
      text: "Schema-Driven Approach",
    },
    {
      type: "p",
      text: "Instead of writing JSX manually, you define your UI through JSON schemas that describe:",
    },
    {
      type: "ul",
      children: Helpers.renderHeadingList(Constants.UI_BUILDER_SCHEMA_DRIVEN),
    },
  ],
};
