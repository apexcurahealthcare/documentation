import { ReactNode } from "react";
import OnThisPage from "../lib/OnThisPage";
import Sidebar from "../lib/Sidebar";
import { PageName } from "../utils/schemas";
type LayoutProps = {
  children: ReactNode;
  params: Promise<{ slug: PageName }>;
};
export default async function Layout({ children, params }: LayoutProps) {
  const { slug } = await params;
  return (
    <section className="grid grid-cols-5 relative">
      <Sidebar page={slug} />
      <div className="col-span-3 sm:col-span-full p-4 sm:px-6">{children}</div>
      <OnThisPage page={slug} />
    </section>
  );
}
