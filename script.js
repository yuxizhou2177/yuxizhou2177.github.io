/* ═══════════════════════════════════════════════════════════════
   多语言 · EN / ES / FR / 中文
   想改译文只动这个区块。
   注：出版物标题、机构名、软件名保留原文，不翻译。
   ═══════════════════════════════════════════════════════════════ */
var lang='en';
const EN_CACHE={};

const T={
es:{
 'nav.about':'Sobre mí','nav.project':'Proyectos','nav.comms':'Comunicación','nav.exp':'Experiencia','nav.bg':'Formación',
 'mast.tiny':'París · UNESCO · Ciencias','mast.hi':'Hola, soy',
 'mast.pill1':'Seguimiento y desarrollo de capacidades','mast.pill2':'Visualización de datos y comunicación',
 'mast.line':"Mi pequeño rincón en internet, donde comparto mi trabajo, los lugares a los que me lleva y los proyectos e historias que voy creando por el camino.",
 'map.label':'Adónde me lleva mi trabajo','map.tour':'▶ Ver recorrido','map.fmis':'Misiones','map.fsids':'PEID acompañados',
 'map.cap':'Cinco misiones desde 2024; los PEID de mi cartera del Convenio en este bienio (2024–2025).',
 'tool.label':'Herramientas',
 'sec.about':'Sobre mí','sec.project':'Proyectos','sec.comms':'Comunicación','sec.exp':'Experiencia','sec.bg':'Formación',
 'about.h2':'Trabajo en la intersección entre políticas, implementación y comunicación.',
 'about.p1':'Soy Yuxi. Trabajo en la UNESCO en París, en la Convención Internacional contra el Dopaje en el Deporte (2005). Buena parte de mi trabajo empieza con un informe nacional: entender qué ha puesto en marcha un país, dónde está la brecha en la implementación y qué tipo de apoyo podría ayudar de forma realista a avanzar.',
 'about.p2':'Junto con mi colega Rinrada, hacemos el seguimiento de cómo los Estados Partes aplican la Convención y ayudamos a convertir esos hallazgos en un acompañamiento práctico: desde orientación técnica y desarrollo de capacidades hasta diálogo sobre políticas públicas, productos de conocimiento y herramientas de comunicación.',
 'about.p3':'Algo que he aprendido es que <strong class="mark">una brecha en la implementación no significa necesariamente falta de compromiso.</strong> En mi trabajo con los PEID y los PMA, las limitaciones suelen ser prácticas: personal reducido, responsabilidades fragmentadas, prioridades que compiten entre sí y capacidad de implementación limitada. Eso me ha vuelto curiosa sobre qué es lo que realmente ayuda a convertir los compromisos en algo que funcione en la práctica.',
 'about.p4':'También traduzco información compleja de políticas, técnica y basada en datos a <strong class="mark-c">paneles de datos, resúmenes, infografías, contenido web y vídeos</strong>, porque la información es más útil cuando es clara, accesible y práctica.',
 'about.bubble':'Me encanta el momento en que los números empiezan a contar una historia, y cuando una buena imagen dice lo que un párrafo largo no puede.',
 'comms.h2':'Productos de comunicación seleccionados',
 'comms.intro':'Lo que he producido: escrito, visual, filmado y publicado.',
 'exp.h2':'Dónde he trabajado','fold.title':'Misiones seleccionadas, 2024–2026','fold.hint':'Haz clic para desplegar',
 'fold.note':'Pasa el cursor sobre un marcador en el mapa del inicio de la página para destacar la nota correspondiente aquí abajo, y al revés.',
 'bg.h2':'Formación, certificaciones y publicaciones',
 'bg.bubble':'Formación científica · Investigadora en ciencias sociales · Curiosa y siempre aprendiendo',
 'bg.edu':'Formación académica','bg.train':'Formación y certificaciones','bg.awards':'Reconocimientos','bg.pub':'Publicaciones',
 'bg.ma':'Enseñanza y evaluación de lenguas, adquisición de segundas lenguas, análisis del discurso, política internacional, diseño de investigación y métodos cuantitativos.',
 'bg.bsc':'Ecología, biodiversidad, botánica, bioestadística, informática aplicada a la biología y conservación de la naturaleza.',
 'bg.d1':'Máster en Lingüística Aplicada (Ciencias Sociales)','bg.d2':'Licenciatura en Ciencias Biológicas',
 'bg.t1':'Seguridad alimentaria y medios de vida; biodiversidad y sistemas agroalimentarios; agricultura en acuerdos comerciales regionales',
 'bg.t2':'Certificado de aptitud docente para educación secundaria superior','bg.t2m':'Ministerio de Educación, China, 2021',
 'bg.a1':'Beca Nacional (2 % superior)','bg.a1m':'Ministerio de Educación, China, 2020',
 'bg.a2':'Beca de nivel especial; Estudiante de mérito (dos veces)','bg.a3':'Premio a la tesis destacada',
 'bg.a4':'Primer premio — 17.º Concurso Nacional Universitario de Debate en Inglés',
 'bg.pth':"Tesis de máster, Universidad de Estudios Extranjeros de Pekín, 2022",
 'c.label':'06 — Contacto','c.h2':'Hola 👋',
 'c.p1':'Siempre me alegra conectar, ya trabajes en organizaciones internacionales, en tecnología, en educación, en el sector privado o en algo completamente distinto. 🌍',
 'c.p2':'Si algo de aquí te ha llamado la atención, o simplemente quieres saludar, escríbeme sin problema. ☕',
 'f.left':'Yuxi Zhou — París · hecho y mantenido por mí',
 'p1.k':'Explorador de políticas agroalimentarias para 8 PEID · agosto de 2026',
 'p1.a':'Un miniproyecto independiente que construí a partir de una pregunta práctica: si mañana tuviera una reunión bilateral con la Misión Permanente de un PEID, ¿qué querría entender esta noche?',
 'p1.b':'SIDSight reúne 8 PEID del Pacífico, el Caribe y la región AIS, combinando indicadores sobre dependencia de importaciones de alimentos, agricultura y pesca, disponibilidad de tierras, vulnerabilidad climática y conectividad digital en una herramienta sencilla para comparar países y preparar reuniones.',
 'p1.nl':'Un poco más',
 'p1.n':'Un conjunto de datos más pequeño y verificado; sin estimar valores faltantes; años de referencia visibles; e indicadores descartados cuando la calidad del dato no era fiable.',
 'p1.lnk':'Repositorio y notas metodológicas →',
 'p2.k':'Tablero interactivo · julio – octubre de 2025',
 'p2.a':'Un tablero interactivo desarrollado para la COP10 para contar veinte años de la Convención a través de hitos, proyectos, datos e impacto.',
 'p2.b':'Fui el punto focal de la UNESCO y coordiné el proyecto desde el concepto hasta el lanzamiento junto con el Ministerio de Asuntos de la Juventud y Deporte de la India.',
 'p2.c':'El reto era convertir dos décadas de historia institucional en un relato interactivo, haciendo que la evolución de la Convención resultara accesible y atractiva para un público internacional.',
 'p2.lnk':'Abrir el tablero →',
 'p3.k':'Vídeo breve para la COP10 · 2025',
 'p3.a':'Un vídeo breve que conmemora los veinte años de la Convención, recorriendo los hitos principales en orden cronológico. Desarrollé el concepto, el guion y el montaje completo, condensando dos décadas en un formato conciso y accesible.',
 'p3.b':'Se proyectó en la ceremonia de apertura de la COP10, que reunió a más de 500 representantes de más de 140 países, incluidos más de 30 ministros.',
 'p3.lnk':'Ver el vídeo →',
 'p1.n':"A lo largo de tres páginas, pasa de una comparación entre países a una ficha de país y, finalmente, a los programas pertinentes de la FAO: de «cuál es la situación» a «hacia dónde puede ir la conversación».",
 'p1.c1':"Power BI",
 'p1.c2':"Python · pandas",
 'p1.c3':"ArcGIS",
 'p1.c4':"GitHub",
 'p1.c5':"Datos del Banco Mundial y la FAO",
 'p2.c1':"Redacción de contenidos",
 'p2.c2':"Diseño interactivo",
 'p2.c3':"Alianza gubernamental",
 'p2.c4':"Comunicación digital",
 'p3.c1':"Concepto y guion",
 'p3.c2':"Narrativa visual",
 'p3.c3':"Edición de vídeo",
 'p3.c4':"Comunicación institucional",
 'bg.m1':"Universidad de Estudios Extranjeros de Pekín · 2019–2022",
 'bg.m2':"Universidad de Ludong · 2014–2018",
 'bg.p1':"La construcción del discurso internacional de China sobre la «reducción de la pobreza» en las noticias de China Daily",
 'bg.p2':"Revisión de la investigación sobre la influencia de la conciencia fonológica en la adquisición del inglés en niños en China",
 'bg.p2m':"con Y. Chen · Investigación sobre el Aprendizaje de Segundas Lenguas, vol. 11, 2020",
 'bg.p3':"La relación entre la retroalimentación correctiva escrita y el desarrollo del conocimiento explícito e implícito",
 'lg1':"Chino — lengua materna",
 'lg2':"Inglés — IELTS 8.0",
 'lg3':"Español — B2",
 'lg4':"Francés — B1",
 'p1.t':"SIDSight",
 'p1.bg':"Datos",
 'p2.t':"El recorrido de la Convención contra el Dopaje",
 'p2.bg':"En línea",
 'p3.t':"20 años de la Convención",
 'p3.bg':"Vídeo",
 'bg.t1m':"Academia de aprendizaje en línea de la FAO, 2026",
 'bg.t3':"IELTS Academic — banda global 8.0",
 'bg.t4':"Microsoft Power Platform Fundamentals (PL-900)",
 'bg.a2m':"Universidad de Estudios Extranjeros de Pekín, 2021",
 'bg.a3m':"14.º Foro Académico de Posgrado de la Capital, 2020",
 'bg.p1m':"Revista de Humanidades y Ciencias Sociales de Asia-Pacífico, 2021",
 'f.left':"Mi pequeño rincón de internet, todavía en construcción.",
 'read.label':"Detalle",
 'read.hint':"Explora el mapa pasando el cursor sobre un marcador, iniciando el recorrido o desplazándote hasta las notas de misión.",
},
fr:{
 'nav.about':'À propos','nav.project':'Projets','nav.comms':'Communication','nav.exp':'Expérience','nav.bg':'Parcours',
 'mast.tiny':'Paris · UNESCO · Sciences','mast.hi':'Bonjour, je suis',
 'mast.pill1':'Suivi et renforcement des capacités','mast.pill2':'Visualisation de données et communication',
 'mast.line':"Mon petit coin sur Internet, où je partage mon travail, les chemins qu’il m’ouvre, ainsi que les projets et les histoires que je construis au fil du temps.",
 'map.label':'Là où mon travail me mène','map.tour':'▶ Lancer la visite','map.fmis':'Missions','map.fsids':'PEID accompagnés',
 'map.cap':'Cinq missions depuis 2024 ; les PEID de mon portefeuille au titre de la Convention pour cet exercice biennal (2024–2025).',
 'tool.label':'Outils',
 'sec.about':'À propos','sec.project':'Projets','sec.comms':'Communication','sec.exp':'Expérience','sec.bg':'Parcours',
 'about.h2':'Je travaille à l’intersection des politiques, de leur mise en œuvre et de la communication.',
 'about.p1':'Je m’appelle Yuxi. Je travaille à l’UNESCO à Paris sur la Convention internationale contre le dopage dans le sport (2005). Une grande partie de mon travail commence par un rapport national : comprendre ce qu’un pays a mis en place, où se situe l’écart de mise en œuvre et quel type d’appui pourrait réellement faire avancer les choses.',
 'about.p2':'Avec ma collègue Rinrada, nous suivons la manière dont les États parties appliquent la Convention et nous aidons à transformer ces constats en accompagnement concret : conseils techniques, renforcement des capacités, dialogue sur les politiques, produits de connaissance et outils de communication.',
 'about.p3':'Une chose que j’ai apprise, c’est qu’<strong class="mark">un écart de mise en œuvre ne signifie pas nécessairement un manque d’engagement.</strong> Dans mon travail avec les PEID et les PMA, les contraintes sont souvent pratiques : effectifs limités, responsabilités fragmentées, priorités concurrentes et capacités de mise en œuvre restreintes. Cela m’a rendue curieuse de ce qui aide réellement à transformer les engagements en quelque chose qui fonctionne sur le terrain.',
 'about.p4':'Je traduis aussi des informations complexes — politiques, techniques et fondées sur des données — en <strong class="mark-c">tableaux de bord, notes de synthèse, infographies, contenus web et vidéos</strong>, car l’information n’est vraiment utile que lorsqu’elle est claire, accessible et exploitable.',
 'about.bubble':'J’aime le moment où les chiffres commencent à raconter une histoire, et où une bonne image dit ce qu’un long paragraphe ne peut pas dire.',
 'comms.h2':'Productions de communication choisies',
 'comms.intro':'Ce que j’ai réellement produit : écrit, visuel, filmé et publié.',
 'exp.h2':'Où j’ai travaillé','fold.title':'Missions choisies, 2024–2026','fold.hint':'Cliquez pour déplier',
 'fold.note':'Survolez un marqueur sur la carte en haut de la page pour mettre en évidence la note correspondante ci-dessous, et inversement.',
 'bg.h2':'Formation, certifications et publications',
 'bg.bubble':'Formation scientifique · Chercheuse en sciences sociales · Curieuse et toujours en apprentissage',
 'bg.edu':'Formation','bg.train':'Formations et certifications','bg.awards':'Distinctions','bg.pub':'Publications',
 'bg.ma':'Enseignement et évaluation des langues, acquisition des langues secondes, analyse du discours, politique internationale, méthodologie de recherche et méthodes quantitatives.',
 'bg.bsc':'Écologie, biodiversité, botanique, biostatistique, informatique appliquée à la biologie et conservation de la nature.',
 'bg.d1':'Master en linguistique appliquée (sciences sociales)','bg.d2':'Licence en sciences biologiques',
 'bg.t1':'Sécurité alimentaire et moyens d’existence ; biodiversité et systèmes agroalimentaires ; agriculture dans les accords commerciaux régionaux',
 'bg.t2':'Certificat d’aptitude à l’enseignement secondaire supérieur','bg.t2m':'Ministère de l’Éducation, Chine, 2021',
 'bg.a1':'Bourse nationale (2 % supérieurs)','bg.a1m':'Ministère de l’Éducation, Chine, 2020',
 'bg.a2':'Bourse de niveau spécial ; étudiante méritante (deux fois)','bg.a3':'Prix du mémoire remarquable',
 'bg.a4':'Premier prix — 17e Concours national universitaire de débat en anglais',
 'bg.pth':"Mémoire de master, Université des langues étrangères de Pékin, 2022",
 'c.label':'06 — Contact','c.h2':'Bonjour 👋',
 'c.p1':'Je suis toujours ravie d’échanger, que vous travailliez dans une organisation internationale, dans la tech, dans l’éducation, dans le secteur privé ou dans un tout autre domaine. 🌍',
 'c.p2':'Si quelque chose ici a retenu votre attention, ou si vous voulez simplement dire bonjour, n’hésitez pas à m’écrire. ☕',
 'f.left':'Yuxi Zhou — Paris · conçu et maintenu par mes soins',
 'p1.k':'Explorateur des politiques agroalimentaires pour 8 PEID · août 2026',
 'p1.a':'Un mini-projet indépendant né d’une question pratique : si j’avais demain une réunion bilatérale avec la Mission permanente d’un PEID, que voudrais-je comprendre ce soir ?',
 'p1.b':'SIDSight rassemble 8 PEID du Pacifique, des Caraïbes et de la région AIS, en combinant des indicateurs sur la dépendance aux importations alimentaires, l’agriculture et la pêche, la disponibilité des terres, la vulnérabilité climatique et la connectivité numérique, dans un outil simple de comparaison entre pays et de préparation de réunions.',
 'p1.nl':'Pour aller plus loin',
 'p1.n':'Un jeu de données plus restreint et vérifié ; aucune estimation des valeurs manquantes ; années de référence visibles ; et indicateurs écartés lorsque la qualité des données était incertaine.',
 'p1.lnk':'Dépôt et notes méthodologiques →',
 'p2.k':'Tableau interactif · juillet – octobre 2025',
 'p2.a':'Un tableau interactif conçu pour la COP10 afin de raconter vingt ans de la Convention à travers ses jalons, ses projets, ses données et son impact.',
 'p2.b':'J’ai été le point focal de l’UNESCO et j’ai coordonné le projet du concept au lancement avec le ministère indien de la Jeunesse et des Sports.',
 'p2.c':'Le défi consistait à transformer deux décennies d’histoire institutionnelle en un récit interactif, rendant l’évolution de la Convention accessible et vivante pour un public international.',
 'p2.lnk':'Ouvrir le tableau →',
 'p3.k':'Vidéo courte pour la COP10 · 2025',
 'p3.a':'Une courte vidéo marquant les vingt ans de la Convention, retraçant les jalons principaux dans l’ordre chronologique. J’en ai conçu le principe, écrit le scénario et réalisé le montage complet, condensant deux décennies dans un format concis et accessible.',
 'p3.b':'Projetée lors de la cérémonie d’ouverture de la COP10, qui a réuni plus de 500 représentants de plus de 140 pays, dont plus de 30 ministres.',
 'p3.lnk':'Voir la vidéo →',
 'p1.n':"En trois pages, il passe d’une vue comparative entre pays à une fiche pays, puis aux programmes pertinents de la FAO : de « quelle est la situation ? » à « où la conversation peut-elle mener ? ».",
 'p1.c1':"Power BI",
 'p1.c2':"Python · pandas",
 'p1.c3':"ArcGIS",
 'p1.c4':"GitHub",
 'p1.c5':"Données Banque mondiale et FAO",
 'p2.c1':"Rédaction de contenus",
 'p2.c2':"Conception interactive",
 'p2.c3':"Partenariat gouvernemental",
 'p2.c4':"Communication numérique",
 'p3.c1':"Concept et scénario",
 'p3.c2':"Narration visuelle",
 'p3.c3':"Montage vidéo",
 'p3.c4':"Communication institutionnelle",
 'bg.m1':"Université des langues étrangères de Pékin · 2019–2022",
 'bg.m2':"Université de Ludong · 2014–2018",
 'bg.p1':"La construction du discours international de la Chine sur la « réduction de la pauvreté » dans les reportages de China Daily",
 'bg.p2':"Revue des recherches sur l’influence de la conscience phonologique dans l’acquisition de l’anglais chez les enfants en Chine",
 'bg.p2m':"avec Y. Chen · Recherches sur l’apprentissage des langues secondes, vol. 11, 2020",
 'bg.p3':"La relation entre le feedback correctif écrit et le développement des connaissances explicites et implicites",
 'lg1':"Chinois — langue maternelle",
 'lg2':"Anglais — IELTS 8.0",
 'lg3':"Espagnol — B2",
 'lg4':"Français — B1",
 'p1.t':"SIDSight",
 'p1.bg':"Données",
 'p2.t':"Le parcours de la Convention contre le dopage",
 'p2.bg':"En ligne",
 'p3.t':"20 ans de la Convention",
 'p3.bg':"Vidéo",
 'bg.t1m':"Académie d’apprentissage en ligne de la FAO, 2026",
 'bg.t3':"IELTS Academic — score global 8,0",
 'bg.t4':"Microsoft Power Platform Fundamentals (PL-900)",
 'bg.a2m':"Université des langues étrangères de Pékin, 2021",
 'bg.a3m':"14e Forum académique des étudiants de troisième cycle de la capitale, 2020",
 'bg.p1m':"Revue des sciences humaines et sociales d’Asie-Pacifique, 2021",
 'f.left':"Mon petit coin d’internet, encore en chantier.",
 'read.label':"Aperçu",
 'read.hint':"Explorez la carte en survolant un marqueur, en lançant la visite ou en faisant défiler jusqu’aux notes de mission.",
},
zh:{
 "nav.about":"关于我",
 "nav.project":"项目",
 "nav.comms":"传播",
 "nav.exp":"经历",
 "nav.bg":"教育背景",
 "mast.tiny":"巴黎 · 联合国教科文组织 · 科学部门",
 "mast.hi":"你好呀，我是",
 "mast.pill1":"履约监测与能力建设",
 "mast.pill2":"数据可视化与传播",
 "mast.line":"这是我在互联网上的小角落。在这里，我分享自己正在做的事、去往的地方，以及一路上参与的项目与故事。",
 "map.label":"工作把我带去的地方",
 "map.tour":"▶ 自动浏览",
 "map.fmis":"出差",
 "map.fsids":"帮助过的小岛屿国家",
 "map.cap":"2024 年以来的5次出差；本两年期（2024–2025）公约工作援助的小岛屿发展中国家。",
 "read.label":"详情",
 "read.hint":"把鼠标移到标记上、或点击自动浏览，或向下滚动查看我的出差。",
 "tool.label":"技能",
 "sec.about":"关于我",
 "sec.project":"项目",
 "sec.comms":"传播",
 "sec.exp":"经历",
 "sec.bg":"教育背景",
 "about.h2":"我的工作在政策、落地与传播的交叉处。",
 "about.p1":"我是羽西，在联合国教科文组织总部工作，负责《国际反对在体育运动中使用兴奋剂公约》（2005）的相关事务。我的工作经常从一份国家报告开始：了解一个国家已经实施了什么、短板在哪里，以及什么样的支持才真正可能帮助到这个国家。",
 "about.p2":"我和同事 Rinrada 一起监测缔约国的履约情况，并把这些情况转化为可落地的后续支持——可以是技术指导、能力建设，抑或是政策对话、知识产品和传播工具。",
 "about.p3":"我在工作中逐渐意识到，<strong class=\"mark\">落实上的差距，并不一定意味着缺乏意愿。</strong>在与小岛屿发展中国家（SIDS）和最不发达国家（LDCs）合作的过程中，我发现很多时候阻力其实非常现实：人手有限、职责分散、各项优先事务相互挤压，以及整体执行能力不足。也正因为如此，我越来越想弄清楚：究竟什么样的支持，才能真正把纸面上的承诺转化为现实中行得通、落得下去的行动。",
 "about.p4":"我也把复杂的政策、技术和数据信息转化成<strong class=\"mark-c\">仪表盘、简报、信息图、网页内容和视频</strong>，因为信息只有在清晰易读、易用的时候才真正有价值。",
 "about.bubble":"我喜欢数字开始讲故事的那一刻，也喜欢一张好图说出长篇段落说不清的东西~",
 "p1.t":"SIDSight",
 "p1.bg":"看板",
 "p1.k":"面向 8 个小岛屿国家的农业食品政策探索工具 · 2026 年 8 月",
 "p1.a":"这是我自己做的小项目，起点是一个很实际的问题：如果明天要和一个小岛屿国家的常驻代表团开双边会，今晚我最想知道什么？",
 "p1.b":"SIDSight 汇集了太平洋、加勒比和 AIS 三个区域的 8 个小岛屿发展中国家，把粮食进口依赖度、农业与渔业、土地资源、气候脆弱性和数字连通性等指标整合成一个便于横向比较和会前准备的简单工具。",
 "p1.nl":"再多说几句",
 "p1.n":"三个页面依次展开：先是跨国比较，再到单一国家简报，最后落到相关的粮农组织项目——从“现状是什么”走向“这场对话可以往哪里去”。",
 "p1.c1":"Power BI",
 "p1.c2":"Python · pandas",
 "p1.c3":"ArcGIS",
 "p1.c4":"GitHub",
 "p1.c5":"世界银行与粮农组织数据",
 "p1.lnk":"代码仓库与方法说明 →",
 "p2.t":"反兴奋剂公约的二十年历程",
 "p2.bg":"已上线",
 "p2.k":"交互式展板 · 2025 年 7–10 月",
 "p2.a":"为 COP10 开发的交互式展板，用关键节点、重点项目、数据与影响，讲述公约二十年的历程。",
 "p2.b":"我担任教科文组织方面的联络人，与印度青年事务和体育部一起，把项目从概念推进到上线。",
 "p2.c":"难点在于把二十年的历史变成一个可交互的叙事，让公约的演进对国际受众来说既好懂又有吸引力。",
 "p2.c1":"内容撰写",
 "p2.c2":"交互设计",
 "p2.c3":"政府合作",
 "p2.c4":"数字传播",
 "p2.lnk":"打开展板 →",
 "p3.t":"公约二十周年",
 "p3.bg":"视频",
 "p3.k":"COP10 短片 · 2025",
 "p3.a":"一支纪念公约二十周年的短片，按时间顺序梳理关键节点。概念、脚本与剪辑均由我完成，把二十年压缩进一个简洁清楚的形式。",
 "p3.b":"在 COP10 开幕式上放映，现场有来自 140 多个国家的 500 余名代表，其中包括 30 多位部长。",
 "p3.c1":"概念与脚本",
 "p3.c2":"视觉叙事",
 "p3.c3":"视频剪辑",
 "p3.c4":"官媒传播",
 "p3.lnk":"观看短片 →",
 "comms.h2":"部分传播作品",
 "comms.intro":"一些我做过的东西——写过、设计过、拍过，或者发布过的。",
 "exp.h2":"工作经历",
 "fold.title":"部分出差记录，2024–2026",
 "fold.hint":"点击展开",
 "fold.note":"把鼠标移到页面顶部地图上的标记，就可以跳转到下方对应的记录；反过来也一样。",
 "bg.h2":"教育、证书与发表的文字",
 "bg.bubble":"理科出身 · 社会科学研究者 · 带着好奇心一路学习",
 "bg.edu":"教育经历",
 "bg.d1":"文学硕士，应用语言学（社会科学）",
 "bg.m1":"北京外国语大学 · 2019–2022",
 "bg.ma":"语言教学与测评、二语习得、话语分析、国际政治、研究设计与量化方法。",
 "bg.d2":"理学学士，生物科学",
 "bg.m2":"鲁东大学 · 2014–2018",
 "bg.bsc":"生态学、生物多样性、植物学、生物统计、生物信息技术与自然保育。",
 "bg.train":"培训与证书",
 "bg.t1":"粮食安全与生计；生物多样性与农业食品体系；区域贸易协定中的农业",
 "bg.t1m":"粮农组织在线学院，2026",
 "bg.t2":"高级中学教师资格证",
 "bg.t2m":"中国教育部，2021",
 "bg.t3":"雅思学术类 — 总分 8.0",
 "bg.t4":"Microsoft Power Platform 基础认证（PL-900）",
 "bg.awards":"奖项",
 "bg.a1":"国家奖学金（前 2%）",
 "bg.a1m":"中国教育部，2020",
 "bg.a2":"特等奖学金；三好学生（2次）",
 "bg.a2m":"北京外国语大学，2021",
 "bg.a3":"优秀论文奖",
 "bg.a3m":"第十四届首都研究生学术论坛，2020",
 "bg.a4":"第十七届全国大学生英语辩论赛 一等奖",
 "bg.pub":"发表",
 "bg.p1":"《中国日报》扶贫报道中的中国国际话语建构",
 "bg.p1m":"《亚太人文与社会科学期刊》，2021",
 "bg.p2":"语音意识对中国儿童英语习得影响的研究综述",
 "bg.p2m":"与陈亚平合著 · 《第二语言学习研究》第 11 卷，2020",
 "bg.p3":"书面纠正性反馈与显性、隐性知识发展的关系",
 "bg.pth":"硕士论文，北京外国语大学，2022",
 "lg1":"中文 — 母语",
 "lg2":"英语 — 雅思 8.0",
 "lg3":"西班牙语 — B2",
 "lg4":"法语 — B1",
 "c.label":"06 — 联系",
 "c.h2":"打个招呼 👋",
 "c.p1":"欢迎来找我聊聊——无论你在国际组织、科技、教育、企业，还是完全不同的领域~🌍",
 "c.p2":"如果有什么让你感兴趣的，或者你只是想打个招呼，欢迎随时邮件联系我。☕",
 "f.left":"互联网上属于我的小角落，还在一点点长大。",
}};

