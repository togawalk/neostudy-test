import { CartItemsWidget } from '@/widgets/cart-items-widget'
import { PaymentSummaryBlock } from '@/widgets/payment-summary-block'

export const CartPage = () => {
  return (
    <main className='container mt-[29px] px-[17px]'>
      <h1 className='font-semibold text-[20px]'>Корзина</h1>
      <div className='flex justify-between mt-[13px] items-start'>
        <CartItemsWidget />
        <PaymentSummaryBlock />
      </div>
    </main>
  )
}
