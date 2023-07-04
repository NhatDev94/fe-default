import { MouseEventHandler, ReactNode } from 'react'
import { Button } from 'antd'

interface ButtonPropsInterface {
  children: ReactNode,
  onClick?: MouseEventHandler,
  moreClass?: string,
  disabled?: boolean
}

const ButtonComponent = (props: ButtonPropsInterface) => {
  const { children, onClick, moreClass, disabled = false } = props
  return (
    <div className='button-component'>
      <Button
        disabled={disabled}
        className={`w-full h-8 outline-none border border-black/10 rounded-md ${moreClass}`}
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  )
}

export default ButtonComponent
