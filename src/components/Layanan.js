import React, { Component } from 'react'
import { FaReact, FaCuttlefish, FaGitAlt, FaNeos } from "react-icons/fa";
import Judul from './Judul';

export default class Layanan extends Component {
  state = {
    layanan: [
      {
        icon: <FaReact />,
        title: "ReactJS",
        info: "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies."
      },
      {
        icon: <FaCuttlefish />,
        title: "Contentful",
        info: "The content platform for the digital-first era It’s the modern way to manage content: Control all content from a single hub. Publish to any channel. Integrate hundreds of tools with our industry-leading app framework."
      },
      {
        icon: <FaNeos />,
        title: "Netlify",
        info: "Netlify is a San Francisco-based cloud computing company that offers hosting and serverless backend services for web applications and static websites."
      },
      {
        icon: <FaGitAlt />,
        title: "Github",
        info: "GitHub, Inc. is an American multinational corporation that provides hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features."
      }
    ]
  }
  render() {
    return (
      <section className="layanan">
        <Judul judul="technology used" />
        <div className="layanan-center">
          {this.state.layanan.map(item => {
            return (
              <article key={`item-${item.title}`} className="layanan">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}
