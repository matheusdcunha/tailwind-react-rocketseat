type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean
}

export function Button({children, isLoading, type = "button", ...rest}:Props){
  return(
    <button
    disabled={isLoading}
    className="h-12 flex items-center justify-center bg-green-600 rounded-lg text-white cursor-pointer hover:bg-green-700 transition ease-initial disabled:opacity-50 disabled:cursor-progress"
    type={type} 
    {...rest}
    >
      {children}
    </button>
  )
}