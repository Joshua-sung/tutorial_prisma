import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { queryType, nonNull, intArg, stringArg } from "nexus";

