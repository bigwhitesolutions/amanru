import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBriefcase,
  faCalendar,
  faTerminal,
  faGraduationCap,
  faUserGraduate,
  faCode,
} from "@fortawesome/free-solid-svg-icons"

export default class Content extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query projectsQuery {
            allProjectsJson {
              edges {
                node {
                  project
                  link
                  description
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <section className="content" id="content">
              <div className="container">
                {/* + Projects subsection */}
                <div className="subsection">
                  <h2 className="mt-5">
                    <span className="dot"></span>Projects
                  </h2>
                  <div className="row">
                    {data.allProjectsJson.edges.map(({ node }, index) => (
                      <div className="col-lg-4" key={index}>
                        <div className="card mb-4">
                          <div className="card-body">
                            <div className="card-title">
                              <h3>{node.project}</h3>
                            </div>

                            <div className="card-text">{node.description}</div>
                          </div>
                          <div className="card-footer">
                            <a
                              href={node.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* - Projects subsection */}
            </section>
          </>
        )}
      />
    )
  }
}
