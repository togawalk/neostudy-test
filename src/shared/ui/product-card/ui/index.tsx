import { Product } from '@/shared/types'
import { StarIcon } from '../../icons/star'
import { useCart } from '@/app/context/cart'
import { addBaseName } from '@/shared/utils'

export const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart()
  return (
    <div className='bg-card rounded-[30px] shadow px-5 pb-[25px]'>
      <div className='flex justify-center py-[15px] h-[310px] items-center'>
        <img src={addBaseName(product.image)} alt='' className='max-w-[219px]' />
      </div>
      <div className='flex justify-between'>
        <div>
          <h4 className='font-semibold text-[17px] leading-[1.2]'>
            {product.title}
          </h4>
          <div className='text-[#838383] font-semibold flex mt-[28px] leading-[1.2] text-[17px]'>
            <StarIcon className='text-accent-muted mr-[10px] h-[22px] w-[23px]' />{' '}
            {product.rate}
          </div>
        </div>

        <div className='flex flex-col justify-between'>
          <div className='font-semibold items-center flex flex-col'>
            {product.priceWithDiscount ? (
              <>
                <p className='text-accent text-[17px] leading-[1.2]'>
                  {product.priceWithDiscount} ₽
                </p>
                <p className='text-accent-muted text-[13px] line-through'>
                  {product.price} ₽
                </p>
              </>
            ) : (
              <p className='text-accent text-[17px] leading-[1.2]'>
                {product.price} ₽
              </p>
            )}
          </div>
          <div>
            <button
              onClick={() => addToCart({ product, quantity: 1 })}
              className='font-semibold leading-[1.2] text-black'
            >
              Купить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
