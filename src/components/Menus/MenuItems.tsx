import SubMenu from './SubMenu';

const MenuItems = ({ items, classAParent, classAChild }) => {
  return (
    <li className={`${classAParent} menu-items`}>
      {items.childItems()?.nodes.length > 0 ? (
        <>
          <a href={items.url} className={`menu-link`}> {items.label}</a>
          <SubMenu submenus={items.childItems()?.nodes} classAChild={classAChild} />
        </>
      ) : (
        <a class="teeees" href={items.url}>{items.label} {items.parentId}</a>
      )}
    </li>
  );
};

export default MenuItems;