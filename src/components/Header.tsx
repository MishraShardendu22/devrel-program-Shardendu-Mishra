"use client"

import Link from "next/link"
import Image from "next/image"

const Header = () => {
  return (
    <section id="home" className="relative w-full min-h-[85vh] flex items-center overflow-visible pt-20">


      <div className="absolute right-20 md:right-32 lg:right-40 top-1/2 -translate-y-1/2 w-80 h-80 md:w-112 md:h-112 lg:w-128 lg:h-128 hidden md:block">
        <Image
          src="/Theme/banner-bunny.webp"
          alt="Keploy Banner"
          width={550}
          height={550}
          className="object-contain opacity-60 dark:opacity-40"
        />
      </div>
      
      <div className="relative w-full z-10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight text-left mb-6">
            <span className="text-primary dark:text-white">Keploy Developer</span> <br />
            <span className="text-primary">Relations Program</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl max-w-2xl mb-8 text-left font-semibold text-gray-700 dark:text-gray-300">
            Get into the world of DevRels and experience of being one for a month
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="https://forms.gle/Fr3TwNUni2RRnZhNA"
              className="inline-flex items-center justify-center px-8 py-3 font-medium text-white rounded-lg shadow-lg transition-all duration-150 ease-in-out bg-primary hover:bg-primary/90"
            >
              Apply Now
            </Link>
            <Link
              href="https://keploy-program.notion.site/Keploy-DevRel-Program-ddaf87544acb4c84afb9b781016d5e92"
              className="inline-flex items-center justify-center px-8 py-3 font-medium rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-md transition-all duration-150 ease-in-out"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>

      <ul className="list-none m-0 fixed top-1/2 right-8 -translate-y-1/2 z-40 hidden lg:block">
        <li className="mb-3">
          <a 
            href="https://github.com/keploy/keploy" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-gray-300 dark:border-slate-700 bg-gray-900 dark:bg-slate-800 text-white dark:text-white/70 transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:scale-110"
            aria-label="Star us on GitHub"
            title="Star us on GitHub"
          >
            <i className="fa fa-github text-lg"></i>
          </a>
        </li>
        <li className="mb-3">
          <a 
            href="https://join.slack.com/t/keploy/shared_invite/zt-357qqm9b5-PbZRVu3Yt2rJIa6ofrwWNg" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-gray-300 dark:border-slate-700 bg-gray-900 dark:bg-slate-800 text-white dark:text-white/70 transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:scale-110"
            aria-label="Slack"
            title="Join us on Slack"
          >
            <i className="fa fa-slack text-lg"></i>
          </a>
        </li>
        <li className="mb-3">
          <a 
            href="https://x.com/Keployio" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-gray-300 dark:border-slate-700 bg-gray-900 dark:bg-slate-800 text-white dark:text-white/70 transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:scale-110"
            aria-label="Twitter"
            title="Follow us on Twitter/X"
          >
            <i className="fa fa-twitter text-lg"></i>
          </a>
        </li>
        <li className="mb-3">
          <a 
            href="https://www.youtube.com/channel/UC6OTg7F4o0WkmNtSoob34lg" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-gray-300 dark:border-slate-700 bg-gray-900 dark:bg-slate-800 text-white dark:text-white/70 transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:scale-110"
            aria-label="YouTube"
            title="Subscribe on YouTube"
          >
            <i className="fa fa-youtube-play text-lg"></i>
          </a>
        </li>
        <li className="mb-3">
          <a 
            href="https://www.linkedin.com/company/keploy/posts/?feedView=all" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-gray-300 dark:border-slate-700 bg-gray-900 dark:bg-slate-800 text-white dark:text-white/70 transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:scale-110"
            aria-label="LinkedIn"
            title="Follow us on LinkedIn"
          >
            <i className="fa fa-linkedin text-lg"></i>
          </a>
        </li>
        <li>
          <a 
            href="https://keploy.io/blog" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-gray-300 dark:border-slate-700 bg-gray-900 dark:bg-slate-800 text-white dark:text-white/70 transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:scale-110"
            aria-label="Blog"
            title="Read our Blog"
          >
            <i className="fa fa-rss text-lg"></i>
          </a>
        </li>
      </ul>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-8">
        <a 
          href="#about" 
          className="font-semibold text-xs uppercase tracking-wider relative inline-flex flex-col items-center gap-2 transition-all duration-300 group text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
        >
          <span>Scroll Down</span>
          <span className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex items-start justify-center p-2">
            <span className="w-1.5 h-1.5 rounded-full animate-bounce bg-gray-600 dark:bg-gray-400"></span>
          </span>
        </a>
      </div>
    </section>
  )
}

export default Header
