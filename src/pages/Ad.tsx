import { useEffect } from "react";

const Ad = () => {
  useEffect(() => {
    localStorage.setItem("watched", "true");
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", () => alert("bye!"));
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        alert("hidden!");
      }
    });
  }, []);

  return (
    <main
      style={{
        fontSize: 80,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      광고
    </main>
  );
};

export default Ad;
