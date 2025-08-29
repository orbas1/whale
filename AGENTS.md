# Browser Monster Game Design Guide

## Production Sprint Tasks
1. **Codebase Review & Environment Setup**
   - Confirm Node 18 environment and run `npm install`.
   - Audit repository structure and clean unused assets.
   - Document local development prerequisites.
2. **Core Engine Stabilization**
   - Build game loop with update and render phases.
   - Implement HTML5 Canvas rendering utilities.
   - Add keyboard and mouse input handlers.
3. **Data Model Finalization**
   - Normalize monster, move, and item data into modules.
   - Validate data integrity with sample scenarios.
   - Provide type definitions or interfaces.
4. **Procedural Sprite Generator**
   - Implement generator library for monsters, items, and attacks.
   - Integrate sprites with canvas rendering pipeline.
   - Document extension points for new assets.
5. **Gameplay Features**
   - Turn-based battle system with HP and status tracking.
   - Monster capture mechanics and probability balancing.
   - Inventory management and item usage flows.
   - Save/load using `localStorage`.
6. **UI/UX Implementation**
   - Build responsive layout using Chakra UI components.
   - Implement navigation for map, inventory, battle, and settings views.
   - Add accessibility options (contrast mode, text scaling).
7. **Content Integration**
   - Import map data and location transitions.
   - Populate world with sample monsters, items, and NPCs.
   - Hook up gyms and route encounters per design guide.
8. **Testing & Quality Assurance**
   - Run `npm test` and add additional unit tests for critical modules.
   - Configure linting and formatting (ESLint/Prettier) and run on commit.
   - Conduct manual cross-browser smoke testing.
9. **Optimization & Performance**
   - Profile render loop and address memory leaks.
   - Lazy-load assets and minimize bundle size with Next.js features.
   - Optimize localStorage read/write operations.
10. **Deployment & Documentation**
    - Prepare production build with `npm run build` and `npm start`.
    - Write README with setup, build, and contribution guidelines.
    - Tag release `v1.0.0` and generate release notes.
    - Set up CI workflow for future merges.


## Overview
- Client-only RPG rendered with HTML5 Canvas; all sprites procedurally generated.
- Game data stored in JavaScript objects; persistence via localStorage.
- World inspired by monster-catching adventures but with original lore.

## Region
- **Sprout Town**: Starting point with tutorial; grassy outskirts.
- **Harbor City**: Coastal port, Water gym, ferry dock.
- **Forge Town**: Volcanic settlement, Fire gym.
- **Gale Village**: Windy plains, Flying gym.
- **Verdant Hamlet**: Forest hub with Breeding Ranch.
- **Quarry City**: Rocky cliffs, Rock gym.
- **Lumen Town**: Desert oasis, Electric gym.
- **Frostburg**: Snowy, Ice gym.
- **Mystic City**: Urban center, Psychic gym.
- **Obsidian Cove**: Dark shore, Dark gym, ferry to islands.
- **Aqua Isle**: Island resort with training beach.
- **Blizzard Isle**: Frozen island with cavern.
- **Ember Isle**: Volcanic island with rare Fire monsters.
- **Skyreach Base**: Balloon docks to reach Sky Land.
- **Sky Land**: Floating continent, rare Flying monsters.
- **Ruined Temple**: Ancient site haunted by ghosts.
- **Crystal Town**: Gemstone mines and markets.
- **Echo Village**: Canyon settlement with echo puzzles.
- **Solar City**: High-tech metropolis, Steel gym.
- **Final Plateau**: Entrance to Monster League.

### Routes
- Route 1: snow path; wild Rock types
- Route 2: snow path; wild Rock types
- Route 3: grassy fields; wild Electric types
- Route 4: mountain pass; wild Ground types
- Route 5: forest road; wild Electric types
- Route 6: forest road; wild Ice types
- Route 7: mountain pass; wild Grass types
- Route 8: mountain pass; wild Water types
- Route 9: rocky trail; wild Water types
- Route 10: snow path; wild Fire types
- Route 11: mountain pass; wild Electric types
- Route 12: mountain pass; wild Poison types
- Route 13: coastal path; wild Electric types
- Route 14: grassy fields; wild Fire types
- Route 15: snow path; wild Flying types
- Route 16: rocky trail; wild Ground types
- Route 17: mountain pass; wild Fire types
- Route 18: rocky trail; wild Rock types
- Route 19: rocky trail; wild Poison types
- Route 20: desert stretch; wild Grass types
- Route 21: mountain pass; wild Ground types
- Route 22: forest road; wild Bug types
- Route 23: rocky trail; wild Normal types
- Route 24: snow path; wild Bug types
- Route 25: grassy fields; wild Fire types
- Route 26: desert stretch; wild Rock types
- Route 27: desert stretch; wild Flying types
- Route 28: desert stretch; wild Normal types
- Route 29: mountain pass; wild Ground types
- Route 30: snow path; wild Ice types

## Monster Types
- Normal
- Fire
- Water
- Grass
- Electric
- Ice
- Fighting
- Psychic
- Dark
- Rock
- Ground
- Flying
- Bug
- Poison
- Ghost
- Steel
- Light
- Dragon

## Moves (200)
|Name|Type|Power|Accuracy|Effect|
|----|----|-----|--------|------|
|QuickBlast|Normal|51|93|raises Defense|
|QuickBeam|Normal|110|97|may freeze|
|QuickStrike|Normal|44|99|none|
|QuickClaw|Normal|48|77|may paralyze|
|PowerBlast|Normal|89|84|may freeze|
|PowerBeam|Normal|30|80|heals user 50%|
|PowerStrike|Normal|82|73|raises Attack|
|PowerClaw|Normal|90|79|may freeze|
|MegaBlast|Normal|90|80|heals user 50%|
|MegaBeam|Normal|46|100|none|
|MegaStrike|Normal|90|88|raises Attack|
|MegaClaw|Normal|76|72|none|
|FlameBlast|Fire|69|80|none|
|FlameBeam|Fire|50|79|may paralyze|
|FlameStrike|Fire|44|96|may paralyze|
|FlameClaw|Fire|24|89|raises Attack|
|BlazeBlast|Fire|80|72|may freeze|
|BlazeBeam|Fire|106|94|may paralyze|
|BlazeStrike|Fire|39|99|may burn|
|BlazeClaw|Fire|30|98|heals user 50%|
|HeatBlast|Fire|107|82|heals user 50%|
|HeatBeam|Fire|55|86|may poison|
|HeatStrike|Fire|47|98|none|
|HeatClaw|Fire|73|88|raises Attack|
|AquaBlast|Water|77|85|raises Defense|
|AquaBeam|Water|30|80|none|
|AquaStrike|Water|34|85|none|
|AquaClaw|Water|100|80|may poison|
|HydroBlast|Water|51|70|raises Attack|
|HydroBeam|Water|34|92|may poison|
|HydroStrike|Water|67|95|may paralyze|
|HydroClaw|Water|62|83|may burn|
|BubbleBlast|Water|32|95|may paralyze|
|BubbleBeam|Water|109|77|may burn|
|BubbleStrike|Water|93|90|heals user 50%|
|BubbleClaw|Water|97|91|may freeze|
|LeafBlast|Grass|23|73|may poison|
|LeafBeam|Grass|97|96|none|
|LeafStrike|Grass|35|82|may freeze|
|LeafClaw|Grass|67|96|may freeze|
|VineBlast|Grass|24|89|may burn|
|VineBeam|Grass|44|100|may paralyze|
|VineStrike|Grass|111|73|critical hit boost|
|VineClaw|Grass|46|93|may burn|
|SeedBlast|Grass|106|70|heals user 50%|
|SeedBeam|Grass|74|89|may freeze|
|SeedStrike|Grass|53|72|may poison|
|SeedClaw|Grass|29|90|raises Attack|
|VoltBlast|Electric|64|83|may paralyze|
|VoltBeam|Electric|27|86|critical hit boost|
|VoltStrike|Electric|25|89|may freeze|
|VoltClaw|Electric|109|82|may poison|
|SparkBlast|Electric|53|81|critical hit boost|
|SparkBeam|Electric|92|75|may poison|
|SparkStrike|Electric|118|71|may paralyze|
|SparkClaw|Electric|40|80|heals user 50%|
|ThunderBlast|Electric|52|73|none|
|ThunderBeam|Electric|76|91|may paralyze|
|ThunderStrike|Electric|21|85|lowers Speed|
|ThunderClaw|Electric|92|97|heals user 50%|
|FrostBlast|Ice|59|90|raises Defense|
|FrostBeam|Ice|69|96|raises Attack|
|FrostStrike|Ice|39|87|may burn|
|FrostClaw|Ice|78|93|may freeze|
|IceBlast|Ice|62|93|may burn|
|IceBeam|Ice|89|78|may paralyze|
|IceStrike|Ice|50|94|critical hit boost|
|IceClaw|Ice|65|89|raises Attack|
|SnowBlast|Ice|106|81|none|
|SnowBeam|Ice|101|97|none|
|SnowStrike|Ice|36|92|raises Attack|
|SnowClaw|Ice|69|93|lowers Speed|
|PunchBlast|Fighting|103|72|may burn|
|PunchBeam|Fighting|96|76|raises Defense|
|PunchStrike|Fighting|40|77|may poison|
|PunchClaw|Fighting|101|84|lowers Speed|
|KickBlast|Fighting|110|98|none|
|KickBeam|Fighting|73|71|lowers Speed|
|KickStrike|Fighting|109|88|lowers Speed|
|KickClaw|Fighting|118|91|may burn|
|FistBlast|Fighting|41|84|may freeze|
|FistBeam|Fighting|53|92|may paralyze|
|FistStrike|Fighting|77|86|critical hit boost|
|FistClaw|Fighting|91|89|may burn|
|MindBlast|Psychic|24|85|raises Defense|
|MindBeam|Psychic|59|96|critical hit boost|
|MindStrike|Psychic|26|95|lowers Speed|
|MindClaw|Psychic|44|87|may freeze|
|PsyBlast|Psychic|112|74|may burn|
|PsyBeam|Psychic|71|100|lowers Speed|
|PsyStrike|Psychic|60|70|may poison|
|PsyClaw|Psychic|21|92|may burn|
|AuraBlast|Psychic|106|86|none|
|AuraBeam|Psychic|32|76|may freeze|
|AuraStrike|Psychic|97|90|may poison|
|AuraClaw|Psychic|58|78|may paralyze|
|ShadowBlast|Dark|32|85|lowers Speed|
|ShadowBeam|Dark|100|72|may burn|
|ShadowStrike|Dark|55|99|critical hit boost|
|ShadowClaw|Dark|34|97|raises Attack|
|NightBlast|Dark|37|90|heals user 50%|
|NightBeam|Dark|103|90|raises Defense|
|NightStrike|Dark|34|97|may paralyze|
|NightClaw|Dark|55|97|may burn|
|DuskBlast|Dark|25|71|may poison|
|DuskBeam|Dark|107|78|heals user 50%|
|DuskStrike|Dark|60|100|raises Defense|
|DuskClaw|Dark|92|99|may burn|
|StoneBlast|Rock|115|100|none|
|StoneBeam|Rock|103|85|critical hit boost|
|StoneStrike|Rock|101|83|raises Defense|
|StoneClaw|Rock|88|75|may poison|
|RockBlast|Rock|68|88|raises Attack|
|RockBeam|Rock|21|74|may paralyze|
|RockStrike|Rock|54|80|raises Defense|
|RockClaw|Rock|67|92|may freeze|
|PebbleBlast|Rock|63|94|none|
|PebbleBeam|Rock|24|71|raises Attack|
|PebbleStrike|Rock|40|74|none|
|PebbleClaw|Rock|57|81|lowers Speed|
|MudBlast|Ground|90|74|raises Attack|
|MudBeam|Ground|34|85|may poison|
|MudStrike|Ground|26|79|may paralyze|
|MudClaw|Ground|86|93|may freeze|
|EarthBlast|Ground|58|82|raises Defense|
|EarthBeam|Ground|58|83|may freeze|
|EarthStrike|Ground|32|87|critical hit boost|
|EarthClaw|Ground|80|80|raises Defense|
|QuakeBlast|Ground|35|85|may freeze|
|QuakeBeam|Ground|109|85|lowers Speed|
|QuakeStrike|Ground|24|79|raises Defense|
|QuakeClaw|Ground|114|91|may paralyze|
|GaleBlast|Flying|41|90|none|
|GaleBeam|Flying|68|95|may freeze|
|GaleStrike|Flying|28|95|may freeze|
|GaleClaw|Flying|45|93|may poison|
|WingBlast|Flying|27|82|may burn|
|WingBeam|Flying|32|82|heals user 50%|
|WingStrike|Flying|86|79|critical hit boost|
|WingClaw|Flying|82|95|none|
|SkyBlast|Flying|111|91|may poison|
|SkyBeam|Flying|74|72|raises Defense|
|SkyStrike|Flying|48|78|none|
|SkyClaw|Flying|119|75|lowers Speed|
|InsectBlast|Bug|44|81|may freeze|
|InsectBeam|Bug|28|96|may burn|
|InsectStrike|Bug|87|84|may poison|
|InsectClaw|Bug|35|85|lowers Speed|
|BuzzBlast|Bug|52|76|may burn|
|BuzzBeam|Bug|47|89|may paralyze|
|BuzzStrike|Bug|33|76|critical hit boost|
|BuzzClaw|Bug|68|81|heals user 50%|
|StingBlast|Bug|39|73|none|
|StingBeam|Bug|82|74|none|
|StingStrike|Bug|71|90|lowers Speed|
|StingClaw|Bug|86|85|raises Defense|
|ToxicBlast|Poison|83|85|may poison|
|ToxicBeam|Poison|89|89|may poison|
|ToxicStrike|Poison|21|80|raises Defense|
|ToxicClaw|Poison|61|71|heals user 50%|
|VenomBlast|Poison|38|97|raises Attack|
|VenomBeam|Poison|97|95|may paralyze|
|VenomStrike|Poison|68|88|raises Attack|
|VenomClaw|Poison|111|92|critical hit boost|
|PoisonBlast|Poison|28|95|may freeze|
|PoisonBeam|Poison|86|97|may burn|
|PoisonStrike|Poison|28|77|may paralyze|
|PoisonClaw|Poison|25|79|may burn|
|SpiritBlast|Ghost|117|97|critical hit boost|
|SpiritBeam|Ghost|62|97|may paralyze|
|SpiritStrike|Ghost|39|97|critical hit boost|
|SpiritClaw|Ghost|67|86|lowers Speed|
|GhoulBlast|Ghost|87|86|may burn|
|GhoulBeam|Ghost|93|72|heals user 50%|
|GhoulStrike|Ghost|117|89|may freeze|
|GhoulClaw|Ghost|115|83|may poison|
|PhantomBlast|Ghost|57|87|none|
|PhantomBeam|Ghost|73|96|critical hit boost|
|PhantomStrike|Ghost|69|89|none|
|PhantomClaw|Ghost|49|97|may burn|
|MetalBlast|Steel|104|98|may burn|
|MetalBeam|Steel|114|75|raises Attack|
|MetalStrike|Steel|84|88|raises Attack|
|MetalClaw|Steel|62|72|critical hit boost|
|IronBlast|Steel|53|100|raises Attack|
|IronBeam|Steel|118|83|lowers Speed|
|IronStrike|Steel|69|71|may paralyze|
|IronClaw|Steel|102|99|may paralyze|
|SteelBlast|Steel|50|79|raises Defense|
|SteelBeam|Steel|27|100|may burn|
|SteelStrike|Steel|81|83|may paralyze|
|SteelClaw|Steel|82|98|none|
|LightBlast|Light|111|72|may paralyze|
|LightBeam|Light|65|83|may burn|
|LightStrike|Light|98|84|lowers Speed|
|LightClaw|Light|78|71|may freeze|
|RadiantBlast|Light|80|94|may paralyze|
|RadiantBeam|Light|22|71|none|
|RadiantStrike|Light|99|74|raises Defense|
|RadiantClaw|Light|33|92|heals user 50%|

