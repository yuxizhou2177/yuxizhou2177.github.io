/* ═══════════════════════════════════════════════════════════════
   多语言 · EN / ES / FR / 中文
   想改译文只动这个区块。
   ═══════════════════════════════════════════════════════════════ */
var lang='en';
const EN_CACHE={};

const T={
  "es": {
    "nav.about": "Sobre mí",
    "nav.project": "Trabajos seleccionados",
    "nav.policy": "Políticas y PEID",
    "nav.exp": "Experiencia",
    "nav.bg": "Formación",
    "mast.tiny": "París · UNESCO",
    "mast.hi": "Hola, soy",
    "mast.pill1": "Comunicación institucional",
    "mast.pill2": "Programas multilaterales",
    "mast.line": "Este es mi rincón de internet: un espacio donde comparto algunos de mis trabajos, los lugares a los que me llevan y las historias que voy creando por el camino.",
    "map.label": "Adónde me ha llevado el trabajo",
    "map.tour": "▶ Ver recorrido",
    "map.fmis": "Misiones",
    "map.fsids": "PEID que han recibido apoyo",
    "map.sub": "Misiones seleccionadas (2024–2026) relacionadas con la comunicación y el diálogo sobre políticas, junto con los pequeños Estados insulares en desarrollo (PEID) que han recibido apoyo mediante el seguimiento durante este bienio.",
    "read.label": "Detalle",
    "read.hint": "Explora el mapa pasando el cursor sobre un marcador, iniciando el recorrido o bajando hasta las notas de las misiones.",
    "tool.label": "Herramientas seleccionadas",
    "sec.about": "Sobre mí",
    "about.h2": "Convierto información técnica en comunicación clara y útil.",
    "about.p1": "En la UNESCO, en París, mi trabajo abarca el seguimiento del cumplimiento de las obligaciones de los Estados Miembros y una iniciativa mundial sobre farmacopea tradicional. Me gusta encontrar el enfoque adecuado, dar forma al mensaje y adaptarlo al público: desde notas informativas para la alta dirección y contenido web hasta materiales visuales y productos digitales para los Estados Miembros y públicos internacionales.",
    "sec.project": "Trabajos seleccionados",
    "wg1.label": "Estudios de caso independientes",
    "wg1.meta": "Iniciativas propias · basadas en fuentes públicas",
    "p1.type": "Narrativa de datos",
    "p1.t": "SIDSight",
    "p1.k": "Estudio de caso independiente · ago. 2026",
    "p1.sig": "evidencia → contexto → relato",
    "p1.a": "Una historia interactiva basada en datos agroalimentarios que conecta indicadores públicos, comparaciones regionales y el contexto de ocho PEID.",
    "p1.sk": "Narrativa de datos · Análisis de políticas · Power BI · SIG",
    "p1.lnk": "Explorar SIDSight →",
    "p1.lnk2": "Recorrer el mapa →",
    "p4.type": "Adaptación al público",
    "p4.t": "Beyond the Record",
    "p4.k": "Estudio de caso independiente · sep. 2026",
    "p4.sig": "informe → públicos",
    "p4.a": "Un mismo informe técnico adaptado para la alta dirección, los lectores de la web y el público de las redes sociales mediante la redacción y la narrativa visual.",
    "p4.sk": "Adaptación al público · Redacción y edición · Narrativa de datos",
    "p4.lnk": "Ver estudio de caso →",
    "ddcn.new": "Nuevo",
    "ddcn.type": "Síntesis para la comunicación",
    "ddcn.t": "Across DDCN",
    "ddcn.k": "Estudio de caso independiente · sep. 2026",
    "ddcn.sig": "ámbitos de trabajo → mensajes para el público",
    "ddcn.a": "Síntesis de seis ámbitos técnicos de la FAO en tres mensajes dirigidos a responsables de políticas, socios y medios de comunicación.",
    "ddcn.sk": "Síntesis técnica · Formulación de mensajes · Criterio editorial",
    "ddcn.lnk": "Ver estudio de caso →",
    "wg2.label": "Trabajos institucionales seleccionados",
    "wg2.meta": "Realizados en el marco de mis funciones en la UNESCO",
    "p5.type": "Estrategia de comunicación",
    "p5.t": "Estrategia de comunicación de la Convención",
    "p5.k": "Estrategia institucional · 2025",
    "p5.a": "Desarrollé la primera estrategia dedicada específicamente a la comunicación de la Convención, concretando los objetivos institucionales en públicos, prioridades de los mensajes, productos e indicadores clave de desempeño (KPI).",
    "p5.sk": "Definición de públicos · Planificación de contenidos · KPI",
    "p2.type": "Narrativa interactiva",
    "p2.t": "El recorrido de la Convención contra el Dopaje",
    "p2.k": "Experiencia digital de la COP10 · 2025",
    "p2.a": "Fui el punto focal de la UNESCO para la arquitectura de contenidos, la redacción y la coordinación de una plataforma interactiva que presenta a un público internacional veinte años de hitos de la Convención.",
    "p2.sk": "Arquitectura de contenidos · Coordinación internacional · Narrativa digital",
    "p2.lnk": "Abrir el panel interactivo →",
    "more.label": "Otros trabajos de comunicación",
    "sec.policy": "Políticas y PEID",
    "pol1.t": "Monitoreo y seguimiento con los Estados Miembros",
    "pol1.a": "Apoyo el monitoreo de la Convención y el seguimiento con los Estados Miembros: reviso informes nacionales, identifico carencias en la aplicación, sigo los avances y preparo próximos pasos adaptados a cada caso.",
    "pol1.c1": "Estados Miembros",
    "pol1.c2": "Evidencia por país",
    "pol1.c3": "Seguimiento",
    "pol2.t": "Apoyo a los PEID y colaboración regional",
    "pol2.a": "Apoyo el monitoreo estrecho y el seguimiento con nueve PEID del Pacífico, el Caribe y la región AIS, así como la colaboración regional y el desarrollo de capacidades, incluido el programa para los PEID del Pacífico.",
    "pol2.c1": "PEID",
    "pol2.c3": "Colaboración regional",
    "pol2.c4": "Desarrollo de capacidades",
    "pol3.t": "Farmacopea tradicional y valores del deporte",
    "pol3.a": "Apoyo la coordinación de una iniciativa mundial que vincula la ciencia y las políticas públicas y reúne a académicos, expertos y coordinadores regionales, incluida la integración de sus aportaciones en productos de comunicación.",
    "pol3.c1": "Ciencia y políticas públicas",
    "pol3.c3": "Coordinación con expertos",
    "pol3.c4": "Intercambio de conocimientos",
    "sec.exp": "Experiencia",
    "exp.h2": "Trayectoria seleccionada",
    "cr.title": "Asistente de proyecto · UNESCO",
    "cr.when": "París · ene. 2025 – actualidad",
    "cr.summary": "Seguimiento de los Estados Miembros · comunicación institucional · coordinación entre ciencia y políticas públicas · difusión internacional",
    "fold.exptitle": "Trayectoria completa",
    "fold.hint": "Haz clic para desplegar",
    "fold.title": "Misiones seleccionadas, 2024–2026",
    "fold.note": "Pasa el cursor sobre un marcador en <a class=\"jump\" href=\"#map-plate\">el mapa de la parte superior de la página</a> para resaltar la nota correspondiente aquí abajo, y viceversa.",
    "sec.bg": "Formación",
    "bg.h2": "Formación y aprendizaje",
    "bg.bubble": "Formación científica · Investigadora en ciencias sociales · Curiosa y siempre aprendiendo",
    "bg.edu": "Formación académica",
    "bg.d1": "Máster en Lingüística",
    "bg.m1": "Universidad de Estudios Extranjeros de Pekín · 2019–2022",
    "bg.s1": "Análisis del discurso · Estilística · Política internacional · Métodos de investigación · Adquisición de segundas lenguas",
    "bg.d2": "Grado en Ciencias Biológicas (BSc)",
    "bg.m2": "Universidad de Ludong · 2014–2018",
    "bg.s2": "Ecología · Biodiversidad · Bioestadística · Botánica · Zoología · Informática aplicada a la biología",
    "bg.train": "Selección de formación y certificaciones",
    "bg.t1": "Academia de aprendizaje electrónico de la FAO (2026) — Comunicación para el desarrollo rural · Seguridad alimentaria y medios de vida · Biodiversidad y sistemas agroalimentarios · Agricultura en los acuerdos comerciales regionales",
    "bg.t2": "Google Analytics · Microsoft Power Platform Fundamentals (PL-900) · IELTS Academic: 8,0 · Habilitación docente para la educación secundaria superior",
    "bg.awards": "Reconocimientos",
    "bg.a1": "Beca Nacional (2 % con mejores resultados) · Beca de categoría especial · Reconocimiento al mérito estudiantil (×2)",
    "bg.a2": "Premio a la tesis destacada · Concurso Nacional de Debate en Inglés para Estudiantes Universitarios — Primer premio",
    "bg.pub": "Investigación y publicaciones seleccionadas",
    "bg.p1": "La construcción del discurso internacional de China sobre la «reducción de la pobreza» (2021) · Conciencia fonológica y adquisición del inglés en la infancia (2020)",
    "bg.pthl": "Tesis de máster:",
    "bg.p2": "Retroalimentación correctiva escrita y conocimiento explícito/implícito (2022)",
    "lg1": "Chino — lengua materna",
    "lg2": "Inglés — IELTS 8,0",
    "lg3": "Español — B2",
    "lg4": "Francés — B1",
    "c.label": "06 — Contacto",
    "c.h2": "¡Hablemos! 👋",
    "c.p1": "Me alegra poder conversar sobre comunicación, cooperación internacional y las ideas que hay detrás de mi trabajo. 🌍",
    "f.left": "Mi pequeño rincón de internet, que sigue tomando forma.",
    "p1.count": "8 PEID"
  },
  "fr": {
    "nav.about": "À propos",
    "nav.project": "Travaux sélectionnés",
    "nav.policy": "Politiques et PEID",
    "nav.exp": "Expérience",
    "nav.bg": "Parcours",
    "mast.tiny": "Paris · UNESCO",
    "mast.hi": "Bonjour, je suis",
    "mast.pill1": "Communication institutionnelle",
    "mast.pill2": "Programmes multilatéraux",
    "mast.line": "Voici mon coin d’internet : un espace où je partage une sélection de mes travaux, les lieux où ils me mènent et les histoires que je crée au fil du chemin.",
    "map.label": "Là où mon travail m’a menée",
    "map.tour": "▶ Lancer la visite",
    "map.fmis": "Missions",
    "map.fsids": "PEID ayant reçu un appui",
    "map.sub": "Une sélection de missions (2024–2026) liées à la communication et au dialogue sur les politiques publiques, ainsi que les petits États insulaires en développement (PEID) ayant reçu un appui dans le cadre du suivi pendant cet exercice biennal.",
    "read.label": "Aperçu",
    "read.hint": "Explorez la carte en survolant un repère, en lançant la visite ou en faisant défiler la page jusqu’aux notes de mission.",
    "tool.label": "Outils sélectionnés",
    "sec.about": "À propos",
    "about.h2": "Je transforme l’information technique en contenus de communication clairs et utiles.",
    "about.p1": "À l’UNESCO, à Paris, mon travail porte sur le suivi du respect des obligations des États membres et sur une initiative mondiale consacrée à la pharmacopée traditionnelle. J’aime trouver le bon angle, construire le message et l’adapter au public : notes d’information pour la haute direction, contenus web, supports visuels et produits numériques destinés aux États membres et à des publics internationaux.",
    "sec.project": "Travaux sélectionnés",
    "wg1.label": "Études de cas indépendantes",
    "wg1.meta": "Initiatives personnelles · fondées sur des sources publiques",
    "p1.type": "Narration par les données",
    "p1.t": "SIDSight",
    "p1.k": "Étude de cas indépendante · août 2026",
    "p1.sig": "éléments probants → contexte → récit",
    "p1.a": "Un récit interactif fondé sur des données agroalimentaires, qui relie des indicateurs publics, des comparaisons régionales et le contexte de huit PEID.",
    "p1.sk": "Narration par les données · Analyse des politiques · Power BI · SIG",
    "p1.lnk": "Explorer SIDSight →",
    "p1.lnk2": "Parcourir la carte →",
    "p4.type": "Adaptation aux publics",
    "p4.t": "Beyond the Record",
    "p4.k": "Étude de cas indépendante · sept. 2026",
    "p4.sig": "rapport → publics",
    "p4.a": "Un même rapport technique adapté à la haute direction, aux lecteurs du web et aux publics des réseaux sociaux grâce à un travail de rédaction et de narration visuelle.",
    "p4.sk": "Adaptation aux publics · Rédaction et édition · Narration par les données",
    "p4.lnk": "Voir l’étude de cas →",
    "ddcn.new": "Nouveau",
    "ddcn.type": "Synthèse pour la communication",
    "ddcn.t": "Across DDCN",
    "ddcn.k": "Étude de cas indépendante · sept. 2026",
    "ddcn.sig": "domaines d’activité → messages destinés au public",
    "ddcn.a": "Une synthèse de six domaines techniques de la FAO en trois messages destinés aux responsables de l’élaboration des politiques, aux partenaires et aux médias.",
    "ddcn.sk": "Synthèse technique · Formulation des messages · Jugement éditorial",
    "ddcn.lnk": "Voir l’étude de cas →",
    "wg2.label": "Travaux institutionnels sélectionnés",
    "wg2.meta": "Réalisés dans le cadre de mes fonctions à l’UNESCO",
    "p5.type": "Stratégie de communication",
    "p5.t": "Stratégie de communication de la Convention",
    "p5.k": "Stratégie institutionnelle · 2025",
    "p5.a": "J’ai élaboré la première stratégie spécifiquement consacrée à la communication de la Convention, en déclinant les objectifs institutionnels en publics, priorités des messages, livrables et indicateurs clés de performance (KPI).",
    "p5.sk": "Définition des publics · Planification des contenus · KPI",
    "p2.type": "Narration interactive",
    "p2.t": "Le parcours de la Convention contre le dopage",
    "p2.k": "Expérience numérique de la COP10 · 2025",
    "p2.a": "J’ai assuré le rôle de point focal de l’UNESCO pour l’architecture des contenus, la rédaction et la coordination d’une plateforme interactive présentant à un public international vingt ans de jalons de la Convention.",
    "p2.sk": "Architecture de contenu · Coordination internationale · Narration numérique",
    "p2.lnk": "Ouvrir le panneau interactif →",
    "more.label": "Autres travaux de communication",
    "sec.policy": "Politiques et PEID",
    "pol1.t": "Suivi de la mise en œuvre et échanges avec les États membres",
    "pol1.a": "J’appuie le suivi de la Convention et les échanges de suivi avec les États membres : examen des rapports nationaux, repérage des lacunes dans la mise en œuvre, suivi des progrès et préparation de prochaines étapes adaptées.",
    "pol1.c1": "États membres",
    "pol1.c2": "Éléments probants par pays",
    "pol1.c3": "Suivi",
    "pol2.t": "Appui aux PEID et coopération régionale",
    "pol2.a": "J’appuie le suivi rapproché et les échanges avec neuf PEID du Pacifique, des Caraïbes et de la région AIS, ainsi que la coopération régionale et le renforcement des capacités, notamment dans le cadre du programme pour les PEID du Pacifique.",
    "pol2.c1": "PEID",
    "pol2.c3": "Coopération régionale",
    "pol2.c4": "Renforcement des capacités",
    "pol3.t": "Pharmacopée traditionnelle et valeurs du sport",
    "pol3.a": "J’appuie la coordination d’une initiative mondiale à l’interface entre science et politiques publiques, réunissant universitaires, experts et coordonnateurs régionaux, notamment en intégrant les contributions des experts dans des supports de communication.",
    "pol3.c1": "Science et politiques publiques",
    "pol3.c3": "Coordination avec les experts",
    "pol3.c4": "Échange de connaissances",
    "sec.exp": "Expérience",
    "exp.h2": "Une sélection de mes expériences",
    "cr.title": "Assistante de projet · UNESCO",
    "cr.when": "Paris · janv. 2025 – aujourd’hui",
    "cr.summary": "Suivi des États membres · communication institutionnelle · coordination entre science et politiques publiques · communication auprès de publics internationaux",
    "fold.exptitle": "Toutes mes expériences",
    "fold.hint": "Cliquez pour déplier",
    "fold.title": "Missions choisies, 2024–2026",
    "fold.note": "Survolez un repère sur <a class=\"jump\" href=\"#map-plate\">la carte en haut de la page</a> pour mettre en évidence la note correspondante ci-dessous, et inversement.",
    "sec.bg": "Parcours",
    "bg.h2": "Formation et apprentissage",
    "bg.bubble": "De formation scientifique · Chercheuse en sciences sociales · Curieuse d’apprendre tout au long de la vie",
    "bg.edu": "Formation",
    "bg.d1": "Master en linguistique",
    "bg.m1": "Université des langues étrangères de Pékin · 2019–2022",
    "bg.s1": "Analyse du discours · Stylistique · Politique internationale · Méthodes de recherche · Acquisition des langues secondes",
    "bg.d2": "Bachelor en sciences biologiques (BSc)",
    "bg.m2": "Université de Ludong · 2014–2018",
    "bg.s2": "Écologie · Biodiversité · Biostatistique · Botanique · Zoologie · Informatique appliquée à la biologie",
    "bg.train": "Formations et certifications sélectionnées",
    "bg.t1": "Académie numérique de la FAO (2026) — Communication pour le développement rural · Sécurité alimentaire et moyens d’existence · Biodiversité et systèmes agroalimentaires · Agriculture dans les accords commerciaux régionaux",
    "bg.t2": "Google Analytics · Microsoft Power Platform Fundamentals (PL-900) · IELTS Academic : 8,0 · Qualification pour l’enseignement secondaire supérieur",
    "bg.awards": "Distinctions",
    "bg.a1": "Bourse nationale (parmi les 2 % les mieux classés) · Bourse de niveau spécial · Distinction d’étudiante méritante (×2)",
    "bg.a2": "Prix du mémoire remarquable · Concours national universitaire de débat en anglais — Premier prix",
    "bg.pub": "Recherche et publications sélectionnées",
    "bg.p1": "La construction du discours international de la Chine sur la « réduction de la pauvreté » (2021) · Conscience phonologique et acquisition de l’anglais chez les enfants (2020)",
    "bg.pthl": "Mémoire de master :",
    "bg.p2": "Rétroaction corrective écrite et connaissances explicites/implicites (2022)",
    "lg1": "Chinois — langue maternelle",
    "lg2": "Anglais — IELTS 8,0",
    "lg3": "Espagnol — B2",
    "lg4": "Français — B1",
    "c.label": "06 — Contact",
    "c.h2": "Faisons connaissance 👋",
    "c.p1": "Je suis toujours ravie d’échanger autour de la communication, de la coopération internationale et des idées derrière ce travail. 🌍",
    "f.left": "Mon petit coin d’internet, qui continue de prendre forme.",
    "p1.count": "8 PEID"
  },
  "zh": {
    "nav.about": "关于我",
    "nav.project": "精选作品",
    "nav.policy": "政策与 SIDS",
    "nav.exp": "经历",
    "nav.bg": "教育背景",
    "mast.tiny": "巴黎 · 联合国教科文组织",
    "mast.hi": "你好，我是",
    "mast.pill1": "机构传播",
    "mast.pill2": "多边项目",
    "mast.line": "这是我在互联网上的一方小天地，分享我的部分作品、工作带我走过的地方，以及一路创作的故事。",
    "map.label": "工作带我走过的地方",
    "map.tour": "▶ 自动浏览",
    "map.fmis": "出差",
    "map.fsids": "获得支持的小岛屿发展中国家",
    "map.sub": "精选出差记录（2024–2026），涵盖传播与政策对话；同时展示本两年期通过监测工作获得支持的小岛屿发展中国家。",
    "read.label": "详情",
    "read.hint": "将鼠标移到地图标记上、启动自动浏览，或向下滚动查看出差记录。",
    "tool.label": "精选工具",
    "sec.about": "关于我",
    "about.h2": "我将技术信息转化为清晰、实用的传播内容。",
    "about.p1": "在巴黎联合国教科文组织，我的工作涵盖会员国履约监测，以及一项有关传统药典的全球倡议。我喜欢寻找合适的切入角度、打磨信息，并根据受众调整表达：从面向高层管理人员的简报和网页内容，到面向会员国及国际受众的视觉材料与数字产品。",
    "sec.project": "精选作品",
    "wg1.label": "独立案例研究",
    "wg1.meta": "自主发起 · 基于公开资料",
    "p1.type": "数据叙事",
    "p1.t": "SIDSight",
    "p1.k": "独立案例研究 · 2026年8月",
    "p1.sig": "证据 → 背景 → 叙事",
    "p1.a": "一个交互式农食数据故事，结合公开指标、区域比较与国别背景，呈现八个小岛屿发展中国家的情况。",
    "p1.sk": "数据叙事 · 政策分析 · Power BI · GIS",
    "p1.lnk": "探索 SIDSight →",
    "p1.lnk2": "滚动查看地图 →",
    "p4.type": "面向不同受众的改写",
    "p4.t": "Beyond the Record",
    "p4.k": "独立案例研究 · 2026年9月",
    "p4.sig": "报告 → 受众",
    "p4.a": "通过编辑写作与视觉叙事，将同一份技术报告改写为分别面向高层管理人员、网页读者和社交媒体受众的内容。",
    "p4.sk": "受众适配 · 编辑写作 · 数据叙事",
    "p4.lnk": "查看案例研究 →",
    "ddcn.new": "新增",
    "ddcn.type": "传播内容综合提炼",
    "ddcn.t": "Across DDCN",
    "ddcn.k": "独立案例研究 · 2026年9月",
    "ddcn.sig": "业务领域 → 面向公众的信息",
    "ddcn.a": "将粮农组织六个技术业务领域的内容提炼为三条面向政策制定者、合作伙伴和媒体的公众传播信息。",
    "ddcn.sk": "技术内容综合提炼 · 信息提炼 · 编辑判断",
    "ddcn.lnk": "查看案例研究 →",
    "wg2.label": "精选机构工作成果",
    "wg2.meta": "在教科文组织任职期间完成",
    "p5.type": "传播战略",
    "p5.t": "公约传播战略",
    "p5.k": "机构战略 · 2025",
    "p5.a": "制定公约首份专门的传播战略，将机构目标落实为受众定位、信息优先次序、交付成果与关键绩效指标（KPI）。",
    "p5.sk": "受众规划 · 内容规划 · KPI",
    "p2.type": "互动叙事",
    "p2.t": "反兴奋剂公约的历程",
    "p2.k": "COP10 数字体验 · 2025",
    "p2.a": "担任教科文组织联络人，负责一个互动平台的内容架构、撰写与协调，向国际受众呈现公约二十年来的重要节点。",
    "p2.sk": "内容架构 · 国际协调 · 数字叙事",
    "p2.lnk": "打开互动展板 →",
    "more.label": "更多传播工作",
    "sec.policy": "政策与小岛屿发展中国家",
    "pol1.t": "监测与会员国跟进",
    "pol1.a": "支持公约的监测及会员国跟进工作，审阅国家报告、识别实施差距、跟踪进展，并提出有针对性的后续行动。",
    "pol1.c1": "会员国",
    "pol1.c2": "国别证据",
    "pol1.c3": "跟进",
    "pol2.t": "小岛屿发展中国家支持与区域合作",
    "pol2.a": "支持对太平洋、加勒比及 AIS 区域九个小岛屿发展中国家的密切监测与跟进，同时参与区域合作和能力建设，包括太平洋小岛屿发展中国家项目。",
    "pol2.c1": "小岛屿发展中国家",
    "pol2.c3": "区域合作",
    "pol2.c4": "能力建设",
    "pol3.t": "传统药典与体育价值观",
    "pol3.a": "支持协调一项衔接科学与政策的全球倡议，汇聚学者、专家和区域协调员，并将专家意见整合为传播材料。",
    "pol3.c1": "科学与政策衔接",
    "pol3.c3": "专家协调",
    "pol3.c4": "知识交流",
    "sec.exp": "经历",
    "exp.h2": "精选工作经历",
    "cr.title": "项目助理 · 联合国教科文组织",
    "cr.when": "巴黎 · 2025年1月至今",
    "cr.summary": "会员国监测 · 机构传播 · 科学与政策衔接协调 · 国际外联",
    "fold.exptitle": "全部工作经历",
    "fold.hint": "点击展开",
    "fold.title": "精选出差记录，2024–2026",
    "fold.note": "将鼠标移到<a class=\"jump\" href=\"#map-plate\">页面顶部地图</a>的标记上，下方对应记录就会高亮显示；将鼠标移到记录上，也会突出显示对应地图位置。",
    "sec.bg": "教育背景",
    "bg.h2": "教育与学习",
    "bg.bubble": "理科背景 · 社会科学研究者 · 保持好奇，终身学习",
    "bg.edu": "教育经历",
    "bg.d1": "语言学文学硕士",
    "bg.m1": "北京外国语大学 · 2019–2022",
    "bg.s1": "话语分析 · 文体学 · 国际政治 · 研究方法 · 二语习得",
    "bg.d2": "生物科学理学学士",
    "bg.m2": "鲁东大学 · 2014–2018",
    "bg.s2": "生态学 · 生物多样性 · 生物统计学 · 植物学 · 动物学 · 信息技术在生物学中的应用",
    "bg.train": "部分学习经历与资格证书",
    "bg.t1": "粮农组织在线学习学院（2026）— 农村发展传播 · 粮食安全与生计 · 生物多样性与农食系统 · 区域贸易协定中的农业",
    "bg.t2": "Google Analytics · Microsoft Power Platform 基础知识（PL-900）· 雅思学术类总分 8.0 · 高级中学教师资格",
    "bg.awards": "奖项",
    "bg.a1": "国家奖学金（前 2%）· 特等奖学金 · 优秀学生荣誉（两次）",
    "bg.a2": "优秀论文奖 · 全国大学生英语辩论赛一等奖",
    "bg.pub": "精选研究与出版成果",
    "bg.p1": "中国“扶贫”国际话语的建构（2021）· 语音意识与儿童英语习得（2020）",
    "bg.pthl": "硕士论文：",
    "bg.p2": "书面纠正性反馈与显性／隐性知识（2022）",
    "lg1": "中文 — 母语",
    "lg2": "英语 — 雅思 8.0",
    "lg3": "西班牙语 — B2",
    "lg4": "法语 — B1",
    "c.label": "06 — 联系",
    "c.h2": "打个招呼 👋",
    "c.p1": "欢迎就传播、国际合作，以及这些工作背后的想法找我聊聊。🌍",
    "f.left": "我在互联网上的小天地，仍在逐步完善。",
    "p1.count": "8 个 SIDS"
  }
};

