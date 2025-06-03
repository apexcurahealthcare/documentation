import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Code } from "@heroui/react";
import { Helpers } from "../../helpers";

export const UIBuilderGlobalLoading: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4 sm:gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "Global Loading",
      className: "uppercase",
    },
    {
      type: "p",
      text: (
        <>In most pages, we often need to display a full-page overlay loader.</>
      ),
    },
    {
      type: "p",
      text: (
        <>
          In a standard React setup, this is typically done by creating a{" "}
          <Code>HigherOrderComponent (HOC)</Code> that controls a state variable
          like <span className="font-semibold">isLoading</span> to toggle the loader visibility.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          In the schema-based approach, we can achieve the same using the{" "}
          <Code>changeState</Code> handler with the following arguments:
        </>
      ),
    },
    {
      type: "ul",
      children: Helpers.renderHeadingList([
        { heading: "storedLocation", description: "loading" },
        { heading: "value", description: "true/false" },
      ]),
    },
    {
      type: "h3",
      id: "example",
      text: "Example",
    },
    {
      type: "code",
      code: `{
  action: "changeState",
  args: {
    storedLocation: "loading",
    value: true
  },
}`,
    },
    {
      type: "alert",
      color: "warning",
      text: "The 'loading' key is reserved for global loading. If you have other loaders on the page, use unique keys like 'tableLoading'.",
    },
    {
      type: "h3",
      id: "asynchronous-loader",
      text: "Asynchronous Loader",
    },
    {
      type: "p",
      text: (
        <>
          While making API calls, we may also want to show a loader. In such
          cases, you can place <Code>changeState</Code> handlers before and
          after the <Code>makeApiCall</Code> handler:
        </>
      ),
    },
    {
      type: "code",
      code: `{
  handlers: [
    {
      action: "changeState",
      args: {
        storedLocation: "loading",
        value: true // show loader
      },
    },
    {
      action: "makeApiCall",
      ...
    },
    {
      action: "changeState",
      args: {
        storedLocation: "loading",
        value: false // hide loader
      },
    }  
  ]
}`,
    },
    {
      type: "p",
      text: (
        <>
          However, using separate <Code>changeState</Code> handlers like this
          has a few drawbacks:
        </>
      ),
    },
    {
      type: "ol",
      children: Helpers.renderHeadingList([
        {
          description:
            "Schema size increases significantly when multiple API calls are present.",
        },
        {
          description:
            "Since handlers execute synchronously and API calls are asynchronous, the loader might not appear in time before the API call finishes.",
        },
      ]),
    },
    {
      type: "p",
      text: (
        <>
          To handle this better, you can directly pass a{" "}
          <span className="font-semibold">loading</span> key with value{" "}
          <Code>true</Code> inside the <Code>args</Code> of the{" "}
          <Code>makeApiCall</Code> handler:
        </>
      ),
    },
    {
      type: "code",
      code: `{
  action: "makeApiCall",
  args: {
    loading: true,
    api: {
      ...
    }
    ...
  },
},`,
    },
    {
      type: "p",
      text: "If the API call object includes the 'loading: true' key, our system will automatically show a loader before the call and hide it once the call completes or fails—using a try-catch-finally flow internally.",
    },
  ],
};
