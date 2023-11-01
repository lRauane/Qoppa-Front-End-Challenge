
type ButtonProps= {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({children, ...props}: ButtonProps) => {
  const defaultClasses = 'flex items-center px-[14px] py-[10px] justify-center font-semibold border rounded-[8px] border-none bg-btn hover:bg-btn-30 text-white gap-1'

  return (
    <button {...props} className={`${defaultClasses} ${props.className}`}>
      {children}
    </button>
  )
}

export default Button;