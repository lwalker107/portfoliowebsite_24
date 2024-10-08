import React from 'react'

const LitUpButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string; icon: React.ReactNode, position: string;
    handleClick?: () => void; otherClasses?: string;
}) => {
  return (
    <button className="p-[1px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className={`px-8 py-2  bg-transparent rounded-[10px]  relative group transition duration-200 text-white hover:bg-transparent ${otherClasses}`}>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </div>
    </button>
  )
}

export default LitUpButton