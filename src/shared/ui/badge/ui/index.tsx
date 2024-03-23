export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
}

export const Badge = ({ children, value }: BadgeProps) => {
  if (!value) {
    return children
  }

  return (
    <div className='relative'>
      {children}
      <span className='absolute top-0 end-0 inline-flex items-center size-[17.4px] rounded-full transform -translate-y-1/2 translate-x-1/2 bg-[#FFA542] justify-center'>
        <p className='text-[15px] font-medium text-white'>
          {value}
        </p>
      </span>
    </div>
  )
}
