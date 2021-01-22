
import React from "react"



const Footer = () => (
    <footer>
        <p>
            © {new Date().getFullYear()}, <a href="/">Omid Haqbin</a>. Hand-coded with love in Stockholm, Sweden. &nbsp;
            <a href="https://github.com/omidhq/omidhq.github.io">Source Code ✨</a>
        </p>

        <div class="social-contact">
            <a href="https://github.com/omidhq" title="Follow me on Github">Git</a>
            <a href="https://twitter.com/omidhq" title="Follow me on Twitter">Tw</a>
            <a href="https://www.linkedin.com/in/omidhaqbin/" title="Follow me on Linkedin">In</a>
            <a href="mailto:omid.haqbin@gmail.com">Mail</a>
        </div>
    </footer>
)

export default Footer