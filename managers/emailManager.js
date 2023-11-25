const handlebars = require('handlebars')
const fs = require('fs')

var codigoRecuperacaoEmail = 0

const Controller = module.exports = {
    gerarCodigo: function (min, max) {
        codigoRecuperacaoEmail = Math.floor(Math.random() * (max - min + 1)) + min
    },

    start: function (ipcMain, nodemailer) {
        ipcMain.on('enviarCodigoRecuperacaoEmail', (event, email) => {
            Controller.gerarCodigo(100000, 999999)
            Controller.enviarCodigoRecuperacaoEmail(nodemailer, email)
            console.log(codigoRecuperacaoEmail)
        })

        ipcMain.handle('pegarCodigoRecuperacaoEmail', () => codigoRecuperacaoEmail)
    },

    enviarCodigoRecuperacaoEmail: function (nodemailer, email) {
        Controller.readHTMLFile(__dirname + '/email_base.html', (err, html) => {
            if (err)
                console.log('error reading file', err)
            else {
                var template = handlebars.compile(html);
                var replacements = { codigo: codigoRecuperacaoEmail }
                var htmlToSend = template(replacements);

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
                    html: htmlToSend
                }

                transporter.sendMail(mailOptions, function (err, info) {
                    if (err)
                        console.log(err)
                    else
                        console.log('Código enviado com sucesso!')
                })
            }
        })
    },

    readHTMLFile: function (path, callback) {
        fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
            if (err) {
                callback(err);
            }
            else {
                callback(null, html);
            }
        });
    }
}