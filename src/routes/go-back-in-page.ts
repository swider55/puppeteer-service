import { Router } from "express";
import { getPage } from "@managers/browser-manager";
import { generatePdf, deletePdf } from "@utils/pdf-utils";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const pageId = req.body.pageId;
    const page = getPage(pageId);

    console.log('type-in-page, pageId=' + pageId);
    if (!page) return res.status(400).send("Page not found");

    deletePdf(pageId);
    await generatePdf(page, pageId);

    page.goBack();

    return res.send("Go back clicked");
  } catch (error) {
    const response = "Error while going back. ";
    console.error(response + error);
    return res.status(500).send(response);
  }
});

export default router;
