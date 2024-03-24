import { useCart } from '@/app/context/cart'
import { MinusIcon } from '@/shared/ui/icons/minus'
import { PlusIcon } from '@/shared/ui/icons/plus'
import { TrashCan } from '@/shared/ui/icons/trash-can'
import { addBaseName } from '@/shared/utils'

export const CartItemsWidget = () => {
  const { cartItems, removeFromCart, changeQuantity } = useCart()
  return (
    <div className='w-full max-w-[633px] space-y-5'>
      {cartItems.map((item) => (
        <div className='flex w-full gap-[24px] rounded-[30px] bg-card p-[18px] shadow'>
          <div className='max-w-[150px]'>
            <img src={addBaseName(item.product.image)} alt='' />
            <div className='mt-[20px] flex items-center justify-center gap-x-[22px]'>
              <button
                className='flex size-[30px] items-center justify-center rounded-full bg-accent-muted'
                onClick={() => changeQuantity(item, -1)}
              >
                <MinusIcon className='text-white' />
              </button>
              <p className='text-[17px] font-semibold'>{item.quantity}</p>
              <button
                onClick={() => changeQuantity(item, 1)}
                className='flex size-[30px] items-center justify-center rounded-full bg-accent-muted'
              >
                <PlusIcon className='text-white' />
              </button>
            </div>
          </div>
          <div className='flex-1 space-y-[12px] self-center pb-[30px]'>
            <p className='text-[17px] font-medium text-[#1C1C27]'>
              {item.product.title}
            </p>
            <p className='text-[15px] font-semibold text-muted'>
              {item.product.price} ₽
            </p>
          </div>
          <div className='flex flex-col items-end justify-between'>
            <button onClick={() => removeFromCart(item)} className='group'>
              <TrashCan className='text-destructive transition-colors ease-in-out group-hover:text-red-500' />
            </button>
            <p className='text-[15px] font-semibold text-[#1C1C27]'>
              {item.product.price} ₽
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
