const { User, validateUser } = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
    try {
        // Make sure all the nessccary data fields are filled in correctly
        const { error } = validateUser(req.body);
        if (error)
            return res.status(400).send(error.details[0].message);

        const { username, email, password, restrictions } = req.body;

        const emailExist = await User.findOne({ email });
        const usernameExist = await User.findOne({ username });

        if (emailExist)
            return res.status(409).send("Email Already Exist. Please Login");
        if (usernameExist)
            return res.status(409).send("Username Already Exist. Please Login");

        // Hash password
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashedPassword = await bcrypt.hash(password, salt);

        let user = new User({
            username,
            email: email.toLowerCase(),
            password: hashedPassword,
            restrictions: restrictions,
        });

        // create a token for user
        // let token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET_KEY, {});

        // store the user in the database
        user.save()
            .then((user) => {
                return res.status(201).send({
                    username: user.username,
                    email: user.email,
                });
            })
            .catch((error) => {
                return res.status(500).send(error.message)
            });
    }
    catch (error) {
        return res.status(400).send(error.message);
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password)
            return res.status(400).send("Please fill in all fields");

        const user = await User.findOne({ email });
        
        let token = null;
        if (user && (await bcrypt.compare(password, user.password))) {
            // create a token for user
            token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET_KEY, {});
        }
        else {
            return res.status(400).send("Invalid Email or Password");
        }
        
        user.token = token;

        return res.status(200).json({ user });
    }
    catch (error) {
        return res.status(400).send(error.message);
    }
}

exports.logout = async (req, res) => {

}

exports.googleLogin = async (req, res) => {
    /// TODO: OAUTH
}