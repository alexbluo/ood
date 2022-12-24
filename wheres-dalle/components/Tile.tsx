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
      <Image src={`${src}`} alt={alt} fill sizes="40vw"></Image>
    </button>
  );
};

export default Tile;
