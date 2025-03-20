import Navbar from "@/src/app/components/navbar";
import "@/src/app/main.css"
import "@/src/app/recipe/recipe.css"
import RecipeLayout from "@/src/app/components/recipeLayout";

export default function meatBall(){


    return <>
    <Navbar/>
     <RecipeLayout title={"Easy Meatball Recipe: A Comforting Classic for Any Occasion"} imgUrl={"/asset/meatball1.png"}>
     Meatballs are a delicious and versatile dish that can be enjoyed in various cuisines around the world. To prepare a classic meatball recipe, you'll need ground meat—typically beef, pork, or a combination—mixed with breadcrumbs, eggs, and a blend of herbs and spices like garlic, parsley, and oregano. The mixture is then shaped into balls and browned in a skillet or baked in the oven until cooked through. Meatballs can be served in a rich tomato sauce over pasta, enjoyed as an appetizer with dipping sauce, or tucked into a hearty sandwich, making them a comforting and flavorful option for any meal.
     </RecipeLayout>
    </>
}