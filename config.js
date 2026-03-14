window.APP_CONFIG = {
  // API_BASE:
  //   (location.hostname === "localhost" || location.hostname === "127.0.0.1")
  //     ? "http://localhost:4000"
  //     : "http://192.168.0.108:4000",
  API_BASE:
    location.hostname === "localhost"
      ? "http://localhost:4000"
      : location.hostname === "127.0.0.1"
        ? "http://127.0.0.1:4000"
        : "https://dhruvdentaldepotbackend-production.up.railway.app",
  SITE_URL: "https://ddent.co.in"
};
