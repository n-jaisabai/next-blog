import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a>
        <span className="inline-block rounded border border-gray-700 py-1 px-2 text-xs font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-gray-700">
          {text.split(' ').join('-')}
        </span>
      </a>
    </Link>
  )
}

export default Tag
