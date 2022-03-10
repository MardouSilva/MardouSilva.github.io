module.exports = {
  apps: [
    {
      script: "app.js",
      cwd: "backend/",
      name: "Backend",
      watch: false,
    },
    {
      script: "server.js",
      cwd: "frontend/",
      name: "Frontend",
      watch: false,
    },
  ],
};
