import { CSSProperties } from "react";
const MakeSquare = (props: {
  top: number | string;
  left: number | string;
  size: number;
  opacity: string;
  duration: string;
}) => {
  const color =
    "linear-gradient(226deg, #50eaff 0%, #2862FF 40%, #C411EE 81%, #f41112 112%)";
  const bgColor = color;
  const { top, left, size, opacity, duration } = props;
  const style: CSSProperties = {
    animation: `move-ltr ${duration} infinite`,
    height: size + "px",
    width: size + "px",
    opacity: opacity,
    left: left,
    top: top,
    background: bgColor,
    transition: "0.5s ease-out",
    overflow: "hidden",
    borderRadius: "20%",
    display: "block",
    position: "fixed",
    zIndex: -1,
  };
  return <div style={style}></div>;
};
const randomNumber = (max: number, min: number = 0) => {
  const range = min === 0 ? max : max - min + 1;
  return Math.floor(Math.random() * range + min);
};
const Shapes = () => {
  const pos = {
    top: [-21, 90, 4, 69, -10, 26, 41],
    left: [3, -10, 55, 90, 10, 69, 80],
    opacity: [0.3, 0.4, 0.5, 0.6, 0.7],
  };
  const squares = randomNumber(7, 3);

  return (
    <section className="shapes">
      {[...Array(squares)].map((_item, index) => (
        <MakeSquare
          key={index}
          size={randomNumber(80, 150)}
          opacity={`${pos.opacity[randomNumber(4)]}`}
          duration={randomNumber(10, 4) + "s"}
          top={`${pos.top[randomNumber(6)]}%`}
          left={`${pos.left[randomNumber(6)]}%`}
        />
      ))}
    </section>
  );
};
export default Shapes;
