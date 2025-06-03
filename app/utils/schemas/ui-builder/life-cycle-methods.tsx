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
      variant: "dotted",
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
      variant: "dotted",
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
    {
      type: "divider",
      variant: "dotted",
    },
    {
      type: "h3",
      id: "componentWillUnmount",
      text: "componentWillUnmount",
    },
    {
      type: "p",
      text: "In React, componentWillUnmount is implemented using:",
    },
    {
      type: "code",
      code: `import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Initialization logic (like subscriptions or timers)

    return () => {
      // Cleanup logic
      console.log("Component is about to be unmounted");
    };
  }, []); // Empty dependency array → runs once on mount and once on unmount

  return <div>Hello World</div>;
}
`,
    },
    {
      type: "p",
      text: "This lifecycle method is called just before a component is removed from the DOM.",
    },
    {
      type: "p",
      text: (
        <>
          To achieve this in UIBuilder, add the <Code>shouldPersistState</Code>{" "}
          key outside the schema and set its value to either <Code>true</Code>{" "}
          or <Code>false</Code> depending on whether you want the page state to
          be persisted.
        </>
      ),
    },
    {
      type: "code",
      code: `{
  shouldPersistState: false, // If we give false then the page state from redux will be resetted when page unmounts
  schema: [
    {
      name: "add_user_form",
      ...
      fields: [
        ...
      ]
    }
  ]
}`,
    },
    {
      type: "alert",
      variant: "side-border",
      color: "warning",
      text: "Why do we need to pass this prop? 🤔",
    },
    {
      type: "p",
      text: (
        <>
          In a typical React setup, when using local state via{" "}
          <Code>useState</Code>, the state is reset automatically when the
          component unmounts. However, with global state management tools like{" "}
          <span className="font-semibold">Redux</span>, the state persists
          across page transitions unless we explicitly reset it—otherwise, it
          stays in memory until a page refresh.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          To prevent unwanted persistence, we use the{" "}
          <Code>componentWillUnmount</Code> lifecycle behavior via the cleanup
          function in the <Code>useEffect</Code> hook. This cleanup runs when
          the component is about to be removed from the DOM, allowing us to
          reset the state as needed.
        </>
      ),
    },
  ],
};