/* 经历 · 三种译文 */
const EXP_T={
  "es": [
    {
      "role": "Asistente de proyecto",
      "org": "UNESCO, Sector de Ciencias",
      "when": "ene. 2025 – actualidad",
      "where": "París",
      "tags": [
        "Notas para la alta dirección",
        "Visualización de datos",
        "Seguimiento del cumplimiento",
        "PEID y PMA",
        "Desarrollo de capacidades"
      ],
      "points": [
        "Soy el punto focal de la Sección para las notas informativas dirigidas a la alta dirección. Redacto mensajes clave, puntos de intervención y materiales de difusión, y desarrollo visualizaciones de datos y paneles que convierten la información técnica y de monitoreo en recursos accesibles.",
        "Gestiono el seguimiento del cumplimiento a través del sistema ADLogic de la Convención, revisando informes nacionales y coordinando el seguimiento con los Estados Partes, ministerios y Misiones Permanentes, con especial atención a los PEID y los PMA.",
        "Apoyé el primer Programa Regional de Desarrollo de Capacidades para los PEID del Pacífico en Brisbane, contribuyendo a la ejecución del programa, a los materiales de formación y a la coordinación con las partes interesadas de 13 PEID del Pacífico.",
        "Coordino la participación de más de 50 expertos internacionales y coordinadores regionales en la iniciativa de la UNESCO sobre Farmacopea Tradicional, contribuyendo a un repositorio internacional de conocimiento para el intercambio de investigación."
      ]
    },
    {
      "role": "Consultora",
      "org": "UNESCO, Sector de Ciencias",
      "when": "jun. – dic. 2024",
      "where": "París",
      "tags": [
        "Comunicación sobre políticas públicas",
        "PEID y PMA",
        "Movilización de recursos",
        "Coordinación con partes interesadas de todo el mundo"
      ],
      "points": [
        "Elaboré notas conceptuales, notas informativas, puntos de intervención, contenido web y materiales visuales para apoyar el diálogo sobre políticas, la visibilidad del programa y la colaboración con las contrapartes nacionales.",
        "Analicé los avances de los Estados Partes en la aplicación de la Convención y convertí las carencias detectadas en sus informes en apoyo adaptado a cada caso, con especial atención a los PEID y los PMA, incluidas oportunidades de financiación a través del Fondo para la Eliminación del Dopaje en el Deporte.",
        "Apoyé la iniciativa mundial de la UNESCO sobre Farmacopea Tradicional y Valores del Deporte, coordinando expertos, coordinadores regionales y actores nacionales en reuniones del grupo de trabajo."
      ]
    },
    {
      "role": "Becaria en prácticas con financiación",
      "org": "UNESCO, Sector de Ciencias",
      "when": "jun. 2023 – jun. 2024",
      "where": "París",
      "tags": [
        "Comunicación estratégica",
        "Investigación de políticas",
        "Tecnologías emergentes",
        "Enlace con las partes interesadas"
      ],
      "points": [
        "Redacté productos de conocimiento, notas informativas, puntos de intervención y contenido web, y elaboré materiales visuales para la comunicación y la difusión.",
        "Apoyé la preparación y realización de la COP9, incluida la coordinación y la comunicación de la reunión intergubernamental.",
        "Investigué cuestiones emergentes de gobernanza, incluidas la neurotecnología, la inteligencia artificial y la integridad en el deporte, contribuyendo a notas conceptuales y documentos de reunión."
      ]
    },
    {
      "role": "Responsable de programas y comunicación",
      "org": "Lufy Education",
      "when": "abr. 2019 – jun. 2023",
      "where": "Remoto",
      "tags": [
        "Diseño de programas",
        "Currículo y evaluación",
        "Estrategia en redes sociales",
        "Analítica de aprendizaje"
      ],
      "points": [
        "Dirigí la comunicación y la difusión en tres grandes plataformas sociales —cuenta oficial de WeChat, Weibo y RedNote—, creando contenido digital y herramientas de promoción para ampliar la comunidad de estudiantes y fomentar su participación.",
        "Cofundé y gestioné un programa en línea de preparación de exámenes, diseñando el currículo, los materiales docentes y los métodos de evaluación.",
        "Utilicé la retroalimentación de los estudiantes, estudios de mercado y datos de desempeño para mejorar continuamente el curso y la estrategia de difusión, con más del 60 % de los participantes accediendo a sus programas objetivo."
      ]
    },
    {
      "role": "Secretaria de dirección",
      "org": "Mercedes-Benz AG",
      "when": "ago. 2022 – abr. 2023",
      "where": "Pekín",
      "tags": [
        "Estudios de mercado",
        "Visualización de datos",
        "Seguimiento de operaciones",
        "Coordinación con las partes interesadas"
      ],
      "points": [
        "Realicé estudios de mercado y análisis de datos, elaborando visualizaciones, informes y presentaciones para la toma de decisiones a nivel de dirección.",
        "Coordiné equipos internos y proveedores externos, hice seguimiento de las operaciones en los almacenes de Mercedes-Benz en China y dirigí la realización de un concurso nacional de competencias."
      ]
    },
    {
      "role": "Gestora de producto (prácticas)",
      "org": "JD.com",
      "when": "ene. – may. 2022",
      "where": "Pekín",
      "tags": [
        "Coordinación técnica",
        "Comunicación entre equipos",
        "Diseño de soluciones",
        "Gestión de partes interesadas"
      ],
      "points": [
        "Apoyé el análisis de requisitos y el diseño de soluciones técnicas para una plataforma internacional.",
        "Coordiné la implementación entre equipos internos y proveedores externos y mantuve los seguimientos y materiales de orientación del proyecto."
      ]
    },
    {
      "role": "Intérprete chino–inglés (a tiempo parcial)",
      "org": "Embajada de la República Eslovaca en China",
      "when": "sept. 2022",
      "where": "Pekín",
      "tags": [
        "Interpretación",
        "Comunicación diplomática",
        "Enlace bilateral"
      ],
      "points": [
        "Interpretación consecutiva en una reunión bilateral en una misión diplomática."
      ]
    }
  ],
  "fr": [
    {
      "role": "Assistante de projet",
      "org": "UNESCO, Secteur des sciences",
      "when": "janv. 2025 – aujourd’hui",
      "where": "Paris",
      "tags": [
        "Notes pour la haute direction",
        "Visualisation de données",
        "Suivi du respect des obligations",
        "PEID et PMA",
        "Renforcement des capacités"
      ],
      "points": [
        "Je suis le point focal de la Section pour les notes d’information destinées à la haute direction. Je rédige des messages clés, des éléments de langage et des supports de communication, et je conçois des visualisations de données et des tableaux de bord qui rendent les informations techniques et de suivi accessibles.",
        "Je gère le suivi du respect des obligations au moyen du système ADLogic de la Convention, en examinant les rapports nationaux et en coordonnant le suivi avec les États parties, les ministères et les missions permanentes, en particulier dans les PEID et les PMA.",
        "J’ai appuyé le premier programme régional de renforcement des capacités pour les PEID du Pacifique à Brisbane, en contribuant à la mise en œuvre du programme, aux supports de formation et à la coordination avec les parties prenantes de 13 PEID du Pacifique.",
        "Je coordonne les échanges avec plus de 50 experts internationaux et coordonnateurs régionaux dans le cadre de l’initiative de l’UNESCO sur la pharmacopée traditionnelle, et je contribue à une base internationale de connaissances destinée au partage des travaux de recherche."
      ]
    },
    {
      "role": "Consultante",
      "org": "UNESCO, Secteur des sciences",
      "when": "juin – déc. 2024",
      "where": "Paris",
      "tags": [
        "Communication sur les politiques publiques",
        "PEID et PMA",
        "Mobilisation de ressources",
        "Coordination de parties prenantes à l’échelle mondiale"
      ],
      "points": [
        "J’ai rédigé des notes conceptuelles, des notes d’information, des éléments de langage, des contenus web et des supports visuels pour appuyer le dialogue sur les politiques, la visibilité du programme et les échanges avec les homologues nationaux.",
        "J’ai analysé les progrès des États parties dans la mise en œuvre de la Convention et proposé un appui adapté aux lacunes de leurs rapports, avec une attention particulière aux PEID et aux PMA, notamment aux possibilités de financement par le Fonds pour l’élimination du dopage dans le sport.",
        "J’ai appuyé l’initiative mondiale de l’UNESCO sur la pharmacopée traditionnelle et les valeurs du sport, en coordonnant experts, coordonnateurs régionaux et acteurs nationaux lors des réunions du groupe de travail."
      ]
    },
    {
      "role": "Stagiaire bénéficiant d’un financement",
      "org": "UNESCO, Secteur des sciences",
      "when": "juin 2023 – juin 2024",
      "where": "Paris",
      "tags": [
        "Communication stratégique",
        "Recherche sur les politiques",
        "Technologies émergentes",
        "Liaison avec les parties prenantes"
      ],
      "points": [
        "J’ai rédigé des produits de connaissance, des notes d’information, des éléments de langage et des contenus web, et conçu des supports visuels pour la communication et la sensibilisation.",
        "J’ai appuyé la préparation et la tenue de la COP9, notamment la coordination et la communication de cette réunion intergouvernementale.",
        "J’ai étudié des enjeux émergents de gouvernance — neurotechnologies, intelligence artificielle et intégrité dans le sport — en contribuant à des notes conceptuelles et à des documents de réunion."
      ]
    },
    {
      "role": "Responsable de programmes et de communication",
      "org": "Lufy Education",
      "when": "avr. 2019 – juin 2023",
      "where": "À distance",
      "tags": [
        "Conception de programmes",
        "Contenus pédagogiques et évaluation",
        "Stratégie sur les réseaux sociaux",
        "Analyse des apprentissages"
      ],
      "points": [
        "J’ai piloté la communication et les actions de diffusion sur trois grandes plateformes sociales — compte officiel WeChat, Weibo et RedNote —, en créant des contenus numériques et des outils de promotion pour élargir la communauté d’apprenants et encourager sa participation.",
        "J’ai cofondé et dirigé un programme en ligne de préparation aux examens, en concevant le programme, les supports pédagogiques et les méthodes d’évaluation.",
        "J’ai utilisé les retours des apprenants, des études de marché et les données de performance pour affiner en continu le cours et la stratégie de diffusion : plus de 60 % des participants ont intégré le programme visé."
      ]
    },
    {
      "role": "Secrétaire de direction",
      "org": "Mercedes-Benz AG",
      "when": "août 2022 – avr. 2023",
      "where": "Pékin",
      "tags": [
        "Études de marché",
        "Visualisation de données",
        "Suivi des opérations",
        "Coordination avec les parties prenantes"
      ],
      "points": [
        "J’ai mené des études de marché et des analyses de données, en produisant visualisations, rapports et présentations pour la prise de décision au niveau de la direction.",
        "J’ai coordonné équipes internes et prestataires externes, suivi les opérations des entrepôts Mercedes-Benz en Chine et piloté l’organisation d’un concours national de compétences."
      ]
    },
    {
      "role": "Cheffe de produit (stage)",
      "org": "JD.com",
      "when": "janv. – mai 2022",
      "where": "Pékin",
      "tags": [
        "Coordination technique",
        "Communication inter-équipes",
        "Conception de solutions",
        "Gestion des parties prenantes"
      ],
      "points": [
        "J’ai appuyé l’analyse des besoins et la conception de solutions techniques pour une plateforme internationale.",
        "J’ai coordonné la mise en œuvre entre équipes internes et prestataires externes et tenu à jour les outils de suivi et les guides du projet."
      ]
    },
    {
      "role": "Interprète chinois–anglais (à temps partiel)",
      "org": "Ambassade de la République slovaque en Chine",
      "when": "sept. 2022",
      "where": "Pékin",
      "tags": [
        "Interprétation",
        "Communication diplomatique",
        "Liaison bilatérale"
      ],
      "points": [
        "Interprétation consécutive lors d’une réunion bilatérale au sein d’une mission diplomatique."
      ]
    }
  ],
  "zh": [
    {
      "role": "项目助理",
      "org": "联合国教科文组织 科学部门",
      "when": "2025年1月 – 至今",
      "where": "巴黎",
      "tags": [
        "高层简报",
        "数据可视化",
        "履约监测",
        "小岛屿发展中国家与最不发达国家",
        "能力建设"
      ],
      "points": [
        "担任本处高层管理人员简报工作的联络人，撰写核心信息、发言要点与外联材料，并制作数据可视化内容和数据看板，将技术与监测信息转化为易于理解和使用的资源。",
        "通过公约的 ADLogic 系统管理履约监测，审阅各国国家报告，并与缔约国、各国部委和常驻代表团协调后续跟进，其中对小岛屿发展中国家和最不发达国家给予特别关注。",
        "支持公约首个面向太平洋小岛屿发展中国家的区域能力建设项目在布里斯班开展，协助项目实施、培训资源准备，以及与十三个太平洋小岛屿发展中国家相关方的联络。",
        "在教科文组织传统药典倡议下，协调 50 余位国际专家和区域协调员的参与，助力建设促进研究交流的国际知识库。"
      ]
    },
    {
      "role": "顾问",
      "org": "联合国教科文组织 科学部门",
      "when": "2024年6–12月",
      "where": "巴黎",
      "tags": [
        "政策传播",
        "小岛屿发展中国家与最不发达国家",
        "资源筹措",
        "全球利益相关方协调"
      ],
      "points": [
        "撰写概念说明、简报、发言要点、网页内容和视觉材料，支持政策对话、项目传播及与各国对口单位的交流。",
        "分析缔约国的实施进展，根据报告材料中的缺口提供有针对性的支持，重点关注小岛屿发展中国家与最不发达国家，包括通过反兴奋剂基金获得资助的机会。",
        "支持教科文组织关于传统药典与体育价值观的全球倡议，在工作组会议中协调专家、区域协调员与各国利益相关方。"
      ]
    },
    {
      "role": "实习生（资助项目）",
      "org": "联合国教科文组织 科学部门",
      "when": "2023年6月 – 2024年6月",
      "where": "巴黎",
      "tags": [
        "战略传播",
        "政策研究",
        "新兴技术",
        "利益相关方联络"
      ],
      "points": [
        "起草知识产品、简报、发言要点和网页内容，并制作用于传播与推广的视觉材料。",
        "支持第九届缔约国大会（COP9）的筹备与举办，包括这场政府间会议的协调与传播工作。",
        "研究新兴治理议题，包括神经技术、人工智能与体育诚信，并参与撰写概念说明和会议文件。"
      ]
    },
    {
      "role": "项目与传播专员",
      "org": "鹿飞考研英语",
      "when": "2019年4月 – 2023年6月",
      "where": "远程",
      "tags": [
        "项目设计",
        "课程与测评",
        "社交媒体策略",
        "学习数据分析"
      ],
      "points": [
        "主导三大社交平台（微信公众号、微博、小红书）的传播与推广，开发数字内容与推广工具，扩大并维系学习者社群。",
        "联合创办并运营一个线上考试备考项目，负责课程体系、教学材料与测评方法的设计。",
        "依据学员反馈、市场调研和学习表现数据，持续优化课程与推广策略，超过 60% 的学员进入目标学习项目。"
      ]
    },
    {
      "role": "总监秘书",
      "org": "Mercedes-Benz AG（梅赛德斯-奔驰）",
      "when": "2022年8月 – 2023年4月",
      "where": "北京",
      "tags": [
        "市场调研",
        "数据可视化",
        "运营监测",
        "利益相关方协调"
      ],
      "points": [
        "开展市场调研与数据分析，制作可视化图表、报告与演示材料，支持总监层面的决策。",
        "协调内部团队与外部供应商，监测奔驰在中国各地仓库的运营情况，并主导一项全国性技能竞赛的落地。"
      ]
    },
    {
      "role": "产品经理（实习）",
      "org": "京东",
      "when": "2022年1–5月",
      "where": "北京",
      "tags": [
        "技术协调",
        "跨团队沟通",
        "方案设计",
        "利益相关方管理"
      ],
      "points": [
        "参与国际平台的需求分析与技术方案设计。",
        "协调内部团队与外部供应商推进实施，并维护项目进度表与操作指引。"
      ]
    },
    {
      "role": "中英交替传译（兼职）",
      "org": "斯洛伐克共和国驻华大使馆",
      "when": "2022年9月",
      "where": "北京",
      "tags": [
        "口译",
        "外交沟通",
        "双边联络"
      ],
      "points": [
        "为一场在外交使团举行的双边会议提供交替传译。"
      ]
    }
  ]
};

