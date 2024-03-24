import { TelegramIcon } from '@/shared/ui/icons/telegram'
import { VkIcon } from '@/shared/ui/icons/vk'
import { WhatsappIcon } from '@/shared/ui/icons/whatsapp'
import { WorldIcon } from '@/shared/ui/icons/world'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='container mt-[20px] px-[17px]'>
      <div className='flex min-h-[149px] justify-between rounded-t-[30px] bg-white p-[29px] shadow'>
        <div>
          <Link to='/'>
            <h1 className='text-[25px] font-bold text-[#101010]'>QPICK</h1>
          </Link>
        </div>

        <div className='flex w-full max-w-[427px] justify-between self-center'>
          <nav className='flex flex-col space-y-[10px] text-[17px]'>
            <Link
              className='transition-colors ease-in-out hover:text-muted'
              to='#'
            >
              Избранное
            </Link>
            <Link
              className='transition-colors ease-in-out hover:text-muted'
              to='/cart'
            >
              Корзина
            </Link>
            <Link
              className='transition-colors ease-in-out hover:text-muted'
              to='#'
            >
              Контакты
            </Link>
          </nav>
          <div className='flex flex-col justify-between text-[17px]'>
            <Link
              className='transition-colors ease-in-out hover:text-muted'
              to='#'
            >
              Условия сервиса
            </Link>
            <div className='flex space-x-[17px] pb-[7.5px] text-[15px] font-medium'>
              <WorldIcon className='text-[#838383]' />
              <Link
                to='#'
                className='font-bold text-accent transition-colors ease-in-out hover:text-accent'
              >
                Рус
              </Link>
              <Link
                to='#'
                className='transition-colors ease-in-out hover:text-accent'
              >
                Eng
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className='flex items-center gap-[17.9px]'>
            <Link
              to='https://vk.com/neoflex_ru'
              target='_blank'
              className='group'
            >
              <VkIcon className='transition-colors ease-in-out group-hover:text-muted' />
            </Link>
            <Link
              to='https://t.me/neoflexcareers'
              target='_blank'
              className='group'
            >
              <TelegramIcon className='transition-colors ease-in-out group-hover:text-muted' />
            </Link>
            <Link to='https://wa.me/12345678' target='_blank' className='group'>
              <WhatsappIcon className='transition-colors ease-in-out group-hover:text-muted' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
