import dynamic from 'next/dynamic'

// const BlockQuote = dynamic(() =>
// 	import('@/components/blocks/Gutenberg/BlockQuote')
// )

const ButtonBlock = dynamic(() => import('../components/block/buttonBlock'))
const ColumnBlock = dynamic(() => import('../components/block/ColumnBlock'))
const ColumnsBlock = dynamic(() => import('../components/block/ColumnsBlock'))
const CoverBlock = dynamic(() => import('../components/block/coverBlock'))
const HeadingBlock = dynamic(() => import('../components/block/headingBlock'))
const ImageBlock = dynamic(() => import('../components/block/imageBlock'))
const ListBlock = dynamic(() => import('../components/block/listBlock'))
const ParagraphBlock = dynamic(() =>
  import('../components/block/paragraphBlock')
)
const EmbedBlock = dynamic(() => import('../components/block/embedBlock'))
const SeparatorBlock = dynamic(() =>
  import('../components/block/separatorBlock')
)
const QuoteBlock = dynamic(() => import('../components/block/quoteBlock'))
const IconBlock = dynamic(() => import('../components/block/iconBlock'))

const blockMap = {
  'core/heading': HeadingBlock,
  'core/paragraph': ParagraphBlock,
  'core/embed': EmbedBlock,
  'core/separator': SeparatorBlock,
  'core/quote': QuoteBlock,
  'core/list': ListBlock,
  'core/image': ImageBlock,
  'core/button': ButtonBlock,
  'core/column': ColumnBlock,
  'core/columns': ColumnsBlock,
  'core/cover': CoverBlock,
  'outermost/icon-block': IconBlock
  // 'core/pullquote': PullquoteBlock,
  // 'core/code': CodeBlock,
  // 'core/preformatted': PreformattedBlock,
  // 'core/embed': EmbedBlock,
  // 'core/media-text': MediaTextBlock,
  // 'core/buttons': ButtonsBlock,
  // 'core/gallery': GalleryBlock,
  // 'core/table': TableBlock,
  // 'core/spacer': SpacerBlock,
}

export default blockMap
