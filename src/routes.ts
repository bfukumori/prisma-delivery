import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { AuthenticateClientController } from "./modules/account/authenticateUser/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";


export const routes = Router();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController;
const createDeliveryController = new CreateDeliveryController();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

const findAllWithoutEndDateController = new FindAllAvailableController();

const updateDeliverymanController = new UpdateDeliverymanController();

routes.get("/delivery", ensureAuthenticateDeliveryman, findAllWithoutEndDateController.handle);

routes.post("/client", createClientController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);
routes.post("/delivery", ensureAuthenticateClient, createDeliveryController.handle);

routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliveryman, updateDeliverymanController.handle);

routes.post("/client/authenticate", authenticateClientController.handle);
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);
