//1. importar las bibliotecas
import request from 'supertest'
import App from '../src/App'

describe(
    'GET /',
    () => {
        let app: App

        beforeAll(
            () => {
                app = new App()
                app.start()
            }
        )

        afterAll(
            () => {
                app.close()
            }
            
        )

        test(
            'Debe devolver un Mensaje',
            async () => {
                const res = await request(app.app).get("/")
                expect(res.statusCode).toBe(200)
                expect(res.text).toEqual('Bienvenido a typeScript')
            }
        )

    }

)


