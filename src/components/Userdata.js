import React from 'react'



const Userdata = ({ query }) => {

    return (
        <>

            {

               
                query.map((curnt) => {
                    const { divisionName, incharge, totalEmployee, email, id } = curnt;
                 
                    return <div key={id}>
                     
                        <div className="cards" >
                            <div className="division">
                                <div> <p>{divisionName}</p></div>

                                <div className="dots"><i className="fa-solid fa-ellipsis"></i></div>
                            </div>

                            <div className="info">
                                <div className="name">
                                    <p className="nameh3" style={{ marginRight: "6.9rem" }}><span >Incharge : </span>{incharge}</p>

                                </div>
                                <div className="email_class">
                                    <p className="email"><span >E-mail ID : </span>{email}</p>
                                </div>
                                <div className="emp_class">
                                    <p className="emp"><span >Total Employees : </span>
                                        {totalEmployee}
                                    </p>
                                </div>
                            </div>


                        </div>

                    </div>
                    

                })
                
            }

        </>
    )
}

export default Userdata
