import React from "react";
import { TechCard } from "../TechCard/TechCard";
import "./TechsList.scss";

export function TechsList({ techs }) {
  return (
    <div className="techs-list">
      {techs.map((tech) => (
        <TechCard className="techs-list__item" title={tech} />
      ))}
    </div>
  );
}
