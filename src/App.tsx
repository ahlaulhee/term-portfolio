import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";
import CustomModal from "./components/CustomModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState<{
    title: string;
    status: string;
    image: string;
    description: string;
    tech: string[];
  }>({
    title: "",
    status: "",
    image: "",
    description: "",
    tech: [],
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  console.log(data);
  const currentTime = new Date().toLocaleString("en-US").split(",");
  return (
    <div className="p-2 md:p-5 2xl:p-10 h-screen w-screen text-sm md:text-base">
      <div className="w-full h-full bg-background rounded-lg border md:border-2 p-2 space-y-2">
        {/* TOP SECTION */}
        <div className="pt-2 text-cyan space-y-2">
          <div className="flex justify-between">
            <p>
              ┌─(<span className="text-red">{data.nickname}</span>
              <span className="text-purple">@</span>
              <span className="text-blue">arch</span>)──(
              <span className="text-purple">
                {currentTime[1].trim().replace(" PM", "")}
              </span>
              )
            </p>
            <p>
              (<span className="text-purple">{currentTime[0]}</span>)─┐
            </p>
          </div>
          <div className="flex justify-between">
            <p>
              └─(<span className="text-purple">main</span>)──❯{" "}
              <span className="text-green">ls -la</span>
            </p>
            <p>
              (<span className="text-purple">~/Repos/Portfolio</span>)─┘
            </p>
          </div>
        </div>
        {/* INFO SECTION */}
        <div className="px-2 md:px-4 space-y-1 md:space-y-2">
          {data.commands.map((command, index) => (
            <div key={index}>
              <p className="text-yellow hover:underline duration-200 cursor-pointer">
                /{command.command}
              </p>
              {command.command === "education"
                ? data.education.map((education, index) => (
                    <div className="px-2 md:px-4 flex items-center justify-between space-x-6">
                      <p
                        key={index}
                        onClick={() => {
                          setModalInfo({
                            title: education.name,
                            status: education.status,
                            image: education.thumbnail,
                            description: education.description,
                            tech: education.tech,
                          });
                          openModal();
                        }}
                        className="text-green hover:underline duration-200 cursor-pointer"
                      >
                        /{education.name}{" "}
                        <span className="text-red">❯ Status: </span>
                        <span
                          className={`${
                            education.status === "Finished"
                              ? "text-purple"
                              : "text-gray"
                          }`}
                        >
                          {education.status}
                        </span>
                      </p>
                      <p className="text-xs text-right hidden md:block">
                        education/{education.name}
                      </p>
                    </div>
                  ))
                : null}
              {command.command === "projects"
                ? data.projects.map((project, index) => (
                    <div className="px-2 md:px-4 flex items-center justify-between space-x-6">
                      <p
                        key={index}
                        className="text-green hover:underline duration-200 cursor-pointer"
                        onClick={() => {
                          setModalInfo({
                            title: project.name,
                            status: project.status,
                            image: project.thumbnail,
                            description: project.description,
                            tech: project.tech,
                          });
                          openModal();
                        }}
                      >
                        /{project.name.replace(" ", "-")}{" "}
                        <span className="text-red">❯ Status: </span>
                        <span
                          className={`${
                            project.status === "Finished"
                              ? "text-purple"
                              : "text-blue"
                          }`}
                        >
                          {project.status}
                        </span>
                      </p>
                      <p className="text-xs text-right hidden md:block">
                        projects/{project.name.replace(" ", "-")} -&gt;{" "}
                        <a
                          className="hover:underline duration-200 cursor-pointer"
                          href={project.url}
                        >
                          {project.url}
                        </a>
                      </p>
                    </div>
                  ))
                : null}
              {command.command === "complementary"
                ? data["complementary-education"].map((project, index) => (
                    <div className="px-2 md:px-4 flex items-center justify-between space-x-6">
                      <p key={index} className="text-green">
                        /{project.name}{" "}
                        <span className="text-red">❯ Status: </span>
                        <span
                          className={`${
                            project.status === "Finished"
                              ? "text-purple"
                              : "text-blue"
                          }`}
                        >
                          {project.status}
                        </span>
                      </p>
                      <p className="text-xs hidden md:block">
                        projects/{project.name}
                        {/* <a
                          className="hover:underline duration-200 cursor-pointer"
                          href={project.url}
                        >
                          {project.url}
                        </a> */}
                      </p>
                    </div>
                  ))
                : null}
              {command.command === "languages"
                ? data.languages.map((language, index) => (
                    <p className="text-green px-4" key={index}>
                      /{language.language} -{" "}
                      <a
                        href={
                          language.certificate
                            ? language.certificate
                            : window.location.href
                        }
                        className="text-cyan hover:underline duration-200 cursor-pointer"
                      >
                        {language.level}
                      </a>
                    </p>
                  ))
                : null}
            </div>
          ))}
          <div>
            <h2></h2>
            <p></p>
            <p></p>
          </div>
        </div>
        {/* FOOTER SECTION */}
        <div>
          <button onClick={openModal}>open modal</button>
        </div>
      </div>
      <CustomModal
        title={modalInfo.title}
        status={modalInfo.status}
        image={modalInfo.image}
        description={modalInfo.description}
        tech={modalInfo.tech}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;
