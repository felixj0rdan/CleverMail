const Image = require("../models/image");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const { sortBy } = require("lodash");


exports.createImage = (req,res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
  
    form.parse(req,(err,fields,file)=>{
      if(err){
        return res.status(400).json({
          error:"problem with the image"
        })
      }
      //destructure fields
      const {name} = fields;
  
      if(
        !name
      ){
        return res.status(400).json({
          error:"please include all fileds"
        })
      }
    
  
  
      
      let image = new Image(fields); 
      //handle file here
      if(file.photo){
        if(file.photo.size > 3000000){
          return res.status(400).json({
            error:"size of the file is too big"
          })
        }
        image.photo.data = fs.readFileSync(file.photo.path);
        image.photo.contentType = file.photo.type;
  
      }
    console.log(image);
  
  
      //save to db
      image.save((err,image)=>{
        if(err){
          return res.status(400).json({
            err:"cant save to the db"
          })
        }
        res.json(image);
        
      })
    })
  };

  exports.getImages =(req,res) =>{
    let limit = req.query.limit ? parseInt(req.query.limit) : 8;
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id"; 
 
    Image.find()
      
      
      .sort([[sortBy, "asc"]])
      .limit(limit)
      .exec((err,images)=>{
        if(err){
            return res.status(400).json({
                error:"no products found"
            });
        }
        res.json(images);
    })
  }



  exports.photo = (req,res,next) =>{
    if(req.image.photo.data){
      res.set("Content-Type",req.image.photo.contentType);
      return res.send(req.image.photo.data);
    }
    
    next();
  }


  exports.getImageById = (req, res, next, id) => {
    console.log(id);
    Image.findById(id)
      
      .exec((err, image) => {
        console.log(image)
        if (err) {
          return res.status(400).json({
            error: "image not found in DB"
          });
        }
        req.image = image;
        next();
    });
  };

