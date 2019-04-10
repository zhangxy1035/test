
//直接用console.time做统计
let getInfo  = function (req,res) {
    console.time("time");
    let sql = "select *  from info where  name= ?";
    let name = req.body.name;
    //应用mysql去数据库查询
    let con = sqlConfig.connection.query(sql,name,function (err,result) {
        res.send({data:data});
    });
    console.timeEnd("time");
}