require('dotenv').config()
const express = require("express");
const router = express.Router();
const request = require("request");
const cherio = require('cheerio');
const {validateSololearnId,randomUserAgent} = require('../helperFunctions');

router.get("/sololearn", (req, mainres) => {
  let sololearn_id = req.query.sololearn_id.trim();
  if (validateSololearnId(sololearn_id)) {
    return mainres.json({
      Error: "sololearn_id must be valid",
    });
    
  }
  let customHeaderRequest = request.defaults({
      followRedirect:false,
        headers: {
        "User-Agent": randomUserAgent(),
        },
  });

  customHeaderRequest.get(
    "https://www.sololearn.com/Profile/" + sololearn_id,
    (err, res, body) => {
      if (!err && res.statusCode == 200) {
        const $ = cherio.load(body);
         
          const user_name = $(".name").text().trim();
          const user_level = parseInt(
            $(".detail div").first().text().replace(/\n/g, "").slice(5)
          );
          const user_tottal_xp = parseInt(
            $(".detail div").last().text().trim().slice(0, -3)
          );
          const user_profile_pic_url =
            "https://api.sololearn.com/Uploads/Avatars/" +
            sololearn_id +
            ".jpg";
          const user_cources_list = {};
          const user_codes_list = {};
          const user_certificates_list = [];
          const user_code_links_with_title = {};
          const user_badges = [];

          $(".courseWrapper").each((index, ele) => {
            const cource_name = $(ele).find("a").attr("title");
            const cource_xp = parseInt(
              $(ele).find(".courseXp").text().slice(0, -3)
            );

            user_cources_list[cource_name] = cource_xp;
          });

          $(".codeContainer").each((index2, el) => {
            const code_text = $(el).find(".codeDetails a").text();
            const code_link = $(el).find(".codeDetails a").attr('href');
            var code_upvotes = parseInt($(el).find(".positive").html());
            if (Number.isNaN(code_upvotes)) {
              code_upvotes = 0;
            }

            user_codes_list[code_text] = code_upvotes;
            user_code_links_with_title[code_text] = code_link;
          });

          $(".certificate").each((index3, e) => {
            const cert_name = $(e)
              .find(".details")
              .find(".title")
              .text()
              .trim();

            user_certificates_list.push(cert_name);
          });

          $('.userAchievements').find('.achievement').each((index,achive) =>{
              if($(achive).hasClass('disabled'))return;

              const badge_text = $(achive).attr('title');
              return user_badges.push(badge_text);
          })


          let All_Info = {
            User_Basic_Info: {
              User_Name: user_name,
              User_Current_Level: user_level,
              User_Total_Xp: user_tottal_xp,
              User_Profile_Pic_Url: user_profile_pic_url,
            },
            User_Courses_Xp_Info: user_cources_list,
            User_Codes_Upvotes_Info: user_codes_list,
            User_Completed_Courses_Info: user_certificates_list,
            User_Codes_Links: user_code_links_with_title,
            Earned_Badges: user_badges
          };

         return mainres.json(All_Info);
        
      } else {
        return mainres.json({ Error: "Maybe Provided Id Is Incorrect..:(" });
      }
    }
  );
});

module.exports = router;