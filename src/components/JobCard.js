import React from "react";

const JobCard = (props) => {
  const parameters = [props.job.role, props.job.level];

  if (props.job.tools) {
    parameters.push(...props.job.tools);
  }

  if (props.job.languages) {
    parameters.push(...props.job.languages);
  }

  const handleFilters = (parameter) => {
    console.log([...props.filters, parameter]);
    props.setFilters([...props.filters, parameter]);
  };

  return (
    <div className="flex flex-col bg-white shadow-lg m-4 p-6 rounded my-16 mx-10 sm:flex-row">
      {/* <header>
        <img src="/images/bg-header-desktop.svg" alt="" />
      </header> */}
      <div>
        <img
          className="w-20 h-20 -mt-14 mb-5 sm:mt-0 sm:h-25 sm:w-25 sm:my-0"
          src={props.job.logo}
          alt="logo"
        />
      </div>

      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold  text-teal-600">
          {props.job.company}
          {props.job.new && (
            <span className="bg-teal-500 text-teal-100  py-1 px-2 m-2 font-bold uppercase rounded-full text-sm">
              New
            </span>
          )}
          {props.job.featured && (
            <span className="bg-gray-600 text-white m-2 py-1 px-2 font-bold uppercase rounded-full text-sm">
              Featured
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl my-2">{props.job.position}</h2>
        <p className="text-gray-800">
          {props.job.postedAt} . {props.job.contract} . {props.job.location}
        </p>
      </div>

      <div className="flex flex-wrap items-center mt-4 pt-4 mx-4 border-t border-gray-600 border-solid sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0">
        {parameters
          ? parameters.map((parameter) => (
              <button
                onClick={() => handleFilters(parameter)}
                className="text-teal-600 bg-teal-100 mb-4 p-2 font-bold mr-3 rounded sm:mb-0  cursor-pointer"
              >
                {parameter}
              </button>
            ))
          : ""}
      </div>
    </div>
  );
};

export default JobCard;
