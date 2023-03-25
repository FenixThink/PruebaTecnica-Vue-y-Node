import cors from 'cors';
import { Router } from "express";
import festivalsController from "../controllers/festival.controller.js";

const routerFestivals = Router()

routerFestivals.post('/createFestival/',cors(),festivalsController.createFestival)
routerFestivals.get('/AllFestival',cors(),festivalsController.AllFestivals)
routerFestivals.get('/EspecificFestival/:id',festivalsController.searchFestival)
routerFestivals.delete('/deleteFestival/:id',festivalsController.deleteFestival)

export default routerFestivals;