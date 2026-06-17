import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ShowItem from "../components/ShowItem";
import { fetchData } from "../service/service";
import CirclesWithBarSpinner from "../components/Loader";
import { AlertIcon } from "../components/icons";

const ShowDetails = () => {
  const { label } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchData(label)
      .then((data) => setRecipes(data.hits))
      .finally(() => setLoading(false));
  }, [label]);

  if (loading) {
    return <CirclesWithBarSpinner />;
  }

  const found = recipes?.some((r) => r.recipe?.label === label);

  if (!found) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-24 text-center text-gray-300">
        <AlertIcon width={48} height={48} className="text-brand-400" />
        <p className="text-lg font-medium text-white">Recipe not found</p>
        <p className="max-w-md text-sm text-gray-400">
          We couldn&apos;t find details for &ldquo;{label}&rdquo;.
        </p>
        <Link
          to="/"
          className="rounded-full bg-brand-500 px-5 py-2 font-medium text-white transition hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        >
          Back to recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="p-2">
      <ShowItem details={recipes} label={label} />
    </div>
  );
};

export default ShowDetails;
