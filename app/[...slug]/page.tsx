import { Metadata } from "next";
import ViewBuilder from "../lib/ViewBuilder";
import Schema, { PageName } from "../utils/schemas";
import { Constants } from "../utils/constants";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: PageName[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = Constants.PROJECTS.find((p) => p.route === `/${slug[0]}`);

  return {
    title: project ? `${project?.name}` : "",
  };
}
const Page = async ({ params }: { params: Promise<{ slug: PageName[] }> }) => {
  const { slug } = await params;

  const schema = Schema.get(slug[0]);
  if (!schema) {
    return null;
  }

  return <ViewBuilder schema={schema} />;
};

export default Page;
