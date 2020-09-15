const fetch = require("node-fetch");
const userAgents = require("./useragentlist");

async function makeRequest(url, options) {
    try {
        const res = await new fetch(url, options);
        return {res,err:false};
    } catch (error) {
        return {err: true};
    }
  
}

function validateSololearnId(sololearn_id) {
  return (
    sololearn_id == null ||
    sololearn_id == "" ||
    sololearn_id.trim() == null ||
    sololearn_id.trim() == " " ||
    sololearn_id.length >= 11 ||
    sololearn_id.length < 8
  );
}

function randomUserAgent(){
  let random = Math.floor(Math.random() * userAgents.length);
  return userAgents[random];
}

module.exports = {makeRequest,validateSololearnId,randomUserAgent};
