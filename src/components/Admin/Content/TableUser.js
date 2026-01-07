import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiServices";

const TableUser = (props) => {
  const [listuser, setListUser] = useState([]);

  useEffect(async () => {
    fetchListUser();
  }, []);

  const fetchListUser = async () => {
    let res = await getAllUser();
    if (res.EC == 0) {
      setListUser(res.DT);
    }
  };
  return (
    <>
      <table className="table table-hover table-bordered">
        <thead className="thead-light">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listuser &&
            listuser.length > 0 &&
            listuser.map((item, index) => {
              return (
                <tr key={`talbe-user-${index + 1}`}>
                  <td scope="row">{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button className="btn">View</button>
                    <button className="btn btn-">Update</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          {listuser && listuser.length === 0 && (
            <tr>
              <td colSpan={"4"}>Not found data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableUser;
