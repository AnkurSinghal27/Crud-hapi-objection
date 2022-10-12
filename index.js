const hapi = require("@hapi/hapi")
const Customer= require("./service/services")
const router = new Customer();


const init = async()=>{
    const server= hapi.server({
        port:3030,
        host:'localhost'
    })

    server.route({
        method:"POST",
        path:"/insert",
        handler:router.insertDetail
    });
    server.route({
        method:'GET',
        path:'/getall',
        handler:router.getData   
    });
    server.route({
        method:'PUT',
        path:'/update/{id}',
        handler:router.updateData
        
    });
    server.route({
        method:'DELETE',
        path:'/del/{id}',
        handler:router.deleteData
        
    });
    server.route({
        method:'GET',
        path:'/Data/{id}',
        handler:router.getDataById
        
    });


    await server.start();
    console.log("server running on",server.info.uri);
};
process.on('unhandledRejection',(err)=>{
    console.log(err);
})

init();