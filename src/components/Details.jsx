import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './details.css'

const Details = () => {
  const { slug } = useParams()
  const [blogs, setBlog] = useState(null)

  useEffect(() => {
    getList()
  })

  function getList() {
    // const url = fetch('http://localhost:5000/blog')
    const url = fetch('https://63ee44a75e9f1583bdbfa17d.mockapi.io/blogs/blogs')
    let promise = (url)
    promise.then((response) => {
      return response.json()
    }).then((data) => {
      let blogs = data.find((blogs) => blogs.slug === (slug))
      if (blogs) {
        setBlog(blogs)
      }
    }).then((error) => {
      console.log(error)
    })
  }

  return (
    <div className='box container'>
      {blogs ? (
        <div className='row'>
          <div className='col-md-12'>
            <div className="date"><ion-icon name="calendar-outline" style={{ paddingTop: "5px", fontSize: "15px", paddingRight: "4px" }}></ion-icon>{blogs.date}</div>
            <hr/>
            <b className='para'>{blogs.title}</b>
            <p className='desc p-2' style={{textAlign:"justify"}}>{blogs.description} </p><br />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Details
