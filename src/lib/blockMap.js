import ButtonBlock from '../components/block/buttonBlock'
import ColumnBlock from '../components/block/ColumnBlock'
import ColumnsBlock from '../components/block/ColumnsBlock'
import CoverBlock from '../components/block/coverBlock'
import HeadingBlock from '../components/block/headingBlock'
import ImageBlock from '../components/block/imageBlock'
import ListBlock from '../components/block/listBlock'
import ParagraphBlock from '../components/block/paragraphBlock'
import QuoteBlock from '../components/block/quoteBlock'

const blockMap = {
  'core/heading': HeadingBlock,
  'core/paragraph': ParagraphBlock,
  'core/quote': QuoteBlock,
  'core/list': ListBlock,
  'core/image': ImageBlock,
  'core/button': ButtonBlock,
  'core/column': ColumnBlock,
  'core/columns': ColumnsBlock,
  'core/cover': CoverBlock
  // 'core/pullquote': PullquoteBlock,
  // 'core/code': CodeBlock,
  // 'core/preformatted': PreformattedBlock,
  // 'core/embed': EmbedBlock,
  // 'core/media-text': MediaTextBlock,
  // 'core/buttons': ButtonsBlock,
  // 'core/gallery': GalleryBlock,
  // 'core/table': TableBlock,
  // 'core/separator': SeparatorBlock,
  // 'core/spacer': SpacerBlock,
}

export default blockMap
