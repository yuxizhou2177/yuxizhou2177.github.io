/* ═══════════════════════════════════════════════════════════════
   多语言 · EN / ES / FR / 中文
   想改译文只动这个区块。
   注：出版物标题、机构名、软件名保留原文，不翻译。
   ═══════════════════════════════════════════════════════════════ */
var lang='en';
const EN_CACHE={};

const T={
es:{
 'nav.about':'Sobre mí','nav.project':'Trabajo seleccionado','nav.policy':'Política y PEID','nav.exp':'Experiencia','nav.bg':'Formación',
 'mp.1':'Evidencia','mp.1d':'Información técnica o de nivel país',
 'mp.2':'Audiencia','mp.2d':'Alta dirección · Estados Miembros · público',
 'mp.3':'Relato','mp.3d':'Editorial · visual · digital',
 'mp.4':'Acción','mp.4d':'Comprender · involucrarse · dar seguimiento',
 'mast.tiny':'París · UNESCO','mast.hi':'Hola, soy',
 'mast.pill1':'Seguimiento y desarrollo de capacidades','mast.pill2':'Visualización de datos y comunicación',
 'mast.line':"Este es mi pequeño rincón en internet — un espacio para compartir trabajo seleccionado, los lugares a los que me lleva, y las historias que voy construyendo por el camino.",
 'map.label':'Adónde me lleva mi trabajo','map.tour':'▶ Ver recorrido','map.fmis':'Misiones','map.fsids':'PEID acompañados',
 'map.sub':'Misiones seleccionadas (2024–2026) en comunicación y diálogo de políticas — junto con los PEID acompañados mediante monitoreo en este bienio.',
 'map.cap':'Misiones seleccionadas, 2024–2026 · Capa de PEID: países acompañados mediante seguimiento y monitoreo en el Pacífico, el Caribe y la región AIS.',
 'tool.label':'Herramientas seleccionadas',
 'sec.about':'Sobre mí','sec.project':'Trabajo seleccionado','sec.policy':'Política y PEID','sec.exp':'Experiencia','sec.bg':'Formación',
 'about.h2':'Convierto el contenido técnico en comunicación.',
 'about.p1':'En la UNESCO, en París, mi trabajo abarca el seguimiento de los Estados Miembros en el marco de la Convención Internacional contra el Dopaje en el Deporte, junto con la coordinación de una iniciativa mundial sobre Farmacopea Tradicional. La comunicación atraviesa ambas líneas de trabajo: elaboro notas informativas, artículos, contenido web, materiales visuales y productos digitales para la alta dirección, los Estados Miembros y audiencias internacionales.',
 'about.p2':'Mi fortaleza está en moverme entre el contenido técnico y la comunicación: entender información técnica o de nivel país, identificar qué es relevante para la audiencia, y convertirlo en contenido claro, productos de conocimiento útiles y seguimiento práctico.',
 'about.bubble':'Disfruto convirtiendo información compleja en comunicación clara y útil: encontrando el ángulo correcto, dando forma al mensaje y adaptándolo a la audiencia.',
 'comms.h2':'Productos de comunicación seleccionados',
 'comms.intro':'Lo que he producido: escrito, visual, filmado y publicado.',
 'exp.h2':'Trayectoria seleccionada','fold.title':'Misiones seleccionadas, 2024–2026','fold.hint':'Haz clic para desplegar',
 'fold.exptitle':'Todas las experiencias',
 'cr.title':'Asistente de proyecto · UNESCO','cr.when':'París · ene. 2025 – actualidad',
 'cr.summary':'Seguimiento de Estados Miembros · comunicación institucional · coordinación científico-política · divulgación internacional',
 'fold.note':'Pasa el cursor sobre un marcador en el mapa del inicio de la página para destacar la nota correspondiente aquí abajo, y al revés.',
 'bg.h2':'Formación y aprendizaje',
 'bg.bubble':'Formación científica · Investigadora en ciencias sociales · Curiosa y siempre aprendiendo',
 'bg.edu':'Formación académica','bg.train':'Formación y certificaciones seleccionadas','bg.awards':'Reconocimientos','bg.pub':'Investigación y publicaciones seleccionadas',
 'bg.ma':'Enseñanza y evaluación de lenguas, adquisición de segundas lenguas, análisis del discurso, política internacional, diseño de investigación y métodos cuantitativos.',
 'bg.bsc':'Ecología, biodiversidad, botánica, bioestadística, informática aplicada a la biología y conservación de la naturaleza.',
 'bg.d1':'Máster en Lingüística','bg.d2':'Licenciatura en Ciencias Biológicas',
 'bg.t1':'Academia de aprendizaje en línea de la FAO (2026) — Comunicación para el desarrollo rural · Seguridad alimentaria y medios de vida · Biodiversidad y sistemas agroalimentarios · Agricultura en acuerdos comerciales regionales',
 'bg.t2':'Google Analytics · Microsoft Power Platform Fundamentals (PL-900) · IELTS Academic 8.0 · Certificado de aptitud docente para educación secundaria superior',
 'bg.t2m':'Ministerio de Educación, China, 2021',
 'bg.a1m':'Ministerio de Educación, China, 2020',
 'bg.a2':'Beca de nivel especial; Estudiante de mérito (dos veces)','bg.a3':'Premio a la tesis destacada',
 'bg.a4':'Primer premio — 17.º Concurso Nacional Universitario de Debate en Inglés',
 'bg.pth':"Tesis de máster, Universidad de Estudios Extranjeros de Pekín, 2022",
 'c.label':'06 — Contacto','c.h2':'Hola 👋',
 'c.p1':'Siempre me alegra conectar en torno a la comunicación, la cooperación internacional y las ideas detrás del trabajo. 🌍',
 'c.p2':'Si algo de aquí te ha llamado la atención, o simplemente quieres saludar, escríbeme sin problema. ☕',
 'f.left':'Yuxi Zhou — París · hecho y mantenido por mí',
 'p1.k':'Explorador independiente de políticas agroalimentarias · agosto de 2026',
 'p1.a':'Un explorador independiente de políticas agroalimentarias para 8 PEID, que reúne indicadores de la FAO y el Banco Mundial sobre importaciones de alimentos, agricultura, pesca, vulnerabilidad climática y conectividad para la comparación entre países y la preparación de reuniones bilaterales.',
 'p1.nl':'Un poco más',
 'p1.n':'Un conjunto de datos más pequeño y verificado; sin estimar valores faltantes; años de referencia visibles; e indicadores descartados cuando la calidad del dato no era fiable.',
 'p1.lnk':'Explorar SIDSight →',
 'p2.k':'Tablero interactivo · julio – octubre de 2025',
 'p2.bg':'Narrativa Interactiva',
 'p2.a':'Una plataforma interactiva de narrativa desarrollada para la COP10 para hacer accesibles a un público internacional veinte años de historia institucional, hitos y resultados. Fui el punto focal de la UNESCO para la arquitectura de contenidos, la redacción, la coordinación, las pruebas y el lanzamiento con el Gobierno de la India y socios técnicos.',
 'p2.lnk':'Abrir el tablero →',
 'p3.k':'Vídeo breve para la COP10 · 2025',
 'p3.a':'Un vídeo breve que conmemora los veinte años de la Convención, recorriendo los hitos principales en orden cronológico. Desarrollé el concepto, el guion y el montaje completo, condensando dos décadas en un formato conciso y accesible.',
 'p3.b':'Se proyectó en la ceremonia de apertura de la COP10, que reunió a más de 500 representantes de más de 140 países, incluidos más de 30 ministros.',
 'p3.lnk':'Ver el vídeo →',
 'p4.t':'Más allá del récord','p4.bg':'Comunicación',
 'p4.k':'Estudio de caso independiente · septiembre de 2026',
 'p4.a':'Un estudio de caso de comunicación independiente basado en el informe SOFIA 2026 de la FAO, que adapta la evidencia técnica para públicos sociales, web y de alta dirección mediante visualización de datos, redacción editorial y narrativa visual.',
 'p4.c1':'Adaptación a audiencias','p4.c2':'Editorial','p4.c3':'Narrativa de datos','p4.c4':'GA4',
 'p4.lnk':'Ver el estudio de caso →',
 'work.sub':'Trabajo seleccionado en comunicación, narrativa digital, política y evidencia.',
 'p5.t':'Estrategia de Comunicación de la Convención','p5.bg':'Estrategia',
 'p5.k':'Estrategia institucional de comunicación · 2025',
 'p5.a':'Desarrollé la primera estrategia de comunicación específica de la Convención, traduciendo los objetivos institucionales en audiencias definidas, prioridades de mensaje, entregables, responsabilidades, un cronograma de implementación y KPI.',
 'p5.c1':'Estrategia de comunicación','p5.c2':'Planificación de audiencias','p5.c3':'Planificación de contenidos','p5.c4':'KPI',
 'p5.note':'Trabajo institucional — solo resumen público.',
 'more.label':'Más trabajo de comunicación',
 'more.h1':'Ejecutivo y editorial','more.p1':'Notas informativas · puntos de conversación · mensajes clave · artículos · presentaciones · informes',
 'more.h2':'Digital y web','more.p2':'Contenido en Drupal · boletines · visualizaciones de datos · exposiciones',
 'more.h3':'Eventos y difusión','more.p3':'Materiales de eventos · vídeo y multimedia ↗ · productos de conocimiento · relación con partes interesadas',
 'more.vidlnk':'vídeo y multimedia ↗',
 'more.h4':'Planificación y medición','more.p4':'Campañas de comunicación · segmentación de audiencias · KPI · GA4',
 'policy.h2':'Política, PEID y trabajo programático',
 'policy.intro':'Monitoreo, apoyo a los PEID y coordinación de ciencia y política en mi trabajo actual en la UNESCO.',
 'pol1.t':'Monitoreo y seguimiento de los Estados Miembros',
 'pol1.a':'Apoyo el monitoreo y seguimiento de la Convención con los Estados Miembros: reviso los informes nacionales, identifico brechas de implementación, hago seguimiento del progreso y preparo próximos pasos específicos.',
 'pol1.c1':'Estados Miembros','pol1.c2':'Evidencia por país','pol1.c3':'Seguimiento','pol1.c4':'Power BI',
 'pol2.t':'Apoyo a los PEID y compromiso regional',
 'pol2.a':'Apoyo el seguimiento cercano de 9 PEID en el Pacífico, el Caribe y la región AIS, junto con el compromiso regional y el desarrollo de capacidades, incluido el programa para los PEID del Pacífico.',
 'pol2.c1':'PEID','pol2.c2':'Seguimiento por país','pol2.c3':'Compromiso regional','pol2.c4':'Desarrollo de capacidades',
 'pol3.t':'Farmacopea Tradicional y Valores del Deporte',
 'pol3.a':'Apoyo a la coordinación de una iniciativa mundial de ciencia y política que reúne a académicos, expertos y coordinadores regionales, incluida la consolidación de aportes de expertos en productos de comunicación.',
 'pol3.c1':'Ciencia y política','pol3.c2':'Coordinación global','pol3.c3':'Coordinación de expertos','pol3.c4':'Intercambio de conocimiento',
 'p1.n':"En tres vistas, pasa de una comparación regional a una ficha de país y a las conexiones pertinentes con la FAO: de entender el contexto a identificar hacia dónde podría ir la conversación.",
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
 'bg.s1':'Análisis del discurso · Estilística · Política internacional · Métodos de investigación · ASL',
 'bg.s2':'Ecología · Biodiversidad · Bioestadística · Botánica · Zoología · Informática aplicada a la biología',
 'bg.a1':'Beca Nacional (2 % superior) · Beca de Nivel Especial · Estudiante Destacada (×2)',
 'bg.a2':'Premio a la Mejor Tesis · Concurso Nacional de Debate en Inglés para Estudiantes Universitarios — Primer Premio',
 'bg.p1':'La construcción del discurso internacional de China sobre la «reducción de la pobreza» (2021) · Conciencia fonológica y adquisición del inglés en niños chinos (2020)',
 'bg.pthl':'Tesis de maestría:',
 'bg.p2':"Retroalimentación correctiva escrita y conocimiento explícito/implícito (2022)",
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
 'bg.t5':"Certificación de Google Analytics",'bg.t5m':"Google Skillshop, 2026",
 'bg.a2m':"Universidad de Estudios Extranjeros de Pekín, 2021",
 'bg.a3m':"14.º Foro Académico de Posgrado de la Capital, 2020",
 'bg.p1m':"Revista de Humanidades y Ciencias Sociales de Asia-Pacífico, 2021",
 'f.left':"Mi pequeño rincón de internet, todavía en construcción.",
 'read.label':"Detalle",
 'read.hint':"Explora el mapa pasando el cursor sobre un marcador, iniciando el recorrido o desplazándote hasta las notas de misión.",
},
fr:{
 'nav.about':'À propos','nav.project':'Travaux sélectionnés','nav.policy':'Politique et PEID','nav.exp':'Expérience','nav.bg':'Parcours',
 'mp.1':'Données','mp.1d':'Information technique ou relative à un pays',
 'mp.2':'Public','mp.2d':'Haute direction · États membres · public',
 'mp.3':'Récit','mp.3d':'Éditorial · visuel · numérique',
 'mp.4':'Action','mp.4d':'Comprendre · engager · assurer le suivi',
 'mast.tiny':'Paris · UNESCO','mast.hi':'Bonjour, je suis',
 'mast.pill1':'Suivi et renforcement des capacités','mast.pill2':'Visualisation de données et communication',
 'mast.line':"Ceci est mon petit coin sur Internet — un espace pour partager des travaux sélectionnés, les lieux où ils m’emmènent, et les histoires que je construis en chemin.",
 'map.label':'Là où mon travail me mène','map.tour':'▶ Lancer la visite','map.fmis':'Missions','map.fsids':'PEID accompagnés',
 'map.sub':'Missions sélectionnées (2024–2026) en communication et dialogue politique — ainsi que les PEID accompagnés par le suivi durant cet exercice biennal.',
 'map.cap':'Missions sélectionnées, 2024–2026 · Couche PEID : pays accompagnés par le suivi et l’accompagnement dans le Pacifique, les Caraïbes et la région AIS.',
 'tool.label':'Outils sélectionnés',
 'sec.about':'À propos','sec.project':'Travaux sélectionnés','sec.policy':'Politique et PEID','sec.exp':'Expérience','sec.bg':'Parcours',
 'about.h2':'Je transforme le contenu technique en communication.',
 'about.p1':'À l’UNESCO, à Paris, mon travail couvre le suivi des États membres dans le cadre de la Convention internationale contre le dopage dans le sport, ainsi que la coordination d’une initiative mondiale sur la pharmacopée traditionnelle. La communication traverse ces deux volets : je conçois des notes d’information, des articles, des contenus web, des supports visuels et des produits numériques pour la haute direction, les États membres et des publics internationaux.',
 'about.p2':'Ma force est de naviguer entre le fond technique et la communication : comprendre une information technique ou relative à un pays, identifier ce qui compte pour le public visé, et le transformer en contenu clair, en produits de connaissance utiles et en suivi concret.',
 'about.bubble':'J’aime transformer une information complexe en communication claire et utile : trouver le bon angle, façonner le message et l’adapter au public.',
 'comms.h2':'Productions de communication choisies',
 'comms.intro':'Ce que j’ai réellement produit : écrit, visuel, filmé et publié.',
 'exp.h2':'Engagements sélectionnés','fold.title':'Missions choisies, 2024–2026','fold.hint':'Cliquez pour déplier',
 'fold.exptitle':'Toutes les expériences',
 'cr.title':'Assistante de projet · UNESCO','cr.when':'Paris · janv. 2025 – aujourd’hui',
 'cr.summary':'Suivi des États membres · communication institutionnelle · coordination science-politique · rayonnement international',
 'fold.note':'Survolez un marqueur sur la carte en haut de la page pour mettre en évidence la note correspondante ci-dessous, et inversement.',
 'bg.h2':'Formation et apprentissage',
 'bg.bubble':'Formation scientifique · Chercheuse en sciences sociales · Curieuse et toujours en apprentissage',
 'bg.edu':'Formation','bg.train':'Formations et certifications sélectionnées','bg.awards':'Distinctions','bg.pub':'Recherche et publications sélectionnées',
 'bg.ma':'Enseignement et évaluation des langues, acquisition des langues secondes, analyse du discours, politique internationale, méthodologie de recherche et méthodes quantitatives.',
 'bg.bsc':'Écologie, biodiversité, botanique, biostatistique, informatique appliquée à la biologie et conservation de la nature.',
 'bg.d1':'Master en linguistique','bg.d2':'Licence en sciences biologiques',
 'bg.t1':'Académie d’apprentissage en ligne de la FAO (2026) — Communication pour le développement rural · Sécurité alimentaire et moyens d’existence · Biodiversité et systèmes agroalimentaires · Agriculture dans les accords commerciaux régionaux',
 'bg.t2':'Google Analytics · Microsoft Power Platform Fundamentals (PL-900) · IELTS Academic 8.0 · Certificat d’aptitude à l’enseignement secondaire supérieur',
 'bg.t2m':'Ministère de l’Éducation, Chine, 2021',
 'bg.a1':'Bourse nationale (2 % supérieurs) · Bourse de niveau spécial · Étudiante modèle (×2)',
 'bg.a2':'Prix de la meilleure thèse · Concours national de débat en anglais pour étudiants — Premier prix',
 'bg.a1m':'Ministère de l’Éducation, Chine, 2020',
 'bg.a2':'Bourse de niveau spécial ; étudiante méritante (deux fois)','bg.a3':'Prix du mémoire remarquable',
 'bg.a4':'Premier prix — 17e Concours national universitaire de débat en anglais',
 'bg.pth':"Mémoire de master, Université des langues étrangères de Pékin, 2022",
 'c.label':'06 — Contact','c.h2':'Bonjour 👋',
 'c.p1':'Je suis toujours ravie d’échanger autour de la communication, de la coopération internationale et des idées derrière ce travail. 🌍',
 'c.p2':'Si quelque chose ici a retenu votre attention, ou si vous voulez simplement dire bonjour, n’hésitez pas à m’écrire. ☕',
 'f.left':'Yuxi Zhou — Paris · conçu et maintenu par mes soins',
 'p1.k':'Explorateur indépendant de politiques agroalimentaires · août 2026',
 'p1.a':'Un explorateur indépendant de politiques agroalimentaires pour 8 PEID, rassemblant des indicateurs de la FAO et de la Banque mondiale sur les importations alimentaires, l’agriculture, la pêche, la vulnérabilité climatique et la connectivité, pour la comparaison entre pays et la préparation de réunions bilatérales.',
 'p1.nl':'Pour aller plus loin',
 'p1.n':'Un jeu de données plus restreint et vérifié ; aucune estimation des valeurs manquantes ; années de référence visibles ; et indicateurs écartés lorsque la qualité des données était incertaine.',
 'p1.lnk':'Explorer SIDSight →',
 'p2.k':'Tableau interactif · juillet – octobre 2025',
 'p2.bg':'Récit Interactif',
 'p2.a':'Une plateforme interactive de narration conçue pour la COP10 afin de rendre accessibles à un public international vingt ans d’histoire institutionnelle, de jalons et de résultats. J’ai été le point focal de l’UNESCO pour l’architecture de contenu, la rédaction, la coordination, les tests et le lancement avec le gouvernement indien et des partenaires techniques.',
 'p2.lnk':'Ouvrir le tableau →',
 'p3.k':'Vidéo courte pour la COP10 · 2025',
 'p3.a':'Une courte vidéo marquant les vingt ans de la Convention, retraçant les jalons principaux dans l’ordre chronologique. J’en ai conçu le principe, écrit le scénario et réalisé le montage complet, condensant deux décennies dans un format concis et accessible.',
 'p3.b':'Projetée lors de la cérémonie d’ouverture de la COP10, qui a réuni plus de 500 représentants de plus de 140 pays, dont plus de 30 ministres.',
 'p3.lnk':'Voir la vidéo →',
 'p4.t':'Au-delà du record','p4.bg':'Communication',
 'p4.k':'Étude de cas indépendante · septembre 2026',
 'p4.a':'Une étude de cas de communication indépendante fondée sur le rapport SOFIA 2026 de la FAO, adaptant des données techniques pour des publics sociaux, web et de haute direction à travers la visualisation de données, la rédaction éditoriale et la narration visuelle.',
 'p4.c1':'Adaptation à l’audience','p4.c2':'Éditorial','p4.c3':'Narration par les données','p4.c4':'GA4',
 'p4.lnk':'Voir l’étude de cas →',
 'work.sub':'Travaux sélectionnés en communication, narration numérique, politique et données probantes.',
 'p5.t':'Stratégie de communication de la Convention','p5.bg':'Stratégie',
 'p5.k':'Stratégie institutionnelle de communication · 2025',
 'p5.a':'J’ai élaboré la première stratégie de communication propre à la Convention, en traduisant les objectifs institutionnels en publics définis, priorités de message, livrables, responsabilités, un calendrier de mise en œuvre et des KPI.',
 'p5.c1':'Stratégie de communication','p5.c2':'Planification des publics','p5.c3':'Planification de contenu','p5.c4':'KPI',
 'p5.note':'Travail institutionnel — résumé public uniquement.',
 'more.label':'Autres travaux de communication',
 'more.h1':'Exécutif et éditorial','more.p1':'Notes d’information · éléments de langage · messages clés · articles · présentations · rapports',
 'more.h2':'Numérique et web','more.p2':'Contenu Drupal · lettres d’information · visualisations de données · expositions',
 'more.h3':'Événements et sensibilisation','more.p3':'Supports d’événements · vidéo et multimédia ↗ · produits de connaissance · liaison avec les parties prenantes',
 'more.vidlnk':'vidéo et multimédia ↗',
 'more.h4':'Planification et mesure','more.p4':'Campagnes de communication · ciblage des publics · KPI · GA4',
 'policy.h2':'Politique, PEID et travail programmatique',
 'policy.intro':'Suivi, appui aux PEID et coordination science-politique dans mon travail actuel à l’UNESCO.',
 'pol1.t':'Suivi et accompagnement des États membres',
 'pol1.a':'J’appuie le suivi et l’accompagnement de la Convention auprès des États membres : examen des rapports nationaux, identification des lacunes de mise en œuvre, suivi des progrès et préparation d’étapes suivantes adaptées.',
 'pol1.c1':'États membres','pol1.c2':'Données par pays','pol1.c3':'Suivi','pol1.c4':'Power BI',
 'pol2.t':'Appui aux PEID et engagement régional',
 'pol2.a':'J’appuie le suivi rapproché de 9 PEID du Pacifique, des Caraïbes et de la région AIS, ainsi que l’engagement régional et le renforcement des capacités, y compris le programme pour les PEID du Pacifique.',
 'pol2.c1':'PEID','pol2.c2':'Suivi par pays','pol2.c3':'Engagement régional','pol2.c4':'Renforcement des capacités',
 'pol3.t':'Pharmacopée traditionnelle et valeurs du sport',
 'pol3.a':'Appui à la coordination d’une initiative mondiale science-politique réunissant universitaires, experts et coordinateurs régionaux, y compris la consolidation des contributions d’experts en produits de communication.',
 'pol3.c1':'Science et politique','pol3.c2':'Coordination mondiale','pol3.c3':'Coordination d’experts','pol3.c4':'Échange de connaissances',
 'p1.n':"En trois vues, il passe d’une comparaison régionale à une fiche pays puis aux liens pertinents avec la FAO : de la compréhension du contexte à l’identification des suites possibles.",
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
 'bg.s1':'Analyse du discours · Stylistique · Politique internationale · Méthodes de recherche · ALS',
 'bg.s2':'Écologie · Biodiversité · Biostatistique · Botanique · Zoologie · Informatique appliquée à la biologie',
 'bg.p1':"La construction du discours international de la Chine sur la « réduction de la pauvreté » (2021) · Conscience phonologique et acquisition de l’anglais chez les enfants chinois (2020)",
 'bg.pthl':'Mémoire de master :',
 'bg.p2':"Rétroaction corrective écrite et connaissance explicite/implicite (2022)",
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
 'bg.t5':"Certification Google Analytics",'bg.t5m':"Google Skillshop, 2026",
 'bg.a2m':"Université des langues étrangères de Pékin, 2021",
 'bg.a3m':"14e Forum académique des étudiants de troisième cycle de la capitale, 2020",
 'bg.p1m':"Revue des sciences humaines et sociales d’Asie-Pacifique, 2021",
 'f.left':"Mon petit coin d’internet, encore en chantier.",
 'read.label':"Aperçu",
 'read.hint':"Explorez la carte en survolant un marqueur, en lançant la visite ou en faisant défiler jusqu’aux notes de mission.",
},
zh:{
 "nav.about":"关于我",
 "mp.1":"证据","mp.1d":"技术信息或国别层面信息",
 "mp.2":"受众","mp.2d":"高层管理人员 · 会员国 · 公众",
 "mp.3":"叙事","mp.3d":"编辑 · 视觉 · 数字",
 "mp.4":"行动","mp.4d":"理解 · 参与 · 跟进",
 "nav.project":"精选作品",
 "nav.policy":"政策与小岛屿国家",
 "nav.exp":"经历",
 "nav.bg":"教育背景",
 "mast.tiny":"巴黎 · 联合国教科文组织",
 "mast.hi":"你好呀，我是",
 "mast.pill1":"履约监测与能力建设",
 "mast.pill2":"数据可视化与传播",
 "mast.line":"这是我在互联网上的小角落——分享精选作品、工作带我去过的地方，以及一路上构建的故事。",
 "map.label":"工作把我带去的地方",
 "map.sub":"精选出差记录（2024–2026）：传播与政策对话；同时展示本两年期通过监测获得支持的小岛屿发展中国家。",
 "map.tour":"▶ 自动浏览",
 "map.fmis":"出差",
 "map.fsids":"帮助过的小岛屿国家",
 "map.cap":"精选出差记录，2024–2026 · 小岛屿国家图层：通过监测与跟进工作获得支持的太平洋、加勒比与AIS地区国家。",
 "read.label":"详情",
 "read.hint":"把鼠标移到标记上、或点击自动浏览，或向下滚动查看我的出差。",
 "tool.label":"精选工具",
 "sec.about":"关于我",
 "sec.project":"精选作品",
 "sec.policy":"政策与小岛屿国家",
 "sec.exp":"经历",
 "sec.bg":"教育背景",
 "about.h2":"我把专业内容转化为传播。",
 "about.p1":"我在巴黎的联合国教科文组织总部，工作涵盖《国际反对在体育运动中使用兴奋剂公约》的会员国监测，同时协调一项关于传统药典的全球倡议。传播工作贯穿这两条主线：我为高层管理人员、会员国和国际受众制作简报、文章、网页内容、视觉材料与数字产品。",
 "about.p2":"我的优势在于能在技术内容和传播之间自如切换：理解技术性或国别层面的信息，判断受众真正关心什么，再把它转化成清晰的内容、有用的知识产品和切实可行的后续行动。",
 "about.bubble":"我喜欢把复杂的信息转化成清晰有用的传播——找到合适的角度，打磨核心信息，并根据受众调整表达方式。",
 "p1.t":"SIDSight",
 "p1.bg":"看板",
 "p1.k":"独立农业食品政策探索工具 · 2026 年 8 月",
 "p1.a":"一个面向 8 个小岛屿发展中国家的独立农业食品政策探索工具，整合了粮农组织与世界银行在粮食进口、农业、渔业、气候脆弱性与数字连通性方面的指标，支持国别比较与双边会前准备。",
 "p1.nl":"再多说几句",
 "p1.n":"三个视图依次展开：从区域比较，到单一国家简报，再到相关的粮农组织联系——从理解背景，到判断这场对话接下来可以往哪里去。",
 "p1.c1":"Power BI",
 "p1.c2":"Python · pandas",
 "p1.c3":"ArcGIS",
 "p1.c4":"GitHub",
 "p1.c5":"世界银行与粮农组织数据",
 "p1.lnk":"探索 SIDSight →",
 "p2.t":"反兴奋剂公约的二十年历程",
 "p2.bg":"互动叙事",
 "p2.k":"交互式展板 · 2025 年 7–10 月",
 "p2.a":"为 COP10 开发的一个交互式叙事平台，让公约二十年的机构历程、关键节点与成果，能够被国际受众理解和接受。我担任教科文组织方面的联络人，负责内容架构、撰写、协调、测试，并与印度政府及技术合作伙伴一起完成上线。",
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
 "p4.t":"纪录之外","p4.bg":"传播",
 "p4.k":"独立传播案例研究 · 2026年9月",
 "p4.a":"一个基于FAO《世界渔业和水产养殖状况》2026年报告（SOFIA 2026）的独立传播案例研究，通过数据可视化、编辑写作与视觉叙事，把同一份技术证据分别转化为面向社交媒体、网页读者和高层管理者的传播内容。",
 "p4.c1":"受众适配","p4.c2":"编辑写作","p4.c3":"数据叙事","p4.c4":"GA4",
 "work.sub":"精选作品涵盖传播、数字叙事、政策与证据分析。",
 "p5.t":"公约传播战略","p5.bg":"战略",
 "p5.k":"机构传播战略 · 2025",
 "p5.a":"制定了公约首份专门的传播战略，把机构目标转化为明确的受众定位、信息优先级、交付物、责任分工、实施时间表与KPI。",
 "p5.c1":"传播战略","p5.c2":"受众规划","p5.c3":"内容规划","p5.c4":"KPI",
 "p5.note":"机构内部工作 — 此处仅为公开摘要。",
 "more.label":"更多传播工作",
 "more.h1":"高层文稿与编辑","more.p1":"简报 · 发言要点 · 核心信息 · 新闻稿 · 演示文稿 · 报告",
 "more.h2":"数字与网页","more.p2":"Drupal网页内容 · 通讯 · 数据可视化 · 展览",
 "more.h3":"活动与外联","more.p3":"活动物料 · 视频与多媒体 ↗ · 知识产品 · 利益相关方联络",
 "more.vidlnk":"视频与多媒体 ↗",
 "more.h4":"规划与效果衡量","more.p4":"传播活动策划 · 受众定位 · KPI · GA4",
 "policy.h2":"政策、小岛屿国家与项目工作",
 "policy.intro":"我在教科文组织目前工作中的监测、小岛屿国家支持与科学政策协调工作。",
 "pol1.t":"监测与会员国跟进",
 "pol1.a":"我支持公约与会员国之间的监测与跟进工作：审阅国家报告，识别履约差距，跟踪进展，并准备有针对性的下一步行动。",
 "pol1.c1":"会员国","pol1.c2":"国别证据","pol1.c3":"跟进","pol1.c4":"Power BI",
 "pol2.t":"小岛屿国家支持与区域参与",
 "pol2.a":"我支持对太平洋、加勒比和AIS区域9个小岛屿发展中国家的持续跟进，同时开展区域参与和能力建设，包括太平洋小岛屿国家项目。",
 "pol2.c1":"小岛屿发展中国家","pol2.c2":"国别跟进","pol2.c3":"区域参与","pol2.c4":"能力建设",
 "pol3.t":"传统药典与体育价值观",
 "pol3.a":"支持协调一项全球科学政策倡议，汇聚学者、专家与区域协调员，包括把专家意见整合为传播产出。",
 "pol3.c1":"科学政策","pol3.c2":"全球协调","pol3.c3":"专家协调","pol3.c4":"知识交流",
 "p4.lnk":"查看案例研究 →",
 "comms.h2":"部分传播作品",
 "comms.intro":"一些我做过的东西——写过、设计过、拍过，或者发布过的。",
 "exp.h2":"精选工作经历",
 "fold.title":"部分出差记录，2024–2026",
 "fold.exptitle":"全部工作经历",
 "cr.title":"项目助理 · 联合国教科文组织","cr.when":"巴黎 · 2025年1月至今",
 "cr.summary":"会员国监测 · 机构传播 · 科学政策协调 · 国际外联",
 "fold.hint":"点击展开",
 "fold.note":"把鼠标移到页面顶部地图上的标记，就可以跳转到下方对应的记录；反过来也一样。",
 "bg.h2":"教育与学习",
 "bg.bubble":"理科出身 · 社会科学研究者 · 带着好奇心一路学习",
 "bg.edu":"教育经历",
 "bg.d1":"文学硕士，语言学",
 "bg.m1":"北京外国语大学 · 2019–2022",
 "bg.ma":"语言教学与测评、二语习得、话语分析、国际政治、研究设计与量化方法。",
 "bg.d2":"理学学士，生物科学",
 "bg.m2":"鲁东大学 · 2014–2018",
 "bg.s1":"话语分析 · 文体学 · 国际政治 · 研究方法 · 二语习得",
 "bg.s2":"生态学 · 生物多样性 · 生物统计 · 植物学 · 动物学 · 生物信息技术",
 "bg.bsc":"生态学、生物多样性、植物学、生物统计、生物信息技术与自然保育。",
 "bg.train":"精选学习与证书",
 "bg.t1":"粮农组织在线学院（2026）— 面向农村发展的传播 · 粮食安全与生计 · 生物多样性与农业食品体系 · 区域贸易协定中的农业",
 "bg.t1m":"粮农组织在线学院，2026",
 "bg.t2":"Google Analytics · Microsoft Power Platform 基础认证（PL-900）· 雅思学术类 8.0 · 高级中学教师资格证",
 "bg.t2m":"中国教育部，2021",
 "bg.t3":"雅思学术类 — 总分 8.0",
 "bg.t4":"Microsoft Power Platform 基础认证（PL-900）",
 "bg.t5":"Google Analytics 认证","bg.t5m":"Google Skillshop，2026",
 "bg.awards":"奖项",
 "bg.a1":"国家奖学金（前 2%）· 特等奖学金 · 三好学生（2次）",
 "bg.a2":"优秀论文奖 · 第十七届全国大学生英语辩论赛 一等奖",
 "bg.a1m":"中国教育部，2020",
 "bg.a2":"特等奖学金；三好学生（2次）",
 "bg.a2m":"北京外国语大学，2021",
 "bg.a3":"优秀论文奖",
 "bg.a3m":"第十四届首都研究生学术论坛，2020",
 "bg.a4":"第十七届全国大学生英语辩论赛 一等奖",
 "bg.pub":"精选研究与发表",
 "bg.p1":"《中国日报》扶贫报道中的中国国际话语建构（2021）· 语音意识对中国儿童英语习得的影响（2020）",
 "bg.p1m":"《亚太人文与社会科学期刊》，2021",
 "bg.pthl":"硕士论文：",
 "bg.p2":"书面纠正性反馈与显性/隐性知识的关系（2022）",
 "bg.p2m":"与陈亚平合著 · 《第二语言学习研究》第 11 卷，2020",
 "bg.p3":"书面纠正性反馈与显性、隐性知识发展的关系",
 "bg.pth":"硕士论文，北京外国语大学，2022",
 "lg1":"中文 — 母语",
 "lg2":"英语 — 雅思 8.0",
 "lg3":"西班牙语 — B2",
 "lg4":"法语 — B1",
 "c.label":"06 — 联系",
 "c.h2":"打个招呼 👋",
 "c.p1":"欢迎就传播、国际合作，以及这些工作背后的想法找我聊聊。🌍",
 "c.p2":"如果有什么让你感兴趣的，或者你只是想打个招呼，欢迎随时邮件联系我。☕",
 "f.left":"互联网上属于我的小角落，还在一点点长大。",
}};

