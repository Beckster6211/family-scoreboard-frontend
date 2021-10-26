import React, { useState } from "react";

// import Button from "../Button/button";

function Row({ id, name }) {
  const [score, setScore] = useState(0);

  function addToScore() {
    console.log(name);
    console.log(score);
    setScore(score + 1);
    console.log(score);
  }

  function minusScore() {
    console.log(name);
    console.log(score);
    setScore(score - 1);
    console.log(score);
  }

  const url = "http://localhost:3000/family";

  async function deleteFam() {
    console.log("button pressed");
    console.log(id);
    let response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    let data = await response.json();
    console.log(data);
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{score}</td>

      {/* <Button onClick={() => addToScore} symbol={"+"} />
      <Button symbol={"-"} />
      <Button symbol={"X"} /> */}
      <td>
        <button
          onClick={() => {
            addToScore();
          }}
        >
          +
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            minusScore();
          }}
        >
          -
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            deleteFam();
          }}
        >
          X
        </button>
      </td>
    </tr>
  );
}

export default Row;
