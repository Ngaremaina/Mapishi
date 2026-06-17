import { useState } from "react";
import { ExpandMoreIcon } from "./icons";
import { SkeletonBox } from "./SkeletonBox";
import { ExpandableCard } from "./ExpandableCard";


export const ShowItem = ({ details, label, loading }) => {
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

  if (!loading) {
    details?.filter((recipe) => {
      if (recipe.recipe.label === label) {
        results = recipe.recipe;

        results.healthLabels?.forEach((health) => {
          healthLabels.push(health);
        });

        Object.values(results.totalNutrients || {}).forEach((nutrient) => {
          nutrients.push(nutrient);
        });

        results.ingredients?.forEach((ingredient) => {
          ingredients.push(ingredient.text);
        });
      }
    });
  }

  // ---------------- SKELETON UI ----------------
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-12">
        {/* Image skeleton */}
        <div className="md:col-span-5">
          <SkeletonBox className="h-[400px] w-full rounded-xl" />
        </div>

        {/* Text skeleton */}
        <div className="md:col-span-7 space-y-3 rounded-xl bg-surface p-6">
          <SkeletonBox className="h-8 w-3/4" />
          <SkeletonBox className="h-6 w-1/2" />
          <SkeletonBox className="h-4 w-2/3" />
          <SkeletonBox className="h-4 w-1/3" />
          <SkeletonBox className="h-6 w-1/4 mt-4" />
        </div>

        {/* Cards skeleton */}
        <div className="md:col-span-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg bg-white p-4 shadow-md">
              <SkeletonBox className="h-5 w-1/2 mb-3" />
              <SkeletonBox className="h-4 w-full mb-2" />
              <SkeletonBox className="h-4 w-5/6 mb-2" />
              <SkeletonBox className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ---------------- NORMAL UI ----------------
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
      {/* Image */}
      <div className="md:col-span-5">
        <img
          src={results.image}
          alt={results.label}
          className="max-h-[400px] w-full rounded-xl object-cover shadow-lg"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center rounded-xl bg-surface p-6 text-white md:col-span-7">
        <h1 className="mb-1 text-3xl font-bold">{results.label}</h1>
        <h2 className="text-xl text-gray-300">{results.dishType}</h2>
        <p className="mt-3 text-gray-300">
          <span className="text-gray-500">Source:</span> {results.source}
        </p>
        <p className="text-sm text-gray-400">{results.cuisineType}</p>
        <span className="mt-4 inline-flex w-fit rounded-full bg-brand-500/15 px-3 py-1 text-sm font-semibold text-brand-400">
          {Math.round(results.calories)} Calories
        </span>
      </div>

      {/* Cards */}
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