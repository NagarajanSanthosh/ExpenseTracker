import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./utils/schema.jsx",
    dialect: "postgresql",
    dbCredentials: {
        url: "postgresql://neondb_owner:npg_hrR1l6aTtdXx@ep-fragrant-pine-a8j8oqaj-pooler.eastus2.azure.neon.tech/ExpenseTracker?sslmode=require",
    },
});
