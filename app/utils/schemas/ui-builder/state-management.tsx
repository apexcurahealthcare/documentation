import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Constants } from "../../constants";
import { Helpers } from "../../helpers";
import CustomLink from "@/app/lib/CustomLink";
import { Code } from "@heroui/react";

export const UIBuilderStateMangement: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4 sm:gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "State Management",
      className: "uppercase",
    },
    {
      type: "p",
      text: "The library integrates with Redux for state management with these key features:",
    },
    {
      type: "ul",
      children: Helpers.renderHeadingList(
        Constants.UI_BUILDER_STATE_MANAGEMENT
      ),
    },
    {
      type: "divider",
      variant: "line",
    },
    {
      type: "h3",
      id: "why-redux",
      text: "Why Redux?",
    },
    {
      type: "p",
      text: (
        <>
          <CustomLink text="Redux" href={"https://redux.js.org/"} /> +{" "}
          <CustomLink
            text="Redux Toolkit"
            href={"https://redux-toolkit.js.org/"}
          />{" "}
          were used instead of local state to manage shared data across all
          components in a consistent way. It helps handle dynamic schemas,
          supports global event handlers, allows automatic state binding, and
          enables features like state persistence and debugging — making the
          system more scalable and maintainable.
        </>
      ),
    },
    {
      type: "h3",
      id: "implementation",
      text: "Implementation",
    },
    {
      type: "p",
      text: (
        <>
          To enable state management within the package, the parent React
          project needs to import the <Code>dynamicStateReducer</Code> exported
          by the ui-builder package like this.
        </>
      ),
    },
    {
      type: "code",
      code: `import { dynamicStateReducer } from "@apexcura/ui-builder";
import { combineReducers } from "@reduxjs/toolkit";
import { resetState } from "./actions";
import appStateReducer from "./appState/appStateSlice";
import uiSchemaReducer from "./uiSchema/uiSchemaSlice";

const appReducer = combineReducers({
  apexRehab_appState: appStateReducer,
  apexRehab_storedSchema: uiSchemaReducer,
  dynamic: dynamicStateReducer, // UIBuilder's state slice
});

const rootReducer = (state: RootState | undefined, action: any): RootState => {
  if (action.type === resetState.type) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
export type RootState = ReturnType<typeof appReducer>;`,
    },
    {
      type: "alert",
      color: "warning",
      text: "UIBuilder requires the slice name to be 'dynamic'. Please ensure you use this exact name in combineReducers for correct state management.",
    },
    {
      type: "p",
      text: "Now the UIBuilder manages its state exclusively within the dynamic slice, without affecting other reducers.",
    },
    {
      type: "p",
      text: "Next, we'll look at how state updates are handled within the UIBuilder.",
    },
    {
      type: "divider",
      variant: "dotted",
    },
    {
      type: "h3",
      id: "setStateValue",
      text: "setStateValue",
    },
    {
      type: "p",
      text: (
        <>
          The <Code>setStateValue</Code> action from <Code>sampleSlice.ts</Code>{" "}
          in the ui-builder project takes two parameters: a path and the value
          to be stored at that path.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          For example, if you want to store a name Jon Doe in redux in a path{" "}
          <Code>state.dynamic.add_user_form.name</Code>, you should call this
          action as{" "}
        </>
      ),
    },
    {
      type: "code",
      code: `dispatch(setStateValue({ path: "state.dynamic.add_user_form.name", value: "Jon Doe" }))`,
    },
    {
      type: "p",
      text: "This will store Jon Doe in redux store like this:",
    },
    {
      type: "code",
      code: `{
  dynamic: {
    // ...other pages in the project
    add_user_form: {
      // ...other state variables
      name: "Jon Doe"
    }
  }
}`,
    },
    {
      type: "p",
      text: "But do we really need to use dispatch every time we want to update a field value from the schema? 🤔",
    },
    {
      type: "p",
      text: "No!!!",
    },
    {
      type: "p",
      text: "Your JSON Schema doesn't call any state functions directly. It only provides the path in the Redux store and the value to be assigned to that path. All state-related operations are handled internally by the UIBuilder.",
    },
    {
      type: "p",
      text: "Lets discuss how the UIBuilder itself handling that internally.",
    },
    {
      type: "divider",
      variant: "dotted",
    },
    {
      type: "h3",
      id: "initial-states",
      text: "Initial States",
    },
    {
      type: "p",
      text: (
        <>
          In any React page that uses local state, we typically define state
          variables using <Code>useState</Code>. If we want to set default
          values, we can pass them in during initialization, like this:
        </>
      ),
    },
    {
      type: "code",
      code: `const [name, setName] = useState("Jon Doe");`,
    },
    {
      type: "p",
      text: "We can use n number of states variables like this with different data types.",
    },
    {
      type: "p",
      text: "Similarly, the UIBuilder can also initialize state variables of any data type, and their default values can be provided directly through the schema like this:",
    },
    {
      type: "code",
      code: `{
  schema: [
    {
      name: "add_user_form", // Name of the page in which entire page state will be stored
      initial_states: {
        name: "Jon Doe",     // State variables that are automatically created and initialized on page load.
      },
      fields: []
    }
  ]
}`,
    },
    {
      type: "p",
      text: "This will store Jon Doe in redux store like this:",
    },
    {
      type: "code",
      code: `{
  dynamic: {
    add_user_form: {
      name: "Jon Doe"
    }
  }
}`,
    },
    {
      type: "divider",
      variant: "dotted",
    },
    {
      type: "h3",
      id: "local-storage",
      text: "Local Storage",
    },
    {
      type: "p",
      text: "In ReactJS, we often need to access values stored in localStorage, such as logged-in organization details or user information like",
    },
    {
      type: "code",
      code: `const orgData = localStorage.getItem("organization");`,
    },
    {
      type: "p",
      text: "Similarly, the UIBuilder can also access values stored in localStorage and keep them in the page's state like this:",
    },
    {
      type: "code",
      code: `{
  schema: [
    {
      name: "add_user_form",
      initial_states: {
        name: "Jon Doe",
        org_name: "@localStorage.organization.name",
      },
      fields: []
    }
  ]
}`,
    },
    {
      type: "p",
      text: (
        <>
          If any variable under the <Code>initial_states</Code> key contains{" "}
          <Code>@localStorage</Code> in its value, <Code>UIBuilder</Code> will
          treat it as a reference to a localStorage key. For example, if the
          value is @localStorage.organization.name, it will retrieve the
          organization object from localStorage, extract the name property, and
          store it in the Redux store when the page loads.
        </>
      ),
    },
    {
      type: "code",
      code: `{
  dynamic: {
    add_user_form: {
      name: "Jon Doe",
      org_name: "Apex Cura"
    }
  }
}`,
    },
    {
      type: "divider",
      variant: "dotted",
    },
    {
      type: "h3",
      id: "location-params",
      text: <>Location Parameters</>,
    },
    {
      type: "p",
      text: (
        <>
          In ReactJS, we often access URL parameters using hooks like{" "}
          <Code>useParams</Code>. For example, on a page with a route like{" "}
          <Code>/rehab/dashboard/:patient_id/:rehab_id</Code>, we can get the
          dynamic segments directly from the URL.
        </>
      ),
    },
    {
      type: "code",
      code: `const { patient_id, rehab_id } = useParams();`,
    },
    {
      type: "p",
      text: (
        <>
          Similarly, the UIBuilder can extract these URL parameters and use them
          to initialize state values from the current location, like this:
        </>
      ),
    },
    {
      type: "code",
      code: `{
  schema: [
    {
      name: "add_user_form",
      initial_states: {
        name: "Jon Doe",
        org_name: "@localStorage.organization.name",
        patient_id: "@location.rehab_id^/rehab/dashboard/:patient_id/:rehab_id"
        rehab_id: "@location.rehab_id^/rehab/dashboard/:patient_id/:rehab_id"
      },
      fields: []
    }
  ]
}`,
    },
    {
      type: "p",
      text: (
        <>
          If any variable under the <Code>initial_states</Code> key contains{" "}
          <Code>@location</Code> in its value, <Code>UIBuilder</Code> treats it
          as a reference to the URL parameters obtained via{" "}
          <Code>useParams</Code>. The text after the caret (<Code>^</Code>)
          specifies the route pattern to match. In this example, the{" "}
          <Code>patient_id</Code> and <Code>rehab_id</Code> will be extracted
          from the URL path <Code>/rehab/dashboard/:patient_id/:rehab_id</Code>{" "}
          and stored in the Redux store when the page loads.
        </>
      ),
    },
    {
      type: "code",
      code: `{
  dynamic: {
    add_user_form: {
      name: "Jon Doe",
      org_name: "Apex Cura",
      patient_id: "647328846382292749",
      rehab_id: "654783463829288247"
    }
  }
}`,
    },
    {
      type: "divider",
      variant: "dotted",
    },
    {
      type: "h3",
      id: "data-binding",
      text: "Data Binding",
    },
    {
      type: "p",
      text: "Default states are created and initialized. Now, let’s see how these values bind to the actual components and how the state updates when you change a value.",
    },
    {
      type: "p",
      text: "To understand this better, let’s add a text field to our form.",
    },
    {
      type: "code",
      code: `{
  schema: [
    {
      name: "add_user_form",
      initial_states: {
        name: "Jon Doe",
        org_name: "@localStorage.organization.name",
        patient_id: "@location.rehab_id^/rehab/dashboard/:patient_id/:rehab_id"
        rehab_id: "@location.rehab_id^/rehab/dashboard/:patient_id/:rehab_id"
      },
      fields: [
        {
          name: "first_name",
          label: "First Name",
          element: "input-text",
          required: true,
          placeholder: "Eg: Jon Doe",
          color: "primary",
          valueSource: {
            storedLocation: "name",
          },
          handlers: [
            {
              action: "changeState",
              args: {
                storedLocation: "name",
              },
            },
          ],
        },
      ]
    }
  ]
}`,
    },
    {
      type: "p",
      text: (
        <>
          Each form component requires two keys in the schema:{" "}
          <Code>valueSource</Code> and <Code>handlers</Code>.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          Within <Code>valueSource.storedLocation</Code>, you define the state
          path where the field&apos;s value was stored.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          The <Code>handlers</Code> key should contain an object with the action{" "}
          <Code>changeState</Code>. This setup ensures that whenever the{" "}
          <Code>onChange</Code> function of the form field is triggered, the
          value is updated in the state at the specified{" "}
          <Code>args.storedLocation</Code>.
        </>
      ),
    },
    {
      type: "divider",
      variant: "dotted",
    },
    {
      type: "h3",
      id: "nested-data-binding",
      text: "Nested Data Binding",
    },
    {
      type: "p",
      text: (
        <>
          If you want to store a value inside a nested object in the Redux
          state, you can use dot notation in <Code>storedLocation</Code>.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          For example, to store the name under <Code>patient_details.name</Code>
          , use this path in both <Code>valueSource.storedLocation</Code> and{" "}
          <Code>handlers.args.storedLocation</Code>.
        </>
      ),
    },
    {
      type: "code",
      code: `{
  schema: [
    {
      name: "add_user_form",
      initial_states: {
        org_name: "@localStorage.organization.name",
        patient_id: "@location.patient_id^/rehab/dashboard/:patient_id/:rehab_id",
        rehab_id: "@location.rehab_id^/rehab/dashboard/:patient_id/:rehab_id",
        patient_details: {
          name: "Jon Doe" // Now name is under patient_details
        }
      },
      fields: [
        {
          name: "first_name",
          label: "First Name",
          element: "input-text",
          required: true,
          placeholder: "Eg: Jon Doe",
          color: "primary",
          valueSource: {
            storedLocation: "patient_details.name",
          },
          handlers: [
            {
              action: "changeState",
              args: {
                storedLocation: "patient_details.name",
              },
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
      text: "Whenever name changes, the state will be"
    },
    {
      type: "code",
      code: `{
  dynamic: {
    add_user_form: {
      org_name: "Apex Cura",
      patient_id: "647328846382292749",
      rehab_id: "654783463829288247"
      patient_details: {
        name: "Jon Doe updated",
      },
    }
  }
}`,
    },
    {
      type: "p",
      text: "Next will learn more about the handlers."
    }
  ],
};
