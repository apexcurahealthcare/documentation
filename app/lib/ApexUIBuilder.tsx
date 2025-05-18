"use client";
import React, { useEffect, useState } from "react";
import { UIBuilderNode } from "./ViewBuilder";
import { store } from "../(store)/store";
import { Provider } from "react-redux";

const ApexUIBuilder = (props: UIBuilderNode) => {
  const [UIBuilderComp, setUIBuilderComp] = useState<any>(null);
  const [UIBuilderWrapper, setUIBuilderWrapper] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const mod = await import("@apexcura/ui-builder");
      setUIBuilderComp(() => mod.UIBuilder);
      setUIBuilderWrapper(() => mod.ACWrapperContext);
    })();
  }, []);

  if (!UIBuilderComp || !UIBuilderWrapper) return null;

  return (
    <UIBuilderWrapper
      props={{
        constants: {},
        store: store,
        utils: {},
      }}
    >
      <Provider store={store}>
        <UIBuilderComp json={props.schema} />
      </Provider>
    </UIBuilderWrapper>
  );
};

export default ApexUIBuilder;
