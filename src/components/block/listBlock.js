import ParseHTML from '../../utils/parseHTML'

const ListBlock = ({
  anchor,
  backgroundColor,
  className,
  fontSize,
  ordered,
  start,
  textColor,
  type,
  values
}) => {
  return <ul>{ParseHTML(values)}</ul>
}
export default ListBlock
