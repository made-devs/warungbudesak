/* eslint-disable react-refresh/only-export-components */
import { getMenu } from '../../services/apiRestaurant';
import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem';
import { motion } from 'framer-motion';

function Menu() {
  const menu = useLoaderData();

  return (
    <motion.ul
      initial={{ opacity: 0, x: -400 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 400 }}
      transition={{ duration: 0.2 }}
      className="divide-y divide-stone-200 px-3 pb-12 pt-4 xl:mx-auto xl:w-[70rem]"
    >
      {menu.map((menuBali) => (
        <MenuItem menuBali={menuBali} key={menuBali.id} />
      ))}
    </motion.ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
