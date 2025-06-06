"use client";
import { Skeleton } from "@heroui/react";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../(store)/store";
import { UIBuilderNode } from "./ViewBuilder";

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

  if (!UIBuilderComp || !UIBuilderWrapper)
    return (
      <Skeleton className="rounded-lg">
        <div className="h-40 rounded-lg bg-default-300" />
      </Skeleton>
    );

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
