import * as React from "react";
import "./App.css";
import { addUser } from "./service";

const Post = () => {
  const [inputUser, setInputUser] = React.useState({
    name: "",
    username: "",
    nim: "",
    faculty: "",
    department: "",
  });

  const handleChange = (e) => {
    let newState = { ...inputUser };
    let { id, value } = e.target;
    newState[id] = value;
    setInputUser(newState);
  };

  const handleSubmitCreateUser = async (e) => {
    e.preventDefault();
    return await addUser(inputUser)
      .then((response) => {
        alert(response.data?.message);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch(() => {
        alert("Failed to add user");
      });
  };

  return (
    <div className="container">
      <h1>Tambah data mahasiswa</h1>
      <form onSubmit={handleSubmitCreateUser}>
        <label htmlFor="name">Nama</label>
        <input type="text" onChange={handleChange} id="name" placeholder="Masukkan nama anda.." />

        <label htmlFor="username">Username</label>
        <input type="text" onChange={handleChange} id="username" placeholder="Masukkan username anda.." />

        <label htmlFor="nim">NIM</label>
        <input type="number" onChange={handleChange} id="nim" placeholder="Masukkan nim anda.." />

        <label htmlFor="faculty">Fakultas</label>
        <input type="text" onChange={handleChange} id="faculty" placeholder="Masukkan fakultas anda.." />

        <label htmlFor="department">Prodi</label>
        <input type="text" onChange={handleChange} id="department" placeholder="Masukkan prodi anda.." />

        <button type="submit" className="btn" style={{ marginTop: "1rem" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Post;
