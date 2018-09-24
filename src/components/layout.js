import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import './layout.css'
import './bootstrap.min.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    let panel

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(2.1),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            <div className="row">
              <div className="col-lg-2">
                <img src="icons/pythonicon.png"
                  style={{
                    width: '100%',
                    // height: '100%',
                  }}
                />
              </div>
              <div className="col-lg-10">
                PyMavs Blog
              </div>
            </div>
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            PyMavs Blog
          </Link>
        </h3>
      )
    }

    panel = (
      <div className="card">
        <div className="card-header">
          About
        </div>
        <div className="card-body">
          PyMavs is a new organization at the University of Texas at Arlington that focuses primary in Python. We pride ourselves in developing each other as better python programmers.
          <br /><br />
          <a href="https://pymavs.github.io">Learn More!</a>
        </div>
      </div>
    )

    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(50),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <div className="row">
          <div className="col-lg-9">
            {header}
            <div className="container">
              <div className="jumbotron">
                {children}
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              style={{
                marginTop: rhythm(1),
              }}
            >
              {panel}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Template
