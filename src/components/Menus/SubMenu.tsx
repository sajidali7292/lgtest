//RENDER SUBMENU
const SubMenu = ({ submenus, classAChild }) => {
    return (
      <ul className="sub-menu">
        {submenus.map((submenu, index) => (
          <li key={index} className={`${classAChild} submenu-items`}>
            <a className={`submenu-link`} href={submenu.url}>{submenu.label}</a>
          </li>
        ))}
      </ul>
    );
};
  
export default SubMenu;