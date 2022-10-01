import React from 'react'

const Sidebar = () => {
  return (
    <>

      <div className="sidebar">

        <div className="heading">

          <h2>CAIT</h2>
          <h3>EDUSYS Pvt.Ltd.</h3>
        </div>

        <div className="side_items">

          <div className="items">
            <ul>
              <a href="/"><i className="fa-solid fa-border-all" style={{ marginRight: "1.5rem" }}></i>My Apps</a>
              <a href="/"><i className="fa-solid fa-user-group" style={{ marginRight: "1.2rem" }}></i>Resources</a>

            </ul>

          </div>

          <div className="item2">
            <ul>
              <a href="/"><i className="fa-solid fa-home" style={{ marginRight: "1.4rem" }}></i>My  Organisation</a>
              <a href="/"><i className="fa-solid fa-gear" style={{ marginRight: "1.5rem" }}></i>Settings</a>
              <a href="/"><i className="fa-solid fa-arrow-right-from-bracket" style={{ marginRight: "1.5rem" }}></i>Logout</a>

            </ul>

          </div>
        </div>


      </div>
    </>
  )
}

export default Sidebar
