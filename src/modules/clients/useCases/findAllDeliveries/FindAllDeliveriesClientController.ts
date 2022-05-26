import { Request, Response } from "express";
import { FindAllDeliveriesClientUseCase } from "./FindAllDeliveriesClientUseCase";

export class FindAllDeliveriesClientController {
  async handle(req: Request, res: Response) : Promise<Response>{
    const { id_client } = req;

    const findAllDeliveriesClientUseCase = new FindAllDeliveriesClientUseCase();

    const result = await findAllDeliveriesClientUseCase.execute(id_client);

    return res.json(result);
  }
}