import Image from "next/image"
import Link from "next/link"

const AnimeList = ({title, images, id}) => {
    return (
    <Link href={`/${id}`} className="cursor-pointer">
        <Image src={images} alt="..." width={600} height={600} />  
        <h4 className="font-bold md:text-xl text-md">{title}</h4>
    </Link>
    )
}

export default AnimeList