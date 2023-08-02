import { default as NImage } from "next/image";

const Image = ({
  src,
  alt,
  cover,
  className,
  containerClass,
}: {
  src:string;
  alt:string;
  cover?:boolean;
  className?:string;
  containerClass?:boolean;
}) => {
  return (
    <div className={"image-container " + (containerClass ?? "")}>
      <NImage
        src={src}
        alt={alt ?? ""}
        className={"image " + (className ?? "") + (cover ? " full-cover" : "")}
        fill      
      />
    </div>
  );
};
export default Image;
