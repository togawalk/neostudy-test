import { useCart } from '@/app/context/cart'
import { MinusIcon } from '@/shared/ui/icons/minus'
import { PlusIcon } from '@/shared/ui/icons/plus'
import { TrashCan } from '@/shared/ui/icons/trash-can'
import { addBaseName } from '@/shared/utils'

export const CartItemsWidget = () => {
  const { cartItems, removeFromCart, changeQuantity } = useCart()
  return (
    <div className='max-w-[633px] w-full space-y-5'>
      {cartItems.map((item) => (
        <div className='bg-card w-full rounded-[30px] p-[18px] shadow flex gap-[24px]'>
          <div className='max-w-[150px]'>
            <img src={addBaseName(item.product.image)} alt='' />
            <div className='flex gap-x-[22px] justify-center mt-[20px] items-center'>
              <button
                className='size-[30px] bg-accent-muted rounded-full flex justify-center items-center'
                onClick={() => changeQuantity(item, -1)}
              >
                <MinusIcon className='text-white' />
              </button>
              <p className='font-semibold text-[17px]'>{item.quantity}</p>
              <button
                onClick={() => changeQuantity(item, 1)}
                className='size-[30px] bg-accent-muted rounded-full flex justify-center items-center'
              >
                <PlusIcon className='text-white' />
              </button>
            </div>
          </div>
          <div className='self-center space-y-[12px] flex-1 pb-[30px]'>
            <p className='text-[#1C1C27] text-[17px] font-medium'>
              {item.product.title}
            </p>
            <p className='text-muted text-[15px] font-semibold'>
              {item.product.price} ₽
            </p>
          </div>
          <div className='flex flex-col justify-between items-end'>
            <button onClick={() => removeFromCart(item)} className='group'>
              <TrashCan className='text-destructive group-hover:text-red-500 transition-colors ease-in-out' />
            </button>
            <p className='text-[#1C1C27] text-[15px] font-semibold'>
              {item.product.price} ₽
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
