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
        clientID: '625278696319-j4psk0ov44kj3dqc823su5rdcfeq9t5q.apps.googleusercontent.com',
        clientSecret: 'pCdFtDxOV72H0_XOTshw4bvC',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }
};
