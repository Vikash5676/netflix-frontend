import React from "react";
import "./Card.css";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import Swal from "sweetalert2";

const Card = ({ data, user }) => {
  const handleDelete = () => {
    axios
      .delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/mylist/delete-movie/${String(
          data._id
        )}`
      )
      .then((result) => {
        if (result.data.execution) {
          Swal.fire({ icon: "success", title: result.data.message });
          user(String(data._id));
        }
      })
      .catch((err) => {
        Swal.fire({ icon: "error", title: "something went wrong" });
        user(String(data._id));
      });
  };
  return (
    <div className="list-card">
      <img
        src={`${process.env.REACT_APP_TMDB_IMAGE_URL}${data.backdrop_path}`}
        alt={data.title}
      />
      <AiFillDelete className="list-delete" onClick={handleDelete} />
    </div>
  );
};

export default Card;
