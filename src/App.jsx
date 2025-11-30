import React from "react";
import { Card } from "./Project/Card";
import { jobs } from "./Project/Data";
import "./App.css";

export default function App() {
  return (
    <div className="main-grid">
      {jobs.map(job => (
        <Card key={job.id} job={job} />
      ))}
    </div>
  );
}
