import Image from "next/image"

const WhyUs = () => {
  return (
    <section id="services" className="s-services">
      <div className="row section-header has-bottom-sep">
        <div className="col-full">
          <h3 className="subhead">DEVREL PROGRAM</h3>
          <h1 className="display-2">
            Wanna know what it is like to be a <br />
            DevRel?
          </h1>
        </div>
      </div>

      <div className="row services-list block-1-3 block-tab-full">
        {/* Learn Section */}
        <div className="col-block service-item">
          <div className="service-icon">
            <Image
              src="/learn.gif"
              alt="Learn"
              width={120}
              height={120}
              unoptimized
            />
          </div>
          <div className="service-text">
            <h3 className="h2">Learn</h3>
            <p>
              Learn the day-to-day tasks of a DevRel
            </p>
          </div>
        </div>

        {/* Make Content Section */}
        <div className="col-block service-item">
          <div className="service-icon">
            <Image
              src="/content.gif"
              alt="Make Content"
              width={120}
              height={120}
              unoptimized
            />
          </div>
          <div className="service-text">
            <h3 className="h2">Make Content</h3>
            <p>
              Learn to write and make Technical content<br />
              (2nd most important task of being a DevRel)
            </p>
          </div>
        </div>

        {/* Grow Section */}
        <div className="col-block service-item">
          <div className="service-icon">
            <Image
              src="/grow.gif"
              alt="Grow"
              width={120}
              height={120}
              unoptimized
            />
          </div>
          <div className="service-text">
            <h3 className="h2">Grow</h3>
            <p>
              If a DevRel person is an actor, the community is their stage. Learn to grow with the community
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
