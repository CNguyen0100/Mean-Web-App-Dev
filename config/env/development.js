// Set the 'development' environment configuration object
module.exports = {
    db: 'mongodb://localhost/CuongWeb',
    sessionSecret: 'developmentSessionSecret',

    facebook: {
        clientID: '2025364137477783',
        clientSecret: '2a575eb8f69e392d9cf023d0bb77814c',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback',
        profileFields: ['email','id', 'first_name', 'gender', 'last_name', 'picture']
    },
    google: {
        clientID: '177907504136-fp736glbm6f5nubb8n4neddhcn32n2qq.apps.googleusercontent.com',
        clientSecret: 'zYZaaa3pQuD29_FButb9_4pW',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }
};