function create(req, res) {
    console.log('we are now in the backend in controllers')
    res.json({
        user: {
          name: req.body.name,
          email: req.body.email
        }
      });
}

module.exports = {
    create
}