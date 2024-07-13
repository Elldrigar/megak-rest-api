import mongoose from 'mongoose'
import config from 'config'

function connect() {
    return mongoose.connect()
}

export default connect