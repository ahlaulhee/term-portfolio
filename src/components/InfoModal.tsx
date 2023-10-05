import Draggable from "react-draggable";
import { Resizable } from "re-resizable";
import { TypeAnimation } from "react-type-animation";

import { name, info } from "../assets/data.json";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const InfoModal = (props: Props) => {
  const techIcons = info[0].tech?.map((icon) => (
    <li
      className="group flex flex-col justify-center items-center w-24"
      key={icon}
    >
      <span className="opacity-0 group-hover:opacity-100 transition duration-200 group-hover:bg-gray py-1 px-3 rounded-lg text-red">{`${
        icon.charAt(0).toUpperCase() + icon.slice(1)
      }`}</span>
      <img
        className="w-16 h-16 filter invert"
        src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${icon}.svg`}
        alt=""
      />
    </li>
  ));

  if (!props.isOpen) {
    return null;
  }

  return (
    <div className="fixed top-[5%] bottom-0 left-[3%] right-0">
      <Draggable handle=".handle">
        <Resizable
          minHeight={400}
          minWidth={480}
          maxHeight={900}
          maxWidth={1800}
          defaultSize={{
            width:
              window.screen.availWidth > 768
                ? window.screen.availWidth / 2
                : window.screen.availWidth,
            height:
              window.screen.availWidth > 768
                ? window.screen.availHeight / 1.5
                : window.screen.availHeight,
          }}
        >
          <div className="fixed top-0 right-0 bottom-0 left-0 flex flex-col bg-background border border-white text-white rounded-md text-lg">
            <div className="flex justify-between w-full h-fit p-1 bg-gray border-b-black border-b rounded-tl-lg rounded-tr-lg handle">
              <div className="w-1/4"></div>
              <div className="text-red text-lg w-full text-center">
                {info[0].name}
              </div>
              <div className="w-1/4 flex justify-end">
                <button
                  className="rounded-full bg-red font-bold px-2 hover:bg-purple duration-200"
                  onClick={props.onClose}
                >
                  X
                </button>
              </div>
            </div>
            <div className="p-4 space-y-4 overflow-y-scroll overflow-x-hidden">
              <div className="text-center">
                <TypeAnimation
                  sequence={[`Hi i'm ${name}`, 5000, "", 1000]}
                  repeat={Infinity}
                  speed={50}
                  className="text-green text-2xl"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src={info[0].thumbnail}
                  alt="Thumbnail"
                  className="rounded-lg border-2 border-black flex"
                />
              </div>
              <div className="text-justify indent-12">
                {info[0].description}
              </div>
              <div>
                {info[0].tech ? (
                  <div className="flex justify-center text-cyan">Tech:</div>
                ) : null}
                {techIcons ? (
                  <ul className="flex flex-wrap gap-4 justify-center">
                    {techIcons}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        </Resizable>
      </Draggable>
    </div>
  );
};

export default InfoModal;
