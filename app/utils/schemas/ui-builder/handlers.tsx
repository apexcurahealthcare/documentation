import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Code } from "@heroui/react";

export const UIBuilderHandlers: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4 sm:gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "Handlers",
      className: "uppercase",
    },
    {
      type: "p",
      text: (
        <>
          Handlers are a list of actions that replicate common React behaviors
          such as <Code>onChange</Code> events, making API calls, performing
          form validations, executing custom functions, navigation, and more.
        </>
      ),
    },
    {
      type: "p",
      text: "We’ll explore each of these step by step on this page.",
    },
    {
      type: "divider",
      variant: "line",
    },
    {
      type: "h3",
      id: "changeState",
      text: "changeState",
    },
    {
      type: "p",
      text: "In the previous examples, we used a handler called changeState like this:",
    },
    {
      type: "code",
      code: `{
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
}`,
    },
    {
      type: "p",
      text: (
        <>
          The changeState handler takes two keys: <Code>action</Code> (set as
          changeState) and <Code>args</Code>. Inside args, you define the path
          in <Code>storedLocation</Code> where the updated value should be
          stored.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          In our example, we want the updated value to be stored in the{" "}
          <Code>name</Code> key under the <Code>patient_details</Code> object.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          But if you notice, the schema only includes the path where the value
          should be stored — not the value itself.
        </>
      ),
    },
    {
      type: "h4",
      text: "So, how does it actually update the state🤔?",
    },
    {
      type: "p",
      text: "The UIBuilder automatically captures the updated value from the form field’s event (like onChange) and uses the specified path to store it in the Redux state.",
    },
    {
      type: "p",
      text: (
        <>
          In some cases, you might need to provide the value directly from the
          schema — for example, during page load. In such scenarios, you can
          include the value using the{" "}
          <span className="font-semibold">value</span> key along with{" "}
          <span className="font-semibold">storedLocation</span>.
        </>
      ),
    },
    {
      type: "code",
      code: `{
  action: "changeState",
  args: {
    storedLocation: "patient_details.name",
    value: "Jon Doe"
  },
}`,
    },
    {
      type: "divider",
      variant: "dotted",
    },
    {
      type: "h3",
      id: "displayToast",
      text: "displayToast",
    },
    {
      type: "p",
      text: (
        <>
          This handler is used to display a toast notification by accepting a{" "}
          <Code>message</Code> and an optional <Code>type</Code> from the
          schema.
        </>
      ),
    },
    {
      type: "code",
      code: `{
  action: "displayToast",
  args: {
    message: "Patient name is required"
  },
}`,
    },
    {
      type: "p",
      text: (
        <>
          The above example will display the provided message as an{" "}
          <Code>error</Code> toast in the top-right corner. If the{" "}
          <Code>type</Code> is not specified, it defaults to{" "}
          <span className="font-semibold">error</span>.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          You can also specify other toast types like{" "}
          <span className="font-semibold">success</span>,{" "}
          <span className="font-semibold">warning</span>,{" "}
          <span className="font-semibold">warn</span>,{" "}
          <span className="font-semibold">info</span>, or{" "}
          <span className="font-semibold">default</span> as shown below:
        </>
      ),
    },
    {
      type: "code",
      code: `{
  action: "displayToast",
  args: {
    type: "success", // Can also be: 'warn' | 'warning' | 'info' | 'error' | 'default'
    message: "Toast message"
  },
},`,
    },
    {
      type: "divider",
      variant: "dotted",
    },
    {
      type: "h3",
      id: "makeApiCall",
      text: "makeApiCall",
    },
    {
      type: "p",
      text: "The makeApiCall handler is used to perform API requests using axios. It helps in fetching or sending data during user interactions or when the page loads.",
    },
    {
      type: "alert",
      text: "Since each project follows its own API calling pattern, this handler will directly invoke the makeApiCall function, which must be provided through the ACWrapperContext component under the utils key in the UIBuilder.",
      color: "warning",
    },
    {
      type: "code",
      code: `// src/index.tsx
function App() {
  return (
    <ACWrapperContext
      props={{
        constants: CONSTANTS, 
        store: store,         
        utils: Utils,         // Utils object of that project (which contains makeApiCall function)
      }}
    >
      <Provider store={store}>
        ...
      </Provider>
    </ACWrapperContext>
  );
}`,
    },
    {
      type: "p",
      text: "Here is a sample schema for this handler that directly invokes the makeApiCall function using the structure passed via ACWrapperContext:",
    },
    {
      type: "code",
      code: `{
  action: "makeApiCall",
  args: {
    api: {
      endpoint: "/patient/\${patient_id}",
      method: "GET",
      params: {
        patient_id: "@state.patient_id",
      },
      onSuccess: [
        {
          action: "changeState",
          args: {
            storedLocation: "patient_details_resp",
          },
        },
      ],
      onFailure: [
        {
          action: "changeState",
          args: {
            storedLocation: "error",
            value: "Unable to fetch user details"
          },
        },
      ],
    },
  },
},`,
    },
    {
      type: "p",
      text: (
        <>
          In this example, the API call dynamically uses the patient ID from the
          current page&apos;s state using <Code>@state.patient_id</Code>. Once
          the call is successful, the data is stored in{" "}
          <Code>patient_details_resp</Code> in the state using the{" "}
          <Code>changeState</Code> handler inside <Code>onSuccess</Code>. In
          case of failure, a predefined error message is stored inside the{" "}
          <Code>error</Code> state.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          The <Code>patient_id</Code> itself was fetched from the page route
          earlier using <Code>@location.patient_id</Code>, configured under the{" "}
          <Code>initial_states</Code> key. Here&apos;s how it looked:
        </>
      ),
    },
    {
      type: "code",
      code: `{
  schema: [
    {
      ...
      initial_states: {
        patient_id: "@location.patient_id^/rehab/dashboard/:patient_id/:rehab_id",
        ...
      },
      ...
    }
  ]
}`,
    },
    {
      type: "p",
      text: "The dynamic value fetched from the state will be substituted into the endpoint URL. For example, the final URL might look like:",
    },
    {
      type: "code",
      code: `/patient/67c029653b8b151116ef1cc4`,
    },
    {
      type: "p",
      text: "If you want to use a static value instead of fetching it from the state, you can directly pass it like this:",
    },
    {
      type: "code",
      code: `{
  action: "makeApiCall",
  args: {
    api: {
      endpoint: "/patient/\${patient_id}/\${branch_id}",
      method: "GET",
      params: {
        patient_id: "@state.patient_id",
        branch_id: "67c029653b8b151116ef1cc4"
      },
      ...
    },
  },
},`,
    },
    {
      type: "p",
      text: "You can also structure the endpoint to include query parameters, like this:",
    },
    {
      type: "code",
      code: `{
  action: "makeApiCall",
  args: {
    api: {
      endpoint: "/patient?patient_id=\${patient_id}&branch_id=\${branch_id}",
      method: "GET",
      params: {
        patient_id: "@state.patient_id",
        branch_id: "67c029653b8b151116ef1cc4"
      },
      ...
    },
  },
},`,
    },
    {
      type: "p",
      text: (
        <>
          The <Code>onSuccess</Code> and <Code>onFailure</Code> keys are used to
          define what actions should be performed based on the API response —
          whether it succeeded or failed.
        </>
      ),
    },
    {
      type: "code",
      code: `{
  action: "makeApiCall",
  args: {
    api: {
      ...
      onSuccess: [
        {
          action: "changeState",
          args: {
            storedLocation: "patient_details_resp", // stores the api response in this path
          },
        },
      ],
      onFailure: [
        {
          action: "changeState",
          args: {
            storedLocation: "error",
            value: "Unable to fetch user details" // Sets this message to the error state
          },
        },
      ],
    },
  },
},`,
    },
    {
      type: "p",
      text: (
        <>
          In addition to <Code>GET</Code> requests, the <Code>makeApiCall</Code>{" "}
          handler also supports <Code>POST</Code> requests. Here’s an example:
        </>
      ),
    },
    {
      type: "code",
      code: `{
  action: "makeApiCall",
  args: {
    api: {
      endpoint: "/rehab-intake",
      method: "POST",
      payload: {
        rehab_id: "@state.rehab_id",
        patient_umr: "@state.patient_details.uhid",
        formData: "@state.evaluation_form",
        id: "@state.evaluation_form._id",
      },
      onSuccess: [
        {
          action: "changeState",
          args: {
            storedLocation: "success",
            value: "Form submitted successfully" // Sets a success message in state
          },
        },
      ],
      onFailure: [
        {
          action: "changeState",
          args: {
            storedLocation: "error",
            value: "Unable to fetch user details" // Sets an error message in state
          },
        },
      ],
    },
  },
},`,
    },
    {
      type: "p",
      text: (
        <>
          To include data in the request body, use the <Code>payload</Code> key.
          Values can be dynamically pulled from the state using{" "}
          <Code>@state.KEY_NAME</Code>.
        </>
      ),
    },
    {
      type: "divider",
      variant: "dotted",
    },
    {
      type: "h3",
      id: "validateForm",
      text: "validateForm",
    },
    {
      type: "p",
      text: (
        <>
          The <Code>validateForm</Code> action is used to perform validations
          across a form, and is most commonly used before making a{" "}
          <Code>POST</Code> API call.
        </>
      ),
    },
    {
      type: "code",
      code: `{
  action: "validateForm",
  args: {
    onTrue: [
      {
        action: "changeState",
        args: {
          storedLocation: "validated",
          value: true,
        },
      },
    ],
  },
}`,
    },
    {
      type: "p",
      text: (
        <>
          In this example, the <Code>validateForm</Code> action scans through
          the entire schema, identifies all visible fields marked as{" "}
          <Code>required</Code>, and checks whether they have valid values.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          If any required field fails validation, it automatically displays a
          toast error message on screen using the field’s <Code>label</Code>.
          Else it will execute the handler inside the <Code>onTrue</Code>.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          If a field does not have a <Code>label</Code>, you can explicitly
          define a custom message using the <Code>errorText</Code> key in the
          schema.
        </>
      ),
    },
    {
      type: "divider",
      variant: "dotted",
    },
    {
      type: "h3",
      id: "execFunction",
      text: "execFunction",
    },
    {
      type: "p",
      text: (
        <>
          The <Code>execFunction</Code> handler is used to execute custom
          ReactJS logic using the <Code>Function()</Code> constructor.
        </>
      ),
    },
    {
      type: "code",
      code: `{
  action: "execFunction",
  args: {
    condition: \`
      const evaluation_form = state?.dynamic?.physio_evaluation?.evaluation_form || {};
      const total = (parseFloat(evaluation_form?.at_rest) || 0) + (parseFloat(evaluation_form?.during_activity) || 0) + (parseFloat(evaluation_form?.at_night) || 0);
      dispatch(setStateValue({ path: 'physio_evaluation.evaluation_form.pain_score', value: total }));
    \`,
  },
},`,
    },
    {
      type: "p",
      text: (
        <>
          This handler takes a <Code>condition</Code> key, which contains the
          ReactJS logic you want to execute.
        </>
      ),
    },
    {
      type: "p",
      text: "But how does this handler get values from the state when we write something like:",
    },
    {
      type: "code",
      code: "const evaluation_form = state?.dynamic?.evaluation_form || {};",
    },
    {
      type: "p",
      text: (
        <>
          That’s because the <Code>execFunction</Code> internally uses the{" "}
          <Code>Function</Code> constructor, passing in specific parameters as
          shown below:
        </>
      ),
    },
    {
      type: "code",
      code: `execFunction: (args: any, context: any) => {
  try {
    const { condition, onTrue = [], onFalse = [], event, value } = args;
    const { state, dispatch } = context;
    let result = false;
    try {
      const fn = new Function(
        'state',
        'dispatch',
        'setStateValue',
        'e',
        condition,
      );
      result = fn(state, dispatch, setStateValue, value ? { value } : event);
    } catch (e) {
      console.error('evalCondition: Error evaluating condition:', e);
      result = false;
    }

    const handlersToRun = result ? onTrue : onFalse;

    handlersToRun.forEach((handler: any) => {
      if (handler && handler.action && globalHandlers[handler.action]) {
        globalHandlers[handler.action](
          { ...args, ...handler.args, rootState: args.rootState, event },
          context,
        );
      }
    });

    return result;
  } catch (error) {
    console.error('execFunction: Unexpected error:', error);
    return false;
  }
}`,
    },
    {
      type: "p",
      text: (
        <>
          So, whenever you want to execute custom Redux logic directly from the
          schema, you can use the <Code>execFunction</Code> handler.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          However, keep in mind that only the variables passed into the
          Function—like <i>state</i>, <i>dispatch</i>, <i>setStateValue</i>, and{" "}
          <i>e</i> can be used. If you reference any other variable that
          isn&apos;t passed as a parameter, you&apos;ll encounter a{" "}
          <span className="font-semibold">variable is not defined</span> error.
        </>
      ),
    },
    {
      type: "p",
      text: "There are cases where we need to evaluate a condition and perform actions based on the result. For example:",
    },
    {
      type: "code",
      code: `{
  action: "execFunction",
  args: {
    condition: "return state?.dynamic?.physio_evaluation?.validated === true",
    onTrue: [
      // Perform POST API call,
      // Navigate to the list page
    ],
    onFalse: [
      // Show an error message
    ]
  },
},`,
    },
    {
      type: "p",
      text: (
        <>
          In this case, if the <span className="font-semibold">validated</span>{" "}
          value from the state is true, the actions under the{" "}
          <Code>onTrue</Code> key will be executed. Otherwise, the actions
          listed under <Code>onFalse</Code> will run instead.,
        </>
      ),
    },
  ],
};
