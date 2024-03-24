import { Category } from '@/shared/types'
import { ProductCard } from '@/shared/ui/product-card'

export const Catalog = ({ data }: { data: Category[] }) =>
  data.map((category) => (
    <>
      <h3 className='text-xl font-semibold leading-6 text-[#838383]'>
        {category.name}
      </h3>

      <div className='mt-[20px] grid grid-cols-3 gap-[30px]'>
        {category.products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  ))
