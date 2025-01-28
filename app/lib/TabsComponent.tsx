import React, { useState } from "react";
import { Tab, Tabs } from "@heroui/react";
import ViewBuilder, { TabNode } from "./ViewBuilder"; // Import the ViewBuilder component

interface TabsProps {
  items: TabNode[];
  variant?: "underlined" | "solid" | "light"; // Add variant prop if needed
}

const TabsComponent: React.FC<TabsProps> = ({ items, variant = "underlined" }) => {
  const [activeTab, setActiveTab] = useState(items[0]?.key); // Set the first tab as active by default

  return (
    <div>
      <Tabs variant={variant} onSelectionChange={(key) => setActiveTab(key as string)}>
        {items.map((tab) => (
          <Tab key={tab.key} title={tab.title} />
        ))}
      </Tabs>

      <div className="mt-4">
        {items.map((tab) => (
          <div
            key={tab.key}
            style={{ display: tab.key === activeTab ? "block" : "none" }}
          >
            <ViewBuilder schema={tab.schema} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsComponent;