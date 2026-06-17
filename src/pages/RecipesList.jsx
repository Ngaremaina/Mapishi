import RecipeItem from "../components/RecipeItem";
import { v4 as uuidv4 } from 'uuid';

const Recipes = ({ recipes }) => {
    const displayRecipes = recipes?.map((recipe) => {
        return (
            <RecipeItem
                key={uuidv4()}
                label={recipe.recipe.label}
                image={recipe.recipe.image}
                dishType={recipe.recipe.dishType}
                icon={recipe.recipe.images.SMALL.url}
                ingredients={recipe.recipe.ingredientLines}
                calories={recipe.recipe.calories}
                source={recipe.recipe.source}
            />
        );
    });

    return (
        <div className="py-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {displayRecipes}
            </div>
        </div>
    );
};

export default Recipes;
