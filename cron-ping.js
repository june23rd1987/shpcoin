//npm init -y
const { spawn } = require('child_process');// npm install child_process
const schedule = require('node-schedule');// npm install node-schedule




schedule.scheduleJob('* * * * *', function() {
  spawn('node', ['./src/cron/userCoins.js']);
  console.log('running task ./src/cron/userCoins.js');
});

schedule.scheduleJob('* * * * *', function() {
  spawn('node', ['./src/cron/checkin.js']);
  console.log('running task ./src/cron/checkin.js');
});

schedule.scheduleJob('* * * * *', function() {
  spawn('node', ['./src/cron/water.js']);
  console.log('running task ./src/cron/water.js');
});

schedule.scheduleJob('* * * * *', function() {
  spawn('node', ['./src/cron/boardgame.js']);
  console.log('running task ./src/cron/boardgame.js');
});

schedule.scheduleJob('* * * * *', function() {
  spawn('node', ['./src/cron/live.js']);
  console.log('running task ./src/cron/live.js');
});

schedule.scheduleJob('* * * * *', function() {
  spawn('node', ['./src/cron/luckydraw.js']);
  console.log('running task ./src/cron/luckydraw.js');
});

schedule.scheduleJob('* * * * *', function() {
  spawn('node', ['./src/cron/userCoins.js']);
  console.log('running task ./src/cron/userCoins.js');
});











