import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
  return (
    <>
      <div className="manageuser-container">
        <div className="manageuser-title">Manage User</div>
        <div className="manageuser-content">Manage User content</div>
        <div className="manageuser-btn">
          <ModalCreateUser />
        </div>
        <div className="manageuser-table">Manage User</div>
      </div>
    </>
  );
};

export default ManageUser;
