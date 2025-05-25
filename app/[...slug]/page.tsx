import { Metadata } from "next";
import Copyright from "../lib/Copyright";
import { Constants, ISideMenuSection } from "../utils/constants";
import Schema, { AllPages, PageName } from "../utils/schemas";
import DetailsPage from "../lib/Details";
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
  const schemaSlug = slug.join("/");
  const schema = Schema.get(schemaSlug as AllPages);
  if (!schema) {
    return null;
  }
  const project = Constants.PROJECTS.find((p) => p.route === `/${slug[0]}`);
  const page = slug[0];
  const SIDEMENU: ISideMenuSection[] = Constants.SIDEMENU[page] || [];
  const items = SIDEMENU.reduce((acc: any, curr: any) => {
    acc = [...acc, ...curr.items];
    return acc;
  }, []);

  let PREVIOUS, NEXT;
  if (items.length) {
    const currentIndex = items.findIndex(
      (item: any) => item.route === `/${slug?.[1] || ""}`
    );
    PREVIOUS = currentIndex > 0 ? items[currentIndex - 1] : null;
    NEXT = currentIndex < items.length - 1 ? items[currentIndex + 1] : null;
  }

  return (
    <div className="flex flex-col gap-6 mb-4 sm:mb-4" key={schemaSlug}>
      <DetailsPage schema={schema} project={project} page={page} PREVIOUS={PREVIOUS} NEXT={NEXT} />
      <Copyright />
    </div>
  );
};

export default Page;