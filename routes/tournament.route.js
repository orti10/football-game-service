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

function Get_list_of_matches_by_tournament(name){
    let game_type = t=>t.tournament == name;
    let playedGamesByTournament = playedGamesData[0].filter(game_type);
    let upcomingGamesByTournament = upcomingGamesData[0].filter(game_type);
    let matchByTournament = playedGamesByTournament.concat(upcomingGamesByTournament);
    return matchByTournament;
}

function Get_list_of_matches_by_tournament_by_status(name, status){
    let currentData;
    let game_type = t=>t.tournament == name;
    if(status == "played"){
        currentData = playedGamesData;
    }
    else if(status == "upcoming"){
        currentData = upcomingGamesData;
    }
    let matchByStatus = currentData[0].filter(game_type);
    return matchByStatus;
}
   

//==========================================================================
// Create a simple GET request that returns a list of matches by tournament.
router.get("/tournament/:name", (req, res, next)=>{
    const tournamentName = req.params.name;
    res.json(Get_list_of_matches_by_tournament(tournamentName));
    console.log("Get list of matches by tournament: " + tournamentName);
   });


//==========================================================================
// Create a simple GET request that returns a list of matches by tournament filtered by status.
router.get("/tournament/:name/:status", (req, res, next)=>{
    const tournamentName = req.params.name;
    const matchStatus = req.params.status;
    res.json(Get_list_of_matches_by_tournament_by_status(tournamentName, matchStatus));
    console.log("Get list of matches by tournament filtered by status: " + tournamentName + ", " + matchStatus);

   });
//==========================================================================

module.exports = router;