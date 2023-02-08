const { response } = require('express')
const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', paginated_Result(User), async(req, res) => {
    res =  res.paginatedResult
})
 
function paginated_Result(model){
    return async (req, res, next)=> {

        try{    
            const page = parseInt(req.body.page)
            const limit = parseInt(req.body.limit)
            let next_page = 0
            let previous_page = 0
            const end_index = page*limit
            const start_index = ((page - 1) * limit) + 1
            const users = await User.find({})
            const total = users.length

            if(end_index <= total){
                if(end_index < total){
                    next_page = page + 1
                }
                if((start_index - limit) > 0){
                    previous_page = page - 1
                }
                let response = users.slice(start_index, end_index)

                const result = {
                    next : next_page,
                    previous : previous_page,
                    result : response
                }

                res.paginatedResult = res.status(200).json(result)
            }
            else{
                res.paginatedResult = res.status(404).json({errorMessage : "Not enough records"})
            }
            
            next()
        }
        catch (ex){
            res.paginatedResult = res.status(404).json({errorMessage : ex})
        }
    }
}

module.exports = router