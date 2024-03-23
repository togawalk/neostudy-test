import { TelegramIcon } from '@/shared/ui/icons/telegram'
import { VkIcon } from '@/shared/ui/icons/vk'
import { WhatsappIcon } from '@/shared/ui/icons/whatsapp'
import { WorldIcon } from '@/shared/ui/icons/world'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='container px-[17px] mt-[20px]'>
      <div className='shadow bg-white p-[29px] rounded-t-[30px] flex justify-between min-h-[149px]'>
        <div>
          <Link to='/'>
            <h1 className='font-bold text-[25px] text-[#101010] leading-[1.2]'>
              QPICK
            </h1>
          </Link>
        </div>

        <div className='w-full max-w-[427px] leading-[1.2] flex justify-between self-center'>
          <nav className='flex flex-col text-[17px] space-y-[10px]'>
            <Link to='/'>Избранное</Link>
            <Link to='/'>Корзина</Link>
            <Link to='/'>Контакты</Link>
          </nav>
          <div className='text-[17px] flex flex-col justify-between'>
            <Link to='/'>Условия сервиса</Link>
            <div className='text-[15px] space-x-[17px] flex font-medium pb-[7.5px]'>
              <WorldIcon className='text-[#838383]' />
              <Link to='/' className='font-bold text-[#FFA542]'>
                Рус
              </Link>
              <Link to='/'>Eng</Link>
            </div>
          </div>
        </div>

        <div>
          <div className='flex items-center gap-[17.9px]'>
            <Link to='/'>
              <VkIcon />
            </Link>
            <Link to='/'>
              <TelegramIcon />
            </Link>
            <Link to='/'>
              <WhatsappIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
