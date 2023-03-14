import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'

export async function getStaticProps() {
  const tags = await getAllTags('blog')

  return { props: { tags } }
}

export default function Tags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.title}`} description="Things I blog about" />
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Tags
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <Link
                href={`/tags/${kebabCase(t)}`}
                key={t}
                className="bg-day dark:bg-night relative mt-2 mb-2 mr-5 inline-flex flex-row items-center rounded border border-gray-700 bg-opacity-50 font-medium hover:border-white dark:bg-opacity-50"
              >
                <div className="px-2 py-1 text-sm font-medium">{t.split(' ').join('-')}</div>
                <div className="inline-flex h-full items-center rounded-r border-l border-gray-700 bg-gray-300 px-2 text-sm font-semibold dark:bg-gray-800">
                  {`${tags[t]}`}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
