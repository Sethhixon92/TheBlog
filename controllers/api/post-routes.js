const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('==========');
  Post.findAll({
      attributes: ['id', 'post_url', 'title', 'created_at'],
      order: [['created_at', 'DESC']],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});