## Items
|Name|Visual|Effect|
|----|------|------|
|Potion|silver orb|boost special|
|Super Potion|light gem|cure status|
|Hyper Potion|crystal icon|heal over time|
|Max Potion|crystal icon|encounter water monsters|
|Revive|blue bottle|repel wild monsters|
|Antidote|feather icon|boost defense|
|Paralyze Heal|blue bottle|encounter water monsters|
|Burn Ointment|feather icon|boost attack|
|Ice Melt|blue bottle|cure status|
|Awaken|green leaf icon|encounter water monsters|
|Escape Rope|gear icon|restore HP|
|Repel|light gem|encounter water monsters|
|Capture Orb|red bottle|encounter water monsters|
|Great Orb|stone icon|protect from status|
|Ultra Orb|blue bottle|trigger evolution|
|Mist Stone|blue bottle|increase money|
|Speed Charm|stone icon|boost attack|
|Power Band|stone icon|restore HP|
|Defense Belt|green leaf icon|increase money|
|Flight Ticket|silver orb|restore HP|
|Egg Incubator|blue bottle|increase money|
|Fishing Rod|silver orb|boost defense|
|Luck Coin|silver orb|restore HP|
|Guard Amulet|red bottle|boost attack|
|XP Share|stone icon|repel wild monsters|
|Health Charm|dark gem|restore HP|
|Magic Feather|green leaf icon|increase capture rate|
|Iron Plate|gear icon|boost speed|
|Soft Sand|gear icon|boost attack|
|Mystic Water|golden amulet|increase money|
|Charcoal|red bottle|boost defense|
|Sharp Beak|stone icon|boost special|
|Silver Powder|gear icon|escape dungeon|
|Poison Barb|golden amulet|repel wild monsters|
|Never-Melt Ice|green leaf icon|escape dungeon|
|Black Belt|blue bottle|cure status|
|Twisted Spoon|green leaf icon|repel wild monsters|
|Dark Glasses|green leaf icon|hatch egg faster|
|Light Stone|silver orb|boost defense|
|Dragon Fang|crystal icon|escape dungeon|
|Metal Coat|silver orb|increase capture rate|
|Silk Scarf|golden amulet|boost speed|
|Bright Powder|feather icon|increase money|
|King Rock|green leaf icon|revive monster|
|Quick Claw|feather icon|restore HP|
|Scope Lens|blue bottle|cure status|
|Leftovers|feather icon|boost defense|
|Shell Bell|crystal icon|repel wild monsters|
|Focus Band|green leaf icon|encounter water monsters|
|Soothe Bell|golden amulet|encounter water monsters|
|Cleanse Tag|blue bottle|increase money|
|Smoke Ball|gear icon|increase capture rate|
|Light Ball|light gem|increase money|
|Magnet|red bottle|heal over time|
|Miracle Seed|feather icon|hatch egg faster|
|Hard Stone|feather icon|restore HP|
|Black Sludge|gear icon|escape dungeon|
|Expert Belt|stone icon|boost special|
|Wide Lens|gear icon|repel wild monsters|
|Choice Band|green leaf icon|cure status|
|Choice Scarf|golden amulet|boost attack|
|Choice Specs|crystal icon|boost attack|
|Life Orb|gear icon|boost defense|
|Toxic Orb|green leaf icon|hatch egg faster|
|Flame Orb|feather icon|encounter water monsters|
|Sticky Barb|silver orb|boost speed|
|Ring Target|stone icon|increase experience|
|Zoom Lens|green leaf icon|heal over time|
|Metronome|gear icon|increase money|
|Muscle Band|gear icon|cure status|
|Wise Glasses|golden amulet|boost special|
|Eviolite|gear icon|restore HP|
|Rocky Helmet|red bottle|increase experience|
|Air Balloon|golden amulet|boost special|
|Red Card|light gem|boost attack|
|Safety Goggles|crystal icon|repel wild monsters|
|Assault Vest|feather icon|boost defense|
|Weakness Policy|blue bottle|protect from status|
|Adrenal Orb|silver orb|protect from status|
|Terrain Seed|golden amulet|hatch egg faster|
|Ability Capsule|blue bottle|restore HP|
|Item Finder|light gem|trigger evolution|
|Town Map|red bottle|revive monster|
|Poke Flute|feather icon|trigger evolution|
|Exp Charm|dark gem|heal over time|
|Mega Charm|gear icon|hatch egg faster|
|Zeta Crystal|golden amulet|boost attack|
|Teleporter|golden amulet|increase money|
|Weather Rock|dark gem|boost special|
|Time Watch|red bottle|cure status|
|Berry Bag|golden amulet|cure status|
|Energy Powder|crystal icon|repel wild monsters|
|Heal Powder|blue bottle|escape dungeon|
|Sacred Ash|silver orb|heal over time|
|Battle Pass|blue bottle|boost speed|
|Travel Pass|golden amulet|encounter water monsters|
|Deluxe Voucher|crystal icon|repel wild monsters|
|Friend Ticket|dark gem|boost defense|
|Mystery Key|light gem|heal over time|
|Spirit Tag|crystal icon|boost special|
|Rune Scroll|feather icon|boost attack|
|Glow Shard|golden amulet|hatch egg faster|
|Shadow Gem|gear icon|repel wild monsters|
|Heart Locket|dark gem|increase money|