/* 经历 · 三种译文 */
const EXP_T={
es:[
 {role:'Asistente de proyecto — Seguimiento y coordinación de programas',org:'UNESCO, Sector de Ciencias',when:'ene. 2025 – actualidad',where:'París',
  tags:['Seguimiento del cumplimiento','PEID y PMA','Desarrollo de capacidades','Visualización de datos','Gestión del conocimiento'],
  points:['Gestiono el seguimiento del cumplimiento a través del sistema de informes ADLogic de la Convención: reviso informes nacionales, identifico brechas en la implementación y coordino el seguimiento con los Estados Partes a través de ministerios, Misiones Permanentes y altos representantes gubernamentales, con especial atención a los PEID y los PMA.',
   'Apoyé el primer Programa Regional de Desarrollo de Capacidades para los PEID del Pacífico en Brisbane, contribuyendo al diseño y la ejecución del programa, a los materiales de formación y a la coordinación con las partes interesadas de 13 PEID del Pacífico.',
   'Desarrollo materiales de difusión, visualizaciones de datos, paneles de datos interactivos y productos multimedia que traducen los datos de seguimiento y la información técnica en recursos accesibles para la toma de decisiones y la divulgación.',
   'Coordino la participación de más de 50 expertos internacionales, coordinadores regionales y autoridades nacionales en la iniciativa de la UNESCO sobre Farmacopea Tradicional, y contribuí al desarrollo de un repositorio internacional de conocimiento para facilitar el intercambio y la colaboración en investigación.']},
 {role:'Consultora — Seguimiento y coordinación de programas',org:'UNESCO, Sector de Ciencias',when:'jun. – dic. 2024',where:'París',
  tags:['PEID y PMA','Comunicación estratégica','Movilización de recursos','Coordinación de actores internacionales'],
  points:['Analicé los avances de implementación de los Estados Partes y traduje las brechas detectadas en los informes en apoyo específico, con especial atención a los PEID y los PMA, incluyendo asesoramiento técnico, recursos de conocimiento y oportunidades de financiación a través del Fondo contra el Dopaje.',
   'Elaboré notas conceptuales, informes, puntos de intervención, contenido web y materiales visuales para apoyar el diálogo sobre políticas, la visibilidad del programa y la relación con las contrapartes nacionales.',
   'Apoyé la iniciativa mundial de la UNESCO sobre Farmacopea Tradicional y Valores del Deporte, coordinando expertos internacionales, coordinadores regionales y actores nacionales en reuniones del grupo de trabajo y consultas.']},
 {role:'Becaria patrocinada — Investigación, análisis y comunicación',org:'UNESCO, Sector de Ciencias',when:'jun. 2023 – jun. 2024',where:'París',
  tags:['Investigación de políticas','Tecnologías emergentes','Comunicación estratégica','Coordinación con actores clave'],
  points:['Investigué cuestiones emergentes de gobernanza, incluidas la neurotecnología, la inteligencia artificial y la integridad en el deporte, contribuyendo a notas conceptuales y documentos de reunión.',
   'Redacté productos de conocimiento, informes, puntos de intervención y contenido web, y desarrollé materiales visuales para comunicación y divulgación.',
   'Apoyé la preparación y realización de la COP9, incluida la coordinación y la comunicación de la reunión intergubernamental.']},
 {role:'Responsable de programa educativo y comunicación',org:'Lufy Education',when:'abr. 2019 – jun. 2023',where:'Remoto',
  tags:['Diseño de programas','Currículo y evaluación','Estrategia en redes sociales','Analítica de aprendizaje'],
  points:['Cofundé y gestioné un programa en línea de preparación de exámenes, diseñando el currículo, los materiales docentes y los métodos de evaluación.',
   'Dirigí la comunicación y la difusión en tres grandes plataformas sociales (WeChat, Weibo y RedNote), desarrollando contenido digital y herramientas de promoción para hacer crecer la comunidad de estudiantes.',
   'Utilicé la retroalimentación de los estudiantes, estudios de mercado y datos de desempeño para mejorar continuamente el curso y la estrategia de difusión, con más del 60 % de los participantes accediendo a sus programas objetivo.']},
 {role:'Secretaria de dirección',org:'Mercedes-Benz AG, operaciones en Pekín',when:'ago. 2022 – abr. 2023',where:'Pekín',
  tags:['Estudios de mercado','Visualización de datos','Seguimiento de operaciones','Gestión de partes interesadas'],
  points:['Realicé estudios de mercado y análisis de datos, elaborando visualizaciones, informes y presentaciones para la toma de decisiones a nivel de dirección.',
   'Coordiné equipos internos y proveedores externos, hice seguimiento de las operaciones en los almacenes de Mercedes-Benz en China y dirigí la realización de un concurso nacional de competencias.']},
 {role:'Gestora de producto (prácticas)',org:'JD.com',when:'ene. – may. 2022',where:'Pekín',
  tags:['Coordinación técnica','Comunicación entre equipos','Diseño de soluciones','Gestión de partes interesadas'],
  points:['Apoyé el análisis de requisitos y el diseño de soluciones técnicas para una plataforma internacional.',
   'Coordiné la implementación entre equipos internos y proveedores externos y mantuve los seguimientos y materiales de orientación del proyecto.']},
 {role:'Intérprete chino–inglés (a tiempo parcial)',org:'Embajada de la República Eslovaca en China',when:'sept. 2022',where:'Pekín',
  tags:['Interpretación','Comunicación diplomática','Enlace bilateral'],
  points:['Interpretación consecutiva en una reunión bilateral en una misión diplomática.']}],
fr:[
 {role:'Assistante de projet — Suivi et coordination de programmes',org:'UNESCO, Secteur des sciences',when:'janv. 2025 – aujourd’hui',where:'Paris',
  tags:['Suivi de la conformité','PEID et PMA','Renforcement des capacités','Visualisation de données','Gestion des connaissances'],
  points:['Je gère le suivi de la conformité via le système de rapports ADLogic de la Convention : examen des rapports nationaux, identification des écarts de mise en œuvre et coordination du suivi avec les États parties auprès des ministères, des Missions permanentes et de hauts représentants gouvernementaux, avec une attention particulière aux PEID et aux PMA.',
   'J’ai appuyé le premier programme régional de renforcement des capacités pour les PEID du Pacifique à Brisbane, en contribuant à la conception et à la mise en œuvre du programme, aux supports de formation et à la coordination avec les parties prenantes de 13 PEID du Pacifique.',
   'Je développe des supports de diffusion, des visualisations de données, des tableaux de bord interactifs et des produits multimédias qui traduisent les données de suivi et l’information technique en ressources accessibles pour la décision et la sensibilisation.',
   'Je coordonne la participation de plus de 50 experts internationaux, coordonnateurs régionaux et autorités nationales dans le cadre de l’initiative de l’UNESCO sur la pharmacopée traditionnelle, et j’ai contribué à la création d’un répertoire international de connaissances destiné à faciliter les échanges et la collaboration en recherche.']},
 {role:'Consultante — Suivi et coordination de programmes',org:'UNESCO, Secteur des sciences',when:'juin – déc. 2024',where:'Paris',
  tags:['PEID et PMA','Communication stratégique','Mobilisation de ressources','Coordination d’acteurs internationaux'],
  points:['J’ai analysé l’état d’avancement de la mise en œuvre par les États parties et traduit les écarts identifiés dans les rapports en appuis ciblés, avec une attention particulière aux PEID et aux PMA : conseils techniques, ressources de connaissance et possibilités de financement via le Fonds contre le dopage.',
   'J’ai rédigé des notes conceptuelles, des notes d’information, des éléments de langage, des contenus web et des supports visuels pour appuyer le dialogue sur les politiques, la visibilité du programme et les échanges avec les homologues nationaux.',
   'J’ai appuyé l’initiative mondiale de l’UNESCO sur la pharmacopée traditionnelle et les valeurs du sport, en coordonnant experts internationaux, coordonnateurs régionaux et acteurs nationaux lors des réunions du groupe de travail et des consultations.']},
 {role:'Stagiaire boursière — Recherche, analyse et communication',org:'UNESCO, Secteur des sciences',when:'juin 2023 – juin 2024',where:'Paris',
  tags:['Recherche sur les politiques','Technologies émergentes','Communication stratégique','Coordination avec les acteurs clés'],
  points:['J’ai étudié des enjeux émergents de gouvernance — neurotechnologies, intelligence artificielle et intégrité dans le sport — en contribuant à des notes conceptuelles et à des documents de réunion.',
   'J’ai rédigé des produits de connaissance, des notes d’information, des éléments de langage et des contenus web, et conçu des supports visuels pour la communication et la sensibilisation.',
   'J’ai appuyé la préparation et la tenue de la COP9, notamment la coordination et la communication de cette réunion intergouvernementale.']},
 {role:'Responsable de programme éducatif et communication',org:'Lufy Education',when:'avr. 2019 – juin 2023',where:'À distance',
  tags:['Conception de programmes','Programme et évaluation','Stratégie sur les réseaux sociaux','Analyse des apprentissages'],
  points:['J’ai cofondé et dirigé un programme en ligne de préparation aux examens, en concevant le programme, les supports pédagogiques et les méthodes d’évaluation.',
   'J’ai piloté la communication et la diffusion sur trois grandes plateformes sociales (WeChat, Weibo et RedNote), en développant contenus et outils de promotion pour faire grandir la communauté d’apprenants.',
   'J’ai utilisé les retours des apprenants, des études de marché et les données de performance pour affiner en continu le cours et la stratégie de diffusion : plus de 60 % des participants ont intégré le programme visé.']},
 {role:'Secrétaire de direction',org:'Mercedes-Benz AG, opérations de Pékin',when:'août 2022 – avr. 2023',where:'Pékin',
  tags:['Études de marché','Visualisation de données','Suivi des opérations','Gestion des parties prenantes'],
  points:['J’ai mené des études de marché et des analyses de données, en produisant visualisations, rapports et présentations pour la prise de décision au niveau de la direction.',
   'J’ai coordonné équipes internes et prestataires externes, suivi les opérations des entrepôts Mercedes-Benz en Chine et piloté l’organisation d’un concours national de compétences.']},
 {role:'Cheffe de produit (stage)',org:'JD.com',when:'janv. – mai 2022',where:'Pékin',
  tags:['Coordination technique','Communication inter-équipes','Conception de solutions','Gestion des parties prenantes'],
  points:['J’ai appuyé l’analyse des besoins et la conception de solutions techniques pour une plateforme internationale.',
   'J’ai coordonné la mise en œuvre entre équipes internes et prestataires externes et tenu à jour les outils de suivi et les guides du projet.']},
 {role:'Interprète chinois–anglais (à temps partiel)',org:'Ambassade de la République slovaque en Chine',when:'sept. 2022',where:'Pékin',
  tags:['Interprétation','Communication diplomatique','Liaison bilatérale'],
  points:['Interprétation consécutive lors d’une réunion bilatérale au sein d’une mission diplomatique.']}],
zh:[
 {role:"项目助理 — 监测与项目协调",org:"联合国教科文组织 科学部门",when:"2025年1月 – 至今",where:"巴黎",
  tags:["履约监测","小岛屿国家与最不发达国家","能力建设","数据可视化","知识管理"],
  points:["通过公约的 ADLogic 报告系统管理履约监测：审阅各国国家报告、识别履约缺口，并通过各国部委、常驻代表团和政府高级代表开展后续跟进，其中对小岛屿发展中国家和最不发达国家给予特别关注。",
   "参与支持公约首个面向太平洋小岛屿国家的区域能力建设项目（布里斯班），参与项目设计与交付、培训材料开发，并负责与来自 13 个太平洋小岛屿国家代表的对接协调。",
   "制作宣传材料、数据可视化、交互式仪表盘和多媒体产品，把监测数据和技术信息转化为便于决策与传播的可用资源。",
   "在教科文组织传统药典倡议下，协调 50 余位国际专家、区域协调员和国家主管部门的参与，并参与推动建立国际知识库平台，促进研究交流与合作。"]},
 {role:"顾问 — 监测与项目协调",org:"联合国教科文组织 科学部门",when:"2024年6–12月",where:"巴黎",
  tags:["小岛屿国家与最不发达国家","政策传播","资源筹措","全球利益相关方协调"],
  points:["分析缔约国履约进展，把国家报告中发现的缺口转化为有针对性的支持，其中对小岛屿发展中国家和最不发达国家给予特别关注，包括技术咨询、知识资源以及通过反兴奋剂基金提供的资助机会。",
   "撰写概念说明、简报、发言要点、网页内容和视觉材料，支持政策对话、项目可见度以及与各国对口单位的沟通。",
   "支持教科文组织关于传统药典与体育价值观的全球倡议，在工作组会议和磋商中协调国际专家、区域协调员与各国利益相关方。"]},
 {role:"公派实习 — 研究、分析与传播",org:"联合国教科文组织 科学部门",when:"2023年6月 – 2024年6月",where:"巴黎",
  tags:["政策研究","新兴技术","战略传播","利益相关方联络"],
  points:["研究新兴治理议题，包括神经技术、人工智能与体育诚信，并参与撰写概念说明和会议文件。",
   "起草知识产品、简报、发言要点和网页内容，并制作用于传播与推广的视觉材料。",
   "参与第九届缔约方大会（COP9）的筹备与实施，包括该政府间会议的协调与传播工作。"]},
 {role:"教育项目与传播主管",org:"鹿飞考研英语",when:"2019年4月 – 2023年6月",where:"远程",
  tags:["项目设计","课程与测评","社交媒体策略","学习数据分析"],
  points:["联合创办并运营一个线上考试备考项目，负责课程体系、教学材料与测评方法的设计。",
   "主导三大社交平台（微信公众号、微博、小红书）的传播与推广，开发数字内容与推广工具，扩大并维系学习者社群。",
   "依据学员反馈、市场调研与表现数据持续优化课程与推广策略，超过 60% 的学员进入了目标院校。"]},
 {role:"总监秘书",org:"梅赛德斯-奔驰 北京",when:"2022年8月 – 2023年4月",where:"北京",
  tags:["市场调研","数据可视化","运营监测","跨方协调"],
  points:["开展市场调研与数据分析，制作可视化图表、报告与演示材料，支持总监层面的决策。",
   "协调内部团队与外部供应商，监测奔驰在中国各地仓库的运营情况，并主导一项全国性技能竞赛的落地。"]},
 {role:"产品经理（实习）",org:"京东",when:"2022年1–5月",where:"北京",
  tags:["技术协调","跨团队沟通","方案设计","干系人管理"],
  points:["参与国际平台的需求分析与技术方案设计。",
   "协调内部团队与外部供应商推进实施，并维护项目进度表与操作指引。"]},
 {role:"中英交替传译（兼职）",org:"斯洛伐克共和国驻华大使馆",when:"2022年9月",where:"北京",
  tags:["口译","外交沟通","双边联络"],
  points:["为一场在外交使团举行的双边会议提供交替传译。"]}]};

