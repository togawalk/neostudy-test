import { useCart } from '@/app/context/cart'
import { MinusIcon } from '@/shared/ui/icons/minus'
import { PlusIcon } from '@/shared/ui/icons/plus'

export const CartPage = () => {
  const { cartItems, removeFromCart, changeQuantity, getCartTotalPrice } =
    useCart()
  return (
    <main className='container mt-[29px] px-[17px]'>
      <h1 className='font-semibold text-[20px]'>Корзина</h1>
      <div className='flex justify-between mt-[13px] items-start'>
        <div className='max-w-[633px] w-full space-y-5'>
          {cartItems.map((item) => (
            <div className='bg-card w-full rounded-[30px] p-[18px] shadow flex gap-[24px]'>
              <div className='max-w-[150px]'>
                <img src={item.product.image} alt='' />
                <div className='flex gap-x-[22px] justify-center mt-[20px] items-center'>
                  <button
                    className='size-[30px] bg-[#FFCE7F] rounded-full flex justify-center items-center'
                    onClick={() => changeQuantity(item, -1)}
                  >
                    <MinusIcon className='text-white' />
                  </button>
                  <p className='font-semibold text-[17px]'>{item.quantity}</p>
                  <button
                    onClick={() => changeQuantity(item, 1)}
                    className='size-[30px] bg-[#FFCE7F] rounded-full flex justify-center items-center'
                  >
                    <PlusIcon className='text-white' />
                  </button>
                </div>
              </div>
              <div className='self-center space-y-[12px] flex-1'>
                <p className='text-[#1C1C27] text-[17px] font-medium'>
                  {item.product.title}
                </p>
                <p className='text-[#AAAAAA] text-[15px] font-semibold'>
                  {item.product.price} ₽
                </p>
              </div>
              <div className='flex flex-col justify-between items-end'>
                <button onClick={() => removeFromCart(item)}>Удалить</button>
                <p className='text-[#1C1C27] text-[15px] font-semibold'>
                  {item.product.price} ₽
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className='max-w-[350px] w-full rounded-[30px] bg-card'>
          <div className='flex justify-between p-[22px]'>
            <p className='text-[15px] font-semibold uppercase'>итого</p>
            <p className='text-[15px] font-semibold'>₽ {getCartTotalPrice()}</p>
          </div>
          <button className='bg-black text-white font-semibold text-[17px] rounded-[30px] px-[14px] py-[22px] w-full'>
            Перейти к оформлению
          </button>
        </div>
      </div>
    </main>
  )
}
