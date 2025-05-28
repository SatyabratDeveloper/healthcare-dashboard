import * as Icons from "lucide-react";
import { navLinks } from "../../data/navLinks";

const Sidebar = () => {
  return (
    <nav className="bg-blue-50/75 h-screen pt-24 pl-16">
      {navLinks.map((section, index) => (
        <div key={index}>
          {/* Navigation sections */}
          <p
            className={`text-sm text-gray-400 font-medium ${
              section.sectionTitle === "Setting" ? "hidden" : "mb-2 mt-8"
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
                  className={`flex items-center gap-4 py-4 rounded-lg font-medium cursor-pointer ${
                    link.label === "Dashboard"
                      ? "text-indigo-900"
                      : "text-gray-400 hover:text-indigo-900"
                  } ${section.sectionTitle === "Setting" ? "mt-56" : ""}`}
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