/* 出差 · 三种译文 */
const MIS_T={
  "es": {
    "paris": {
      "when": "2023 – actualidad",
      "event": "COP10 · Comunicación intergubernamental",
      "body": "<strong>Notas para la alta dirección · narrativa digital · comunicación de eventos.</strong> Con base en la sede de la UNESCO, donde se desarrolla el trabajo diario de comunicación y monitoreo, incluida la estrategia de comunicación de la Convención. <a href=\"#strategy-card\">Ver trabajo relacionado →</a>",
      "city": "París",
      "country": "Francia"
    },
    "budapest": {
      "when": "mayo de 2026",
      "event": "Taller de investigación multiactor (TALE)",
      "body": "<strong>Aportaciones sobre políticas y gobernanza para la protección de los deportistas.</strong> Representé a la UNESCO en un taller que reunió a investigadores y partes interesadas en la integridad en el deporte, aportando una perspectiva de gobernanza a los debates sobre nuevas investigaciones en materia de protección de deportistas e integridad en el deporte.",
      "city": "Budapest",
      "country": "Hungría"
    },
    "antalya": {
      "when": "febrero de 2025",
      "event": "Mesa de la COP9 y Comité de Aprobación del Fondo",
      "body": "<strong>Revisión de gobernanza y preparación de la COP10.</strong> Dos reuniones estatutarias consecutivas, en las que revisamos nueve solicitudes de proyecto, incluidas propuestas de PEID y PMA, y discutimos prioridades y preparativos hacia la COP10.",
      "city": "Antalya",
      "country": "Türkiye"
    },
    "riyadh": {
      "when": "diciembre de 2024",
      "event": "Reuniones estatutarias y consulta de la Mesa de la COP9",
      "body": "<strong>Coordinación con actores clave y diálogo de gobernanza.</strong> Apoyé intercambios de alto nivel entre la UNESCO, gobiernos y organizaciones asociadas, incluidas consultas sobre las prioridades de la Convención y sobre cómo involucrar a los Estados Miembros y a otros actores en las discusiones de gobernanza y reforma.",
      "city": "Riad",
      "country": "Arabia Saudita"
    },
    "olympia": {
      "when": "noviembre de 2024",
      "event": "Asamblea General de una federación internacional",
      "body": "<strong>Alianza exploratoria y mapeo de gobernanza.</strong> Trabajo exploratorio de alianzas en torno a las carreras de camellos y la integridad en el deporte: identificación de brechas de gobernanza entre federaciones regionales, discusión sobre dónde podría aportar la experiencia de la UNESCO y exploración de una vía hacia orientación específica y cooperación a más largo plazo.",
      "city": "Olimpia",
      "country": "Grecia"
    },
    "cannes": {
      "when": "febrero de 2024",
      "event": "Simposio de investigación y Conferencia Mundial de Educación",
      "body": "<strong>Comunicación y difusión.</strong> En el marco de las conversaciones de la AMA sobre investigación y educación, mi colega Camila y yo intercambiamos con representantes de la organización regional del Caribe (RADO) y de Nueva Zelanda sobre las necesidades de desarrollo de capacidades en los PEID, el seguimiento del cumplimiento y las oportunidades de apoyo a través del Fondo para la Eliminación del Dopaje en el Deporte.",
      "city": "Cannes y Niza",
      "country": "Francia"
    }
  },
  "fr": {
    "paris": {
      "when": "2023 – aujourd’hui",
      "event": "COP10 · Communication intergouvernementale",
      "body": "<strong>Notes pour la haute direction · récit numérique · communication événementielle.</strong> Basée au siège de l’UNESCO, où se rejoignent le travail quotidien de communication et de suivi, y compris la Stratégie de communication de la Convention. <a href=\"#strategy-card\">Voir le travail associé →</a>",
      "city": "Paris",
      "country": "France"
    },
    "budapest": {
      "when": "mai 2026",
      "event": "Atelier de recherche multi-acteurs (TALE)",
      "body": "<strong>Apport en matière de politiques publiques et de gouvernance pour la protection des athlètes.</strong> J’ai représenté l’UNESCO lors d’un atelier réunissant chercheurs et parties prenantes de l’intégrité dans le sport, en apportant une perspective de gouvernance aux discussions sur les nouvelles recherches concernant la protection des athlètes et l’intégrité dans le sport.",
      "city": "Budapest",
      "country": "Hongrie"
    },
    "antalya": {
      "when": "février 2025",
      "event": "Bureau de la COP9 et Comité d’approbation du Fonds",
      "body": "<strong>Examen de gouvernance et préparation de la COP10.</strong> Deux réunions statutaires consécutives, au cours desquelles nous avons examiné neuf demandes de projet, dont des propositions de PEID et de PMA, et discuté des priorités et des préparatifs en vue de la COP10.",
      "city": "Antalya",
      "country": "Türkiye"
    },
    "riyadh": {
      "when": "décembre 2024",
      "event": "Réunions statutaires et consultation du Bureau de la COP9",
      "body": "<strong>Coordination des parties prenantes et dialogue de gouvernance.</strong> J’ai appuyé des échanges de haut niveau entre l’UNESCO, des gouvernements et des organisations partenaires, y compris des consultations sur les priorités de la Convention et sur la manière d’associer les États membres et d’autres acteurs aux discussions sur la gouvernance et la réforme.",
      "city": "Riyad",
      "country": "Arabie saoudite"
    },
    "olympia": {
      "when": "novembre 2024",
      "event": "Assemblée générale d’une fédération internationale",
      "body": "<strong>Partenariat exploratoire et cartographie de gouvernance.</strong> Travail exploratoire de partenariat autour des courses de chameaux et de l’intégrité dans le sport : identification des lacunes de gouvernance entre fédérations régionales, discussion sur l’apport possible de l’expertise de l’UNESCO et exploration d’une voie vers des orientations adaptées et une coopération à plus long terme.",
      "city": "Olympie",
      "country": "Grèce"
    },
    "cannes": {
      "when": "février 2024",
      "event": "Symposium de recherche et Conférence mondiale sur l’éducation",
      "body": "<strong>Communication et sensibilisation.</strong> En marge des échanges de l’AMA sur la recherche et l’éducation, ma collègue Camila et moi avons discuté avec des homologues de l’organisation régionale des Caraïbes (RADO) et de Nouvelle-Zélande des besoins de renforcement des capacités dans les PEID, du suivi du respect des obligations et des possibilités d’appui par le Fonds pour l’élimination du dopage dans le sport.",
      "city": "Cannes et Nice",
      "country": "France"
    }
  },
  "zh": {
    "paris": {
      "when": "2023年至今",
      "event": "COP10 · 政府间传播",
      "body": "<strong>高层简报 · 数字叙事 · 活动传播。</strong>常驻教科文组织总部，日常传播与监测工作在这里交汇，其中包括公约传播战略。<a href=\"#strategy-card\">查看相关工作 →</a>",
      "city": "巴黎",
      "country": "法国"
    },
    "budapest": {
      "when": "2026年5月",
      "event": "多方参与研究工作坊（TALE）",
      "body": "<strong>就运动员保护议题提供政策与治理意见。</strong>代表教科文组织参加一场汇集研究人员与体育诚信领域各方的多方工作坊，就运动员保护与体育诚信方面的新兴研究，提供政策与治理层面的视角。",
      "city": "布达佩斯",
      "country": "匈牙利"
    },
    "antalya": {
      "when": "2025年2月",
      "event": "COP9 主席团与基金审批委员会",
      "body": "<strong>治理审议与COP10筹备。</strong>连续两场法定会议，审议了九份项目申请（其中包括来自小岛屿发展中国家和最不发达国家的提案），并讨论了面向 COP10 的优先事项与筹备工作。",
      "city": "安塔利亚",
      "country": "土耳其"
    },
    "riyadh": {
      "when": "2024年12月",
      "event": "法定会议与 COP9 主席团磋商",
      "body": "<strong>利益相关方协调与治理对话。</strong>支持教科文组织、各国政府与伙伴机构之间的高级别交流，包括就公约优先事项、以及如何让会员国和其他相关方参与治理与改革讨论进行磋商。",
      "city": "利雅得",
      "country": "沙特阿拉伯"
    },
    "olympia": {
      "when": "2024年11月",
      "event": "某国际联合会大会",
      "body": "<strong>探索伙伴关系与梳理治理机制。</strong>围绕赛骆驼与体育诚信探索合作：识别各区域联合会的治理缺口，讨论教科文组织的专业知识可以在哪些方面发挥作用，并探索制定针对性指导及开展长期合作的可能路径。",
      "city": "奥林匹亚",
      "country": "希腊"
    },
    "cannes": {
      "when": "2024年2月",
      "event": "研究研讨会与全球教育大会",
      "body": "<strong>传播与外联。</strong>在世界反兴奋剂机构开展研究与教育交流期间，我和同事 Camila 与加勒比区域组织（RADO）及新西兰的对口人员进行了交流，讨论小岛屿发展中国家的能力建设需求、履约跟进，以及通过反兴奋剂基金获得支持的机会。",
      "city": "戛纳与尼斯",
      "country": "法国"
    }
  }
};

