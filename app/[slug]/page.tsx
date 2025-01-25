import ViewBuilder from "../lib/ViewBuilder";
import Schema from "../utils/schemas";

const UIComponents = () => {
  const schema = Schema.get("ui-components");

  return <ViewBuilder schema={schema} />;
};

export default UIComponents;
