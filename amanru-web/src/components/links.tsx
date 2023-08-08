import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

export default function Links(className) {

  return (
    <ul className="list-group list-group-horizontal">
      <li className="list-group-item">
        <a
          href="mailto:amanru.solutions@hotmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
      <li className="list-group-item">
        <a
          href="https://www.linkedin.com/company/amanru-solutions"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
    </ul>
  )
}
