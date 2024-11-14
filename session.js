////////////////////////////////////////////////////////////////////////////////////////////////////////
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Sparky~LIFmUKbI#RIuk1X2LEXhwE8GObKbq-8Q0Mx6gNEQYBB_c7p9Fpz0",
};
