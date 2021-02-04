const mongoose = require('mongoose')

const MeetingDateSchema = new mongoose.Schema({
    meetingDate: {
        type: String,
        required: true
    }
})

const MeetingDate = mongoose.model("MeetingDateModel", MeetingDateSchema)

module.exports = MeetingDate