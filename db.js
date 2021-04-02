const sql = require('mssql')

const executeSQL = async (sqlQuery) => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect('mssql://sa:123@localhost/HTTMDT')
        const result = await sql.query(sqlQuery)
        return result.recordsets[0]
    } catch (err) {
        // ... error checks
        //console.log(err)
        throw err.originalError.info
    }
    sql.close();
}
module.exports = executeSQL