"use strict"
/* -------------------------------------------------------*/
const { mongoose } = require('../configs/dbConnection')
/* -------------------------------------------------------*
{
    "flightNumber": "CN-YZ-001",
    "airline": "EKR",
    "departure": "CANKIRI",
    "departureDate": "2023-10-01 15:43:21",
    "arrival": "YOZGAT",
    "arrivalDate": "2023-10-01 17:43:21",
    "createdId": "652ceaa1bae9cde5e8a97522"
}
{
  "flightNumber": "YZ-CR-002",
  "airline": "THY",
  "departure": "YOZGAT",
  "departureDate": "2023-10-01 16:41:21",
  "arrival": "CORUM",
  "arrivalDate": "2023-10-01 18:41:21",
  "createdId": "65317b1c29b1267920ddf30d"
}
/* -------------------------------------------------------*/
// Flight Model:

const FlightSchema = new mongoose.Schema({

    flightNumber: { // DL-RD-4818
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    airline: {
        type: String,
        trim: true,
        required: true,
    },

    // departure: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'City',
    //     required: true
    // },

    departure: {
        type: String,
        trim: true,
        required: true
    },

    departureDate: {
        type: Date,
        required: true,
    },

    // arrival: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'City',
    //     required: true
    // },

    arrival: {
        type: String,
        trim: true,
        required: true
    },

    arrivalDate: {
        type: Date,
        required: true,
    },

    createdId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

}, { collection: 'flights', timestamps: true })

const dateToLocaleString = require('../helpers/dateToLocaleString')
    // Mongoose Schema MW          ---> init: verilerle gerekli işlemler yapıldı ekrana basmadan hemen önceki data yı alığ arada işlem yapcam gibi düşünülebilir.
FlightSchema.pre('init', function(document){
    // document.almis = "bebis"  //---> burada eklediğim bilgi erd tablosunda yer alan bir satırmışcasına ekleniyor. Model ve DB bundan etkilenmiyor 
    //document.departureDateStr = document.departureDate.toLocaleString('tr-tr', { dateStyle: 'full', timeStyle:'medium'})
    //document.arrivalDateStr = document.arrivalDate.toLocaleString('tr-tr', { dateStyle: 'full', timeStyle:'medium'})
    document.departureDateStr = dateToLocaleString(document.departureDate)
    document.departureDateStr = dateToLocaleString(document.arrivalDate)
})

/* ------------------------------------------------------- */
module.exports = mongoose.model('Flight', FlightSchema)