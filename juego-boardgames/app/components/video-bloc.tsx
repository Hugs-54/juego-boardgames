export default function VideoBloc(props: {
  title?: string;
  isWhite?: boolean;
  ytbLink: string;
}) {
  const primaryColor = props.isWhite ? "#FFFFFF" : "#58937E";
  const secondaryColor = props.isWhite ? "#58937E" : "#FFFFFF";

  return (
    <div
      className={`min-h-fit flex flex-col items-center justify-center font-bree pb-6 sm:pb-6 md:pb-10 xl:pb-16 ${
        props.isWhite ? "" : "shadow-bloc-top-phone sm:shadow-top-bloc"
      }`}
      style={{ backgroundColor: primaryColor }}
    >
      <div
        className={`${
          props.title
            ? "my-4 sm:my-5 md:my-8 xl:my-12"
            : "mb-6 sm:mb-6 md:mb-10 xl:mb-16"
        }
            text-center font-bold text-2xl sm:text-4xl md:text-6xl xl:text-8xl`}
        style={{ color: secondaryColor }}
      >
        {props.title}
      </div>
      <div className="w-10/12 aspect-video bg-gray-300 rounded-md overflow-hidden">
        <iframe
          className="w-full h-full"
          src={props.ytbLink}
          title="Vidéo YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
