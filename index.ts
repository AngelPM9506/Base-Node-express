import api from "./src";

import dotenv from "dotenv";

dotenv.config();
const { PORT, HOST } = process.env;

api.listen(PORT || 3001, () => {
  console.log(`[Test Base express] Listen at -> ${HOST}:${PORT}`);
});
