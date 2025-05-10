import React, { useState, useEffect } from "react";
import axios from "axios";

export const Wheel = () => {
  const [rotation, setRotation] = useState(0);
  const [rotating, setRotating] = useState(false);
  const [winningIndex, setWinningIndex] = useState(null);
  const [prizes, setPrizes] = useState([]); // Список призов из БД

  const numPrizes = prizes.length;
  const sectorAngle = 360 / (numPrizes || 1); // Если призов нет, чтобы не делить на 0

  useEffect(() => {
    // Загружаем призы с сервера при монтировании компонента
    const fetchPrizes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/prizes');
        setPrizes(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке призов:", error);
      }
    };

    fetchPrizes();
  }, []);

  const spinWheel = () => {
    if (rotating || prizes.length === 0) return;

    setWinningIndex(null);

    const spins = 5; // количество полных оборотов
    const randomIndex = Math.floor(Math.random() * prizes.length);
    const randomAngle = randomIndex * sectorAngle;
    const finalRotation = (spins * 360) + (360 - randomAngle - (sectorAngle / 2));

    setRotation(finalRotation);
    setRotating(true);

    setTimeout(async () => {
      setRotating(false);
      setWinningIndex(randomIndex);

      // Сохраняем выигрыш в RewardService
      try {
        await axios.post('http://localhost:3002/api/rewards', {
          userId: 1, // пока можно захардкодить, потом будет авторизация
          prizeName: prizes[randomIndex].name || prizes[randomIndex] // зависит от формата данных
        });
      } catch (error) {
        console.error("Ошибка при сохранении выигрыша:", error);
      }
    }, 4000);
  };

  return (
    <div style={{ position: "relative", textAlign: "center", marginTop: "4rem" }}>
      <div className="win-arrow"></div>

      <div 
        className="wheel-container"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: rotating ? "transform 4s ease-out" : "none"
        }}
      >
        {prizes.map((_, index) => {
          const notchAngle = sectorAngle * index;
          return (
            <div
              key={`notch-${index}`}
              className="notch"
              style={{
                transform: `rotate(${notchAngle}deg) translate(140px)`
              }}
            />
          );
        })}

        {prizes.map((prize, index) => {
          const centerAngle = sectorAngle * (index + 0.5);
          return (
            <div
              key={index}
              className={`wheel-label${winningIndex === index ? " winning" : ""}`}
              style={{
                transform: `rotate(${centerAngle}deg) translate(110px) rotate(-${centerAngle}deg)`
              }}
            >
              {prize.name || prize}
            </div>
          );
        })}
      </div>

      <button onClick={spinWheel} disabled={rotating} style={{ marginTop: "1rem" }}>
        {rotating ? "Spinning..." : "Spin the Wheel"}
      </button>

      {winningIndex !== null && prizes[winningIndex] && (
        <div style={{ marginTop: "1rem", fontSize: "1.2rem", color: "purple" }}>
          You won: <span style={{ color: "gold" }}>{prizes[winningIndex].name || prizes[winningIndex]}</span>
        </div>
      )}
    </div>
  );
};
