import { Link } from 'react-router-dom';
function CartOverview() {
  return (
    <div>
      <p>
        <span>2 Ayam Betutu(1 Ekor)</span>
        <span>Rp 240.000,-</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;

