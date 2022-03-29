const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
      //Esta consulta debe revisarse ya que puede que haya un detalle al encontrar las tablas****
      conn.query('SELECT horario_especialista.resourceId, horario_especialista.startTime, horario_especialista.endTime, horario_especialista.daysOfWeek, especialista.title, especialista.id FROM horario_especialista INNER JOIN especialista ON especialista.id=horario_especialista.Especialista_idEspecialista INNER JOIN usuarios ON usuarios.idUsuarios=especialista.Usuarios_idUsuarios INNER JOIN sucursal ON usuarios.Sucursal_idSucursal = sucursal.idSucursal;', (err, suc) => {
       if (err) {
        res.json(err);
       }
       console.log(JSON.stringify(suc));
       res.render('fac_sucursal', {
          datas: JSON.stringify(suc), 
       });
      });
    });
  };

module.exports = controller;
