
const Logger = require("./logger");
let frontLogger = Logger.getLogger("Time");

let getInfo  = function (req,res) {
    let time1 = new Date().getTime();
    let sql = "select *  from info where  name= ?";
    let name = req.body.name;
    //应用mysql去数据库查询
    let con = sqlConfig.connection.query(sql,name,function (err,result) {
        res.send({data:data});
    });
    let time2 = new Date().getTime();
    frontLogger.info(time2-time1);
};