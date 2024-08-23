import { ButtonHTMLAttributes, FC } from "react";
import {VariantProps, cva} from 'class-variance-authority';


const buttonVariants = cva(
    'active:scale-95 inline-flex item-center justify-center rounded-md text-sm font-medium transition-colors focus:outline focus:ring-2 focus:ringe-slate-400 focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800',
    {
        variants:{
            variant:{
                default: "flex px-4 items-center py-2 font-medium text-sm text-white bg-green-500 hover:bg-green-600 rounded-sm",
                outline:"flex px-4 items-center py-2 font-medium text-sm border border-green-500 text-green-500 hover:bg-gray-100 rounded-lg"
            },
            size:{
                default:"h-10 py-2 px-4",
                sm:"h-9 px -2 rounded-md"
            }
        },
        defaultVariants: {
          variant: "default",
          size: "default"
        },
    }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,
VariantProps<typeof buttonVariants> {}

const Button : FC<ButtonProps> =  ({className, size, variant, ...props}) => {
    return <button className={buttonVariants({variant, size, className})} {...props} />
}

export default Button