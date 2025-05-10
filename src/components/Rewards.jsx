import React, { useEffect, useState } from "react";
import axios from "axios";

export const Rewards = () => {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    axios.get("/api/rewards")
      .then(response => setRewards(response.data))
      .catch(error => console.error("Ошибка загрузки выигрышей:", error));
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>История выигрышей</h1>
      {rewards.length === 0 ? (
        <p>Нет выигрышей пока что.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {rewards.map((reward, index) => (
            <li key={index} style={{ margin: "1rem 0", fontSize: "1.2rem" }}>
              🎁 {reward.prize}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
