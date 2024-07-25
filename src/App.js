import { useState } from "react";
import Button from "./components/Button";
import { activeJobs, types } from "./config/jobs.config";
import Jobs from "./Jobs";

function App() {
  const [activeType, setActiveType] = useState("All");

  return (
    <div className="p-20 bg-amber-50">
      <div>
        <p className="h-10 p-2 font-medium text-center border border-black rounded-3xl w-28">
          we're hiring!
        </p>
        <h1 className="pt-5 text-5xl font-semibold tracking-wider ">
          Be part of our mission
        </h1>
        <p className="pt-5 tracking-wider">
          we're looking for passionate people to join us on our mission. We
          value
        </p>
        <p className="pt-1 tracking-wider">
          flat hierarchies,clear communication,and full ownership and
          responsibility.
        </p>
        <div className="flex justify-around mr-48 pt-14">
          {types.map((i) => (
            <div key={i} className="pb-5">
              <Button
                onClick={() => setActiveType(i)}
                variant={activeType === i ? "solid" : "outlined"}
              >
                {i}
              </Button>
            </div>
          ))}
        </div>
        <hr class="h-px my-8 bg-gray-700 border-2 "></hr>
      </div>
      <div>
        {activeJobs
          .filter((i) =>
            i.type.includes(activeType === "All" ? "" : activeType)
          )
          .map(function descAbout(i) {
            return (
              <>
                <Jobs
                  title={i.title}
                  description={i.desc}
                  remote={i.remote}
                  fulltime={i.fulltime}
                  link={i.link}
                />
              </>
            );
          })}
      </div>
    </div>
  );
}

export default App;
