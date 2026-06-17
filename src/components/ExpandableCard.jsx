import { ExpandMoreIcon } from "./icons";

export const ExpandableCard = ({ title, expanded, onToggle, children }) => (
  <div className="rounded-lg bg-white shadow-md">
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-gray-600">{title}</h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          aria-label="show more"
          className="rounded-full p-2 text-gray-600 hover:bg-gray-100"
        >
          <ExpandMoreIcon
            width={20}
            height={20}
            className={`transition-transform duration-200 ${expanded ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>
      {expanded && <div className="mt-2">{children}</div>}
    </div>
  </div>
);
