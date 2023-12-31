import Draggable from "react-draggable";
import { Resizable } from "re-resizable";

import { info } from "../assets/data.json";
import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactModal = (props: Props) => {
  const [formData, setFormData] = useState<{
    user_name: string;
    user_email: string;
    message: string;
  }>({
    user_name: "",
    user_email: "",
    message: "",
  });

  const form = useRef<HTMLFormElement | null>(null);

  const contactIcons = info[1].link?.map((icon) => (
    <a
      className="group flex flex-col justify-center items-center w-24"
      href={icon.url}
      key={icon.name}
    >
      <span className="opacity-0 group-hover:opacity-100 transition duration-200 group-hover:bg-gray py-1 px-3 rounded-lg text-red">{`${
        icon.name.charAt(0).toUpperCase() + icon.name.slice(1)
      }`}</span>
      <img
        className="w-16 h-16 filter invert"
        src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${icon.name}.svg`}
        alt=""
      />
    </a>
  ));

  if (!props.isOpen) {
    return null;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="fixed top-[5%] bottom-0 left-[3%] right-0">
      <Draggable handle=".handle">
        <Resizable
          minHeight={400}
          minWidth={480}
          maxHeight={900}
          maxWidth={1800}
          defaultSize={{
            width: 600,
            height: 700,
          }}
        >
          <div className="fixed top-0 right-0 bottom-0 left-0 flex flex-col bg-background border border-white text-white rounded-md text-lg">
            <div className="flex justify-between w-full h-fit p-1 bg-gray border-b-black border-b rounded-tl-lg rounded-tr-lg handle">
              <div className="w-1/4"></div>
              <div className="text-red text-lg w-full text-center">
                {info[1].name}
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
              <div className="flex justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/2048px-Google_Contacts_icon.svg.png"
                  alt="Thumbnail"
                  className="rounded-lg flex w-24 h-24 contrast-50"
                />
              </div>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col px-12 space-y-4"
              >
                <input
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  className="py-2 px-4 rounded-lg border-2 border-purple outline-none text-background"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  className="py-2 px-4 rounded-lg border-2 border-purple outline-none text-background"
                />
                <textarea
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="py-2 px-4 rounded-lg border-2 border-purple resize-none outline-none text-background"
                />
                <input
                  type="submit"
                  value="Send"
                  className="py-3 px-4 rounded-lg bg-red hover:bg-purple duration-300 cursor-pointer"
                  // onClick={sendEmail}
                />
              </form>
              <div className="text-center">
                <p>You can find me:</p>
                {contactIcons ? (
                  <div className="flex flex-wrap gap-4 justify-center">
                    {contactIcons}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Resizable>
      </Draggable>
    </div>
  );
};

export default ContactModal;
