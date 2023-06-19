type NavItemProps = {
  title: string;
  url: string;
  isSelected: boolean;
};

export default function NavItem(props: NavItemProps) {
  const { title, url, isSelected } = props;
  return (
    <li className="">
      <a
        className={`block px-3 py-2 transition hover:text-teal-500 ${
          isSelected ? "text-teal-400" : ""
        }`}
        href={url}
      >
        {title}
      </a>
    </li>
  );
}
