import { MouseEventHandler, ReactNode } from 'react'
import { Button } from 'antd'

interface ButtonPropsInterface {
  children: ReactNode,
  onClick?: MouseEventHandler,
  moreClass?: string
}

const ButtonComponent = (props: ButtonPropsInterface) => {
  const { children, onClick, moreClass } = props
  return (
    <Button
      className={`w-full h-8 outline-none border border-black/10 rounded-md ${moreClass}`}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default ButtonComponent
