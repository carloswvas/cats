const Publication = require('../models/Publication')

module.exports = class PublicationController{
    static async showPublication(request, response){
        try {
            const publications = await Publication.findAll({raw:true})
            response.render('home', {publications})
        } catch (error) {
            
        }
    }
}