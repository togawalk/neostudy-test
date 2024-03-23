import { useCart } from '@/app/context/cart'

export const PaymentSummaryBlock = () => {
  const { getCartTotalPrice } = useCart()
  return (
    <div className='max-w-[350px] w-full rounded-[30px] bg-card'>
      <div className='flex justify-between p-[22px]'>
        <p className='text-[15px] font-semibold uppercase'>итого</p>
        <p className='text-[15px] font-semibold'>₽ {getCartTotalPrice()}</p>
      </div>
      <button className='bg-black text-white font-semibold text-[17px] rounded-[30px] px-[14px] py-[22px] w-full'>
        Перейти к оформлению
      </button>
    </div>
  )
}
