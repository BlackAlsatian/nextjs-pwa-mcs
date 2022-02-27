import { ALL_SITE_META } from '../lib/api'
import fetcher from '../lib/fetcher'

async function getMenusMetaData() {
  const metaData = await fetcher(ALL_SITE_META)

  return {
    metaData
  }
}

export default getMenusMetaData
