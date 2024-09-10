/* eslint-disable react-refresh/only-export-components */
import { getMenu } from '../../services/apiRestaurant';
import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-3 pb-12 pt-4 xl:mx-auto xl:w-[70rem]">
      {menu.map((menuBali) => (
        <MenuItem menuBali={menuBali} key={menuBali.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
