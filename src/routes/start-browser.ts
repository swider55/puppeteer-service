import { Router } from "express";
import { startBrowser } from "@managers/browser-manager";

const router = Router();

router.get("/", async (req, res) => {
  try {
    console.log('Opening browser')
    await startBrowser();
    
    res.send("Browser started");
  } catch (error) {
    const response = "Error while staring browser ";
    console.error(response + error);
    return res.status(500).send(response);
  }
});

export default router;
