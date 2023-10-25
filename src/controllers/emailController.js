var codigoRecuperacaoEmail = 0

const Controller = module.exports = {
    start: function (ipcMain, mainWindow, nodemailer) {
        ipcMain.on('enviarCodigoRecuperacaoEmail', (event, email) => {
            Controller.gerarCodigo(100000, 999999)
            console.log(codigoRecuperacaoEmail);
        //    Controller.enviarCodigoRecuperacaoEmail(nodemailer, email)
        })

        ipcMain.handle('pegarCodigoRecuperacaoEmail', () => codigoRecuperacaoEmail);
    },

    gerarCodigo: function (min, max) {
        codigoRecuperacaoEmail = Math.floor(Math.random() * (max - min + 1)) + min
    },

    enviarCodigoRecuperacaoEmail: function (nodemailer, email) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'gate5.team.app@gmail.com',
                pass: 'ohfxioncfwvyvafm',
            },
        })

        const mailOptions = {
            from: 'gate5.team.app@gmail.com',
            to: email,
            subject: 'Recuperação de senha',
            html: "<p>Código de confirmação: </p>" + codigoRecuperacaoEmail,
        }

        transporter.sendMail(mailOptions, function (err, info) {
            if (err)
                console.log(err)
            else
                console.log('Código enviado com sucesso!')
        })
    }
}