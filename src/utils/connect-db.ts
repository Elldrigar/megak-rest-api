import mongoose from 'mongoose'
import config from 'config'

async function connect() {
    const dbUrl = config.get<string>('dbUrl')

    try {
        await mongoose.connect(dbUrl)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

export default connect