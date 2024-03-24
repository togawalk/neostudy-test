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
      <span className='absolute end-0 top-0 inline-flex size-[17.4px] -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-[#FFA542]'>
        <p className='text-[15px] font-medium text-white'>{value}</p>
      </span>
    </div>
  )
}
