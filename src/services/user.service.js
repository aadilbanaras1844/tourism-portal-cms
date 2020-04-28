
const { usersModel } = require("../models");
const { encryptPassword, comparePassword } = require("./../helpers");

module.exports.createUser = ( params ) => {
    return new Promise(async function(resolve, reject){

        try {
            let user = await usersModel.findOne({ email: params.email });
            if (user) return reject(new Error("User already registered."));

            const newUser = new usersModel( params );
            newUser.password = await encryptPassword(newUser.password);

            const userAdded = await newUser.save();
            const token = newUser.generateAuthToken();
            return resolve({user: userAdded, token})              
        } catch (error) {
            return reject(error)
        }
      

    })
};

module.exports.loginUser = ( email, password ) => {
    return new Promise(async function(resolve, reject){

        //find an existing user
        let user = await usersModel.findOne({ email: email });
        if (!user) return reject(new Error("User not found"));
        const passwordMatch = await comparePassword(password, user.password);
        if( passwordMatch ){
            const token = user.generateAuthToken();
            
            return resolve({
                token: token,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.contact_email,
                is_organiser: user.is_organiser,
                is_traveller: user.is_traveller
            }) 
       }
       else {
        return reject(new Error("Password mismatch"));
       }

    })
};

module.exports.loginAdmin = ( email, password ) => {
    return new Promise(async function(resolve, reject){

        //find an existing user
        let user = await usersModel.findOne({ email: email, $or:[ { is_admin: true }, { is_manager: true } ] });
        if (!user){
            return resolve(null);
        };
        if (!user.is_active){
            return reject(new Error('User not disabled, please contact admin.'));
        };
        const passwordMatch = await comparePassword(password, user.password);
        if( !passwordMatch )
            return resolve( null )
        if( passwordMatch ){
            const token = user.generateAuthToken();
            return resolve({
                token: token,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.contact_email,
                is_admin: user.is_admin,
                is_manager: user.is_manager,
            }) 
       }
        return resolve( null );
    })
};



