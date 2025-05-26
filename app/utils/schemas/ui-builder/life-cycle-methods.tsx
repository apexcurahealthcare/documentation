import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Code } from "@heroui/react";

export const UIBuilderLifeCycleMethods: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4 sm:gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "Life Cycle Methods",
      className: "uppercase",
    },
    {
      type: "p",
      text: "Just like we use lifecycle methods with useEffect in standard React applications, we can replicate the same behavior in our JSON-based UIBuilder.",
    },
    {
      type: "h3",
      id: "effects",
      text: "Effects",
    },
    {
      type: "p",
      text: (
        <>
          To handle lifecycle logic in UIBuilder, we define an object with the
          name <span className="font-semibold">effects</span> at the start of
          the schema, like this:
        </>
      ),
    },
    {
      type: "code",
      code: `{
  schema: [
    {
      name: "add_user_form",
      ...
      fields: [
        ...
        {
          name: "effects",
          handlers: [
            {
              action: "displayToast",
              args: {
                message: "This toast message is being displayed on page load"
              },
              dependencies: [],
            },
          ],
        }
      ]
    }
  ]
}`,
    },
    {
      type: "p",
      text: "This is equivalent to how we'd write useEffect in a regular React component:",
    },
    {
      type: "code",
      code: `useEffect(() => {
  makeApiCall();
}, [patient_id])`,
    },
    {
      type: "alert",
      color: "warning",
      text: "Don't worry about the object structure inside the effects array—we'll cover it in detail in the next chapter.",
    },
    {
      type: "p",
      text: "Now, let's explore how to use the effects object to replicate lifecycle methods like mounting and reacting to dependency changes.",
    },
    {
      type: "divider",
      variant: "dotted"
    },
    {
      type: "h3",
      id: "componentDidMount",
      text: "componentDidMount",
    },
    {
      type: "p",
      text: "In a functional React component, componentDidMount is represented as:",
    },
    {
      type: "code",
      code: `useEffect(() => { ... }, [])`,
    },
    {
      type: "p",
      text: "This ensures the code inside runs once when the component is mounted.",
    },
    {
      type: "p",
      text: "To achieve the same behavior in UIBuilder, define your effects handler like this:",
    },
    {
      type: "code",
      code: `{
  name: "effects",
  handlers: [
    {
      action: "displayToast",
      args: {
        message: "This toast message is being displayed on page load"
      },
      dependencies: [],
    },
  ],
}`,
    },
    {
      type: "divider",
      variant: "dotted"
    },
    {
      type: "h3",
      id: "componentDidUpdate",
      text: "componentDidUpdate",
    },
    {
      type: "p",
      text: "In React, componentDidUpdate is implemented using:",
    },
    {
      type: "code",
      code: `useEffect(() => { ... }, [dep])`,
    },
    {
      type: "p",
      text: "This executes the effect whenever the specified dependency changes.",
    },
    {
      type: "p",
      text: "To replicate this in UIBuilder, the handler would look like this:",
    },
    {
      type: "code",
      code: `{
  name: "effects",
  handlers: [
    {
      action: "displayToast",
      args: {
        message: "This toast message is being displayed on state update"
      },
      dependencies: ["some_state_variable_name"],
    },
  ],
}`,
    },
    {
      type: "p",
      text: (
        <>
          Whenever <Code>some_state_variable_name</Code> changes, the{" "}
          <Code>displayToast</Code> action is triggered, displaying a toast
          message on the page.
        </>
      ),
    },
    {
      type: "p",
      text: "You can define any valid action inside each handler. We’ll dive deeper into handlers and actions in the upcoming chapter.",
    },
  ],
};
