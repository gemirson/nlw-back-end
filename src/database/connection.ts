import knex from 'knex';
import path from 'path'; 

const db= knex({
client:'sqlite3',
connection:{
    filename: path.resolve(__dirname,'database.sqlite')
},
useNullAsDefualt:true,
});

export default db;