const COMMS_T={
  "es": [
    "Escritos",
    "Campañas y narrativa",
    "Visual",
    "Plataformas",
    "Vídeo y multimedia",
    "Redes sociales"
  ],
  "fr": [
    "Écrits",
    "Campagnes et récits",
    "Visuel",
    "Plateformes",
    "Vidéo et multimédia",
    "Réseaux sociaux"
  ],
  "zh": [
    "文字",
    "传播活动与叙事",
    "视觉",
    "平台",
    "视频与多媒体",
    "社交媒体"
  ]
};


/* 传播产出 · 逐条译文（顺序与 COMMS 一致）*/
const CITEMS_T={
  "es": [
    [
      "Notas conceptuales",
      "Notas informativas",
      "Puntos de intervención",
      "Contenido web",
      "Boletines",
      "Materiales de desarrollo de capacidades",
      "Recursos de conocimiento"
    ],
    [
      "Campaña de visibilidad del 20.º aniversario de la Convención (COP10)",
      "Recopilación, visualización y narrativa de datos de impacto",
      "Serie de entrevistas a las partes interesadas (concepto y edición)"
    ],
    [
      "Infografías",
      "Folletos y hojas informativas sobre el impacto",
      "Publicaciones digitales",
      "Carteles de eventos",
      "Fondos para eventos",
      "Logotipos",
      "Certificados",
      "Distintivos",
      "Presentaciones",
      "Cuestionarios en Mentimeter"
    ],
    [
      "Panel de narrativa interactiva para la COP10",
      "Paneles de visualización de datos",
      "Gestión de páginas web de la UNESCO (Drupal)",
      "Gestión de la plataforma de seguimiento ADLogic"
    ],
    [
      "Vídeo del aniversario de la Convención para la COP10 (concepto, guion y edición)",
      "Campaña de visibilidad del 20.º aniversario de la Convención (COP10)",
      "Tutoriales en vídeo multilingües",
      "Vídeos de momentos destacados de las COP (coedición)"
    ],
    [
      "Contenido institucional en redes sociales (LinkedIn, YouTube)",
      "Estrategia y contenido multiplataforma en WeChat, Weibo y RedNote"
    ]
  ],
  "fr": [
    [
      "Notes conceptuelles",
      "Notes d’information",
      "Éléments de langage",
      "Contenus web",
      "Lettres d’information",
      "Supports de renforcement des capacités",
      "Ressources de connaissance"
    ],
    [
      "Campagne de visibilité du 20e anniversaire de la Convention (COP10)",
      "Collecte, visualisation et mise en récit des données d’impact",
      "Série d’entretiens avec les parties prenantes (concept, montage)"
    ],
    [
      "Infographies",
      "Dépliants et feuilles d’information sur l’impact",
      "Publications numériques",
      "Affiches d’événements",
      "Fonds visuels d’événements",
      "Logos",
      "Certificats",
      "Badges",
      "Présentations",
      "Quiz Mentimeter"
    ],
    [
      "Panneau de narration interactive pour la COP10",
      "Tableaux de bord de visualisation de données",
      "Gestion des pages web de l’UNESCO (Drupal)",
      "Gestion de la plateforme de suivi ADLogic"
    ],
    [
      "Vidéo anniversaire de la Convention pour la COP10 (concept, scénario, montage)",
      "Campagne de visibilité du 20e anniversaire de la Convention (COP10)",
      "Tutoriels vidéo multilingues",
      "Vidéos des temps forts des COP (co-montage)"
    ],
    [
      "Contenus institutionnels sur les réseaux sociaux (LinkedIn, YouTube)",
      "Stratégie et contenus multiplateformes sur WeChat, Weibo et RedNote"
    ]
  ],
  "zh": [
    [
      "概念说明",
      "简报",
      "发言要点",
      "网页内容",
      "通讯简报",
      "能力建设材料",
      "知识资源"
    ],
    [
      "COP10 公约二十周年传播活动",
      "影响力数据的收集、可视化与叙事",
      "利益相关方访谈系列（策划、剪辑）"
    ],
    [
      "信息图",
      "项目成效宣传单与折页",
      "数字出版物",
      "活动海报",
      "活动背景板",
      "标识设计",
      "证书",
      "徽章",
      "演示文稿",
      "Mentimeter 互动问答"
    ],
    [
      "COP10 交互式叙事展板",
      "数据可视化仪表盘",
      "教科文组织网页维护（Drupal）",
      "ADLogic 监测平台管理"
    ],
    [
      "COP10 公约周年短片（构思、脚本、剪辑）",
      "COP10 公约二十周年传播活动",
      "多语种视频教程",
      "缔约国大会精彩集锦（联合剪辑）"
    ],
    [
      "官方社交媒体内容（LinkedIn、YouTube）",
      "微信、微博、小红书多平台策略与内容"
    ]
  ]
};

