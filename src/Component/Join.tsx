import Image from "next/image"
import Link from "next/link"

const Join = () => {
  return (
    <section id="join" className="s-contact">
      <div className="overlay"></div>
      
      <div className="row section-header">
        <div className="col-full">
          <h1 className="display-2 display-2--light">Join Our API Community Today!</h1>
        </div>
      </div>

      <div className="row contact-content">
        <div className="contact-primary">
          <h3 className="h6">GET INVOLVED IN THE COMMUNITY TODAY!</h3>
          <Image 
            src="/slack.png" 
            alt="Slack Community" 
            width={600} 
            height={400}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <button className="join-btn">
            <Link href="https://keploy.slack.com/" target="_blank" rel="noopener noreferrer">
              JOIN SLACK
            </Link>
          </button>
        </div>

        <div className="contact-secondary">
          <div className="contact-info">
            <div className="cinfo">
              <h2>
                Meet students, mentors and educators around the world excited about APIs and technology!!
              </h2>
            </div>
            
            <ul className="contact-social">
              <li>
                <Link href="https://keploy.slack.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-slack"></i>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/Keployio" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/channel/UC6OTg7F4o0WkmNtSoob34lg" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-youtube"></i>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/keploy/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin"></i>
                </Link>
              </li>
              <li>
                <Link href="https://keploy.io/blog" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-rss"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Join
