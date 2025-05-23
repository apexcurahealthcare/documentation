import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Code } from "@heroui/react";
import { Helpers } from "../../helpers";
import { Constants } from "../../constants";

export const UIBuilderInstallation: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4 sm:gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "Installation",
      className: "uppercase",
    },
    {
      type: "p",
      text: (
        <>
          This guide will walk you through the steps to install the{" "}
          <Code>@apexcura/ui-builder</Code> package in your project. Let’s get
          started!
        </>
      ),
    },
    {
      type: "divider",
      // variant: "dotted"
    },
    {
      type: "h3",
      id: "pre-requisites",
      text: "Prerequisites 📃",
    },
    {
      type: "ul",
      children: Helpers.renderHeadingList(Constants.UI_BUILDER_PRE_REQUISITES),
    },
    {
      type: "h3",
      id: "install-the-package",
      text: "Install the Package 📦",
    },
    {
      type: "ol",
      children: Helpers.renderHeadingList(Constants.UI_BUILDER_INSTALLATION),
    },
    {
      type: "h3",
      id: "basic-setup",
      text: "Basic Setup",
    },
    {
      type: "p",
      text: (
        <>
          Inside the project's reducers list add{" "}
          <Code>dynamicStateReducer</Code> also into it with name{" "}
          <Code>dynamic</Code>
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
      type: "p",
      text: "Create a wrapper component that provides the necessary context:",
    },
    {
      type: "code",
      code: `// src/index.tsx
function App() {
  return (
    <ACWrapperContext
      props={{
        constants: CONSTANTS, // constants if you have any
        store: store,         // redux store object
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
      type: "alert",
      color: "secondary",
      // variant: "side-border",
      text: "As each project has its own api calling patterns along with their own base urls, our library directly call the project's api functions using project's base urls only",
    },
    {
      type: "h3",
      id: "first-view",
      text: "Creating Your First View",
    },
    {
      type: "p",
      text: "Define a schema and use the UIBuilder component to render it:",
    },
    {
      type: "code",
      code: `import { UIBuilder } from "@apexcura/ui-builder";
import useAppNavigate from "../../hooks/useAppNavigate";
import { addPhysioEvaluation } from "../../schemas/addPhysioEvaluation";

const Evalutation = () => {
  const schema = addPhysioEvaluation();
  const navigate = useAppNavigate();

  return <UIBuilder json={schema} navigate={navigate} />;
};

export default Evalutation;`,
    },
    {
      type: "p",
      text: "A simple json will be:",
    },
    {
      type: "code",
      code: `export const addPhysioEvaluation = () => ({
  org_id: "default",
  schema: [
    {
      name: "physio_evaluation",
      initial_states: {
        org_name: "@localStorage.organization.name",
        selectedTab: "patient_details",
      },
      className: "w-full flex bg-white rounded-md p-2 py-6",
      fields: [
        {
          name: "name",
          label: "First Name",
          element: "input-text",
          required: true,
          placeholder: "Eg: Jon Doe",
          color: "primary",
          valueSource: {
            storedLocation: "patient_details.first_name",
          },
          handlers: [
            {
              action: "changeState",
              type: "onChange",
              args: {
                storedLocation: "patient_details.first_name",
              },
            },
          ],
        },
        {
          name: "phno",
          label: "Phone number",
          element: "input-number",
          required: true,
          placeholder: "Eg: 9123456789",
          color: "primary",
          valueSource: {
            storedLocation: "patient_details.phno",
          },
          handlers: [
            {
              action: "changeState",
              type: "onChange",
              args: {
                storedLocation: "patient_details.phno",
              },
            },
          ],
        },
        {
          name: "btn-cancel",
          label: "Previous",
          element: "button",
          variant: "outlined",
          color: "primary",
          iconClassName: "aci-left-arrow aci-dynamic-size size-[12px]",
          handlers: [
            {
              action: "changeState",
              args: {
                storedLocation: "selectedTab",
                value: "patient_details",
              },
            },
          ],
        },
        {
          name: "btn-submit",
          label: "Save and next",
          iconClassName: "aci-right-arrow aci-dynamic-size size-[12px]",
          iconPosition: "right",
          element: "button",
          variant: "solid",
          handlers: [
            {
              action: "validateForm",
              args: {
                onTrue: [
                  {
                    action: "makeApiCall",
                    args: {
                      api: {
                        endpoint: "/rehab-intake",
                        method: "POST",
                        payload: {
                          selected_tab: "@state.selectedTab",
                          rehab_id: "@state.rehab_id",
                          patient_umr: "@state.patient_details.uhid",
                          formData: "@state.clinical_info",
                          id: "@state.clinical_info._id",
                        },
                        onSuccess: [
                          {
                            action: "changeState",
                            args: {
                              storedLocation: "selectedTab",
                              value: "evaluation_form",
                            },
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
        {
          name: "effects",
          handlers: [
            {
              action: "makeApiCall",
              args: {
                api: {
                  endpoint: "/patient/\${patient_id}\",
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
                      action: "testFunction",
                      args: {},
                    },
                  ],
                },
              },
              dependencies: ["patient_id"],
            },
          ]
        }
      ],
      handlers: [],
    },
  ],
});
`,
    },
    {
      type: "h3",
      id: "big-schema",
      text: "Big Schema😱?",
    },
    {
      type: "p",
      text: "Cute. It’s not the size that matters — it’s the quality. If bloated JSON gave superpowers, this one would be unstoppable.😉",
    },
    {
      type: "p",
      text: "Will learn about each segment of the json shortly in the coming pages.",
    },
  ],
};