## Monster Roster (350)
|ID|Name|Type|Stats HP/Atk/Def/Spd/Spc|Evolution|Moves|
|--|----|----|------------------------|--------|-----|
|001|Umbrahorn|Psychic/Ghost|50/45/70/47/51|Lv16->Floradrake|PebbleStrike, AuraBeam, InsectBlast, BubbleClaw|
|002|Floradrake|Normal|74/86/50/60/87|Lv36->Wavedrake|MetalClaw, SeedBlast, LeafStrike, PowerBlast|
|003|Wavedrake|Fire|61/80/92/60/62|Final|HydroBlast, InsectStrike, ToxicBlast, LeafBeam|
|004|Magmaworm|Normal|64/44/61/65/52|Lv16->Solarstag|InsectBeam, GhoulClaw, MindBeam, MetalStrike|
|005|Solarstag|Dragon|65/58/73/82/63|Lv36->Echobot|BubbleBeam, DuskBlast, InsectBlast, SpiritBlast|
|006|Echobot|Steel|82/66/87/87/75|Final|NightBeam, FrostBeam, PoisonBeam, MudClaw|
|007|Voltpup|Dark|52/69/58/42/66|Lv16->Lunatoad|GaleStrike, AuraClaw, WingStrike, PowerBeam|
|008|Lunatoad|Fire|88/89/80/65/67|Lv36->Pyrocobra|NightBlast, VenomBlast, AquaClaw, WingBlast|
|009|Pyrocobra|Poison|63/69/105/85/61|Final|NightBlast, StoneStrike, AquaStrike, MetalStrike|
|010|Neowing|Ground|54/59/54/45/45|Lv16->Pyrobat|VineBlast, BuzzClaw, PunchBlast, LightClaw|
|011|Pyrobat|Flying|82/57/73/72/59|Lv36->Wavegeist|VenomBeam, GaleBlast, LightBlast, FlameBeam|
|012|Wavegeist|Ground/Fire|72/76/71/106/97|Final|PunchStrike, SkyBeam, StoneStrike, MegaBlast|
|013|Kilobat|Fighting|61/53/48/52/63|Lv16->Umbramon|BubbleBeam, HydroBlast, ToxicBlast, PsyClaw|
|014|Umbramon|Ghost/Water|60/51/77/86/75|Lv36->Obsidpup|RadiantClaw, StoneBlast, WingClaw, IronBeam|
|015|Obsidpup|Ice/Dragon|95/68/70/69/73|Final|BubbleStrike, EarthStrike, PsyClaw, ToxicClaw|
|016|Echocobra|Grass|63/49/62/65/50|Lv16->Pyromon|DuskBlast, RadiantBeam, IceClaw, VineBlast|
|017|Pyromon|Electric|71/90/82/71/84|Lv36->Terrawing|SteelBeam, SteelStrike, SkyStrike, KickStrike|
|018|Terrawing|Light|75/84/82/84/90|Final|DuskBlast, DuskBlast, AquaBeam, GhoulStrike|
|019|Aeromoth|Light/Fighting|44/44/40/58/59|Lv16->Pyroworm|StingBlast, PoisonBlast, StingStrike, QuakeClaw|
|020|Pyroworm|Water|57/67/89/60/74|Lv36->Aerogeist|QuickStrike, HydroBeam, AuraBlast, IronBlast|
|021|Aerogeist|Flying|90/80/66/103/88|Final|IceBlast, SpiritStrike, EarthBlast, RadiantStrike|
|022|Cryohog|Water|47/69/45/57/57|Lv16->Xenohog|QuakeStrike, VineClaw, PowerStrike, PoisonBlast|
|023|Xenohog|Ghost|60/83/76/88/63|Lv36->Magmaling|NightClaw, IceClaw, PowerBeam, BuzzStrike|
|024|Magmaling|Fire|68/84/70/88/96|Final|HeatStrike, PoisonBlast, BuzzStrike, NightClaw|
|025|Lunamon|Fire|50/47/56/67/54|Lv16->Dusksaur|AquaStrike, SnowBlast, QuakeBeam, EarthBeam|
|026|Dusksaur|Psychic|85/75/80/66/61|Lv36->Aerogator|VineBlast, KickBeam, StingClaw, LeafBlast|
|027|Aerogator|Poison|89/64/64/90/85|Final|IceClaw, MudClaw, ThunderStrike, HydroBlast|
|028|Umbraserpent|Electric|49/44/51/65/43|Lv16->Jadecobra|FlameStrike, SpiritStrike, BubbleClaw, BuzzStrike|
|029|Jadecobra|Dragon|85/62/50/52/75|Lv36->Hexahorn|StingStrike, EarthBeam, MetalStrike, PhantomBlast|
|030|Hexahorn|Ground|66/90/95/82/109|Final|GhoulClaw, QuickBeam, FrostBeam, ThunderStrike|
|031|Yonderdillo|Normal|55/66/49/48/47|Lv16->Jadewing|QuakeStrike, MindClaw, HeatClaw, BlazeClaw|
|032|Jadewing|Bug|69/86/77/64/73|Lv36->Duskshell|LeafBeam, ThunderClaw, PunchBeam, VoltClaw|
|033|Duskshell|Flying/Electric|107/109/90/102/110|Final|RadiantClaw, HydroStrike, NightStrike, PsyStrike|
|034|Obsidserpent|Flying|56/67/55/47/60|Lv16->Kiloworm|PsyClaw, StoneStrike, SnowClaw, PsyClaw|
|035|Kiloworm|Grass|75/68/56/80/68|Lv36->Floracat|PsyBlast, FrostStrike, SteelStrike, SeedClaw|
|036|Floracat|Bug|81/91/74/67/103|Final|PebbleStrike, QuakeClaw, PebbleStrike, InsectBlast|
|037|Neotoad|Light|66/59/47/61/52|Lv16->Voltshell|ThunderClaw, FistBlast, GaleBlast, GhoulClaw|
|038|Voltshell|Psychic|50/55/80/70/75|Lv36->Echostag|StoneStrike, FlameBlast, InsectClaw, RadiantBeam|
|039|Echostag|Ground/Ice|62/86/65/76/72|Final|PhantomStrike, AuraBeam, PowerClaw, ThunderClaw|
|040|Wavehorn|Normal/Psychic|70/41/40/52/57|Lv16->Quakecat|HeatBlast, SteelBeam, PebbleClaw, VoltStrike|
|041|Quakecat|Dragon/Psychic|50/83/89/76/54|Lv36->Echowing|ThunderStrike, DuskStrike, ShadowBeam, MudBeam|
|042|Echowing|Fire|60/87/73/84/108|Final|SnowBlast, PowerClaw, BuzzBeam, PsyBlast|
|043|Florastag|Ghost|62/51/66/50/61|Lv16->Lunaox|StingBlast, GaleBlast, HeatClaw, IceBlast|
|044|Lunaox|Electric|56/56/67/51/59|Lv36->Magmashell|InsectStrike, SpiritBlast, FistBeam, VoltClaw|
|045|Magmashell|Grass|86/92/92/67/95|Final|MudBeam, HydroClaw, QuakeStrike, RockStrike|
|046|Zephyrbat|Electric|55/45/54/57/50|Lv16->Magmacobra|ShadowBlast, HeatBlast, InsectBlast, QuakeBeam|
|047|Magmacobra|Steel|71/64/79/65/72|Lv36->Hexaox|DuskBeam, PowerStrike, RockStrike, IronBeam|
|048|Hexaox|Ghost/Psychic|60/95/85/108/109|Final|IceBlast, MudStrike, MudBeam, LeafBlast|
|049|Gigastag|Steel|47/54/49/51/60|Lv16->Gigadillo|LeafStrike, GaleBeam, GhoulClaw, HeatStrike|
|050|Gigadillo|Fire/Water|62/69/83/90/57|Lv36->Wavemon|MindBeam, ToxicClaw, VineBeam, RadiantBlast|
|051|Wavemon|Steel/Bug|89/84/103/72/86|Final|FlameBlast, RadiantBeam, MindStrike, LightStrike|
|052|Magmamon|Ground/Ghost|61/66/56/46/63|Lv16->Hexatoad|LeafStrike, VenomStrike, PhantomBlast, ToxicStrike|
|053|Hexatoad|Fire/Flying|81/86/63/88/78|Lv36->Cryotail|SkyStrike, IronClaw, VoltStrike, QuickBlast|
|054|Cryotail|Psychic|62/63/68/75/88|Final|AquaClaw, LightBeam, GaleBlast, StoneBlast|
|055|Xenotoad|Ground|69/60/60/49/68|Lv16->Volttail|VoltBeam, VineBeam, AuraClaw, SkyStrike|
|056|Volttail|Ghost/Psychic|72/78/75/78/70|Lv36->Hexasaur|LightBeam, HydroBeam, LightBlast, LeafClaw|
|057|Hexasaur|Flying|85/89/105/94/73|Final|PowerBeam, NightClaw, SparkBeam, HeatStrike|
|058|Jadesaur|Poison|67/53/58/58/67|Lv16->Cryoserpent|VenomStrike, QuickBeam, SpiritClaw, BubbleStrike|
|059|Cryoserpent|Dragon/Steel|83/81/69/74/84|Lv36->Quakeraptor|LightBlast, QuickClaw, SparkBlast, DuskClaw|
|060|Quakeraptor|Normal|99/108/83/79/65|Final|FrostBeam, ToxicBeam, PowerClaw, BuzzStrike|
|061|Jaderaptor|Ghost/Steel|67/70/56/51/44|Lv16->Lunashell|SnowClaw, ThunderBlast, ShadowBeam, ShadowStrike|
|062|Lunashell|Water/Flying|82/71/64/87/66|Lv36->Obsidmon|VenomBlast, BuzzBeam, InsectBlast, EarthBlast|
|063|Obsidmon|Bug|64/93/90/87/80|Final|PowerStrike, HydroBeam, StoneClaw, StingClaw|
|064|Quakehog|Electric|61/69/70/44/64|Lv16->Umbrabot|HydroStrike, MetalBlast, StoneStrike, FrostClaw|
|065|Umbrabot|Grass|52/90/67/66/74|Lv36->Xenoshell|AuraClaw, ToxicBeam, VenomClaw, VoltBlast|
|066|Xenoshell|Light|107/94/94/63/81|Final|VineBeam, EarthStrike, PowerBeam, VenomClaw|
|067|Pyrogator|Grass|67/48/50/44/51|Lv16->Wavebat|DuskStrike, LightStrike, BlazeBeam, IceBlast|
|068|Wavebat|Electric|86/56/83/54/87|Lv36->Gigacat|GaleBeam, ThunderBeam, PsyBlast, AquaBlast|
|069|Gigacat|Psychic|95/105/73/71/104|Final|StingClaw, PhantomStrike, SteelStrike, RockBlast|
|070|Ionmon|Flying|51/45/48/63/68|Lv16->Blazemon|SkyBlast, VoltClaw, SparkClaw, PebbleClaw|
|071|Blazemon|Water|70/58/67/85/50|Lv36->Floramoth|FistClaw, KickStrike, MetalBlast, FistStrike|
|072|Floramoth|Grass/Rock|62/65/99/60/78|Final|VoltClaw, QuakeClaw, SkyBeam, PsyBlast|
|073|Aeropup|Dragon|67/54/42/53/56|Lv16->Umbraling|HydroClaw, HeatBlast, BuzzClaw, PebbleStrike|
|074|Umbraling|Poison|70/61/68/65/90|Lv36->Echobeast|PunchBeam, MegaBlast, PowerBeam, QuickStrike|
|075|Echobeast|Ground|100/77/64/102/80|Final|PoisonClaw, PunchBeam, FlameBlast, MetalBeam|
|076|Zephyrshell|Electric/Fire|47/67/68/62/56|Lv16->Voltfiend|ShadowClaw, DuskClaw, SnowClaw, BuzzBeam|
|077|Voltfiend|Ghost|64/66/70/84/81|Lv36->Terraworm|StoneBlast, AuraClaw, VineClaw, GaleBeam|
|078|Terraworm|Normal/Ground|63/74/105/90/84|Final|AquaBeam, SeedStrike, BubbleBlast, RockBlast|
|079|Riftfiend|Poison/Psychic|40/68/64/51/56|Lv16->Obsidwing|EarthClaw, PunchBlast, SnowBlast, NightClaw|
|080|Obsidwing|Flying/Electric|77/80/53/60/83|Lv36->Kilosaur|ThunderBlast, KickBeam, LeafBeam, SeedClaw|
|081|Kilosaur|Psychic|95/76/94/61/71|Final|IronBlast, DuskStrike, MetalBlast, VineBlast|
|082|Cryoox|Ice|47/64/57/44/68|Lv16->Kilocat|GaleStrike, RadiantStrike, KickBlast, MetalBeam|
|083|Kilocat|Ice|51/79/62/53/76|Lv36->Riftstag|ShadowClaw, SparkStrike, ShadowStrike, WingBlast|
|084|Riftstag|Dragon/Water|93/91/66/68/65|Final|QuickStrike, SteelClaw, FrostStrike, SteelStrike|
|085|Kilogator|Flying|52/54/61/48/53|Lv16->Blazewing|IceStrike, IronBeam, BlazeClaw, LightClaw|
|086|Blazewing|Fire|60/87/65/63/52|Lv36->Lunabeast|BlazeBeam, PhantomBeam, RockStrike, FrostClaw|
|087|Lunabeast|Electric|88/105/109/108/102|Final|QuakeStrike, PunchStrike, QuickClaw, StingBeam|
|088|Gigageist|Rock|44/51/61/51/51|Lv16->Lunawing|PhantomBlast, IceBlast, BubbleStrike, PowerBeam|
|089|Lunawing|Steel|80/62/88/75/71|Lv36->Gigagator|BubbleClaw, MudBeam, PunchClaw, PhantomClaw|
|090|Gigagator|Bug|81/82/100/98/84|Final|PhantomStrike, QuakeBlast, KickBlast, GhoulBlast|
|091|Voltcobra|Fighting|66/64/58/66/47|Lv16->Xenopup|IceClaw, QuakeClaw, VineStrike, QuakeStrike|
|092|Xenopup|Steel|58/88/83/84/82|Lv36->Jadegeist|IceStrike, StoneStrike, KickBeam, PebbleBlast|
|093|Jadegeist|Fighting|101/93/63/110/106|Final|PebbleBeam, PhantomBlast, BlazeBeam, PowerBlast|
|094|Magmagator|Normal|46/59/43/67/48|Lv16->Pyromoth|SparkClaw, SeedClaw, ToxicStrike, SeedBlast|
|095|Pyromoth|Normal|73/89/67/50/51|Lv36->Wavefiend|VineStrike, KickClaw, FrostBlast, NightBlast|
|096|Wavefiend|Poison|91/107/83/82/65|Final|PhantomClaw, PowerStrike, RadiantBlast, SeedBlast|
|097|Blazepup|Fighting|40/59/57/48/51|Lv16->Riftbeast|ShadowStrike, VoltStrike, FistBeam, SeedClaw|
|098|Riftbeast|Light|61/81/59/89/87|Lv36->Aerostag|VenomBlast, ThunderStrike, QuickBlast, FlameBeam|
|099|Aerostag|Electric|87/98/62/101/101|Final|DuskClaw, KickClaw, MindBlast, VenomStrike|
|100|Pyrostag|Fighting|69/60/69/66/59|Lv16->Obsiddrake|MindStrike, BubbleClaw, FistBlast, SpiritBlast|
|101|Obsiddrake|Dark|67/81/80/88/71|Lv36->Cryobeast|BlazeClaw, PebbleBeam, LightBeam, VineBlast|
|102|Cryobeast|Bug|66/92/76/95/105|Final|DuskClaw, SpiritClaw, VineBlast, StingClaw|
|103|Hexadrake|Grass|69/53/64/44/61|Lv16->Yonderhorn|HydroBlast, SeedClaw, SteelClaw, MudClaw|
|104|Yonderhorn|Grass|68/56/77/66/67|Lv36->Obsidsaur|QuakeStrike, WingBeam, BlazeClaw, QuickStrike|
|105|Obsidsaur|Grass|62/98/60/109/68|Final|MudClaw, PowerStrike, FistBlast, VenomBeam|
|106|Cryoshell|Psychic/Ghost|66/44/42/62/52|Lv16->Riftraptor|PowerClaw, FlameBlast, StingBeam, NightStrike|
|107|Riftraptor|Dragon/Ghost|58/85/69/76/75|Lv36->Florafiend|WingStrike, LeafBeam, SkyClaw, BubbleBlast|
|108|Florafiend|Steel/Dark|101/73/97/70/65|Final|SparkStrike, NightClaw, GhoulClaw, QuickStrike|
|109|Pyrofiend|Water|67/60/67/41/56|Lv16->Echogator|VenomClaw, PunchBlast, LeafClaw, RadiantBeam|
|110|Echogator|Normal|59/82/58/57/71|Lv36->Lunacat|FistStrike, LeafBeam, MindBlast, BuzzBlast|
|111|Lunacat|Dark|108/64/65/83/73|Final|GhoulStrike, EarthBlast, MudBlast, WingBeam|
|112|Neodrake|Bug|56/42/42/50/54|Lv16->Riftpup|WingStrike, MudStrike, SkyBeam, StoneBeam|
|113|Riftpup|Light|83/54/64/59/75|Lv36->Terrabot|BlazeStrike, LeafBlast, LeafClaw, MegaBlast|
|114|Terrabot|Water|84/101/96/67/102|Final|InsectBlast, KickBeam, PsyStrike, SpiritStrike|
|115|Zephyrwing|Ground|67/63/55/52/58|Lv16->Wavepup|ToxicClaw, PebbleClaw, QuakeClaw, PsyBlast|
|116|Wavepup|Ground|64/82/52/74/73|Lv36->Yonderstag|QuickBeam, FrostClaw, InsectClaw, BlazeClaw|
|117|Yonderstag|Psychic|90/67/83/87/109|Final|GaleBlast, QuakeBeam, HydroBlast, MegaStrike|
|118|Quakesaur|Ice|58/51/41/70/51|Lv16->Obsidbot|EarthBlast, MudClaw, LightBeam, DuskClaw|
|119|Obsidbot|Fire|50/65/80/72/60|Lv36->Umbragator|MudStrike, GaleStrike, SpiritBlast, VineStrike|
|120|Umbragator|Steel/Normal|84/104/78/103/97|Final|MetalBeam, PebbleBlast, ToxicClaw, StingBeam|
|121|Ionfiend|Ground|66/61/45/59/54|Lv16->Aerodrake|StoneStrike, InsectBeam, RadiantBlast, VenomBlast|
|122|Aerodrake|Flying|59/82/77/75/65|Lv36->Terraox|FrostBeam, SparkStrike, IceBeam, FrostBeam|
|123|Terraox|Ground|94/97/83/89/75|Final|LeafBeam, FistStrike, FrostStrike, LeafBlast|
|124|Floracobra|Dragon|67/64/48/57/45|Lv16->Neofiend|StingBlast, HydroBeam, RockStrike, MudStrike|
|125|Neofiend|Psychic|63/61/88/72/88|Lv36->Gigapup|HeatStrike, WingStrike, EarthClaw, SparkBeam|
|126|Gigapup|Flying|78/84/77/92/72|Final|FistBlast, IronClaw, PowerBeam, MegaClaw|
|127|Aerocobra|Ice|46/70/46/59/66|Lv16->Riftgeist|PebbleBeam, HeatBlast, IceBlast, QuakeBlast|
|128|Riftgeist|Fire|68/81/76/70/74|Lv36->Neomon|HydroBeam, FlameClaw, MindBeam, VineBlast|
|129|Neomon|Ghost|108/77/99/106/95|Final|DuskStrike, MudClaw, AuraClaw, ThunderBlast|
|130|Duskworm|Water|70/61/42/63/42|Lv16->Duskcobra|PowerBlast, SpiritBlast, BuzzBeam, QuakeClaw|
|131|Duskcobra|Normal/Electric|71/88/56/86/65|Lv36->Solarmoth|IronStrike, KickClaw, HeatClaw, BuzzStrike|
|132|Solarmoth|Light|85/105/68/109/96|Final|VoltStrike, SnowClaw, PunchClaw, VineBlast|
|133|Hexahog|Electric/Dark|69/45/58/70/47|Lv16->Waveserpent|IceStrike, EarthStrike, KickBeam, LeafBeam|
|134|Waveserpent|Poison|89/67/63/55/58|Lv36->Rifthog|SeedStrike, VoltStrike, BuzzStrike, PowerBlast|
|135|Rifthog|Electric|82/94/102/90/103|Final|SteelBeam, SnowBeam, HeatBlast, IronBlast|
|136|Jadefiend|Dark|62/59/67/62/67|Lv16->Xenofiend|SteelBlast, ThunderBlast, QuickBeam, LeafBlast|
|137|Xenofiend|Electric|63/86/50/76/58|Lv36->Cryogeist|MegaStrike, QuakeBlast, FistBeam, ThunderBlast|
|138|Cryogeist|Ghost/Dark|102/71/89/80/102|Final|GhoulBlast, MetalBeam, VoltBlast, AquaBeam|
|139|Jadehog|Rock/Poison|51/55/48/51/57|Lv16->Kilofiend|BlazeBlast, SeedBlast, ShadowBlast, HydroBeam|
|140|Kilofiend|Electric|87/56/83/58/79|Lv36->Pyropup|IronClaw, WingBeam, VoltBeam, LightStrike|
|141|Pyropup|Ghost|110/71/107/64/76|Final|ShadowBlast, QuakeClaw, FlameBeam, PsyBlast|
|142|Solartail|Bug|66/67/52/63/63|Lv16->Echoox|RadiantBeam, MetalBeam, MetalStrike, WingStrike|
|143|Echoox|Ghost|86/59/52/69/89|Lv36->Aerobot|InsectClaw, DuskStrike, SparkBeam, PebbleClaw|
|144|Aerobot|Bug/Steel|73/85/65/66/94|Final|SteelClaw, PoisonClaw, VineStrike, MegaBlast|
|145|Lunadillo|Bug|46/47/47/43/59|Lv16->Zephyrhorn|SkyBlast, SparkStrike, GaleStrike, VoltStrike|
|146|Zephyrhorn|Light/Fighting|63/81/55/62/56|Lv36->Magmahorn|SkyBlast, InsectClaw, GaleBeam, VenomClaw|
|147|Magmahorn|Dark|99/87/98/85/101|Final|MudBlast, VenomClaw, VenomBeam, StingStrike|
|148|Florageist|Fighting|65/40/51/51/64|Lv16->Cryohorn|MegaBlast, VoltStrike, RockBlast, SparkClaw|
|149|Cryohorn|Ghost|83/63/50/59/65|Lv36->Yonderwing|StingStrike, SnowStrike, PoisonStrike, PunchStrike|
|150|Yonderwing|Rock|85/81/107/106/102|Final|HeatStrike, ToxicBeam, HydroClaw, EarthClaw|
|151|Zephyrraptor|Psychic|51/59/59/60/42|Lv16->Pyrodillo|DuskBlast, FrostBeam, PowerBlast, EarthBlast|
|152|Pyrodillo|Electric/Flying|68/59/83/90/73|Lv36->Yonderserpent|FistBeam, GhoulStrike, IronBeam, BlazeClaw|
|153|Yonderserpent|Poison|83/72/72/78/93|Final|SteelBlast, ShadowBlast, NightBeam, MegaBeam|
|154|Gigafiend|Electric|44/54/42/49/60|Lv16->Xenohorn|StingStrike, EarthBeam, PsyBeam, LeafClaw|
|155|Xenohorn|Fighting/Ice|87/59/86/77/66|Lv36->Hexaraptor|BubbleClaw, RockBeam, WingBeam, StoneBlast|
|156|Hexaraptor|Water|71/62/79/108/90|Final|PoisonBeam, AquaBeam, AquaBeam, EarthStrike|
|157|Magmamoth|Water|47/56/41/40/67|Lv16->Terradillo|IceStrike, SteelBlast, BuzzBeam, IceBeam|
|158|Terradillo|Grass|85/74/60/65/90|Lv36->Echotoad|BuzzBlast, IronStrike, RadiantClaw, GaleBlast|
|159|Echotoad|Normal/Ice|70/91/101/100/75|Final|VenomClaw, LeafClaw, LightClaw, BuzzClaw|
|160|Pyrodrake|Grass/Steel|59/45/42/43/48|Lv16->Terraling|InsectClaw, RadiantClaw, IceStrike, BuzzBlast|
|161|Terraling|Fire|76/52/54/59/78|Lv36->Lunabat|IceBeam, VenomClaw, DuskBlast, ShadowClaw|
|162|Lunabat|Water|61/78/101/75/73|Final|LeafBlast, FrostClaw, GaleBeam, SparkStrike|
|163|Aerofiend|Dark|54/50/67/40/64|Lv16->Rifttoad|GaleBlast, SkyBlast, BubbleBeam, MetalBeam|
|164|Rifttoad|Rock/Dark|71/86/84/74/62|Lv36->Florahog|FrostBlast, PoisonBeam, IceClaw, RadiantStrike|
|165|Florahog|Normal|79/65/83/69/88|Final|PoisonBlast, RockStrike, FlameBeam, VenomBeam|
|166|Pyroox|Poison|64/64/49/56/59|Lv16->Xenobat|InsectBeam, SteelStrike, GaleBlast, VoltBeam|
|167|Xenobat|Dark/Light|60/50/67/56/74|Lv36->Riftcat|IceClaw, QuakeClaw, NightClaw, BubbleBeam|
|168|Riftcat|Normal/Rock|98/91/77/71/104|Final|MetalBeam, MetalBlast, AquaClaw, SpiritBlast|
|169|Wavebeast|Fighting|40/53/49/50/59|Lv16->Ionhorn|RadiantClaw, BubbleBlast, PoisonBlast, HydroClaw|
|170|Ionhorn|Flying|65/72/80/78/61|Lv36->Wavewing|StoneClaw, DuskBlast, AuraBeam, BuzzBeam|
|171|Wavewing|Grass/Dragon|66/65/95/88/68|Final|PhantomClaw, ShadowStrike, PoisonClaw, MudStrike|
|172|Kiloox|Poison/Rock|47/52/60/63/43|Lv16->Jadeworm|StingBeam, VineClaw, KickBeam, SnowClaw|
|173|Jadeworm|Electric/Flying|83/57/85/71/50|Lv36->Blazecat|LightBlast, MindStrike, RockClaw, VoltStrike|
|174|Blazecat|Dark|75/83/102/96/89|Final|RockClaw, NightStrike, QuickClaw, AquaStrike|
|175|Xenocobra|Rock|40/43/50/63/46|Lv16->Hexacat|QuakeBlast, RadiantClaw, KickBeam, HeatClaw|
|176|Hexacat|Psychic|56/84/89/68/53|Lv36->Obsidhog|HydroBlast, GhoulClaw, VineStrike, RockBeam|
|177|Obsidhog|Ice|70/70/89/76/104|Final|InsectStrike, PowerStrike, SkyClaw, ShadowBlast|
|178|Ionmoth|Water|40/70/43/43/49|Lv16->Jadeling|ShadowBeam, SparkBeam, IceBeam, IronBeam|
|179|Jadeling|Dragon|74/64/79/88/82|Lv36->Riftmon|SeedClaw, StoneBlast, VenomClaw, QuickStrike|
|180|Riftmon|Flying|97/86/98/74/78|Final|MudBeam, VenomBlast, LightClaw, SteelBlast|
|181|Echomoth|Dark|54/68/63/62/68|Lv16->Aerobat|RadiantStrike, VineBeam, SeedClaw, ThunderBlast|
|182|Aerobat|Rock|79/70/51/73/80|Lv36->Blazeling|PowerBeam, AquaStrike, PebbleBeam, IronStrike|
|183|Blazeling|Ground|93/71/72/84/104|Final|MegaBlast, EarthBeam, DuskBeam, PebbleClaw|
|184|Kilobeast|Normal/Psychic|65/70/68/54/51|Lv16->Blazemoth|BlazeBeam, EarthBeam, BubbleBeam, SpiritBlast|
|185|Blazemoth|Dark/Ghost|55/83/85/75/89|Lv36->Obsidshell|PowerBeam, WingClaw, MudStrike, MetalClaw|
|186|Obsidshell|Rock|107/81/107/60/72|Final|RadiantBeam, DuskClaw, RockStrike, MetalBlast|
|187|Jadetail|Water|56/62/49/42/41|Lv16->Umbracat|PoisonBlast, DuskBeam, ShadowBeam, PoisonBeam|
|188|Umbracat|Dragon/Poison|90/64/68/81/75|Lv36->Xenoox|VenomStrike, PunchBeam, GhoulBlast, EarthBlast|
|189|Xenoox|Rock|69/85/103/87/85|Final|AuraStrike, KickBeam, DuskClaw, BuzzBeam|
|190|Neogator|Poison|60/64/45/51/41|Lv16->Riftbot|RockBlast, KickClaw, BlazeBlast, GhoulStrike|
|191|Riftbot|Ground/Light|64/71/64/74/51|Lv36->Zephyrcobra|BlazeBeam, RadiantStrike, AquaBeam, SeedBeam|
|192|Zephyrcobra|Normal|98/62/74/101/71|Final|GhoulBeam, StoneClaw, GhoulBlast, StoneStrike|
|193|Voltserpent|Dragon/Steel|45/49/52/54/49|Lv16->Obsidraptor|VineBlast, AquaClaw, SpiritBeam, HydroBeam|
|194|Obsidraptor|Fire|80/68/69/69/75|Lv36->Blazedillo|SnowBlast, MindBlast, LightStrike, PebbleStrike|
|195|Blazedillo|Rock/Steel|64/63/108/101/105|Final|VenomStrike, KickClaw, SkyBlast, SparkBlast|
|196|Magmatail|Fire|52/68/42/53/41|Lv16->Echosaur|HeatClaw, AuraStrike, QuickBeam, PunchClaw|
|197|Echosaur|Fire/Fighting|69/53/50/52/89|Lv36->Voltgeist|MudBlast, PoisonStrike, HeatBlast, BuzzBeam|
|198|Voltgeist|Grass/Water|68/61/107/95/68|Final|StingClaw, RadiantStrike, SpiritBeam, HydroBeam|
|199|Xenoserpent|Poison/Light|46/66/43/69/55|Lv16->Aeroox|MetalClaw, RockStrike, QuakeBlast, IronStrike|
|200|Aeroox|Poison|60/84/56/58/73|Lv36->Zephyrhog|HeatBlast, VenomBlast, QuakeBeam, MegaBlast|
|201|Zephyrhog|Bug|106/95/75/66/106|Final|GaleClaw, FistStrike, SkyClaw, PhantomStrike|
|202|Rifttail|Psychic|58/57/52/69/49|Lv16->Neosaur|HeatClaw, LeafClaw, StingStrike, NightClaw|
|203|Neosaur|Normal/Ice|73/68/72/82/73|Lv36->Umbrastag|IceBeam, SteelBeam, GhoulStrike, PhantomBeam|
|204|Umbrastag|Steel|73/101/68/71/67|Final|SpiritStrike, BubbleBlast, SnowStrike, IceStrike|
|205|Terrasaur|Flying|66/44/67/41/45|Lv16->Blazegator|FistStrike, VoltClaw, VenomBeam, AquaBlast|
|206|Blazegator|Ground/Grass|82/81/59/90/66|Lv36->Pyrobeast|ToxicStrike, SpiritClaw, PhantomBlast, FrostStrike|
|207|Pyrobeast|Bug|82/85/109/66/77|Final|MegaBlast, VenomClaw, MindBlast, ThunderClaw|
|208|Lunapup|Dragon/Ice|52/41/70/64/53|Lv16->Volthorn|IceClaw, MegaClaw, SteelStrike, SnowBlast|
|209|Volthorn|Psychic|55/71/76/50/67|Lv36->Obsidfiend|RadiantClaw, MetalBeam, SeedBeam, IceBlast|
|210|Obsidfiend|Steel/Water|83/93/100/67/70|Final|DuskBlast, PunchBeam, PhantomBeam, GhoulBeam|
|211|Quakemoth|Ice|41/48/40/40/65|Lv16->Yonderworm|NightClaw, ThunderClaw, BuzzBeam, SkyBlast|
|212|Yonderworm|Dragon|62/52/84/62/79|Lv36->Jadebot|BuzzClaw, ToxicStrike, MindBeam, PsyBlast|
|213|Jadebot|Poison|83/67/109/110/61|Final|MudStrike, ThunderStrike, IronBlast, GhoulStrike|
|214|Yonderbot|Bug|63/67/60/65/68|Lv16->Solarbot|QuickClaw, SpiritStrike, VoltBlast, ToxicBeam|
|215|Solarbot|Poison|81/76/75/60/59|Lv36->Ionhog|RockBeam, SteelBlast, IronBlast, PoisonBlast|
|216|Ionhog|Ice|107/73/76/64/104|Final|QuickBlast, KickBeam, SteelClaw, SeedClaw|
|217|Blazestag|Dark|43/44/48/45/52|Lv16->Ioncobra|PoisonBeam, DuskClaw, FistStrike, WingBeam|
|218|Ioncobra|Ground/Rock|77/81/79/57/66|Lv36->Volthog|ShadowBlast, StingClaw, QuakeClaw, PowerBeam|
|219|Volthog|Poison/Ghost|91/101/92/92/72|Final|IronBlast, MegaBeam, PowerBeam, DuskStrike|
|220|Solarserpent|Normal/Poison|57/42/70/65/48|Lv16->Yonderpup|WingBlast, PsyBeam, SkyBlast, MudBlast|
|221|Yonderpup|Ice|83/78/85/80/87|Lv36->Voltraptor|LightBeam, PowerStrike, StingClaw, PsyClaw|
|222|Voltraptor|Grass/Steel|73/79/87/64/74|Final|VenomBlast, BubbleBlast, EarthClaw, FistBlast|
|223|Gigaraptor|Steel|67/54/67/62/44|Lv16->Quakegeist|IceBlast, EarthBeam, MindClaw, MetalBeam|
|224|Quakegeist|Dark|83/64/52/73/82|Lv36->Ionwing|WingBlast, PoisonStrike, StingBlast, AquaBlast|
|225|Ionwing|Water|79/68/92/68/69|Final|VoltBeam, MegaClaw, PowerStrike, EarthBeam|
|226|Duskdillo|Electric|55/42/58/56/41|Lv16->Hexadillo|InsectBlast, BubbleStrike, InsectBlast, IceStrike|
|227|Hexadillo|Flying/Grass|55/69/72/58/79|Lv36->Lunatail|AquaBeam, ToxicClaw, GhoulBeam, HydroBlast|
|228|Lunatail|Ice|79/102/79/97/83|Final|SpiritBlast, LightBeam, MudBeam, NightClaw|
|229|Echocat|Dark|52/60/46/42/53|Lv16->Xenoling|StoneStrike, SpiritClaw, EarthStrike, ShadowBlast|
|230|Xenoling|Fighting/Electric|59/77/63/77/90|Lv36->Solarmon|PebbleClaw, FistStrike, AuraBlast, PunchStrike|
|231|Solarmon|Electric|88/81/75/70/89|Final|ThunderBlast, EarthClaw, LeafClaw, AquaBlast|
|232|Solarhorn|Ground/Flying|57/58/59/54/63|Lv16->Lunamoth|VineBeam, SnowBeam, PsyClaw, SpiritBeam|
|233|Lunamoth|Rock|57/57/74/70/70|Lv36->Jadetoad|LightClaw, QuickBlast, VoltBlast, SpiritBlast|
|234|Jadetoad|Dragon/Psychic|101/79/100/71/70|Final|HeatBlast, MetalStrike, GaleStrike, IceStrike|
|235|Jadecat|Water|68/62/43/41/52|Lv16->Magmasaur|EarthBlast, SpiritBeam, LeafBlast, MetalBlast|
|236|Magmasaur|Grass|59/53/57/59/90|Lv36->Neotail|StingClaw, AquaBlast, PunchBlast, HeatBlast|
|237|Neotail|Rock|96/97/66/73/107|Final|NightClaw, SeedBlast, GaleClaw, RockClaw|
|238|Echodillo|Ice|62/48/64/50/60|Lv16->Pyrohog|NightClaw, IceStrike, SeedBeam, VineBeam|
|239|Pyrohog|Ghost|55/63/90/83/72|Lv36->Cryobot|SpiritBlast, HeatClaw, MindBlast, GaleBlast|
|240|Cryobot|Electric|87/110/79/89/63|Final|EarthClaw, ThunderBeam, ThunderClaw, BlazeBlast|
|241|Florabeast|Grass|44/69/64/54/53|Lv16->Volttoad|ThunderBeam, HydroStrike, FistStrike, BubbleStrike|
|242|Volttoad|Steel|62/65/89/85/70|Lv36->Floradillo|BuzzStrike, VenomClaw, MudClaw, QuakeBeam|
|243|Floradillo|Ice/Dragon|102/77/109/78/61|Final|SkyBlast, MetalBeam, HydroBlast, KickClaw|
|244|Duskgeist|Light|54/45/43/41/54|Lv16->Umbraox|SkyClaw, ToxicBlast, InsectBlast, WingClaw|
|245|Umbraox|Psychic|74/76/70/88/71|Lv36->Riftsaur|EarthStrike, LeafBeam, GaleBeam, IronBlast|
|246|Riftsaur|Normal/Fire|107/61/107/90/68|Final|BubbleClaw, LightClaw, HydroBlast, FlameStrike|
|247|Magmaraptor|Water|50/69/49/61/46|Lv16->Jadepup|LightStrike, ThunderStrike, IronClaw, SeedBeam|
|248|Jadepup|Poison/Fire|73/74/83/89/73|Lv36->Aeroshell|StingBlast, SteelBlast, ThunderBeam, InsectBeam|
|249|Aeroshell|Electric|60/88/107/60/86|Final|BlazeBlast, BuzzBlast, VenomStrike, BubbleBeam|
|250|Iongator|Dark|69/69/68/65/50|Lv16->Kilowing|RadiantStrike, RockClaw, MindClaw, GaleStrike|
|251|Kilowing|Rock|76/81/71/67/83|Lv36->Waveox|WingBlast, MindBeam, NightStrike, SpiritClaw|
|252|Waveox|Normal/Steel|81/85/108/77/104|Final|LightBlast, KickBlast, NightClaw, StoneBeam|
|253|Neoox|Electric|63/63/66/67/69|Lv16->Echoling|SeedBeam, MudStrike, VoltBlast, VineClaw|
|254|Echoling|Light/Ice|89/62/54/67/82|Lv36->Yondergeist|SpiritBeam, EarthBlast, HydroClaw, MudClaw|
|255|Yondergeist|Light/Water|75/87/71/67/63|Final|SteelClaw, IronBeam, AquaBlast, BuzzClaw|
|256|Zephyrdillo|Flying|44/44/58/46/60|Lv16->Riftshell|AquaBlast, ShadowBlast, EarthBeam, BubbleBlast|
|257|Riftshell|Psychic|71/86/83/63/88|Lv36->Umbrasaur|InsectBeam, RockBeam, StingStrike, PunchBeam|
|258|Umbrasaur|Fighting|66/68/86/66/107|Final|BubbleBeam, SeedBeam, PhantomBlast, SnowBlast|
|259|Zephyrox|Ghost|48/65/61/50/45|Lv16->Yonderfiend|MindStrike, WingClaw, AquaBeam, LightBeam|
|260|Yonderfiend|Ground|55/75/50/53/62|Lv36->Quaketail|FrostClaw, MindBlast, StoneBeam, BuzzStrike|
|261|Quaketail|Steel/Bug|67/81/64/90/98|Final|MetalStrike, FlameClaw, PsyBlast, MindBlast|
|262|Voltwing|Ghost/Ice|45/42/57/48/70|Lv16->Umbramoth|LeafBlast, SteelBlast, SkyStrike, InsectBeam|
|263|Umbramoth|Ghost/Bug|71/79/54/74/67|Lv36->Pyroling|PowerStrike, PebbleBlast, HydroBlast, BubbleBeam|
|264|Pyroling|Steel|79/81/79/98/69|Final|QuickBeam, StingClaw, FistClaw, LeafClaw|
|265|Hexagator|Ice|53/65/40/49/67|Lv16->Floraraptor|VineBlast, HeatBlast, DuskClaw, LightBeam|
|266|Floraraptor|Ground/Bug|82/78/84/58/76|Lv36->Neobeast|BuzzClaw, VineClaw, HeatBeam, HeatClaw|
|267|Neobeast|Fighting/Poison|75/67/72/90/105|Final|MindBlast, IceClaw, PsyStrike, BuzzClaw|
|268|Hexacobra|Fire|48/54/69/56/63|Lv16->Wavestag|RockStrike, StoneStrike, ThunderBeam, LightBeam|
|269|Wavestag|Ground/Bug|80/50/83/88/75|Lv36->Quakeox|PunchClaw, VineBeam, SeedBeam, IronBeam|
|270|Quakeox|Bug/Dark|105/77/72/67/82|Final|MetalBeam, ToxicClaw, VineStrike, NightClaw|
|271|Zephyrserpent|Water|40/61/70/69/66|Lv16->Duskwing|ShadowClaw, DuskBeam, HeatBlast, BlazeClaw|
|272|Duskwing|Ground|86/65/84/54/63|Lv36->Umbraworm|SkyStrike, MetalClaw, StingClaw, AquaBeam|
|273|Umbraworm|Fire|109/70/70/109/98|Final|RockBlast, RadiantStrike, IceStrike, SparkStrike|
|274|Neoraptor|Fire|57/41/55/42/40|Lv16->Yondermoth|VineClaw, EarthStrike, LightBeam, SpiritBlast|
|275|Yondermoth|Water/Normal|62/83/68/86/86|Lv36->Terracat|ToxicStrike, MindBeam, PoisonClaw, KickClaw|
|276|Terracat|Normal|94/110/74/97/79|Final|PsyStrike, BlazeStrike, MindBlast, SnowClaw|
|277|Cryopup|Rock|66/64/51/66/43|Lv16->Aeroraptor|PsyStrike, MegaBeam, IronBeam, QuickClaw|
|278|Aeroraptor|Poison|88/75/50/77/64|Lv36->Yondertoad|PunchClaw, QuickBeam, SeedBlast, PhantomBlast|
|279|Yondertoad|Normal|96/89/94/64/101|Final|HeatClaw, BubbleBlast, NightBlast, ShadowStrike|
|280|Umbrahog|Dragon/Fire|59/45/63/47/60|Lv16->Magmaserpent|NightBlast, NightClaw, PunchBlast, VineClaw|
|281|Magmaserpent|Light/Dragon|74/51/70/90/76|Lv36->Obsidmoth|PsyClaw, StingBlast, FrostStrike, GhoulBeam|
|282|Obsidmoth|Fire|62/86/91/92/100|Final|VoltClaw, MindStrike, PebbleBeam, IronStrike|
|283|Ioncat|Fighting/Flying|45/58/46/46/41|Lv16->Aeroworm|MindBlast, IronClaw, KickStrike, LeafBlast|
|284|Aeroworm|Bug|61/86/76/67/53|Lv36->Pyrogeist|HydroBlast, LightBeam, InsectBeam, EarthClaw|
|285|Pyrogeist|Poison|70/110/84/110/74|Final|BubbleBlast, SkyClaw, VenomBeam, RockBeam|
|286|Echomon|Fire|68/59/62/66/51|Lv16->Cryodillo|GaleStrike, ThunderStrike, SparkClaw, QuakeClaw|
|287|Cryodillo|Dragon/Ice|75/81/64/86/55|Lv36->Aerobeast|KickBeam, PowerClaw, FistBeam, HydroBeam|
|288|Aerobeast|Ice|68/99/100/93/99|Final|IceBeam, QuickClaw, LightClaw, AuraBeam|
|289|Gigaserpent|Ghost|44/41/56/46/62|Lv16->Duskhog|SnowBeam, RadiantClaw, DuskStrike, RadiantStrike|
|290|Duskhog|Ground|53/65/87/67/62|Lv36->Riftbat|PhantomBeam, SnowBlast, EarthBeam, AuraClaw|
|291|Riftbat|Flying/Ground|78/63/76/104/66|Final|ThunderClaw, FrostBeam, VoltClaw, VoltBlast|
|292|Aerocat|Ice|61/52/43/57/48|Lv16->Ionshell|PsyBlast, NightBlast, PowerStrike, WingBlast|
|293|Ionshell|Fighting|52/84/77/57/66|Lv36->Terrahorn|SteelBlast, HeatBeam, AquaStrike, QuakeBlast|
|294|Terrahorn|Electric|87/103/95/82/71|Final|PunchBeam, IronClaw, SteelBeam, LightStrike|
|295|Magmapup|Psychic|49/45/55/68/49|Lv16->Quakemon|WingBeam, BuzzBlast, PhantomBlast, FrostBeam|
|296|Quakemon|Dark|54/80/62/72/77|Lv36->Florahorn|AquaStrike, BubbleClaw, PebbleStrike, VenomBlast|
|297|Florahorn|Ghost|82/92/68/64/109|Final|MudClaw, FistBeam, ToxicBlast, KickClaw|
|298|Echobat|Water|55/44/49/41/53|Lv16->Wavetoad|SeedBeam, BlazeBeam, LightClaw, HydroBlast|
|299|Wavetoad|Poison|75/64/68/90/56|Lv36->Waveraptor|BuzzBeam, PunchClaw, WingStrike, PowerClaw|
|300|Waveraptor|Light|96/63/85/107/86|Final|RadiantStrike, FrostStrike, VineBeam, PoisonClaw|
|301|Xenomon|Electric/Light|60/43/70/43/57|Lv16->Xenogeist|QuakeStrike, FrostClaw, StoneStrike, RadiantClaw|
|302|Xenogeist|Ice|59/88/88/61/71|Lv36->Blazebot|PowerBeam, MindBeam, LeafStrike, AquaStrike|
|303|Blazebot|Dragon|92/80/98/75/66|Final|AquaStrike, SteelBlast, GhoulStrike, MudStrike|
|304|Wavecobra|Steel/Water|56/59/62/69/69|Lv16->Solarbeast|SparkBeam, MegaStrike, VenomStrike, NightClaw|
|305|Solarbeast|Ground/Water|66/82/71/64/87|Lv36->Floragator|RockClaw, BubbleBlast, MegaBeam, SpiritClaw|
|306|Floragator|Ground/Normal|66/88/105/77/108|Final|MindClaw, IronClaw, FistStrike, VenomClaw|
|307|Gigaox|Flying|47/66/51/63/51|Lv16->Ionox|MetalClaw, ShadowBlast, VoltClaw, PowerBlast|
|308|Ionox|Bug|75/90/87/84/69|Lv36->Iongeist|PowerBeam, WingClaw, HydroStrike, FistBlast|
|309|Iongeist|Fire|61/87/69/65/68|Final|SkyStrike, PunchStrike, VoltStrike, LightBlast|
|310|Obsidhorn|Psychic|60/51/47/58/42|Lv16->Rifthorn|FistBeam, PoisonBlast, VenomStrike, PhantomStrike|
|311|Rifthorn|Dark|90/68/51/54/79|Lv36->Blazetoad|ShadowBeam, SparkStrike, VineBeam, IronBeam|
|312|Blazetoad|Fire/Water|88/60/70/60/70|Final|SpiritStrike, ThunderBeam, ThunderBeam, EarthClaw|
|313|Umbrageist|Dragon|48/49/58/65/51|Lv16->Blazeraptor|PoisonClaw, RadiantBlast, PhantomStrike, EarthClaw|
|314|Blazeraptor|Fighting|89/82/53/65/58|Lv36->Gigatoad|AquaBeam, BubbleClaw, AquaClaw, MegaStrike|
|315|Gigatoad|Poison|98/95/65/97/106|Final|RockClaw, NightBeam, QuickClaw, SteelBlast|
|316|Zephyrstag|Ground|59/64/60/56/60|Lv16->Terrafiend|SparkBeam, BubbleBlast, ToxicBlast, KickBlast|
|317|Terrafiend|Fire|85/68/75/88/83|Lv36->Wavecat|InsectBeam, FrostClaw, NightBlast, IceClaw|
|318|Wavecat|Ground|95/102/79/107/67|Final|IceBeam, PhantomStrike, QuakeClaw, SnowBlast|
|319|Pyroraptor|Rock|54/54/43/69/58|Lv16->Cryodrake|BlazeClaw, MetalClaw, StoneClaw, MindClaw|
|320|Cryodrake|Dragon/Normal|50/56/71/87/56|Lv36->Obsidcat|PowerBlast, PowerBlast, KickClaw, SteelClaw|
|321|Obsidcat|Steel|89/67/93/102/61|Final|SnowStrike, QuakeClaw, KickBeam, IceClaw|
|322|Magmageist|Ghost|46/70/63/52/59|Lv16->Duskhorn|KickStrike, MindBlast, QuickClaw, LightStrike|
|323|Duskhorn|Ground|86/88/88/68/56|Lv36->Kiloling|LeafClaw, ShadowStrike, PebbleBlast, IceClaw|
|324|Kiloling|Psychic|82/77/99/103/107|Final|SkyBeam, PebbleBlast, PebbleClaw, IceStrike|
|325|Gigamon|Ice|55/43/42/69/61|Lv16->Blazeserpent|RadiantStrike, IceBlast, AuraBlast, MindBeam|
|326|Blazeserpent|Rock|73/53/74/71/61|Lv36->Jadeox|MegaClaw, WingStrike, QuakeBeam, KickBeam|
|327|Jadeox|Ground/Bug|80/77/108/99/100|Final|PowerBeam, RockStrike, ToxicClaw, SeedBlast|
|328|Terraraptor|Dark|51/68/59/49/62|Lv16->Lunasaur|RockStrike, VineBlast, FrostStrike, PsyBlast|
|329|Lunasaur|Bug|64/57/53/74/78|Lv36->Jadedillo|StingBeam, MegaBeam, FistClaw, PowerStrike|
|330|Jadedillo|Ice|103/60/89/76/73|Final|PhantomStrike, RadiantBlast, SteelBlast, NightStrike|
|331|Zephyrgator|Fire/Ghost|57/41/48/43/44|Lv16->Gigaworm|GaleStrike, SpiritBeam, RadiantStrike, BuzzBlast|
|332|Gigaworm|Ground/Psychic|68/54/71/80/87|Lv36->Cryomoth|FlameBlast, SteelBeam, GaleBeam, FrostBlast|
|333|Cryomoth|Bug|88/93/105/61/103|Final|GaleStrike, VoltClaw, MetalClaw, SteelBeam|
|334|Duskdrake|Dragon|43/57/47/40/66|Lv16->Aerotail|LeafStrike, MetalClaw, FrostBeam, InsectStrike|
|335|Aerotail|Ghost/Fire|81/84/81/77/61|Lv36->Obsidox|AuraBlast, GhoulBlast, PunchClaw, SteelBlast|
|336|Obsidox|Normal/Electric|81/100/77/74/85|Final|BubbleStrike, StingBeam, MindBlast, InsectBlast|
|337|Riftcobra|Ice|45/40/41/65/57|Lv16->Magmaox|LeafClaw, HeatBlast, BubbleClaw, LeafStrike|
|338|Magmaox|Flying/Normal|85/61/76/74/51|Lv36->Aerotoad|FrostBlast, BuzzStrike, QuickStrike, AuraStrike|
|339|Aerotoad|Flying|109/109/83/81/65|Final|DuskBlast, VoltBlast, AuraBlast, InsectClaw|
|340|Quakedrake|Light/Electric|48/65/44/46/66|Lv16->Cryocat|QuakeBeam, HydroBlast, FistBeam, BuzzBlast|
|341|Cryocat|Ice|87/85/90/89/56|Lv36->Lunadrake|PebbleClaw, IceClaw, RockStrike, SeedClaw|
|342|Lunadrake|Electric/Fighting|85/86/83/66/80|Final|MindStrike, RockStrike, RadiantBeam, HeatBlast|
|343|Echogeist|Flying|51/65/51/48/67|Lv16->Jademon|DuskBeam, SparkBlast, VoltClaw, VineBlast|
|344|Jademon|Psychic|87/79/88/77/87|Lv36->Kilotail|AuraBeam, BubbleStrike, PowerClaw, RockBlast|
|345|Kilotail|Rock|86/96/66/63/84|Final|VoltClaw, StoneStrike, QuickBlast, MetalBeam|
|346|Riftserpent|Steel|59/47/52/59/70|Lv16->Echotail|EarthStrike, StingBeam, StoneBlast, NightClaw|
|347|Echotail|Ground/Steel|75/53/69/61/60|Lv36->Floratoad|VineBlast, InsectClaw, ShadowClaw, ThunderStrike|
|348|Floratoad|Ground|105/68/76/61/89|Final|PsyBeam, QuakeStrike, LightBeam, ThunderBlast|
|349|Hexafiend|Electric/Bug|49/58/66/40/55|Lv16->Umbrapup|QuickClaw, PunchBeam, ToxicClaw, StoneStrike|
|350|Umbrapup|Electric|64/50/64/88/74|Final|IronBlast, VenomStrike, InsectClaw, SkyBeam|

