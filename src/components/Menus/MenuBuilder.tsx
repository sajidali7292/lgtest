import MenuItems from './MenuItems';

const MenuBuilder = ({ menu, classMenu, classAParent, classAChild }) => {
  return (
    <ul className={classMenu}>
        {menu?.map((linkP, index) => {
            if(!linkP.parentId){
                return <MenuItems items={linkP} key={index} classAParent={classAParent} classAChild={classAChild} />;
            }
        })}
    </ul>
  );
};

export default MenuBuilder;