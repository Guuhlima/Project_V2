import fastify from "fastify";
import { funcionarioRoutes } from "./interfaces/routes/funcionarioRoutes";
import { entradaSaidaRoutes } from "./interfaces/routes/entradaSaidaRoutes";
import { pausasRoutes } from "./interfaces/routes/pausasRoutes";

const app = fastify({ logger: true });

app.register(funcionarioRoutes);
app.register(entradaSaidaRoutes);
app.register(pausasRoutes);

app.listen({ port: 3333 }, err => {
    if (err) {
        app.log.error(err),
        process.exit(1)
    }
})