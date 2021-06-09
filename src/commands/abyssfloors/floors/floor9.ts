import { Embed } from "../../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../../utils/helpers.ts";

createSubcommand("abyss-floor", {
  name: "9",
  aliases: ["nine"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spiral Abyss Floor 9")
      .setDescription(
        "**Ley Line Disorder:**\n• Characters on the field will continuously accumulate Sheer Cold, and will continually lose HP after Sheer Cold reaches its limit.\n• There will also be a Ruin Brazier on the field. While the Ruin Brazier is activated, getting close to it will reduce Sheer Cold.\n• Enemies will attack the Ruin Braziers, preventing them from diminishing the effects of Sheer Cold in the area. Deactivated Ruin Braziers will restart after a while.",
      )
      .setImage("https://i.imgur.com/IpK2jBK.png")
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
