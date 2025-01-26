import { Metadata } from "next";
import ViewBuilder from "../lib/ViewBuilder";
import Schema, { PageName } from "../utils/schemas";
import { Constants } from "../utils/constants";
import Breads from "../lib/Breads";
import Copyright from "../lib/Copyright";
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
  const project = Constants.PROJECTS.find((p) => p.route === `/${slug[0]}`);

  return (
    <div className="flex flex-col gap-4">
      <div className="hidden sm:block">
        <Breads
          items={[
            { key: "/", label: "Home" },
            { key: project?.route || "", label: project?.name || "" },
          ]}
        />
      </div>
      <ViewBuilder schema={schema} />
      <Copyright />
    </div>
  );
};

export default Page;
