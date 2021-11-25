// ## Fragments
export const HeadingBlockAttributes = `
    fragment HeadingBlockAttributes on CoreHeadingBlockAttributes {
        align
        anchor
        backgroundColor
        className
        content
        fontSize
        level
        style
        textAlign
        textColor
    }
`

export const ParagraphBlockAttributes = `
    fragment ParagraphBlockAttributes on CoreParagraphBlockAttributes {
        align
        anchor
        backgroundColor
        className
        content
        dropCap
        style
        textColor
    }
`

export const ImageBlockAttributes = `
    fragment ImageBlockAttributes on CoreImageBlockAttributes {
        align
        alt
        caption
        className
        height
        href
        linkDestination
        linkTarget
        rel
        title
        url
        width
        sizeSlug
    }
`

export const ListBlockAttributes = `
    fragment ListBlockAttributes on CoreListBlockAttributes {
        anchor
        backgroundColor
        className
        fontSize
        ordered
        start
        textColor
        type
        values
    }
`

export const QuoteBlockAttributes = `
    fragment QuoteBlockAttributes on CoreQuoteBlockAttributes {
        align
        anchor
        citation
        className
        value
    }
`

export const ButtonBlockAttributes = `
    fragment ButtonBlockAttributes on CoreButtonBlockAttributes {
        align
        anchor
        backgroundColor
        className
        fontSize
        linkTarget
        rel
        text
        textColor
        title
        url
        width
    }
`

export const CoverBlockAttributes = `
    fragment CoverBlockAttributes on CoreCoverBlockAttributes {
        id
        align
        anchor
        backgroundType
        className
        contentPosition
        hasParallax
        minHeight
        minHeightUnit
        overlayColor
        url
    }
`

export const ColumnsBlockAttributes = `
    fragment ColumnsBlockAttributes on CoreColumnsBlockAttributes {
        align
        anchor
        backgroundColor
        className
        gradient
        style
        textColor
        verticalAlignment
    }
`

export const ColumnBlockAttributes = `
    fragment ColumnBlockAttributes on CoreColumnBlockAttributes {
        anchor
        backgroundColor
        className
        gradient
        style
        textColor
        verticalAlignment
        percentageWidth: width
        stringWidth: width
    }
`

// ## blocks
export const HeadingBlock = `
    ... on CoreHeadingBlock {
        name
        attributes {
            ... on CoreHeadingBlockAttributes {
                ...HeadingBlockAttributes
            }
        }
    }
`

export const ParagraphBlock = `
    ... on CoreParagraphBlock {
        name
        attributes {
            ... on CoreParagraphBlockAttributes {
                ...ParagraphBlockAttributes
            }
        }
    }
`

export const ImageBlock = `
    ... on CoreImageBlock {
        name
        attributes {
            ... on CoreImageBlockAttributes {
                ...ImageBlockAttributes
            }
        }
    }
`

export const ListBlock = `
    ... on CoreListBlock {
        name
            attributes {
                ...ListBlockAttributes
        }
    }
`

export const QuoteBlock = `
    ... on CoreQuoteBlock {
        name
        attributes {
            ... on CoreQuoteBlockAttributes {
                ...QuoteBlockAttributes
            }
        }
    }
`

export const ButtonBlock = `
    ... on CoreButtonBlock {
        name
        attributes {
            ... on CoreButtonBlockAttributes {
                ...ButtonBlockAttributes
            }
        }
    }
`

export const CoverBlock = `
    ... on CoreCoverBlock {
        name
        attributes {
        ... on CoreCoverBlockAttributes {
            ...CoverBlockAttributes
        }
        }
        innerBlocks {
            ${HeadingBlock}
            ${ParagraphBlock}
        }
    }
`
export const ColumnBlock = `
    ... on CoreColumnBlock {
        name
        attributes {
            ... on CoreColumnBlockAttributes {
                ...ColumnBlockAttributes
            }
        }
        innerBlocks {
            ${HeadingBlock}
            ${ParagraphBlock}
            ${ImageBlock}
            ${ListBlock}
            ${QuoteBlock}
            ${ButtonBlock}
        }
    }
`

export const ColumnsBlock = `
    ... on CoreColumnsBlock {
        name
        attributes {
            ... on CoreColumnsBlockAttributes {
                ...ColumnsBlockAttributes
            }
        }
        innerBlocks {
            ${ColumnBlock}
        }
    }
`

// all blocks query
export const BlocksField = `
  fragment BlocksField on Page {
    blocks {
      name
      ${HeadingBlock}
      ${ParagraphBlock}
      ${ImageBlock}
      ${ListBlock}
      ${QuoteBlock}
      ${ButtonBlock}
      ${CoverBlock}
      ${ColumnsBlock}
      ${ColumnBlock}
    }
  }
  ${HeadingBlockAttributes}
  ${ParagraphBlockAttributes}
  ${ImageBlockAttributes}
  ${ListBlockAttributes}
  ${QuoteBlockAttributes}
  ${ButtonBlockAttributes}
  ${CoverBlockAttributes}
  ${ColumnsBlockAttributes}
  ${ColumnBlockAttributes}
`
