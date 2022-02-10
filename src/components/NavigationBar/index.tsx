import "./style.scss";
import React from "react";
import { MdWork } from "react-icons/md";
import { ImBlocked } from "react-icons/im";
import { RiBankFill } from "react-icons/ri";
import NavigationButton from "../NavigationButton";
import { FaTree, FaGavel, FaPiggyBank, FaGlobe } from "react-icons/fa";
import { GiEarthAmerica, GiCutDiamond, GiPerson } from "react-icons/gi";

interface INavigationBar {}

const NavigationBar: React.FC<INavigationBar> = () => {
  return (
    <div>
      <div className="c-navBar">
        <NavigationButton label={"Todos"} icon={<FaGlobe />} />
        <NavigationButton label={"Profissional"} icon={<MdWork />} />
        <NavigationButton label={"Reguladores"} icon={<RiBankFill />} />
        <NavigationButton label={"Sócio-Ambiental"} icon={<FaTree />} />
        <NavigationButton label={"Jurídico"} icon={<FaGavel />} />
        <NavigationButton label={"Listas Restritivas"} icon={<ImBlocked />} />
        <NavigationButton label={"Mídia / Internet"} icon={<GiEarthAmerica />} />
        <NavigationButton label={"Bens e Imóveis"} icon={<GiCutDiamond />} />
        <NavigationButton label={"Cadastro"} icon={<GiPerson />} />
        <NavigationButton label={"Financeiro"} icon={<FaPiggyBank />} />
      </div>
    </div>
  );
};

export default NavigationBar;
