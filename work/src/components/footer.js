import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, fas, far);

const Footer = () => (
    <footer>
        <p>
            © {new Date().getFullYear()}, <a href="/">Omid Haqbin</a>. Hand-coded with love in Stockholm, Sweden. &nbsp;
            <a href="https://github.com/omidhq/omidhq.github.io">Source Code <FontAwesomeIcon icon={['fas', 'code-branch']} /></a>
        </p>

        <div class="social-contact">
            <a href="https://github.com/omidhq" title="Follow me on Github"><FontAwesomeIcon icon={['fab', 'github-alt']} /></a>
            <a href="https://twitter.com/omidhq" title="Follow me on Twitter"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
            <a href="https://www.linkedin.com/in/omidhaqbin/" title="Follow me on Linkedin"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
            <a href="mailto:omid.haqbin@gmail.com"><FontAwesomeIcon icon={['fas', 'envelope']} /></a>
        </div>
    </footer>
)

export default Footer