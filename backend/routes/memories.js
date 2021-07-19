const router = require ('express').Router();
let Memories =require('../models/memories.model');

router.route('/').get((req,res) => {
    Memories.find()
    .then(memories => res.json (memories))
    .catch(err => res.status(400).json('Error: '+err));
});
router.route('/:username').get((req,res) => {
    Memories.find({ username : req.params.username})
    .then(memories => res.json (memories))
    .catch(err => res.status(400).json('Error: '+err));
});
router.route('/getData/:id').get((req,res) => {
    Memories.findById(req.params.id)
    .then(memories => res.json (memories))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/delete/:id').delete((req,res) => {
    Memories.findByIdAndDelete(req.params.id)
    .then(() => res.json ('Memories deleted.'))
    .catch(err => res.status(400).json('Error: '+err));
});
router.route('/update/:id').put((req,res) => {
    Memories.findByIdAndUpdate(req.params.id)
    .then(memories => {
        memories.username = req.body.username;
        memories.title =req.body.title;
        memories.description=req.body.description;
        memories.image=req.body.image;
      memories.save()
      .then(() => res.json ('Memories updated.'))
    .catch(err => res.status(400).json('Error: '+err));


    })
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res) =>{
  const username =req.body.username;
  const title =req.body.title;
  const description  =req.body.description;
  const image =req.body.image;
   


  const newMemories = new Memories({
      username,
      title,
      description,
      image
  });

  newMemories.save()
   .then(() => res.json('Memories added !'))
   .catch(err => res.status(400).json('Error :'+ err));

});

module.exports = router;