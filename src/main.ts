import fastify from "fastify";
import { funcionarioRoutes } from "./interfaces/routes/funcionarioRoutes";
import { entradaSaidaRoutes } from "./interfaces/routes/entradaSaidaRoutes";
import { pausasRoutes } from "./interfaces/routes/pausasRoutes";
import { FuncionarioEscalaRoutes } from "./interfaces/routes/funcionarioEscalaRoutes";
import dotenv from "dotenv"

dotenv.config();

const app = fastify({ logger: true });

app.register(funcionarioRoutes);
app.register(entradaSaidaRoutes);
app.register(pausasRoutes);
app.register(FuncionarioEscalaRoutes);

app.listen({ port: Number(process.env.PORT) }, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`Servidor rodando em ${address}`);
});
