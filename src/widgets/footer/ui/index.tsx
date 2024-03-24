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
            <h1 className='font-bold text-[25px] text-[#101010]'>QPICK</h1>
          </Link>
        </div>

        <div className='w-full max-w-[427px] flex justify-between self-center'>
          <nav className='flex flex-col text-[17px] space-y-[10px]'>
            <Link
              className='hover:text-muted ease-in-out transition-colors'
              to='#'
            >
              Избранное
            </Link>
            <Link
              className='hover:text-muted ease-in-out transition-colors'
              to='/cart'
            >
              Корзина
            </Link>
            <Link
              className='hover:text-muted ease-in-out transition-colors'
              to='#'
            >
              Контакты
            </Link>
          </nav>
          <div className='text-[17px] flex flex-col justify-between'>
            <Link
              className='hover:text-muted ease-in-out transition-colors'
              to='#'
            >
              Условия сервиса
            </Link>
            <div className='text-[15px] space-x-[17px] flex font-medium pb-[7.5px]'>
              <WorldIcon className='text-[#838383]' />
              <Link
                to='#'
                className='font-bold text-accent hover:text-accent transition-colors ease-in-out'
              >
                Рус
              </Link>
              <Link
                to='#'
                className='hover:text-accent transition-colors ease-in-out'
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
              <VkIcon className='group-hover:text-muted ease-in-out transition-colors' />
            </Link>
            <Link
              to='https://t.me/neoflexcareers'
              target='_blank'
              className='group'
            >
              <TelegramIcon className='group-hover:text-muted ease-in-out transition-colors' />
            </Link>
            <Link to='https://wa.me/12345678' target='_blank' className='group'>
              <WhatsappIcon className='group-hover:text-muted ease-in-out transition-colors' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