const READ_LABEL={
  "en": "Reading",
  "es": "Detalle",
  "fr": "Aperçu",
  "zh": "详情"
};
const READ_HINT={
  "en": "Explore the map by hovering over a marker, starting the tour, or scrolling down to the mission notes below.",
  "es": "Explora el mapa pasando el cursor sobre un marcador, iniciando el recorrido o bajando hasta las notas de las misiones.",
  "fr": "Explorez la carte en survolant un repère, en lançant la visite ou en faisant défiler la page jusqu’aux notes de mission.",
  "zh": "将鼠标移到地图标记上、启动自动浏览，或向下滚动查看出差记录。"
};
const SIDS_NOTE={
  "en": "One of the SIDS supported through the Convention during this biennium. Eight of these countries are also featured in the SIDSight dashboard.",
  "es": "Uno de los PEID acompañados a través de la Convención en este bienio. Ocho de estos países también aparecen en el panel SIDSight.",
  "fr": "L’un des PEID accompagnés au titre de la Convention pendant cet exercice biennal. Huit de ces pays figurent également dans le tableau de bord SIDSight.",
  "zh": "本两年期内通过公约获得支持的小岛屿发展中国家之一。这些国家中有八个也出现在 SIDSight 数据看板中。"
};
const PARIS_NOTE={
  "en": "UNESCO Headquarters — where most of this work happens.",
  "es": "Sede de la UNESCO — donde ocurre la mayor parte de este trabajo.",
  "fr": "Siège de l’UNESCO — là où se fait l’essentiel de ce travail.",
  "zh": "联合国教科文组织总部——我的大部分工作在这里开展。"
};
const TOUR_LABEL={
  "en": "▶ Play tour",
  "es": "▶ Ver recorrido",
  "fr": "▶ Lancer la visite",
  "zh": "▶ 自动浏览"
};
const STOP_LABEL={
  "en": "■ Stop",
  "es": "■ Detener",
  "fr": "■ Arrêter",
  "zh": "■ 停止"
};

const UI_T={
  "en": {
    "nav": "Main navigation",
    "openMenu": "Open navigation",
    "closeMenu": "Close navigation",
    "tour": "Play an automatic tour of the five missions",
    "stopTour": "Stop the automatic tour",
    "mapFrame": "Interactive map of missions and supported Small Island Developing States",
    "map": "World map showing mission cities and supported Small Island Developing States",
    "readout": "Map information panel",
    "dutyStation": "Duty station",
    "zoomIn": "Zoom in",
    "zoomOut": "Zoom out",
    "visits": "visits"
  },
  "es": {
    "nav": "Navegación principal",
    "openMenu": "Abrir navegación",
    "closeMenu": "Cerrar navegación",
    "tour": "Iniciar un recorrido automático por las cinco misiones",
    "stopTour": "Detener el recorrido automático",
    "mapFrame": "Mapa interactivo de misiones y pequeños Estados insulares en desarrollo que han recibido apoyo",
    "map": "Mapa mundial con las ciudades de las misiones y los pequeños Estados insulares en desarrollo que han recibido apoyo",
    "readout": "Panel de información del mapa",
    "dutyStation": "Lugar de destino",
    "zoomIn": "Acercar",
    "zoomOut": "Alejar",
    "visits": "visitas"
  },
  "fr": {
    "nav": "Navigation principale",
    "openMenu": "Ouvrir la navigation",
    "closeMenu": "Fermer la navigation",
    "tour": "Lancer une visite automatique des cinq missions",
    "stopTour": "Arrêter la visite automatique",
    "mapFrame": "Carte interactive des missions et des petits États insulaires en développement ayant reçu un appui",
    "map": "Carte du monde indiquant les villes des missions et les petits États insulaires en développement ayant reçu un appui",
    "readout": "Panneau d’information de la carte",
    "dutyStation": "Lieu d’affectation",
    "zoomIn": "Zoom avant",
    "zoomOut": "Zoom arrière",
    "visits": "visites"
  },
  "zh": {
    "nav": "主导航",
    "openMenu": "展开导航",
    "closeMenu": "收起导航",
    "tour": "启动五次出差的自动导览",
    "stopTour": "停止自动导览",
    "mapFrame": "展示出差地点与获支持小岛屿发展中国家的交互地图",
    "map": "标注出差城市与获支持小岛屿发展中国家的世界地图",
    "readout": "地图信息面板",
    "dutyStation": "工作地点",
    "zoomIn": "放大",
    "zoomOut": "缩小",
    "visits": "次访问"
  }
};

const REGION_T={
  "es": {
    "Pacific": "Región del Pacífico",
    "Caribbean": "Región del Caribe",
    "AIS": "Región AIS"
  },
  "fr": {
    "Pacific": "Région du Pacifique",
    "Caribbean": "Région des Caraïbes",
    "AIS": "Région AIS"
  },
  "zh": {
    "Pacific": "太平洋区域",
    "Caribbean": "加勒比区域",
    "AIS": "AIS 区域"
  }
};

const SIDS_T={
  "es": {
    "Kiribati": "Kiribati",
    "Marshall Islands": "Islas Marshall",
    "Naoero": "Nauru",
    "Papua New Guinea": "Papua Nueva Guinea",
    "Tuvalu": "Tuvalu",
    "Saint Kitts and Nevis": "Saint Kitts y Nevis",
    "Saint Lucia": "Santa Lucía",
    "Maldives": "Maldivas",
    "Cook Islands": "Islas Cook",
    "Fiji": "Fiji",
    "Micronesia (Federated States of)": "Micronesia (Estados Federados de)",
    "Palau": "Palau",
    "Samoa": "Samoa",
    "Solomon Islands": "Islas Salomón",
    "Tonga": "Tonga",
    "Vanuatu": "Vanuatu"
  },
  "fr": {
    "Kiribati": "Kiribati",
    "Marshall Islands": "Îles Marshall",
    "Naoero": "Nauru",
    "Papua New Guinea": "Papouasie-Nouvelle-Guinée",
    "Tuvalu": "Tuvalu",
    "Saint Kitts and Nevis": "Saint-Kitts-et-Nevis",
    "Saint Lucia": "Sainte-Lucie",
    "Maldives": "Maldives",
    "Cook Islands": "Îles Cook",
    "Fiji": "Fidji",
    "Micronesia (Federated States of)": "Micronésie (États fédérés de)",
    "Palau": "Palaos",
    "Samoa": "Samoa",
    "Solomon Islands": "Îles Salomon",
    "Tonga": "Tonga",
    "Vanuatu": "Vanuatu"
  },
  "zh": {
    "Kiribati": "基里巴斯",
    "Marshall Islands": "马绍尔群岛",
    "Naoero": "瑙鲁",
    "Papua New Guinea": "巴布亚新几内亚",
    "Tuvalu": "图瓦卢",
    "Saint Kitts and Nevis": "圣基茨和尼维斯",
    "Saint Lucia": "圣卢西亚",
    "Maldives": "马尔代夫",
    "Cook Islands": "库克群岛",
    "Fiji": "斐济",
    "Micronesia (Federated States of)": "密克罗尼西亚联邦",
    "Palau": "帕劳",
    "Samoa": "萨摩亚",
    "Solomon Islands": "所罗门群岛",
    "Tonga": "汤加",
    "Vanuatu": "瓦努阿图"
  }
};

const META_T={
  "es": {
    "title": "Yuxi Zhou | Trabajo, lugares y curiosidades",
    "description": "Profesional de la UNESCO que trabaja en comunicación institucional, seguimiento de los Estados Miembros y apoyo a los PEID, con fortalezas en narrativa digital, visualización de datos y coordinación entre ciencia y políticas públicas.",
    "socialTitle": "Yuxi Zhou | Comunicación, políticas y programas multilaterales",
    "socialDescription": "Trabajos seleccionados en comunicación, apoyo a los PEID y seguimiento.",
    "imageAlt": "Yuxi Zhou — Comunicación, políticas y programas multilaterales"
  },
  "fr": {
    "title": "Yuxi Zhou | Travaux, lieux et curiosités",
    "description": "Professionnelle de l’UNESCO travaillant dans la communication institutionnelle, le suivi des États membres et l’appui aux PEID, avec des compétences en narration numérique, visualisation de données et coordination entre science et politiques publiques.",
    "socialTitle": "Yuxi Zhou | Communication, politiques et programmes multilatéraux",
    "socialDescription": "Une sélection de travaux en communication, appui aux PEID et suivi.",
    "imageAlt": "Yuxi Zhou — Communication, politiques et programmes multilatéraux"
  },
  "zh": {
    "title": "Yuxi Zhou | 工作、足迹与探索",
    "description": "在联合国教科文组织从事机构传播、会员国监测与小岛屿发展中国家支持工作，擅长数字叙事、数据可视化，以及科学与政策衔接协调。",
    "socialTitle": "Yuxi Zhou | 传播、政策与多边项目",
    "socialDescription": "传播、小岛屿发展中国家支持与监测领域的精选工作成果。",
    "imageAlt": "Yuxi Zhou — 传播、政策与多边项目"
  }
};

