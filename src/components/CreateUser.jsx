import React, { useState } from "react";
import './create.css'

export default function Create() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    var outputs = title.toLowerCase()
    var slug = outputs.split(" ").join("-")
    const newDate = new Date()
    var date = newDate.getDate() + "-" + (newDate.getMonth()+1) + "-" + newDate.getFullYear()
    console.log(slug, date)
    const saveData = () => {
        const data1 = { title, slug, date, description }
        //  fetch('http://localhost:5000/blog', {
        fetch('https://63ee44a75e9f1583bdbfa17d.mockapi.io/blogs/blogs', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(data1)
        }).then((result) => {
            result.json().then((res) => {
                console.log(res)
                setTitle('')
                setDescription('')
            })
        })

    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 create-outer mx-auto mt-4">
                    <div className=" p-3 create-inner">
                        <h2 className="text-center text-danger">CREATE BLOG</h2>
                        <hr className="text-dark"/>
                        <span className="text-white fw-bold fs-5">Title</span>
                        <input type="text" placeholder="Enter Your Title" className="form-control" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                        <div className="mt-2 text-white fw-bold fs-5">Description</div>
                        <textarea cols="5" rows="5" placeholder="Enter Your description" className="form-control" value={description} onChange={(e) => { setDescription(e.target.value) }}></textarea><br />
                        <input type="button" className="btn btn-outline-dark text-white fw-bold px-4" value="Add" onClick={saveData} />
                    </div>
                </div>
            </div>
        </div>
    )
}