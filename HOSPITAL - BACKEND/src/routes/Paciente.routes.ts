import { Router, Request, Response } from 'express'
import PacienteController from '../controllers/PacienteController';

class PacienteRouter {
  router: Router
  PacienteController: PacienteController

  constructor() {
    this.router = Router()
    this.PacienteController = new PacienteController()
    this.routes()
  }

  private routes(): void {
    this.router.get(
      '/pacientes',
      (req: Request, res: Response) => {
        this.PacienteController.obtenerPacientes(req, res)
      }
    )

    this.router.post(
      '/crear_paciente',
      (req: Request, res: Response) => {
        this.PacienteController.crearPaciente(req, res)
      }
    )
  }
}

export default new PacienteRouter().router