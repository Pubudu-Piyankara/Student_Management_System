import React from 'react'

type Props = {onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void, text: string}

const Button = ({onClick, text }: Props) => {
  return (
    <div><div>
    <button onClick={onClick} className="bg-[#4743E0] text-white px-8 py-2 rounded-full   ">{text}</button>
</div>
</div>
  )
}

export default Button