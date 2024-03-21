import SideBar from "@/components/side-bar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="overflow-hidden h-screen flex flex-col md:flex-row">
      <section className="bg-background border-r border-r-muted  ">
        <SideBar />
      </section>
      <section>{children}</section>
    </main>
  );
};

export default Layout;
