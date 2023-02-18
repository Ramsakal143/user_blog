import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './all.css'
import User from "./User";

const ShowUser = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        getList()

    }, [])

    function getList() {
        //  const url = fetch('http://localhost:5000/blog')
        const url = fetch('https://63ee44a75e9f1583bdbfa17d.mockapi.io/blogs/blogs')
        console.log(url)
        // console.log(url1)
        let promise = (url)
        promise.then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
            setUser(data)
        }).then((error) => {
            console.log(error)
        })
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <p className="text-center py-2 underline"><ins className="fs-4">Show Decription</ins></p>
                        
                        {

                            user.map((item) =>
                                <NavLink to={`/details/${item.slug}`} className="text-white" style={{textDecoration:"none"}}>
                                    <div className="outer" key={item.id}>
                                        <div className="">
                                            <div className="">
                                                <div>
                                                <h6 className="txt">{item.id}.</h6>
                                                <div className="text-dark"><ion-icon name="caret-forward-outline" className=""></ion-icon><span className="titles block">{item.title.slice(0,24)}</span></div>
                                                <div className="dates"><ion-icon name="calendar-outline" style={{fontSize:"15px"}}></ion-icon>{item.date}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            )


                        }

                    </div>
                    
                </div>

            </div>
        </>
    )
}

export default ShowUser