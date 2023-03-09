import SubMenu from './SubMenu';

const MenuItems = ({ items, keyI, classAParent, classAChild }) => {
  return (
    <li key={`${items.label}-list${keyI}`} className={`${classAParent} menu-items`}>
      {items.childItems()?.nodes.length > 0 ? (
        <>
          <a href={items.url} className={`menu-link`}> {items.label}</a>
          <SubMenu submenus={items.childItems({first: 50})?.nodes} classAChild={classAChild} keyI={keyI}/>
        </>
      ) : (
        <a href={items.url}>{items.label} {items.parentId}</a>
      )}
    </li>
  );
};

export default MenuItems;