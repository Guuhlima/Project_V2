import { FastifyRequest, FastifyReply } from "fastify";
import { FuncionarioBody, FuncionarioParams } from "../../../shared/schemas/funcionarioSchemas";
import { PrismaFuncionarioRepository } from "../../../infrastructure/repositories/prismaFuncionarioRepository";
import logger from "../../../shared/schemas/logger";
import { ConsultarFuncionarioUseCase } from "../../../application/use-cases/funcionarios/consultarFuncionario.usecase";

export async function ConsultarFuncionariosController(
    requet: FastifyRequest<{Params: FuncionarioParams, Body: FuncionarioBody}>,
    reply: FastifyReply
) {
    try {
        const repo = new PrismaFuncionarioRepository();
        const useCase = new ConsultarFuncionarioUseCase(repo);

        const { valor } = requet.params;
        const { cpf, pis, hash } = requet.body;

        const result = await useCase.execute({ valor, cpf, pis, hash });

        if(!result.length) {
            return reply.status(404).send({ message: 'Not found register'});
        }

        return reply.status(200).send({ funcionario: result});
    } catch(error) {
        logger.error('Error ao consultar funcionário:', error)
        return reply.status(500).send({ message: 'Erro interno'})
    }
}