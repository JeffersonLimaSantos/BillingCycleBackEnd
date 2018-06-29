const express = require('express')
const auth = require('./auth')

module.exports = function (server) {
    
    //ROTAS ABERTAS
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)

    //Rotas protegidas por token jwt
    const portectedApi = express.Router()
    server.use('/api', portectedApi)

    portectedApi.use(auth)

    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(portectedApi, '/billingCycles')

    const billingSummaryService = require("../api/billingSummary/billingSummaryService")
    portectedApi.route('/billingSummary').get(billingSummaryService.getSummay)
}