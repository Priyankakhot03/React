import React from "react";
const Student=(props)=>{
    let data=props.data
    return (
        <div>
            <table border="2px" style={{textAlign:"center"}}>
                <tr>
                    <th>Photo</th>
                    <th>Student name</th>
                    <th>Roll no</th>
                    <th>Branch</th>
                    <th>Email</th>
                    <th>Subjects</th>
                    
                </tr>
                {data.map((x)=>{
                return  <tr>
                <td><img src={x.Sphoto} alt="" height="200px" width="200px"/></td>

                <td>{x.Sname}</td>
                <td>{x.Rollno}</td>
                <td>{x.Branch}</td>
                <td>{x.Email}</td>
                <td>
                    <ol>{x.Subjects} </ol>
                    </td>



                </tr>
                
                
            }) }
            </table>
        </div>
    )
}
export default Student;