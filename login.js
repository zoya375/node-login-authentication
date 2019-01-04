var conn =require('./connect');
var g=conn();
module.exports=function login(username,password,response)
{
var  query='Select * from login_table where username=\''+username+'\' AND password=\''+password+'\'';
console.log(query);
g.query(query,function(error,result)
{
  if(error) throw error;
//  console.log(result);
if(result[0])
{
  response.writeHead(200,{'content-type': 'text/html'});
response.write('you are logged in');
response.end();
}
else {
  response.writeHead(200,{'content-type': 'text/html'});
response.write('wrong data');
response.end();
}
});
}
