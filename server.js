/* importei o express para usa-lo */
import express from 'express'
/*abri uma variavel para o express*/
const app = express ()
app.use(express.json())

const users = []
/* rec = quesição que chega do front para o back e res= resposta do back para o front*/

app.post ('/usuarios', (req, res)=> { 
   users.push(req.body)
    res.send('aqui deu certo')

})
    
/*chamei um método http - get*/
app.get('/usuarios', (req, res)=> {
    res.json(users)
} )

app.listen (3000)

/* CRIAR LISTAGEM DE USUÁRIOS - API 
1) CRIAR usuario
2) LISTAR usuario
3) EDITAR USUARIO 
4) DELETAR usuario

existem tres formas de enviar requisições do front pro back, são elas:  
QUERY PARAMS (GET - consultas) informações direto na URL "comedia&streming=netflix"
enviar parametros por meio da url - tudo depois do '?'

ROUTE PARAMS (GET / PUT/ DELETE) UMA INFORMAÇÃO POR VEZ. 
ex: delete servidor.com/usuarios/22 <- esse ID 22 é somente um e eu quero mecher 
só nele. Então uso o route pra processesar somente uma informação específica 

BODY PARAMS (POST E PUT)
 Envia informações pelo bory. informações delicadas: senhas de cartão, id de usuario


 para não se perder amanha: criamos as res e req e fizemos funiconar. SO QUE estão ligadas
 a uma variável. ao reiniciar o servidor, perde tudo. precisamos criar um banco de dados
 para armazenar os dados. e vamos fazer isso agora linda.
*/

