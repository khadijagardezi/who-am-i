import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: any) {
  return (
    <>
      <div className="bg-emerald-950">
        <Navbar pageId={children.props.pageId} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
