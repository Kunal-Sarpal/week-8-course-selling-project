require('dotenv').config()
console.log(process.env.MONGO_URL)
const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const { mongoose } = require("mongoose");
const app = express();
app.use(express.json());


app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

<<<<<<< HEAD
async function main(){
    await mongoose.connect("mongodb+srv://100xdevs:WvaTca0509mb90YX@cluster0.ossjd.mongodb.net/coursera-app")
    app.listen(3000);

}
main();
=======
async function main() {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(3000);
    console.log("listening on port 3000")
}

main()
>>>>>>> a7fd127c11fe54ea2e9a2c4fb68b2727fd5149c6
