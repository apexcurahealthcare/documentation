import ViewBuilder from "../lib/ViewBuilder";
import Schema, { PageName } from "../utils/schemas";

const Page = async ({ params }: { params: Promise<{ slug: PageName[] }> }) => {
  const { slug } = await params;

  const schema = Schema.get(slug[0]);
  if (!schema){
    return null;
  }

  return <ViewBuilder schema={schema} />;
};

export default Page;
