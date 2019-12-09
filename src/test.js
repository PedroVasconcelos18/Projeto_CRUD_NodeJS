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
        // type: Sequelize.STRING quer dizer que é um double.
        type: Sequelize.DOUBLE
    }
})

// Produtos.create({
//     nome: 'Leite',
//     preco: 42.53
// })

// model da table Users
const Users = sequelize.define('usuarios', {
    nome: {
        // type: Sequelize.STRING quer dizer que é um varchar. Ex: nome é um varchar(255)
        type: Sequelize.STRING
    },
    idade: {
        // type: Sequelize.INTEGER quer dizer que é um int. 
        type: Sequelize.INTEGER
    },
    email: {
        // type: Sequelize.STRING quer dizer que é um varchar.
        type: Sequelize.STRING
    },
})

// Users.create({
//     nome: 'Pedro',
//     idade: 19,
//     email: 'Pedrohvss15@gmail.com'
// })

const Compra = sequelize.define('Compras', {
    produtos_id: {
          // type: Sequelize.INTEGER quer dizer que é um int. 
        type: Sequelize.INTEGER,
        // allowNull: false para que o valor não seja nulo
        allowNull: false
    },
    usuarios_id: {
        // type: Sequelize.INTEGER quer dizer que é um int. 
        type: Sequelize.INTEGER,
        // allowNull: false para que o valor não seja nulo
        allowNull: false
    },
    identificador: {
          // type: Sequelize.INTEGER quer dizer que é um int. 
        type: Sequelize.INTEGER,
        // allowNull: false para que o valor não seja nulo
        allowNull: false
    },
})

// Compra.create({
//     produtos_id: 1,
//     usuarios_id: 1,
//     identificador: Math.random()
// })

// Produtos.sync({force: true}) // para realizar a criação da table Produtos
// Users.sync({force: true}) // para realizar a criação da table Users
// Compra.sync({force: true}) // para realizar a criação da table Compra 

