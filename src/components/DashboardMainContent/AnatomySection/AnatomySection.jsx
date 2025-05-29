import anatomyImage from "../../../assets/anatomy.png";
import rotate from "../../../assets/rotate.png";
import { SearchX } from "lucide-react";

const AnatomySection = () => {
  return (
    <section className="relative flex justify-center items-center 2xl:h-108 lg:h-88 md:h-100 h-88 2xl:w-72 xl:w-60 md:w-50 w-full bg-blue-50/75 rounded-2xl pt-8 pb-12 ml-5">
      {/* Anatomy Image */}
      <img src={anatomyImage} alt="Human Anatomy" className="h-full" />
      <SearchX className="absolute h-6 w-6 right-5 top-5 text-gray-400 hover:cursor-pointer" />
      <img src={rotate} alt="rotate" className="absolute bottom-5" />

      {/* Healthy Heart Tag */}
      <div className="absolute 2xl:top-26 lg:top-21 top-25 2xl:-right-4 xl:-right-7 md:-right-4 sm:right-1 -right-4 flex items-center gap-1 bg-indigo-800 text-white text-xs font-medium 2xl:px-3 2xl:py-1.5 px-2 py-1 rounded-lg 2xl:w-32 lg:w-30 md:w-22 sm:w-30 w-22">
        <span role="img" aria-label="heart" className="text-sm">
          ❤️
        </span>
        Healthy Heart
      </div>

      {/* Healthy Leg Tag */}
      <div className="absolute 2xl:bottom-32 lg:bottom-27 bottom-32 2xl:-left-3 xl:-left-4 lg:-left-8 md:-left-6 sm:left-3 -left-5 flex items-center gap-1 bg-cyan-400 text-indigo-800 text-xs font-medium 2xl:px-3 2xl:py-1.5 px-2 py-1 rounded-lg lg:w-30 md:w-22 sm:w-30 w-22">
        <span role="img" aria-label="leg" className="text-sm">
          🦵
        </span>
        Healthy Leg
      </div>
    </section>
  );
};

export default AnatomySection;
