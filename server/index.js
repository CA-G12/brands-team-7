const app = require('./app');
const port = app.get('port');


app.listen(port,()=>{
console.log(`SERVER is Running on the port ${port}`)
});
