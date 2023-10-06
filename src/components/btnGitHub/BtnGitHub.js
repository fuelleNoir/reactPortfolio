import "./style.css";

import gitIcon from "./gitHub-black.svg";

const BtnGitHub = ({link}) => {
    return ( 
    <a href={link} 
    className="btn-outline">
    <img src={gitIcon} alt=""/>
    GitHub repo
</a> );
}
 
export default BtnGitHub;