/**
 * Created by Akash Sawant on 15/09/2017.
 */

const config = {
    db:{
        hostname: "localhost",
        port: "8000",
        dialect: "mysql",
        username: "weather",
        password: "1234",
        database: "weather"
    },

    weatherApp: {
        macAddress: "mac_address"
    }
};
module.exports = config;
