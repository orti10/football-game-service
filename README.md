# Football Game Service

>### I worked on this assignment and wrote everything from scratch!
>### I had no prior knowledge of this programming language and learned a lot from this project.

This project is football game service which clients can use to get the fixtures (upcoming matches) and the results of football matches.

The data for the matches is available from the attached text files (aka Data origin, result_upcoming.csv, result_played.csv using [csvtojson](https://www.npmjs.com/package/csvtojson))

Build RESTful api - with node.js, express, Postman, Virtual Studio Code.

[Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), [Express](https://expressjs.com/en/starter/hello-world.html), [Postman](https://www.postman.com/)

Read more about [RESTful API](https://searchapparchitecture.techtarget.com/definition/RESTful-API)

### Server Functionality
##### The API support the next functionality:
1. Get list of matches by team.
2. Get list of matches by team filtered by status.
3. Get list of matches by tournament.
4. Get list of matches by tournament filtered by status.

### Usage
1. Download this project to your computer
```sh
git clone https://github.com/orti10/football-game-service.git
cd football-game-service
npm init
```

2. Install all dependencies
```sh
npm install
```

3. Run the project
```sh
npm start
```

### This is what should appear at this point:
![server](https://user-images.githubusercontent.com/44768171/137978684-893d918b-180f-4b7a-a68e-ea7303162e93.png)

4. Go to http://localhost:3000/  in your chrome browser OR use Postman 
(port 3000 or other, depends on what port the server is listening to)

### Postman:
![postman1](https://user-images.githubusercontent.com/44768171/137980526-57b04e3c-dfd0-4bd6-9026-533f31947ffa.png)
![postman2](https://user-images.githubusercontent.com/44768171/137980539-1d320597-21d8-45f3-aff4-4b863b705dc0.png)
![postman3](https://user-images.githubusercontent.com/44768171/137980548-dd91bce1-b0a6-4193-81f5-0ed4750e4bdb.png)
![postman4](https://user-images.githubusercontent.com/44768171/137980571-fe205b2a-9b0b-4052-b9b2-1bafaeebd6f1.png)

### Server + Postman:
![server+postman](https://user-images.githubusercontent.com/44768171/137980587-421cd916-e65c-4f92-a423-a06e31da934d.png)

