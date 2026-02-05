import fs from "fs";
import path from "path";

const file = path.join(process.cwd(), "app/data/db.json");

export function loadDB(){
 return JSON.parse(fs.readFileSync(file,"utf8"));
}

export function saveDB(data){
 fs.writeFileSync(file, JSON.stringify(data,null,2));
}
