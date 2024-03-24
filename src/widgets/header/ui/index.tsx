import { Badge } from '@/shared/ui/badge'
import { CartIcon } from '@/shared/ui/icons/cart'
import { HeartIcon } from '@/shared/ui/icons/heart'
import { Link } from 'react-router-dom'
import { useCart } from '@/app/context/cart'

export const Header = () => {
  const { getCartLength } = useCart()

  return (
    <header className='w-[1135px] mx-auto'>
      <div className='h-[60px] flex justify-between items-center'>
        <div>
          <Link to='/'>
            <h1 className='font-bold text-[25px] text-[#101010] hover:text-[#101010]/60 transition-colors ease-in-out'>
              QPICK
            </h1>
          </Link>
        </div>
        <div className='flex items-center space-x-4'>
          <Link to='/' className='p-2 group'>
            <Badge value={3}>
              <HeartIcon className='text-[#838383] group-hover:text-accent transition-colors ease-in-out' />
            </Badge>
          </Link>
          <Link to='/cart' className='p-2 group'>
            <Badge value={getCartLength()}>
              <CartIcon className='text-[#838383] group-hover:text-accent transition-colors ease-in-out' />
            </Badge>
          </Link>
        </div>
      </div>
    </header>
  )
}