// Page titles and accessibility text use the same selected language as the page.
const ORIGINAL_PAGE_TITLE=document.title;
const META_FIELDS=[
  ['meta[name="description"]','description'],
  ['meta[property="og:title"]','socialTitle'],
  ['meta[property="og:description"]','socialDescription'],
  ['meta[property="og:image:alt"]','imageAlt'],
  ['meta[name="twitter:title"]','socialTitle'],
  ['meta[name="twitter:description"]','socialDescription']
].map(([selector,key])=>({selector,key,original:document.querySelector(selector)?.content||''}));
let visitCount=null;
function updateVisitCount(){
  const hits=document.getElementById('hits');
  if(hits&&visitCount!==null) hits.textContent=`${visitCount} ${UI_T[lang].visits}`;
}
function updateLanguageUI(){
  const ui=UI_T[lang];
  const meta=META_T[lang];
  document.title=meta?meta.title:ORIGINAL_PAGE_TITLE;
  META_FIELDS.forEach(({selector,key,original})=>{
    const el=document.querySelector(selector);
    if(el) el.content=meta?meta[key]:original;
  });
  const labels=[['#nav','nav'],['.map-frame','mapFrame'],['#map','map'],['#readout','readout']];
  labels.forEach(([selector,key])=>document.querySelector(selector)?.setAttribute('aria-label',ui[key]));
  const toggle=document.getElementById('menuToggle');
  if(toggle) toggle.setAttribute('aria-label',ui[toggle.getAttribute('aria-expanded')==='true'?'closeMenu':'openMenu']);
  const tour=document.getElementById('tour');
  if(tour){
    tour.textContent=touring?STOP_LABEL[lang]:TOUR_LABEL[lang];
    tour.setAttribute('aria-label',ui[touring?'stopTour':'tour']);
  }
  [['.leaflet-control-zoom-in','zoomIn'],['.leaflet-control-zoom-out','zoomOut']].forEach(([selector,key])=>{
    const el=document.querySelector(selector);
    if(el){el.title=ui[key];el.setAttribute('aria-label',ui[key]);}
  });
  updateVisitCount();
}


function applyLang(l){
  if(l!=='en' && !Object.prototype.hasOwnProperty.call(T,l)) l='en';
  lang=l;
  document.documentElement.lang = l;
  const dict = T[l] || null;
  document.querySelectorAll('[data-t]').forEach(el=>{
    const k=el.dataset.t;
    if(EN_CACHE[k]===undefined) EN_CACHE[k]=el.innerHTML;
    el.innerHTML = (dict && dict[k]) ? dict[k] : EN_CACHE[k];
  });
  document.querySelectorAll('.lg').forEach(b=>{
    b.classList.toggle('on', b.dataset.lang===l);
    b.setAttribute('aria-pressed',String(b.dataset.lang===l));
  });
  renderExp(); renderMissions(); renderComms(); renderMore();
  updateLanguageUI();
  localizeMap();
  if(touring){
    const current=missionText(MISSIONS[(tourIdx-1+MISSIONS.length)%MISSIONS.length]);
    show(`${current.city}, ${current.country}`,current.when,current.body,false);
  } else reset();
}




/* ═══ 数据 ═══ 出差按时间先后排列 */
const BASE=[48.8566,2.3522], SEA='#1D5A61', CLAY='#B0532C';

const MISSIONS=[
 {id:'paris',city:'Paris',country:'France',coords:[48.8566,2.3522],when:'2023 – present',
  event:'COP10 · Intergovernmental communication',
  body:'<strong>Senior briefings · digital storytelling · event communications.</strong> Based at UNESCO headquarters, where day-to-day communication and monitoring work comes together — including the Convention Communication Strategy. <a href="#strategy-card">View related work →</a>'},
 {id:'budapest',city:'Budapest',country:'Hungary',coords:[47.4979,19.0402],when:'May 2026',
  event:'Multi-stakeholder Research Workshop (TALE)',
  body:'<strong>Policy and governance input on athlete safeguarding.</strong> Represented UNESCO in a multi-stakeholder workshop bringing together researchers and sport-integrity stakeholders, contributing a governance perspective to discussions on emerging research around athlete safeguarding and integrity in sport.'},
 {id:'antalya',city:'Antalya',country:'Türkiye',coords:[36.8969,30.7133],when:'February 2025',
  event:'COP9 Bureau and Fund Approval Committee',
  body:'<strong>Governance review and COP10 preparation.</strong> Two statutory meetings back to back, during which we went through nine project applications including proposals from SIDS and LDCs, and discussions on priorities and preparations leading towards COP10.'},
 {id:'riyadh',city:'Riyadh',country:'Saudi Arabia',coords:[24.7136,46.6753],when:'December 2024',
  event:'Statutory Meetings and COP9 Bureau Consultation',
  body:'<strong>Stakeholder coordination and governance dialogue.</strong> Supported high-level exchanges between UNESCO, governments and partner organizations, including consultations on the Convention’s priorities and how Member States and other stakeholders could be engaged in the evolving governance and reform discussions.'},
 {id:'olympia',city:'Olympia',country:'Greece',coords:[37.6386,21.63],when:'November 2024',
  event:'International Federation General Assembly',
  body:'<strong>Exploratory partnership and governance mapping.</strong> Exploratory partnership work around camel-racing and sport integrity: identifying governance gaps across regional federations, discussing where UNESCO expertise could add value, and exploring a possible pathway towards tailored guidance and longer-term cooperation.'},
 {id:'cannes',city:'Cannes &amp; Nice',country:'France',coords:[43.5528,7.0174],when:'February 2024',
  event:'Research Symposium and Global Education Conference',
  body:'<strong>Communication and outreach.</strong> Alongside WADA research and education discussions, my colleague Camila and I engaged with counterparts from the Caribbean regional organization (RADO) and New Zealand on capacity-building needs in SIDS, compliance follow-up and opportunities for support through the Anti-Doping Fund.'},
];

const SIDS=[
 {name:'Kiribati',region:'Pacific',coords:[1.4518,172.9717]},
 {name:'Marshall Islands',region:'Pacific',coords:[7.0897,171.3803]},
 {name:'Naoero',region:'Pacific',coords:[-0.5228,166.9315]},
 {name:'Papua New Guinea',region:'Pacific',coords:[-9.4438,147.1803]},
 {name:'Tuvalu',region:'Pacific',coords:[-8.5211,179.1962]},
 {name:'Saint Kitts and Nevis',region:'Caribbean',coords:[17.3026,-62.7177]},
 {name:'Saint Lucia',region:'Caribbean',coords:[14.0101,-60.9875]},
 {name:'Maldives',region:'AIS',coords:[4.1755,73.5093]},
 {name:'Cook Islands',region:'Pacific',coords:[-21.2078,-159.7750]},
 {name:'Fiji',region:'Pacific',coords:[-18.1416,178.4419]},
 {name:'Micronesia (Federated States of)',region:'Pacific',coords:[6.9248,158.1611]},
 {name:'Palau',region:'Pacific',coords:[7.5000,134.6242]},
 {name:'Samoa',region:'Pacific',coords:[-13.8333,-171.7667]},
 {name:'Solomon Islands',region:'Pacific',coords:[-9.4456,159.9729]},
 {name:'Tonga',region:'Pacific',coords:[-21.1393,-175.2049]},
 {name:'Vanuatu',region:'Pacific',coords:[-17.7333,168.3273]},
];

const EXPERIENCE=[
 {role:'Project Assistant',org:'UNESCO, Sciences Sector',when:'Jan 2025 – present',where:'Paris',
  tags:['Executive briefings','Data visualisation','Compliance monitoring','SIDS &amp; LDCs','Capacity-building'],
  points:[
   'Serve as Section focal point for senior-management briefings, drafting key messages, talking points and outreach materials, and developing data visualisations and dashboards that translate technical and monitoring information into accessible resources.',
   'Manage compliance monitoring through the Convention’s ADLogic system, reviewing national reports and coordinating follow-up with States Parties, ministries and Permanent Missions, with particular engagement across SIDS and LDCs.',
   'Supported the Convention’s first Regional Capacity-Building Programme for Pacific SIDS in Brisbane, contributing to programme delivery, training resources and stakeholder liaison for 13 Pacific SIDS.',
   'Coordinate engagement with 50+ international experts and regional coordinators under UNESCO’s Traditional Pharmacopoeia initiative, contributing to an international knowledge repository for research exchange.',
  ]},
 {role:'Consultant',org:'UNESCO, Sciences Sector',when:'Jun – Dec 2024',where:'Paris',
  tags:['Policy communications','SIDS &amp; LDCs','Resource mobilisation','Global stakeholder coordination'],
  points:[
   'Developed concept notes, briefings, talking points, web content and visual materials to support policy dialogue, programme visibility and engagement with national counterparts.',
   'Analysed States Parties’ implementation progress and translated reporting gaps into tailored support, with particular attention to SIDS and LDCs, including funding opportunities through the Anti-Doping Fund.',
   'Supported UNESCO’s global initiative on Traditional Pharmacopoeia and Sport Values, coordinating experts, regional coordinators and national stakeholders across task force meetings.',
  ]},
 {role:'Sponsored Trainee',org:'UNESCO, Sciences Sector',when:'Jun 2023 – Jun 2024',where:'Paris',
  tags:['Strategic communications','Policy research','Emerging technologies','Stakeholder liaison'],
  points:[
   'Drafted knowledge products, briefings, talking points and web content, and developed visual materials for communications and outreach.',
   'Supported the preparation and delivery of COP9, including coordination and communications for the intergovernmental meeting.',
   'Researched emerging governance issues including neurotechnology, artificial intelligence and integrity in sport, contributing to concept notes and meeting documents.',
  ]},
 {role:'Programme &amp; Communications Officer',org:'Lufy Education',when:'Apr 2019 – Jun 2023',where:'Remote',
  tags:['Programme design','Curriculum &amp; assessment','Social media strategy','Learner analytics'],
  points:[
   'Led the communications and outreach portfolio across three major social media platforms (WeChat Official Account, Weibo, RedNote), developing digital content and promotional tools to grow and engage the learner community.',
   'Co-founded and managed an online exam-preparation programme, designing curricula, teaching materials and assessment methods.',
   'Used learner feedback, market research and performance data to continuously refine course and outreach strategy, with over 60% of participants progressing to their target programmes.',
  ]},
 {role:'Secretary to Director',org:'Mercedes-Benz AG',when:'Aug 2022 – Apr 2023',where:'Beijing',
  tags:['Market research','Data visualisation','Operations monitoring','Stakeholder coordination'],
  points:[
   'Conducted market research and data analysis, developing data visualisations, reports and presentations for director-level decision-making.',
   'Coordinated across internal teams and external vendors, monitored operations across Mercedes-Benz warehouses in China, and led a nation-wide skills competition.',
  ]},
 {role:'Product Manager (internship)',org:'JD.com',when:'Jan – May 2022',where:'Beijing',
  tags:['Technical coordination','Cross-team communication','Solution design','Stakeholder management'],
  points:[
   'Supported requirements analysis and technical solution design for an international platform.',
   'Coordinated implementation across internal teams and external vendors and maintained project trackers and guidance materials.',
  ]},
 {role:'Interpreter, Chinese–English (part-time)',org:'Embassy of the Slovak Republic in China',when:'September 2022',where:'Beijing',
  tags:['Interpretation','Diplomatic communication','Bilateral liaison'],
  points:['Provided consecutive interpretation for a bilateral meeting at a diplomatic mission.']},
];

/* ═══ 地图 ═══
   CARTO 底图需要 API key（已配置好你的 key，每月 500 万次瓦片请求内免费）。 */
const CARTO_KEY='cb1_2tj6_1_def4fd640c99a676cfb4e5e7';
const map=L.map('map',{
  center:[22,44],
  zoom:2,
  zoomSnap:1,
  scrollWheelZoom:false,
  zoomControl:false,
  worldCopyJump:true
});
L.control.zoom({position:'bottomleft'}).addTo(map);
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png?key='+CARTO_KEY,
  {attribution:'© OpenStreetMap · © CARTO',subdomains:'abcd',maxZoom:18}).addTo(map);


function arc(a,b,bulge=8,n=64){
  const p=[]; let d=b[1]-a[1];
  if(d>180)d-=360; if(d<-180)d+=360;
  for(let i=0;i<=n;i++){const t=i/n;
    p.push([a[0]+(b[0]-a[0])*t+Math.sin(Math.PI*t)*bulge, a[1]+d*t]);}
  return p;
}
function icon(color,size,name){
  return L.divIcon({className:'',iconSize:[size,size],iconAnchor:[size/2,size/2],
    html:`<div class="mk" style="color:${color};width:${size}px;height:${size}px">
            <u></u><s style="background:${color}"></s>
            ${name?`<span class="tagname" style="color:${color}">${name}</span>`:''}
          </div>`});
}

const readout=document.getElementById('readout');
const show=(t,s,x,sea)=>readout.innerHTML=
  `<span class="label">${READ_LABEL[lang]||READ_LABEL.en}</span><div class="fade"><h4>${t}</h4><div class="sub${sea?' sea':''}">${s}</div><p>${x}</p></div>`;
const reset=()=>readout.innerHTML=
  `<span class="label">${READ_LABEL[lang]||READ_LABEL.en}</span><p class="hint">${READ_HINT[lang]||READ_HINT.en}</p>`;

const groups={mission:L.layerGroup().addTo(map),sids:L.layerGroup().addTo(map)};
const arcOf={}, rowOf={};
const missionMarkers={}, sidsMarkers={};
const missionText=m=>Object.assign({},m,(MIS_T[lang]||{})[m.id]||{});
const sidsName=s=>(SIDS_T[lang]||{})[s.name]||s.name;
const regionName=s=>(REGION_T[lang]||{})[s.region]||s.region+' region';

function lightUp(id,on){
  const a=arcOf[id], r=rowOf[id];
  if(a&&a.getElement()) a.getElement().classList.toggle('hot',on);
  if(r) r.classList.toggle('lit',on);
}

