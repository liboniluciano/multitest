import { Router } from "express";

const routes = Router();

routes.get("/ping", (req, res) => {
  return res.json({ message: "Hello Multi!" });
});

export default routes;