/* 出差 · 三种译文 */
const MIS_T={
es:{budapest:{when:"mayo de 2026",event:'Taller de investigación multiactor (TALE)',body:'Representé a la UNESCO en un taller multiactor que reunió a investigadores y actores de la integridad en el deporte. Aporté una perspectiva de políticas y gobernanza a las discusiones sobre investigación emergente en protección de deportistas e integridad.'},
 antalya:{when:"febrero de 2025",event:'Mesa de la COP9 y Comité de Aprobación del Fondo',body:'Dos reuniones estatutarias consecutivas, en las que revisamos nueve solicitudes de proyecto, incluidas propuestas de PEID y PMA, y discutimos prioridades y preparativos hacia la COP10.'},
 riyadh:{when:"diciembre de 2024",event:'Reuniones estatutarias y consulta de la Mesa de la COP9',body:'Apoyé intercambios de alto nivel entre la UNESCO, gobiernos y organizaciones asociadas, incluidas consultas sobre las prioridades de la Convención y sobre cómo involucrar a los Estados Miembros y a otros actores en las discusiones de gobernanza y reforma.'},
 olympia:{when:"noviembre de 2024",event:'Asamblea General de una federación internacional',body:'Trabajo exploratorio de alianzas en torno a las carreras de camellos y la integridad en el deporte: identificación de brechas de gobernanza entre federaciones regionales, discusión sobre dónde podría aportar la experiencia de la UNESCO y exploración de una vía hacia orientación específica y cooperación a más largo plazo.'},
 cannes:{when:"febrero de 2024",event:'Simposio de investigación y Conferencia Mundial de Educación',body:'Junto a las discusiones de investigación y educación de la AMA, mi colega Camila y yo dialogamos con contrapartes de la organización regional del Caribe (RADO) y de Nueva Zelanda sobre necesidades de desarrollo de capacidades en los estados insulares, seguimiento del cumplimiento y oportunidades de apoyo a través del Fondo.'}},
fr:{budapest:{when:"mai 2026",event:'Atelier de recherche multi-acteurs (TALE)',body:'J’ai représenté l’UNESCO lors d’un atelier réunissant chercheurs et acteurs de l’intégrité dans le sport, en apportant un regard politique et de gouvernance aux discussions sur les recherches émergentes en matière de protection des athlètes et d’intégrité.'},
 antalya:{when:"février 2025",event:'Bureau de la COP9 et Comité d’approbation du Fonds',body:'Deux réunions statutaires consécutives, au cours desquelles nous avons examiné neuf demandes de projet, dont des propositions de PEID et de PMA, et discuté des priorités et des préparatifs en vue de la COP10.'},
 riyadh:{when:"décembre 2024",event:'Réunions statutaires et consultation du Bureau de la COP9',body:'J’ai appuyé des échanges de haut niveau entre l’UNESCO, des gouvernements et des organisations partenaires, y compris des consultations sur les priorités de la Convention et sur la manière d’associer les États membres et d’autres acteurs aux discussions sur la gouvernance et la réforme.'},
 olympia:{when:"novembre 2024",event:'Assemblée générale d’une fédération internationale',body:'Travail exploratoire de partenariat autour des courses de chameaux et de l’intégrité dans le sport : identification des lacunes de gouvernance entre fédérations régionales, discussion sur l’apport possible de l’expertise de l’UNESCO et exploration d’une voie vers des orientations adaptées et une coopération à plus long terme.'},
 cannes:{when:"février 2024",event:'Symposium de recherche et Conférence mondiale sur l’éducation',body:'En marge des discussions de l’AMA sur la recherche et l’éducation, ma collègue Camila et moi avons échangé avec des homologues de l’organisation régionale des Caraïbes (RADO) et de Nouvelle-Zélande sur les besoins de renforcement des capacités dans les États insulaires, le suivi de la conformité et les possibilités d’appui via le Fonds.'}},
zh:{budapest:{when:"2026年5月",event:"多方参与研究工作坊（TALE）",body:"代表教科文组织参加一场汇集研究人员与体育诚信领域各方的多方工作坊，就运动员保护与体育诚信方面的新兴研究，提供政策与治理层面的视角。"},
 antalya:{when:"2025年2月",event:"COP9 主席团与基金审批委员会",body:"连续两场法定会议，审议了九份项目申请（其中包括来自小岛屿发展中国家和最不发达国家的提案），并讨论了面向 COP10 的优先事项与筹备工作。"},
 riyadh:{when:"2024年12月",event:"法定会议与 COP9 主席团磋商",body:"支持教科文组织、各国政府与伙伴机构之间的高级别交流，包括就公约优先事项、以及如何让会员国和其他相关方参与治理与改革讨论进行磋商。"},
 olympia:{when:"2024年11月",event:"某国际联合会大会",body:"围绕骆驼赛与体育诚信开展的探索性伙伴关系工作：梳理各区域联合会的治理缺口，讨论教科文组织的专业经验可以在哪些方面发挥作用，并探索走向定制化指导与长期合作的可能路径。"},
 cannes:{when:"2024年2月",event:"研究研讨会与全球教育大会",body:"在世界反兴奋剂机构的研究与教育讨论之外，我和同事 Camila 与加勒比区域组织（RADO）及新西兰的参会方就岛屿国家的能力建设需求、履约跟进以及基金会支持等方面进行了交流。"}}};

