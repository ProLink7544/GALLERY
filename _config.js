var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://pro:0723557337@cluster1.rw4kycu.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://pro:0723557337@cluster1.rw4kycu.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://pro:0723557337@cluster1.rw4kycu.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
