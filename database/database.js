const conexao = require('./connection')

module.exports = {
    fecharConexao: function () {
        conexao.end(
            (erro) => {
                if (erro) {
                    console.log("Erro ao fechar a conexao: " + erro.message)
                } else {
                    console.log("Conexão DB encerrada")
                }
            }
        )
    },

    abrirConexao: function () {
        conexao.connect(
            (erro) => {
                if (erro) {
                    console.log("Erro ao iniciar a conexao: " + erro.message)
                } else {
                    console.log("Conexão DB iniciada")
                }
            }
        )
    
    },

    conexao
}