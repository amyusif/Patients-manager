import { main, manage, queue, systemAdmin } from "../../../Data/AppData";
import SidebarLogo from "../../SidebarLogo/SidebarLogo";
import { NavBox, Cover, VariantH5, SideRoute } from "../../../Styled/SIdebar";



const SidebarNav = () => {
  return (
    <NavBox>
      <SidebarLogo />
      <Cover>
        <VariantH5>Main</VariantH5>
        {main.map((link, i) => {
          return (
            <SideRoute key={i} to={link.path}>
              {link.icon} {link.name}
            </SideRoute>
          );
        })}
        <VariantH5>Guest</VariantH5>
        {manage.map((link, i) => {
          return (
            <SideRoute key={i} to={link.path}>
              {link.icon} {link.name}
            </SideRoute>
          );
        })}
        <VariantH5>Admin</VariantH5>
        {queue.map((link, i) => {
          return (
            <SideRoute key={i} to={link.path}>
              {link.icon} {link.name}
            </SideRoute>
          );
        })}
        <VariantH5>System</VariantH5>
        {systemAdmin.map((link, i) => {
          return (
            <SideRoute key={i} to={link.path}>
              {link.icon} {link.name}
            </SideRoute>
          );
        })}
      </Cover>
    </NavBox>
  );
};

export default SidebarNav;
