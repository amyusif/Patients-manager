import "./Sidebar.scss";
import { main, manage, queue, systemAdmin } from "../../../Data/SidebarData";
import SidebarLogo from "../../SidebarLogo/SidebarLogo";
import SideLinks from "../../SideLinks/SideLinks";

const SidebarNav = () => {


  return (
    <nav className="side-bar">
      <div className="logo">
        <SidebarLogo />
      </div>
      <div className="link-data">
        <div className="link-description">
          <h5>Main</h5>
        </div>
        <div className="links">
          {main.map((link, i) => {
            return (
              <SideLinks name={link.name} icon={link.icon} to={link.path}/>
            );
          })}
        </div>
        <div className="link-description">
          <h5>Guest</h5>
        </div>
        <div className="links">
          {manage.map((link, i) => {
            return (
              <SideLinks name={link.name} 
              key={i}
              icon={link.icon} 
              to={link.path} />
            );
          })}
        </div>
        <div className="link-description">
          <h5>Queue</h5>
        </div>
        <div className="links">
          {queue.map((link, i) => {
            return (
              <SideLinks name={link.name} 
              key={i}
              icon={link.icon} 
              to={link.path} />
            );
          })}
        </div>
        <div className="link-description">
          <h5>System</h5>
        </div>
        <div className="links">
          {systemAdmin.map((link, i) => {
            return (
              <SideLinks name={link.name} 
              key={i}
              icon={link.icon} 
              to={link.path} />
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default SidebarNav;
