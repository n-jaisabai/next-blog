import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import { SectionHeader, SectionContainer } from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <header className="supports-backdrop-blur:bg-white/60 sticky top-0 z-40 py-2 backdrop-blur sm:py-4">
        <SectionHeader>
          <div className="flex items-center justify-between">
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="inline-flex h-6 items-center text-center text-xl font-semibold transition-transform duration-500 hover:scale-110">
                  <Image src="/static/images/logo.svg" width={32} height={32} alt="njverse" />
                  <div className="ml-1">NJVERSE</div>
                </div>
              </div>
            </Link>
            <div className="flex items-center text-base leading-5">
              <div className="hidden sm:block">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="p-1 font-medium text-gray-900 hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-400 sm:p-4"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <ThemeSwitch />
              <MobileNav />
            </div>
          </div>
        </SectionHeader>
      </header>
      <SectionContainer>
        <main className="mb-auto">{children}</main>
        <Footer />
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
