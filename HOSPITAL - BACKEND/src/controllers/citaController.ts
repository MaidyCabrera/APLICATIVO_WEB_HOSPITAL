import { Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';

class CitaController {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async obtenerCitas(req: Request, res: Response) {

        const citas = await this.prisma.cita.findMany()
        res.json(citas)
    }

    async crearCita(req: Request, res: Response) {
        try {
            const {
                idCita,
                fechaCita,
                pacienteCedula,
                medicoTarjetaProfesional
            } = req.body

            const fecha = new Date(fechaCita)
            const cita = await this.prisma.cita.create(
                {
                    data: {
                        idCita,
                        fecha,
                        pacienteCedula,
                        medicoTarjetaProfesional
                    }
                })
            res.json(cita)
        } catch (e: any) {
            res.status(400)
            res.json({ error: e.message })
        }
    }
}

export default CitaController