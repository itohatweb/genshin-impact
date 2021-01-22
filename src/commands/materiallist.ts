import { Message } from "../../deps.ts";
import { needReaction } from "../utils/collectors.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand } from "../utils/helpers.ts";

createCommand({
    name: "materiallist",
    aliases: ["materials"],
  guildOnly: true,
  execute: async function (message, args) {
    
    const zero = new Embed()
    .setTitle("Overview")
    .setDescription([
      `0️⃣ Overview`,
      `1️⃣ Character EXP Material‎s`,
      `2️⃣ Character Ascension Materials`,
      `3️⃣ Talent Level-Up Materials`,
      `4️⃣ Weapon Enhancement Material‎s`,
      `5️⃣ Weapon Ascension Materials`,
      `6️⃣ Forging Materials`,
      `7️⃣ Local Specialty`,
      `8️⃣ Cooking Ingredients`,
    ])

    const first = new Embed()
    .setTitle("Character EXP Material‎s")
    .setDescription([
      "[⭐⭐⭐⭐]\nHero's Wit",
      "",
      "[⭐⭐⭐]\nAdventurer's Experience",
      "",
      "[⭐⭐]\nWanderer's Advice",
      "",
      `0️⃣ Overview`,  
    ])

  const second = new Embed()
    .setTitle("Character Ascension Materials")
    .setDescription([
      "[⭐⭐⭐⭐⭐]",
      "Brilliant Diamond Gemstone 🔹 Vayuda Turquoise Gemstone 🔹 Shivada Jade Gemstone 🔹 Vajrada Amethyst Gemstone 🔹 Prithiva Topaz Gemstone 🔹 Varunada Lazurite Gemstone 🔹 Agnidus Agate Gemstone",
      "",
      "[⭐⭐⭐⭐]",
      "Brilliant Diamond Chunk 🔹 Vayuda Turquoise Chunk 🔹 Shivada Jade Chunk 🔹 Vajrada Amethyst Chunk 🔹 Prithiva Topaz Chunk 🔹 Varunada Lazurite Chunk 🔹 Agnidus Agate Chunk 🔹 Hoarfrost Core 🔹 Lightning Prism 🔹 Basalt Pillar 🔹 Cleansing Heart 🔹 Everflame Seed",
      "",
      "[⭐⭐⭐]",
      "Brilliant Diamond Fragment 🔹 Vayuda Turquoise Fragment 🔹 Shivada Jade Fragment 🔹 Vajrada Amethyst Fragment 🔹 Prithiva Topaz Fragment 🔹 Varunada Lazurite Fragment 🔹 Agnidus Agate Fragment",
      "",
      "[⭐⭐]",
      "Brilliant Diamond Sliver 🔹 Vayuda Turquoise Sliver 🔹 Shivada Jade Sliver 🔹 Vajrada Amethyst Sliver 🔹 Prithiva Topaz Sliver 🔹 Varunada Lazurite Sliver 🔹 Agnidus Agate Sliver",
      "",
      "",
      "",
      `0️⃣ Overview`, 
    ])

    const third = new Embed()
    .setTitle("Talent Level-Up Materials")
    .setDescription([
      "[⭐⭐⭐⭐⭐]",
      "Crown of Insight 🔹 Ring of Boreas 🔹 Dvalin's Claw 🔹 Dvalin's Plume 🔹 Dvalin's Sigh 🔹 Shadow of the Warrior 🔹 Shard of a Foul Legacy 🔹 Spirit Locket of Boreast 🔹 Tail of Boreas 🔹 Tusk of Monoceros Caeli",
      "",
      "[⭐⭐⭐⭐]",
      "Philosophies of Prosperity 🔹 Philosophies of Resistance 🔹 Philosophies of Ballad 🔹 Philosophies of Diligence 🔹 Philosophies of Freedom 🔹 Philosophies of Gold",
      "",
      "[⭐⭐⭐]",
      "Guide to Balladt 🔹 Guide to Diligencet 🔹 Guide to Diligencet 🔹 Guide to Freedomt 🔹 Guide to Freedomt 🔹 Guide to Goldt 🔹 Guide to Goldt 🔹 Guide to Prosperityt 🔹 Guide to Prosperityt 🔹 Guide to Resistancet 🔹 Guide to Resistance",
      "",
      "[⭐⭐]",
      "Teachings of Ballad 🔹 Teachings of Diligence 🔹 Teachings of Diligence 🔹 Teachings of Freedom 🔹 Teachings of Freedom 🔹 Teachings of Gold 🔹 Teachings of Gold 🔹 Teachings of Prosperity 🔹 Teachings of Prosperity 🔹 Teachings of Resistance 🔹 Teachings of Resistance",
      "",
      `0️⃣ Overview`,  
    ])

    const fourth = new Embed()
    .setTitle("Weapon Enhancement Material‎s")
    .setDescription([
      "[⭐⭐⭐⭐]",
      "Festering Dragon Marrow",
      "",
      "[⭐⭐⭐]",
      "Mystic Enhancement Ore",
      "",
      "[⭐⭐]",
      "Fine Enhancement Ore",
      "",
      "[⭐]",
      "Enhancement Ore",
      "",
      `0️⃣ Overview`, 
    ])

    const fifth = new Embed()
    .setTitle("Weapon Ascension Materials")
    .setDescription([
      "[⭐⭐⭐⭐⭐]",
      "Boreal Wolf's Nostalgia 🔹 Chunk of Aerosiderite 🔹 Divine Body from Guyun 🔹 Dream of the Dandelion Gladiator 🔹 Mist Veiled Primo Elixir 🔹 Scattered Piece of Decarabian's Dream",
      "",
      "[⭐⭐⭐⭐]",
      "Bit of Aerosiderite 🔹 Boreal Wolf's Broken Fang 🔹 Fragment of Decarabian's Epic 🔹 Mist Veiled Gold Elixir 🔹 Relic from Guyun 🔹 Shackles of the Dandelion Gladiator",
      "",
      "[⭐⭐⭐]",
      "Boreal Wolf's Cracked Tooth 🔹 Chains of the Dandelion Gladiator 🔹 Debris of Decarabian's City 🔹 Lustrous Stone from Guyun 🔹 Mist Veiled Mercury Elixir 🔹 Piece of Aerosiderite",
      "",
      "[⭐⭐]",
      "Boreal Wolf's Milk Tooth 🔹 Fetters of the Dandelion Gladiator 🔹 Grain of Aerosiderite 🔹 Luminous Sands from Guyun 🔹 Mist Veiled Lead Elixir 🔹 Tile of Decarabian's Tower",
      "",
      `0️⃣ Overview`, 
    ])

    const sixth = new Embed()
    .setTitle("Forging Materials")
    .setDescription([
      "[⭐⭐⭐⭐⭐]",
      "Northlander Bow Prototype 🔹 Northlander Catalyst Prototype 🔹 Northlander Claymore Prototype 🔹 Northlander Polearm Prototype 🔹 Northlander Sword Prototype 🔹 Scattered Piece of Decarabian's Dream",
      "",
      "🔹 Crystal Chunk",
      "🔹 Iron Chunk",
      "🔹 Magical Crystal Chunk",
      "🔹 White Iron Chunk",
      "",
      `0️⃣ Overview`, 
    ])

    const seventh = new Embed()
    .setTitle("Local Specialty")
    .setDescription([
      "**[Mondstadt]**",
      "Calla Lily 🔹 Cecilia 🔹 Dandelion Seed 🔹 Philanemo Mushroom 🔹 Small Lamp Grass 🔹 Valberry 🔹 Windwheel Aster 🔹 Wolfhook",
      "",
      "**[Liyue]**",
      "Cor Lapis 🔹 Glaze Lily 🔹 Jueyun Chili 🔹 Noctilucous Jade 🔹 Qingxin 🔹 Silk Flower 🔹 Starconch 🔹 Violetgrass",
      "",
      `0️⃣ Overview`, 
    ])

    const eighth = new Embed()
    .setTitle("Cooking Ingredients")
    .setDescription([
      "[⭐⭐⭐⭐⭐]",
      "Almond 🔹 Bacon 🔹 Bamboo Shoot 🔹 Berry 🔹 Bird Egg 🔹 Butter 🔹 Cabbage 🔹 Calla Lily 🔹 Carrot 🔹 Cheese",
      "",
      "Chilled Meat 🔹 Crab 🔹 Crab Roe 🔹 Cream 🔹 Fish 🔹 Flour 🔹 Fowl 🔹 Ham 🔹 Jam 🔹 Jueyun Chili",
      "",
      "Lotus Head 🔹 Matsutake 🔹 Milk 🔹 Mint 🔹 Mushroom 🔹 Onion 🔹 Pepper 🔹 Pinecone 🔹 Potato 🔹 Qingxin",
      "",
      "Radish 🔹 Raw Meat 🔹 Rice 🔹 Salt 🔹 Sausage 🔹 Shrimp Meat 🔹 Small Lamp Grass 🔹 Smoked Fowl 🔹 Snapdragon 🔹 Sugar",
      "",
      "Sweet Flower 🔹 Tofu 🔹 Tomato 🔹 Violetgrass 🔹 Wheat",
      "",
      `0️⃣ Overview`, 
    ])

  const pages = {
    0: { page: 0, embed: zero, emoji: "0️⃣" },
    1: { page: 1, embed: first, emoji: "1️⃣" },
    2: { page: 2, embed: second, emoji: "2️⃣" },
    3: { page: 3, embed: third, emoji: "3️⃣" },
    4: { page: 4, embed: fourth, emoji: "4️⃣" },
    5: { page: 5, embed: fifth, emoji: "5️⃣" },
    6: { page: 6, embed: sixth, emoji: "6️⃣" },
    7: { page: 7, embed: seventh, emoji: "7️⃣" },
    8: { page: 8, embed: eighth, emoji: "8️⃣" },
  } as Record<number, { page: number; embed: Embed; emoji: string } | undefined>;

  const page = pages[args.page];
  if (!page) return;

  // SEND FIRST EMBED
  const response = args.msg
    ? await (args.msg as Message).edit({ embed: page.embed }).catch(console.log)
    : await message.reply({ embed: page.embed }).catch(console.log);
  if (!response) return;

  const emojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣"];
  // ADD THE REACTIONS
  if (!args.msg) await response.addReactions(emojis, true).catch(console.log);

  // HANDLE PAGINATION
  const reaction = await needReaction(message.author.id, response.id, {
    filter: (userID, reaction) => message.author.id === userID && page.emoji !== reaction,
  }).catch(console.log);
  if (!reaction) return;

  const selectedPage = Object.values(pages).find((page) => page?.emoji === reaction);
  if (!selectedPage) return;
},
});