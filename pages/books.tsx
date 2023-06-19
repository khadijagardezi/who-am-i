import ProjectItem from "../components/ProjectItem";

export async function getStaticProps() {
  return {
    props: {
      pageId: "books",
    },
  };
}

export default function Projects() {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-teal-500">Love is everywhere</h1>
        <h1 className="font-bold text-2xl text-teal-600">
          It's in the books you read, the apps you use, and the people you meet.
        </h1>
      </header>
      <div className="my-16">
        <h2 className="text-2xl text-teal-500">Books</h2>
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12
gap-y-16 mt-8"
        >
          <ProjectItem
            urlDisplay={"Illumination"}
            imageSrc={
              "https://images.pexels.com/photos/2228580/pexels-photo-2228580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
          />
          <ProjectItem
            urlDisplay={"Whimsy"}
            imageSrc={
              "https://images.pexels.com/photos/3007370/pexels-photo-3007370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
          />
          <ProjectItem
            urlDisplay={"Euphoria"}
            imageSrc={
              "https://images.pexels.com/photos/3747163/pexels-photo-3747163.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
          />
          <ProjectItem
            urlDisplay={"Enchantment"}
            imageSrc={
              "https://images.pexels.com/photos/5608541/pexels-photo-5608541.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
          />
        </ul>
      </div>
    </div>
  );
}
