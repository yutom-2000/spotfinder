const MONGODB_URL =
  process.env.NODE_ENV.trim() === "dev"
    ? "mongodb://localhost:27017/spotfinder"
    : "mongodb+srv://db_design:LQRzHX0nEXM8bONY@cluster0.ym2cj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports = {
  MONGODB_URL,
};
