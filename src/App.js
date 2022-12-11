import React, { useState, useEffect } from "react";
import JobCard from "./components/JobCard";
import data from "./assets/data.json";
// import FilterByTags from "./components/FilterByTags";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  // console.log(filters);

  useEffect(() => {
    const filteredData = data.filter((item) => {
      let shouldShowJob = false;
      const labels = [
        ...item.languages,
        ...item.tools,
        item.role,
        item.level,
      ].map((label) => label.toLowerCase());

      shouldShowJob = filters.every((val) =>
        labels.includes(val.toLowerCase())
      );
      return shouldShowJob;
    });
    // console.log(filteredData);

    setJobs(filteredData);
  }, [filters]);

  const handleFilterRemove = (passedFilter) => {
    setFilters(filters.filter((fil) => fil !== passedFilter));
  };

  return (
    <div>
      <header className="bg-teal-700 mb-10">
        <img src="/images/bg-header-desktop.svg" alt="header image" />
      </header>

      <div className="flex bg-white shadow-md my-14 mx-10 p-5 rounded">
        {filters.length > 0 &&
          filters.map((filter) => (
            <span
              onClick={() => handleFilterRemove(filter)}
              className="text-teal-600 bg-teal-100 mb-4 p-2 font-bold mr-3 rounded sm:mb-0  cursor-pointer"
            >
              {filter}
            </span>
          ))}
      </div>

      {jobs.length === 0 ? (
        <p>fetching...</p>
      ) : (
        jobs.map((job) => (
          <JobCard
            job={job}
            key={job.id}
            filters={filters}
            setFilters={setFilters}
          />
        ))
      )}
    </div>
  );
};

export default App;
