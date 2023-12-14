import * as React from "react";
import "./App.css";
import { getUserById, updateUser } from "./service";

const Edit = ({ id }) => {
  const [user, setUser] = React.useState(null);

  const [inputUser, setInputUser] = React.useState({
    name: user?.name,
    username: user?.username,
    nim: user?.nim,
    faculty: user?.faculty,
    department: user?.department,
  });

  const handleChange = (e) => {
    let newState = { ...inputUser };
    let { id, value } = e.target;
    newState[id] = value;
    setInputUser(newState);
  };

  const handleSubmitEditUser = async (e) => {
    e.preventDefault();
    return await updateUser(id, inputUser)
      .then((response) => {
        alert(response.data?.message);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch(() => {
        alert("Failed to update user");
      });
  };

  const retrieveUserById = async (userId) => {
    return await getUserById(userId)
      .then((response) => {
        setUser(response.data?.data);
      })
      .catch(() => {
        alert("Failed to fetch user");
      });
  };

  React.useEffect(() => {
    retrieveUserById(id);
  }, [id]);

  return (
    <div className="container">
      <h1>Edit data mahasiswa</h1>
      <form onSubmit={handleSubmitEditUser}>
        <label htmlFor="name">Nama</label>
        <input type="text" onChange={handleChange} defaultValue={user?.name} id="name" />

        <label htmlFor="username">Username</label>
        <input type="text" onChange={handleChange} defaultValue={user?.username} id="username" />

        <label htmlFor="nim">NIM</label>
        <input type="number" onChange={handleChange} defaultValue={user?.nim} id="nim" />

        <label htmlFor="faculty">Fakultas</label>
        <input type="text" onChange={handleChange} defaultValue={user?.faculty} id="faculty" />

        <label htmlFor="department">Prodi</label>
        <input type="text" onChange={handleChange} defaultValue={user?.department} id="department" />

        <button type="submit" className="btn" style={{ marginTop: "1rem" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Edit;
