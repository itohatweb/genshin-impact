import { botCache } from "../../deps.ts";
import { db } from "../database/database.ts";

botCache.helpers.upsertGuild = async function (id: string) {
  const settings = await db.guilds.get(id);
  if (settings) return settings;

  // Create a new settings for this guild.
  await db.guilds.create(id, {
    prefix: ".",
    language: "en_US",
    autoembedChannelIDs: [],
    modRoleIDs: [],
    mailsRoleIDs: [],
  });

  const guild = await db.guilds.get(id);
  return guild!;
};
