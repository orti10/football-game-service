const express = require('express');
const router = express();
// csvtojson module is a comprehensive nodejs csv parser to convert csv to json or column arrays
const csv = require('csvtojson');

const playedGamesData = initializePlayedGamesData();
const upcomingGamesData = initializeUpcomingGamesData();

function initializePlayedGamesData(){
    let data = []; 
    let csvFilePath = "result_played.csv";
    csv()
    .fromFile(csvFilePath)
    .then((jsonObject)=>{
        playedGamesData.push(jsonObject);
    })
    return data; 
}


function initializeUpcomingGamesData(){
    let data = []; 
    let csvFilePath = "result_upcoming.csv";
    csv()
    .fromFile(csvFilePath)
    .then((jsonObject)=>{
        upcomingGamesData.push(jsonObject);
    })
    return data; 
}


// this middlware enables the express router to handle post requests with a json body

function Get_list_of_matches_by_team(name){
    let team_type = t=>t.home_team == name || t.away_team == name;
    // The filter() method creates a new array with all elements 
    // that pass the test implemented by the provided function.
    // callbackFn
    let playedGamesByTeam = playedGamesData[0].filter(team_type);
    let upcomingGamesByTeam = upcomingGamesData[0].filter(team_type);
    // The concat() method is used to merge two or more arrays. 
    // This method does not change the existing arrays, but instead returns a new array
    let matchByTeam = playedGamesByTeam.concat(upcomingGamesByTeam);
    return matchByTeam;
}

function Get_list_of_matches_by_team_by_status(name, status){
    let currentData;
    let team_type = t=>t.home_team == name || t.away_team == name;
    if(status == "played"){
        currentData = playedGamesData;
    }
    else if(status == "upcoming"){
        currentData = upcomingGamesData;
    }
    let matchByStatus = currentData[0].filter(team_type);
    return matchByStatus;
}
router.use

//==========================================================================
// Create a simple GET request that returns a list of matches by team.
router.get("/team/:name", (req, res, next)=>{
    const teamName = req.params.name;
    res.json(Get_list_of_matches_by_team(teamName));
    console.log("Get list of matches by team: " + teamName);
   });


//==========================================================================
// Create a GET request that returns a list of matches by team filtered by status.
router.get("/team/:name/:status", (req, res, next)=>{
    const teamName = req.params.name;
    const matchStatus = req.params.status;
    res.json(Get_list_of_matches_by_team_by_status(teamName, matchStatus));
    console.log("Get list of matches by team filtered by status: " + teamName +", " + matchStatus);
});

module.exports = router;