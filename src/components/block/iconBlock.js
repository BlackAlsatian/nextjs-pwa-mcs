import ParseHTML from '../../utils/parseHTML'
const IconBlock = ({
  // align,
  icon
}) => {
  const displayIcon = icon.replace(/default:/g, '')
  return (
    <div className={`flex items-center justify-center`}>
      {ParseHTML(displayIcon)}
    </div>
  )
}
export default IconBlock
