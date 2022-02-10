import "./style.scss";
import React from "react";

interface INavigationButton {
  label: string;
  icon?: React.ReactNode;
}

const NavigationButton: React.FC<INavigationButton> = ({ label, icon }) => {
  return (
    <div className="c-Button">
      {icon}
      <p>{label}</p>
    </div>
  );
};

export default NavigationButton;
