import React, { useState, useEffect } from "react";
import JobCard from "./components/JobCard";
import data from "./assets/data.json";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  console.log(filters);

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

  return (
    <div>
      <header className="bg-teal-700 mb-10">
        <img src="/images/bg-header-desktop.svg" alt="header image" />
      </header>
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
