const express = require('express')
const app = express()
const connection = require('../employee/database');

app.get('/', (req,res)=>{
    let sql = "SELECT * FROM EMP_DETAILS";
    connection.query(sql,function(err,results){
        if(err) return err;
        res.send(results);
    })
});

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log('server is runningon port ${PORT}');
    connection.connect(function(err){
        if(err) return err;
        console.log('Database connected!');
    })
});