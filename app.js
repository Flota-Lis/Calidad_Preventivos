// ─── WEBHOOK ─────────────────────────────────────────────────────────────────
const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbw6WK5u1F-pe3LZNQrRhRZrUomYQcO9y-NPgCuGO9IN8zUElN94f8TOP-ym7Br2ZOo/exec";
 
// ─── BASE DE DATOS COMPLETA ───────────────────────────────────────────────────
const dataInspecciones = {
 
  "250": [
    // ◆ Motor
    { sec: "Motor", name: "Cambio Aceite Motor", type: "bool" },
    { sec: "Motor", name: "Cambio Filtro Aceite Motor (sólo a las primeras 250 Hrs)", type: "bool" },
    { sec: "Motor", name: "Nivel Aceite Motor", type: "bool" },
    { sec: "Motor", name: "Limpieza Filtro Aire", type: "bool" },
    { sec: "Motor", name: "Drenar Agua Filtro Combustible (Diesel)", type: "bool" },
    { sec: "Motor", name: "Funcionamiento Motor de Arranque", type: "bool" },
    { sec: "Motor", name: "Compruebe Ruidos Anormales", type: "bool" },
    { sec: "Motor", name: "Verificar Fugas Aceite", type: "bool" },
    // ◆ Sistema Hidráulico
    { sec: "Sistema Hidráulico", name: "Cambio Filtro de Retorno", type: "bool" },
    { sec: "Sistema Hidráulico", name: "Nivel Aceite Hidráulico en Tanque", type: "bool" },
    { sec: "Sistema Hidráulico", name: "Compruebe ruidos anormales y Fugas en Bomba de Aceite", type: "bool" },
    { sec: "Sistema Hidráulico", name: "Verificar Daños y Fugas en Tuberías y Mangueras del Sistema", type: "bool" },
    { sec: "Sistema Hidráulico", name: "Compruebe Presencia de Fugas en Todos los Cilindros", type: "bool" },
    // ◆ Verificación Luces y Faros
    { sec: "Verificación Luces y Faros", name: "Luces Frontales Bajas", type: "bool" },
    { sec: "Verificación Luces y Faros", name: "Luces Frontales Altas", type: "bool" },
    { sec: "Verificación Luces y Faros", name: "Luces Direcciones Delanteras", type: "bool" },
    { sec: "Verificación Luces y Faros", name: "Stops y Luces Traseras", type: "bool" },
    { sec: "Verificación Luces y Faros", name: "Luces Direcciones Traseras", type: "bool" },
    { sec: "Verificación Luces y Faros", name: "Luz de Reversa", type: "bool" },
    { sec: "Verificación Luces y Faros", name: "Luz Estroboscópica", type: "bool" },
    { sec: "Verificación Luces y Faros", name: "Luz Punto Azul", type: "bool" },
    // ◆ Sistema Gas LPG/GNC
    { sec: "Sistema Gas LPG/GNC", name: "Drenar y Limpiar Regulador LPG", type: "bool" },
    { sec: "Sistema Gas LPG/GNC", name: "Limpieza Filtro LPG y Verificar Fugas", type: "bool" },
    { sec: "Sistema Gas LPG/GNC", name: "Funcionamiento Arranque en Gas", type: "bool" },
    { sec: "Sistema Gas LPG/GNC", name: "Verificar Fugas de Gas", type: "bool" },
    // ◆ Sistema Combustible
    { sec: "Sistema Combustible", name: "Verificar Estado de la Manguera", type: "bool" },
    { sec: "Sistema Combustible", name: "Inspeccionar Curvatura Manguera", type: "bool" },
    { sec: "Sistema Combustible", name: "Inspeccionar Acoples Manguera", type: "bool" },
    { sec: "Sistema Combustible", name: "Verificar Fugas de Combustible", type: "bool" },
    // ◆ Sistema de Refrigeración
    { sec: "Sistema de Refrigeración", name: "Nivel de L.R. en Tanque de Reserva", type: "bool" },
    { sec: "Sistema de Refrigeración", name: "Nivel de L.R. en Radiador", type: "bool" },
    { sec: "Sistema de Refrigeración", name: "Condición de Tapa Radiador", type: "bool" },
    { sec: "Sistema de Refrigeración", name: "Verificar Fugas de L.R.", type: "bool" },
    { sec: "Sistema de Refrigeración", name: "Condición / Tensión de Correa Ventilador", type: "bool" },
    { sec: "Sistema de Refrigeración", name: "Condición de Ventilador / Enfocador", type: "bool" },
    { sec: "Sistema de Refrigeración", name: "Condición del Radiador", type: "bool" },
    // ◆ Sistema de Dirección
    { sec: "Sistema de Dirección", name: "Operación y Juego Libre del Timón", type: "bool" },
    { sec: "Sistema de Dirección", name: "Presencia de Fugas en Cilindro de Dirección, Orbitrol y Mangueras", type: "bool" },
    // ◆ Sistema de Transmisión
    { sec: "Sistema de Transmisión", name: "Nivel de Aceite de Transmisión", type: "bool" },
    { sec: "Sistema de Transmisión", name: "Verificar Operación Adelante / Reversa", type: "bool" },
    { sec: "Sistema de Transmisión", name: "Verificar Operación de Acercamiento y Juego Libre del Pedal", type: "bool" },
    { sec: "Sistema de Transmisión", name: "Compruebe Presencia de Fugas", type: "bool" },
    // ◆ Freno
    { sec: "Freno", name: "Nivel de Fluido de Frenos en Depósito", type: "bool" },
    { sec: "Freno", name: "Presencia de Fugas en Tubería de Frenos", type: "bool" },
    { sec: "Freno", name: "Funcionamiento Freno de Servicio", type: "bool" },
    { sec: "Freno", name: "Funcionamiento Freno de Parqueo", type: "bool" },
    // ◆ Eje Delantero
    { sec: "Eje Delantero", name: "Nivel de Aceite en Diferencial", type: "bool" },
    { sec: "Eje Delantero", name: "Verificar Ruidos Anormales en Eje Delantero", type: "bool" },
    { sec: "Eje Delantero", name: "Compruebe Presencia de Fugas en Eje", type: "bool" },
    // ◆ Mástil & Aditamentos
    { sec: "Mástil & Aditamentos", name: "Medición Cadenas de Elevación con Herramienta SST", type: "bool" },
    { sec: "Mástil & Aditamentos", name: "Tensión Cadenas de Elevación", type: "bool" },
    { sec: "Mástil & Aditamentos", name: "Verificar que los topes del carro PH y del mástil interno NO hagan contacto", type: "bool" },
    { sec: "Mástil & Aditamentos", name: "Movimiento Desigual Cilindros Inclinación", type: "bool" },
    { sec: "Mástil & Aditamentos", name: "Movimiento Desigual Cilindros Elevación", type: "bool" },
    { sec: "Mástil & Aditamentos", name: "Verificar operación, juego y ajuste al dar Funciones Hidráulicas", type: "bool" },
    { sec: "Mástil & Aditamentos", name: "Compruebe puntos de soldadura y presencia de grietas en mástil", type: "bool" },
    { sec: "Mástil & Aditamentos", name: "Canales y Deslizadores del Mástil", type: "bool" },
    // ◆ Horquillas
    { sec: "Horquillas", name: "Compruebe Grietas y Deformaciones en Horquillas", type: "bool" },
    { sec: "Horquillas", name: "Medir el espesor inferior y verificar desgaste excesivo", type: "bool" },
    // ◆ Rines y Llantas
    { sec: "Rines y Llantas", name: "Verificar presencia de grietas en rines", type: "bool" },
    { sec: "Rines y Llantas", name: "Daños, Cortes, Desgaste u Objetos Extraños en Rines y Llantas", type: "bool" },
    { sec: "Rines y Llantas", name: "Rotación de Llantas DER/IZQ", type: "bool" },
    { sec: "Rines y Llantas", name: "Par de Apriete de los Pernos de Llantas", type: "bool" },
    { sec: "Rines y Llantas", name: "Altura de Banda de Rodamiento – Delantera Der/Izq", type: "value", unit: "mm" },
    { sec: "Rines y Llantas", name: "Altura de Banda de Rodamiento – Trasera Der/Izq", type: "value", unit: "mm" },
    // ◆ Chasis
    { sec: "Chasis", name: "Posición de la Contrapesa", type: "bool" },
    { sec: "Chasis", name: "Condición del Asiento del Operador", type: "bool" },
    { sec: "Chasis", name: "Condición del Cilindro del Capó", type: "bool" },
    // ◆ Sistema Eléctrico
    { sec: "Sistema Eléctrico", name: "Nivel del Electrolito de la Batería", type: "bool" },
    { sec: "Sistema Eléctrico", name: "Compruebe Terminales de la Batería, estado y ajuste", type: "bool" },
    { sec: "Sistema Eléctrico", name: "Compruebe Condición de la Batería", type: "bool" },
    { sec: "Sistema Eléctrico", name: "Funcionamiento Testigos del Display", type: "bool" },
    { sec: "Sistema Eléctrico", name: "Estado Corazas y Cableado", type: "bool" },
    // ◆ Engrase y Lubricación
    { sec: "Engrase y Lubricación", name: "Eje Central del Puente Trasero (1 punto)", type: "bool" },
    { sec: "Engrase y Lubricación", name: "Rodamientos, Bielas y Pasadores del Puente Trasero (9 puntos)", type: "bool" },
    { sec: "Engrase y Lubricación", name: "Casquetes y Apoyos del Mástil (2 puntos)", type: "bool" },
    { sec: "Engrase y Lubricación", name: "Pasadores Cilindros Inclinación (2 puntos)", type: "bool" },
    { sec: "Engrase y Lubricación", name: "Cardán de Transmisión (1 punto)", type: "bool" },
    { sec: "Engrase y Lubricación", name: "Cadenas de Elevación (lubricación)", type: "bool" },
    { sec: "Engrase y Lubricación", name: "Carro PH y Aditamentos", type: "bool" },
    { sec: "Engrase y Lubricación", name: "Eje Cardán Bomba Hidráulica (únicamente 7FG/D35-A50)", type: "bool" },
    // ◆ SAS
    { sec: "SAS", name: "Indicar: Con SAS o Sin SAS", type: "bool" },
    { sec: "SAS", name: "Función Bloqueo Elevación", type: "bool" },
    { sec: "SAS", name: "Nivelación Automática de Horquillas", type: "bool" },
    { sec: "SAS", name: "Control Velocidad Inclinación Atrás", type: "bool" },
    { sec: "SAS", name: "Control Ángulo Inclinación Adelante", type: "bool" },
    { sec: "SAS", name: "Sincronización Timón / Ruedas", type: "bool" },
    // ◆ OPS
    { sec: "OPS", name: "Switch Presencia de Operador", type: "bool" },
    { sec: "OPS", name: "Retorno de Palancas a Neutro", type: "bool" },
    { sec: "OPS", name: "Compruebe Interrupción de Funciones Hidráulicas y Marcha", type: "bool" },
    { sec: "OPS", name: "Testigo de OPS en Display", type: "bool" },
    // ◆ Config. Multi display (OPT)
    { sec: "Config. Multi Display (OPT)", name: "Indicar Tipo de Display: 1.STD / 2.DX / 3.DX T&L", type: "bool" },
    { sec: "Config. Multi Display (OPT)", name: "Establezca horas próximo mantenimiento", type: "bool" },
    { sec: "Config. Multi Display (OPT)", name: "Cambie alarma de velocidad de marcha (solo 2&3)", type: "bool" },
    { sec: "Config. Multi Display (OPT)", name: "Cambie velocidad tortuga / límite de velocidad (solo 3)", type: "bool" },
    { sec: "Config. Multi Display (OPT)", name: "Realice bloqueo del menú (solo 2&3)", type: "bool" },
    // ◆ Dispositivos de Seguridad
    { sec: "Dispositivos de Seguridad", name: "Condición Espejos", type: "bool" },
    { sec: "Dispositivos de Seguridad", name: "Condición Pito", type: "bool" },
    { sec: "Dispositivos de Seguridad", name: "Condición Alarma de Reversa", type: "bool" },
    { sec: "Dispositivos de Seguridad", name: "Condición Cinturón de Seguridad", type: "bool" },
    { sec: "Dispositivos de Seguridad", name: "Condición Frenos", type: "bool" },
    { sec: "Dispositivos de Seguridad", name: "Condición Silla", type: "bool" },
    { sec: "Dispositivos de Seguridad", name: "Condición Luces", type: "bool" },
    { sec: "Dispositivos de Seguridad", name: "Condición Extintor", type: "bool" },
    { sec: "Dispositivos de Seguridad", name: "Fecha de Vencimiento Extintor", type: "bool" },
    { sec: "Dispositivos de Seguridad", name: "Condición de Parrilla", type: "bool" },
    // ◆ Otros
    { sec: "Otros", name: "Lavado del Equipo", type: "bool" },
    { sec: "Otros", name: "Verificar estado de todos los stickers y calcomanías", type: "bool" },
    { sec: "Otros", name: "Actualizar sticker indicador de próximo mantenimiento", type: "bool" },
    { sec: "Otros", name: "Limpiar agentes externos (plástico, papel, pelusa) en llantas, alternador, radiador y ventabiola", type: "bool" },
    // ◆ Accesorio de Manipulación de Materiales
    { sec: "Accesorio de Manipulación de Materiales", name: "Verificar el estado de los pernos", type: "bool" },
    { sec: "Accesorio de Manipulación de Materiales", name: "Verificar fugas hidráulicas del accesorio", type: "bool" },
    { sec: "Accesorio de Manipulación de Materiales", name: "Inspección de terminales de Cilindros", type: "bool" },
    { sec: "Accesorio de Manipulación de Materiales", name: "Verificar Cauchos Prensa Carga", type: "bool" },
    { sec: "Accesorio de Manipulación de Materiales", name: "Verificar estado deslizadores del accesorio", type: "bool" },
    { sec: "Accesorio de Manipulación de Materiales", name: "Lubricar Deslizadores y Teflones", type: "bool" },
    { sec: "Accesorio de Manipulación de Materiales", name: "Ajustar Tornillos de Cilindros", type: "bool" },
    { sec: "Accesorio de Manipulación de Materiales", name: "Verificar Estado Metalastick", type: "bool" },
    { sec: "Accesorio de Manipulación de Materiales", name: "Verificar movimiento horquillas del accesorio", type: "bool" },
    { sec: "Accesorio de Manipulación de Materiales", name: "Verificar Frenos de Horquilla (Single/Double)", type: "bool" }
  ],
 
  "1000": [
    // ◆ Motor
    { sec: "Motor", name: "Cambio filtro de Gasolina / Diesel", type: "bool" },
    { sec: "Motor", name: "Cambio Filtro de Aire", type: "bool" },
    // ◆ Sistema Gas LPG/GNC
    { sec: "Sistema Gas LPG/GNC", name: "Cambio de filtro de Gas LPG", type: "bool" },
    { sec: "Sistema Gas LPG/GNC", name: "Drenar Regulador de LPG / GNC", type: "bool" },
    // ◆ Sistema de Dirección
    { sec: "Sistema de Dirección", name: "Verificar estado de las roscas de la tuerca y muñón de dirección", type: "bool" },
    { sec: "Sistema de Dirección", name: "Cambiar pin de tuerca de muñón de dirección", type: "bool" },
    { sec: "Sistema de Dirección", name: "Verificar estado de Rodamientos de las terminales de dirección", type: "bool" },
    // ◆ Freno
    { sec: "Freno", name: "Cambio Líquido de Frenos", type: "bool" },
    // ◆ Rines y Llantas
    { sec: "Rines y Llantas", name: "Rotar DER/IZQ (Adelante y Atrás)", type: "bool" },
    { sec: "Rines y Llantas", name: "Rotar Rueda Exterior con Interior (Solo modelos de doble llanta delantera)", type: "bool" }
  ],
 
  "2000": [
    // ◆ Motor
    { sec: "Motor", name: "Medir Presión De Compresión CYL 1", type: "value", unit: "psi" },
    { sec: "Motor", name: "Medir Presión De Compresión CYL 2", type: "value", unit: "psi" },
    { sec: "Motor", name: "Medir Presión De Compresión CYL 3", type: "value", unit: "psi" },
    { sec: "Motor", name: "Medir Presión De Compresión CYL 4", type: "value", unit: "psi" },
    { sec: "Motor", name: "Medir Presión De Compresión CYL 5", type: "value", unit: "psi" },
    { sec: "Motor", name: "Medir Presión De Compresión CYL 6", type: "value", unit: "psi" },
    { sec: "Motor", name: "Cambio Manguera Combustible", type: "bool" },
    // ◆ Sistema de Refrigeración
    { sec: "Sistema de Refrigeración", name: "Cambio de Líquido Refrigerante", type: "bool" },
    // ◆ Sistema de Dirección
    { sec: "Sistema de Dirección", name: "Cambio de Grasa de Rodamientos Ruedas Traseras y Cambio Retenedores", type: "bool" },
    { sec: "Sistema de Dirección", name: "Verificar condición de Rodamientos de Dirección", type: "bool" },
    // ◆ Sistema de Transmisión
    { sec: "Sistema de Transmisión", name: "Presión Principal (M)", type: "value", unit: "psi" },
    { sec: "Sistema de Transmisión", name: "Presión Adelante (F)", type: "value", unit: "psi" },
    { sec: "Sistema de Transmisión", name: "Presión Reversa (R)", type: "value", unit: "psi" },
    { sec: "Sistema de Transmisión", name: "Presión Convertidor (O)", type: "value", unit: "psi" },
    { sec: "Sistema de Transmisión", name: "Cambio Aceite Convertidor ATF", type: "bool" },
    { sec: "Sistema de Transmisión", name: "Cambio Filtro de Aceite de Convertidor", type: "bool" },
    // ◆ Freno
    { sec: "Freno", name: "Revisar estado Cilindros de Rueda", type: "bool" },
    { sec: "Freno", name: "Revisión Cilindro Maestro", type: "bool" },
    { sec: "Freno", name: "Medir Zapata Delantera Derecha", type: "value", unit: "mm" },
    { sec: "Freno", name: "Medir Zapata Trasera Derecha", type: "value", unit: "mm" },
    { sec: "Freno", name: "Medir Zapata Delantera Izquierda", type: "value", unit: "mm" },
    { sec: "Freno", name: "Medir Zapata Trasera Izquierda", type: "value", unit: "mm" },
    { sec: "Freno", name: "Compruebe desgaste anormal de Campanas", type: "bool" },
    { sec: "Freno", name: "Medir Diámetro Campana Derecha", type: "value", unit: "mm" },
    { sec: "Freno", name: "Medir Diámetro Campana Izquierda", type: "value", unit: "mm" },
    { sec: "Freno", name: "Medir elongación Resorte de Zapata L1", type: "value", unit: "mm" },
    { sec: "Freno", name: "Medir elongación Resorte de Zapata L2", type: "value", unit: "mm" },
    { sec: "Freno", name: "Medir elongación Resorte de Zapata R1", type: "value", unit: "mm" },
    { sec: "Freno", name: "Medir elongación Resorte de Zapata R2", type: "value", unit: "mm" },
    { sec: "Freno", name: "Medir elongación Resorte de Trinquete L", type: "value", unit: "mm" },
    { sec: "Freno", name: "Medir elongación Resorte de Trinquete R", type: "value", unit: "mm" },
    // ◆ Eje Delantero
    { sec: "Eje Delantero", name: "Cambiar grasa rodamientos ruedas Delanteras y Cambiar Retenedores", type: "bool" },
    { sec: "Eje Delantero", name: "Verificar condición de Rodamientos del Eje Delantero", type: "bool" },
    { sec: "Eje Delantero", name: "Cambio de Aceite Diferencial", type: "bool" },
    // ◆ Rines y Llantas
    { sec: "Rines y Llantas", name: "Condición de los pernos y par de apriete (Cambiar si es Necesario)", type: "bool" },
    { sec: "Rines y Llantas", name: "Compruebe presencia de grietas y profundidad de las estrías", type: "bool" },
    // ◆ Sistema Hidráulico
    { sec: "Sistema Hidráulico", name: "Presión Alivio Elevación", type: "value", unit: "psi" },
    { sec: "Sistema Hidráulico", name: "Presión Alivio Inclinación", type: "value", unit: "psi" },
    { sec: "Sistema Hidráulico", name: "Cambio de Aceite Hidráulico", type: "bool" },
    { sec: "Sistema Hidráulico", name: "Cambio Filtro de Retorno", type: "bool" },
    // ◆ Accesorio Manipulación 2000 Hrs
    { sec: "Accesorio de Manipulación 2000 Hrs", name: "Medir la diferencia de altura en las horquillas", type: "value", unit: "mm" },
    { sec: "Accesorio de Manipulación 2000 Hrs", name: "Verificar Ganchos Montaje Superior 1", type: "bool" },
    { sec: "Accesorio de Manipulación 2000 Hrs", name: "Verificar Ganchos Montaje Superior 2", type: "bool" },
    { sec: "Accesorio de Manipulación 2000 Hrs", name: "Verificar Mordazas de Anclaje", type: "bool" },
    { sec: "Accesorio de Manipulación 2000 Hrs", name: "Verificar estado Lámina Prensa Carga", type: "bool" },
    { sec: "Accesorio de Manipulación 2000 Hrs", name: "Verificar Respaldo de Carga", type: "bool" },
    { sec: "Accesorio de Manipulación 2000 Hrs", name: "Medición Deslizadores Superiores 1", type: "value", unit: "mm" },
    { sec: "Accesorio de Manipulación 2000 Hrs", name: "Medición Deslizadores Superiores 2", type: "value", unit: "mm" },
    { sec: "Accesorio de Manipulación 2000 Hrs", name: "Medir Cadenas Mini Mástil 1", type: "value", unit: "mm" },
    { sec: "Accesorio de Manipulación 2000 Hrs", name: "Medir Cadenas Mini Mástil 2", type: "value", unit: "mm" }
  ]
};
 
