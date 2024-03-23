import { data } from '@/data'
import { Catalog } from '@/widgets/catalog'

export const ProductsPage = () => {
  return (
    <div className='container px-[17px] space-y-[28px] mt-[28px]'>
      <Catalog data={data} />
    </div>
  )
}
