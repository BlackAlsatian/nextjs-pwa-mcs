const CloseButton = ({
  color = '#000',
  width = '32',
  height = '32',
  stroke = '1'
}) => {
  return (
    <svg
      fill='none'
      width={width}
      height={height}
      stroke={`${color}`}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={stroke}
        d='M6 18L18 6M6 6l12 12'
      ></path>
    </svg>
  )
}

export default CloseButton
