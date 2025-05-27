let mongose=require('mongoose')
function mongoosedb(){
    mongose.connect('mongodb://localhost:27017/Pit_stop',{useunifiedtopology:true,useNewUrlParser: true})

    let connection=mongose.connection;
    connection.on('connected',()=>{
console.log("connection succesfully")
    })

    connection.on('error',()=>{
        console.log("problem to connect with datad base")
    })
}
mongoosedb();
module.exports=mongose
