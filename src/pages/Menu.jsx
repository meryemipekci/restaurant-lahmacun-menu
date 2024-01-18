import { MenuList } from "../helpers/MenuList";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Menumuz</h1>
      <div className="menuList">
        {MenuList.map((menuItem, index) => (
          <div className="menuItem" key={index}>
            <div>
              <img src={menuItem.image} />
            </div>
            <h3>{menuItem.name}</h3>
            <p>{menuItem.price}Tl</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
