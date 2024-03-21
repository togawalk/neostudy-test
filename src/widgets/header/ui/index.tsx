import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-[1135px] mx-auto">
      <div className="h-[60px] flex justify-between items-center">
        <div>
          <Link to="/">
            <h1 className="font-bold">QPICK</h1>
          </Link>
        </div>
        <div>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </header>
  );
};
