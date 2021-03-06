import { botCache } from "../../deps.ts";
import { processReactionCollectors } from "../utils/collectors.ts";

botCache.eventHandlers.reactionAdd = function (message, emoji, userID) {
  // Process reaction collectors.
  botCache.stats.reactionsAddedProcessed += 1;
  processReactionCollectors(message, emoji, userID);
};
