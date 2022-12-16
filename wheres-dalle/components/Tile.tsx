import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  type: "unsplash" | "dalle";
}

const Tile = ({ src, alt, type }: Props) => {
  return (
    <div className="relative w-full aspect-square">
      <Image src={`${src}`} alt={alt} fill></Image>
    </div>
  );
};

export default Tile;
