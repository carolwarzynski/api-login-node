import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()
app.use(express.json())

/* =========================
   CREATE – criar usuário
========================= */
app.post('/usuarios', async (req, res) => {
  try {
    const { nome, email, idade } = req.body

    // Validação simples
    const missingFields = []
    if (!nome) missingFields.push('nome')
    if (!email) missingFields.push('email')
    if (!idade) missingFields.push('idade')
    if (missingFields.length > 0) {
      return res.status(400).json({ 
        error: 'Campos obrigatórios ausentes', 
        fields: missingFields 
      })
    }

    const user = await prisma.user.create({
      data: {
        nome,
        email,
        idade: Number(idade)
      }
    })

    res.status(201).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao criar usuário', details: error.message })
  }
})

/* =========================
   READ – listar todos usuários
========================= */
app.get('/usuarios', async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar usuários', details: error.message })
  }
})

/* =========================
   READ – buscar usuário por ID
========================= */
app.get('/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params

    const user = await prisma.user.findUnique({
      where: { id }
    })

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' })
    }

    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar usuário', details: error.message })
  }
})

/* =========================
   UPDATE – atualizar usuário
========================= */
app.put('/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { nome, email, idade } = req.body

    // Pelo menos um campo precisa ser enviado
    if (!nome && !email && !idade) {
      return res.status(400).json({ error: 'É necessário enviar pelo menos um campo para atualizar' })
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...(nome && { nome }),
        ...(email && { email }),
        ...(idade && { idade: Number(idade) })
      }
    })

    res.status(200).json(updatedUser)
  } catch (error) {
    console.error(error)
    // Se o usuário não existe, Prisma lança um erro específico
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Usuário não encontrado para atualizar' })
    }
    res.status(500).json({ error: 'Erro ao atualizar usuário', details: error.message })
  }
})

/* =========================
   DELETE – remover usuário
========================= */
app.delete('/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params

    await prisma.user.delete({ where: { id } })
    res.status(200).json({ message: 'Usuário deletado com sucesso' })
  } catch (error) {
    console.error(error)
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Usuário não encontrado para deletar' })
    }
    res.status(500).json({ error: 'Erro ao deletar usuário', details: error.message })
  }
})

/* =========================
   SERVER
========================= */
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
