import { Router, Request, Response } from 'express'
import EspecialidadController from '../controllers/especialidadController'

class EspecialidadRouter {
    router: Router
    especialidadController: EspecialidadController

    constructor() {
        this.router = Router()
        this.especialidadController = new EspecialidadController()
        this.routes()
    }

    private routes():void{
        this.router.get(
            '/especialidad',
            (req: Request, res: Response) => {
              this.especialidadController.obtenerEspecialidad(req, res)
            }
          )
    }

}

export default new EspecialidadRouter().router