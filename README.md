<h1 align="center">Sololearn Api</h1>
<p align="center">
            Learn Playing Play Learning 
</p>


[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<img src="sololearn.png" alt="Banner" width="100%" height="300">

## Usage

Endpoints:

```sh
https://soloapi.herokuapp.com/sololearn  
```
```sh
https://soloapi.herokuapp.com/playground/:section/:language  
```

Query:

```sh
https://soloapi.herokuapp.com/sololearn?sololearn_id= your_sololean_id
```

# Usage example

  ## For User Basic Info.
  ```sh
  GET https://soloapi.herokuapp.com/sololearn?sololearn_id=13710268
  ```
  > Response 
 ```json 
 {
   "User_Basic_Info":{
      "User_Name":"Prasad Shinde",
      "User_Current_Level":11,
      "User_Total_Xp":7413,
      "User_Profile_Pic_Url":"https://api.sololearn.com/Uploads/Avatars/13710268.jpg"
   },
   "User_Courses_Xp_Info":{
      "HTML Fundamentals":1120,
      "Python 3 Tutorial":413,
      "JavaScript Tutorial":405,
      "CSS Fundamentals":200,
      "C Tutorial":172,
      "PHP Tutorial":0
   },
   "User_Codes_Upvotes_Info":{
      "Sololearn Api (Get Any User Information)":33,
      "Programming Quotes (Add Your Quote)":33,
      "Todo List":16,
      "Simple Weight Converter":21,
      "Node Passport Login Form":6,
      "Tic Tac Toe":7,
      "Memory Game v-2.0 (new-update)":12,
      "Analog Clock ":6,
      "Chrome Clone (Dark Theme)":4,
      "Login Form Challenge":11,
      "💥Hex Color Generator💥":1,
      "Weight_Converter":6
   },
   "User_Completed_Courses_Info":[
      "JavaScript Tutorial",
      "Python 3 Tutorial",
      "HTML Fundamentals"
   ],
   "User_Codes_Links":{
      "Sololearn Api (Get Any User Information)":"https://code.sololearn.com/WQNS46o0hre8/#",
      "Programming Quotes (Add Your Quote)":"https://code.sololearn.com/WE2mi1p6tVas/#",
      "Todo List":"https://code.sololearn.com/WLkhu69bnp8Y/#",
      "Simple Weight Converter":"https://code.sololearn.com/WTUKBR91pDhY/#",
      "Node Passport Login Form":"https://code.sololearn.com/Wy9xNd2y96w4/#",
      "Tic Tac Toe":"https://code.sololearn.com/WJTV39T4YsMr/#",
      "Memory Game v-2.0 (new-update)":"https://code.sololearn.com/WaDskxCt1P5j/#",
      "Analog Clock ":"https://code.sololearn.com/W1EGXzRPeFkE/#",
      "Chrome Clone (Dark Theme)":"https://code.sololearn.com/WidrfGNAm5D5/#",
      "Login Form Challenge":"https://code.sololearn.com/WrL52X3oz7WR/#",
      "💥Hex Color Generator💥":"https://code.sololearn.com/W3sgtxF8mW4c/#",
      "Weight_Converter":"https://code.sololearn.com/cTTdobrei2Qc/#"
   },
   "Earned_Badges":[
      "Code Master",
      "Hat Trick",
      "Developer",
      "Solution Ninja",
      "Coder",
      "Junior",
      "Solution Master",
      "Solver",
      "Gaining Experience",
      "Challenge Master",
      "Rising Star",
      "On Your Way to Fame",
      "Achiever",
      "Just Getting Started",
      "Answerer",
      "Intern",
      "Verified Account",
      "Engaged in!"
   ]
}
 ```
  
  ## For Coding Playground Info.
  ```sh
  GET https://soloapi.herokuapp.com/playground/trending/all
  ```
  > Responce
  
  ```josn
  [
   {
      "Code_By":"✨Tuktuk.💞...",
      "Author_Profile":"https://www.sololearn.com/Profile/18483801",
      "Code_Langauge":"web",
      "Code_Title":"🐼sweet panda🐼..........",
      "Code_Link":"https://code.sololearn.com/WTh260KniX9F/#",
      "Code_Upvotes":"327",
      "Publish_Date":"09/09/2020 18:27:06"
   },
   {
      "Code_By":"Aakaanksha 💕",
      "Author_Profile":"https://www.sololearn.com/Profile/12942084",
      "Code_Langauge":"web",
      "Code_Title":"Emoji City | Starry Night ✨🌁",
      "Code_Link":"https://code.sololearn.com/WjicF4PCH0WZ/#",
      "Code_Upvotes":"376",
      "Publish_Date":"09/12/2020 09:04:12"
   },
   {
      "Code_By":"Programmer",
      "Author_Profile":"https://www.sololearn.com/Profile/17904120",
      "Code_Langauge":"web",
      "Code_Title":"Music Player | ProMuze",
      "Code_Link":"https://code.sololearn.com/W9fk80oaHx4q/#",
      "Code_Upvotes":"728",
      "Publish_Date":"08/31/2020 02:29:06"
   },
   {
      "Code_By":"Namit Jain",
      "Author_Profile":"https://www.sololearn.com/Profile/18109487",
      "Code_Langauge":"web",
      "Code_Title":"🙌🔥 2048 GAME 🔥🙌 [v2.0]",
      "Code_Link":"https://code.sololearn.com/WAJUeWBPI78T/#",
      "Code_Upvotes":"329",
      "Publish_Date":"09/12/2020 16:36:07"
   },
   {
      "Code_By":"🔰 Justin 🔰",
      "Author_Profile":"https://www.sololearn.com/Profile/14229595",
      "Code_Langauge":"web",
      "Code_Title":"📱 2048 GAME 📱🎮 🔥🔥 [ Clone ] ",
      "Code_Link":"https://code.sololearn.com/WESocRH20GtA/#",
      "Code_Upvotes":"282",
      "Publish_Date":"09/14/2020 02:53:08"
   },
   {
      "Code_By":"Piyush",
      "Author_Profile":"https://www.sololearn.com/Profile/18482374",
      "Code_Langauge":"web",
      "Code_Title":"200+ followers celebration code 🔥🔥",
      "Code_Link":"https://code.sololearn.com/WX9685HyqBwp/#",
      "Code_Upvotes":"229",
      "Publish_Date":"09/14/2020 07:19:26"
   },
   {
      "Code_By":"LEARNER",
      "Author_Profile":"https://www.sololearn.com/Profile/14411701",
      "Code_Langauge":"web",
      "Code_Title":"POPULAR 𝐀𝐈+𝗚𝗼𝗼𝗱 🎲🔥 TANK 🔥𝗚𝗮𝗺𝗲-💕 💓👌",
      "Code_Link":"https://code.sololearn.com/W7R87b2eX30k/#",
      "Code_Upvotes":"323",
      "Publish_Date":"09/11/2020 20:44:41"
   },
   {
      "Code_By":"🔰 Justin 🔰",
      "Author_Profile":"https://www.sololearn.com/Profile/14229595",
      "Code_Langauge":"web",
      "Code_Title":"🎲Tic Tac toe 🎮🎲[ Game ]1⃣:0⃣",
      "Code_Link":"https://code.sololearn.com/Wt71382SUaU8/#",
      "Code_Upvotes":"257",
      "Publish_Date":"09/06/2020 11:42:14"
   },
   {
      "Code_By":"Ankita ⓎⒶⒹⒶⓋ",
      "Author_Profile":"https://www.sololearn.com/Profile/16880697",
      "Code_Langauge":"web",
      "Code_Title":"Doraemon❤️| Pure CSS 😍",
      "Code_Link":"https://code.sololearn.com/Wj7dV8QJ4T8M/#",
      "Code_Upvotes":"242",
      "Publish_Date":"09/11/2020 02:44:28"
   },
   {
      "Code_By":"Aakaanksha 💕",
      "Author_Profile":"https://www.sololearn.com/Profile/12942084",
      "Code_Langauge":"web",
      "Code_Title":"AAA (Ask Aakaanksha💕 Anything)",
      "Code_Link":"https://code.sololearn.com/WGPTMQNNB43Z/#",
      "Code_Upvotes":"248",
      "Publish_Date":"08/31/2020 18:09:03"
   },
   {
      "Code_By":"Michael Xanthopoulos",
      "Author_Profile":"https://www.sololearn.com/Profile/908973",
      "Code_Langauge":"cpp",
      "Code_Title":"Find the Day of the Week You Were Born!",
      "Code_Link":"https://code.sololearn.com/cnfGEnsULrcA/#cpp",
      "Code_Upvotes":"17145",
      "Publish_Date":"08/11/2018 13:59:59"
   },
   {
      "Code_By":"🔰 Justin 🔰",
      "Author_Profile":"https://www.sololearn.com/Profile/14229595",
      "Code_Langauge":"web",
      "Code_Title":"Solo_Editor PRO🔥🔥 [ Update 2⃣•0⃣]",
      "Code_Link":"https://code.sololearn.com/WUngHn2WqcwJ/#",
      "Code_Upvotes":"335",
      "Publish_Date":"08/31/2020 10:13:37"
   },
   {
      "Code_By":"Priyanshi💞",
      "Author_Profile":"https://www.sololearn.com/Profile/13000293",
      "Code_Langauge":"web",
      "Code_Title":"😲 Game. 😲Rock Paper Scissor🔥🔥🔥",
      "Code_Link":"https://code.sololearn.com/WJ629OsXnuJd/#",
      "Code_Upvotes":"211",
      "Publish_Date":"09/15/2020 08:53:26"
   },
   {
      "Code_By":"ㅤㅤㅤㅤ ɒʞiʜꙅᴎA 🎵🎶",
      "Author_Profile":"https://www.sololearn.com/Profile/18653347",
      "Code_Langauge":"web",
      "Code_Title":"Frosty night #ninthcode",
      "Code_Link":"https://code.sololearn.com/WDTl4kIHR3Ru/#",
      "Code_Upvotes":"211",
      "Publish_Date":"09/10/2020 13:42:18"
   },
   {
      "Code_By":"Ashutosh Agrawal",
      "Author_Profile":"https://www.sololearn.com/Profile/10779261",
      "Code_Langauge":"web",
      "Code_Title":"My Portfolio",
      "Code_Link":"https://code.sololearn.com/WEypbTZMLcEm/#",
      "Code_Upvotes":"220",
      "Publish_Date":"09/14/2020 15:36:39"
   },
   {
      "Code_By":"ANMOL",
      "Author_Profile":"https://www.sololearn.com/Profile/18717961",
      "Code_Langauge":"web",
      "Code_Title":"👀+phone = iphone[100% working]",
      "Code_Link":"https://code.sololearn.com/W9v2k9gcALBa/#",
      "Code_Upvotes":"268",
      "Publish_Date":"09/14/2020 04:10:02"
   },
   {
      "Code_By":"Farhanaz 🌟",
      "Author_Profile":"https://www.sololearn.com/Profile/12155759",
      "Code_Langauge":"web",
      "Code_Title":"Cute Friendly doggo",
      "Code_Link":"https://code.sololearn.com/W0S3TgF4wC5B/#",
      "Code_Upvotes":"292",
      "Publish_Date":"09/05/2020 09:30:19"
   },
   {
      "Code_By":"Pude [#ChildofGod]😇🌹😘🇳🇬",
      "Author_Profile":"https://www.sololearn.com/Profile/14505522",
      "Code_Langauge":"web",
      "Code_Title":"💞Easy | How to Insert CSS Icons into your code",
      "Code_Link":"https://code.sololearn.com/W9O8FfOM1VNJ/#",
      "Code_Upvotes":"237",
      "Publish_Date":"09/13/2020 08:53:01"
   },
   {
      "Code_By":"Big Secret",
      "Author_Profile":"https://www.sololearn.com/Profile/18050446",
      "Code_Langauge":"web",
      "Code_Title":"Barcode Generator",
      "Code_Link":"https://code.sololearn.com/WxNO5BUNivw1/#",
      "Code_Upvotes":"197",
      "Publish_Date":"09/11/2020 10:13:42"
   },
   {
      "Code_By":"🔥Destiny Travolta🔥",
      "Author_Profile":"https://www.sololearn.com/Profile/19464664",
      "Code_Langauge":"swift",
      "Code_Title":"Need For Speed.",
      "Code_Link":"https://code.sololearn.com/c1GrmyayUMq2/#swift",
      "Code_Upvotes":"174",
      "Publish_Date":"09/03/2020 20:54:31"
   }
]
  ```
  > In This Example You Need To Pass Two Params First :section eg.Trending,MostRecent,MostPopular etc
  And Second Parameter is :language to get specific language list of objects eg.web,py,java,c etc.
 
  * section parameters
    * Trending
    * MostRecent
    * MostPopular
    
  * language parameters
    * web
    * c
    * cs
    * cpp
    * java
    * kt
    * py
    * php
    * swift
    * all
  

## Release History

* v1
    * CHANGE: Formatted Code.


Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/PrasadBroo/Sololearn-Api/](https://github.com/PrasadBroo/)

## Contributing

1. Fork it (<https://github.com/PrasadBroo/Sololearn-Api/fork>)
2. Commit your changes (`git commit -am 'some changes made'`)
4. Push to the branch (`git push origin master`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/PrasadBroo/Sololearn-Api/
[contributors-shield]: https://img.shields.io/github/contributors/PrasadBroo/Sololearn-Api.svg?style=flat-square
[contributors-url]: https://github.com/PrasadBroo/Sololearn-Api/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/PrasadBroo/Sololearn-Api.svg?style=flat-square
[forks-url]: https://github.com/PrasadBroo/Sololearn-Api/network/members
[stars-shield]: https://img.shields.io/github/stars/PrasadBroo/Sololearn-Api.svg?style=flat-square
[stars-url]: https://github.com/PrasadBroo/Sololearn-Api/stargazers
[issues-shield]: https://img.shields.io/github/issues/PrasadBroo/Sololearn-Api.svg?style=flat-square
[issues-url]: https://github.com/PrasadBroo/Sololearn-Api/issues
[license-shield]: https://img.shields.io/github/license/PrasadBroo/Sololearn-Api.svg?style=flat-square
[license-url]: https://github.com/PrasadBroo/Sololearn-Api/blob/master/LICENSE.txt

