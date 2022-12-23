import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  type: "unsplash" | "dalle";
  onClick: (type: string) => void;
}

const Tile = ({ src, alt, type, onClick }: Props) => {
  return (
    <button
      className="relative w-full aspect-square"
      onClick={() => onClick(type)}
    >
      <Image src={`${src}`} alt={alt} fill></Image>
    </button>
  );
};

export default Tile;
