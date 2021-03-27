const express = require( 'express' );
const mongoose = require( 'mongoose' );
const config = require( './config' );

// const stationController = require( './controllers/station.controller' );
// const tripController = require( './controllers/trip.controller' );
// const userController = require( './controllers/user.controller' );
// const ticketController = require( './controllers/ticket.controller' );

const APP_PORT = config.PORT || 5000;
const MONGO_URI = config.MONGO_URI || `mongodb://localhost:27017`;

const app = express();

const api = '/api';

app.use( express.json() );
app.use( '/images', express.static( 'images' ) );

// app.use( api, stationController );
// app.use( api, tripController );
// app.use( api, userController );
// app.use( api, ticketController );


app.listen(
  APP_PORT,
  () => console.log( `App is runnng at http://localhost:${ APP_PORT }` )
);

mongoose.connect(
  `${ MONGO_URI }/vexere-api`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then( () => console.log( `Connected to database ${ MONGO_URI }/vexere-api successfully !` ) )
  .catch( ( error ) => console.log( error ) );

