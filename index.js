const { default: inquirer } = require("inquirer");
const mysql = require("mysql2")

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Efisinsauto#5',
        database: 'employee_db'
    },
    console.log(`Connected to the classlist_db database.`)
);

async function mainmenu() {
    const responce = await db.promise().query("describe department;");
    console.log(responce)
}
mainmenu()