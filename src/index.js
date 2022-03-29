const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myConnection'),
      flash = require('connect-flash');
      session = require('express-session');

var session = require('express-session');

const app = express();

//importing routes 
const loginRoutes = require('./routes/loginRoute');
const agendarCRoutes = require('./routes/agendarCRoute');
const calendarioRoutes = require('./routes/calendarioRoute');
const ccenterRoutes = require('./routes/ccenterRoute');
const facialistasRoutes = require('./routes/facialistasRoute');
const fac_sucursalRoutes = require('./routes/fac_sucursalRoute');
const clientesccRoutes = require('./routes/clientesccRoute');
const configRoutes = require('./routes/configRoute');
const marcasRoutes = require('./routes/marcasRoute');
const addsucursalRoutes = require('./routes/add_sucursalRoute');
const sucursalesRoutes = require('./routes/sucursalesRoute');
const tecnologiasRoutes = require('./routes/tecnologiasRoute');
const addtecRoutes = require('./routes/add_tecRoute');
const addcabinaRoutes = require ('./routes/add_cabinaRoute');
const usuariosRoutes = require('./routes/usuariosRoute');
const adduserRoutes = require('./routes/add_userRoute');
const rol_userRoutes = require('./routes/rol_userRoute');
const addrolRoutes = require('./routes/add_rolRoute');
const horario_espRoutes = require ('./routes/horario_espRoute');
const serviciosRoutes = require('./routes/serviciosRoute');
const addservRoutes = require('./routes/add_servRoute');
const contactcRoutes = require('./routes/contactcRoute');
const rClienteRoutes = require('./routes/rClienteRoute');
const rVentaRoutes = require('./routes/rVentaRoute');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'codeforgeek',
  saveUninitialized: true,
  resave: true
}));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'Admin_02',
  password: 'L5u9aA-@m/C3DgsK',
  port: 3306,
  database: 'database_app'
}, 'single'));
app.use(express.urlencoded({extended: false}));

app.use(flash());

//routes
app.use('/', loginRoutes);
app.use('/agendarC', agendarCRoutes);
app.use('/calendario', calendarioRoutes);
app.use('/ccenter', ccenterRoutes);
app.use('/facialistas', facialistasRoutes);
app.use('/fac_sucursal', fac_sucursalRoutes);
app.use('/clientescc', clientesccRoutes);
app.use('/config', configRoutes);
app.use('/marcas', marcasRoutes);
app.use('/add_sucursal', addsucursalRoutes);
app.use('/sucursales', sucursalesRoutes);
app.use('/tecnologias', tecnologiasRoutes);
app.use('/add_tec', addtecRoutes);
app.use('/add_cabina', addcabinaRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/add_user', adduserRoutes);
app.use('/rol_user', rol_userRoutes);
app.use('/add_rol', addrolRoutes);
app.use('/horario_especialista', horario_espRoutes);
app.use('/servicios', serviciosRoutes);
app.use('/add_serv', addservRoutes);
app.use('/contactc', contactcRoutes);
app.use('/rCliente', rClienteRoutes);
app.use('/rVenta', rVentaRoutes);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
  console.log('Si servio!!')
})

