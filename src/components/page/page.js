import PageHeader from './pageHeader'
import PageBody from './pageBody'

const Page = ({ page }) => {
  return (
    <>
      <PageHeader title={page?.title} />
      <PageBody content={page} />
    </>
  )
}

export default Page
