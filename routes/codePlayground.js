require('dotenv').config()
const express = require("express");
const router = express.Router();
const cherio = require('cheerio');
const {makeRequest,randomUserAgent} = require('../helperFunctions');


let validRoutes = {
    forSection : ['trending','mostrecent','mostpopular'],
    forLang : ['web','kt','cpp','c','cs','java','py','php','rb','swift','all']
}

router.get('/playground/:section/:lang',validateRoute,async(mainreq,mainres)=>{
    let section = mainreq.params.section.toLowerCase();
    let lang = mainreq.params.lang.toLowerCase();
    if(lang=='all')lang='';
    let reqUrl = `https://www.sololearn.com/Codes?ordering=${section}&language=${lang}&page=1`;

    let options = {
        follow:0,
        headers:{
            "User-Agent": randomUserAgent(),
        }
    }

    const {res,err} = await makeRequest(reqUrl,options);
    
    if(res.ok && !err){
        let body = await res.text();
        const $ = cherio.load(body);
        let all_info = [];
        
        $('#publicCodes').find('.codeContainer').each((i,code)=>{
            let base_link = 'https://www.sololearn.com';
            let code_name = $(code).find('.codeDetails').find('.codeName a').text();
            let code_link = $(code).find('.codeDetails').find('.codeName a').attr('href');
            let code_lang = $(code).find('.iconContainer a').text();
            let code_upvotes = $(code).find('.codeDetails').find('.detailsWrapper .actions .vote p').text().slice(1);
            let code_published_date = $(code).find('.codeDetails').find('.detailsWrapper .authorDetails .texts .codeDate').text();
            let author_name = $(code).find('.codeDetails').find('.detailsWrapper .authorDetails .texts a').text();
            let author_profile = $(code).find('.codeDetails').find('.detailsWrapper .authorDetails .texts a').attr('href');


            return all_info.push({
                Code_By:author_name,
                Author_Profile:base_link+author_profile,
                Code_Langauge:code_lang,
                Code_Title:code_name,
                Code_Link:code_link,
                Code_Upvotes:code_upvotes,
                Publish_Date:code_published_date
            })
        });

        return mainres.json(all_info)
    }

   return mainres.json({message:'Error Occured.. Plz Retry'})

})

function validateRoute(req,res,next){
    let section = req.params.section.toLowerCase();
    let lang = req.params.lang.toLowerCase();
    if(!validRoutes.forSection.includes(section) || !validRoutes.forLang.includes(lang)){
       return res.json({Warning:'Invalid Args...'});
    }
    next();
    
    
}

module.exports = router;