// ─── CASCADA ─────────────────────────────────────────────────────────────────
function evaluarCascada() {
  const mtc = document.getElementById("montacargas").value;
  const routineSelect = document.getElementById("rutina");
  if (mtc) {
    routineSelect.disabled = false;
  } else {
    routineSelect.disabled = true;
    document.getElementById("card-checklist").classList.add("hidden");
    routineSelect.value = "";
  }
}
 
// ─── RENDERIZAR ───────────────────────────────────────────────────────────────
function renderizarChecklist() {
  const selected  = document.getElementById("rutina").value;
  const container = document.getElementById("items-container");
  const card      = document.getElementById("card-checklist");
  container.innerHTML = "";
  if (!selected) { card.classList.add("hidden"); return; }
 
  // Bloques a mostrar según rutina acumulativa
  const bloques = [];
  if (selected === "250")  bloques.push({ key:"250",  label:"250 / 500 / 750 Horas", cls:"s250"  });
  if (selected === "1000") bloques.push({ key:"250",  label:"250 / 500 / 750 Horas", cls:"s250"  },
                                         { key:"1000", label:"1.000 Horas",           cls:"s1000" });
  if (selected === "2000") bloques.push({ key:"250",  label:"250 / 500 / 750 Horas", cls:"s250"  },
                                         { key:"1000", label:"1.000 Horas",           cls:"s1000" },
                                         { key:"2000", label:"2.000 Horas",           cls:"s2000" });
 
  bloques.forEach(bloque => {
    // Banner de sección principal
    const banner = document.createElement("div");
    banner.className = `section-banner ${bloque.cls}`;
    banner.innerHTML = `<span>◆</span> ${bloque.label}`;
    container.appendChild(banner);
 
    // Agrupar ítems por subsección
    const items = dataInspecciones[bloque.key];
    const secciones = {};
    items.forEach(item => {
      if (!secciones[item.sec]) secciones[item.sec] = [];
      secciones[item.sec].push(item);
    });
 
    Object.entries(secciones).forEach(([sec, lista]) => {
      const subTitle = document.createElement("div");
      subTitle.className = "subsection-title";
      subTitle.textContent = `◈ ${sec}`;
      container.appendChild(subTitle);
 
      lista.forEach(item => {
        const row = document.createElement("div");
        row.className = "item-row pendiente";
        row.setAttribute("data-name",   item.name);
        row.setAttribute("data-sec",    item.sec);
        row.setAttribute("data-rutina", bloque.key);
        row.setAttribute("data-tocado", "no");
 
        let html = `<div class="item-main">
          <span class="item-label">${item.name}</span>
          <div class="item-actions">
            <button type="button" class="btn-status ok"    onclick="setStatus(this,'OK')">✔ OK</button>
            <button type="button" class="btn-status falla" onclick="setStatus(this,'FALLA')">✘ FALLA</button>
          </div>
        </div>`;
        if (item.type === "value") {
          html += `<input type="text" class="input-medicion" placeholder="Valor (${item.unit})">`;
        }
        row.innerHTML = html;
        container.appendChild(row);
      });
    });
  });
 
  updateProgress();
  card.classList.remove("hidden");
  card.scrollIntoView({ behavior: "smooth", block: "start" });
}
 
