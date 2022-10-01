import React, { useState } from 'react'
import "../components/CSS/style.css"
import { Scrollbars } from 'react-custom-scrollbars-2';
import Userdata from "./Userdata"
import Sidebar from "./Sidebar"
import AddNewDivision from "./AddNewDivision"
import { Users } from "./Users"



const Tasks = () => {

    const [query, setQuery] = useState(Users);

    const [toggle, setToggle] = useState(false);


    return (

        <>
            <div className="container">
                {/*Sidebar*/}

                <Sidebar />

                {/*Right Section*/}

                <div className="right-section">

                    <div className="right-sec-head">

                        <div className="top_heading">

                            <h2>My Apps</h2>
                            <h2><i className="fa-solid fa-greater-than"></i></h2>
                            <h2>Client</h2>
                            <h2><i className="fa-solid fa-greater-than"></i></h2>
                            <h2 style={{ color: "#ea198b" }}>Sites</h2>
                        </div>
                        <div className="top_icons">
                            <i class="fa-regular fa-bell"></i>
                            <i class="fa-regular fa-user"></i>

                        </div>
                    </div>


                    {
                        toggle ? <AddNewDivision setToggle={setToggle} toggle={toggle} setQuery={setQuery} query={query} /> : ""
                    }


                    <div className="heading-rgt2">
                        <i className="fa-solid fa-arrow-left-long"></i>
                        <h2>Century</h2>
                        <i className="fa-solid fa-greater-than"></i>
                        <h5 style={{ color: "#058970a3", fontSize: "1.5rem" }}>Divisions</h5>
                    </div>


                    <div className="right_parent">
                        <div className="parent_cards">
                            <Scrollbars>
                                <div className="contain">

                                    <Userdata query={query} />

                                </div>
                            </Scrollbars>

                        </div>
                        <div className="dynamic">
                            <div className="division_btn">
                                <button className="btn_divi" onClick={() => setToggle(true)}>


                                    <i className="fa-solid fa-plus" style={{ marginRight: ".7rem" }}></i>Add New Division</button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Tasks
