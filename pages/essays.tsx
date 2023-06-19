export async function getStaticProps() {
  return {
    props: {
      pageId: "essays",
    },
  };
}

export default function Essays() {
  return (
    <div>
      <div className="p-5 w-1/2 m-auto">
        <h5 className="font-bold text-4xl text-teal-600 m-4">
          What Is Apple’s Vision Pro Really For?
        </h5>
        <p className="text-teal-200 m-3">
          To understand the value of Apple’s new goggles, it’s helpful to think
          about how virtual reality (VR) and augmented reality (AR) correspond
          to two fundamental tasks in decision making.
        </p>
        <img
          src="https://images.pexels.com/photos/3761306/pexels-photo-3761306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="border-4 border-teal-600 rounded-t-lg shadow-lg w-full object-cover"
        />
        <div className="border-2 border-teal-600 p-4">
          <p className=" text-teal-100">
            Apple announced a new computer last week, to great fanfare. The
            Vision Pro is a computer that is worn on your face, but the novel
            aspect is how you use it. Rather than view the computer’s output
            through a physical screen, that output is projected directly into
            your eyes with two very small but high-resolution displays a very
            small distance in front of you. Rather than control the computer
            through a keyboard, mouse, or touch screen, the primary user
            interface is through eye tracking and gestures.
            <br />
            <br />
            Just as they removed the stylus for screens when they launched the
            iPhone, Apple requires no physical controller to use the computer.
            The computer senses what you are interested in interacting with by
            watching your eye movement and then looks at your hands to determine
            what you want to do.
          </p>
        </div>
      </div>
    </div>
  );
}
