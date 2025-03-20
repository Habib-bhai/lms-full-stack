

export default function RecipeLayout({title,imgUrl, children }: {title:string, imgUrl:string, children:string}) {

    return <div className="componentMain">

    <h1>{title}</h1>
    <img src={imgUrl} alt="" height={450} width={500} />
    <p>{children}</p>
    
    </div>
}