import express, { Application, Request, Response, NextFunction } from 'express'
import swaggerUI from 'swagger-ui-express'
import { swaggerSpec } from './swagger.conf'
import cors from 'cors'

import PacienteRouter from './routes/Paciente.routes'
import MedicoRouter from './routes/Medico.routes'
import CitaRoutes from './routes/Cita.routes'
import EspecialidadRoutes from './routes/Especialidad.routes'
import FormularioRoutes from './routes/Formulario.routes'

/**
 * Clase principal de la API. Define las rutas de la API
 * 
 * @description Clase principal de la API. Define las rutas de la API
 */
class App {
    public app: Application
    private server: any

    constructor() {
        this.app = express()
        this.app.use(express.json())
        this.app.use(
            '/api-docs',
            swaggerUI.serve,
            swaggerUI.setup(swaggerSpec)
        )
        this.app.use(cors())
        this.routes()
    }

    private routes(): void {
		this.app.use('/', PacienteRouter)
		this.app.use('/', MedicoRouter)
		this.app.use('/', CitaRoutes)
		this.app.use('/', EspecialidadRoutes)
		this.app.use('/', FormularioRoutes)
    }

    public start(): void {
        this.server = this.app.listen(3000, () => {
            console.log('El servidor está escuchando en el puerto 3000')
        })
    }

    public close(): void {
        this.server.close()
    }
}

export default App
