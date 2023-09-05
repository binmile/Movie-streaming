import { FC } from "react"

export const ComponentRowScroll:FC<ProviderType> = ({children}) => {
  return (
    <div className="flex overflow-x-scroll no-scrollbar w-[100%] gap-5">
        {children}
    </div>
  )
}
