class  PageController{
    index(req, res) {
        res.render("pages/index");
    }
}

module.exports = new PageController()