## Systems
- **Capture**: capture orbs use HP, status and orb tier to compute catch chance; animated rings represent attempt.
- **Encounter**: weighted random tables per area; weather and time alter tables.
- **Battle**: turn-based with move selection, item use and switching; type multipliers at 0.5x/1x/2x.
- **Breeding**: compatible monsters left at ranch produce eggs; offspring inherit stats and moves; steps hatch eggs.

## Stats
- Base stats range 20–130.
- Stat formula: `Stat = ((Base + IV) * Level)/50 + 5`; HP uses `((Base + IV) * Level)/50 + Level + 10`.
- IV ranges 0–31 randomly on capture/breeding.

## Story Outline
1. Move to Sprout Town and meet the professor.
2. Receive starter monster and first mission.
3. Defeat rival in opening battle.
4. Travel Route 1 to Harbor City.
5. Win Water Gym badge.
6. Encounter mysterious agents seeking ancient relic.
7. Sail to Forge Town and stop volcanic theft.
8. Earn Fire Gym badge.
9. Reach Gale Village and learn legend of Sky Land.
10. Claim Flying Gym badge.
11. Investigate ruins near Verdant Hamlet.
12. Open Breeding Ranch.
13. Beat Rock Gym in Quarry City.
14. Recover stolen data from Lumen Town lab and earn Electric badge.
15. Traverse blizzards to defeat Ice Gym in Frostburg.
16. Calm awakened titan in Mystic City and win Psychic badge.
17. Thwart dockside plot in Obsidian Cove.
18. Train on Aqua Isle shores.
19. Explore Blizzard Isle cavern for rare monsters.
20. Halt eruption scheme on Ember Isle.
21. Return to Skyreach Base and obtain balloon.
22. Ascend to Sky Land and defeat weather-controlling agent.
23. Acquire Sky Amulet.
24. Uncover ghost mysteries at Ruined Temple.
25. Capture legendary ghost monster.
26. Mine Light Shard in Crystal Town.
27. Traverse Echo Village canyon puzzle.
28. Clear Echo Cave of agents.
29. Reach Solar City and stop solar tower hijack.
30. Defeat Dark Gym leader at Obsidian Cove.
31. Collect final badge from Solar City Steel Gym.
32. Disrupt relic fusion at Final Plateau.
33. Battle rival in final pre-league challenge.
34. Conquer Victory Road to Monster League.
35. Face Elite Master Water.
36. Face Elite Master Fire.
37. Face Elite Master Psychic.
38. Face Elite Master Dragon.
39. Challenge Champion and win.
40. Agents regroup for post-game.
41. Recover scattered relic pieces across region.
42. Piece in Safari Meadows guarded by rare monster.
43. Piece in Night Forest appearing only at night.
44. Piece in Echo Cave after puzzle reset.
45. Piece in Crystal Mines behind strength boulder.
46. Piece on Ember Isle within lava cavern.
47. Piece on Blizzard Isle after blizzard event.
48. Piece on Sky Land during storm cycle.
49. Piece on Ruined Temple altar.
50. Assemble relic to summon legendary trio.
51. Capture first legendary.
52. Dive to ocean trench for second legendary.
53. Ascend storm clouds for third legendary.
54. Agents attempt final heist at Solar Tower.
55. Learn agent leader motives.
56. Open secret dungeon beneath Mystic City.
57. Navigate puzzle floors to core.
58. Defeat leader's ultimate monster.
59. Offer redemption; leader reforms.
60. Region celebrates peace.
61. Player hailed as champion.
62. New challengers in Battle Tower.
63. Discover breeding secrets for hidden forms.
64. Tournament event in Harbor City.
65. Global trade feature unlocked.
66. Final epilogue sailing to new regions.
67. Seasonal festivals across towns.
68. Hidden champion rematches unlocked.
69. Discover secret of ancient relic's origin.
70. Alliance with reformed agents for final battle.
71. Search for lost sky island fragments.
72. Rescue captured monsters from black market.
73. Protect breeding ranch from poachers.
74. Build monument in Sprout Town.
75. Farewell ceremony and hint at sequel.

