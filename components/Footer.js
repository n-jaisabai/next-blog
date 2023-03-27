import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import Icon from '@/components/icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 mb-8 flex flex-col items-center">
        <div className="flex space-x-4">
          <Icon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <Icon kind="github" href={siteMetadata.github} size="6" />
          <Icon kind="facebook" href={siteMetadata.facebook} size="6" />
          <Icon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <Icon kind="twitter" href={siteMetadata.twitter} size="6" />
          <Icon kind="rss" href={siteMetadata.rss} size="6" />
        </div>
        <div className="mt-4 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div className="inline-flex gap-1">
            <div>Made with</div>
            <Icon kind="heart" iconClass="fill-current text-red-500" size="5" />
            <div>by</div>
            <div>{siteMetadata.author}</div>
            <div>{` • `}</div>
            <Link href="/">{siteMetadata.title}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