MISSIONS.forEach(m=>{
  const line=arc(BASE,m.coords);
  L.polyline(line,{color:CLAY,opacity:.12,weight:5,interactive:false}).addTo(groups.mission);
  const flow=L.polyline(line,{color:CLAY,opacity:.55,weight:1.2,interactive:false}).addTo(groups.mission);
  if(flow.getElement()) flow.getElement().classList.add('flow');
  arcOf[m.id]=flow;
  const mk=L.marker(m.coords,{icon:icon(CLAY,26,m.city)}).addTo(groups.mission);
  missionMarkers[m.id]=mk;
  const tr=()=>missionText(m);
  mk.on('mouseover',()=>{const x=tr();show(`${x.city}, ${x.country}`,x.when,x.event,false);lightUp(m.id,true);});
  mk.on('mouseout',()=>{lightUp(m.id,false);if(!touring)reset();});
  mk.on('click',()=>{const x=tr();map.flyTo(m.coords,4,{duration:1});show(`${x.city}, ${x.country}`,x.when,x.body,false);
    rowOf[m.id]&&rowOf[m.id].scrollIntoView({behavior:'smooth',block:'center'});});
});
const baseMarker=L.marker(BASE,{icon:icon('#16191B',20,'Paris')}).addTo(groups.mission)
  .on('mouseover',()=>show(missionText(MISSIONS[0]).city,UI_T[lang].dutyStation,(PARIS_NOTE[lang]||PARIS_NOTE.en),false))
  .on('mouseout',()=>{if(!touring)reset();});

SIDS.forEach(s=>{
  const mk=L.marker(s.coords,{icon:icon(SEA,24,s.name)}).addTo(groups.sids);
  sidsMarkers[s.name]=mk;
  mk.on('mouseover',()=>show(sidsName(s),regionName(s),
    (SIDS_NOTE[lang]||SIDS_NOTE.en),true));
  mk.on('mouseout',()=>{if(!touring)reset();});
  mk.on('click',()=>map.flyTo(s.coords,4.5,{duration:1}));
});

function localizeMap(){
  function updateMarker(marker,label,color,size){
    marker.setIcon(icon(color,size,label));
    const el=marker.getElement();
    if(el){el.setAttribute('aria-label',label);el.setAttribute('title',label);}
  }
  MISSIONS.forEach(m=>updateMarker(missionMarkers[m.id],missionText(m).city,CLAY,26));
  SIDS.forEach(s=>updateMarker(sidsMarkers[s.name],sidsName(s),SEA,24));
  updateMarker(baseMarker,missionText(MISSIONS[0]).city,'#16191B',20);
}

document.querySelectorAll('.f[data-f]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const key=btn.dataset.f;
    if(key==='all'){
      const on=!btn.classList.contains('on');
      document.querySelectorAll('.f[data-f]').forEach(b=>b.classList.toggle('on',on));
      Object.values(groups).forEach(g=>on?map.addLayer(g):map.removeLayer(g));
      map.flyTo([22,44],2.2,{duration:.9});
      return;
    }
    const on=btn.classList.toggle('on');
    on?map.addLayer(groups[key]):map.removeLayer(groups[key]);
  });
});

/* 自动巡览 */
let touring=false,tourTimer=null,tourIdx=0;
const tourBtn=document.getElementById('tour');
function stopTour(){touring=false;clearTimeout(tourTimer);tourBtn.classList.remove('running');
  tourBtn.textContent=TOUR_LABEL[lang]||TOUR_LABEL.en;MISSIONS.forEach(m=>lightUp(m.id,false));
  tourBtn.setAttribute('aria-label',UI_T[lang].tour);
  reset();map.flyTo([22,44],2.2,{duration:1.1});}
function stepTour(){
  MISSIONS.forEach(m=>lightUp(m.id,false));
  const m=MISSIONS[tourIdx%MISSIONS.length];
  const t0=MIS_T[lang]; const x=(t0&&t0[m.id])?Object.assign({},m,t0[m.id]):m;
  map.flyTo(m.coords,4,{duration:1.4});
  show(`${x.city}, ${x.country}`,x.when,x.body,false);
  lightUp(m.id,true);
  tourIdx++;
  tourTimer=setTimeout(()=>{if(touring){tourIdx%MISSIONS.length===0?stopTour():stepTour();}},4200);
}
tourBtn.addEventListener('click',()=>{
  if(touring){stopTour();return;}
  touring=true;tourIdx=0;tourBtn.classList.add('running');tourBtn.textContent=STOP_LABEL[lang]||STOP_LABEL.en;stepTour();
  tourBtn.setAttribute('aria-label',UI_T[lang].stopTour);
});

/* ═══ 列表 ═══ */
function renderExp(){
  const exp=document.getElementById('exp'); if(!exp) return;
  const src = (EXP_T[lang]) ? EXP_T[lang] : EXPERIENCE;
  exp.innerHTML='';
  src.forEach((e,i)=>{
    const collapsed = i>0; // 只有当前职位（第一条）默认展开
    const d=document.createElement('div'); d.className='entry rev in'+(collapsed?' collapsed':'');
    d.innerHTML=`<div class="entry-head" role="button" tabindex="0" aria-expanded="${!collapsed}"><div><h4>${e.role}</h4>
      <div class="org">${e.org} · ${e.where}</div></div>
      <div class="entry-right"><div class="entry-when">${e.when}</div><span class="entry-toggle" aria-hidden="true">${collapsed?'+':'–'}</span></div></div>
      <div class="entry-body">
      <ul>${e.points.map(p=>`<li>${p}</li>`).join('')}</ul>
      <div class="etags">${(e.tags||[]).map(t=>`<span class="etag">${t}</span>`).join('')}</div>
      </div>`;
    const head = d.querySelector('.entry-head');
    const toggle = ()=>{
      const nowCollapsed = d.classList.toggle('collapsed');
      head.setAttribute('aria-expanded', String(!nowCollapsed));
      head.querySelector('.entry-toggle').textContent = nowCollapsed ? '+' : '–';
    };
    head.addEventListener('click', toggle);
    head.addEventListener('keydown', (ev)=>{ if(ev.key==='Enter'||ev.key===' '){ ev.preventDefault(); toggle(); } });
    exp.appendChild(d);
  });
}
renderExp();

function renderMissions(){
  const ml=document.getElementById('mlist'); if(!ml) return;
  ml.innerHTML='';
  MISSIONS.forEach(m=>{
    const mt = MIS_T[lang]; const tr = (mt && mt[m.id]) ? Object.assign({},m,mt[m.id]) : m;
    const d=document.createElement('div'); d.className='mission rev in';
    d.innerHTML=`<div class="when-top">${tr.when}</div>
      <h4>${tr.event}</h4>
      <div class="place">${tr.city}, ${tr.country}</div>
      <p>${tr.body}</p>`;
    d.addEventListener('mouseenter',()=>{if(touring)stopTour();
      map.flyTo(m.coords,3.6,{duration:1});
      show(`${tr.city}, ${tr.country}`,tr.when,tr.event,false);lightUp(m.id,true);});
    d.addEventListener('mouseleave',()=>lightUp(m.id,false));
    rowOf[m.id]=d;
    ml.appendChild(d);
  });
}
renderMissions();



