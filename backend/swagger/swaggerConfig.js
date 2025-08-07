import swaggerJSDoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Jewelry Store API',
      version: '1.0.0',
      description: 'API documentation for the Jewelry Store backend',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: []
      },
    ],
    servers: [
      {
        url: 'http://localhost:2109',
        description: "Local developement server"
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API docs (JSDoc format)
}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec