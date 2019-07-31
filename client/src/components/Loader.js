import React, { useEffect, useRef } from "react";

const Loader = () => {
  const canvasEl = useRef();
  useEffect(() => {
    const canvas = canvasEl.current;
    const context = canvas.getContext("2d");

    const radius = canvas.width / 3;
    const angleStep = (Math.PI * 2) / 360;
    let theta = 0;

    //change frequencies for getting various curves
    const frequencyX = 5;
    const frequencyY = 5;

    window.requestAnimationFrame(draw);

    function draw() {
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.clearRect(0, 0, canvas.width, canvas.height);

      context.setTransform(1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
      context.beginPath();

      for (let angle = 0; angle < Math.PI * 2; angle += angleStep) {
        const x =
          Math.sin(angle * frequencyX + theta) *
          Math.cos(angle + theta) *
          radius;
        const y =
          Math.cos(angle * frequencyY) * Math.sin(angle + theta) * radius;
        if (angle === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
      }

      context.lineWidth = 4;
      context.strokeStyle = "#ffffff";
      context.stroke();
      context.miterLimit = 0.1;
      context.closePath();

      theta += 0.04;
      window.requestAnimationFrame(draw);
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <canvas
        ref={canvasEl}
        style={{
          backgroundColor: "#0A0C0D",
          borderRadius: "100%"
        }}
        width="200"
        height="200"
      />
    </div>
  );
};

export default Loader;