const COMMS_T={
 es:['Escritos','Campañas y narrativa','Visual','Plataformas','Vídeo y multimedia','Redes sociales','Publicación'],
 fr:['Écrits','Campagnes et récits','Visuel','Plateformes','Vidéo et multimédia','Réseaux sociaux','Publication'],
 zh:["文字","传播活动与叙事","视觉","平台","视频与多媒体","社交媒体","发表"]};


/* 传播产出 · 逐条译文（顺序与 COMMS 一致）*/
const CITEMS_T={
es:[
 ['Notas conceptuales','Notas informativas','Puntos de intervención','Contenido web','Boletines','Materiales de desarrollo de capacidades','Recursos de conocimiento'],
 ['Campaña de visibilidad del 20.º aniversario (COP10)','Recopilación, visualización y narrativa de datos de impacto','Serie de entrevistas a actores clave (concepto, edición)'],
 ['Infografías','Folletos y dípticos de impacto','Publicaciones digitales','Carteles de eventos','Fondos para eventos','Logotipos','Certificados','Distintivos','Presentaciones','Cuestionarios en Mentimeter'],
 ['Tablero interactivo de narrativa para la COP10','Paneles de visualización de datos','Gestión de páginas web de la UNESCO (Drupal)','Gestión de la plataforma de seguimiento ADLogic'],
 ['Vídeo del aniversario de la COP10 (concepto, guion, edición)','Campaña de visibilidad del 20.º aniversario (COP10)','Tutoriales en vídeo multilingües','Vídeos de momentos destacados de las COP (coedición)'],
 ['Contenido institucional en redes sociales (LinkedIn, YouTube)','Estrategia y contenido multiplataforma en WeChat, Weibo y RedNote'],
 ['Artículo académico publicado sobre análisis del discurso mediático (Zhou, 2021)']],
fr:[
 ['Notes conceptuelles','Notes d’information','Éléments de langage','Contenus web','Lettres d’information','Supports de renforcement des capacités','Ressources de connaissance'],
 ['Campagne de visibilité du 20e anniversaire (COP10)','Collecte, visualisation et mise en récit des données d’impact','Série d’entretiens avec les parties prenantes (concept, montage)'],
 ['Infographies','Dépliants et brochures d’impact','Publications numériques','Affiches d’événements','Fonds visuels d’événements','Logos','Certificats','Badges','Présentations','Quiz Mentimeter'],
 ['Tableau interactif narratif pour la COP10','Tableaux de bord de visualisation','Gestion des pages web de l’UNESCO (Drupal)','Gestion de la plateforme de suivi ADLogic'],
 ['Vidéo anniversaire de la COP10 (concept, scénario, montage)','Campagne de visibilité du 20e anniversaire (COP10)','Tutoriels vidéo multilingues','Vidéos des temps forts des COP (co-montage)'],
 ['Contenus institutionnels sur les réseaux sociaux (LinkedIn, YouTube)','Stratégie et contenus multiplateformes sur WeChat, Weibo et RedNote'],
 ['Article académique publié sur l’analyse du discours médiatique (Zhou, 2021)']],
zh:[
 ["概念说明","简报","发言要点","网页内容","新闻稿","能力建设材料","知识资源"],
 ["COP10 二十周年宣传活动","影响力数据的收集、可视化与叙事","利益相关方访谈系列（策划、剪辑）"],
 ["信息页","折页与传单","数字出版物","活动海报","活动背景板","标识设计","证书","标志设计","演示文稿","Mentimeter 互动问答"],
 ["COP10 交互式叙事展板","数据可视化仪表盘","教科文组织网页维护（Drupal）","ADLogic 监测平台管理"],
 ["COP10 周年短片（概念、脚本、剪辑）","COP10 二十周年宣传活动","多语种视频教程","缔约方大会精彩集锦（联合剪辑）"],
 ["官方社交媒体内容（LinkedIn、YouTube）","微信、微博、小红书多平台策略与内容"],
 ["已发表的媒体话语分析学术论文（Zhou, 2021）"]]};

