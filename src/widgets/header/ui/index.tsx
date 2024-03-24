import { Badge } from '@/shared/ui/badge'
import { CartIcon } from '@/shared/ui/icons/cart'
import { HeartIcon } from '@/shared/ui/icons/heart'
import { Link } from 'react-router-dom'
import { useCart } from '@/app/context/cart'

export const Header = () => {
  const { getCartLength } = useCart()

  return (
    <header className='mx-auto w-[1135px]'>
      <div className='flex h-[60px] items-center justify-between'>
        <div>
          <Link to='/'>
            <h1 className='text-[25px] font-bold text-[#101010] transition-colors ease-in-out hover:text-[#101010]/60'>
              QPICK
            </h1>
          </Link>
        </div>
        <div className='flex items-center space-x-4'>
          <Link to='/' className='group p-2'>
            <Badge value={3}>
              <HeartIcon className='text-[#838383] transition-colors ease-in-out group-hover:text-accent' />
            </Badge>
          </Link>
          <Link to='/cart' className='group p-2'>
            <Badge value={getCartLength()}>
              <CartIcon className='text-[#838383] transition-colors ease-in-out group-hover:text-accent' />
            </Badge>
          </Link>
        </div>
      </div>
    </header>
  )
}
