import { CartIcon } from "@/shared/ui/icons/cart";
import { HeartIcon } from "@/shared/ui/icons/heart";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-[1135px] mx-auto">
      <div className="h-[60px] flex justify-between items-center">
        <div>
          <Link to="/">
            <h1 className="font-bold text-[25px] text-[#101010] leading-[1.2]">QPICK</h1>
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/cart" className="text-[#838383]">
            <HeartIcon />
          </Link>
          <Link to="/cart">
            <CartIcon className="text-[#838383]"/>
          </Link>
        </div>
      </div>
    </header>
  );
};
