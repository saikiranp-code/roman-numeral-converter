import { Router } from "express";
import { romanController } from "../../controllers/roman-controller/romanController";

const router = Router();

// Use versioned API route
router.use("/romannumeral", romanController);

// Handle 404 for unmatched routes
router.use("*", (req, res) => {
  return res.status(404).json({ error: "Route not found" });
});

export const romanRoutes = router;
