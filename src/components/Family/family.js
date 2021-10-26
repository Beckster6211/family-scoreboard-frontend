import React, { useState, useEffect } from "react";

import Table from "../Table/table";

const url = "http://localhost:3000/family";

function Family() {
  const [family, setFamily] = useState([]);
  // const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [newFam, setNewFam] = useState({});

  useEffect(() => {
    async function getFam() {
      let response = await fetch(url);
      console.log(response);
      let { payload } = await response.json();
      console.log(payload);
      // let firstFam = payload[0];
      // console.log(firstFam);
      // setName(firstFam.name);
      // setScore(firstFam.score);
      setFamily(payload);
    }
    getFam();
  }, []);

  // async function addFam(event) {
  //   let response = await fetch(url, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(obj),
  //   });
  //   console.log(response);
  // }

  function handleChange(event) {
    const name = event.target.value;
    console.log(name);
    setNewFam({ ...newFam, [name]: score });
    console.log(newFam);
  }

  async function handleSubmit(event) {
    console.log(event);
    event.preventDefault();
    let obj = { ...family, newFam };
    console.log(obj);
    let response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    console.log(response);
    let data = await response.json();
    console.log(data);
  }

  // function deleteFam(id) {
  //   let response = fetch(`${url}/${id}`, {
  //     method: "DELETE",
  //   });
  //   let data = response.json();
  //   console.log(data);
  // }

  return (
    <div>
      <h3>Family</h3>
      <Table family={family} />
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>
          {/* <label>
            Score
            <input
              type="number"
              value={"0"}
              name="Score"
              onChange={handleChange}
            />
          </label> */}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Family;
