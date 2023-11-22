"use strict"
/* ------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
  "username": "test",
  "password": "1234",
  "email": "test@site.com",
  "isActive": true,
  "isStaff": false,
  "isAdmin": false
}
{
  "username": "staff",
  "password": "1234",
  "email": "test1@site.com",
  "isActive": true,
  "isStaff": true,
  "isAdmin": false
}
{
  "username": "admin",
  "password": "1234",
  "email": "test2@site.com",
  "isActive": true,
  "isStaff": true,
  "isAdmin": true
}
/* ------------------------------------------------------- */
// User Model:

const passwordEncrypt = require('../helpers/passwordEncrypt')

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    password: {
        type: String,
        trim: true,
        required: true,
        // select: false,
        set: (password) => passwordEncrypt(password),
    },

    email: {
        type: String,
        trim: true,
        required: [true, 'Email field must be required.'],
        unique: [true, 'Email must be unique.'],
        validate: [
            (email) =>  {
                const emailRegexCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                return emailRegexCheck.test(email)                                   //---> .test diyerek TRUE/FALSE çeviriyoruz
            },
            'Email type is not correct.'
        ]
    },

    isActive: {
        type: Boolean,      //---> kullanıcı
        default: true
    },

    isStaff: {
        type: Boolean,      //---> personel
        default: false
    },

    isAdmin: {
        type: Boolean,      //---> müdür   diyebiliriz
        default: false
    },

}, { collection: 'users', timestamps: true })

/* ------------------------------------------------------- */
module.exports = mongoose.model('User', UserSchema)