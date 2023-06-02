const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// const csrf = require('csurf');
const passport = require('passport');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const mysqlStore = require('express-mysql-session')(session);
const options = {
  host: 'mysql_db', // the host name MYSQL_DATABASE: node_mysql
  user: 'MYSQL_USER', // database user MYSQL_USER: MYSQL_USER
  password: 'MYSQL_PASSWORD', // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
  database: 'overlord' // database name MYSQL_HOST_IP: mysql_db
}
const sessionStore = new mysqlStore(options);

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
const db = require('./db');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.locals.pluralize = require('pluralize');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  name: 'crtc-scouting-session',
  secret: 'VEX-CTRC',
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  store: sessionStore,
  cookie: {
    maxAge: 1000 * 60 * 60 * 7,
    sameSite: true,
    secure: false
  }
}));
app.use(cors());
// app.use(csrf());
app.use(passport.authenticate('session'));
app.use(function(req, res, next) {
  var msgs = req.session.messages || [];
  res.locals.messages = msgs;
  res.locals.hasMessages = !! msgs.length;
  req.session.messages = [];
  next();
});
// app.use(function(req, res, next) {
//   res.locals.csrfToken = req.csrfToken();
//   next();
// });

// app.use('/', indexRouter);
app.use('/', authRouter);

// RMA
app.post('/insert-RMA', function(req, res) {
  db.query(`INSERT INTO RMA 
  (Name, Class_Day, Class_Time, Program, Team_Number, Total_Items, Issues,Issue_Quantity,Issue_Description,Progress) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
  [req.body.Name, req.body.ClassDay, req.body.ClassTime, req.body.Program, req.body.Team, req.body.Items, req.body.AllIssue,req.body.AllIssueQuantity,req.body.AllIssueDescription,req.body.Progress])
  res.send(req.body)
}) 


// STUDENT LIST
app.post('/student-list', (req, res) => {
  db.query(`SELECT 
              students.student_id, 
              students.fname, 
              students.lname, 
              students.class_id,
              students.team_id,
              students.hidden,
              classes.day, 
              classes.start_time, 
              classes.end_time, 
              classes.max_students, 
              programs.programname, 
              teams.name, 
              students.grade 
            FROM 
              students 
            LEFT JOIN 
              classes ON students.class_id = classes.class_id 
            LEFT JOIN 
              programs ON classes.program_id = programs.program_id 
            LEFT JOIN 
              teams ON students.team_id = teams.team_id 
            ORDER BY 
              students.lname ASC,
              students.fname`, function(err, results) {
    if (err) {
      console.log(err)
    } else {
      console.log(results)
    }
    res.send(results)
  });
});

// STUDENT LIST GET CLASSES
app.post('/student-list/classes', (req, res) => {
  db.query(`SELECT 
              class_id,
              day,
              start_time,
              end_time,
              max_students,
              program_id
            FROM 
              classes  
            ORDER BY 
              class_id`, function(err, results) {
    if (err) {
      console.log(err)
    } else {
      console.log(results)
    }
    res.send(results)
  });
});

// STUDENT LIST GET TEAMS
app.post('/student-list/teams', (req, res) => {
  db.query(`SELECT 
              teams.team_id,
              teams.name,
              teams.program_id,
              programs.programname
            FROM 
              teams  
            LEFT JOIN
              programs ON teams.program_id = programs.program_id
            ORDER BY 
              teams.team_id`, function(err, results) {
    if (err) {
      console.log(err)
    } else {
      console.log(results)
    }
    res.send(results)
  });
});

// STUDENT LIST ADD NEW ROW
app.post('/student-list/addrow', (req, res) => {
  db.query(`INSERT INTO 
              students (fname, lname, class_id, team_id, grade, hidden)
            VALUES 
              (?, ?, ?, ?, ?, ?)`, 
            [req.body.fname, req.body.lname, req.body.class_id, req.body.team_id, req.body.grade, req.body.hidden])
  res.send(req.body)
});

// STUDENT LIST EDIT ROW
app.post('/student-list/editrow', (req, res) => {
  db.query(`UPDATE
              students
            SET
              fname = ?,
              lname = ?,
              class_id = ?,
              team_id = ?,
              grade = ?,
              hidden = ?
            WHERE
              student_id = ?`, 
            [req.body.fname, req.body.lname, req.body.class_id, req.body.team_id, req.body.grade, req.body.hidden, req.body.student_id])
  res.send(req.body)
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    err_msg: err.message,
  });
});

module.exports = app;
