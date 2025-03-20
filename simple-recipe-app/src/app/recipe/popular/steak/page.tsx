import Navbar from "@/src/app/components/navbar";
import "@/src/app/main.css"
import "@/src/app/recipe/recipe.css"
import RecipeLayout from "@/src/app/components/recipeLayout";

export default function Steak(){


    return <>
    <Navbar/>
     <RecipeLayout title={"Simple Steak and Veggies Recipe: A Delicious and Balanced Meal"} imgUrl={"/asset/steak1.png"}>
Steak and veggies make for a satisfying, protein-packed meal that's quick and easy to prepare. Start by seasoning your steak (ribeye, sirloin, or your favorite cut) with salt, pepper, and a sprinkle of garlic powder. Heat a cast-iron skillet over medium-high heat, adding a tablespoon of olive oil. Once the oil is hot, sear the steak for 3-4 minutes on each side for medium-rare, or adjust the cooking time to your desired doneness. Remove the steak and let it rest.

In the same skillet, add sliced vegetables like bell peppers, zucchini, and cherry tomatoes. Sauté for 5-7 minutes until tender-crisp, adding salt and pepper to taste. For extra flavor, toss in some minced garlic or a splash of balsamic vinegar. Serve the juicy steak alongside the vibrant veggies, and enjoy a wholesome, delicious dinner that's ready in under 30 minutes.
     </RecipeLayout>
    </>
}