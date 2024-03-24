import { CartItemsWidget } from '@/widgets/cart-items-widget'
import { PaymentSummaryBlock } from '@/widgets/payment-summary-block'

export const CartPage = () => {
  return (
    <main className='container mt-[29px] px-[17px]'>
      <h1 className='text-[20px] font-semibold'>Корзина</h1>
      <div className='mt-[13px] flex items-start justify-between'>
        <CartItemsWidget />
        <PaymentSummaryBlock />
      </div>
    </main>
  )
}
