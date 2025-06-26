import Image from "next/image";
import wondersImages, { WonderImage } from "../wonders";
import '../../globals.css'

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;
  return (
    <div className="container mx-auto my-[40px] text-[black]">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-[white] text-center text-[26px] font-[bold] my-[20px]">{photo.name}</h1>
        </div>
        <Image
          alt={photo.name}
          src={photo.src}
          className="w-full object-cover aspect-square "
        />

        <div className="bg-[white] py-[20px]">
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
      </div>
    </div>
  );
}