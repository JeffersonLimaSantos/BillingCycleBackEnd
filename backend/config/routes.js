const express = require('express')

module.exports = function (server) {
    
    //API Router Config
    const router = express.Router()
    server.use('/api', router)

    // Rotas da API
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles')

    const billingSummaryService = require("../api/billingSummary/billingSummaryService")
    router.route('/billingSummary').get(billingSummaryService.getSummay)
}