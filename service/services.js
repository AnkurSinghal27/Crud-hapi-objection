const CustomerData = require("../model/joi")

class Customer{
    async insertDetail(req,h){
        const{full_name,email,password,age,Ph_Number}=req.payload

        try {
            await CustomerData.query().insert(req.payload)
            return h.response('customerdetail inserted')
            
        } catch (error) {
           return h.response(err.message) 
        }
    }
    async getData(req,h){
        try {
            const d = await  CustomerData.query()
            console.log(d);
            return h.response(d)
        } catch (error) {
            return h.respose(err.message) 
        }
    }
    async updateData(req,h){
        const{full_name,email,password,age,Ph_Number}=req.payload

        try {
            const data = await  CustomerData.query().select('*').from('users_details').where('id',req.params.id).update(req.payload)
            console.log(data);
            return h.response(data)
        } catch (error) {
            return h.respose(err.message) 
        }
    }
    async deleteData(req,h){
        try {
            const data = await  CustomerData.query().deleteById(req.params.id)
            console.log(data);
            return h.response(data)
        } catch (error) {
            return h.respose(err.message) 
        }
    }
    async getDataById(req,h){
        try {
            const data = await  CustomerData.query().where('id',req.params.id)
            console.log(data);
            return h.response(data)
        } catch (error) {
            return h.respose(err.message) 
        }
    }
}

module.exports=Customer