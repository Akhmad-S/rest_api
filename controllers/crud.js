let inMemoryData = {
    contacts: [],
    blogs: []
}

//create contact
const CreateContact = (req, res) => {
    let body = req.body

    if (!body.firstname) {
        res.status(400).send("Please, type your firstname")
        return
    } else if (!body.lastname) {
        res.status(400).send("Please, type your lastname")
        return
    } else if (!body.phone) {
        res.status(400).send("Please, type your phone")
        return
    }

    body.createAt = new Date()

    for (i = 0; i < inMemoryData.contacts.length; i++) {
        const element = inMemoryData.contacts[i]
        if (element.id == body.id) {
            res.status(400).send(`There is already a contact under this ${body.id} id`)
            return;
        }
    }

    inMemoryData.contacts.push(body)
    res.status(201).send("successfully created")
}

//read contacts
const ReadContacts = (req, res) => {
    if (inMemoryData.contacts.length == 0) {
        res.status(404).send("contact resource not found")
        return
    }
    res.json(inMemoryData.contacts)
}

//read contact by id
const ReadContactById = (req, res) => {
    let id = req.params.id
    let contact = inMemoryData.contacts.find(e => e.id == id)
    if (!contact) {
        res.status(400).send(`id:${id} this is contact not found`)
        return
    }
    res.status(200).json(contact)
}

//update contact
const UpdateContact = (req, res) => {
    let body = req.body

    let contact = inMemoryData.contacts.find(e => e.id == body.id)
    if (!contact) {
        res.status(400).send(`id:${body.id} this is contact not found`)
        return
    }

    for (let i = 0; i < inMemoryData.contacts.length; i++) {
        const element = inMemoryData.contacts[i];
        if (element.id == body.id) {
            body.createAt = inMemoryData.contacts[i].createAt
            body.updateAt = new Date()
            inMemoryData.contacts[i] = body
            break;
        }
    }
    res.status(200).send("successfully updated")
}

//delete contact
const DeleteContact = (req, res) => {
    let id = req.params.id

    let contact = inMemoryData.contacts.find(e => e.id == id)
    if (!contact) {
        res.status(400).send(`id:${id} this is contact not found`);
        return
    }

    inMemoryData.contacts = inMemoryData.contacts.filter(e => e.id != id)

    res.status(200).send("successfully deleted")

}




//create blog
const CreateBlog = (req, res) => {
    let body = req.body

    if (!body.title) {
        res.status(400).send("Please, type the title of blog")
        return
    }
    else if (!body.content) {
        res.status(400).send("Please, type the text of content")
        return
    }

    body.createAt = new Date()

    for (i = 0; i < inMemoryData.blogs.length; i++) {
        const element = inMemoryData.blogs[i]
        if (element.id == body.id) {
            res.status(400).send(`There is already a blog under this ${body.id} id`)
            return
        }
    }

    inMemoryData.blogs.push(body)
    res.status(201).send("successfully created")
}

//read blogs
const ReadBlogs = (req, res) => {
    if (inMemoryData.blogs.length == 0) {
        res.status(404).send("blog resources not found")
        return
    }
    res.json(inMemoryData.blogs)
}

//read blog by id
const ReadBlogById = (req, res) => {
    let idElement = req.params.id
    let blog = inMemoryData.blogs.find(e => e.id == idElement)

    if (!blog && count) {
        res.status(400).send(`id:${idElement} this is blog not found`)
        return
    }

    blog.viewCount += 1
    res.status(200).json(blog)
}

//update blog
const UpdateBlog = (req, res) => {
    let body = req.body

    let blog = inMemoryData.blogs.find(e => e.id == body.id)
    if (!blog) {
        res.status(400).send(`id:${body.id} this is contact not found`)
        return
    }

    for (i = 0; i < inMemoryData.blogs.length; i++) {
        const element = inMemoryData.blogs[i]
        if (element.id == body.id) {
            body.createAt = inMemoryData.blogs[i].createAt
            body.updateAt = new Date()
            inMemoryData.blogs[i] = body
            break;
        }
    }
    res.status(200).send("successfully updated")
}

//delete blog
const DeleteBlog = (req, res) => {
    let idElement = req.params.id
    let contact = inMemoryData.blogs.find(e => e.id == idElement)

    if (!contact) {
        res.status(400).send(`id:${idElement} this is blog not found`)
        return
    }
    inMemoryData.blogs = inMemoryData.blogs.filter(e => e.id != idElement)
    res.status(200).send("successfully deleted")
}


module.exports = {
    CreateContact, ReadContacts, ReadContactById, UpdateContact, DeleteContact, CreateBlog, ReadBlogs, ReadBlogById, UpdateBlog, DeleteBlog
}