/* ═══ Communications outputs ═══ 改内容只动这个数组 */
const MORE_CAT_T={
  "es": [
    "Redacción para la dirección y edición",
    "Digital y web",
    "Eventos y difusión",
    "Planificación y medición"
  ],
  "fr": [
    "Rédaction pour la direction et édition",
    "Numérique et web",
    "Événements et sensibilisation",
    "Planification et mesure"
  ],
  "zh": [
    "高层文稿与编辑",
    "数字与网页",
    "活动与外联",
    "规划与效果衡量"
  ]
};
const MORE_ITEMS_T={
  "es": [
    [
      [
        "Notas informativas",
        "Notas para la alta dirección y reuniones de alto nivel que resumen el contenido técnico en puntos concisos para apoyar la toma de decisiones."
      ],
      [
        "Puntos de intervención",
        "Preparados para discursos, encuentros bilaterales y discusiones intergubernamentales."
      ],
      [
        "Mensajes clave",
        "Mensajes centrales verificados por su claridad y coherencia entre audiencias y canales."
      ],
      [
        "Artículos informativos",
        "Redactar y estructurar historias institucionales para la web y otros productos informativos."
      ],
      [
        "Presentaciones",
        "Estructura visual y narrativa para sesiones informativas, reuniones y eventos institucionales."
      ],
      [
        "Informes",
        "Síntesis de información técnica o de seguimiento en documentos estructurados y legibles."
      ]
    ],
    [
      [
        "Contenido en Drupal",
        "Edición y publicación de contenido web institucional para el público y los Estados Miembros."
      ],
      [
        "Boletines",
        "Contenido editorial recurrente que combina redacción, maquetación y presentación centrada en la audiencia."
      ],
      [
        "Visualización de datos",
        "Convertir datos técnicos o de seguimiento en visuales que apoyan la comprensión y el diálogo."
      ],
      [
        "Exposiciones",
        "Organizar historias institucionales e información probatoria en formatos web que el público pueda explorar."
      ],
      [
        "Redes sociales",
        "Adaptar contenido institucional a formatos sociales breves y orientados a la audiencia."
      ]
    ],
    [
      [
        "Materiales de eventos",
        "Visuales, presentaciones y contenido de apoyo para eventos intergubernamentales y de desarrollo de capacidades."
      ],
      [
        "Vídeo y multimedia",
        "Concepto, guion, edición y narrativa visual para la comunicación institucional."
      ],
      [
        "Productos de conocimiento",
        "Convertir aportes técnicos o de expertos en materiales de referencia accesibles y reutilizables."
      ],
      [
        "Historias de las partes interesadas",
        "Convertir perspectivas de beneficiarios, expertos o socios en contenido conciso y centrado en las personas."
      ],
      [
        "Coordinación con socios",
        "Trabajar con socios gubernamentales, técnicos y de comunicación para llevar los productos del concepto a la entrega."
      ]
    ],
    [
      [
        "Campañas de comunicación",
        "Traducir objetivos en audiencias, mensajes, canales, responsabilidades y plazos."
      ],
      [
        "Segmentación de audiencias",
        "Adaptar formato, tono y nivel de detalle para la alta dirección, los Estados Miembros y el público."
      ],
      [
        "Calendario de contenidos",
        "Secuenciar los productos de comunicación en torno a hitos, eventos y prioridades institucionales."
      ],
      [
        "KPI",
        "Definir indicadores prácticos para monitorear la entrega, el alcance y la interacción."
      ],
      [
        "GA4",
        "Usar analítica web para entender el tráfico y el comportamiento de la audiencia."
      ]
    ]
  ],
  "fr": [
    [
      [
        "Notes d’information",
        "Des notes pour la haute direction et les rencontres de haut niveau, qui résument le contenu technique en points concis pour éclairer les décisions."
      ],
      [
        "Éléments de langage",
        "Préparés pour des discours, des échanges bilatéraux et des discussions intergouvernementales."
      ],
      [
        "Messages clés",
        "Messages centraux testés pour leur clarté et leur cohérence entre publics et canaux."
      ],
      [
        "Articles d’actualité",
        "Rédiger et structurer des récits institutionnels pour le web et les supports d’information."
      ],
      [
        "Présentations",
        "Structure visuelle et narrative pour les briefings, réunions et événements institutionnels."
      ],
      [
        "Rapports",
        "Synthèse d’informations techniques ou de suivi en documents structurés et lisibles."
      ]
    ],
    [
      [
        "Contenu Drupal",
        "Édition et publication de contenu web institutionnel pour le public et les États membres."
      ],
      [
        "Lettres d’information",
        "Des contenus éditoriaux réguliers associant rédaction, mise en page et présentation adaptée au public."
      ],
      [
        "Visualisation de données",
        "Transformer des données techniques ou de suivi en visuels favorisant la compréhension et le dialogue."
      ],
      [
        "Expositions",
        "Organiser des récits institutionnels et des éléments probants dans des formats web que le public peut explorer."
      ],
      [
        "Réseaux sociaux",
        "Adapter les contenus institutionnels à des formats courts pour les réseaux sociaux, en fonction des publics."
      ]
    ],
    [
      [
        "Supports d’événements",
        "Visuels, présentations et contenus d’appui pour des événements intergouvernementaux et de renforcement des capacités."
      ],
      [
        "Vidéo et multimédia",
        "Concept, scénario, montage et narration visuelle pour la communication institutionnelle."
      ],
      [
        "Produits de connaissance",
        "Transformer des contributions techniques ou d’experts en supports de référence accessibles et réutilisables."
      ],
      [
        "Récits de parties prenantes",
        "Transformer les points de vue de bénéficiaires, d’experts ou de partenaires en contenus concis centrés sur les personnes."
      ],
      [
        "Coordination avec les partenaires",
        "Travailler avec des partenaires gouvernementaux, techniques et de communication pour faire avancer les productions de la conception à la livraison."
      ]
    ],
    [
      [
        "Campagnes de communication",
        "Traduire des objectifs en publics, messages, canaux, responsabilités et échéances."
      ],
      [
        "Ciblage des publics",
        "Adapter le format, le ton et le niveau de détail pour la haute direction, les États membres et le public."
      ],
      [
        "Calendrier éditorial",
        "Séquencer les productions de communication autour des jalons, événements et priorités institutionnelles."
      ],
      [
        "Indicateurs clés de performance (KPI)",
        "Définir des indicateurs concrets pour suivre les livrables, la portée et les interactions avec les publics."
      ],
      [
        "GA4",
        "Utiliser l’analyse web pour comprendre le trafic et le comportement du public."
      ]
    ]
  ],
  "zh": [
    [
      [
        "简报",
        "面向高层管理与高级别会晤，把技术内容浓缩成清晰、可供决策的要点。"
      ],
      [
        "发言要点",
        "为演讲、双边交流和政府间讨论准备的发言口径。"
      ],
      [
        "核心信息",
        "经过检验、在不同受众和渠道间保持清晰一致的核心信息。"
      ],
      [
        "新闻报道",
        "为网页和信息类产品撰写并组织机构新闻报道。"
      ],
      [
        "演示文稿",
        "为简报、会议和机构活动搭建视觉与叙事结构。"
      ],
      [
        "报告",
        "把技术或监测信息整理成结构清晰、易读的文件。"
      ]
    ],
    [
      [
        "Drupal网页内容",
        "为公众和会员国受众编辑并发布机构网页内容。"
      ],
      [
        "通讯简报",
        "定期发布的编辑内容，结合撰写、排版和适合受众的呈现方式。"
      ],
      [
        "数据可视化",
        "把技术或监测数据转化为有助于理解和讨论的可视化内容。"
      ],
      [
        "展览",
        "将机构故事与佐证材料组织成可供探索的网页展示。"
      ],
      [
        "社交媒体",
        "把机构内容改写成适合社交媒体的短篇、受众导向内容。"
      ]
    ],
    [
      [
        "活动物料",
        "为政府间会议和能力建设活动制作视觉、演示与配套内容。"
      ],
      [
        "视频与多媒体",
        "为机构传播提供构思、脚本、剪辑与视觉叙事。"
      ],
      [
        "知识产品",
        "把技术或专家意见转化为易于获取、可重复使用的参考材料。"
      ],
      [
        "利益相关方故事",
        "将受益人、专家或合作伙伴的视角转化为简洁、以人为本的内容。"
      ],
      [
        "合作伙伴协调",
        "与政府、技术和传播合作伙伴协作，把产品从构思推进到交付。"
      ]
    ],
    [
      [
        "传播活动策划",
        "把目标转化为受众、信息、渠道、责任分工与时间安排。"
      ],
      [
        "受众定位",
        "根据高层管理人员、会员国和公众受众调整形式、语气与详略程度。"
      ],
      [
        "内容发布日历",
        "围绕重要节点、活动与机构优先事项安排传播产出的节奏。"
      ],
      [
        "关键绩效指标（KPI）",
        "设定切实可行的指标，用于跟踪交付、触达与互动情况。"
      ],
      [
        "GA4",
        "借助网站分析了解流量与受众行为。"
      ]
    ]
  ]
};
const MORE_WORK=[
 {cat:'Executive &amp; Editorial', items:[
   ['Briefing notes','For senior management and high-level engagements, distilling technical content into concise decision-ready points.'],
   ['Talking points','Prepared for speeches, bilateral exchanges and intergovernmental discussions.'],
   ['Key messages','Core messages tested for clarity and consistency across audiences and channels.'],
   ['News articles','Drafting and structuring institutional stories for web and information products.'],
   ['Presentations','Visual and narrative structure for briefings, meetings and institutional events.'],
   ['Reports','Synthesising technical or monitoring information into structured, readable documents.'],
 ]},
 {cat:'Digital &amp; Web', items:[
   ['Drupal content','Editing and publishing institutional web content for public and Member State audiences.'],
   ['Newsletters','Recurring editorial content combining drafting, layout and audience-focused presentation.'],
   ['Data visualisation','Turning technical or monitoring data into visuals that support understanding and discussion.'],
   ['Exhibitions','Structuring institutional stories and evidence into web-based, exploratory formats.'],
   ['Social media','Adapting institutional content for short-form, audience-led social formats.'],
 ]},
 {cat:'Events &amp; Outreach', items:[
   ['Event materials','Visuals, presentations and supporting content for intergovernmental and capacity-building events.'],
   ['Video &amp; multimedia','Concept, scripting, editing and visual storytelling for institutional communication.','https://canva.link/nrk2j6dxb0ljjvd'],
   ['Knowledge products','Turning technical or expert input into accessible, reusable reference materials.'],
   ['Stakeholder stories','Turning beneficiary, expert or partner perspectives into concise human-centred content.'],
   ['Partner coordination','Working with government, technical and communication partners to move products from concept to delivery.'],
 ]},
 {cat:'Planning &amp; Measurement', items:[
   ['Communication campaigns','Turning objectives into audiences, messages, channels, responsibilities and timelines.'],
   ['Audience targeting','Adapting format, tone and level of detail for senior management, Member States and public audiences.'],
   ['Content calendar','Sequencing communication outputs around milestones, events and institutional priorities.'],
   ['KPIs','Defining practical indicators to track delivery, reach and engagement.'],
   ['GA4','Using web analytics to understand traffic and audience behaviour.'],
 ]},
];
function renderMore(){
  const grid=document.getElementById('moregrid'); if(!grid) return;
  const catT = MORE_CAT_T[lang];
  const itemsT = MORE_ITEMS_T[lang];
  grid.innerHTML='';
  MORE_WORK.forEach((c,ci)=>{
    const catName = catT ? catT[ci] : c.cat;
    const items = itemsT ? itemsT[ci] : c.items;
    const chips = items.map((it,ii)=>{
      const label=it[0], desc=(it[1]||'').replace(/"/g,'&quot;');
      const href = c.items[ii][2];
      if(href){
        return `<a class="mc-chip hoverdesc" href="${href}" target="_blank" rel="noopener" data-project="anniversary_video" tabindex="0" data-desc="${desc}">${label}</a>`;
      }
      return `<span class="mc-chip hoverdesc" tabindex="0" data-desc="${desc}">${label}</span>`;
    }).join(' · ');
    const div=document.createElement('div');
    div.className='mc-cat'; div.setAttribute('data-desc-scope','');
    div.innerHTML=`<b>${catName}</b><div class="mc-chips">${chips}</div><div class="desc-area"></div>`;
    grid.appendChild(div);
  });
}

const COMMS=[
 {cat:'Written', items:['Concept notes','Briefing notes','Talking points','Web content','Newsletters','Capacity-building materials','Knowledge resources']},
 {cat:'Campaigns &amp; storytelling', items:['COP10 20th-anniversary visibility campaign','Impact data collection, visualisation and storytelling','Stakeholder interview series (concept, editing)']},
 {cat:'Visual', items:['Infographics','Impact flyers and leaflets','Digital publications','Event posters','Event backgrounds','Logos','Certificates','Badges','Presentation decks','Mentimeter quizzes']},
 {cat:'Platforms', items:['Interactive storytelling board for COP10','Data visualisation dashboards','UNESCO webpage management (Drupal)','ADLogic monitoring platform management']},
 {cat:'Video &amp; multimedia', items:['COP10 anniversary video (concept, script, editing)','COP10 20th-anniversary visibility campaign','Multilingual video tutorials','COP highlights videos (co-editing)']},
 {cat:'Social media channels', items:['Institutional social media content (LinkedIn, YouTube)','Multi-platform strategy and content across WeChat, Weibo and RedNote']},
];

function renderComms(){
  const cg=document.getElementById('cgrid'); if(!cg) return;
  cg.innerHTML='';
  COMMS.forEach((c,idx)=>{
    const ct = COMMS_T[lang]; const cat = (ct && ct[idx]) ? ct[idx] : c.cat;
    const it = CITEMS_T[lang]; const items = (it && it[idx]) ? it[idx] : c.items;
    const d=document.createElement('div'); d.className='ccard rev in';
    d.innerHTML=`<div class="ccard-head"><h4><i aria-hidden="true"></i>${cat}</h4>
        <span class="n">${String(c.items.length).padStart(2,'0')}</span></div>
      <div class="citems">${items.map(i=>`<span class="citem">${i}</span>`).join('')}</div>`;
    cg.appendChild(d);
  });
}
renderComms();
renderMore();

/* ── hover/focus descriptions for More Communication Work ── */
(function(){
  function findBox(el){
    const scope = el.closest('[data-desc-scope]');
    return scope ? scope.querySelector('.desc-area') : null;
  }
  function show(e){
    const t = e.target.closest ? e.target.closest('.hoverdesc') : null;
    if(!t) return;
    const box = findBox(t);
    if(!box) return;
    let text = t.getAttribute('data-desc');
    if(t.dataset.descT){
      const dict = T[lang];
      text = (dict && dict[t.dataset.descT]) || t.getAttribute('data-desc') || '';
    }
    box.textContent = text || '';
  }
  function hide(e){
    const t = e.target.closest ? e.target.closest('.hoverdesc') : null;
    if(!t) return;
    const box = findBox(t);
    if(box) box.textContent = '';
  }
  document.addEventListener('mouseover', show);
  document.addEventListener('mouseout', hide);
  document.addEventListener('focusin', show);
  document.addEventListener('focusout', hide);
})();

/* ═══ 交互 ═══ */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),
  {threshold:.1,rootMargin:'0px 0px -30px 0px'});
document.querySelectorAll('.rev').forEach((el,i)=>{el.style.transitionDelay=(Math.min(i,5)*.05)+'s';io.observe(el)});

/* GA4：记录首页项目点击去向 */
document.querySelectorAll('.proj .lnk[data-project]').forEach(a=>{
  a.addEventListener('click',()=>{
    if(typeof gtag==='function') gtag('event','project_click',{project:a.dataset.project});
  });
});

/* 左侧章节导航：滚动到哪一节就点亮哪一个 */
const secIO=new IntersectionObserver(es=>{
  es.forEach(e=>{
    const n=e.target.querySelector('[data-sec]');
    if(n) n.classList.toggle('active', e.isIntersecting && e.intersectionRatio>0.12);
  });
},{threshold:[0,.12,.5]});
document.querySelectorAll('section').forEach(s=>secIO.observe(s));

const nav=document.getElementById('nav'),prog=document.getElementById('prog');
addEventListener('scroll',()=>{
  const doc=document.documentElement,total=doc.scrollHeight-doc.clientHeight;
  prog.style.width=(total>0?Math.min(scrollY/total*100,100):0)+'%';
  nav.classList.toggle('edge',scrollY>50);
},{passive:true});

/* 移动端汉堡菜单 */
(function(){
  const toggle=document.getElementById('menuToggle');
  const navList=document.getElementById('navList');
  if(!toggle||!navList) return;
  toggle.addEventListener('click',()=>{
    const open=navList.classList.toggle('open');
    toggle.setAttribute('aria-expanded',open);
    toggle.textContent=open?'×':'☰';
    toggle.setAttribute('aria-label',UI_T[lang][open?'closeMenu':'openMenu']);
  });
  navList.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click',()=>{
      navList.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
      toggle.textContent='☰';
      toggle.setAttribute('aria-label',UI_T[lang].openMenu);
    });
  });
})();

document.addEventListener('click',event=>{
  if(!event.target.closest('a.jump')) return;
  const fr=document.querySelector('.map-frame');
  setTimeout(()=>{fr.classList.add('pulse');setTimeout(()=>fr.classList.remove('pulse'),2500);},700);
});

(function(){
  const saved=(()=>{try{return localStorage.getItem('yz-lang')}catch(e){return null}})();
  applyLang(saved||'en');
  document.querySelectorAll('.lg').forEach(b=>{
    b.addEventListener('click',()=>{
      applyLang(b.dataset.lang);
      try{localStorage.setItem('yz-lang',lang)}catch(e){}
    });
  });
})();

document.querySelectorAll('nav ul a').forEach(a=>{
  a.addEventListener('mousemove',e=>{
    const r=a.getBoundingClientRect();
    a.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.28}px,${(e.clientY-r.top-r.height/2)*.28}px)`;
  });
  a.addEventListener('mouseleave',()=>a.style.transform='');
});

/* ═══ 访问统计：脚本已写在 index.html 的 <head>，这里只取总数显示在页脚 ═══ */
fetch('https://yuxizhou.goatcounter.com/counter/TOTAL.json')
  .then(r=>r.json())
  .then(d=>{const h=document.getElementById('hits');
    if(h&&d&&d.count){visitCount=d.count;updateVisitCount();}})
  .catch(()=>{});

if(matchMedia('(pointer:fine)').matches){
  const ring=document.getElementById('curFrame'),dot=document.getElementById('curCore'),
        c=document.getElementById('coord');
  const frame=document.querySelector('.map-frame');
  let mx=-100,my=-100,tx=-100,ty=-100;
  addEventListener('mousemove',e=>{
    mx=e.clientX;my=e.clientY;
    dot.style.transform=`translate(${mx-dot.offsetWidth/2}px,${my-dot.offsetHeight/2}px) rotate(45deg)`;
    const overMap=frame.contains(e.target)&&!e.target.closest('.readout');
    const hot=!!e.target.closest('a,button,.mission,.entry,.proj,.mini,.list li,.ccard');
    ring.classList.toggle('on-map',overMap); dot.classList.toggle('on-map',overMap);
    ring.classList.toggle('grow',hot); dot.classList.toggle('grow',hot);
    if(overMap){
      const p=map.mouseEventToLatLng(e);
      c.textContent=`${p.lat.toFixed(2)}°, ${p.lng.toFixed(2)}°`;
      c.style.transform=`translate(${mx+22}px,${my+14}px)`;
      c.classList.add('show');
    } else c.classList.remove('show');
  },{passive:true});
  let ang=45;
  (function loop(){
    tx+=(mx-tx)*.16;ty+=(my-ty)*.16;ang+=.08;
    ring.style.transform=`translate(${tx-ring.offsetWidth/2}px,${ty-ring.offsetHeight/2}px) rotate(${ang}deg)`;
    requestAnimationFrame(loop);
  })();
}
