import "./TechCard.scss";

export const TechCard = ({ title, className, ...props }) => (
  <div className={` tech-card ${className ? className : ""}`} {...props}>
    <span className="tech-card__title">{title}</span>
  </div>
);
