const AppError = require("../utils/appError")
const sqliteConnection = require("../database/sqlite")
const { hash, compare } = require("bcryptjs")
const { request, response } = require("express")

class UsersController {
    async create(request, response) {
        const { name, email, password } = request.body

        const database = await sqliteConnection()

        const checkIfUserExist = await database.get("SELECT * FROM users WHERE email = (?)", [email])
        if(checkIfUserExist) {
            throw new AppError("Este e-mail já está cadastrado")
        }

        const cryptedPassword = await hash(password, 8)

        await database.run("INSERT INTO users (name, email, password) VALUES ((?), (?), (?))", [name, email, cryptedPassword])

        response.json()
    }

    async update(request, response) {
        const { name, email, password, oldPassword } = request.body
        const user_id = request.user.id

        const database = await sqliteConnection()

        const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id])
        if(!user) {
            throw new AppError("Usuário não encontrado")
        }

        const emailExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])
        if(emailExists && user.id !== emailExists.id) {
            throw new AppError("Este e-mail já está em uso")
        }

        user.name = name ?? user.name
        user.email = email ?? user.email

        if(password && !oldPassword) {
            throw new AppError("Você precisa informar a senha antiga para redefir a nova senha")
        }

        if(password && oldPassword) {
            const samePassword = await compare(oldPassword, user.password)

            if(!samePassword) {
                throw new AppError("A senha antiga não confere")
            }

            user.password = await hash(password, 8)
        }

        await database.run(`
        UPDATE users SET
        name = (?),
        email = (?),
        password = (?),
        updated_at = DATETIME('now')
        WHERE id = (?)`, 
        [user.name, user.email, user.password, user_id])

        return response.json()
    }

    async delete(request, response) {
        const { password } = request.body
        const user_id = request.user.id

        const database = await sqliteConnection()

        const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id])
        if(!user) {
            throw new AppError("Usuário não encontrado")
        }

        if(!password) {
            throw new AppError("Senha do usuário requerida")
        }

        const checkPassword = await compare(password, user.password)
        if(!checkPassword) {
            throw new AppError("Senha incorreta")
        }

        await database.run(`
        DELETE FROM users
        WHERE id = (?)`,
        [user_id])

        return response.json()
    }
}

module.exports = UsersController