const READ_LABEL={en:'Reading',es:'Detalle',fr:'Aperçu',zh:'详情'};
const READ_HINT={
 en:'Explore the map by hovering over a marker, starting the tour, or scrolling down to the mission notes below.',
 es:'Explora el mapa pasando el cursor sobre un marcador, iniciando el recorrido o desplazándote hasta las notas de misión.',
 fr:'Explorez la carte en survolant un marqueur, en lançant la visite ou en faisant défiler jusqu’aux notes de mission.',
 zh:'把鼠标移到标记上、点击自动巡览，或向下滚动查看出差记录。'};
const SIDS_NOTE={
 en:'One of the SIDS supported through the Convention during this biennium. Eight of these countries are also featured in the SIDSight dashboard.',
 es:'Uno de los PEID acompañados a través de la Convención en este bienio. Ocho de estos países también aparecen en el panel SIDSight.',
 fr:'L’un des PEID accompagnés au titre de la Convention pendant cet exercice biennal. Huit de ces pays figurent également dans le tableau de bord SIDSight.',
 zh:"本两年期内通过公约援助的小岛屿发展中国家之一；其中的8个国家也出现在 SIDSight 仪表盘中。"};
const PARIS_NOTE={
 en:'UNESCO Headquarters — where most of this work happens.',
 es:'Sede de la UNESCO — donde ocurre la mayor parte de este trabajo.',
 fr:'Siège de l’UNESCO — là où se fait l’essentiel de ce travail.',
 zh:"联合国教科文组织总部——大部分工作都在这里发生。"};
