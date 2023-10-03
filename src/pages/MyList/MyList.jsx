import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import axios from "axios";
import verifyToken from "../../verifyToken";
import "./MyList.css";

const MyList = React.memo(() => {
  const [lists, setLists] = useState([]);
  const [user, setUser] = useState();
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      verifyToken(token).then((res) => {
        if (res.message) {
          setUser(res.user);
        }
      });
    }
  }, []);
  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/mylist/all-list`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: user }),
      })
      .then((result) => {
        setLists(result.data.movies);
      })
      .catch((err) => console.log(err));
  }, [user, deleted]);
  return (
    <section className="list-section">
      <div className="list-container">
        {lists?.map((ele) => (
          <Card data={ele} user={setDeleted} />
        ))}
      </div>
    </section>
  );
});

export default MyList;
