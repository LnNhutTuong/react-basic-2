import ModalCreateUser from "./ModalCreateUser";
import "../../../assets/styles/Manage/ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = (props) => {
  const [showmodalcreate, setShowModalCreate] = useState(false);

  const [showmodalupdate, setShowModalUpdate] = useState(false);
  const [dataupdate, setDataUpdate] = useState({});

  const [showmodaldelete, setShowModalDelete] = useState(false);
  const [datadelete, setDataDelete] = useState({});

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

  const handleBtnUpdateUser = (user) => {
    setShowModalUpdate(true);
    setDataUpdate(user);
  };

  const resetUpdateData = () => {
    setDataUpdate({});
  };

  const handleBtnDeleteUser = (user) => {
    setShowModalDelete(true);
    setDataDelete(user);
  };

  return (
    <>
      <div className="manageuser-container">
        <div className="manageuser-title">Manage User</div>
        <div className="manageuser-content">
          <div className="btn-add-new">
            <button
              className="btn btn-dark"
              onClick={() => setShowModalCreate(true)}
            >
              <FcPlus /> Add new user
            </button>
          </div>
          <div className="table-add-newuser">
            {/* <TableUser
              listuser={listuser}
              handleBtnUpdateUser={handleBtnUpdateUser}
              handleBtnDeleteUser={handleBtnDeleteUser}
            /> */}
            <TableUserPaginate
              listuser={listuser}
              handleBtnUpdateUser={handleBtnUpdateUser}
              handleBtnDeleteUser={handleBtnDeleteUser}
            />
          </div>
          <ModalCreateUser
            show={showmodalcreate}
            setShow={setShowModalCreate}
            fetchListUser={fetchListUser}
          />
          <ModalUpdateUser
            show={showmodalupdate}
            setShow={setShowModalUpdate}
            dataupdate={dataupdate}
            fetchListUser={fetchListUser}
            setDataUpdate={setDataUpdate}
          />
          <ModalDeleteUser
            show={showmodaldelete}
            setShow={setShowModalDelete}
            datadelete={datadelete}
            setDataDelete={setDataDelete}
            fetchListUser={fetchListUser}
          />
        </div>
      </div>
    </>
  );
};

export default ManageUser;
