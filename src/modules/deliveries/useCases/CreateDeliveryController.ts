import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

export class CreateDeliveryController {
  async handle(req: Request, res: Response) : Promise<Response> {
    const { item_name } = req.body;
    const { id_client } = req;
    
    const createDeliveryUseCase = new CreateDeliveryUseCase();

    const response = await createDeliveryUseCase.execute({ id_client, item_name });

    return res.status(201).json(response);
  }
}