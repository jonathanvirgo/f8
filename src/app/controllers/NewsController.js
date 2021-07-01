class NewsController {

    // GET news
    index(req, res){
        res.render('news');
    }

    // Get detail
    show(req, res){
        res.send("New Detail");
    }
}

module.exports = new NewsController;