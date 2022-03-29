const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query('SELECT calendario.start, especialista.title, cabina.Nombre FROM calendario INNER JOIN especialista ON calendario.title = especialista.title INNER JOIN cabina ON calendario.resourceId = cabina.idCabina', (err, citfac) => {
        if (err) {
            res.json(err)
        }else {
            datafac = JSON.stringify(citfac);
            console.log(datafac);
        }
    });
      conn.query('SELECT horario_especialista.startTime, horario_especialista.endTime, horario_especialista.daysOfWeek, especialista.title FROM horario_especialista INNER JOIN especialista ON horario_especialista.especialista_idespecialista = especialista.id', (err, events) => {
       if (err) {
        res.json(err);
       }
       //console.log(JSON.stringify(events));
       res.render('facialistas', {
          data: JSON.stringify(events), 
       });
      });
    });
  };

  controller.mostrar = (req, res) => {
    req.getConnection((err, connection) => {
      conn.query('SELECT calendario.start, calendario.end, especialista.title, cabina.Nombre FROM calendario  INNER JOIN especialista ON calendario.title = especialista.title INNER JOIN cabina ON calendario.resourceId = cabina.idCabina WHERE especialista.title = "?"', (err, result) => {
        if (err) {
          res.json(err);
        }else {
          mostrar = result;
        }
      })
    })
  }


module.exports = controller;