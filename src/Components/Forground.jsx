import { useRef } from "react";
import Card from "./Card";

const Forground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolor!",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolor!",
      fileSize: ".3mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Upload Now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolor!",
      fileSize: ".5mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolor!",
      fileSize: ".5mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  return (
    <div
      ref={ref}
      className="p-4 w-full h-full z-20 fixed top-0 left-0 flex gap-10 flex-wrap"
    >
      {data.map((item, index) => (
        <Card key={index} reference={ref} data={item} />
      ))}
    </div>
  );
};

export default Forground;