## Development Notes
- Separate modules for map, battle, data definitions.
- Use localStorage for saves.
- Provide keyboard navigation and color-contrast options.

## Expanded Lore

### Land and Region Background
Millennia ago the realm was a scattered chain of storm-lashed islands. The four elemental titans—Ignis of fire, Tidera of water, Aerion of wind, and Terragaia of earth—rose from the depths to still the maelstrom. Their combined power fused the islands into a single continent and left behind ley lines that still pulse beneath the soil.  
Ancient civilizations flourished along these lines, carving crystalline obelisks that channeled titan energy. When the elders vanished, their monuments shattered and the land slowly forgot its origin. In recent centuries, settlers rediscovered the ruins and built towns atop the most stable ley foci. Every region guards a relic fragment believed to contain the memory of a titan, and rumors claim uniting the pieces will awaken their slumbering spirits.  
Modern life balances rustic tradition with salvaged tech from the ruins. Steam trains weave between towns, solar towers rise beside carved stone, and wild monsters migrate along the same paths the titans once tread. The land itself seems alive—mountain ranges shift after quakes, forests regrow overnight, and the sky sometimes glows with residual aurora from the titans' slumbering hearts.

### Character Roster
Below is a comprehensive list of 250 interactable characters. Each entry notes their role, history, and monster team. Levels indicate strength at first encounter.
1. **Aiden Aster** – Sprout Town botanist apprenticed to the professor; team: Leafling Lv6, Tidelit Lv8.
2. **Aiden Bram** – Harbor City fisher funding a ferry for her family; team: Tidelit Lv7, Emberimp Lv9.
3. **Aiden Cyra** – Forge Town miner obsessed with volcanic gems; team: Emberimp Lv8, Gustling Lv10.
4. **Aiden Dusk** – Gale Village archaeologist cataloging wind totems; team: Gustling Lv9, Sprigling Lv11.
5. **Aiden Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Sprigling Lv10, Pebblit Lv12.
6. **Aiden Frost** – Quarry City climber charting hidden caves; team: Pebblit Lv11, Sparksprout Lv13.
7. **Aiden Gale** – Lumen Town engineer maintaining solar arrays; team: Sparksprout Lv12, Chillcub Lv14.
8. **Aiden Holt** – Frostburg sculptor carving living ice; team: Chillcub Lv13, Mindlet Lv15.
9. **Aiden Ivory** – Mystic City linguist translating psychic glyphs; team: Mindlet Lv14, Shadepup Lv16.
10. **Aiden Jett** – Obsidian Cove dockworker guarding night shipments; team: Shadepup Lv15, Aquaphin Lv17.
11. **Bianca Aster** – Sprout Town botanist apprenticed to the professor; team: Aquaphin Lv16, Pyrodon Lv18.
12. **Bianca Bram** – Harbor City fisher funding a ferry for her family; team: Pyrodon Lv17, Lithor Lv19.
13. **Bianca Cyra** – Forge Town miner obsessed with volcanic gems; team: Lithor Lv18, Zephyrkit Lv20.
14. **Bianca Dusk** – Gale Village archaeologist cataloging wind totems; team: Zephyrkit Lv19, Thornstag Lv21.
15. **Bianca Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Thornstag Lv20, Voltail Lv22.
16. **Bianca Frost** – Quarry City climber charting hidden caves; team: Voltail Lv21, Glacielle Lv23.
17. **Bianca Gale** – Lumen Town engineer maintaining solar arrays; team: Glacielle Lv22, Miragecat Lv24.
18. **Bianca Holt** – Frostburg sculptor carving living ice; team: Miragecat Lv23, Bramblehog Lv25.
19. **Bianca Ivory** – Mystic City linguist translating psychic glyphs; team: Bramblehog Lv24, Quakelet Lv26.
20. **Bianca Jett** – Obsidian Cove dockworker guarding night shipments; team: Quakelet Lv25, Stormjay Lv27.
21. **Cedric Aster** – Sprout Town botanist apprenticed to the professor; team: Stormjay Lv26, Lumiviper Lv28.
22. **Cedric Bram** – Harbor City fisher funding a ferry for her family; team: Lumiviper Lv27, Frostmaw Lv29.
23. **Cedric Cyra** – Forge Town miner obsessed with volcanic gems; team: Frostmaw Lv28, Mysticore Lv30.
24. **Cedric Dusk** – Gale Village archaeologist cataloging wind totems; team: Mysticore Lv29, Shadowmunk Lv31.
25. **Cedric Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Shadowmunk Lv30, Solarion Lv32.
26. **Cedric Frost** – Quarry City climber charting hidden caves; team: Solarion Lv31, Rockram Lv33.
27. **Cedric Gale** – Lumen Town engineer maintaining solar arrays; team: Rockram Lv32, Sandwyrm Lv34.
28. **Cedric Holt** – Frostburg sculptor carving living ice; team: Sandwyrm Lv33, Ironclaw Lv35.
29. **Cedric Ivory** – Mystic City linguist translating psychic glyphs; team: Ironclaw Lv34, Skylume Lv36.
30. **Cedric Jett** – Obsidian Cove dockworker guarding night shipments; team: Skylume Lv35, Leafling Lv37.
31. **Daria Aster** – Sprout Town botanist apprenticed to the professor; team: Leafling Lv36, Tidelit Lv38.
32. **Daria Bram** – Harbor City fisher funding a ferry for her family; team: Tidelit Lv37, Emberimp Lv39.
33. **Daria Cyra** – Forge Town miner obsessed with volcanic gems; team: Emberimp Lv38, Gustling Lv40.
34. **Daria Dusk** – Gale Village archaeologist cataloging wind totems; team: Gustling Lv39, Sprigling Lv41.
35. **Daria Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Sprigling Lv40, Pebblit Lv42.
36. **Daria Frost** – Quarry City climber charting hidden caves; team: Pebblit Lv41, Sparksprout Lv43.
37. **Daria Gale** – Lumen Town engineer maintaining solar arrays; team: Sparksprout Lv42, Chillcub Lv44.
38. **Daria Holt** – Frostburg sculptor carving living ice; team: Chillcub Lv43, Mindlet Lv45.
39. **Daria Ivory** – Mystic City linguist translating psychic glyphs; team: Mindlet Lv44, Shadepup Lv46.
40. **Daria Jett** – Obsidian Cove dockworker guarding night shipments; team: Shadepup Lv5, Aquaphin Lv7.
41. **Elias Aster** – Sprout Town botanist apprenticed to the professor; team: Aquaphin Lv6, Pyrodon Lv8.
42. **Elias Bram** – Harbor City fisher funding a ferry for her family; team: Pyrodon Lv7, Lithor Lv9.
43. **Elias Cyra** – Forge Town miner obsessed with volcanic gems; team: Lithor Lv8, Zephyrkit Lv10.
44. **Elias Dusk** – Gale Village archaeologist cataloging wind totems; team: Zephyrkit Lv9, Thornstag Lv11.
45. **Elias Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Thornstag Lv10, Voltail Lv12.
46. **Elias Frost** – Quarry City climber charting hidden caves; team: Voltail Lv11, Glacielle Lv13.
47. **Elias Gale** – Lumen Town engineer maintaining solar arrays; team: Glacielle Lv12, Miragecat Lv14.
48. **Elias Holt** – Frostburg sculptor carving living ice; team: Miragecat Lv13, Bramblehog Lv15.
49. **Elias Ivory** – Mystic City linguist translating psychic glyphs; team: Bramblehog Lv14, Quakelet Lv16.
50. **Elias Jett** – Obsidian Cove dockworker guarding night shipments; team: Quakelet Lv15, Stormjay Lv17.
51. **Farah Aster** – Sprout Town botanist apprenticed to the professor; team: Stormjay Lv16, Lumiviper Lv18.
52. **Farah Bram** – Harbor City fisher funding a ferry for her family; team: Lumiviper Lv17, Frostmaw Lv19.
53. **Farah Cyra** – Forge Town miner obsessed with volcanic gems; team: Frostmaw Lv18, Mysticore Lv20.
54. **Farah Dusk** – Gale Village archaeologist cataloging wind totems; team: Mysticore Lv19, Shadowmunk Lv21.
55. **Farah Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Shadowmunk Lv20, Solarion Lv22.
56. **Farah Frost** – Quarry City climber charting hidden caves; team: Solarion Lv21, Rockram Lv23.
57. **Farah Gale** – Lumen Town engineer maintaining solar arrays; team: Rockram Lv22, Sandwyrm Lv24.
58. **Farah Holt** – Frostburg sculptor carving living ice; team: Sandwyrm Lv23, Ironclaw Lv25.
59. **Farah Ivory** – Mystic City linguist translating psychic glyphs; team: Ironclaw Lv24, Skylume Lv26.
60. **Farah Jett** – Obsidian Cove dockworker guarding night shipments; team: Skylume Lv25, Leafling Lv27.
61. **Griffin Aster** – Sprout Town botanist apprenticed to the professor; team: Leafling Lv26, Tidelit Lv28.
62. **Griffin Bram** – Harbor City fisher funding a ferry for her family; team: Tidelit Lv27, Emberimp Lv29.
63. **Griffin Cyra** – Forge Town miner obsessed with volcanic gems; team: Emberimp Lv28, Gustling Lv30.
64. **Griffin Dusk** – Gale Village archaeologist cataloging wind totems; team: Gustling Lv29, Sprigling Lv31.
65. **Griffin Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Sprigling Lv30, Pebblit Lv32.
66. **Griffin Frost** – Quarry City climber charting hidden caves; team: Pebblit Lv31, Sparksprout Lv33.
67. **Griffin Gale** – Lumen Town engineer maintaining solar arrays; team: Sparksprout Lv32, Chillcub Lv34.
68. **Griffin Holt** – Frostburg sculptor carving living ice; team: Chillcub Lv33, Mindlet Lv35.
69. **Griffin Ivory** – Mystic City linguist translating psychic glyphs; team: Mindlet Lv34, Shadepup Lv36.
70. **Griffin Jett** – Obsidian Cove dockworker guarding night shipments; team: Shadepup Lv35, Aquaphin Lv37.
71. **Hana Aster** – Sprout Town botanist apprenticed to the professor; team: Aquaphin Lv36, Pyrodon Lv38.
72. **Hana Bram** – Harbor City fisher funding a ferry for her family; team: Pyrodon Lv37, Lithor Lv39.
73. **Hana Cyra** – Forge Town miner obsessed with volcanic gems; team: Lithor Lv38, Zephyrkit Lv40.
74. **Hana Dusk** – Gale Village archaeologist cataloging wind totems; team: Zephyrkit Lv39, Thornstag Lv41.
75. **Hana Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Thornstag Lv40, Voltail Lv42.
76. **Hana Frost** – Quarry City climber charting hidden caves; team: Voltail Lv41, Glacielle Lv43.
77. **Hana Gale** – Lumen Town engineer maintaining solar arrays; team: Glacielle Lv42, Miragecat Lv44.
78. **Hana Holt** – Frostburg sculptor carving living ice; team: Miragecat Lv43, Bramblehog Lv45.
79. **Hana Ivory** – Mystic City linguist translating psychic glyphs; team: Bramblehog Lv44, Quakelet Lv46.
80. **Hana Jett** – Obsidian Cove dockworker guarding night shipments; team: Quakelet Lv5, Stormjay Lv7.
81. **Idris Aster** – Sprout Town botanist apprenticed to the professor; team: Stormjay Lv6, Lumiviper Lv8.
82. **Idris Bram** – Harbor City fisher funding a ferry for her family; team: Lumiviper Lv7, Frostmaw Lv9.
83. **Idris Cyra** – Forge Town miner obsessed with volcanic gems; team: Frostmaw Lv8, Mysticore Lv10.
84. **Idris Dusk** – Gale Village archaeologist cataloging wind totems; team: Mysticore Lv9, Shadowmunk Lv11.
85. **Idris Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Shadowmunk Lv10, Solarion Lv12.
86. **Idris Frost** – Quarry City climber charting hidden caves; team: Solarion Lv11, Rockram Lv13.
87. **Idris Gale** – Lumen Town engineer maintaining solar arrays; team: Rockram Lv12, Sandwyrm Lv14.
88. **Idris Holt** – Frostburg sculptor carving living ice; team: Sandwyrm Lv13, Ironclaw Lv15.
89. **Idris Ivory** – Mystic City linguist translating psychic glyphs; team: Ironclaw Lv14, Skylume Lv16.
90. **Idris Jett** – Obsidian Cove dockworker guarding night shipments; team: Skylume Lv15, Leafling Lv17.
91. **Jun Aster** – Sprout Town botanist apprenticed to the professor; team: Leafling Lv16, Tidelit Lv18.
92. **Jun Bram** – Harbor City fisher funding a ferry for her family; team: Tidelit Lv17, Emberimp Lv19.
93. **Jun Cyra** – Forge Town miner obsessed with volcanic gems; team: Emberimp Lv18, Gustling Lv20.
94. **Jun Dusk** – Gale Village archaeologist cataloging wind totems; team: Gustling Lv19, Sprigling Lv21.
95. **Jun Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Sprigling Lv20, Pebblit Lv22.
96. **Jun Frost** – Quarry City climber charting hidden caves; team: Pebblit Lv21, Sparksprout Lv23.
97. **Jun Gale** – Lumen Town engineer maintaining solar arrays; team: Sparksprout Lv22, Chillcub Lv24.
98. **Jun Holt** – Frostburg sculptor carving living ice; team: Chillcub Lv23, Mindlet Lv25.
99. **Jun Ivory** – Mystic City linguist translating psychic glyphs; team: Mindlet Lv24, Shadepup Lv26.
100. **Jun Jett** – Obsidian Cove dockworker guarding night shipments; team: Shadepup Lv25, Aquaphin Lv27.
101. **Kara Aster** – Sprout Town botanist apprenticed to the professor; team: Aquaphin Lv26, Pyrodon Lv28.
102. **Kara Bram** – Harbor City fisher funding a ferry for her family; team: Pyrodon Lv27, Lithor Lv29.
103. **Kara Cyra** – Forge Town miner obsessed with volcanic gems; team: Lithor Lv28, Zephyrkit Lv30.
104. **Kara Dusk** – Gale Village archaeologist cataloging wind totems; team: Zephyrkit Lv29, Thornstag Lv31.
105. **Kara Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Thornstag Lv30, Voltail Lv32.
106. **Kara Frost** – Quarry City climber charting hidden caves; team: Voltail Lv31, Glacielle Lv33.
107. **Kara Gale** – Lumen Town engineer maintaining solar arrays; team: Glacielle Lv32, Miragecat Lv34.
108. **Kara Holt** – Frostburg sculptor carving living ice; team: Miragecat Lv33, Bramblehog Lv35.
109. **Kara Ivory** – Mystic City linguist translating psychic glyphs; team: Bramblehog Lv34, Quakelet Lv36.
110. **Kara Jett** – Obsidian Cove dockworker guarding night shipments; team: Quakelet Lv35, Stormjay Lv37.
111. **Lars Aster** – Sprout Town botanist apprenticed to the professor; team: Stormjay Lv36, Lumiviper Lv38.
112. **Lars Bram** – Harbor City fisher funding a ferry for her family; team: Lumiviper Lv37, Frostmaw Lv39.
113. **Lars Cyra** – Forge Town miner obsessed with volcanic gems; team: Frostmaw Lv38, Mysticore Lv40.
114. **Lars Dusk** – Gale Village archaeologist cataloging wind totems; team: Mysticore Lv39, Shadowmunk Lv41.
115. **Lars Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Shadowmunk Lv40, Solarion Lv42.
116. **Lars Frost** – Quarry City climber charting hidden caves; team: Solarion Lv41, Rockram Lv43.
117. **Lars Gale** – Lumen Town engineer maintaining solar arrays; team: Rockram Lv42, Sandwyrm Lv44.
118. **Lars Holt** – Frostburg sculptor carving living ice; team: Sandwyrm Lv43, Ironclaw Lv45.
119. **Lars Ivory** – Mystic City linguist translating psychic glyphs; team: Ironclaw Lv44, Skylume Lv46.
120. **Lars Jett** – Obsidian Cove dockworker guarding night shipments; team: Skylume Lv5, Leafling Lv7.
121. **Mina Aster** – Sprout Town botanist apprenticed to the professor; team: Leafling Lv6, Tidelit Lv8.
122. **Mina Bram** – Harbor City fisher funding a ferry for her family; team: Tidelit Lv7, Emberimp Lv9.
123. **Mina Cyra** – Forge Town miner obsessed with volcanic gems; team: Emberimp Lv8, Gustling Lv10.
124. **Mina Dusk** – Gale Village archaeologist cataloging wind totems; team: Gustling Lv9, Sprigling Lv11.
125. **Mina Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Sprigling Lv10, Pebblit Lv12.
126. **Mina Frost** – Quarry City climber charting hidden caves; team: Pebblit Lv11, Sparksprout Lv13.
127. **Mina Gale** – Lumen Town engineer maintaining solar arrays; team: Sparksprout Lv12, Chillcub Lv14.
128. **Mina Holt** – Frostburg sculptor carving living ice; team: Chillcub Lv13, Mindlet Lv15.
129. **Mina Ivory** – Mystic City linguist translating psychic glyphs; team: Mindlet Lv14, Shadepup Lv16.
130. **Mina Jett** – Obsidian Cove dockworker guarding night shipments; team: Shadepup Lv15, Aquaphin Lv17.
131. **Nolan Aster** – Sprout Town botanist apprenticed to the professor; team: Aquaphin Lv16, Pyrodon Lv18.
132. **Nolan Bram** – Harbor City fisher funding a ferry for her family; team: Pyrodon Lv17, Lithor Lv19.
133. **Nolan Cyra** – Forge Town miner obsessed with volcanic gems; team: Lithor Lv18, Zephyrkit Lv20.
134. **Nolan Dusk** – Gale Village archaeologist cataloging wind totems; team: Zephyrkit Lv19, Thornstag Lv21.
135. **Nolan Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Thornstag Lv20, Voltail Lv22.
136. **Nolan Frost** – Quarry City climber charting hidden caves; team: Voltail Lv21, Glacielle Lv23.
137. **Nolan Gale** – Lumen Town engineer maintaining solar arrays; team: Glacielle Lv22, Miragecat Lv24.
138. **Nolan Holt** – Frostburg sculptor carving living ice; team: Miragecat Lv23, Bramblehog Lv25.
139. **Nolan Ivory** – Mystic City linguist translating psychic glyphs; team: Bramblehog Lv24, Quakelet Lv26.
140. **Nolan Jett** – Obsidian Cove dockworker guarding night shipments; team: Quakelet Lv25, Stormjay Lv27.
141. **Orla Aster** – Sprout Town botanist apprenticed to the professor; team: Stormjay Lv26, Lumiviper Lv28.
142. **Orla Bram** – Harbor City fisher funding a ferry for her family; team: Lumiviper Lv27, Frostmaw Lv29.
143. **Orla Cyra** – Forge Town miner obsessed with volcanic gems; team: Frostmaw Lv28, Mysticore Lv30.
144. **Orla Dusk** – Gale Village archaeologist cataloging wind totems; team: Mysticore Lv29, Shadowmunk Lv31.
145. **Orla Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Shadowmunk Lv30, Solarion Lv32.
146. **Orla Frost** – Quarry City climber charting hidden caves; team: Solarion Lv31, Rockram Lv33.
147. **Orla Gale** – Lumen Town engineer maintaining solar arrays; team: Rockram Lv32, Sandwyrm Lv34.
148. **Orla Holt** – Frostburg sculptor carving living ice; team: Sandwyrm Lv33, Ironclaw Lv35.
149. **Orla Ivory** – Mystic City linguist translating psychic glyphs; team: Ironclaw Lv34, Skylume Lv36.
150. **Orla Jett** – Obsidian Cove dockworker guarding night shipments; team: Skylume Lv35, Leafling Lv37.
151. **Pavel Aster** – Sprout Town botanist apprenticed to the professor; team: Leafling Lv36, Tidelit Lv38.
152. **Pavel Bram** – Harbor City fisher funding a ferry for her family; team: Tidelit Lv37, Emberimp Lv39.
153. **Pavel Cyra** – Forge Town miner obsessed with volcanic gems; team: Emberimp Lv38, Gustling Lv40.
154. **Pavel Dusk** – Gale Village archaeologist cataloging wind totems; team: Gustling Lv39, Sprigling Lv41.
155. **Pavel Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Sprigling Lv40, Pebblit Lv42.
156. **Pavel Frost** – Quarry City climber charting hidden caves; team: Pebblit Lv41, Sparksprout Lv43.
157. **Pavel Gale** – Lumen Town engineer maintaining solar arrays; team: Sparksprout Lv42, Chillcub Lv44.
158. **Pavel Holt** – Frostburg sculptor carving living ice; team: Chillcub Lv43, Mindlet Lv45.
159. **Pavel Ivory** – Mystic City linguist translating psychic glyphs; team: Mindlet Lv44, Shadepup Lv46.
160. **Pavel Jett** – Obsidian Cove dockworker guarding night shipments; team: Shadepup Lv5, Aquaphin Lv7.
161. **Quinn Aster** – Sprout Town botanist apprenticed to the professor; team: Aquaphin Lv6, Pyrodon Lv8.
162. **Quinn Bram** – Harbor City fisher funding a ferry for her family; team: Pyrodon Lv7, Lithor Lv9.
163. **Quinn Cyra** – Forge Town miner obsessed with volcanic gems; team: Lithor Lv8, Zephyrkit Lv10.
164. **Quinn Dusk** – Gale Village archaeologist cataloging wind totems; team: Zephyrkit Lv9, Thornstag Lv11.
165. **Quinn Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Thornstag Lv10, Voltail Lv12.
166. **Quinn Frost** – Quarry City climber charting hidden caves; team: Voltail Lv11, Glacielle Lv13.
167. **Quinn Gale** – Lumen Town engineer maintaining solar arrays; team: Glacielle Lv12, Miragecat Lv14.
168. **Quinn Holt** – Frostburg sculptor carving living ice; team: Miragecat Lv13, Bramblehog Lv15.
169. **Quinn Ivory** – Mystic City linguist translating psychic glyphs; team: Bramblehog Lv14, Quakelet Lv16.
170. **Quinn Jett** – Obsidian Cove dockworker guarding night shipments; team: Quakelet Lv15, Stormjay Lv17.
171. **Rhea Aster** – Sprout Town botanist apprenticed to the professor; team: Stormjay Lv16, Lumiviper Lv18.
172. **Rhea Bram** – Harbor City fisher funding a ferry for her family; team: Lumiviper Lv17, Frostmaw Lv19.
173. **Rhea Cyra** – Forge Town miner obsessed with volcanic gems; team: Frostmaw Lv18, Mysticore Lv20.
174. **Rhea Dusk** – Gale Village archaeologist cataloging wind totems; team: Mysticore Lv19, Shadowmunk Lv21.
175. **Rhea Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Shadowmunk Lv20, Solarion Lv22.
176. **Rhea Frost** – Quarry City climber charting hidden caves; team: Solarion Lv21, Rockram Lv23.
177. **Rhea Gale** – Lumen Town engineer maintaining solar arrays; team: Rockram Lv22, Sandwyrm Lv24.
178. **Rhea Holt** – Frostburg sculptor carving living ice; team: Sandwyrm Lv23, Ironclaw Lv25.
179. **Rhea Ivory** – Mystic City linguist translating psychic glyphs; team: Ironclaw Lv24, Skylume Lv26.
180. **Rhea Jett** – Obsidian Cove dockworker guarding night shipments; team: Skylume Lv25, Leafling Lv27.
181. **Silas Aster** – Sprout Town botanist apprenticed to the professor; team: Leafling Lv26, Tidelit Lv28.
182. **Silas Bram** – Harbor City fisher funding a ferry for her family; team: Tidelit Lv27, Emberimp Lv29.
183. **Silas Cyra** – Forge Town miner obsessed with volcanic gems; team: Emberimp Lv28, Gustling Lv30.
184. **Silas Dusk** – Gale Village archaeologist cataloging wind totems; team: Gustling Lv29, Sprigling Lv31.
185. **Silas Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Sprigling Lv30, Pebblit Lv32.
186. **Silas Frost** – Quarry City climber charting hidden caves; team: Pebblit Lv31, Sparksprout Lv33.
187. **Silas Gale** – Lumen Town engineer maintaining solar arrays; team: Sparksprout Lv32, Chillcub Lv34.
188. **Silas Holt** – Frostburg sculptor carving living ice; team: Chillcub Lv33, Mindlet Lv35.
189. **Silas Ivory** – Mystic City linguist translating psychic glyphs; team: Mindlet Lv34, Shadepup Lv36.
190. **Silas Jett** – Obsidian Cove dockworker guarding night shipments; team: Shadepup Lv35, Aquaphin Lv37.
191. **Tara Aster** – Sprout Town botanist apprenticed to the professor; team: Aquaphin Lv36, Pyrodon Lv38.
192. **Tara Bram** – Harbor City fisher funding a ferry for her family; team: Pyrodon Lv37, Lithor Lv39.
193. **Tara Cyra** – Forge Town miner obsessed with volcanic gems; team: Lithor Lv38, Zephyrkit Lv40.
194. **Tara Dusk** – Gale Village archaeologist cataloging wind totems; team: Zephyrkit Lv39, Thornstag Lv41.
195. **Tara Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Thornstag Lv40, Voltail Lv42.
196. **Tara Frost** – Quarry City climber charting hidden caves; team: Voltail Lv41, Glacielle Lv43.
197. **Tara Gale** – Lumen Town engineer maintaining solar arrays; team: Glacielle Lv42, Miragecat Lv44.
198. **Tara Holt** – Frostburg sculptor carving living ice; team: Miragecat Lv43, Bramblehog Lv45.
199. **Tara Ivory** – Mystic City linguist translating psychic glyphs; team: Bramblehog Lv44, Quakelet Lv46.
200. **Tara Jett** – Obsidian Cove dockworker guarding night shipments; team: Quakelet Lv5, Stormjay Lv7.
201. **Uma Aster** – Sprout Town botanist apprenticed to the professor; team: Stormjay Lv6, Lumiviper Lv8.
202. **Uma Bram** – Harbor City fisher funding a ferry for her family; team: Lumiviper Lv7, Frostmaw Lv9.
203. **Uma Cyra** – Forge Town miner obsessed with volcanic gems; team: Frostmaw Lv8, Mysticore Lv10.
204. **Uma Dusk** – Gale Village archaeologist cataloging wind totems; team: Mysticore Lv9, Shadowmunk Lv11.
205. **Uma Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Shadowmunk Lv10, Solarion Lv12.
206. **Uma Frost** – Quarry City climber charting hidden caves; team: Solarion Lv11, Rockram Lv13.
207. **Uma Gale** – Lumen Town engineer maintaining solar arrays; team: Rockram Lv12, Sandwyrm Lv14.
208. **Uma Holt** – Frostburg sculptor carving living ice; team: Sandwyrm Lv13, Ironclaw Lv15.
209. **Uma Ivory** – Mystic City linguist translating psychic glyphs; team: Ironclaw Lv14, Skylume Lv16.
210. **Uma Jett** – Obsidian Cove dockworker guarding night shipments; team: Skylume Lv15, Leafling Lv17.
211. **Viktor Aster** – Sprout Town botanist apprenticed to the professor; team: Leafling Lv16, Tidelit Lv18.
212. **Viktor Bram** – Harbor City fisher funding a ferry for her family; team: Tidelit Lv17, Emberimp Lv19.
213. **Viktor Cyra** – Forge Town miner obsessed with volcanic gems; team: Emberimp Lv18, Gustling Lv20.
214. **Viktor Dusk** – Gale Village archaeologist cataloging wind totems; team: Gustling Lv19, Sprigling Lv21.
215. **Viktor Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Sprigling Lv20, Pebblit Lv22.
216. **Viktor Frost** – Quarry City climber charting hidden caves; team: Pebblit Lv21, Sparksprout Lv23.
217. **Viktor Gale** – Lumen Town engineer maintaining solar arrays; team: Sparksprout Lv22, Chillcub Lv24.
218. **Viktor Holt** – Frostburg sculptor carving living ice; team: Chillcub Lv23, Mindlet Lv25.
219. **Viktor Ivory** – Mystic City linguist translating psychic glyphs; team: Mindlet Lv24, Shadepup Lv26.
220. **Viktor Jett** – Obsidian Cove dockworker guarding night shipments; team: Shadepup Lv25, Aquaphin Lv27.
221. **Wren Aster** – Sprout Town botanist apprenticed to the professor; team: Aquaphin Lv26, Pyrodon Lv28.
222. **Wren Bram** – Harbor City fisher funding a ferry for her family; team: Pyrodon Lv27, Lithor Lv29.
223. **Wren Cyra** – Forge Town miner obsessed with volcanic gems; team: Lithor Lv28, Zephyrkit Lv30.
224. **Wren Dusk** – Gale Village archaeologist cataloging wind totems; team: Zephyrkit Lv29, Thornstag Lv31.
225. **Wren Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Thornstag Lv30, Voltail Lv32.
226. **Wren Frost** – Quarry City climber charting hidden caves; team: Voltail Lv31, Glacielle Lv33.
227. **Wren Gale** – Lumen Town engineer maintaining solar arrays; team: Glacielle Lv32, Miragecat Lv34.
228. **Wren Holt** – Frostburg sculptor carving living ice; team: Miragecat Lv33, Bramblehog Lv35.
229. **Wren Ivory** – Mystic City linguist translating psychic glyphs; team: Bramblehog Lv34, Quakelet Lv36.
230. **Wren Jett** – Obsidian Cove dockworker guarding night shipments; team: Quakelet Lv35, Stormjay Lv37.
231. **Xena Aster** – Sprout Town botanist apprenticed to the professor; team: Stormjay Lv36, Lumiviper Lv38.
232. **Xena Bram** – Harbor City fisher funding a ferry for her family; team: Lumiviper Lv37, Frostmaw Lv39.
233. **Xena Cyra** – Forge Town miner obsessed with volcanic gems; team: Frostmaw Lv38, Mysticore Lv40.
234. **Xena Dusk** – Gale Village archaeologist cataloging wind totems; team: Mysticore Lv39, Shadowmunk Lv41.
235. **Xena Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Shadowmunk Lv40, Solarion Lv42.
236. **Xena Frost** – Quarry City climber charting hidden caves; team: Solarion Lv41, Rockram Lv43.
237. **Xena Gale** – Lumen Town engineer maintaining solar arrays; team: Rockram Lv42, Sandwyrm Lv44.
238. **Xena Holt** – Frostburg sculptor carving living ice; team: Sandwyrm Lv43, Ironclaw Lv45.
239. **Xena Ivory** – Mystic City linguist translating psychic glyphs; team: Ironclaw Lv44, Skylume Lv46.
240. **Xena Jett** – Obsidian Cove dockworker guarding night shipments; team: Skylume Lv5, Leafling Lv7.
241. **Yori Aster** – Sprout Town botanist apprenticed to the professor; team: Leafling Lv6, Tidelit Lv8.
242. **Yori Bram** – Harbor City fisher funding a ferry for her family; team: Tidelit Lv7, Emberimp Lv9.
243. **Yori Cyra** – Forge Town miner obsessed with volcanic gems; team: Emberimp Lv8, Gustling Lv10.
244. **Yori Dusk** – Gale Village archaeologist cataloging wind totems; team: Gustling Lv9, Sprigling Lv11.
245. **Yori Ember** – Verdant Hamlet rancher raising orphaned monsters; team: Sprigling Lv10, Pebblit Lv12.
246. **Yori Frost** – Quarry City climber charting hidden caves; team: Pebblit Lv11, Sparksprout Lv13.
247. **Yori Gale** – Lumen Town engineer maintaining solar arrays; team: Sparksprout Lv12, Chillcub Lv14.
248. **Yori Holt** – Frostburg sculptor carving living ice; team: Chillcub Lv13, Mindlet Lv15.
249. **Yori Ivory** – Mystic City linguist translating psychic glyphs; team: Mindlet Lv14, Shadepup Lv16.
250. **Yori Jett** – Obsidian Cove dockworker guarding night shipments; team: Shadepup Lv15, Aquaphin Lv17.

