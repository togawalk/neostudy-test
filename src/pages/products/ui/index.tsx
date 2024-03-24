import { data } from '@/data'
import { Catalog } from '@/widgets/catalog'

export const ProductsPage = () => {
  return (
    <div className='container mt-[28px] space-y-[28px] px-[17px]'>
      <Catalog data={data} />
    </div>
  )
}
