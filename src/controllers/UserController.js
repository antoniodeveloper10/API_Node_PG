const User = require('../models/User');

module.exports = {
async index(req,res){
    const users = await User.findAll();
    return res.json(users);

},

async Store(req, res){
        const {name ,email} = req.body;
        return res.json(name);
        //const user = await User.create({name, email});

        //return res.json(user);
}
};