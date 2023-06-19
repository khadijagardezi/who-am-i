export async function getStaticProps() {
  return {
    props: {
      pageId: "about_me",
    },
  };
}

export default function Home() {
  return (
    <div className="font-bold text-5xl text-teal-600 flex justify-center items-center h-screen px-5">
      <h1>
        Breaking barriers, <br />
        Thriving in the tech world, <br />a girl coding her own destiny.
      </h1>
    </div>
  );
}
