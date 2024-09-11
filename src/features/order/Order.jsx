// Test ID: IIDSAT

import { useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import OrderItem from './OrderItem';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import { motion } from 'framer-motion';

const Order = function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const { id, priority, priorityPrice, orderPrice, estimatedDelivery, cart } =
    order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  console.log(cart);

  return (
    <motion.div
      initial={{ opacity: 0, x: -400 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 400 }}
      transition={{ duration: 0.3 }}
      className="space-y-8 px-6 py-6 font-outfit"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Pesanan #{id}</h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-orange-300 px-3 py-1 text-sm font-semibold">
              Prioritas
            </span>
          )}
          {deliveryIn >= 0 ? (
            <span className="rounded-full bg-green-300 px-3 py-1 text-sm font-semibold">
              Diproses
            </span>
          ) : (
            <span className="rounded-full bg-green-300 px-3 py-1 text-sm font-semibold">
              Sudah dikirim
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-5 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Selesai sekitar ${calcMinutesLeft(estimatedDelivery)} menit lagi 😃`
            : 'Pesanan sudah selesai'}
        </p>
        <p className="text-xs text-stone-500">
          (Perkiraan tiba: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((item) => (
          <OrderItem item={item} key={item.menuId} />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Harga Pesanan: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Biaya Prioritas: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          Total Biaya (COD): {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </motion.div>
  );
};

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
