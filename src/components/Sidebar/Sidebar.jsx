import * as Icons from "lucide-react";
import { navLinks } from "../../data/navLinks";

const Sidebar = () => {
  return (
    <nav className="bg-blue-50/75 min-h-screen 2xl:pt-24 xl:pt-20 lg:pt-16 2xl:px-12 xl:px-10 lg:px-8 lg:block hidden">
      {navLinks.map((section, index) => (
        <div key={index}>
          {/* Navigation sections */}
          <p
            className={`lg:text-sm text-xs text-gray-400 font-medium ${
              section.sectionTitle === "Setting" ? "hidden" : "mb-2 mt-5"
            }`}
          >
            {section.sectionTitle}
          </p>
          {/* Navigation links, icons */}
          <ul>
            {section.links.map((link, i) => {
              const Icon = Icons[link.icon];
              return (
                <li
                  key={i}
                  className={`flex items-center gap-4 xl:text-base md:text-sm  py-4 rounded-lg font-medium cursor-pointer ${
                    link.label === "Dashboard"
                      ? "text-indigo-900"
                      : "text-gray-400 hover:text-indigo-900"
                  } ${
                    section.sectionTitle === "Setting" ? "fixed bottom-5" : ""
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {link.label}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default Sidebar;
