import swaggerJSDoc from "swagger-jsdoc";
 
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Orlov API",
      description: "Orlov API Documentation",
      version: "1.0.0",
    },
    tags: [
      {
        name: "Login",
        description: "Admin login APIs",
      },
      {
        name: "Paratype",
        description: "Paratype management APIs",
      },
      {
        name: "Parameter",
        description: "Parameter management APIs",
      },
      {
        name: "Currency",
        description: "Currency management APIs",
      },
      {
        name: "Category",
        description: "Category management APIs",
      },
      {
        name: "Metal Price",
        description: "Metal Price management APIs",
      },
      {
        name: "Karat Purity",
        description: "Karat Purity management APIs",
      },
      {
        name: "Labour",
        description: "Labour management APIs",
      },
      {
        name: "Other Charge",
        description: "Other Charge management APIs",
      },
      {
        name: "Collection",
        description: "Collection management APIs",
      },
      {
        name: "Valumn Discount",
        description: "Valumn Discount management APIs",
      },
      {
        name: "Stone group",
        description: "Stone group management APIs",
      },
      {
        name: "Product master",
        description: "Product master management APIs",
      },
      {
        name: "Vendor master",
        description: "Vendor master management APIs",
      },
      {
        name: "Mapping",
        description: "Mapping management APIs",
      },
      {
        name: "Selling price",
        description: "Selling price management APIs",
      },
      {
        name: "Diamonds master",
        description: "Diamonds master management APIs",
      },
      {
        name: "Import Diamonds Master",
        description: "Import Diamonds master management APIs",
      },
      {
        name: "Home Page Sesstion",
        description: "Home Page Sesstion management APIs",
      },
      {
        name: "Customer Master",
        description: "Customer management APIs",
      },
      {
        name: "Staff Master",
        description: "Staff management APIs",
      },
      {
        name: "Role Master",
        description: "Role management APIs",
      },
      {
        name: "Settings Master",
        description: "Settings management APIs",
      },
      {
        name: "Country Master",
        description: "Country management APIs",
      },
      {
        name: "State Master",
        description: "State management APIs",
      },
      {
        name: "City Master",
        description: "City management APIs",
      },
      {
        name: "Order Master",
        description: "Order management APIs",
      },


      {
        name: "App / Home Page Sesstion",
        description: "Home Page Sesstion management APIs",
      },
      {
        name: "App / User",
        description: "User management APIs",
      },
      {
        name: "App / Parameter",
        description: "Parameter management APIs",
      },      
      {
        name: "App / Products",
        description: "Product management APIs",
      },
      {
        name: "App / Diamond",
        description: "Diamond management APIs",
      },
      {
        name: "App / Cart",
        description: "Cart management APIs",
      },
      {
        name: "App / WishList",
        description: "WishList management APIs",
      },
      {
        name: "App / My Account",
        description: "My Account management APIs",
      },
      {
        name: "App / Order",
        description: "Order management APIs",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT", // Optional, just for documentation
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    servers: [{ url: "http://192.168.1.233:4040/orlov-next-nodejs/" }],    
  },
  apis: ["./routes/*.js", "./routes/app/*.js"],
};
 
const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;