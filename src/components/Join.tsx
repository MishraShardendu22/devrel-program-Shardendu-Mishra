'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/constants';

const Join = () => {
  return (
    <section
      id="join"
      className="relative py-20 md:py-24"
      style={{
        background: 'linear-gradient(135deg, var(--primary-300) 0%, var(--primary-400) 100%)',
      }}
    >
      <div className="absolute inset-0 w-full h-full opacity-10 bg-[url('/contact-bg.jpg')] bg-center bg-cover"></div>
      <div
        className="absolute inset-0 w-full h-full"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center pb-12 md:pb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Join Our <span style={{ color: 'var(--secondary-300)' }}>Keploy Community</span> Today!
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="rounded-lg p-8 border"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
              }}
            >
              <h3 className="font-semibold text-sm uppercase tracking-wide text-white mb-6 text-center">
                Get Involved In The Community Today!
              </h3>
              <div className="mb-6">
                <Image
                  src="/slack.png"
                  alt="Slack Community"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="flex justify-center">
                <Link
                  href={SOCIAL_LINKS.slack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white rounded-lg text-base font-bold transition-all duration-300 uppercase tracking-wide shadow-lg hover:-translate-y-1 hover:shadow-xl"
                  style={{ color: 'var(--primary-300)' }}
                >
                  Join Slack
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Meet students, mentors and educators around the world excited about APIs and
                technology!
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Connect with a vibrant community of developers, share knowledge, and grow together.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wide text-white mb-4">
                Follow us on
              </h4>
              <ul className="list-none m-0 flex gap-3">
                <li>
                  <Link
                    href={SOCIAL_LINKS.slack}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 text-white rounded-lg transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  >
                    <i className="fa fa-slack text-xl"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href={SOCIAL_LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 text-white rounded-lg transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  >
                    <i className="fa fa-twitter text-xl"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href={SOCIAL_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 text-white rounded-lg transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  >
                    <i className="fa fa-youtube text-xl"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 text-white rounded-lg transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  >
                    <i className="fa fa-linkedin text-xl"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href={SOCIAL_LINKS.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 text-white rounded-lg transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  >
                    <i className="fa fa-rss text-xl"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
