// Daynmic route
// Create file in the app directory Car/page.tsx  rafce .
// Select cars folder create folder  like this [car] create file page.tsx in the folder of [car] rafce 
// Check output :
// 3000/cars/car 
// 300/cars/Imran  output will be car  but why ? 
// How can I get path ?

import Image from "next/image";
import Link from "next/link";


const Car=({params}:{params:{car:string, price:number }})=>{

    const carName= params.car.toLowerCase();
    const imagepath=  `/${carName}.jpg`
    return (
    <div>
    <h1>{params.car}</h1>
    <h1>{params.price}</h1>
    <Image width={200} height={200} src={imagepath} alt={imagepath}/>
     (for access path )
    </div>
    )
    }
    export default Car
    
    // Create folder inside the [car] folder like [price] and move page.tsx file in the price folder 
    
    // Linking :
    // Use link tag in the first page.tsx file 
    const Cars =()=>{
    return (
    <div>
    <h1>All cars</h1>
    <ul>
    <Link href={'/cars/Alto/60k'}><li>Alto</li></Link>
    </ul>
    </div>
    )
    }