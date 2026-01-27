import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import translateRouter from "./routes/translate";

export async function registerRoutes(app: Express): Promise<Server> {
  app.use('/api', translateRouter);

  const httpServer = createServer(app);

  return httpServer;
}
