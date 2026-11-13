/* =====================
   PLASTISERVI — Products data
   ===================== */
/* Sube este número cada vez que se reemplace una foto en img/products/
   para forzar que el navegador descargue la versión nueva. */
const IMG_V = 1794608064;

const PRODUCTS = {

  /* ---- LÍNEA CONDUIT ---- */
  'conduit-tubo-clase1': {
    name: 'Tubería Conduit Clase I', line: 'Línea Conduit', lineSlug: 'conduit', lineUrl: 'conduit.html',
    desc: 'Tubo PVC rígido Clase I (750N, resistencia media-liviana) para canalización eléctrica en trazados de baja exigencia mecánica: interior de losas, muros y ductos protegidos. Se complementa con curvas, coplas y terminales de la línea Conduit.',
    specs: ['Norma NCh 2114 / IEC 61386','PVC rígido autoextinguible','Clase I — 750N','110 mm'],
    hasType:false, hasClass:false,
    sizes:['110mm']
  },
  'conduit-tubo-clase2': {
    name: 'Tubería Conduit Clase II', line: 'Línea Conduit', lineSlug: 'conduit', lineUrl: 'conduit.html',
    desc: 'Tubo PVC rígido Clase II para instalaciones eléctricas de exigencia media: losas, muros y canalizaciones embutidas en obra civil e industrial. Se complementa con curvas, coplas y terminales de la línea Conduit.',
    specs: ['Norma NCh 2114 / IEC 61386','PVC rígido autoextinguible','Clase II','40 – 160 mm'],
    hasType:false, hasClass:false,
    sizes:['40mm','50mm','63mm','75mm','90mm','110mm','140mm','160mm']
  },
  'conduit-tubo-clase3': {
    name: 'Tubería Conduit Clase III', line: 'Línea Conduit', lineSlug: 'conduit', lineUrl: 'conduit.html',
    desc: 'Tubo PVC rígido Clase III (1250N, resistencia fuerte) para canalización eléctrica subterránea y en zonas de tránsito vehicular o alta exigencia mecánica. Se complementa con curvas, coplas y terminales de la línea Conduit.',
    specs: ['Norma NCh 2114 / IEC 61386','PVC rígido autoextinguible','Clase III — 1250N','25 – 160 mm'],
    hasType:false, hasClass:false,
    sizes:['25mm','32mm','40mm','50mm','63mm','75mm','90mm','110mm','140mm','160mm']
  },
  'conduit-tubo-clase4': {
    name: 'Tubería Conduit Clase IV', line: 'Línea Conduit', lineSlug: 'conduit', lineUrl: 'conduit.html',
    desc: 'Tubo PVC rígido Clase IV (1250N) de diámetro chico, para canalización eléctrica embutida en muros y losas en instalaciones domiciliarias y de baja carga de cables. Se complementa con curvas, coplas y terminales de la línea Conduit.',
    specs: ['Norma NCh 2114 / IEC 61386','PVC rígido autoextinguible','Clase IV — 1250N','16 – 20 mm'],
    hasType:false, hasClass:false,
    sizes:['16mm','20mm']
  },
  'conduit-curvas-90': {
    name: 'Curvas 90°', line: 'Línea Conduit', lineSlug: 'conduit', lineUrl: 'conduit.html',
    desc: 'Permite cambios de ángulo a 90° en cañerías conduit. Disponible en tipo Cementar (adhesivo) y Anger (junta elástica, sin adhesivo). Clases I–IV según resistencia mecánica.',
    specs: ['Norma IEC 61386','PVC autoextinguible','Tipos Cementar y Anger','Clases I, II, III, IV','16 – 160 mm'],
    hasType:true, hasClass:true, typeLabel:'Tipo de unión',
    types:{
      'Cementar':{'I':['75mm','90mm','110mm','140mm','160mm'],'II':['40mm','50mm','63mm','75mm','90mm','110mm','140mm','160mm'],'III':['25mm','32mm','40mm','50mm','63mm','75mm','90mm','110mm','140mm','160mm'],'IV':['16mm','20mm']},
      'Anger':{'I':['75mm','90mm','110mm','140mm','160mm'],'II':['63mm','75mm','90mm','110mm','140mm','160mm'],'III':['63mm','75mm','90mm','110mm','140mm','160mm']}
    }
  },
  'conduit-curvas-45': {
    name: 'Curvas 45°', line: 'Línea Conduit', lineSlug: 'conduit', lineUrl: 'conduit.html',
    desc: 'Cambio de ángulo suave a 45° para trayectos que requieren una desviación gradual. Menor tensión sobre el cable que una curva de 90°. Tipo Cementar (adhesivo) o Anger (junta elástica).',
    specs: ['Norma IEC 61386','PVC autoextinguible','Tipos Cementar y Anger','Clases I, II, III, IV','16 – 160 mm'],
    hasType:true, hasClass:true, typeLabel:'Tipo de unión',
    types:{
      'Cementar':{'I':['75mm','90mm','110mm','140mm','160mm'],'II':['40mm','50mm','63mm','75mm','90mm','110mm','140mm','160mm'],'III':['25mm','32mm','40mm','50mm','63mm','75mm','90mm','110mm','140mm','160mm'],'IV':['16mm','20mm']},
      'Anger':{'I':['75mm','90mm','110mm','140mm','160mm'],'II':['63mm','75mm','90mm','110mm','140mm','160mm'],'III':['63mm','75mm','90mm','110mm','140mm','160mm']}
    }
  },
  'conduit-curvas-r600': {
    name: 'Curvas 90° Radio 600', line: 'Línea Conduit', lineSlug: 'conduit', lineUrl: 'conduit.html',
    desc: 'Radio largo (R=600mm) para tendido de cables sin dañar el aislamiento. Esencial en instalaciones industriales de alta exigencia. Tipo Cementar (adhesivo) o Anger (junta elástica).',
    specs: ['Radio R=600mm','PVC autoextinguible','Tipos Cementar y Anger','Clases I, II, IV','16 – 160 mm'],
    hasType:true, hasClass:true, typeLabel:'Tipo de unión',
    types:{
      'Cementar':{'I':['75mm','90mm','110mm','140mm','160mm'],'II':['40mm','50mm','63mm','75mm','90mm','110mm','140mm','160mm'],'III':['25mm','32mm'],'IV':['16mm','20mm']},
      'Anger':{'I':['75mm','90mm','110mm','140mm','160mm'],'II':['63mm','75mm','90mm','110mm','140mm','160mm']}
    }
  },
  'conduit-salidas-caja': {
    name: 'Salidas de Caja', line: 'Línea Conduit', lineSlug: 'conduit', lineUrl: 'conduit.html',
    desc: 'Conecta la cañería conduit a cajas eléctricas de registro o derivación. Ingreso ordenado y seguro del ducto. Disponible en Clases I, II y III.',
    specs: ['Norma IEC 61386','PVC autoextinguible','Sin tipo Cementar/Anger','Clases I, II y III','63 – 140 mm'],
    hasType:false, hasClass:true,
    classes:{'I':['75mm','90mm','110mm','140mm'],'II':['63mm','75mm','90mm','110mm','140mm'],'III':['63mm','75mm','90mm','110mm','140mm']}
  },
  'conduit-coplas': {
    name: 'Coplas', line: 'Línea Conduit', lineSlug: 'conduit', lineUrl: 'conduit.html',
    desc: 'Une dos tramos de cañería conduit del mismo diámetro. Garantiza continuidad y estanqueidad en la instalación eléctrica. Clases I, II y III.',
    specs: ['Norma IEC 61386','PVC autoextinguible','Clases I, II y III','40 – 160 mm'],
    hasType:false, hasClass:true,
    classes:{'I':['75mm','90mm','110mm','140mm','160mm'],'II':['40mm','50mm','63mm','75mm','90mm','110mm','140mm','160mm'],'III':['63mm','75mm','90mm','110mm','140mm','160mm']}
  },
  'conduit-terminal-cam': {
    name: 'Terminal Cámara', line: 'Línea Conduit', lineSlug: 'conduit', lineUrl: 'conduit.html',
    desc: 'Conexión de cañería conduit a cámaras de registro o cajas eléctricas. Terminación limpia y sellada en el punto de ingreso. Tipo Cementar (adhesivo) o Anger (junta elástica), Clases I–IV.',
    specs: ['Norma IEC 61386','Tipos Cementar y Anger','Clases I, II, III, IV','16 – 160 mm'],
    hasType:true, hasClass:true, typeLabel:'Tipo de unión',
    types:{
      'Cementar':{'I':['75mm','90mm','110mm','140mm','160mm'],'II':['40mm','50mm','63mm','75mm','90mm','110mm','140mm','160mm'],'III':['25mm','32mm','50mm','63mm','75mm','90mm','110mm','140mm','160mm'],'IV':['16mm','20mm']},
      'Anger':{'I':['75mm','90mm','110mm','140mm','160mm'],'II':['63mm','75mm','90mm','110mm','140mm','160mm']}
    }
  },
  'conduit-terminal-he': {
    name: 'Terminal HE', line: 'Línea Conduit', lineSlug: 'conduit', lineUrl: 'conduit.html',
    desc: 'Terminal HE (hilo exterior): extremo con rosca macho para conectar a accesorios con rosca hembra, tableros y cajas eléctricas. Clases II y III.',
    specs: ['Rosca exterior (HE)','Clases II y III','110 – 160 mm'],
    hasType:false, hasClass:true,
    classes:{'II':['140mm','160mm'],'III':['110mm']}
  },
  'conduit-terminal-hect': {
    name: 'Terminal HE C/T', line: 'Línea Conduit', lineSlug: 'conduit', lineUrl: 'conduit.html',
    desc: 'Terminal HE con tuerca de fijación incorporada. Mayor seguridad mecánica en el punto de conexión a tablero. Clases II y III.',
    specs: ['Incluye tuerca de fijación','Clases II y III','110 – 160 mm'],
    hasType:false, hasClass:true,
    classes:{'II':['140mm','160mm'],'III':['110mm']}
  },
  'conduit-camaras': {
    name: 'Cámaras de Registro', line: 'Línea Conduit', lineSlug: 'conduit', lineUrl: 'conduit.html',
    desc: 'Elemento de registro subterráneo con tapa para inspección y mantenimiento de cañerías conduit. Disponibles en 110mm y 160mm con múltiples salidas.',
    specs: ['Con tapa de registro','110mm y 160mm','20, 25 y 32 salidas'],
    hasType:false, hasClass:false,
    sizes:['110mm / 20 salidas','110mm / 25 salidas','110mm / 32 salidas','160mm / 20 salidas','160mm / 25 salidas']
  },

  /* ---- FITTING SCHEDULE 40/80 ---- */
  'sch4080-tubo-40': {
    name: 'Tubería Schedule 40', line: 'Fitting Schedule 40/80', lineSlug: 'schedule-40-80', lineUrl: 'schedule-40-80.html',
    desc: 'Tubo PVC Schedule 40 en color naranja, pared estándar, para instalaciones eléctricas industriales. Compatible con curvas, coplas y terminales Schedule 40/80.',
    specs: ['Norma ASTM D-1785','PVC naranja rígido','Pared estándar','1" – 8"'],
    hasType:false, hasClass:false,
    sizes:['1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"','8"']
  },
  'sch4080-tubo-80': {
    name: 'Tubería Schedule 80', line: 'Fitting Schedule 40/80', lineSlug: 'schedule-40-80', lineUrl: 'schedule-40-80.html',
    desc: 'Tubo PVC Schedule 80 en color naranja, pared reforzada, mayor resistencia al impacto y a la compresión que el Schedule 40. Para instalaciones eléctricas industriales de alta exigencia. Compatible con curvas, coplas y terminales Schedule 40/80.',
    specs: ['Norma ASTM D-1785','PVC naranja rígido','Pared reforzada','1" – 8"'],
    hasType:false, hasClass:false,
    sizes:['1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"','8"']
  },
  'sch4080-curvas-90': {
    name: 'Curvas 90°', line: 'Fitting Schedule 40/80', lineSlug: 'schedule-40-80', lineUrl: 'schedule-40-80.html',
    desc: 'Curva 90° Schedule 40/80 en PVC naranja. Schedule 40 pared estándar; Schedule 80 pared reforzada y mayor resistencia a presión. De 1/2" a 8".',
    specs: ['Norma ASTM D-1785','PVC naranja','Schedule 40 y 80','1/2" – 8"'],
    hasType:true, hasClass:false, typeLabel:'Schedule',
    types:{'Sch 40':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"','8"'],'Sch 80':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"','8"']}
  },
  'sch4080-curvas-r600': {
    name: 'Curvas 90° Radio 600', line: 'Fitting Schedule 40/80', lineSlug: 'schedule-40-80', lineUrl: 'schedule-40-80.html',
    desc: 'Radio largo (R=600mm) Schedule 40/80. Mayor radio de curvatura para tendido de cables sin deterioro del aislamiento en instalaciones industriales.',
    specs: ['Radio R=600mm','PVC naranja','Schedule 40 y 80','1/2" – 8"'],
    hasType:true, hasClass:false, typeLabel:'Schedule',
    types:{'Sch 40':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"','8"'],'Sch 80':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"','8"']}
  },
  'sch4080-curvas-45': {
    name: 'Curvas 45°', line: 'Fitting Schedule 40/80', lineSlug: 'schedule-40-80', lineUrl: 'schedule-40-80.html',
    desc: 'Desviación suave a 45° para instalaciones Schedule. Menor tensión sobre el aislamiento de cables en tendidos con cambios graduales.',
    specs: ['PVC naranja','Schedule 40 y 80','1/2" – 8"'],
    hasType:true, hasClass:false, typeLabel:'Schedule',
    types:{'Sch 40':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"','8"'],'Sch 80':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"','8"']}
  },
  'sch4080-terminal-cam': {
    name: 'Terminal Cámara', line: 'Fitting Schedule 40/80', lineSlug: 'schedule-40-80', lineUrl: 'schedule-40-80.html',
    desc: 'Conexión de cañería Schedule a cámaras de registro o cajas eléctricas. Terminación limpia y sellada. Schedule 40 y 80.',
    specs: ['PVC naranja','Schedule 40 y 80','1/2" – 8"'],
    hasType:true, hasClass:false, typeLabel:'Schedule',
    types:{'Sch 40':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"','8"'],'Sch 80':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"','8"']}
  },
  'sch4080-terminal-he': {
    name: 'Terminal HE', line: 'Fitting Schedule 40/80', lineSlug: 'schedule-40-80', lineUrl: 'schedule-40-80.html',
    desc: 'Terminal HE (hilo exterior): extremo con rosca macho para conectar a accesorios con rosca hembra y tableros. Schedule 40 y 80, de 1/2" a 6".',
    specs: ['Rosca exterior (HE)','Schedule 40 y 80','1/2" – 6"'],
    hasType:true, hasClass:false, typeLabel:'Schedule',
    types:{'Sch 40':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"'],'Sch 80':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"']}
  },
  'sch4080-terminal-hect': {
    name: 'Terminal HE C/T', line: 'Fitting Schedule 40/80', lineSlug: 'schedule-40-80', lineUrl: 'schedule-40-80.html',
    desc: 'Terminal HE con tuerca de fijación. Mayor seguridad mecánica en la conexión. Schedule 40 y 80, de 1/2" a 6".',
    specs: ['Incluye tuerca de fijación','Schedule 40 y 80','1/2" – 6"'],
    hasType:true, hasClass:false, typeLabel:'Schedule',
    types:{'Sch 40':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"'],'Sch 80':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"']}
  },
  'sch4080-copla-cem': {
    name: 'Copla Cementar', line: 'Fitting Schedule 40/80', lineSlug: 'schedule-40-80', lineUrl: 'schedule-40-80.html',
    desc: 'Une dos tramos de cañería con adhesivo PVC. Unión resistente y hermética. Schedule 40 y 80, de 1/2" a 8".',
    specs: ['Unión por adhesivo','Schedule 40 y 80','1/2" – 8"'],
    hasType:true, hasClass:false, typeLabel:'Schedule',
    types:{'Sch 40':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"','8"'],'Sch 80':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"','8"']}
  },
  'sch4080-copla-hihi': {
    name: 'Copla HI-HI', line: 'Fitting Schedule 40/80', lineSlug: 'schedule-40-80', lineUrl: 'schedule-40-80.html',
    desc: 'Unión roscada hembra-hembra para cañería Schedule. Empalma dos tramos con rosca interior en ambos extremos. Schedule 40 y 80, de 1/2" a 6".',
    specs: ['Roscada HI-HI','Schedule 40 y 80','1/2" – 6"'],
    hasType:true, hasClass:false, typeLabel:'Schedule',
    types:{'Sch 40':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"'],'Sch 80':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"']}
  },
  'sch4080-terminal-hi': {
    name: 'Terminal HI', line: 'Fitting Schedule 40/80', lineSlug: 'schedule-40-80', lineUrl: 'schedule-40-80.html',
    desc: 'Terminal HI (hilo interior): extremo con rosca hembra para recibir accesorios con rosca macho, válvulas o llaves de paso. Schedule 40 y 80, de 1/2" a 6".',
    specs: ['Rosca interior (HI)','Schedule 40 y 80','1/2" – 6"'],
    hasType:true, hasClass:false, typeLabel:'Schedule',
    types:{'Sch 40':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"'],'Sch 80':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"']}
  },
  /* ---- SCHEDULE GRIS UV ---- */
  'grisuv-curvas-90': {
    name: 'Curvas 90° Gris UV', line: 'Schedule Gris UV', lineSlug: 'schedule-gris-uv', lineUrl: 'schedule-gris-uv.html',
    desc: 'Curva 90° PVC gris con aditivo UV. Para instalaciones en exterior, azoteas y zonas descubiertas. El aditivo previene deterioro y decoloración solar.',
    specs: ['Protección UV integrada','PVC gris','Schedule 40 y 80','1/2" – 8"'],
    hasType:true, hasClass:false, typeLabel:'Schedule',
    types:{'Sch 40':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"','8"'],'Sch 80':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"','8"']}
  },
  'grisuv-curvas-r600': {
    name: 'Curvas 90° R-600 Gris UV', line: 'Schedule Gris UV', lineSlug: 'schedule-gris-uv', lineUrl: 'schedule-gris-uv.html',
    desc: 'Radio amplio (R=600mm) con protección UV. Protege el aislamiento de cables en instalaciones exteriores con tendidos largos.',
    specs: ['Radio R=600mm + UV','PVC gris','Schedule 40 y 80','1/2" – 8"'],
    hasType:true, hasClass:false, typeLabel:'Schedule',
    types:{'Sch 40':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"','8"'],'Sch 80':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"','8"']}
  },
  'grisuv-curvas-45': {
    name: 'Curvas 45° Gris UV', line: 'Schedule Gris UV', lineSlug: 'schedule-gris-uv', lineUrl: 'schedule-gris-uv.html',
    desc: 'Desviación suave a 45° para exteriores con exposición solar. Mayor durabilidad frente a degradación UV que los productos estándar.',
    specs: ['Protección UV','PVC gris','Schedule 40 y 80','1/2" – 8"'],
    hasType:true, hasClass:false, typeLabel:'Schedule',
    types:{'Sch 40':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"','8"'],'Sch 80':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"','8"']}
  },
  'grisuv-terminal-cam': {
    name: 'Terminal Cámara Gris UV', line: 'Schedule Gris UV', lineSlug: 'schedule-gris-uv', lineUrl: 'schedule-gris-uv.html',
    desc: 'Conexión a cámaras de registro en exterior. Resistencia UV previene el deterioro en instalaciones descubiertas permanentes.',
    specs: ['Protección UV','PVC gris','Schedule 40 y 80','1/2" – 8"'],
    hasType:true, hasClass:false, typeLabel:'Schedule',
    types:{'Sch 40':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"','8"'],'Sch 80':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"','8"']}
  },
  'grisuv-terminal-he': {
    name: 'Terminal HE Gris UV', line: 'Schedule Gris UV', lineSlug: 'schedule-gris-uv', lineUrl: 'schedule-gris-uv.html',
    desc: 'Terminal HE (hilo exterior) con protección UV para conectar a accesorios con rosca hembra en instalaciones exteriores. Schedule 40 y 80, de 1/2" a 6".',
    specs: ['Rosca exterior (HE) + UV','PVC gris','Schedule 40 y 80','1/2" – 6"'],
    hasType:true, hasClass:false, typeLabel:'Schedule',
    types:{'Sch 40':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"'],'Sch 80':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"']}
  },
  'grisuv-terminal-hi': {
    name: 'Terminal HI Gris UV', line: 'Schedule Gris UV', lineSlug: 'schedule-gris-uv', lineUrl: 'schedule-gris-uv.html',
    desc: 'Terminal HI (hilo interior) con protección UV para recibir accesorios con rosca macho en instalaciones exteriores. Schedule 40 y 80, de 1/2" a 6".',
    specs: ['Rosca interior (HI) + UV','PVC gris','Schedule 40 y 80','1/2" – 6"'],
    hasType:true, hasClass:false, typeLabel:'Schedule',
    types:{'Sch 40':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"'],'Sch 80':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"']}
  },
  'grisuv-terminal-hect': {
    name: 'Terminal HE C/T Gris UV', line: 'Schedule Gris UV', lineSlug: 'schedule-gris-uv', lineUrl: 'schedule-gris-uv.html',
    desc: 'Con tuerca de fijación y protección UV. Máxima seguridad mecánica en conexiones exteriores permanentes.',
    specs: ['Tuerca + UV','PVC gris','Schedule 40 y 80','1/2" – 6"'],
    hasType:true, hasClass:false, typeLabel:'Schedule',
    types:{'Sch 40':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"'],'Sch 80':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"']}
  },
  'grisuv-copla-cem': {
    name: 'Copla Cementar Gris UV', line: 'Schedule Gris UV', lineSlug: 'schedule-gris-uv', lineUrl: 'schedule-gris-uv.html',
    desc: 'Unión por adhesivo resistente a UV. Para empalmes en exteriores expuestos al sol con máxima durabilidad.',
    specs: ['Adhesivo + UV','PVC gris','Schedule 40 y 80','1/2" – 8"'],
    hasType:true, hasClass:false, typeLabel:'Schedule',
    types:{'Sch 40':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"','8"'],'Sch 80':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"','8"']}
  },
  'grisuv-copla-hihi': {
    name: 'Copla HI-HI Gris UV', line: 'Schedule Gris UV', lineSlug: 'schedule-gris-uv', lineUrl: 'schedule-gris-uv.html',
    desc: 'Unión roscada hembra-hembra con protección UV. Para exteriores donde se requiere máxima resistencia mecánica y solar.',
    specs: ['Roscada HI-HI + UV','PVC gris','Schedule 40 y 80','1/2" – 6"'],
    hasType:true, hasClass:false, typeLabel:'Schedule',
    types:{'Sch 40':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"'],'Sch 80':['1/2"','3/4"','1"','1¼"','1½"','2"','2½"','3"','4"','5"','6"']}
  },

  /* ---- ESPIGAS SCHEDULE ---- */
  'sch4080-espiga-he': {
    name: 'Terminal Espiga HE', line: 'Fitting Schedule 40/80', lineSlug: 'schedule-40-80', lineUrl: 'schedule-40-80.html',
    desc: 'Combina un extremo con rosca macho (hilo exterior) y un extremo espiga cónico para conectar mangueras flexibles mediante abrazadera. Ideal para enlazar manguera con válvulas, filtros o bombas.',
    specs: ['Rosca HE + espiga para manguera','PVC naranja Schedule','1" – 4"'],
    hasType:false, hasClass:false,
    sizes:['1"','1¼"','1½"','2"','2½"','3"','4"']
  },
  'sch4080-espiga-hi': {
    name: 'Terminal Espiga HI', line: 'Fitting Schedule 40/80', lineSlug: 'schedule-40-80', lineUrl: 'schedule-40-80.html',
    desc: 'Combina un extremo con rosca hembra (hilo interior) y un extremo espiga cónico para conectar mangueras flexibles mediante abrazadera. Recibe accesorios con rosca macho.',
    specs: ['Rosca HI + espiga para manguera','PVC naranja Schedule','1" – 4"'],
    hasType:false, hasClass:false,
    sizes:['1"','1¼"','1½"','2"','2½"','3"','4"']
  },
  'sch4080-espiga-copla': {
    name: 'Copla Espiga', line: 'Fitting Schedule 40/80', lineSlug: 'schedule-40-80', lineUrl: 'schedule-40-80.html',
    desc: 'Une dos tramos de manguera flexible mediante dos extremos espiga cónicos y abrazaderas. Unión rápida y desmontable, sin adhesivo.',
    specs: ['Acople espiga para manguera','PVC naranja Schedule','1" – 1½"'],
    hasType:false, hasClass:false,
    sizes:['1"','1¼"','1½"']
  },
  'sch4080-espiga-reduc': {
    name: 'Reducción Espiga', line: 'Fitting Schedule 40/80', lineSlug: 'schedule-40-80', lineUrl: 'schedule-40-80.html',
    desc: 'Reducción con dos extremos espiga cónicos de distinto diámetro para unir mangueras de distinto calibre mediante abrazaderas, sin adhesivo.',
    specs: ['Reducción espiga para manguera','PVC naranja Schedule','2"×1" – 6"×4"'],
    hasType:false, hasClass:false,
    sizes:['2"×1"','3"×2"','4"×3"','6"×4"']
  },

  /* ---- FITTING HIDRÁULICO ---- */
  'hidraul-tubo-pn10': {
    name: 'Tubería Hidráulica PN-10', line: 'Fitting Hidráulico', lineSlug: 'hidraulico', lineUrl: 'hidraulico.html',
    desc: 'Tubo PVC presión nominal PN-10 (10 bar) para redes de agua potable, riego y distribución industrial de fluidos. Extremo espiga compatible con unión Cementar (adhesivo) o Anger (junta elástica). Se complementa con curvas, coplas y reducciones de la línea Fitting Hidráulico.',
    specs: ['Norma NCh 399','PVC rígido presión','PN-10 (10 bar)','32 – 250 mm'],
    hasType:false, hasClass:false,
    sizes:['32mm','40mm','50mm','63mm','75mm','90mm','110mm','125mm','140mm','160mm','200mm','250mm']
  },
  'hidraul-tubo-pn6': {
    name: 'Tubería Hidráulica PN-6', line: 'Fitting Hidráulico', lineSlug: 'hidraulico', lineUrl: 'hidraulico.html',
    desc: 'Tubo PVC presión nominal PN-6 (6 bar) para redes de agua potable, riego y distribución de fluidos donde la exigencia de presión es menor que PN-10. Extremo espiga compatible con unión Cementar o Anger. Se complementa con curvas, coplas y reducciones de la línea Fitting Hidráulico.',
    specs: ['Norma NCh 399','PVC rígido presión','PN-6 (6 bar)','40 – 250 mm'],
    hasType:false, hasClass:false,
    sizes:['40mm','50mm','63mm','75mm','90mm','110mm','125mm','140mm','160mm','200mm','250mm']
  },
  'hidraul-tubo-pn16': {
    name: 'Tubería Hidráulica PN-16 / PN-12,5', line: 'Fitting Hidráulico', lineSlug: 'hidraulico', lineUrl: 'hidraulico.html',
    desc: 'Tubo PVC de alta presión PN-16 y PN-12,5 (12,5 y 16 bar) para tramos cortos de distribución que requieren mayor presión nominal, como arranques de red o conexiones domiciliarias. Compatible con curvas, coplas y reducciones de la línea Fitting Hidráulico.',
    specs: ['Norma NCh 399','PVC rígido presión','PN-16 y PN-12,5','20 – 25 mm'],
    hasType:true, hasClass:false, typeLabel:'Presión nominal (PN)',
    types:{'PN-16':['20mm'],'PN-12,5':['25mm']}
  },
  'hidraul-curvas-90': {
    name: 'Curvas 90°', line: 'Fitting Hidráulico', lineSlug: 'hidraulico', lineUrl: 'hidraulico.html',
    desc: 'Curva 90° hidráulica PVC. Cambio de ángulo en redes de agua potable y distribución de fluidos a presión. Disponible en tipo Anger (junta elástica) y Cementar (adhesivo). PN 10.',
    specs: ['Material Hidráulico PVC','Tipo Anger y Cementar','PN 10','32 – 400 mm'],
    hasType:true, hasClass:false, typeLabel:'Tipo de unión',
    types:{
      'Anger':  ['63mm','75mm','90mm','110mm','125mm','140mm','160mm','180mm','200mm','250mm','315mm','355mm','400mm'],
      'Cementar':['32mm','40mm','50mm','63mm','75mm','90mm','110mm','125mm','140mm','160mm','180mm','200mm','250mm','315mm','355mm','400mm']
    }
  },
  'hidraul-curvas-45': {
    name: 'Curvas 45°', line: 'Fitting Hidráulico', lineSlug: 'hidraulico', lineUrl: 'hidraulico.html',
    desc: 'Desviación suave a 45° para redes hidráulicas. Menor pérdida de carga que una curva de 90°. Ideal para instalaciones que requieren cambios de ángulo gradual.',
    specs: ['Material Hidráulico PVC','Tipo Anger y Cementar','PN 10','32 – 400 mm'],
    hasType:true, hasClass:false, typeLabel:'Tipo de unión',
    types:{
      'Anger':  ['63mm','75mm','90mm','110mm','125mm','140mm','160mm','180mm','200mm','250mm','315mm','355mm','400mm'],
      'Cementar':['32mm','40mm','50mm','63mm','75mm','90mm','110mm','125mm','140mm','160mm','180mm','200mm','250mm','315mm','355mm','400mm']
    }
  },
  'hidraul-curvas-225': {
    name: 'Curvas 22,5°', line: 'Fitting Hidráulico', lineSlug: 'hidraulico', lineUrl: 'hidraulico.html',
    desc: 'Desviación mínima de 22,5° para ajustes de trayecto en redes de distribución de agua. Mínima turbulencia y pérdida de presión. Tipo Anger y Cementar.',
    specs: ['Material Hidráulico PVC','Tipo Anger y Cementar','PN 10','32 – 400 mm'],
    hasType:true, hasClass:false, typeLabel:'Tipo de unión',
    types:{
      'Anger':  ['63mm','75mm','90mm','110mm','125mm','140mm','160mm','180mm','200mm','250mm','315mm','355mm','400mm'],
      'Cementar':['32mm','40mm','50mm','63mm','75mm','90mm','110mm','125mm','140mm','160mm','180mm','200mm','250mm','315mm','355mm','400mm']
    }
  },
  'hidraul-copla-rep': {
    name: 'Coplas de Reparación', line: 'Fitting Hidráulico', lineSlug: 'hidraulico', lineUrl: 'hidraulico.html',
    desc: 'Unión deslizante para reparar tramos de tubería sin desmontar la red. No requiere corte cuadrado. Tipo Anger con junta elástica. PN 10.',
    specs: ['Junta elástica Anger','Sin adhesivo','PN 10','63 – 400 mm'],
    hasType:false, hasClass:false,
    sizes:['63mm PN10','75mm PN10','90mm PN10','110mm PN10','125mm PN10','140mm PN10','160mm PN10','180mm PN10','200mm PN10','250mm PN10','315mm PN10','355mm PN10','400mm PN10']
  },
  'hidraul-copla-cem': {
    name: 'Coplas Cementar', line: 'Fitting Hidráulico', lineSlug: 'hidraulico', lineUrl: 'hidraulico.html',
    desc: 'Une dos tramos de tubería hidráulica con adhesivo PVC. Unión permanente y hermética para agua potable y fluidos a presión. PN 10.',
    specs: ['Unión por adhesivo','Material Hidráulico PVC','PN 10','63 – 400 mm'],
    hasType:false, hasClass:false,
    sizes:['63mm PN10','75mm PN10','90mm PN10','110mm PN10','125mm PN10','140mm PN10','160mm PN10','180mm PN10','200mm PN10','250mm PN10','315mm PN10','355mm PN10','400mm PN10']
  },
  'hidraul-reduc-anger': {
    name: 'Reducciones Anger', line: 'Fitting Hidráulico', lineSlug: 'hidraulico', lineUrl: 'hidraulico.html',
    desc: 'Reducción concéntrica con junta elástica Anger para transición entre diámetros en redes hidráulicas. Sin adhesivo, instalación rápida en campo. PN 10.',
    specs: ['Junta elástica Anger','PN 10','63×40 – 400×355 mm'],
    hasType:false, hasClass:false,
    sizes:['63×40mm','63×50mm','75×50mm','75×63mm','90×63mm','90×75mm','110×63mm','110×75mm','110×90mm','125×90mm','125×110mm','140×90mm','140×110mm','140×125mm','160×110mm','160×125mm','160×140mm','180×160mm','200×140mm','200×160mm','200×180mm','250×160mm','250×200mm','315×200mm','315×250mm','355×250mm','355×315mm','400×315mm','400×355mm']
  },
  'hidraul-reduc-cem': {
    name: 'Reducciones Cementar', line: 'Fitting Hidráulico', lineSlug: 'hidraulico', lineUrl: 'hidraulico.html',
    desc: 'Reducción concéntrica por adhesivo para transición de diámetros. Unión permanente en redes de agua potable y distribución industrial. PN 10.',
    specs: ['Unión por adhesivo','PN 10','25×20 – 400×355 mm'],
    hasType:false, hasClass:false,
    sizes:['25×20mm','32×20mm','32×25mm','40×25mm','40×32mm','50×32mm','50×40mm','63×40mm','63×50mm','75×40mm','75×50mm','75×63mm','90×63mm','90×75mm','110×63mm','110×75mm','110×90mm','125×90mm','125×110mm','140×90mm','140×110mm','140×125mm','160×110mm','160×125mm','160×140mm','180×160mm','200×140mm','200×160mm','200×180mm','250×160mm','250×200mm','315×200mm','315×250mm','355×250mm','355×315mm','400×315mm','400×355mm']
  },
  'hidraul-adaptador-gibault': {
    name: 'Adaptador Gibault', line: 'Fitting Hidráulico', lineSlug: 'hidraulico', lineUrl: 'hidraulico.html',
    desc: 'Unión deslizante tipo Gibault para reparación y empalme de tuberías hidráulicas sin necesidad de corte cuadrado. Permite movimiento axial y angular. PN 10.',
    specs: ['Tipo Gibault','Deslizante — sin adhesivo','PN 10','63 – 400 mm'],
    hasType:false, hasClass:false,
    sizes:['63mm PN10','75mm PN10','90mm PN10','110mm PN10','125mm PN10','140mm PN10','160mm PN10','180mm PN10','200mm PN10','250mm PN10','315mm PN10','355mm PN10','400mm PN10']
  },
  'hidraul-espiga-soldar': {
    name: 'Terminal Espiga Soldar', line: 'Fitting Hidráulico', lineSlug: 'hidraulico', lineUrl: 'hidraulico.html',
    desc: 'Terminal espiga para soldar a mangueras y acoples en redes hidráulicas de gran diámetro. Perfil cónico para ajuste hermético bajo presión.',
    specs: ['Espiga para soldar','Material Hidráulico','2" – 8"'],
    hasType:false, hasClass:false,
    sizes:['2"','3"','4"','6"','8"']
  },
  'hidraul-espiga-copla': {
    name: 'Copla Espiga', line: 'Fitting Hidráulico', lineSlug: 'hidraulico', lineUrl: 'hidraulico.html',
    desc: 'Une dos tramos de tubería hidráulica mediante acople espiga. Para redes de distribución de gran diámetro donde se requiere desmontaje periódico.',
    specs: ['Acople espiga','Material Hidráulico','2" – 8"'],
    hasType:false, hasClass:false,
    sizes:['2"','2½"','3"','4"','6"','8"']
  },
  'hidraul-copla-layflat': {
    name: 'Copla Layflat', line: 'Fitting Hidráulico', lineSlug: 'hidraulico', lineUrl: 'hidraulico.html',
    desc: 'Copla para mangueras layflat (planas). Permite conexión entre tramos de manguera flexible en sistemas de riego o trasvase de agua a presión media.',
    specs: ['Para manguera layflat','Material Hidráulico','2" – 8"'],
    hasType:false, hasClass:false,
    sizes:['2"','3"','4"','6"','8"']
  },
  'hidraul-terminal-layflat': {
    name: 'Terminal Layflat', line: 'Fitting Hidráulico', lineSlug: 'hidraulico', lineUrl: 'hidraulico.html',
    desc: 'Terminal para extremo de manguera layflat. Conecta la manguera plana a válvulas, bombas o redes fijas con sello hermético y montaje rápido.',
    specs: ['Para manguera layflat','Material Hidráulico','2" – 8"'],
    hasType:false, hasClass:false,
    sizes:['2"','3"','4"','6"','8"']
  },
  'hidraul-tapagorro': {
    name: 'Tapagorros', line: 'Fitting Hidráulico', lineSlug: 'hidraulico', lineUrl: 'hidraulico.html',
    desc: 'Tapón terminal para el cierre hermético de tramos en redes hidráulicas. Disponible en tipo Anger (junta elástica, sin adhesivo) y Cementar (adhesivo). PN 10.',
    specs: ['Material Hidráulico PVC','Tipo Anger y Cementar','PN 10','63 – 400 mm'],
    hasType:true, hasClass:false, typeLabel:'Tipo de unión',
    types:{
      'Anger':  ['63mm','75mm','90mm','110mm','125mm','140mm','160mm','180mm','200mm','250mm','315mm','355mm','400mm'],
      'Cementar':['63mm','75mm','90mm','110mm','125mm','140mm','160mm','180mm','200mm','250mm','315mm','355mm','400mm']
    }
  },

  /* ---- TUBERÍA SANITARIA ---- */
  'sanitario-tubo': {
    name: 'Tubería Sanitaria', line: 'Tubería Sanitaria', lineSlug: 'sanitario', lineUrl: 'productos.html#tuberias',
    desc: 'Tubo PVC gris para redes de desagüe domiciliario, alcantarillado y evacuación de aguas servidas. Unión por cementar (adhesivo). No apto para agua a presión, solo evacuación por gravedad.',
    specs: ['PVC sanitario gris','Unión cementar','Evacuación por gravedad','40 – 110 mm'],
    hasType:false, hasClass:false,
    sizes:['40mm','50mm','75mm','110mm']
  }
};

/* Group products by line */
const LINES = {
  'conduit': {
    title: 'Fitting Conduit',
    short: 'Conduit',
    type: 'electrica',
    typeLabel: 'Eléctrica · cables',
    url: 'conduit.html',
    desc: 'Accesorios para instalaciones eléctricas conduit. Tipos Cementar y Anger. Clases I–IV.',
    color: '#F4752A',
    products: Object.keys(PRODUCTS).filter(k => k.startsWith('conduit-'))
  },
  'schedule-40-80': {
    title: 'Fitting Schedule 40/80',
    short: 'Schedule 40/80',
    type: 'electrica',
    typeLabel: 'Eléctrica · industrial',
    url: 'schedule-40-80.html',
    desc: 'PVC naranja de alta resistencia. Norma ASTM D-1785. Schedule 40 y 80.',
    color: '#F4752A',
    products: Object.keys(PRODUCTS).filter(k => k.startsWith('sch4080-'))
  },
  'schedule-gris-uv': {
    title: 'Schedule Gris UV',
    short: 'Gris UV',
    type: 'electrica',
    typeLabel: 'Eléctrica · exteriores',
    url: 'schedule-gris-uv.html',
    desc: 'PVC gris con protección UV para exteriores e intemperie.',
    color: '#4a7c59',
    products: Object.keys(PRODUCTS).filter(k => k.startsWith('grisuv-'))
  },
  'hidraulico': {
    title: 'Fitting Hidráulico',
    short: 'Hidráulico',
    type: 'hidraulica',
    typeLabel: 'Hidráulica · agua',
    url: 'hidraulico.html',
    desc: 'Accesorios PVC para redes de agua a presión. Tipo Anger y Cementar. PN 10.',
    color: '#0369a1',
    products: Object.keys(PRODUCTS).filter(k => k.startsWith('hidraul-'))
  }
};
