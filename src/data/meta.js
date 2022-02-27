import { MenuFragment, MenuItems } from './menus'

// query site meta, logo, favicon, etc
export const AllSiteMeta = `
query AllMetaQuery {
    headerMeta: getHeader {
      siteTagLine
      siteTitle
    }
    footerMeta: getFooter {
      sidebarTwo
    }
    ${MenuItems}
  }
  ${MenuFragment}
`