const TOUR_LABEL={en:'▶ Play tour',es:'▶ Ver recorrido',fr:'▶ Lancer la visite',zh:"▶ 自动浏览"};
const STOP_LABEL={en:'■ Stop',es:'■ Detener',fr:'■ Arrêter',zh:"■ 停止"};

function applyLang(l){
  lang=l;
  document.documentElement.lang = l;
  const dict = T[l] || null;
  document.querySelectorAll('[data-t]').forEach(el=>{
    const k=el.dataset.t;
    if(EN_CACHE[k]===undefined) EN_CACHE[k]=el.innerHTML;
    el.innerHTML = (dict && dict[k]) ? dict[k] : EN_CACHE[k];
  });
  document.querySelectorAll('.lg').forEach(b=>b.classList.toggle('on', b.dataset.lang===l));
  renderExp(); renderMissions(); renderComms();
  const tb=document.getElementById('tour');
  if(tb && !touring) tb.textContent = TOUR_LABEL[l]||TOUR_LABEL.en;
  reset();
}




/* ═══ 数据 ═══ 出差按时间先后排列 */
const BASE=[48.8566,2.3522], SEA='#1D5A61', CLAY='#B0532C';

const MISSIONS=[
 {id:'budapest',city:'Budapest',country:'Hungary',coords:[47.4979,19.0402],when:'May 2026',
  event:'Multi-stakeholder Research Workshop (TALE)',
  body:'Represented UNESCO in a multi-stakeholder workshop bringing together researchers and sport-integrity stakeholders. I contributed a policy and governance perspective to discussions on emerging research around athlete safeguarding and integrity in sport.'},
 {id:'antalya',city:'Antalya',country:'Türkiye',coords:[36.8969,30.7133],when:'February 2025',
  event:'COP9 Bureau and Fund Approval Committee',
  body:'Two statutory meetings back to back, during which we went through nine project applications including proposals from SIDS and LDCs, and discussions on priorities and preparations leading towards COP10.'},
 {id:'riyadh',city:'Riyadh',country:'Saudi Arabia',coords:[24.7136,46.6753],when:'December 2024',
  event:'Statutory Meetings and COP9 Bureau Consultation',
  body:'Supported high-level exchanges between UNESCO, governments and partner organizations, including consultations on the Convention’s priorities and how Member States and other stakeholders could be engaged in the evolving governance and reform discussions.'},
 {id:'olympia',city:'Olympia',country:'Greece',coords:[37.6386,21.63],when:'November 2024',
  event:'International Federation General Assembly',
  body:'Exploratory partnership work around camel-racing and sport integrity: identifying governance gaps across regional federations, discussing where UNESCO expertise could add value, and exploring a possible pathway towards tailored guidance and longer-term cooperation.'},
 {id:'cannes',city:'Cannes &amp; Nice',country:'France',coords:[43.5528,7.0174],when:'February 2024',
  event:'Research Symposium and Global Education Conference',
  body:'Alongside WADA research and education discussions, my colleague Camila and I engaged with counterparts from the Caribbean regional organization (RADO) and New Zealand on capacity-building needs in SIDS, compliance follow-up and opportunities for support through the Anti-Doping Fund.'},
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
 {role:'Project Assistant — Monitoring &amp; Programme Coordination',org:'UNESCO, Sciences Sector',when:'Jan 2025 – present',where:'Paris',
  tags:['Compliance monitoring','SIDS &amp; LDCs','Capacity-building','Data visualisation','Knowledge management'],
  points:[
   'Manage compliance monitoring through the Convention’s ADLogic reporting system, reviewing national reports, identifying implementation gaps and coordinating follow-up with States Parties through ministries, Permanent Missions and senior government representatives, with particular engagement across SIDS and LDCs.',
   'Supported the Convention’s first Regional Capacity-Building Programme for Pacific SIDS in Brisbane, contributing to programme design and delivery, training resources and stakeholder liaison for representatives from 13 Pacific SIDS.',
   'Develop outreach materials, data visualisations, interactive dashboards and multimedia products that translate monitoring data and technical information into accessible resources for decision-making and outreach.',
   'Coordinate engagement with 50+ international experts, regional coordinators and national authorities under UNESCO’s Traditional Pharmacopoeia initiative, and contributed to developing an international knowledge repository to facilitate research exchange and collaboration.',
  ]},
 {role:'Consultant — Monitoring &amp; Programme Coordination',org:'UNESCO, Sciences Sector',when:'Jun – Dec 2024',where:'Paris',
  tags:['SIDS &amp; LDCs','Policy communications','Resource mobilisation','Global stakeholder coordination'],
  points:[
   'Analysed States Parties’ implementation progress and translated reporting gaps into tailored support, with particular attention to SIDS and LDCs, including technical advice, knowledge resources and funding opportunities through the Anti-Doping Fund.',
   'Developed concept notes, briefings, talking points, web content and visual materials to support policy dialogue, programme visibility and engagement with national counterparts.',
   'Supported UNESCO’s global initiative on Traditional Pharmacopoeia and Sport Values, coordinating international experts, regional coordinators and national stakeholders across task force meetings and consultations.',
  ]},
 {role:'Sponsored Trainee — Research, Analysis &amp; Communications',org:'UNESCO, Sciences Sector',when:'Jun 2023 – Jun 2024',where:'Paris',
  tags:['Policy research','Emerging technologies','Strategic communications','Stakeholder liaison'],
  points:[
   'Researched emerging governance issues including neurotechnology, artificial intelligence and integrity in sport, contributing to the development of concept notes and meeting documents.',
   'Drafted knowledge products, briefings, talking points and web content, and developed visual materials for communications and outreach.',
   'Supported the preparation and delivery of COP9, including coordination and communications for the intergovernmental meeting.',
  ]},
 {role:'Education Programme &amp; Communications Officer',org:'Lufy Education',when:'Apr 2019 – Jun 2023',where:'Remote',
  tags:['Programme design','Curriculum &amp; assessment','Social media strategy','Learner analytics'],
  points:[
   'Co-founded and managed an online exam-preparation programme, designing curricula, teaching materials and assessment methods.',
   'Led the communications and outreach portfolio across three major social media platforms (WeChat Official Account, Weibo, RedNote), developing digital content and promotional tools to grow and engage the learner community.',
   'Used learner feedback, market research and performance data to continuously refine course and outreach strategy, with over 60% of participants progressing to their target programmes.',
  ]},
 {role:'Secretary to Director',org:'Mercedes-Benz AG',when:'Aug 2022 – Apr 2023',where:'Beijing',
  tags:['Market research','Data visualisation','Operations monitoring','Stakeholder coordination'],
  points:[
   'Conducted market research and data analysis, developing data visualisations, reports and presentations for the director-level decision-making.',
   'Coordinated across internal teams and external vendors, monitored operations across Mercedes-Benz warehouses in China, and led the delivery of a nation-wide skills competition.',
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

/* ═══ 地图 ═══ */
const map=L.map('map',{center:[22,44],zoom:2.2,zoomSnap:.2,scrollWheelZoom:false,
  zoomControl:false,worldCopyJump:true});
L.control.zoom({position:'bottomleft'}).addTo(map);
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png',
  {attribution:'© OpenStreetMap · © CARTO',subdomains:'abcd',maxZoom:18}).addTo(map);

const grat=L.layerGroup().addTo(map);
for(let lat=-60;lat<=75;lat+=30)
  L.polyline([[lat,-180],[lat,180]],{color:SEA,opacity:.09,weight:.6,interactive:false}).addTo(grat);
for(let lng=-180;lng<=180;lng+=30)
  L.polyline([[-70,lng],[80,lng]],{color:SEA,opacity:.09,weight:.6,interactive:false}).addTo(grat);

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
  const tr=()=>{const t=MIS_T[lang]; return (t&&t[m.id])?Object.assign({},m,t[m.id]):m;};
  mk.on('mouseover',()=>{const x=tr();show(`${m.city}, ${m.country}`,x.when,x.event,false);lightUp(m.id,true);});
  mk.on('mouseout',()=>{lightUp(m.id,false);if(!touring)reset();});
  mk.on('click',()=>{const x=tr();map.flyTo(m.coords,4,{duration:1});show(`${m.city}, ${m.country}`,x.when,x.body,false);
    rowOf[m.id]&&rowOf[m.id].scrollIntoView({behavior:'smooth',block:'center'});});
});
L.marker(BASE,{icon:icon('#16191B',20,'Paris')}).addTo(groups.mission)
  .on('mouseover',()=>show('Paris','Duty station',(PARIS_NOTE[lang]||PARIS_NOTE.en),false))
  .on('mouseout',()=>{if(!touring)reset();});

