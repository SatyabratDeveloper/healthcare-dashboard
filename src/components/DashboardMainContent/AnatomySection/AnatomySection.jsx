import anatomyImage from "../../../assets/anatomy.png";
import rotate from "../../../assets/rotate.png";
import { SearchX } from "lucide-react";

const AnatomySection = () => {
  return (
    <section className="relative flex justify-center items-center bg-slate-100/75 rounded-2xl w-76 pt-8 pb-12 ml-5">
      {/* Anatomy Image */}
      <img src={anatomyImage} alt="Human Anatomy" className="h-96" />
      <SearchX className="absolute h-6 w-6 right-5 top-5 text-gray-400 hover:cursor-pointer" />
      <img src={rotate} alt="rotate" className="absolute bottom-5" />

      {/* Healthy Heart Tag */}
      <div className="absolute top-28 -right-4 flex items-center gap-2 bg-indigo-800 text-white text-xs font-medium px-3 py-2 rounded-lg">
        <span role="img" aria-label="heart" className="text-base">
          ❤️
        </span>
        Healthy Heart
      </div>

      {/* Healthy Leg Tag */}
      <div className="absolute bottom-36 -left-4 flex items-center gap-2 bg-cyan-400 text-indigo-800 text-xs font-medium px-4 py-2 rounded-lg">
        <span role="img" aria-label="leg">
          🦵
        </span>
        Healthy Leg
      </div>
    </section>
  );
};

export default AnatomySection;
