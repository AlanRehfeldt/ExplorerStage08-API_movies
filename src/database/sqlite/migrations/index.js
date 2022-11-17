const sqliteConnection = require("../../sqlite")
const createUsers = require("./createUsers")

async function migrationsRun() {
    const schema = [
        createUsers
    ].join("")

    sqliteConnection().then(db => db.exec(schema))
                      .catch(e => console.error(e))
}

module.exports = migrationsRun