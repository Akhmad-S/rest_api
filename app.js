const port = 3000;
const e = require("express");
const { json } = require("express");
const express = require("express");
const app = express();
const {CreateContact, ReadContacts, ReadContactById, UpdateContact, DeleteContact, CreateBlog, ReadBlogs, ReadBlogById, UpdateBlog, DeleteBlog} = require("./controllers/crud")
const {loggerMiddleWare, auth} = require("./middlewares/middlewares")
app.use(express.json())


app.use("/api", loggerMiddleWare)
app.use("/api/contacts", auth)


app.get("/", (req, res) => {
    res.send("The server is working...")
})


//contacts CRUD REST API

app.post("/api/contacts", CreateContact)
app.get("/api/contacts", ReadContacts)
app.get("/api/contacts/:id", ReadContactById)
app.put("/api/contacts", UpdateContact)
app.delete("/api/contacts/:id", DeleteContact)


//blogs CRUD REST API

app.post("/api/blogs", CreateBlog)
app.get("/api/blogs", ReadBlogs)
app.get("/api/blogs/:id", ReadBlogById)
app.put("/api/blogs", UpdateBlog)
app.delete("/api/blogs/:id", DeleteBlog)


app.listen(port, () => {
    console.log(`Server is started on port ${port}`)
})