SIDS.forEach(s=>{
  const mk=L.marker(s.coords,{icon:icon(SEA,24,s.name)}).addTo(groups.sids);
  mk.on('mouseover',()=>show(s.name,s.region+' region',
    (SIDS_NOTE[lang]||SIDS_NOTE.en),true));
  mk.on('mouseout',()=>{if(!touring)reset();});
  mk.on('click',()=>map.flyTo(s.coords,4.5,{duration:1}));
});

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
  reset();map.flyTo([22,44],2.2,{duration:1.1});}
function stepTour(){
  MISSIONS.forEach(m=>lightUp(m.id,false));
  const m=MISSIONS[tourIdx%MISSIONS.length];
  const t0=MIS_T[lang]; const x=(t0&&t0[m.id])?Object.assign({},m,t0[m.id]):m;
  map.flyTo(m.coords,4,{duration:1.4});
  show(`${m.city}, ${m.country}`,x.when,x.body,false);
  lightUp(m.id,true);
  tourIdx++;
  tourTimer=setTimeout(()=>{if(touring){tourIdx%MISSIONS.length===0?stopTour():stepTour();}},4200);
}
tourBtn.addEventListener('click',()=>{
  if(touring){stopTour();return;}
  touring=true;tourIdx=0;tourBtn.classList.add('running');tourBtn.textContent=STOP_LABEL[lang]||STOP_LABEL.en;stepTour();
});

