import { Product } from '@/shared/types'
import { StarIcon } from '../../icons/star'
import { useCart } from '@/app/context/cart'
import { addBaseName } from '@/shared/utils'

export const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart()
  return (
    <div className='rounded-[30px] bg-card px-5 pb-[25px] shadow'>
      <div className='flex h-[310px] items-center justify-center py-[15px]'>
        <img
          src={addBaseName(product.image)}
          alt=''
          className='max-w-[219px]'
        />
      </div>
      <div className='flex justify-between'>
        <div>
          <h4 className='text-[17px] font-semibold'>{product.title}</h4>
          <div className='mt-[28px] flex text-[17px] font-semibold text-[#838383]'>
            <StarIcon className='mr-[10px] h-[22px] w-[23px] text-accent-muted' />{' '}
            {product.rate}
          </div>
        </div>

        <div className='flex flex-col justify-between'>
          <div className='flex flex-col items-center font-semibold'>
            {product.priceWithDiscount ? (
              <>
                <p className='text-[17px] text-accent'>
                  {product.priceWithDiscount} ₽
                </p>
                <p className='text-[13px] text-accent-muted line-through'>
                  {product.price} ₽
                </p>
              </>
            ) : (
              <p className='text-[17px] text-accent'>{product.price} ₽</p>
            )}
          </div>
          <div>
            <button
              onClick={() => addToCart({ product, quantity: 1 })}
              className='text-[17px] font-semibold text-black'
            >
              Купить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
