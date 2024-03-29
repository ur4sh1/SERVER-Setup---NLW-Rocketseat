import cors from '@fastify/cors';
import Fastify from "fastify";
import { appRoutes } from "./routes";

const app = Fastify()

app.register(cors)
app.register(appRoutes)

app.listen({
  port: 3333,
  host: '0.0.0.0',
}).then(()=>{
  console.log('HTTP server running! port: 3333')
})