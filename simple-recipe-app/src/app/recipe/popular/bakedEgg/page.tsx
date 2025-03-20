import Navbar from "@/src/app/components/navbar";
import "@/src/app/main.css"
import "@/src/app/recipe/recipe.css"
import RecipeLayout from "@/src/app/components/recipeLayout";

export default function BAkedEgg(){


    return <>
    <Navbar/>
     <RecipeLayout title={"Easy Baked Eggs Recipe: A Simple and Satisfying Breakfast"} imgUrl={"/asset/bakedEgg1.png"}>
Baked eggs are a delicious and effortless way to start your day with a hearty breakfast. Begin by preheating your oven to 375°F (190°C). Grease a small oven-safe dish or ramekin with butter or olive oil. Crack two fresh eggs into the dish, being careful not to break the yolks. Season with a pinch of salt, pepper, and a sprinkle of your favorite herbs like thyme or chives. For added flavor, you can layer in some sautéed spinach, diced tomatoes, or crumbled cheese before adding the eggs. Bake in the preheated oven for 12-15 minutes, or until the whites are set but the yolks remain slightly runny. Serve with toasted bread for dipping. This baked eggs recipe is versatile, easy to customize, and perfect for a quick, nourishing breakfast that feels a little indulgent.
     </RecipeLayout>
    </>
}