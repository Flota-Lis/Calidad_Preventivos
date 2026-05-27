// ─── WEBHOOK GOOGLE APPS SCRIPT ─────────────────────────────────────────────
const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbw6WK5u1F-pe3LZNQrRhRZrUomYQcO9y-NPgCuGO9IN8zUElN94f8TOP-ym7Br2ZOo/exec";

// ─── BASE DE DATOS DE INSPECCIONES ──────────────────────────────────────────
const dataInspecciones = {
    "250": [
        { name: "Motor - Cambio Aceite Motor", type: "bool" },
        { name: "Motor - Cambio Filtro Aceite Motor (sólo a las primeras 250Hrs)", type: "bool" },
        { name: "Motor - Nivel Aceite Motor", type: "bool" },
        { name: "Motor - Limpieza Filtro Aire", type: "bool" },
        { name: "Motor - Compruebe ruidos anormales y fugas", type: "bool" },
        { name: "Motor - Drenar Agua Filtro Combustible (Diesel)", type: "bool" },
        { name: "Sistema Hidráulico - Cambio Filtro de Retorno", type: "bool" },
        { name: "Sistema Hidráulico - Nivel Aceite Hidráulico en Tanque", type: "bool" },
        { name: "Verificación Luces - Frontales Bajas / Frontales Altas", type: "bool" },
        { name: "Verificación Luces - Direcciones Delanteras / Traseras", type: "bool" },
        { name: "Verificación Luces - Stops, Luces Traseras y Luz de Reversa", type: "bool" },
        { name: "Verificación Luces - Luz Punto Azul y Estroboscópica", type: "bool" },
        { name: "Sistema Gas LPG/GNC - Drenar y Limpiar Regulador LPG", type: "bool" },
        { name: "Sistema Gas LPG/GNC - Limpieza Filtro LPG y Verificar Fugas", type: "bool" },
        { name: "Freno - Funcionamiento Freno de Servicio y Freno de Parqueo", type: "bool" },
        { name: "Mástil & Aditamentos - Medición Cadenas de Elevación con Herramienta SST", type: "bool" },
        { name: "Mástil & Aditamentos - Canales y Deslizadores del Mástil", type: "bool" },
        { name: "Dispositivos de Seguridad - Condición Cinturón, Extintor y Alarma Reversa", type: "bool" }
    ],
    "1000": [
        { name: "Motor - Cambio filtro de Gasolina/Diesel", type: "bool" },
        { name: "Motor - Cambio Filtro de Aire", type: "bool" },
        { name: "Sistema de dirección - Verificar estado de roscas de tuerca y muñón", type: "bool" },
        { name: "Sistema de dirección - Cambiar pin de tuerca de muñón de dirección", type: "bool" },
        { name: "Sistema de dirección - Verificar estado de Rodamientos de las terminales", type: "bool" },
        { name: "Sistema Gas LPG/GNC - Cambio de filtro de Gas LPG y Drenar Regulador", type: "bool" },
        { name: "Freno - Cambio liquido de frenos", type: "bool" },
        { name: "Rines y Llantas - Rotar DER/IZQ (Adelante y Atrás)", type: "bool" },
        { name: "Rines y Llantas - Rotar Rueda Exterior con Interior (Solo modelos de doble llanta)", type: "bool" }
    ],
    "2000": [
        { name: "Motor - Medir Presión De Compresión Del Motor (Cyl 1 a Cyl 6)", type: "value", unit: "psi" },
        { name: "Motor - Cambio manguera combustible", type: "bool" },
        { name: "Sistema de Refrigeración - Cambio de Liquido Refrigerante", type: "bool" },
        { name: "Eje Delantero - Cambio de Aceite Diferencial", type: "bool" },
        { name: "Freno - Medir Zapata Delantera Derecha", type: "value", unit: "mm" },
        { name: "Freno - Medir Zapata Delantera Izquierda", type: "value", unit: "mm" },
        { name: "Freno - Medir Zapata Trasera Derecha", type: "value", unit: "mm" },
        { name: "Freno - Medir Zapata Trasera Izquierda", type: "value", unit: "mm" },
        { name: "Freno - Medir Diámetro de la campana (Derecha / Izquierda)", type: "value", unit: "mm" },
        { name: "Sistema de Transmisión - Medir Presión principal", type: "value", unit: "psi" },
        { name: "Sistema de Transmisión - Medir Presión Adelante (F)", type: "value", unit: "psi" },
        { name: "Sistema de Transmisión - Medir Presión Reversa (R)", type: "value", unit: "psi" },
        { name: "Sistema Hidráulico - Medir Presión Alivio Elevación", type: "value", unit: "psi" },
        { name: "Sistema Hidráulico - Medir Presión Alivio Inclinación", type: "value", unit: "psi" },
        { name: "Sistema Hidráulico - Cambio de Aceite Hidráulico", type: "bool" },
        { name: "Accesorio Manipulación - Medir la diferencia de altura en las horquillas", type: "value", unit: "mm" }
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

// ─── RENDERIZAR CHECKLIST ────────────────────────────────────────────────────
function renderizarChecklist() {
    const selected  = document.getElementById("rutina").value;
    const container = document.getElementById("items-container");
    const card      = document.getElementById("card-checklist");
    container.innerHTML = "";
    if (!selected) { card.classList.add("hidden"); return; }

    dataInspecciones[selected].forEach((item) => {
        const row = document.createElement("div");
        row.className = "item-row pendiente"; // inicia como pendiente
        row.setAttribute("data-name", item.name);
        row.setAttribute("data-tocado", "no"); // rastrea si el técnico interactuó

        let html = "";
        if (item.type === "bool") {
            html = `
                <div class="item-main">
                    <span class="item-label">${item.name}</span>
                    <div class="item-actions">
                        <button type="button" class="btn-status ok" onclick="setStatus(this,'OK')">✔ OK</button>
                        <button type="button" class="btn-status falla" onclick="setStatus(this,'FALLA')">✘ FALLA</button>
                    </div>
                </div>`;
        } else {
            html = `
                <div class="item-main">
                    <span class="item-label">${item.name}</span>
                    <div class="item-actions">
                        <button type="button" class="btn-status ok" onclick="setStatus(this,'OK')">✔ OK</button>
                        <button type="button" class="btn-status falla" onclick="setStatus(this,'FALLA')">✘ FALLA</button>
                    </div>
                </div>
                <input type="text" class="input-medicion" placeholder="Valor (${item.unit})">`;
        }
        row.innerHTML = html;
        container.appendChild(row);
    });

    // Inyectar estilos dinámicos de estado
    if (!document.getElementById("estilos-estado")) {
        const style = document.createElement("style");
        style.id = "estilos-estado";
        style.textContent = `
            .item-row.pendiente { border-left: 3px solid #CBD5E1; background-color: #F8FAFC; }
            .item-row.estado-ok { border-left: 4px solid #2ECC71; background-color: #F0FFF4; }
            .item-row.estado-falla { border-left: 4px solid #E74C3C; background-color: #FFF5F5; }
            .btn-status.ok.active { background-color: #2ECC71; color: white; border-color: #27AE60; }
            .btn-status.falla.active { background-color: #E74C3C; color: white; border-color: #C0392B; }
            .badge-estado {
                font-size: 11px;
                font-weight: bold;
                padding: 2px 8px;
                border-radius: 10px;
                margin-left: 8px;
            }
            .badge-ok { background: #2ECC71; color: white; }
            .badge-falla { background: #E74C3C; color: white; }
        `;
        document.head.appendChild(style);
    }

    card.classList.remove("hidden");
}

// ─── CAMBIAR ESTADO CON FEEDBACK VISUAL ──────────────────────────────────────
function setStatus(btn, status) {
    const row = btn.closest(".item-row");

    // Marcar botones
    row.querySelectorAll(".btn-status").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Marcar fila visualmente
    row.classList.remove("pendiente", "estado-ok", "estado-falla");
    row.classList.add(status === "OK" ? "estado-ok" : "estado-falla");

    // Marcar como tocado por el técnico
    row.setAttribute("data-tocado", "si");
    row.setAttribute("data-estado", status);
}

// ─── ENVÍO AL GOOGLE SHEET ───────────────────────────────────────────────────
async function enviarHaciaExcel() {
    const tecnico      = document.getElementById("tecnico").value.trim();
    const equipo       = document.getElementById("montacargas").value;
    const rutina       = document.getElementById("rutina").value;
    const obsGenerales = document.getElementById("observaciones").value.trim();

    if (!tecnico) { alert("Por favor, digite el nombre del técnico."); return; }
    if (!equipo)  { alert("Seleccione un montacargas."); return; }
    if (!rutina)  { alert("Seleccione una rutina."); return; }

    // Solo enviar ítems que el técnico marcó explícitamente
    const todasLasRows = document.querySelectorAll(".item-row");
    const rowsTocadas  = [...todasLasRows].filter(r => r.getAttribute("data-tocado") === "si");

    if (rowsTocadas.length === 0) {
        alert("No hay ítems marcados. Por favor evalúe al menos un componente.");
        return;
    }

    const timestamp = new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" });
    const btn       = document.querySelector(".btn-submit");
    btn.disabled    = true;
    btn.textContent = `Enviando 0 de ${rowsTocadas.length}...`;

    let enviados = 0;
    let errores  = 0;

    for (const row of rowsTocadas) {
        const activeBtn = row.querySelector(".btn-status.active");
        const inputMed  = row.querySelector(".input-medicion");

        const payload = {
            fecha:         timestamp,
            tecnico:       tecnico,
            equipo:        "Montacargas " + equipo,
            rutina:        rutina + " Horas",
            componente:    row.getAttribute("data-name"),
            estado:        activeBtn ? activeBtn.innerText.replace(/[✔✘]\s*/,"").trim() : "N/A",
            medicion:      inputMed  ? (inputMed.value.trim() || "N/A") : "N/A",
            observaciones: obsGenerales || "Sin observaciones"
        };

        try {
            await fetch(WEBHOOK_URL, {
                method:  "POST",
                mode:    "no-cors",
                headers: { "Content-Type": "text/plain" },
                body:    JSON.stringify(payload)
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

    btn.disabled    = false;
    btn.textContent = "Finalizar e Inyectar a Excel";
    location.reload();
}