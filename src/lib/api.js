import { AllMenus } from '../data/menus'
import {
  AllPosts,
  LatestPosts,
  PageBySlug,
  PostsByCategoryId,
  PostByUri,
  PostBySlug,
  PostsByTagId
} from '../data/posts'
import { AllPages, PageByUri } from '../data/pages'
import { AllCategories, CategoryByUri } from '../data/categories'
import { AllTags, TagBySlug } from '../data/tags'
import { AllSiteMeta } from '../data/meta'
import { BlocksField } from '../data/blocks'

//all menus
export const ALL_MENUS = AllMenus

//all blocks
export const BLOCKS_FIELD = BlocksField

// latest posts
export const LATEST_POSTS = LatestPosts

//all posts
export const ALL_POSTS = AllPosts

// page by slug
export const PAGE_BY_SLUG = PageBySlug

// get post by uri
export const POST_BY_URI = PostByUri

// get post by slug
export const POST_BY_SLUG = PostBySlug

//All pages
export const ALL_PAGES = AllPages

// query PageBySlugQuery($id: ID!, $idType: PageIdType!) {
export const PAGE_BY_URI = PageByUri

// query all categories
export const ALL_CATEGORIES = AllCategories

// query category by uri
export const CATEGORY_BY_URI = CategoryByUri

// query posts by category id
export const POSTS_BY_CATEGORY_ID = PostsByCategoryId

// query all tags
export const ALL_TAGS = AllTags

// query tags by slug
export const TAG_BY_SLUG = TagBySlug

// query post by tag id
export const POSTS_BY_TAG_ID = PostsByTagId

// query site meta
export const ALL_SITE_META = AllSiteMeta
