import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FirstMod from '../../static/images/1st-mod.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Work Samples" />
    <div className="backHome">
        <p>You are here: &nbsp;
            <Link
            to="/"
            data-tooltip="Back to the Homepage"
            >Home </Link>> Work Samples
        </p>
    </div>
    <main className="portfolio-items">
        <section className="box">
            <Link to="/">
                <div>
                    <img src={FirstMod} alt="A dog smiling in a party hat" />
                </div>
                <h2>Personal Portfolio</h2>
                <h4>The very first HI brief</h4>
                <p>Totally static</p>
            </Link>
        </section>

        <section className="box">
            <Link to="/">
                <div>
                    <img src={FirstMod} alt="A dog smiling in a party hat" />
                </div>
                <h2>Personal Portfolio</h2>
                <h4>The very first HI brief</h4>
                <p>Totally static</p>
            </Link>
        </section>

        <section className="box">
            <Link to="/">
                <div>
                    <img src={FirstMod} alt="A dog smiling in a party hat" />
                </div>
                <h2>Personal Portfolio</h2>
                <h4>The very first HI brief</h4>
                <p>Totally static</p>
            </Link>
        </section>

        <section className="box">
            <Link to="/">
                <div>
                    <img src={FirstMod} alt="A dog smiling in a party hat" />
                </div>
                <h2>Personal Portfolio</h2>
                <h4>The very first HI brief</h4>
                <p>Totally static</p>
            </Link>
        </section>

        <section className="box">
            <Link to="/">
                <div>
                    <img src={FirstMod} alt="A dog smiling in a party hat" />
                </div>
                <h2>Personal Portfolio</h2>
                <h4>The very first HI brief</h4>
                <p>Totally static</p>
            </Link>
        </section>

        <section className="box">
            <Link to="/">
                <div>
                    <img src={FirstMod} alt="A dog smiling in a party hat" />
                </div>
                <h2>Personal Portfolio</h2>
                <h4>The very first HI brief</h4>
                <p>Totally static</p>
            </Link>
        </section>
    </main>
    
  </Layout>
)

export default IndexPage
