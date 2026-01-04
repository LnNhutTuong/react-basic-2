import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//

//   //JSX
//   render() {
//     //DRY: Don't repeat yourself
//     return (
//       <>
//         <div className="a">
//           {/* cha sang con ko can () */}
//           <AddUserInfor AddNewUser={this.handleAddNewUser} />
//         </div>
//         <div className="b">
//           <DisplayInfor
//             listUsers={this.state.listUsers}
//             DeleteUser={this.handleDeleteUser}
//           />
//         </div>
//       </>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUsers, setListUser] = useState([
    { id: 1, name: "Ximen", age: "10" },
    { id: 2, name: "Nhut Tuong", age: "20" },
    { id: 3, name: "Lemon", age: "30" },
  ]);

  const handleAddNewUser = (userObj) => {
    alert("Success");

    setListUser([userObj, ...listUsers]);
    // this.setState({
    //   listUsers: [userObj, ...this.state.listUsers],
    // });
  };

  const handleDeleteUser = (userid) => {
    alert("Success");
    let listClone = listUsers;
    listClone = listClone.filter((item) => item.id !== userid);
    setListUser(listClone);
  };

  //   handleDeleteUser = (userid) => {
  //     alert("Success");

  //     const newList = this.state.listUsers.filter((item) => item.id !== userid);
  //     this.setState({
  //       listUsers: newList,
  //     });
  //   };

  return (
    <>
      <div className="a">
        {/* cha sang con ko can () */}
        <AddUserInfor AddNewUser={handleAddNewUser} />
      </div>
      <div className="b">
        <DisplayInfor listUsers={listUsers} DeleteUser={handleDeleteUser} />
      </div>
    </>
  );
};
export default MyComponent;
