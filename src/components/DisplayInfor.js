import React, { useState } from "react";
import "./DisplayInfor.scss";

const DisplayInfor = (props) => {
  const [isShow, setisShow] = useState({ isShow: true });

  const handleOnClick = (event) => {
    setisShow(!isShow);
  };

  // sandwich fucking sandwich
  const { listUsers } = props;
  // sandwich fucking sandwich

  return (
    <div className="display-infor-container">
      <div>
        <div>
          {/* su dung nen () */}
          <span onClick={() => handleOnClick()}>
            {isShow === true ? "Hide list users" : "Show list users"}
          </span>
        </div>
      </div>

      {isShow && (
        <div>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={+user.age >= 18 ? "green" : "red"}>
                <hr />
                <div>
                  <div>My name's {user.name} </div>
                  <div>My age' {user.age}</div>
                </div>
                <div>
                  <button onClick={() => props.DeleteUser(user.id)}>X</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
// class DisplayInfor extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isShow: true,
//     };
//   }

//   handleOnClick = (event) => {
//     this.setState({
//       isShow: !this.state.isShow,
//     });
//   };

//   render() {
//     // sandwich fucking sandwich
//     const { listUsers } = this.props;
//     // sandwich fucking sandwich

//     return (
//       <div className="display-infor-container">
//         <div>
//           <div>
//             {/* su dung nen () */}
//             <span onClick={() => this.handleOnClick()}>
//               {this.state.isShow === true
//                 ? "Hide list users"
//                 : "Show list users"}
//             </span>
//           </div>
//         </div>

//         {this.state.isShow && (
//           <div>
//             {listUsers.map((user) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <hr />
//                   <div>
//                     <div>My name's {user.name} </div>
//                     <div>My age' {user.age}</div>
//                   </div>
//                   <div>
//                     <button onClick={() => this.props.DeleteUser(user.id)}>
//                       X
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

export default DisplayInfor;
