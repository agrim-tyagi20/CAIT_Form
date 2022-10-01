import React, { useState } from 'react'


const AddNewDivision = ({ setToggle, toggle, setQuery, query }) => {

  const [data, setData] = useState({
    divisionName: "",
    incharge: "",
    email: "",
    totalEmployee: "",
  });


  const handleChange = (e) => {

    const name = e.target.name;
    const value = e.target.value;
    const newdata = { ...data, [name]: value }
    setData(newdata)

  }


  const handleSubmit = () => {

    if (data.divisionName !== "" && data.incharge && data.email && data.totalEmployee) {

      const addContact = {
        id: new Date().getTime().toString(),
        divisionName: data.divisionName,
        incharge: data.incharge,
        email: data.email,
        totalEmployee: data.totalEmployee,
      }



      const newContacts = [...query, addContact]
      setQuery(newContacts)
      console.log(query)
      setData({ divisionName: "", incharge: "", email: "", totalEmployee: "", })

      setTimeout(() => {

        setToggle(!toggle)
      }, 1300)

    }
  }

  return (

    <>

      <div className="division_parent">
        <div className="division_container">

          <div className="title_divi">
            <h5>Add New Division</h5>
          </div>


          <div className="middle_division_sec">
            <div className="div_name">
              <p>Division Name</p>
              <input type="text" name="divisionName" value={data.divisionName} onChange={handleChange}></input>

            </div>


            <div className="div_data">
              <div className="incharge_class">
                <p>Incharge</p>
                <select type="text" name="incharge" value={data.incharge} onChange={handleChange}>
                  <option >Department Lead</option>
                  <option>Mohit Suri</option>
                  <option>Ankit Sharma</option>
                  <option>Shivang Saxena</option>
                </select>

              </div>

              <div className="email_incharge">
                <p>Incharge E-mail ID</p>
                <input type="text" name="email" value={data.email} onChange={handleChange} placeholder="Enter E-mail ID"></input>
              </div>

              <div className="total_employee">
                <p>Total Employees Working</p>
                <input type="text" name="totalEmployee" value={data.totalEmployee} onChange={handleChange}></input>
              </div>

            </div>


          </div>

          <div className="division_btn_class">
            <div className="place_btn_class">
              <button className="cancel_btn" onClick={() => setToggle(false)}>Cancel</button>
              <button className="add_btn" onClick={handleSubmit}>Add</button>
            </div>

          </div>

        </div>
      </div>

    </>

  )
}

export default AddNewDivision
//export { Biodata };
