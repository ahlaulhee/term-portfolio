import Draggable from "react-draggable";

type Props = {
  isOpen: boolean;
  onClose: () => void;

  title: string;
  image?: string;
  status: string;
  description: string;
  tech: string[];
};

const CustomModal = (props: Props) => {
  const techIcons = props.tech.map((icon) => (
    <li className="flex flex-col justify-center items-center w-24" key={icon}>
      <span className="text-cyan">{`${
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
    <Draggable handle=".handle">
      <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col bg-background border border-white text-white rounded-md m-auto h-[50rem] w-[60rem] text-lg">
        <div className="flex justify-between w-full h-fit p-1 bg-gray border-b-black border-b rounded-tl-lg rounded-tr-lg handle">
          <div className="w-1/4"></div>
          <div className="text-red text-lg w-full text-center">
            {props.title}
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
          <div className="text-justify">{props.description}</div>
          <img
            src={props.image}
            alt="Thumbnail"
            className="rounded-lg border-2 border-black flex w-full"
          />
          <div className="text-center text-green">Status: {props.status}</div>
          <div className="flex justify-center text-cyan">Tech used:</div>
          {techIcons ? (
            <ul className="flex justify-evenly space-x-8">{techIcons}</ul>
          ) : null}
        </div>
      </div>
    </Draggable>
  );
};

export default CustomModal;
