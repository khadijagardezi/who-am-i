import NavItem from "./NavItem";

export type NavItemProps = {
  pageId: string;
};

export default function Navbar(props: NavItemProps) {
  return (
    <div className="flex justify-center mx-auto max-w-7xl h-16 pt-6">
      <nav>
        <ul
          className="flex rounded-3 px-3 text-sm font-
  medium shadow-lg shadow-zinc-100/5
  backdrop-blur bg-teal-800 text-teal-100"
        >
          <NavItem
            title={"Who am I ?"}
            url={"/"}
            isSelected={props.pageId == "about_me"}
          />
          <NavItem
            title={"Books"}
            url={"/books"}
            isSelected={props.pageId == "books"}
          />
          <NavItem
            title={"Essays"}
            url={"/essays"}
            isSelected={props.pageId == "essays"}
          />
        </ul>
      </nav>
    </div>
  );
}
