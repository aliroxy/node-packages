import bcrypt from "bcrypt"

const senha ="1234"
const hash = await bcrypt.hash(senha, 10)

console.log("hash", hash)


console.log("confere 0000:", await bcrypt.compare("1234", hash));