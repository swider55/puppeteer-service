import { Router } from "express";
import startBrowser from "@routes/start-browser";
import startBrowserIfNotUsed from "@routes/start-browser-if-not-used";
import openUrlInNewPage from "@routes/open-url-in-new-page";
import openUrlInExistingPage from "@routes/open-url-in-existing-page";
import getPageContent from "@routes/get-page-content";
import clickElementInPage from "@routes/click-element-in-page";
import closeBrowser from "@routes/close-browser";
import closePage from "@routes/close-page";
import goBackInPage from "@routes/go-back-in-page";
import typeInPage from "@routes/type-in-page";

const router = Router();

router.use("/start-browser", startBrowser);
router.use("/start-browser-if-not-used", startBrowserIfNotUsed);
router.use("/open-url-in-new-page", openUrlInNewPage);
router.use("/open-url-in-existing-page", openUrlInExistingPage);
router.use("/get-page-content", getPageContent);
router.use("/click-element-in-page", clickElementInPage);
router.use("/close-browser", closeBrowser);
router.use("/close-page", closePage);
router.use("/go-back-in-page", goBackInPage);
router.use("/type-in-page", typeInPage);

export default router;
