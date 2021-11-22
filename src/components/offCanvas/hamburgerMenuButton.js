import { useContext } from 'react'
import { OffCanvasContext } from '../../store/offCanvasProvider'

const HamburgerMenuButton = () => {
  const { handleBurgerMenuClick, isOpen } = useContext(OffCanvasContext)
  const genericHamburgerLine = `h-1 w-10 my-1 rounded-full bg-accent transition ease-in-out transform duration-500 z-100`
  return (
    <button
      className='flex flex-col items-center justify-center w-16 z-100 h-14 group lg:hidden'
      onClick={() => handleBurgerMenuClick(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? 'rotate-45 translate-y-3 opacity-70 group-hover:opacity-100 bg-black'
            : 'opacity-100 group-hover:opacity-70'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? 'opacity-0 bg-black' : 'opacity-100 group-hover:opacity-70'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? '-rotate-45 -translate-y-3 opacity-70 group-hover:opacity-100 bg-black'
            : 'opacity-100 group-hover:opacity-70'
        }`}
      />
    </button>
  )
}

export default HamburgerMenuButton
