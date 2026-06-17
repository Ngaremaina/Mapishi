import React from "react";
import { Link } from "react-router-dom";
import { ExpandMoreIcon, InfoIcon } from "./icons";

const TRANSPARENT_PX =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

function RecipeItem({ label, dishType, image, icon, ingredients, calories, source }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleImgError = (e) => {
    e.currentTarget.src = TRANSPARENT_PX;
  };

  const displayIngredients = ingredients?.map((ingredient, index) => {
    return (
      <p key={index} className="py-0.5 text-sm text-gray-700">
        {ingredient}
      </p>
    );
  });

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      {/* Header: avatar + title + subheader */}
      <div className="flex items-center gap-3 p-4">
        <img
          src={icon}
          alt=""
          loading="lazy"
          onError={handleImgError}
          className="h-10 w-10 shrink-0 rounded-full bg-gray-200 object-cover"
        />
        <div className="min-w-0">
          <h3 className="truncate font-semibold text-gray-900" title={label}>
            {label}
          </h3>
          <p className="truncate text-sm capitalize text-gray-500">{dishType}</p>
        </div>
      </div>

      {/* Media */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={label}
          loading="lazy"
          onError={handleImgError}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute bottom-2 right-2 rounded-full bg-brand-500/95 px-2.5 py-1 text-xs font-semibold text-white shadow">
          {Math.round(calories)} Calories
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-sm text-gray-500">Source</p>
        <p className="font-medium text-gray-900">{source}</p>
      </div>

      {/* Actions */}
      <div className="mt-auto flex items-center border-t border-gray-100 p-2">
        <Link
          to={`/${label}`}
          aria-label="info"
          className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-brand-600 transition hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        >
          <InfoIcon width={18} height={18} />
          Details
        </Link>
        <button
          type="button"
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          className="ml-auto rounded-full p-2 text-gray-600 transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        >
          <ExpandMoreIcon
            width={20}
            height={20}
            className={`transition-transform duration-200 ${expanded ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>

      {/* Collapsible ingredients */}
      {expanded && (
        <div className="border-t border-gray-100 p-4">
          <h4 className="mb-2 font-semibold text-gray-700">Ingredients</h4>
          {displayIngredients}
        </div>
      )}
    </div>
  );
}

export default RecipeItem;
