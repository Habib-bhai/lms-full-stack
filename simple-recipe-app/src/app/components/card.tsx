import Link from "next/link"
export default function Card({ href, url, title }: { href: string, url: string, title: string }) {

    return  <Link href={href} passHref>
    <div className="card">
            <img src={url} alt="meatball" height={350} width={250} />
            <h3>{title}</h3>
            <div className="tags">
                <p>Tags</p>
                <p>Tags</p>
                <p>Tags</p>
            </div>

        </div>
    </Link>
}