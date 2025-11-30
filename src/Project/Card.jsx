
import "./card.css";

export const Card = ({ job }) => {
  return (
    <div className="card glass">
      <div className="top">
        <img src={job.logo} alt="logo" className="logo" />
        <button className="save-btn">Save</button>
      </div>

      <div className="middle">
        <p className="company">
          {job.company} <span>{job.duration}</span>
        </p>

        <h2 className="title">{job.role}</h2>

        <div className="btns">
          {job.tags.map((t, i) => (
            <button key={i} className="tag">{t}</button>
          ))}
        </div>
      </div>

      <div className="ends">
        <div className="hr">
          <h3>{job.rate}</h3>
          <p>{job.location}</p>
        </div>

        <button className="buy-btn">Buy</button>
      </div>
    </div>
  );
};
