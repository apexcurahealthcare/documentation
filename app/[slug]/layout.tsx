import OnThisPage from "../lib/OnThisPage";
import Sidebar from "../lib/Sidebar";
import { PageName } from "../utils/schemas";

export default async function UIComponentsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: PageName };
}) {
  const { slug } = await params;
  return (
    <section className="grid grid-cols-5 relative">
      <Sidebar page={slug} />
      <div className="col-span-3 p-4">{children}</div>
      <OnThisPage page={slug} />
    </section>
  );
}