/* 经历 · 三种译文 */
const EXP_T={
es:[
 {role:'Asistente de proyecto',org:'UNESCO, Sector de Ciencias',when:'ene. 2025 – actualidad',where:'París',
  tags:['Informes ejecutivos','Visualización de datos','Seguimiento del cumplimiento','PEID y PMA','Desarrollo de capacidades'],
  points:['Soy el punto focal de la Sección para informes de la alta dirección: redacto mensajes clave, puntos de intervención y materiales de difusión, y desarrollo visualizaciones de datos y paneles que traducen la información técnica y de seguimiento en recursos accesibles.',
   'Gestiono el seguimiento del cumplimiento a través del sistema ADLogic de la Convención, revisando informes nacionales y coordinando el seguimiento con los Estados Partes, ministerios y Misiones Permanentes, con especial atención a los PEID y los PMA.',
   'Apoyé el primer Programa Regional de Desarrollo de Capacidades para los PEID del Pacífico en Brisbane, contribuyendo a la ejecución del programa, a los materiales de formación y a la coordinación con las partes interesadas de 13 PEID del Pacífico.',
   'Coordino la participación de más de 50 expertos internacionales y coordinadores regionales en la iniciativa de la UNESCO sobre Farmacopea Tradicional, contribuyendo a un repositorio internacional de conocimiento para el intercambio de investigación.']},
 {role:'Consultora',org:'UNESCO, Sector de Ciencias',when:'jun. – dic. 2024',where:'París',
  tags:['Comunicación de políticas','PEID y PMA','Movilización de recursos','Coordinación de actores internacionales'],
  points:['Elaboré notas conceptuales, informes, puntos de intervención, contenido web y materiales visuales para apoyar el diálogo sobre políticas, la visibilidad del programa y la relación con las contrapartes nacionales.',
   'Analicé los avances de implementación de los Estados Partes y traduje las brechas detectadas en apoyo específico, con especial atención a los PEID y los PMA, incluyendo oportunidades de financiación a través del Fondo contra el Dopaje.',
   'Apoyé la iniciativa mundial de la UNESCO sobre Farmacopea Tradicional y Valores del Deporte, coordinando expertos, coordinadores regionales y actores nacionales en reuniones del grupo de trabajo.']},
 {role:'Becaria patrocinada',org:'UNESCO, Sector de Ciencias',when:'jun. 2023 – jun. 2024',where:'París',
  tags:['Comunicación estratégica','Investigación de políticas','Tecnologías emergentes','Coordinación con actores clave'],
  points:['Redacté productos de conocimiento, informes, puntos de intervención y contenido web, y desarrollé materiales visuales para comunicación y divulgación.',
   'Apoyé la preparación y realización de la COP9, incluida la coordinación y la comunicación de la reunión intergubernamental.',
   'Investigué cuestiones emergentes de gobernanza, incluidas la neurotecnología, la inteligencia artificial y la integridad en el deporte, contribuyendo a notas conceptuales y documentos de reunión.']},
 {role:'Responsable de programa y comunicación',org:'Lufy Education',when:'abr. 2019 – jun. 2023',where:'Remoto',
  tags:['Diseño de programas','Currículo y evaluación','Estrategia en redes sociales','Analítica de aprendizaje'],
  points:['Dirigí la comunicación y la difusión en tres grandes plataformas sociales (WeChat, Weibo y RedNote), desarrollando contenido digital y herramientas de promoción para hacer crecer la comunidad de estudiantes.',
   'Cofundé y gestioné un programa en línea de preparación de exámenes, diseñando el currículo, los materiales docentes y los métodos de evaluación.',
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
 {role:'Assistante de projet',org:'UNESCO, Secteur des sciences',when:'janv. 2025 – aujourd’hui',where:'Paris',
  tags:['Notes exécutives','Visualisation de données','Suivi de la conformité','PEID et PMA','Renforcement des capacités'],
  points:['Je suis le point focal de la Section pour les notes de la haute direction : rédaction de messages clés, d’éléments de langage et de supports de diffusion, et développement de visualisations de données et de tableaux de bord traduisant l’information technique et de suivi en ressources accessibles.',
   'Je gère le suivi de la conformité via le système ADLogic de la Convention, en examinant les rapports nationaux et en coordonnant le suivi avec les États parties, les ministères et les Missions permanentes, avec une attention particulière aux PEID et aux PMA.',
   'J’ai appuyé le premier programme régional de renforcement des capacités pour les PEID du Pacifique à Brisbane, en contribuant à la mise en œuvre du programme, aux supports de formation et à la coordination avec les parties prenantes de 13 PEID du Pacifique.',
   'Je coordonne la participation de plus de 50 experts internationaux et coordonnateurs régionaux dans le cadre de l’initiative de l’UNESCO sur la pharmacopée traditionnelle, en contribuant à un répertoire international de connaissances pour l’échange en recherche.']},
 {role:'Consultante',org:'UNESCO, Secteur des sciences',when:'juin – déc. 2024',where:'Paris',
  tags:['Communication de politiques','PEID et PMA','Mobilisation de ressources','Coordination d’acteurs internationaux'],
  points:['J’ai rédigé des notes conceptuelles, des notes d’information, des éléments de langage, des contenus web et des supports visuels pour appuyer le dialogue sur les politiques, la visibilité du programme et les échanges avec les homologues nationaux.',
   'J’ai analysé l’état d’avancement de la mise en œuvre par les États parties et traduit les écarts identifiés en appuis ciblés, avec une attention particulière aux PEID et aux PMA, y compris des possibilités de financement via le Fonds contre le dopage.',
   'J’ai appuyé l’initiative mondiale de l’UNESCO sur la pharmacopée traditionnelle et les valeurs du sport, en coordonnant experts, coordonnateurs régionaux et acteurs nationaux lors des réunions du groupe de travail.']},
 {role:'Stagiaire boursière',org:'UNESCO, Secteur des sciences',when:'juin 2023 – juin 2024',where:'Paris',
  tags:['Communication stratégique','Recherche sur les politiques','Technologies émergentes','Coordination avec les acteurs clés'],
  points:['J’ai rédigé des produits de connaissance, des notes d’information, des éléments de langage et des contenus web, et conçu des supports visuels pour la communication et la sensibilisation.',
   'J’ai appuyé la préparation et la tenue de la COP9, notamment la coordination et la communication de cette réunion intergouvernementale.',
   'J’ai étudié des enjeux émergents de gouvernance — neurotechnologies, intelligence artificielle et intégrité dans le sport — en contribuant à des notes conceptuelles et à des documents de réunion.']},
 {role:'Responsable de programme et communication',org:'Lufy Education',when:'avr. 2019 – juin 2023',where:'À distance',
  tags:['Conception de programmes','Programme et évaluation','Stratégie sur les réseaux sociaux','Analyse des apprentissages'],
  points:['J’ai piloté la communication et la diffusion sur trois grandes plateformes sociales (WeChat, Weibo et RedNote), en développant contenus et outils de promotion pour faire grandir la communauté d’apprenants.',
   'J’ai cofondé et dirigé un programme en ligne de préparation aux examens, en concevant le programme, les supports pédagogiques et les méthodes d’évaluation.',
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
 {role:"项目助理",org:"联合国教科文组织 科学部门",when:"2025年1月 – 至今",where:"巴黎",
  tags:["高层文稿撰写","数据可视化","履约监测","小岛屿国家与最不发达国家","能力建设"],
  points:["担任本处高层简报的联络人，撰写核心信息、发言要点和外联材料，并制作把技术与监测信息转化为易于理解的数据可视化与仪表盘。",
   "通过公约的 ADLogic 系统管理履约监测，审阅各国国家报告，并与缔约国、各国部委和常驻代表团协调后续跟进，其中对小岛屿发展中国家和最不发达国家给予特别关注。",
   "参与支持公约首个面向太平洋小岛屿国家的区域能力建设项目（布里斯班），协助项目交付、培训材料开发，并负责与来自 13 个太平洋小岛屿国家代表的对接协调。",
   "在教科文组织传统药典倡议下，协调 50 余位国际专家和区域协调员的参与，助力建设促进研究交流的国际知识库。"]},
 {role:"顾问",org:"联合国教科文组织 科学部门",when:"2024年6–12月",where:"巴黎",
  tags:["政策传播","小岛屿国家与最不发达国家","资源筹措","全球利益相关方协调"],
  points:["撰写概念说明、简报、发言要点、网页内容和视觉材料，支持政策对话、项目可见度以及与各国对口单位的沟通。",
   "分析缔约国履约进展，把发现的缺口转化为有针对性的支持，其中对小岛屿发展中国家和最不发达国家给予特别关注，包括通过反兴奋剂基金提供的资助机会。",
   "支持教科文组织关于传统药典与体育价值观的全球倡议，在工作组会议中协调专家、区域协调员与各国利益相关方。"]},
 {role:"公派实习",org:"联合国教科文组织 科学部门",when:"2023年6月 – 2024年6月",where:"巴黎",
  tags:["战略传播","政策研究","新兴技术","利益相关方联络"],
  points:["起草知识产品、简报、发言要点和网页内容，并制作用于传播与推广的视觉材料。",
   "参与第九届缔约方大会（COP9）的筹备与实施，包括该政府间会议的协调与传播工作。",
   "研究新兴治理议题，包括神经技术、人工智能与体育诚信，并参与撰写概念说明和会议文件。"]},
 {role:"项目与传播主管",org:"鹿飞考研英语",when:"2019年4月 – 2023年6月",where:"远程",
  tags:["项目设计","课程与测评","社交媒体策略","学习数据分析"],
  points:["主导三大社交平台（微信公众号、微博、小红书）的传播与推广，开发数字内容与推广工具，扩大并维系学习者社群。",
   "联合创办并运营一个线上考试备考项目，负责课程体系、教学材料与测评方法的设计。",
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
es:{paris:{when:"2023 – actualidad",event:'COP10 · Comunicación intergubernamental',body:'<strong>Informes para la alta dirección · narrativa digital · comunicación de eventos.</strong> Con base en la sede de la UNESCO, donde convergen el trabajo diario de comunicación y monitoreo, incluida la Estrategia de Comunicación de la Convención. <a href="#strategy-card">Ver trabajo relacionado →</a>'},
 budapest:{when:"mayo de 2026",event:'Taller de investigación multiactor (TALE)',body:'<strong>Aporte de políticas y gobernanza sobre la protección de deportistas.</strong> Representé a la UNESCO en un taller multiactor que reunió a investigadores y actores de la integridad en el deporte, aportando una perspectiva de gobernanza a las discusiones sobre investigación emergente en protección de deportistas e integridad.'},
 antalya:{when:"febrero de 2025",event:'Mesa de la COP9 y Comité de Aprobación del Fondo',body:'<strong>Revisión de gobernanza y preparación de la COP10.</strong> Dos reuniones estatutarias consecutivas, en las que revisamos nueve solicitudes de proyecto, incluidas propuestas de PEID y PMA, y discutimos prioridades y preparativos hacia la COP10.'},
 riyadh:{when:"diciembre de 2024",event:'Reuniones estatutarias y consulta de la Mesa de la COP9',body:'<strong>Coordinación con actores clave y diálogo de gobernanza.</strong> Apoyé intercambios de alto nivel entre la UNESCO, gobiernos y organizaciones asociadas, incluidas consultas sobre las prioridades de la Convención y sobre cómo involucrar a los Estados Miembros y a otros actores en las discusiones de gobernanza y reforma.'},
 olympia:{when:"noviembre de 2024",event:'Asamblea General de una federación internacional',body:'<strong>Alianza exploratoria y mapeo de gobernanza.</strong> Trabajo exploratorio de alianzas en torno a las carreras de camellos y la integridad en el deporte: identificación de brechas de gobernanza entre federaciones regionales, discusión sobre dónde podría aportar la experiencia de la UNESCO y exploración de una vía hacia orientación específica y cooperación a más largo plazo.'},
 cannes:{when:"febrero de 2024",event:'Simposio de investigación y Conferencia Mundial de Educación',body:'<strong>Comunicación y divulgación.</strong> Junto a las discusiones de investigación y educación de la AMA, mi colega Camila y yo dialogamos con contrapartes de la organización regional del Caribe (RADO) y de Nueva Zelanda sobre necesidades de desarrollo de capacidades en los estados insulares, seguimiento del cumplimiento y oportunidades de apoyo a través del Fondo.'}},
fr:{paris:{when:"2023 – aujourd’hui",event:'COP10 · Communication intergouvernementale',body:'<strong>Notes pour la haute direction · récit numérique · communication événementielle.</strong> Basée au siège de l’UNESCO, où se rejoignent le travail quotidien de communication et de suivi, y compris la Stratégie de communication de la Convention. <a href="#strategy-card">Voir le travail associé →</a>'},
 budapest:{when:"mai 2026",event:'Atelier de recherche multi-acteurs (TALE)',body:'<strong>Contribution politique et de gouvernance sur la protection des athlètes.</strong> J’ai représenté l’UNESCO lors d’un atelier réunissant chercheurs et acteurs de l’intégrité dans le sport, en apportant un regard de gouvernance aux discussions sur les recherches émergentes en matière de protection des athlètes et d’intégrité.'},
 antalya:{when:"février 2025",event:'Bureau de la COP9 et Comité d’approbation du Fonds',body:'<strong>Examen de gouvernance et préparation de la COP10.</strong> Deux réunions statutaires consécutives, au cours desquelles nous avons examiné neuf demandes de projet, dont des propositions de PEID et de PMA, et discuté des priorités et des préparatifs en vue de la COP10.'},
 riyadh:{when:"décembre 2024",event:'Réunions statutaires et consultation du Bureau de la COP9',body:'<strong>Coordination des parties prenantes et dialogue de gouvernance.</strong> J’ai appuyé des échanges de haut niveau entre l’UNESCO, des gouvernements et des organisations partenaires, y compris des consultations sur les priorités de la Convention et sur la manière d’associer les États membres et d’autres acteurs aux discussions sur la gouvernance et la réforme.'},
 olympia:{when:"novembre 2024",event:'Assemblée générale d’une fédération internationale',body:'<strong>Partenariat exploratoire et cartographie de gouvernance.</strong> Travail exploratoire de partenariat autour des courses de chameaux et de l’intégrité dans le sport : identification des lacunes de gouvernance entre fédérations régionales, discussion sur l’apport possible de l’expertise de l’UNESCO et exploration d’une voie vers des orientations adaptées et une coopération à plus long terme.'},
 cannes:{when:"février 2024",event:'Symposium de recherche et Conférence mondiale sur l’éducation',body:'<strong>Communication et sensibilisation.</strong> En marge des discussions de l’AMA sur la recherche et l’éducation, ma collègue Camila et moi avons échangé avec des homologues de l’organisation régionale des Caraïbes (RADO) et de Nouvelle-Zélande sur les besoins de renforcement des capacités dans les États insulaires, le suivi de la conformité et les possibilités d’appui via le Fonds.'}},
zh:{paris:{when:"2023年至今",event:"COP10 · 政府间传播",body:"<strong>高层简报 · 数字叙事 · 活动传播。</strong>常驻教科文组织总部，日常传播与监测工作在这里交汇，其中包括公约传播战略。<a href=\"#strategy-card\">查看相关工作 →</a>"},
 budapest:{when:"2026年5月",event:"多方参与研究工作坊（TALE）",body:"<strong>就运动员保护议题提供政策与治理意见。</strong>代表教科文组织参加一场汇集研究人员与体育诚信领域各方的多方工作坊，就运动员保护与体育诚信方面的新兴研究，提供政策与治理层面的视角。"},
 antalya:{when:"2025年2月",event:"COP9 主席团与基金审批委员会",body:"<strong>治理审议与COP10筹备。</strong>连续两场法定会议，审议了九份项目申请（其中包括来自小岛屿发展中国家和最不发达国家的提案），并讨论了面向 COP10 的优先事项与筹备工作。"},
 riyadh:{when:"2024年12月",event:"法定会议与 COP9 主席团磋商",body:"<strong>利益相关方协调与治理对话。</strong>支持教科文组织、各国政府与伙伴机构之间的高级别交流，包括就公约优先事项、以及如何让会员国和其他相关方参与治理与改革讨论进行磋商。"},
 olympia:{when:"2024年11月",event:"某国际联合会大会",body:"<strong>探索性合作与治理版图梳理。</strong>围绕骆驼赛与体育诚信开展的探索性伙伴关系工作：梳理各区域联合会的治理缺口，讨论教科文组织的专业经验可以在哪些方面发挥作用，并探索走向定制化指导与长期合作的可能路径。"},
 cannes:{when:"2024年2月",event:"研究研讨会与全球教育大会",body:"<strong>传播与外联。</strong>在世界反兴奋剂机构的研究与教育讨论之外，我和同事 Camila 与加勒比区域组织（RADO）及新西兰的参会方就岛屿国家的能力建设需求、履约跟进以及基金会支持等方面进行了交流。"}}};

const COMMS_T={
 es:['Escritos','Campañas y narrativa','Visual','Plataformas','Vídeo y multimedia','Redes sociales'],
 fr:['Écrits','Campagnes et récits','Visuel','Plateformes','Vidéo et multimédia','Réseaux sociaux'],
 zh:["文字","传播活动与叙事","视觉","平台","视频与多媒体","社交媒体"]};


/* 传播产出 · 逐条译文（顺序与 COMMS 一致）*/
const CITEMS_T={
es:[
 ['Notas conceptuales','Notas informativas','Puntos de intervención','Contenido web','Boletines','Materiales de desarrollo de capacidades','Recursos de conocimiento'],
 ['Campaña de visibilidad del 20.º aniversario (COP10)','Recopilación, visualización y narrativa de datos de impacto','Serie de entrevistas a actores clave (concepto, edición)'],
 ['Infografías','Folletos y dípticos de impacto','Publicaciones digitales','Carteles de eventos','Fondos para eventos','Logotipos','Certificados','Distintivos','Presentaciones','Cuestionarios en Mentimeter'],
 ['Tablero interactivo de narrativa para la COP10','Paneles de visualización de datos','Gestión de páginas web de la UNESCO (Drupal)','Gestión de la plataforma de seguimiento ADLogic'],
 ['Vídeo del aniversario de la COP10 (concepto, guion, edición)','Campaña de visibilidad del 20.º aniversario (COP10)','Tutoriales en vídeo multilingües','Vídeos de momentos destacados de las COP (coedición)'],
 ['Contenido institucional en redes sociales (LinkedIn, YouTube)','Estrategia y contenido multiplataforma en WeChat, Weibo y RedNote']],
fr:[
 ['Notes conceptuelles','Notes d’information','Éléments de langage','Contenus web','Lettres d’information','Supports de renforcement des capacités','Ressources de connaissance'],
 ['Campagne de visibilité du 20e anniversaire (COP10)','Collecte, visualisation et mise en récit des données d’impact','Série d’entretiens avec les parties prenantes (concept, montage)'],
 ['Infographies','Dépliants et brochures d’impact','Publications numériques','Affiches d’événements','Fonds visuels d’événements','Logos','Certificats','Badges','Présentations','Quiz Mentimeter'],
 ['Tableau interactif narratif pour la COP10','Tableaux de bord de visualisation','Gestion des pages web de l’UNESCO (Drupal)','Gestion de la plateforme de suivi ADLogic'],
 ['Vidéo anniversaire de la COP10 (concept, scénario, montage)','Campagne de visibilité du 20e anniversaire (COP10)','Tutoriels vidéo multilingues','Vidéos des temps forts des COP (co-montage)'],
 ['Contenus institutionnels sur les réseaux sociaux (LinkedIn, YouTube)','Stratégie et contenus multiplateformes sur WeChat, Weibo et RedNote']],
zh:[
 ["概念说明","简报","发言要点","网页内容","新闻稿","能力建设材料","知识资源"],
 ["COP10 二十周年宣传活动","影响力数据的收集、可视化与叙事","利益相关方访谈系列（策划、剪辑）"],
 ["信息页","折页与传单","数字出版物","活动海报","活动背景板","标识设计","证书","标志设计","演示文稿","Mentimeter 互动问答"],
 ["COP10 交互式叙事展板","数据可视化仪表盘","教科文组织网页维护（Drupal）","ADLogic 监测平台管理"],
 ["COP10 周年短片（概念、脚本、剪辑）","COP10 二十周年宣传活动","多语种视频教程","缔约方大会精彩集锦（联合剪辑）"],
 ["官方社交媒体内容（LinkedIn、YouTube）","微信、微博、小红书多平台策略与内容"]]};

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
  renderExp(); renderMissions(); renderComms(); renderMore();
  const tb=document.getElementById('tour');
  if(tb && !touring) tb.textContent = TOUR_LABEL[l]||TOUR_LABEL.en;
  reset();
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
const map=L.map('map',{center:[22,44],zoom:2.2,zoomSnap:.2,scrollWheelZoom:false,
  zoomControl:false,worldCopyJump:true});
L.control.zoom({position:'bottomleft'}).addTo(map);
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png?key='+CARTO_KEY,
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
const MORE_CAT_T={
 es:['Ejecutivo y editorial','Digital y web','Eventos y difusión','Planificación y medición'],
 fr:['Exécutif et éditorial','Numérique et web','Événements et sensibilisation','Planification et mesure'],
 zh:['高层文稿与编辑','数字与网页','活动与外联','规划与效果衡量'],
};
const MORE_ITEMS_T={
 es:[
  [['Notas informativas','Para la alta dirección y encuentros de alto nivel, condensando contenido técnico en puntos claros y listos para decidir.'],
   ['Puntos de intervención','Preparados para discursos, encuentros bilaterales y discusiones intergubernamentales.'],
   ['Mensajes clave','Mensajes centrales verificados por su claridad y coherencia entre audiencias y canales.'],
   ['Artículos','Redacción y estructuración de historias institucionales para la web y productos de información.'],
   ['Presentaciones','Estructura visual y narrativa para informes, reuniones y eventos institucionales.'],
   ['Informes','Síntesis de información técnica o de seguimiento en documentos estructurados y legibles.']],
  [['Contenido en Drupal','Edición y publicación de contenido web institucional para el público y los Estados Miembros.'],
   ['Boletines','Contenido editorial recurrente que combina redacción, maquetación y presentación centrada en la audiencia.'],
   ['Visualización de datos','Convertir datos técnicos o de seguimiento en visuales que apoyan la comprensión y el diálogo.'],
   ['Exposiciones','Estructurar historias institucionales y evidencia en formatos exploratorios basados en la web.'],
   ['Redes sociales','Adaptar contenido institucional a formatos sociales breves y orientados a la audiencia.']],
  [['Materiales de eventos','Visuales, presentaciones y contenido de apoyo para eventos intergubernamentales y de desarrollo de capacidades.'],
   ['Vídeo y multimedia','Concepto, guion, edición y narrativa visual para la comunicación institucional.'],
   ['Productos de conocimiento','Convertir aportes técnicos o de expertos en materiales de referencia accesibles y reutilizables.'],
   ['Historias de actores clave','Convertir perspectivas de beneficiarios, expertos o socios en contenido conciso y centrado en las personas.'],
   ['Coordinación con socios','Trabajar con socios gubernamentales, técnicos y de comunicación para llevar los productos del concepto a la entrega.']],
  [['Campañas de comunicación','Traducir objetivos en audiencias, mensajes, canales, responsabilidades y plazos.'],
   ['Segmentación de audiencias','Adaptar formato, tono y nivel de detalle para la alta dirección, los Estados Miembros y el público.'],
   ['Calendario de contenidos','Secuenciar los productos de comunicación en torno a hitos, eventos y prioridades institucionales.'],
   ['KPI','Definir indicadores prácticos para monitorear la entrega, el alcance y la interacción.'],
   ['GA4','Usar analítica web para entender el tráfico y el comportamiento de la audiencia.']],
 ],
 fr:[
  [['Notes d’information','Pour la haute direction et les rencontres de haut niveau, en condensant le contenu technique en points clairs et prêts pour la décision.'],
   ['Éléments de langage','Préparés pour des discours, des échanges bilatéraux et des discussions intergouvernementales.'],
   ['Messages clés','Messages centraux testés pour leur clarté et leur cohérence entre publics et canaux.'],
   ['Articles','Rédaction et structuration de récits institutionnels pour le web et les produits d’information.'],
   ['Présentations','Structure visuelle et narrative pour les briefings, réunions et événements institutionnels.'],
   ['Rapports','Synthèse d’informations techniques ou de suivi en documents structurés et lisibles.']],
  [['Contenu Drupal','Édition et publication de contenu web institutionnel pour le public et les États membres.'],
   ['Lettres d’information','Contenu éditorial récurrent alliant rédaction, mise en page et présentation orientée public.'],
   ['Visualisation de données','Transformer des données techniques ou de suivi en visuels favorisant la compréhension et le dialogue.'],
   ['Expositions','Structurer récits institutionnels et données probantes en formats explorables sur le web.'],
   ['Réseaux sociaux','Adapter le contenu institutionnel à des formats sociaux courts et orientés public.']],
  [['Supports d’événements','Visuels, présentations et contenus d’appui pour des événements intergouvernementaux et de renforcement des capacités.'],
   ['Vidéo et multimédia','Concept, scénario, montage et narration visuelle pour la communication institutionnelle.'],
   ['Produits de connaissance','Transformer des contributions techniques ou d’experts en supports de référence accessibles et réutilisables.'],
   ['Récits de parties prenantes','Transformer les points de vue de bénéficiaires, d’experts ou de partenaires en contenus concis et humains.'],
   ['Coordination des partenaires','Travailler avec des partenaires gouvernementaux, techniques et de communication pour faire aboutir les produits.']],
  [['Campagnes de communication','Traduire des objectifs en publics, messages, canaux, responsabilités et échéances.'],
   ['Ciblage des publics','Adapter le format, le ton et le niveau de détail pour la haute direction, les États membres et le public.'],
   ['Calendrier de contenu','Séquencer les productions de communication autour des jalons, événements et priorités institutionnelles.'],
   ['KPI','Définir des indicateurs concrets pour suivre la livraison, la portée et l’engagement.'],
   ['GA4','Utiliser l’analyse web pour comprendre le trafic et le comportement du public.']],
 ],
 zh:[
  [['简报','面向高层管理与高级别会晤，把技术内容浓缩成清晰、可供决策的要点。'],
   ['发言要点','为演讲、双边交流和政府间讨论准备的发言口径。'],
   ['核心信息','经过检验、在不同受众和渠道间保持清晰一致的核心信息。'],
   ['新闻稿','为网页和信息类产品撰写并组织机构新闻内容。'],
   ['演示文稿','为简报、会议和机构活动搭建视觉与叙事结构。'],
   ['报告','把技术或监测信息整理成结构清晰、易读的文件。']],
  [['Drupal网页内容','为公众和会员国受众编辑并发布机构网页内容。'],
   ['通讯','结合撰写、排版与受众导向呈现的常规编辑内容。'],
   ['数据可视化','把技术或监测数据转化为有助于理解和讨论的可视化内容。'],
   ['展览','把机构故事与证据组织成可探索的网页展示形式。'],
   ['社交媒体','把机构内容改写成适合社交媒体的短篇、受众导向内容。']],
  [['活动物料','为政府间会议和能力建设活动制作视觉、演示与配套内容。'],
   ['视频与多媒体','为机构传播提供构思、脚本、剪辑与视觉叙事。'],
   ['知识产品','把技术或专家意见转化为易于获取、可重复使用的参考材料。'],
   ['利益相关方故事','把受益方、专家或合作伙伴的视角转化为简洁、以人为本的内容。'],
   ['合作伙伴协调','与政府、技术和传播合作伙伴协作，把产品从构思推进到交付。']],
  [['传播活动策划','把目标转化为受众、信息、渠道、责任分工与时间安排。'],
   ['受众定位','根据高层管理人员、会员国和公众受众调整形式、语气与详略程度。'],
   ['内容日历','围绕重要节点、活动与机构优先事项安排传播产出的节奏。'],
   ['KPI','设定切实可行的指标，用于跟踪交付、触达与互动情况。'],
   ['GA4','借助网站分析了解流量与受众行为。']],
 ],
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

/* ── hover/focus 淡出说明（用于 mini-process 和 More Communication Work）── */
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
  });
  navList.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click',()=>{
      navList.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
      toggle.textContent='☰';
    });
  });
})();

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