/* ═══ 列表 ═══ */
function renderExp(){
  const exp=document.getElementById('exp'); if(!exp) return;
  const src = (EXP_T[lang]) ? EXP_T[lang] : EXPERIENCE;
  exp.innerHTML='';
  src.forEach(e=>{
    const d=document.createElement('div'); d.className='entry rev in';
    d.innerHTML=`<div class="entry-head"><div><h4>${e.role}</h4>
      <div class="org">${e.org} · ${e.where}</div></div>
      <div class="entry-when">${e.when}</div></div>
      <ul>${e.points.map(p=>`<li>${p}</li>`).join('')}</ul>
      <div class="etags">${(e.tags||[]).map(t=>`<span class="etag">${t}</span>`).join('')}</div>`;
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
      <div class="place">${m.city}, ${m.country}</div>
      <p>${tr.body}</p>`;
    d.addEventListener('mouseenter',()=>{if(touring)stopTour();
      map.flyTo(m.coords,3.6,{duration:1});
      show(`${m.city}, ${m.country}`,tr.when,tr.event,false);lightUp(m.id,true);});
    d.addEventListener('mouseleave',()=>lightUp(m.id,false));
    rowOf[m.id]=d;
    ml.appendChild(d);
  });
}
renderMissions();



/* ═══ Communications outputs ═══ 改内容只动这个数组 */
const COMMS=[
 {cat:'Written', items:['Concept notes','Briefing notes','Talking points','Web content','Newsletters','Capacity-building materials','Knowledge resources']},
 {cat:'Campaigns &amp; storytelling', items:['COP10 20th-anniversary visibility campaign','Impact data collection, visualisation and storytelling','Stakeholder interview series (concept, editing)']},
 {cat:'Visual', items:['Infographics','Impact flyers and leaflets','Digital publications','Event posters','Event backgrounds','Logos','Certificates','Badges','Presentation decks','Mentimeter quizzes']},
 {cat:'Platforms', items:['Interactive storytelling board for COP10','Data visualisation dashboards','UNESCO webpage management (Drupal)','ADLogic monitoring platform management']},
 {cat:'Video &amp; multimedia', items:['COP10 anniversary video (concept, script, editing)','COP10 20th-anniversary visibility campaign','Multilingual video tutorials','COP highlights videos (co-editing)']},
 {cat:'Social media channels', items:['Institutional social media content (LinkedIn, YouTube)','Multi-platform strategy and content across WeChat, Weibo and RedNote']},
 {cat:'Publication', items:['Published academic paper on media discourse analysis (Zhou, 2021)']},
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

/* ═══ 交互 ═══ */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),
  {threshold:.1,rootMargin:'0px 0px -30px 0px'});
document.querySelectorAll('.rev').forEach((el,i)=>{el.style.transitionDelay=(Math.min(i,5)*.05)+'s';io.observe(el)});

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

const toMap=document.querySelector('a.jump');
if(toMap) toMap.addEventListener('click',()=>{
  const fr=document.querySelector('.map-frame');
  setTimeout(()=>{fr.classList.add('pulse');setTimeout(()=>fr.classList.remove('pulse'),2500);},700);
});

(function(){
  const saved=(()=>{try{return localStorage.getItem('yz-lang')}catch(e){return null}})();
  if(saved && saved!=='en') applyLang(saved);
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
    if(h&&d&&d.count) h.textContent=`${d.count} visits`;})
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
