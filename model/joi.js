const Joi = require("@hapi/joi")
const{Model} = require("objection")
const db = require("../config/db_connection")
Model.knex(db)

class CustomerData extends Model {
    static get tableName(){
        return "customer_detail"
    }

    static get JoiSchema(){
        return Joi.object({
            id:Joi.number().integer().greater(0),
            full_name:Joi.string().min(1).max(50),
            email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password:Joi.string().min(8).max(16).required(),
            age:Joi.integer(),
            Ph_Number:Joi.required()

        })
    }
}

module.exports=CustomerData