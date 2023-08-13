import { Router } from "express";
import cors from 'cors';
import { getNearPlaces } from "./GetNearPlaces.js";

const AppRouter = Router();

AppRouter.get('/', cors(), (req, res, next) => { return res.status(403).json({ error: "You cannot belong here" }) });


AppRouter.get('/nearbySearch', cors(), async (req, res, next) => {

    try {

        const { pagetoken, location, key, type, radius } = req.query;


        const response = await getNearPlaces(pagetoken, location, key, type, radius);

        return res.status(200).json(response);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


export default AppRouter;