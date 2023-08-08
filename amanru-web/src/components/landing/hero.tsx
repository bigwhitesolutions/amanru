import React from 'react'
import Links from '../links'
import { Link } from 'react-scroll'
import { StaticImage } from "gatsby-plugin-image"

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container h-100">
        <div className="row h-100 justify-content-around">
          {/* + Hero section: Left side */}
          <div className="col-lg-7 my-auto">
            <div className="hero-introduction">
              <h1>
                <span className="wave" role="img" aria-label="Hand wave">
                  👋
                </span>
              </h1>
              <h1>Amanru Solutions</h1>
              <p>Welcome to Amanru Solutions! 🌟</p>
              <p>
                Not your average consulting firm! We're here to support business
                leaders and owners like you in achieving extraordinary results.
                At Amanru Solutions, we wholeheartedly believe in the power of
                positivity, a supportive mindset, and long-term, sustainable
                business growth. 💼✨
              </p>
              <p>
                With a track record of success in leading and thriving within
                large organisations, I have accumulated a wealth of expertise
                and best practices. Now, I am excited to share that knowledge
                with fellow business leaders and owners, like you, who are
                dedicated to unlocking their organisation's full potential.
                Together, we can drive growth, implement effective strategies,
                and create a positive impact that lasts. 🚀🌱
              </p>
              <p>
                Partner with Amanru Solutions for personalised support,
                strategic guidance, and tailored solutions that are designed
                specifically for your business. I understand the unique
                challenges faced by organisations of all sizes, and I am
                committed to helping you overcome them. Let's collaborate,
                leverage my experience, and achieve remarkable success together!
                💪🤝
              </p>
              <p>
                Feel free to reach out to me directly via LinkedIn Messenger or
                email me at Amanru.solutions@hotmail.com. I'm here to answer
                your questions, discuss your business needs, and explore how
                Amanru Solutions can help you thrive.
              </p>
              <p>Let's make a positive impact that truly matters! 🌍🤝</p>
              <Link
                to="content"
                className="main-button btn btn-primary shadow-sm"
                smooth={true}
              >
                Get to know me
              </Link>
            </div>
          </div>
          {/* - Hero section: Left side */}

          {/* + Hero section: Right side */}
          <div className="col-lg-4 my-auto">
            <div className="hero-bio">
              <div className="card shadow-sm mb-5">
                <div className="card-body">
                  <div className="icon">
                    <StaticImage
                      src="../../images/logo.jpeg"
                      style={{ width: '5rem', height: '5rem' }}
                      alt="Hero Icon"
                    />
                  </div>
                  <h3 className="card-title">Amanru Solutions</h3>
                  <h4>
                    <span
                      className="mr-1"
                      role="img"
                      aria-label="pin"
                    >
                      📍
                    </span>
                    Rugby, Warwickshire GB
                    <br />
                  </h4>
                  <p className="card-text">
                    
                  </p>
                  <Links />
                </div>
              </div>
            </div>
          </div>
          {/* - Hero section: Right side */}
        </div>
      </div>
    </section>
  )
}
