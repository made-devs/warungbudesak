/* eslint-disable react-refresh/only-export-components */
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import { useSelector } from 'react-redux';
import { clearCart, getCart, getTotalPrice } from '../cart/CartSlice';
import EmptyCart from '../cart/EmptyCart';
import store from '../../store';
import { formatCurrency } from '../../utils/helpers';
import { useState } from 'react';
import CartReview from '../cart/CartReview';
import { motion } from 'framer-motion';

const isValidPhone = (str) => {
  // Regex untuk memeriksa format nomor telepon dengan awalan 08 dan panjang 10-12 digit
  const formatValid = /^08\d{8,10}$/.test(str);

  return formatValid;
};

function CreateOrder() {
  const username = useSelector((state) => state.user.username);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const formErrors = useActionData();

  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.15 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <motion.div
      initial={{ opacity: 0, x: -400 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 400 }}
      transition={{ duration: 0.3 }}
      className="px-4 py-0 font-outfit xl:mx-auto xl:w-[70rem]"
    >
      <CartReview />
      <div className="mb-8 flex justify-between divide-stone-200 border-b px-1 pb-4 xl:w-[70rem]">
        <div className="h-[2.8rem]">
          <p>Total Harga </p>
          {withPriority ? (
            <p className="text-xs">
              + Prioritas: {formatCurrency(priorityPrice)}
            </p>
          ) : null}
        </div>
        <p className="w-28 text-end text-sm font-bold">
          {formatCurrency(totalPrice)}
        </p>
      </div>
      <h2 className="mb-8 font-outfit text-xl font-semibold">
        Isi data untuk mulai pesanan
      </h2>

      {/* <Form method='POST' action='/order/new'> */}
      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Nama</label>
          <input
            type="text"
            defaultValue={username}
            name="customer"
            required
            className="input grow"
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Nomor telepon</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formErrors?.phone && (
              <p className="mt-2 rounded-full bg-red-100 p-2 text-xs text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Alamat</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="mb-5 flex items-center gap-3 px-6 text-sm xl:px-0">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-5 w-5 accent-orange-400 focus:outline-none focus:ring focus:ring-orange-400 focus:ring-offset-1"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Jadikan pesanan prioritas? (+15% dari total harga)
          </label>
        </div>
        <p className="mx-auto mb-2 text-center text-xs">
          Pembayaran hanya tersedia Cash on Delivery untuk saat ini
        </p>
        <div className="mb-24 flex">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button disabled={isSubmitting} className="relative z-10 mx-auto">
            <span className="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded bg-black"></span>
            <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-orange-400 px-3 py-1 text-base font-bold text-black transition-all duration-300 hover:bg-orange-300 active:left-1 active:top-1">
              {isSubmitting ? 'Memuat pesanan...' : `Pesan sekarang`}
            </span>
          </button>
        </div>
      </Form>
    </motion.div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const cart = JSON.parse(data.cart);
  const totalCartPrice = cart.reduce((acc, curr) => acc + curr.totalPrice, 0);
  const priorityPrice = data.priority === 'true' ? totalCartPrice * 0.2 : 0;

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
    priorityPrice,
    orderPrice: totalCartPrice,
  };

  const errors = {};
  const phoneNumber = order.phone;
  if (!isValidPhone(order.phone))
    errors.phone =
      'Tolong masukkan nomor telepon yang tepat agar kami bisa menghubungi kamu';

  if (phoneNumber.length < 10 || phoneNumber.length > 12) {
    errors.phone =
      'Nomor telepon harus memiliki panjang antara 10 hingga 12 karakter';
  }

  if (Object.keys(errors).length > 0) return errors;

  // If everything is okay, create new order and redirect
  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
