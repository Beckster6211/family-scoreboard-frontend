import React, { useState } from "react";

import Row from "../Row/row";

function Table({ family }) {
  // const [score, setScore] = useState(0)
  // const url = "http://localhost:3000/family";

  // function deleteFam(id) {
  //   let response = fetch(`${url}/${id}`, {
  //     method: "DELETE",
  //   });
  //   let data = response.json();
  //   console.log(data);
  // }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>+</th>
            <th>-</th>
            <th>X</th>
          </tr>
        </thead>
        <tbody>
          {family.map((person, index) => {
            return (
              <Row
                name={person.name}
                score={person.score}
                index={index}
                key={person.id}
                id={person.id}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
