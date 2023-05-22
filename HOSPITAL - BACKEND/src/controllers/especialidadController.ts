import { Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';

class EspecialidadController {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async obtenerEspecialidad(req: Request, res: Response) {

        const especialidad = await this.prisma.especialidad.findMany()
        res.json(especialidad)
    }

    async crearEspecialidad(req: Request, res: Response) {
        try {
            const {
                idEspecialidad,
                nombre
            } = req.body

            const especialidad = await this.prisma.especialidad.create(
                {
                    data: {
                        idEspecialidad,
                        nombre
                    }
                })
            res.json(especialidad)
        } catch (e: any) {
            res.status(400)
            res.json({ error: e.message })
        }
    }
}

export default EspecialidadController