### Full Story Outline
1. **Prologue – Sprout Town**  
   - Professor Larch introduces the player to monster lore.  
   - Dialogue: *"Choose a companion; your journey sprouts from trust."*  
2. **Rivalry Spark**  
   - Childhood friend chooses a different starter and boasts: *"I’ll race you to the League!"*  
3. **Badge Quest Begins**  
   - Player travels town to town defeating gym leaders who each reveal fragments of titan history.  
4. **Agents Emerge**  
   - Shadowy Agents steal a relic shard from Harbor City.  
   - Dialogue: *"The titans’ memory will be ours!"*  
5. **Sky Land Trial**  
   - Player ascends via balloon to calm raging storms and earns the trust of wind spirits.  
6. **Relic Revelation**  
   - Combining shards unveils a map to the Titan Nexus beneath Mystic City.  
7. **Betrayal at Solar Tower**  
   - Agent lieutenant Silas reveals he seeks titan power to reshape the region.  
8. **Final Plateau Confrontation**  
   - Player defeats the reformed Agents and faces Silas’ ultimate monster.  
   - Dialogue: *"Power without harmony is ruin!"*  
9. **Epilogue**  
   - Peace restored, titans slumber and new horizons beckon with seasonal festivals and global trade.

### Area Visuals
Every locale is richly detailed to immerse players in the world.
- **Sprout Town** – Cobblestone lanes lined with mossy cottages, scarecrows waving in wheat fields, and a central oak whose leaves shift from lime to emerald with the seasons.  
- **Harbor City** – Multi-tiered docks of sun-bleached timber, nets fluttering between poles, fish markets awash in teal awnings, and a lighthouse projecting ruby beams over violet sunsets.  
- **Forge Town** – Lava channels snake beneath iron grates, casting orange light on basalt walls; furnaces roar while metallic clangs echo through sulfurous haze.  
- **Gale Village** – Rolling plains of amber grass broken by towering windmills; banners snap in constant breezes and clouds race across a cerulean sky.  
- **Verdant Hamlet** – Suspended rope bridges connect treehouse dwellings; bioluminescent fungi glow turquoise at night around the breeding ranch.  
- **Quarry City** – Sheer granite cliffs with carved switchbacks, pulley elevators creak, and mining lanterns cast golden halos on jagged rock.  
- **Lumen Town** – Desert oasis encircled by mirrored solar towers; sandstone houses painted in pastel blues and oranges, streets shimmer under heat haze.  
- **Frostburg** – Snow-draped chalets of dark timber, icicles glittering like crystal daggers, and auroras painting the night in greens and purples.  
- **Mystic City** – Sleek skyscrapers with holographic billboards; alleys lined with neon sigils and floating meditation gardens.  
- **Obsidian Cove** – Black sand beaches reflecting moonlight, tide pools glowing with bioluminescent algae, and crooked docks leading to shadowy waters.  
- **Aqua Isle** – Coral reefs visible through clear sapphire waters; straw-roof huts ring a crescent beach while palm fronds sway.  
- **Blizzard Isle** – Jagged icebergs encircle the shore; snowstorms veil a crystalline cavern whose walls refract rainbow light.  
- **Ember Isle** – Charcoal fields dotted with erupting vents; obsidian cliffs drip molten rivulets into the sea.  
- **Skyreach Base** – Clifftop hangars with tethered hot-air balloons, brass gears whirling and flags flapping at perpetual dawn.  
- **Sky Land** – Floating meadows anchored by crystalline roots, waterfalls spilling into endless sky, and ruins hovering on magnetic stones.  
- **Ruined Temple** – Weathered pillars encircled by ghostly mist; ancient murals faintly glow when moonlight strikes.  
- **Crystal Town** – Market stalls shaded by gem-cut canopies; every building façade studded with shining minerals, streets sparkling under sunbeams.  
- **Echo Village** – Sandstone dwellings carved into canyon walls, voices reverberate multiple times creating eerie harmonies.  
- **Solar City** – Titanium skyscrapers mirror the sun; mag-lev trams glide above chrome plazas and rooftops sport gardens of reflective glass.  
- **Final Plateau** – Vast highland of crimson stone with panoramic views of the entire region, league stadium crowned by banners of every gym.
Routes feature their own landmarks and color palettes, from Route 1’s powder-blue snowdrifts dotted with basalt spires to Route 30’s glittering ice tunnels lit by frozen fireflies.

