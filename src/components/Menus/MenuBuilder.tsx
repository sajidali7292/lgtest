import MenuItems from './MenuItems';

const MenuBuilder = ({ menu, keyI, classMenu, classAParent, classAChild }) => {
  return (
    <ul className={classMenu}>
        {menu?.map((linkP, index) => {
            if(!linkP.parentId){
                return <MenuItems items={linkP} key={`${keyI}-${index}`} keyI={`${keyI}-${index}`} classAParent={classAParent} classAChild={classAChild} />;
            }
        })}
    </ul>
  );
};

export default MenuBuilder;