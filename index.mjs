// Render the effect names. We make a best effort attempt to not explode *too* hard with monk's little details
Hooks.on("renderBasePlaceableHUD", (_hud, html) => {
    const statusEffects = html.querySelector(".palette.status-effects");
    if (!statusEffects) return;

    const effects = statusEffects.querySelectorAll(".effect-control");
    for (const effect of [...effects].filter((e) => !e.querySelector(".effect-name"))) {
        const title = effect.dataset.tooltipText;
        delete effect.dataset.tooltipText;

        const effectName = document.createElement("div");
        effectName.classList.add("effect-name");
        effectName.innerText = title;
        effect.appendChild(effectName);
    }
});

