const Sequelize = require('sequelize');
const sequelize = new Sequelize('Projeto', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso')
}).catch(function(err){
    console.log("Falha ao conectar: " + err)
})

//postagem


// model da table Produtos
const Produtos = sequelize.define('produtos', {
    nome: {
        type: Sequelize.STRING
    },
    preco: {
        type: Sequelize.DOUBLE
    }
})

// model da table Users
const Users = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    },
}) 

// Produtos.sync({force: true}) // para realizar a criação da table Produtos
Users.sync({force: true}) // para realizar a criação da table Users

