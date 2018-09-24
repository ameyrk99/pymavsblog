import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import './bootstrap.min.css'
import './layout.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    let panel

    if (location.pathname === rootPath) {
      header = (
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
            <div className="col-lg-7">
              <h1
                style={{
                  ...scale(2.1),
                  marginBottom: rhythm(1.5),
                  marginTop: 0,
                  color: '#ffffff',
                }}
              >
                Life Of Py </h1>
            </div>
            <div className="col-lg-3"
              style={{
                color: '#fff'
              }}
            >
              PyMavs Blog
              </div>
          </div>
        </Link>
      )
    } else {
      header = (
        <h1
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
              color: '#fff',
            }}
            to={'/'}
          >
            Life of Py
          </Link>
        </h1>
      )
    }

    panel = (
      <div>
        <div className="card">
          <div className="card-header">
            About
        </div>
          <div className="card-body">
            Blog for PyMavs organization.<br /><br />
            PyMavs is a new organization at the University of Texas at Arlington that focuses primary in Python. We pride ourselves in developing each other as better python programmers.
          <br /><br />
            <a href="https://pymavs.github.io">Learn More!</a>
          </div>
        </div><br /><br />
        <div className="card">
          <div className="card-header">
            Contact
      </div>
          <div className="card-body">
            PyMavs at the University of Texas at Arlington<br/>
            <span style={{fontSize: '80%'}}>Arlington, Texas</span>
        <br /><br />
            <a href="https://www.facebook.com/pymavs" target="_blank">facebook</a><br/>
            <a href="https://pymavs.slack.com/join/shared_invite/enQtNDM5MDAxMTgzODEwLTE5ZDk1ZDAyZTIzYmY2MjcyNGVhODZlNTRjYTE2OTZlMjc3ODljZjMzOTU2N2E3MjkyMDA5ZTI2Y2NhZDMwYTE" target="_blank">slack</a><br/>
            <a href="https://github.us18.list-manage.com/subscribe?u=ca60262c67543f2faeb7f0fc8&id=cb9f43de90" target="_blank">mailing-list</a>
          </div>
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
            {header}<br />
            <div className="container">
              <div className="jumbotron"
                style={{
                  paddingTop: '2%',
                  paddingBottom: '2%'
                }}
              >
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
