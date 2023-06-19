import Image, { StaticImageData } from "next/image";
type ProjectItemProps = {
  urlDisplay: string;
  imageSrc: string;
};

export default function ProjectItem(props: ProjectItemProps) {
  let { urlDisplay, imageSrc } = props;
  return (
    <li>
      <a href="">
        <div className="max-w-sm rounded overflow-hidden">
          <div className="flex-1 flex-column">
            <img
              className="w-full h-96 object-cover shadow-lg"
              src={imageSrc}
            />
            <div className="px-6 pb-4 pt-2">
              <span className="inline-block  bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                🔗 {urlDisplay}
              </span>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}
