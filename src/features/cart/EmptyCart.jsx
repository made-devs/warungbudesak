import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="px-3 py-3 font-outfit">
      <LinkButton to="/menu">&larr; Kembali ke Menu</LinkButton>

      <p className="mt-7 font-semibold">
        Keranjangmu masih kosong, yuk pesan sekarang!
      </p>
    </div>
  );
}

export default EmptyCart;
