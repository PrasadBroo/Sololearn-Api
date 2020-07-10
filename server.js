require('dotenv').config()
const express = require('express');
const app = express();
const request = require('request');
const cherio = require('cheerio');
const querystring = require('querystring');
const cors = require('cors');
const port = process.env.PORT || 3000;
var data2,video_id;
app.listen(port);
app.use(express.static('Website'));
app.use(cors());
app.use(express.json({limit:'1mb'}));
var myProxyList = require('./useragentlist');
var All_Info,some1;



 myUserAgents =  myProxyList.myUserAgents;


 app.get('/sololearn',(req,mainres)=>{

    var sololearn_id = req.query.sololearn_id

    let random = Math.floor(Math.random()*myUserAgents.length);
            var customHeaderRequest = request.defaults({
                headers: {
                    'User-Agent': myUserAgents[random]
                  }
            })
    
    customHeaderRequest.get('https://www.sololearn.com/Profile/'+sololearn_id,(err,res,body)=>{

    if(!err){

    
    

        const $ = cherio.load(body)

        const check = $('.content h1').text()
    
        if(check=='Page Not Found'){
            mainres.json({Error:"Maybe Provided Id Is Incorrect..:("});
            console.log('yuppp')
        }
        else{

        const user_name = $('.name').text().trim();
        const user_level = $('.detail div').first().text().replace(/\s\s+/g,'');
        const user_tottal_xp = $('.detail div').last().text().trim();
        const user_profile_pic_url = 'https://api.sololearn.com/Uploads/Avatars/'+sololearn_id+'.jpg';
        const user_cources_list = {};
        const user_codes_list = {};
        const user_certificates_list = {};


        $('.courseWrapper').each((index,ele)=>{

            const cource_name = $(ele).find('a').attr('title');
            const cource_xp = $(ele).find('.courseXp').text();
            
            user_cources_list[cource_name]=cource_xp;
           
        })
       

        $('.codeContainer').each((index2,el)=>{

            
            const code_text = $(el).find('.codeDetails a').text();
            var code_upvotes = $(el).find('.positive').html();
            if(code_upvotes==null){
                code_upvotes=0;
            }
            
            user_codes_list[code_text]=code_upvotes;
  
            
        })
        

    
        $('.certificate').each((index3,e)=>{
            const cert_name = $(e).find('.details').find('.title').text().trim();

            user_certificates_list[index3]=cert_name;
            
        })
        

        All_Info = {
            User_Basic_Info: {
                User_Name: user_name,
                User_Current_Level: user_level,
                User_Total_Xp: user_tottal_xp,
                User_Profile_Pic_Url: user_profile_pic_url
            },
            User_Courses_Xp_Info: user_cources_list,
            User_Codes_Upvotes_Info: user_codes_list,
            User_Completed_Courses_Info: user_certificates_list 
        }
        
        
        mainres.json(All_Info)
    }

    }
    else{
        mainres.json({Error:"Maybe Provided Id Is Incorrect..:("})
    }
        




})








})
