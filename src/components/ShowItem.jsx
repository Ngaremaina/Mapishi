import { useState } from "react";
import { ExpandMoreIcon } from "./icons";

const ExpandableCard = ({ title, expanded, onToggle, children }) => (
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

const ShowItem = ({ details, label }) => {
  const [expandIngredients, setExpandIngredients] = useState(false);
  const [expandHealthLabels, setExpandHealthLabels] = useState(false);
  const [expandNutrients, setExpandNutrients] = useState(false);

  const handleExpandIngredients = () => setExpandIngredients(!expandIngredients);
  const handleExpandNutrients = () => setExpandNutrients(!expandNutrients);
  const handleExpandLabels = () => setExpandHealthLabels(!expandHealthLabels);

  let ingredients = [];
  let nutrients = [];
  let healthLabels = [];
  let results = {};

  details?.filter((recipe) => {
    if (recipe.recipe.label === label) {
      results = recipe.recipe;
      results.healthLabels?.map((health) => {
        healthLabels.push(health);
        return healthLabels;
      });

      let dietary = Object.values(results.totalNutrients);

      dietary?.map((nutrient) => {
        nutrients.push(nutrient);
        return nutrients;
      });

      results.ingredients?.map((ingredient) => {
        ingredients.push(ingredient.text);
        return ingredients;
      });
    }
    return results;
  });

  const displayNutrients = nutrients?.map((nutrient) => (
    <p key={nutrient.label} className="py-0.5 text-sm text-gray-700">
      {nutrient.label}: {nutrient.quantity} {nutrient.unit}
    </p>
  ));

  const displayHealthLabels = (
    <div className="flex flex-wrap gap-2">
      {healthLabels?.map((healthlabel, index) => (
        <span
          key={`${healthlabel}-${index}`}
          className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700"
        >
          {healthlabel}
        </span>
      ))}
    </div>
  );

  const displayIngredients = ingredients?.map((ing, index) => (
    <p key={`ingredient-${index}`} className="py-0.5 text-sm text-gray-700">
      {ing}
    </p>
  ));

  return (
    <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-12">
      {/* Image Section */}
      <div className="md:col-span-5">
        <img
          src={results.image}
          alt={results.label}
          className="max-h-[400px] w-full rounded-xl object-cover shadow-lg ring-1 ring-white/10"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center rounded-xl bg-surface p-6 text-white ring-1 ring-white/10 md:col-span-7">
        <h1 className="mb-1 text-3xl font-bold tracking-tight">{results.label}</h1>
        <h2 className="text-xl capitalize text-gray-300">{results.dishType}</h2>
        <p className="mt-3 text-gray-300">
          <span className="text-gray-500">Source:</span> {results.source}
        </p>
        <p className="text-sm capitalize text-gray-400">{results.cuisineType} cuisine</p>
        <span className="mt-4 inline-flex w-fit items-center rounded-full bg-brand-500/15 px-3 py-1 text-sm font-semibold text-brand-400">
          {Math.round(results.calories)} Calories
        </span>
      </div>

      {/* Cards Section */}
      <div className="md:col-span-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <ExpandableCard
            title="Ingredients"
            expanded={expandIngredients}
            onToggle={handleExpandIngredients}
          >
            {displayIngredients}
          </ExpandableCard>

          <ExpandableCard
            title="Nutrients"
            expanded={expandNutrients}
            onToggle={handleExpandNutrients}
          >
            {displayNutrients}
          </ExpandableCard>

          <ExpandableCard
            title="Health Labels"
            expanded={expandHealthLabels}
            onToggle={handleExpandLabels}
          >
            {displayHealthLabels}
          </ExpandableCard>
        </div>
      </div>
    </div>
  );
};

export default ShowItem;
