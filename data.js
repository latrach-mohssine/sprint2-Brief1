const caracters = [
  {
    id: "#004", name: "Charmander", type: "Feu", level: "Base",
    stats: { hp: 39, attack: 52, defence: 43 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    description: "Un petit lézard orange dont la queue porte une flamme."
  },
  {
    id: "#007", name: "Squirtle", type: "Eau", level: "Base",
    stats: { hp: 44, attack: 48, defence: 65 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    description: "Une petite tortue bleue protégée par une carapace brune."
  },
  {
    id: "#001", name: "Bulbasaur", type: "Plante", level: "Base",
    stats: { hp: 45, attack: 49, defence: 49 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    description: "Une petite créature verte portant une graine sur son dos."
  },
  {
    id: "#025", name: "Pikachu", type: "Électrik", level: "Évolution 1",
    stats: { hp: 35, attack: 55, defence: 40 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    description: "Une petite créature jaune aux joues rouges et à la queue en éclair."
  },
  {
    id: "#124", name: "Jynx", type: "Glace", level: "Évolution 1",
    stats: { hp: 65, attack: 50, defence: 35 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png",
    description: "Une créature aux longs cheveux blonds et à la tenue rouge."
  },
  {
    id: "#197", name: "Umbreon", type: "Ténèbres", level: "Évolution 1",
    stats: { hp: 95, attack: 65, defence: 110 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png",
    description: "Une créature noire portant des annEaux jaunes sur le corps."
  },
  {
    id: "#019", name: "Rattata", type: "Normal", level: "Base",
    stats: { hp: 30, attack: 56, defence: 35 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
    description: "Un petit rongeur violet aux grandes incisives."
  },
  {
    id: "#005", name: "Charmeleon", type: "Feu", level: "Évolution 1",
    stats: { hp: 58, attack: 64, defence: 58 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    description: "Un lézard rouge aux griffes acérées et au regard déterminé."
  },
  {
    id: "#008", name: "Wartortle", type: "Eau", level: "Évolution 1",
    stats: { hp: 59, attack: 63, defence: 80 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    description: "Une tortue bleue aux oreilles pointues et à la queue touffue."
  },
  {
    id: "#002", name: "Ivysaur", type: "Plante", level: "Évolution 1",
    stats: { hp: 60, attack: 62, defence: 63 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    description: "Une créature verte portant un bourgeon rose entre ses Feuilles."
  },
  {
    id: "#026", name: "Raichu", type: "Électrik", level: "Évolution 2",
    stats: { hp: 60, attack: 90, defence: 55 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
    description: "Une créature orange portant une longue queue terminée par un éclair."
  },
  {
    id: "#144", name: "Articuno", type: "Glace", level: "Base",
    stats: { hp: 90, attack: 85, defence: 100 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png",
    description: "Un oisEau bleu aux grandes ailes et à la longue queue élégante."
  },
  {
    id: "#198", name: "Murkrow", type: "Ténèbres", level: "Base",
    stats: { hp: 60, attack: 85, defence: 42 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/198.png",
    description: "Un petit corbEau noir dont la crête évoque un chapEau."
  },
  {
    id: "#020", name: "Raticate", type: "Normal", level: "Évolution 1",
    stats: { hp: 55, attack: 81, defence: 60 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
    description: "Un rongeur brun aux moustaches claires et aux grandes dents."
  },
  {
    id: "#006", name: "Charizard", type: "Feu", level: "Évolution 2",
    stats: { hp: 78, attack: 84, defence: 78 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    description: "Un grand reptile orange aux ailes bleues et à la queue enflammée."
  },
  {
    id: "#009", name: "Blastoise", type: "Eau", level: "Évolution 2",
    stats: { hp: 79, attack: 83, defence: 100 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    description: "Une grande tortue portant deux canons sur sa carapace."
  },
  {
    id: "#003", name: "Venusaur", type: "Plante", level: "Évolution 2",
    stats: { hp: 80, attack: 82, defence: 83 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    description: "Un grand Pokémon portant une fleur ouverte sur son dos."
  },
  {
    id: "#100", name: "Voltorb", type: "Électrik", level: "Base",
    stats: { hp: 40, attack: 30, defence: 50 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
    description: "Une sphère rouge et blanche au regard sévère."
  },
  {
    id: "#220", name: "Swinub", type: "Glace", level: "Base",
    stats: { hp: 50, attack: 50, defence: 40 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png",
    description: "Une petite boule de fourrure brune au musEau rose."
  },
  {
    id: "#215", name: "Sneasel", type: "Ténèbres", level: "Base",
    stats: { hp: 55, attack: 95, defence: 55 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/215.png",
    description: "Une créature sombre aux griffes blanches et à la plume rouge."
  },
  {
    id: "#052", name: "Meowth", type: "Normal", level: "Base",
    stats: { hp: 40, attack: 45, defence: 35 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
    description: "Un petit chat portant une pièce dorée sur le front."
  },
  {
    id: "#037", name: "Vulpix", type: "Feu", level: "Base",
    stats: { hp: 38, attack: 41, defence: 40 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
    description: "Un petit renard roux aux six queues bouclées."
  },
  {
    id: "#054", name: "Psyduck", type: "Eau", level: "Base",
    stats: { hp: 50, attack: 52, defence: 48 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
    description: "Un canard jaune aux grands yeux et au bec large."
  },
  {
    id: "#043", name: "Oddish", type: "Plante", level: "Base",
    stats: { hp: 45, attack: 50, defence: 55 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
    description: "Une petite Plante bleue coiffée de longues Feuilles vertes."
  },
  {
    id: "#101", name: "Electrode", type: "Électrik", level: "Évolution 1",
    stats: { hp: 60, attack: 50, defence: 70 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png",
    description: "Une grande sphère blanche et rouge au large sourire."
  },
  {
    id: "#221", name: "Piloswine", type: "Glace", level: "Évolution 1",
    stats: { hp: 100, attack: 100, defence: 80 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/221.png",
    description: "Une créature trapue couverte de longs poils et munie de défenses."
  },
  {
    id: "#228", name: "Houndour", type: "Ténèbres", level: "Base",
    stats: { hp: 45, attack: 60, defence: 30 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png",
    description: "Un petit chien sombre portant des marques claires sur le dos."
  },
  {
    id: "#053", name: "Persian", type: "Normal", level: "Évolution 1",
    stats: { hp: 65, attack: 70, defence: 60 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
    description: "Un félin élégant au pelage clair et à la longue queue."
  },
  {
    id: "#038", name: "Ninetales", type: "Feu", level: "Évolution 1",
    stats: { hp: 73, attack: 76, defence: 75 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
    description: "Un renard au pelage clair portant neuf longues queues."
  },
  {
    id: "#055", name: "Golduck", type: "Eau", level: "Évolution 1",
    stats: { hp: 80, attack: 82, defence: 78 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
    description: "Une créature bleue aux pattes palmées et au front rouge."
  },
  {
    id: "#044", name: "Gloom", type: "Plante", level: "Évolution 1",
    stats: { hp: 60, attack: 65, defence: 70 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png",
    description: "Une Plante portant une fleur rouge au-dessus de son visage."
  },
  {
    id: "#125", name: "Electabuzz", type: "Électrik", level: "Évolution 1",
    stats: { hp: 65, attack: 83, defence: 57 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
    description: "Un Pokémon jaune rayé de noir aux bras puissants."
  },
  {
    id: "#225", name: "Delibird", type: "Glace", level: "Base",
    stats: { hp: 45, attack: 55, defence: 45 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/225.png",
    description: "Un oisEau rouge et blanc portant une queue en forme de sac."
  },
  {
    id: "#229", name: "Houndoom", type: "Ténèbres", level: "Évolution 1",
    stats: { hp: 75, attack: 90, defence: 50 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/229.png",
    description: "Un chien noir aux grandes cornes recourbées et à la longue queue."
  },
  {
    id: "#108", name: "Lickitung", type: "Normal", level: "Base",
    stats: { hp: 90, attack: 55, defence: 75 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png",
    description: "Une créature rose à la langue particulièrement longue."
  },
  {
    id: "#058", name: "Growlithe", type: "Feu", level: "Base",
    stats: { hp: 55, attack: 70, defence: 45 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
    description: "Un chiot orange aux rayures sombres et à la crinière claire."
  },
  {
    id: "#060", name: "Poliwag", type: "Eau", level: "Base",
    stats: { hp: 40, attack: 50, defence: 40 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
    description: "Un petit têtard bleu portant une spirale sur le ventre."
  },
  {
    id: "#045", name: "Vileplume", type: "Plante", level: "Évolution 2",
    stats: { hp: 75, attack: 80, defence: 85 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png",
    description: "Une créature bleue surmontée d’une grande fleur rouge tachetée."
  },
  {
    id: "#135", name: "Jolteon", type: "Électrik", level: "Évolution 1",
    stats: { hp: 65, attack: 65, defence: 60 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
    description: "Une créature jaune au pelage hérissé et à la collerette blanche."
  },
  {
    id: "#361", name: "Snorunt", type: "Glace", level: "Base",
    stats: { hp: 50, attack: 50, defence: 50 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/361.png",
    description: "Une petite créature enveloppée dans un mantEau triangulaire."
  },
  {
    id: "#261", name: "Poochyena", type: "Ténèbres", level: "Base",
    stats: { hp: 35, attack: 55, defence: 35 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png",
    description: "Un petit canidé gris au musEau sombre et aux yeux rouges."
  },
  {
    id: "#113", name: "Chansey", type: "Normal", level: "Évolution 1",
    stats: { hp: 250, attack: 5, defence: 5 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png",
    description: "Une créature rose portant un œuf dans une poche ventrale."
  },
  {
    id: "#059", name: "Arcanine", type: "Feu", level: "Évolution 1",
    stats: { hp: 90, attack: 110, defence: 80 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
    description: "Un grand chien rayé à la fourrure abondante."
  },
  {
    id: "#061", name: "Poliwhirl", type: "Eau", level: "Évolution 1",
    stats: { hp: 65, attack: 65, defence: 65 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
    description: "Une créature aquatique bleue munie de mains blanches."
  },
  {
    id: "#069", name: "Bellsprout", type: "Plante", level: "Base",
    stats: { hp: 50, attack: 75, defence: 35 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png",
    description: "Une Plante fine à la tête jaune en forme de cloche."
  },
  {
    id: "#145", name: "Zapdos", type: "Électrik", level: "Base",
    stats: { hp: 90, attack: 90, defence: 85 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png",
    description: "Un grand oisEau jaune et noir aux ailes anguleuses."
  },
  {
    id: "#362", name: "Glalie", type: "Glace", level: "Évolution 1",
    stats: { hp: 80, attack: 80, defence: 80 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/362.png",
    description: "Une tête glacée aux cornes sombres et aux grands yeux bleus."
  },
  {
    id: "#262", name: "Mightyena", type: "Ténèbres", level: "Évolution 1",
    stats: { hp: 70, attack: 90, defence: 70 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png",
    description: "Un canidé gris et noir à la fourrure hérissée."
  },
  {
    id: "#115", name: "Kangaskhan", type: "Normal", level: "Base",
    stats: { hp: 105, attack: 95, defence: 80 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png",
    description: "Un grand Pokémon portant son petit dans une poche ventrale."
  },
  {
    id: "#077", name: "Ponyta", type: "Feu", level: "Base",
    stats: { hp: 50, attack: 85, defence: 55 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png",
    description: "Un petit cheval dont la crinière ressemble à des flammes."
  },
  {
    id: "#062", name: "Poliwrath", type: "Eau", level: "Évolution 2",
    stats: { hp: 90, attack: 95, defence: 95 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png",
    description: "Un combattant aquatique musclé au ventre en spirale."
  },
  {
    id: "#070", name: "Weepinbell", type: "Plante", level: "Évolution 1",
    stats: { hp: 65, attack: 90, defence: 50 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png",
    description: "Une Plante jaune suspendue à une tige courbée."
  },
  {
    id: "#172", name: "Pichu", type: "Électrik", level: "Base",
    stats: { hp: 20, attack: 40, defence: 15 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png",
    description: "Une minuscule créature jaune aux grandes oreilles bordées de noir."
  },
  {
    id: "#363", name: "Spheal", type: "Glace", level: "Base",
    stats: { hp: 70, attack: 40, defence: 50 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/363.png",
    description: "Une petite créature marine ronde au corps bleu tacheté."
  },
  {
    id: "#359", name: "Absol", type: "Ténèbres", level: "Base",
    stats: { hp: 65, attack: 130, defence: 60 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png",
    description: "Une créature blanche portant une longue corne sombre en forme de lame."
  },
  {
    id: "#128", name: "Tauros", type: "Normal", level: "Base",
    stats: { hp: 75, attack: 100, defence: 95 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png",
    description: "Un taurEau brun doté de trois queues."
  },
  {
    id: "#078", name: "Rapidash", type: "Feu", level: "Évolution 1",
    stats: { hp: 65, attack: 100, defence: 70 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
    description: "Un cheval à la longue corne et à la crinière enflammée."
  },
  {
    id: "#079", name: "Slowpoke", type: "Eau", level: "Base",
    stats: { hp: 90, attack: 65, defence: 65 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
    description: "Une créature rose au regard tranquille et à la longue queue."
  },
  {
    id: "#071", name: "Victreebel", type: "Plante", level: "Évolution 2",
    stats: { hp: 80, attack: 105, defence: 65 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png",
    description: "Une grande Plante carnivore aux Feuilles larges."
  },
  {
    id: "#179", name: "Mareep", type: "Électrik", level: "Base",
    stats: { hp: 55, attack: 40, defence: 40 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png",
    description: "Un petit mouton à la laine claire et à la queue rayée."
  },
  {
    id: "#364", name: "Sealeo", type: "Glace", level: "Évolution 1",
    stats: { hp: 90, attack: 60, defence: 70 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/364.png",
    description: "Une créature marine bleue aux moustaches claires et à la queue plate."
  },
  {
    id: "#430", name: "Honchkrow", type: "Ténèbres", level: "Évolution 1",
    stats: { hp: 100, attack: 125, defence: 52 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/430.png",
    description: "Un grand corbEau sombre au poitrail clair et à la crête imposante."
  },
  {
    id: "#132", name: "Ditto", type: "Normal", level: "Base",
    stats: { hp: 48, attack: 48, defence: 48 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
    description: "Une petite masse violette capable de changer de forme."
  },
  {
    id: "#136", name: "Flareon", type: "Feu", level: "Évolution 1",
    stats: { hp: 65, attack: 130, defence: 60 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png",
    description: "Une créature rousse à la queue touffue et au col de fourrure."
  },
  {
    id: "#080", name: "Slowbro", type: "Eau", level: "Évolution 1",
    stats: { hp: 95, attack: 75, defence: 110 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
    description: "Une créature rose portant un coquillage au bout de la queue."
  },
  {
    id: "#152", name: "Chikorita", type: "Plante", level: "Base",
    stats: { hp: 45, attack: 49, defence: 65 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png",
    description: "Une petite créature verte portant une Feuille sur la tête."
  },
  {
    id: "#180", name: "Flaaffy", type: "Électrik", level: "Évolution 1",
    stats: { hp: 70, attack: 55, defence: 55 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/180.png",
    description: "Une créature rose portant une touffe de laine blanche."
  },
  {
    id: "#365", name: "Walrein", type: "Glace", level: "Évolution 2",
    stats: { hp: 110, attack: 80, defence: 90 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png",
    description: "Un grand mammifère marin aux longues défenses et à la moustache blanche."
  },
  {
    id: "#461", name: "Weavile", type: "Ténèbres", level: "Évolution 1",
    stats: { hp: 70, attack: 120, defence: 65 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/461.png",
    description: "Une créature sombre aux longues griffes et à la grande crête rouge."
  },
  {
    id: "#133", name: "Eevee", type: "Normal", level: "Base",
    stats: { hp: 55, attack: 55, defence: 50 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
    description: "Une petite créature brune à la collerette claire et à la queue touffue."
  },
  {
    id: "#155", name: "Cyndaquil", type: "Feu", level: "Base",
    stats: { hp: 39, attack: 52, defence: 43 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png",
    description: "Une petite créature au musEau allongé et au dos enflammé."
  },
  {
    id: "#129", name: "Magikarp", type: "Eau", level: "Base",
    stats: { hp: 20, attack: 10, defence: 55 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
    description: "Un poisson orange aux grandes nageoires et aux longues moustaches."
  },
  {
    id: "#154", name: "Meganium", type: "Plante", level: "Évolution 2",
    stats: { hp: 80, attack: 82, defence: 100 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png",
    description: "Un grand quadrupède vert au long cou entouré de pétales roses."
  },
  {
    id: "#181", name: "Ampharos", type: "Électrik", level: "Évolution 2",
    stats: { hp: 90, attack: 75, defence: 85 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png",
    description: "Une créature jaune au long cou et à la queue terminée par une sphère rouge."
  },
  {
    id: "#471", name: "Glaceon", type: "Glace", level: "Évolution 1",
    stats: { hp: 65, attack: 60, defence: 110 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png",
    description: "Une créature bleu clair aux oreilles allongées et aux motifs foncés."
  },
  {
    id: "#509", name: "Purrloin", type: "Ténèbres", level: "Base",
    stats: { hp: 41, attack: 50, defence: 37 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/509.png",
    description: "Un petit félin violet au regard malicieux et à la longue queue."
  },
  {
    id: "#137", name: "Porygon", type: "Normal", level: "Base",
    stats: { hp: 65, attack: 60, defence: 70 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png",
    description: "Une créature numérique aux formes géométriques roses et bleues."
  },
  {
    id: "#157", name: "Typhlosion", type: "Feu", level: "Évolution 2",
    stats: { hp: 78, attack: 84, defence: 78 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png",
    description: "Un grand Pokémon au dos sombre et au collier de flammes."
  },
  {
    id: "#130", name: "Gyarados", type: "Eau", level: "Évolution 1",
    stats: { hp: 95, attack: 125, defence: 79 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
    description: "Un immense serpent aquatique bleu à la gueule imposante."
  },
  {
    id: "#252", name: "Treecko", type: "Plante", level: "Base",
    stats: { hp: 40, attack: 45, defence: 35 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png",
    description: "Un petit lézard vert aux grands yeux et à la queue épaisse."
  },
  {
    id: "#239", name: "Elekid", type: "Électrik", level: "Base",
    stats: { hp: 45, attack: 63, defence: 37 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/239.png",
    description: "Une petite créature jaune dont la tête porte deux pointes noires."
  },
  {
    id: "#473", name: "Mamoswine", type: "Glace", level: "Évolution 2",
    stats: { hp: 110, attack: 130, defence: 80 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/473.png",
    description: "Un grand mammouth brun aux défenses blanches recourbées."
  },
  {
    id: "#510", name: "Liepard", type: "Ténèbres", level: "Évolution 1",
    stats: { hp: 64, attack: 88, defence: 50 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/510.png",
    description: "Un félin élancé au pelage violet tacheté de jaune."
  },
  {
    id: "#143", name: "Snorlax", type: "Normal", level: "Évolution 1",
    stats: { hp: 160, attack: 110, defence: 65 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
    description: "Un grand Pokémon au ventre clair qui aime dormir."
  },
  {
    id: "#255", name: "Torchic", type: "Feu", level: "Base",
    stats: { hp: 45, attack: 60, defence: 40 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png",
    description: "Un petit poussin orange aux ailes courtes."
  },
  {
    id: "#134", name: "Vaporeon", type: "Eau", level: "Évolution 1",
    stats: { hp: 130, attack: 65, defence: 60 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png",
    description: "Une créature aquatique bleue dotée de nageoires et d’une collerette."
  },
  {
    id: "#254", name: "Sceptile", type: "Plante", level: "Évolution 2",
    stats: { hp: 70, attack: 85, defence: 65 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png",
    description: "Un grand lézard vert aux Feuilles pointues et à la queue ramifiée."
  },
  {
    id: "#403", name: "Shinx", type: "Électrik", level: "Base",
    stats: { hp: 45, attack: 65, defence: 34 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/403.png",
    description: "Un petit félin bleu à la queue terminée par une étoile."
  },
  {
    id: "#582", name: "Vanillite", type: "Glace", level: "Base",
    stats: { hp: 36, attack: 50, defence: 50 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/582.png",
    description: "Une petite créature blanche dont la silhouette évoque une Glace."
  },
  {
    id: "#570", name: "Zorua", type: "Ténèbres", level: "Base",
    stats: { hp: 40, attack: 65, defence: 40 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/570.png",
    description: "Un petit renard sombre portant une touffe rouge sur la tête."
  },
  {
    id: "#190", name: "Aipom", type: "Normal", level: "Base",
    stats: { hp: 55, attack: 70, defence: 55 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/190.png",
    description: "Un petit singe violet dont la queue se termine par une main."
  },
  {
    id: "#392", name: "Infernape", type: "Feu", level: "Évolution 2",
    stats: { hp: 76, attack: 104, defence: 71 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/392.png",
    description: "Un singe agile au corps clair et à la tête enflammée."
  },
  {
    id: "#245", name: "Suicune", type: "Eau", level: "Base",
    stats: { hp: 100, attack: 75, defence: 115 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png",
    description: "Un quadrupède bleu à la crinière violette et aux longs rubans blancs."
  },
  {
    id: "#470", name: "Leafeon", type: "Plante", level: "Évolution 1",
    stats: { hp: 65, attack: 110, defence: 130 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png",
    description: "Une créature au pelage clair dont les oreilles et la queue évoquent des Feuilles."
  },
  {
    id: "#405", name: "Luxray", type: "Électrik", level: "Évolution 2",
    stats: { hp: 80, attack: 120, defence: 79 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/405.png",
    description: "Un grand félin bleu et noir à la crinière imposante."
  },
  {
    id: "#584", name: "Vanilluxe", type: "Glace", level: "Évolution 2",
    stats: { hp: 71, attack: 95, defence: 85 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/584.png",
    description: "Une créature glacée à deux têtes entourées de cristaux."
  },
  {
    id: "#571", name: "Zoroark", type: "Ténèbres", level: "Évolution 1",
    stats: { hp: 60, attack: 105, defence: 60 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png",
    description: "Un grand renard sombre à la longue crinière rouge."
  },
  {
    id: "#216", name: "Teddiursa", type: "Normal", level: "Base",
    stats: { hp: 60, attack: 80, defence: 50 },
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/216.png",
    description: "Un petit ourson brun portant une marque claire sur le front."
  }
];
