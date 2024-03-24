import { useCart } from '@/app/context/cart'

export const PaymentSummaryBlock = () => {
  const { getCartTotalPrice } = useCart()
  return (
    <div className='w-full max-w-[350px] rounded-[30px] bg-card'>
      <div className='flex justify-between p-[22px]'>
        <p className='text-[15px] font-semibold uppercase'>итого</p>
        <p className='text-[15px] font-semibold'>₽ {getCartTotalPrice()}</p>
      </div>
      <button className='w-full rounded-[30px] bg-black px-[14px] py-[22px] text-[17px] font-semibold text-white transition-colors ease-in-out hover:bg-black/70'>
        Перейти к оформлению
      </button>
    </div>
  )
}
