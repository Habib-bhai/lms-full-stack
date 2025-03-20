import Navbar from "@/src/app/components/navbar";
import "@/src/app/main.css"
import "@/src/app/recipe/recipe.css"
import RecipeLayout from "@/src/app/components/recipeLayout";

export default function BAkedEgg(){


    return <>
    <Navbar/>
     <RecipeLayout title={"Easy Raspberry Ice Cream Recipe: A Refreshing Summer Treat"} imgUrl={"/asset/raspberry2.png"}>
Raspberry ice cream is a delightful way to cool down on a hot day, and it's surprisingly easy to make at home. Start by blending 2 cups of fresh or frozen raspberries with 1 cup of sugar in a blender or food processor until smooth. Strain the mixture through a fine sieve to remove the seeds. In a large mixing bowl, combine the raspberry puree with 2 cups of heavy cream and 1 cup of whole milk, stirring until well blended. Pour the mixture into an ice cream maker and churn according to the manufacturer's instructions, usually around 20-25 minutes. If you don't have an ice cream maker, pour the mixture into a shallow container and freeze, stirring every 30 minutes until it reaches the desired consistency. Once churned or frozen, transfer the ice cream to an airtight container and freeze for a few hours until firm. Enjoy this creamy, tangy raspberry ice cream as a refreshing dessert or a sweet snack.
     </RecipeLayout>
    </>
}