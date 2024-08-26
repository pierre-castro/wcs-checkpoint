import "reflect-metadata";
import { DataSource } from "typeorm";
import { Country } from "../entities/Country";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "countries.db",
  synchronize: true,
  entities: [Country],
});