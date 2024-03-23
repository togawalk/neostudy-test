import { Category } from '@/shared/types'
import { ProductCard } from '@/shared/ui/product-card'

export const Catalog = ({ data }: { data: Category[] }) =>
  data.map((category) => (
    <>
      <h3 className='text-[#838383] font-semibold text-xl leading-6'>
        {category.name}
      </h3>

      <div className='grid grid-cols-3 gap-[30px] mt-[20px]'>
        {category.products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  ))
