import Link from "next/link";
import wonders from './wonders'
import Image from "next/image";
import '../globals.css'

export default function Home(){
    return(
        <main className="container mx-auto bg-[]">
            <h1 className="text-center text-[26px] font-[bold] my-[16px]">
                New Wonders of the World
            </h1>
            <div className="max-w-[1300px] w-full mx-auto grid grid-cols-4 gap-[20px]">
                {wonders.map(({id,src,name})=>(
                    <Link key={id} href={`/photo-feed/${id}`}>
                    <Image
                    alt={name}
                    src={src}
                    className="w-full object-cover aspect-square"
                    />
                    </Link>
                ))}
            </div>
        </main>
    );
}