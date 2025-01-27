import React, {useRef} from "react";
import Card from "./Card";


const Foreground = () => {

  const ref=useRef(null);

  const data = [
    {
      desc: "This is the background color of the card that will be displayed.",
      filesize: "0.5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is the background color of the card that will be displayed.",
      filesize: "2 mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "This is the background color of the card that will be displayed.",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is the background color of the card that will be displayed.",
      filesize: "1 mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is the background color of the card that will be displayed.",
      filesize: "0.4 mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
  ];
  return (
    <>
      <div ref={ref} className="w-full h-full fixed top-0 left-0 z-[3] flex gap-10 flex-wrap p-5">
        {/* JSX  */}
        {data.map((item,index)=>(
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
