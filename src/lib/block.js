import blockMap from './blockMap'

function Block({ block }) {
  const { attributes, name, innerBlocks } = block

  const BlockComponent = blockMap[name]

  if (!BlockComponent) {
    return null
  }

  if (innerBlocks) {
    return <BlockComponent attributes={attributes} innerBlocks={innerBlocks} />
  }

  return <BlockComponent {...attributes} />
}

export default Block
