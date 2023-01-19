const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', async (req, res) => {
try {
  const tagData = await Tag.findAll();
  res.status(200).json(tagData);
} catch(err) {
  res.status(500).json(err);
}
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Tag, through: Product, as: 'tag_products' }]
    });
    if(!tagData) {
      res.status(404).json({message: 'No tags found with this id!'});
      return;
    }
    res.status(200).json(tagData);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch(err) {
    res.status(400).json(err);
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  // try {
  //   const tagData = await Tag.update(
  //     {
  //       tag_name: req.body.
  //     }
  //   )
  // }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
