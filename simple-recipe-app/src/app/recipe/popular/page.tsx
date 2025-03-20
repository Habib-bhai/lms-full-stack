import Navbar from "@/src/app/components/navbar";
import "@/src/app/main.css"

export default function dynamicItems({params}:{params: {popular:string}}){

    return <>
    <Navbar/>
        <h1>{params.popular}</h1>
    </>
}