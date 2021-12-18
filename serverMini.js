var http = require('http'); 
var url = require('url');

http
  .createServer(function (req, res) {
    
    res.writeHead(200, {
      "Content-Type": "text/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE", 
      "Access-Control-Allow-Headers": "X-Requested-With,content-type", 
      "Access-Control-Allow-Credentials": true,
    });

    var q = url.parse(req.url, true);
    var qdata = q.query;
    var accion = qdata.accion;
    let json_res = "";
    if (accion == "insert" || accion == "select" || accion == "update" || accion == "delete" ) {
      switch (accion) {
        
              case "insert":
                
                break;

              case "update":
                
                break;

              case "delete":
                
                break;

              case "select":
                  var days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
                  if(qdata.id >= 0 && qdata.id<=6){
                    json_res = JSON.stringify(days[qdata.id]); 
                  }else{
                    const fecha = new Date();
                    const diaActual = fecha.getDay();
                    
                    json_res = JSON.stringify(days[diaActual]); 
                  }
               
                res.end(json_res);
                break;

              default:
                let mensaje = {
                  mensaje: "Accion no definida!",
                  id: 0,
                  registros_insertados: 0,
                };
                 json_res = JSON.stringify(mensaje);
                res.end(json_res);
                break;
            }
    } else {
      let mensaje = {
        mensaje: "Accion no definida",
        id: 0,
        registros_insertados: 0,
      };
      let json_res = JSON.stringify(mensaje);
      res.end(json_res);
    }
  })
  .listen(8080);