const mongoose = require("mongoose");

const url =
"mongodb+srv://admin_user:admin@cluster0.0niml.mongodb.net/quora-clone-new?retryWrites=true&w=majority"

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
