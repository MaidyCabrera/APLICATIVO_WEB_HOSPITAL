import { Router, Request, Response } from 'express'
import CitaController from '../controllers/citaController'

class CitaRouter {
    router: Router
    citaController: CitaController

    constructor() {
        this.router = Router()
        this.citaController = new CitaController()
        this.routes()
    }

    private routes():void{
        this.router.get(
            '/citas',
            (req: Request, res: Response) => {
              this.citaController.obtenerCitas(req, res)
            }
          )
    }

}

export default new CitaRouter().router