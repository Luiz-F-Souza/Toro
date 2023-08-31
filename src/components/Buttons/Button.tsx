interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: 'solid' | 'outlined'
}

export const Button: React.FC<Props> = ({
  children,
  variant = 'solid',
  className = "",
  ...props
}) => {
  return (
    <button
      {...props}
      className={`
        ${className}  
        ${ 
          variant === "solid" ? 
            "text-neutral-lightest bg-brand-primary" :
            "text-brand-primary border-brand-primary border-1 hover:text-neutral-lightest" 
          }
        w-[9.375rem] 
        text-sm font-semibold
        rounded 
        px-4 py-3
        hover:bg-brand-primary-dark 
        active:bg-brand-primary
        transition-colors duration-200
      `}
    >
      {children}
    </button>
  );
};
