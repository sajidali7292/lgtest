//RENDER SUBMENU
const SubMenu = ({ keyI, submenus, classAChild }) => {
    return (
      <ul className="sub-menu">
        {submenus.map((submenu, index) => (
          <li key={`${submenu.label}-childlist${keyI}`} className={`${classAChild} submenu-items`}>
            <a className={`submenu-link`} href={submenu.url}>{submenu.label}</a>
          </li>
        ))}
      </ul>
    );
};
  
export default SubMenu;