### Human Archetypes
Twenty archetypes guide human sprite design, emphasizing body form, attire, and facial features.
1. **Ranger** – Tall, sinewy frame; weathered green duster, wide-brim hat, hawkish nose, and stern amber eyes.  
2. **Mechanic** – Short and stout; oil-smeared coveralls, tool belt heavy with wrenches, round goggles magnifying bright hazel eyes.  
3. **Elder Scholar** – Hunched back, thin limbs; flowing indigo robes trimmed with gold, long white beard, deep-set eyes behind tiny spectacles.  
4. **Courier** – Lean runner’s build; aerodynamic jumpsuit with reflective stripes, messenger bag slung cross-body, freckled face and spiky hair.  
5. **Sailor** – Muscular with broad shoulders; striped shirt, rolled sleeves revealing anchor tattoo, weather-beaten skin and squared jaw.  
6. **Dancer** – Graceful silhouette; layered sarong of vibrant reds and yellows, bangled wrists, expressive almond eyes and warm smile.  
7. **Miner** – Stocky and powerful; heavy boots, dust mask, headlamp helmet, soot-smudged cheeks and determined brow.  
8. **Merchant** – Slender but poised; tailored suit with jeweled cane, neatly trimmed beard, shrewd eyes behind monocle.  
9. **Hacker** – Thin and jittery; oversized hoodie etched with circuit motifs, fingerless gloves, neon-dyed hair partially hiding curious gaze.  
10. **Seer** – Medium build; translucent veils layered over midnight robes, glowing bracelets, calm lavender eyes accentuated by dark liner.  
11. **Nurse** – Petite; pastel scrubs patterned with hearts, white cap, round cheeks and gentle smile.  
12. **Hunter** – Burly; fur cloak pinned with fangs, weathered leather pants, scar across cheek, piercing grey eyes.  
13. **Farmer** – Broad-hipped; denim overalls, straw hat, freckles across sunburned nose, warm brown eyes.  
14. **Officer** – Rigid posture; crisp navy uniform with silver buttons, square jaw, trimmed hair and stern blue gaze.  
15. **Chef** – Rotund; flour-dusted apron, towering toque, rosy cheeks, twinkling eyes behind thick brows.  
16. **Surfer** – Lanky; wetsuit peeled to waist, sun-bleached hair, tan skin, relaxed grin.  
17. **Librarian** – Slender; cardigan over plaid skirt, horn-rimmed glasses, soft smile and focused eyes.  
18. **Performer** – Athletic; sequined jacket scattering light, face painted in bold geometric colors, dramatic eyebrows.  
19. **Poet** – Gaunt; long dark coat, scarf fluttering, melancholy eyes under messy fringe.  
20. **Smith** – Barrel-chested; leather apron, braided beard flecked with soot, bright grin illuminating crow’s feet.

