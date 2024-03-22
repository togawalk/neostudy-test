import { data } from "@/data";
import { ProductCard } from "@/shared/ui/product-card";

export const ProductsPage = () => {
  return (
    <div className="container px-[17px] space-y-[28px] mt-[28px]">
      {data.map((category) => (
        <>
          <h3 className="text-[#838383] font-semibold text-xl leading-6">
            {category.name}
          </h3>

          <div className="grid grid-cols-3 gap-[30px] mt-[20px]">
            {category.products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </>
      ))}
    </div>
  );
};
