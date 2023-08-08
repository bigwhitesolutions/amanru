import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="about">
      <div className="container">
        {/* + Title */}
        <div className="row mt-4 justify-content-center">
          <div className="col-lg-7 col-sm-12 my-auto headline">
            <h1>About Amanru Solutions</h1>
          </div>
        </div>
        {/* - Title */}

        <div className="row my-4 justify-content-center">
          {/* + Card */}
          <div className="col-lg-7 my-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="card-title">
                  <h2>
                   Section 2
                  </h2>
                  <h3>an introduction</h3>
                </div>

                <div className="card-text">
                  ipsum dolor sit amet sweet roll ice cream cheesecake
                  chocolate. Lemon drops gummi bears biscuit. Pie gingerbread
                  tart tootsie roll donut cheesecake. Muffin pie gingerbread
                  dragée pudding tart tootsie roll.
                </div>
              </div>
            </div>
          </div>
          {/* - Card */}

          {/* + Image */}
          <div className="col-lg-6 my-auto mx-auto">
          
          </div>
          {/* - Image */}

          {/* + Card */}
          <div className="col-lg-7 my-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="card-title">
                  <h2>More about us</h2>
                  <h3>sub text</h3>
                </div>

                <div className="card-text">
                  Bonbon chocolate bar ice cream brownie ice cream macaroon
                  halvah. Toffee tart chupa chups ice cream croissant jujubes
                  lollipop. Dragée jelly beans sesame snaps wafer muffin sesame
                  snaps topping bonbon ice cream. Macaroon cake biscuit gummies
                  sweet sweet chocolate cake. Danish sweet roll carrot cake
                  croissant. Donut chocolate cake jelly beans.
                </div>
              </div>
            </div>
          </div>
          {/* - Card */}
        </div>
      </div>
    </section>
  </Layout>
)
export default AboutPage
