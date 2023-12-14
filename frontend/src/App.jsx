import * as React from "react";
import "./App.css";
import Post from "./Post";
import Edit from "./Edit";
import { deleteUser, getAllUsers } from "./service";

const App = () => {
  const [isCreateButton, setCreateButton] = React.useState(false);
  const [isUpdateButton, setUpdateButton] = React.useState(false);
  const [id, setId] = React.useState(null);

  const [users, setUsers] = React.useState([]);

  const retrieveUsers = async () => {
    return await getAllUsers()
      .then((response) => {
        setUsers(response.data?.data);
      })
      .catch(() => {
        console.log("Failed to fetch users");
      });
  };

  const handleDeleteUser = async (id) => {
    return await deleteUser(id)
      .then((response) => {
        alert(response.data?.message);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch(() => {
        alert("Failed to delete user");
      });
  };

  const handleUpdateUser = (id) => {
    setUpdateButton(!isUpdateButton);
    setCreateButton(false);
    setId(id);
  };

  React.useEffect(() => {
    retrieveUsers();
  }, []);

  return (
    <>
      <div className="content">
        <h1>Nama Anggota Kelompok Tugas Akhir HAS</h1>

        <button
          onClick={() => {
            setCreateButton(!isCreateButton);
            setUpdateButton(false);
          }}
          className="btn"
          style={{ marginBottom: "1rem" }}
        >
          Tambah mahasiswa
        </button>
        <div className="container-table">
          <table>
            <thead>
              <tr>
                <th>Nama</th>
                <th>NIM</th>
                <th>Username</th>
                <th>Fakultas</th>
                <th>Prodi</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.nim}</td>
                  <td>{item.username}</td>
                  <td>{item.faculty}</td>
                  <td>{item.department}</td>
                  <td className="btn-action">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleDeleteUser(item.id);
                      }}
                      className="btn"
                    >
                      Hapus
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleUpdateUser(item.id);
                      }}
                      className="btn"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isCreateButton && <Post />}
      {isUpdateButton && <Edit id={id} />}
    </>
  );
};

export default App;
