import anatomyImage from "../../../assets/anatomy.png";
import rotate from "../../../assets/rotate.png";

const AnatomySection = () => {
  return (
    <section className="relative flex justify-center items-center bg-slate-100/75 rounded-2xl max-w-72 pt-8 pb-12 ml-5">
      {/* Anatomy Image */}
      <img src={anatomyImage} alt="Human Anatomy" className="h-96" />
      <img src={rotate} alt="rotate" className="absolute bottom-5" />

      {/* Healthy Heart Tag */}
      <div className="absolute top-28 -right-6 flex items-center gap-2 bg-indigo-800 text-white text-xs font-medium px-3 py-2 rounded-lg">
        <span role="img" aria-label="heart" className="text-base">
          ❤️
        </span>
        Healthy Heart
      </div>

      {/* Healthy Leg Tag */}
      <div className="absolute bottom-36 -left-5 flex items-center gap-2 bg-cyan-400 text-indigo-800 text-xs font-medium px-4 py-2 rounded-lg">
        <span role="img" aria-label="leg">
          🦵
        </span>
        Healthy Leg
      </div>
    </section>
  );
};

export default AnatomySection;