// ─── ESTADO ───────────────────────────────────────────────────────────────────
function setStatus(btn, status) {
  const row = btn.closest(".item-row");
  row.querySelectorAll(".btn-status").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  row.classList.remove("pendiente","estado-ok","estado-falla");
  row.classList.add(status === "OK" ? "estado-ok" : "estado-falla");
  row.setAttribute("data-tocado","si");
  row.setAttribute("data-estado", status);
  updateProgress();
}
 
function updateProgress() {
  const all    = document.querySelectorAll(".item-row");
  const done   = [...all].filter(r => r.getAttribute("data-tocado") === "si");
  const total  = all.length;
  const pct    = total ? Math.round(done.length / total * 100) : 0;
  document.getElementById("progress-bar").style.width = pct + "%";
  document.getElementById("progress-label").textContent = `${done.length} / ${total} ítems completados (${pct}%)`;
}
 
// ─── ENVÍO ────────────────────────────────────────────────────────────────────
async function enviarHaciaExcel() {
  const tecnico      = document.getElementById("tecnico").value.trim();
  const equipo       = document.getElementById("montacargas").value;
  const rutina       = document.getElementById("rutina").value;
  const horometro    = document.getElementById("horometro").value.trim();
  const obsGenerales = document.getElementById("observaciones").value.trim();
 
  if (!tecnico)   { alert("Por favor, ingrese el nombre del técnico."); return; }
  if (!equipo)    { alert("Seleccione un montacargas."); return; }
  if (!rutina)    { alert("Seleccione una rutina."); return; }
 
  const todasLasRows = document.querySelectorAll(".item-row");
  const rowsTocadas  = [...todasLasRows].filter(r => r.getAttribute("data-tocado") === "si");
 
  if (rowsTocadas.length === 0) {
    alert("No hay ítems marcados. Por favor evalúe al menos un componente.");
    return;
  }
 
  const timestamp = new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" });
  const btn = document.querySelector(".btn-submit");
  btn.disabled = true;
  btn.textContent = `Enviando 0 de ${rowsTocadas.length}...`;
 
  let enviados = 0, errores = 0;
  const rutinaLabels = { "250":"250/500/750 Horas", "1000":"1.000 Horas", "2000":"2.000 Horas" };
 
  for (const row of rowsTocadas) {
    const activeBtn = row.querySelector(".btn-status.active");
    const inputMed  = row.querySelector(".input-medicion");
    const payload = {
      fecha:         timestamp,
      tecnico:       tecnico,
      equipo:        "Montacargas " + equipo,
      rutina:        rutinaLabels[rutina] || rutina + " Horas",
      rutina_item:   rutinaLabels[row.getAttribute("data-rutina")] || "",
      sistema:    row.getAttribute("data-sec"),
      componente: row.getAttribute("data-name"),
      estado:        activeBtn ? activeBtn.innerText.replace(/[✔✘]\s*/,"").trim() : "N/A",
      medicion:      inputMed  ? (inputMed.value.trim() || "N/A") : "N/A",
      horometro:     horometro || "N/A",
      observaciones: obsGenerales || "Sin observaciones"
    };
 
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST", mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload)
      });
      enviados++;
    } catch (err) {
      console.error("Error:", payload.componente, err);
      errores++;
    }
 
    btn.textContent = `Enviando ${enviados} de ${rowsTocadas.length}...`;
    await new Promise(r => setTimeout(r, 300));
  }
 
  if (errores === 0) {
    alert(`✅ ¡Listo! ${enviados} ítems guardados en Google Sheets.`);
  } else {
    alert(`⚠️ Se enviaron ${enviados} ítems. Hubo ${errores} errores.`);
  }
 
  btn.disabled = false;
  btn.textContent = "Finalizar e Inyectar a Excel";
  location.reload();
}