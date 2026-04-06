import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    
    // Base styles
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    // Variant styles
    const variants = {
      primary: "bg-primary-700 text-white hover:bg-primary-800 shadow-md",
      secondary: "bg-primary-100 text-primary-900 hover:bg-primary-200",
      outline: "border border-primary-200 bg-transparent hover:bg-primary-50 text-foreground",
      ghost: "hover:bg-primary-50 hover:text-primary-900 text-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    }
    
    // Size styles
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    }
    
    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size === 'md' ? 'default' : size]} ${className}`

    return (
      <button
        className={combinedClassName}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
