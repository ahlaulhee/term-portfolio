import "./App.css";
import data from "./assets/data.json";

function App() {
  console.log(data);
  const currentTime = new Date().toLocaleString("en-US").split(",");
  return (
    <div className="p-5 h-screen w-screen text-sm md:text-base">
      <div className="w-full h-full bg-background rounded-lg border md:border-2 p-2">
        {/* TOP SECTION */}
        <div className="pt-2 text-cyan">
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
        <div className="px-2 md:px-4 space-y-2">
          {data.commands.map((command, index) => (
            <div key={index}>
              <p
                key={index}
                className="text-yellow hover:underline duration-200 cursor-pointer"
              >
                /{command.command}
              </p>
              {command.command === "education"
                ? data.education.map((education, index) => (
                    <div className="px-2 md:px-4 flex items-center justify-between space-x-6">
                      <p
                        key={index}
                        className="text-green hover:underline duration-200 cursor-pointer"
                      >
                        /{education.name} ❯ Status:{" "}
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
                      <p className="text-xs text-right">
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
                      >
                        /{project.name.replace(" ", "-")} ❯ Status:{" "}
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
                      <p className="text-xs text-right">
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
                      <p
                        key={index}
                        className="text-green hover:underline duration-200 cursor-pointer"
                      >
                        /{project.name} ❯ Status:{" "}
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
                      <p className="text-xs">
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
                      /{language.language} - {language.level}
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
        <div></div>
      </div>
    </div>
  );
}

export default App;
