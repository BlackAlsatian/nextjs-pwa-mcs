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

export const EmbedBlockAttributes = `
    fragment EmbedBlockAttributes on CoreEmbedBlockAttributes {
        align
        caption
        allowResponsive
        previewable
        providerNameSlug
        responsive
        type
        url
    }
`

export const SeparatorBlockAttributes = `
    fragment SeparatorBlockAttributes on CoreSeparatorBlockAttributes {
        align
        anchor
        className
        color
        customColor
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

export const GroupBlockAttributes = `
    fragment GroupBlockAttributes on CoreGroupBlockAttributes {
        align
        anchor
        backgroundColor
        borderColor
        className
        gradient
        layout
        style
        tagName
        textColor
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
export const EmbedBlock = `
    ... on CoreEmbedBlock {
        name
        attributes {
            ... on CoreEmbedBlockAttributes {
                ...EmbedBlockAttributes
            }
        }
    }
`
export const SeparatorBlock = `
    ... on CoreSeparatorBlock {
        name
        attributes {
            ... on CoreSeparatorBlockAttributes {
                ...SeparatorBlockAttributes
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

export const IconBlock = `
    ... on OutermostIconBlock {
        name
        attributes {
            align
            icon
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
            ${EmbedBlock}
            ${SeparatorBlock}
            ${ImageBlock}
            ${ListBlock}
            ${QuoteBlock}
            ${ButtonBlock}
            ${IconBlock}
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

export const GroupBlock = `
    ... on CoreGroupBlock {
        name
        attributes {
            ... on CoreGroupBlockAttributes {
                ...GroupBlockAttributes
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
      ${EmbedBlock}
      ${SeparatorBlock}
      ${ImageBlock}
      ${ListBlock}
      ${QuoteBlock}
      ${ButtonBlock}
      ${IconBlock}
      ${CoverBlock}
      ${ColumnsBlock}
      ${ColumnBlock}
      ${GroupBlock}
    }
  }
  ${HeadingBlockAttributes}
  ${ParagraphBlockAttributes}
  ${EmbedBlockAttributes}
  ${SeparatorBlockAttributes}
  ${ImageBlockAttributes}
  ${ListBlockAttributes}
  ${QuoteBlockAttributes}
  ${ButtonBlockAttributes}
  ${CoverBlockAttributes}
  ${ColumnsBlockAttributes}
  ${ColumnBlockAttributes}
  ${GroupBlockAttributes}
`