### Monster Sprite Compendium
Each species below includes notable animation and color notes.
- **Leafling** – Lime-green quadruped with oversized leaf tail; idle swish every four frames, blush of yellow along ears.  
- **Tidelit** – Azure amphibian with translucent fins; ripple shader cycles cyan to navy, jump animation splashes droplets.  
- **Emberimp** – Coal-black imp with flickering orange horns; constant ember particle emitters, attack animation launches sparks.  
- **Gustling** – Pale grey avian with ribbon-like wings; wings loop in figure-eight, body leans with wind gust.  
- **Sprigling** – Sprout-bodied sprite with budding antlers; sprouts bloom during idle, color palette of emerald and mint.  
- **Pebblit** – Chunky brown golem of stacked stones; cracks glow amber when charging, footstep dust puffs.  
- **Sparksprout** – Yellow rodent with vine whiskers; static crackles across fur, tail flashes white on attack.  
- **Chillcub** – Powder-blue bear cub with icy spikes; breathes mist each loop, eyes sparkle with frosty stars.  
- **Mindlet** – Magenta floating orb with psychic tendrils; gentle bob with aura pulses, teleport blink effect.  
- **Shadepup** – Shadowy canine outlined in deep indigo; idle produces swirling smoke, eyes flicker crimson.  
- **Aquaphin** – Sleek teal dolphin-like creature; water trail follows jumps, dorsal fin glows on charge.  
- **Pyrodon** – Stocky salamander with magma stripes; lava drips from tail tip, attack erupts in flare.  
- **Lithor** – Granite-armored beetle; carapace reflects light, mandibles snap with metallic clink.  
- **Zephyrkit** – Tiny silver fox with cloud-tuft tail; tail morphs into wind swirl, body stretches in run cycle.  
- **Thornstag** – Deep-green deer with vine antlers; leaves fall when hit, hooves leave grass sprouts.  
- **Voltail** – Neon-blue snake with sparking scales; electric arcs travel lengthwise, hiss animation emits light.  
- **Glacielle** – Crystal-winged moth; wings refract rainbow shards, powder trail drifts behind.  
- **Miragecat** – Sand-colored feline shifting transparency; afterimage persists with every step.  
- **Bramblehog** – Hedgehog covered in bramble thorns; rolls into spiky ball, palette earthy browns and reds.  
- **Quakelet** – Small golem with fault-line seams; stomps generate tremor ripples, eyes glow molten orange.  
- **Stormjay** – Cobalt jay with thundercloud wings; lightning flickers in feathers, screech emits waveform.  
- **Lumiviper** – Pearl-white serpent with luminescent stripes; body segments pulse sequentially, shed light aura.  
- **Frostmaw** – Woolly mastiff with icy breath; teeth emit snowflakes on bark, heavy idle makes snow sink.  
- **Mysticore** – Six-legged elk with crystal core; translucent body reveals spinning prism heart.  
- **Shadowmunk** – Dusky chipmunk that phases into shadows; tail leaves inky trail, eyes gleam silver.  
- **Solarion** – Radiant lion with solar mane; mane flames oscillate gold to white, roar releases flare.  
- **Rockram** – Rugged ram with basalt horns; charge animation kicks up gravel, horns crackle.  
- **Sandwyrm** – Sand-toned wyrm burrowing through dunes; surfacing sends spray of grit, eyes like amber gems.  
- **Ironclaw** – Metallic crab with pincers that spark; shell reflects surroundings, clack animation shows sparks.  
- **Skylume** – Luminescent jellyfish floating in air; tentacles trail stardust, body pulses with soft glow.

### Item Sprite Compendium
Twenty key items with visuals and use animations:
1. **Healing Herb** – Rolled green leaf unfurling with glittering motes; on use, petals disperse into player.  
2. **Capture Orb** – Chrome sphere with rotating glyph; opens with radial light that snaps closed.  
3. **Power Stone** – Jagged amethyst emitting slow pulse; held sprite throbs brighter when HP low.  
4. **Speed Elixir** – Glass vial of neon blue liquid; drinking animates swirling afterimages.  
5. **Shield Tonic** – Bronze flask etched with runes; upon use, hexagonal barrier shimmers around monster.  
6. **Mystic Scroll** – Aged parchment unfurling to reveal glowing symbols that spiral upward.  
7. **Flame Charm** – Charred pendant with flickering core; use ignites brief protective blaze.  
8. **Aqua Amulet** – Teardrop gem encased in bubbles; when activated, watery veil cascades downward.  
9. **Thunder Disk** – Spinning yellow disk sparking arcs; thrown like a Frisbee, discharging on contact.  
10. **Frost Bell** – Silver bell releasing snowflake chimes; creates swirling snow shield.  
11. **Shadow Cloak** – Dark cape with animated smoke edges; drapes user in shadow during stealth.  
12. **Light Beacon** – Crystal lantern projecting sunbeams in all directions.  
13. **Earth Totem** – Carved stone idol sprouting moss; use summons earthen spikes around player.  
14. **Wind Fan** – Bamboo fan painting gust trails; swish produces visible air current.  
15. **Poison Darts** – Quiver of purple-tipped darts; firing leaves trail of green fumes.  
16. **Steel Plating** – Stack of metallic plates snapping into armor around monster.  
17. **Dragon Scale** – Iridescent scale radiating prismatic sheen; activates roaring aura.  
18. **Ghost Candle** – Dripping purple candle emitting spectral flame; flames form protective wisp.  
19. **Psychic Lens** – Floating crystal eye turning colors as it focuses; use triggers mind-wave ripple.  
20. **Bug Net** – Mesh net glittering with dewdrops; swing animation leaves afterimage lattice.

### Attack Animation Details
- **FlameBlast** – Spiraling cone of fire erupts from caster, color gradient from deep red to white-hot core; fades to smoke embers.  
- **AquaBeam** – Narrow jet of cobalt water with white spray on impact; lingering puddle ripples.  
- **Leaf Barrage** – Cluster of razor leaves spin outward, each trailing emerald light streak.  
- **Stone Crush** – Massive boulder materializes above target and shatters into dust.  
- **Thunder Lance** – Spear of lightning pierces ground, bolts branching outward.  
- **Frost Wave** – Semi-circular sheet of ice sweeps forward leaving slippery sheen.  
- **Shadow Pounce** – User dissolves into shadow, reappears behind target with slashing silhouette.  
- **Solar Flare** – Sphere of blinding light expands then detonates with lens-flare effect.  
- **Wind Cutter** – Invisible blade slices air, visible only by silver slash marks.  
- **Toxic Spray** – Cloud of violet particles arcs and settles, leaving bubbling residue.

### Utility Move Visuals
- **Fly** – Cyclone lifts player skyward, background scrolls vertically, descent fades into destination map.  
- **Surf** – Water mount forms beneath player, waves animate forward motion with foamy wake.  
- **Dig** – Monster spins into ground, leaving spiral pit; screen darkens then brightens at exit location.  
- **Teleport** – Aura envelops player, pixels scatter and reassemble at target point.  
- **Climb** – Rope shoots upward, player scales with looping climb cycle against cliff tiles.

### Building Visuals
- **Gyms** – Each reflects its element: Fire gym forged from obsidian with lava falls; Water gym shaped like conch shells with glass floors; Electric gym metallic with neon conduits; etc.  
- **Labs** – Glass domes housing rotating holograms, automated doors sliding with blue light.  
- **Inns** – Timber frames, hanging planters, animated chimney smoke, interior hearth flicker.  
- **Shops** – Color-coded awnings, animated signs (fish for markets, gear for equipment).  
- **Ranches** – Fenced pastures with swaying grass, barns with opening loft doors.  
- **Towers** – Solar City skyscrapers with scrolling light strips and rotating satellite dishes.

### Map Options
- Toggle grid and coordinate display.  
- Mini-map with player marker and zoom control.  
- Icons for shops, gyms, docks, caves, and quest givers.  
- Route highlighting, dynamic weather overlays, and day/night filter.  
- Accessibility toggles for high-contrast mode and simplified pathing.  
- Fast-travel markers unlocked after discovery.  
- Encounter radar showing nearby monsters.  
- Quest log overlay with tracking arrows.  
- Photo mode for capturing scenery.
