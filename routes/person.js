const express=require("express");
const personRouter= express.Router();
const Person=require("../models/person")

//add person
//methode :Post
personRouter.post("/add",async(req,res)=>{
try{
    const newPerson=new Person(req.body);
    let result= await newPerson.save();
    res.send({result:result,msg:"person added"});
}
catch(error){
console.log(error)
}
});

//get all person
//methode :get

personRouter.get("/",async(req,res)=>{
    try{
        let result = await Person.find();
        res.send({
             persons:result,msg:"all persons" });
    } catch (error){
        console.log(error);
    }
})

//get one person
//methode :get

personRouter.get("/:id",async(req,res)=>{
    try{
        let result = await Person.findOne({id:req.params.id});
        res.send({
             persons:result,msg:"one person" });
    } catch (error){
        console.log(error);
    }
})


//update person
//methode :put

personRouter.put("/:id",async(req,res)=>{
    try{
        let result = await Person.findOneAndUpdate({
            id :req.params.id,
            $set : { ...req.body},
        });
        res.send({newPerson:result,msg:"person updated"})
    } catch(error) {
        console.log(error)
    }
})


//delete person
//methode :delet

personRouter.delete("/:id",async(req,res)=>{
    try{
        let result = await Person.findOneAndRemove({
            id :req.params.id,
        });
        res.send({msg:"person deleted"})
    } catch(error) {
        console.log(error)
    }
})

//delete person
//methode :delet many

// personRouter.delete("/:name",async(req,res)=>{
//     try{
//         let result = await Person.findAndRemove({
//             id :req.params.id,
//             name:req.params.name,
//         });
//         res.send({msg:"person deleted"})
//     } catch(error) {
//         console.log(error)
//     }
// })
module.exports=personRouter;