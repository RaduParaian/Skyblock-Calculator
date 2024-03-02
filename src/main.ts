window.onload = () => {
    var healthInput = document.getElementById('health-input') as HTMLTextAreaElement;
    var defenceInput = document.getElementById('defence-input') as HTMLTextAreaElement;
    var effectiveHealth = document.getElementById('effective-health-output') as HTMLTextAreaElement;
    var weaponDamageInput = document.getElementById('weapon-damage-input') as HTMLTextAreaElement;
    var strengthInput = document.getElementById('strength-input') as HTMLTextAreaElement;
    var criticalDamageInput = document.getElementById('critical-damage-input') as HTMLTextAreaElement;
    var finalDamage = document.getElementById('final-damage-output') as HTMLTextAreaElement;
    var baseAbilityDamageInput = document.getElementById('base-ability-damage-input') as HTMLTextAreaElement;
    var intelligenceInput = document.getElementById('intelligence-input') as HTMLTextAreaElement;
    var abilityScalingInput = document.getElementById('ability-scaling-input') as HTMLTextAreaElement;
    var bonusAbilityDamageStatInput = document.getElementById('bonus-ability-damage-stat-input') as HTMLTextAreaElement;
    var abilityDamage = document.getElementById('ability-damage-output') as HTMLTextAreaElement;


    // Effective Health

    healthInput.addEventListener('input', () => {

        effectiveHealthFormula(healthInput, defenceInput, effectiveHealth);

    });

    defenceInput.addEventListener('input', () => {

        effectiveHealthFormula(healthInput, defenceInput, effectiveHealth);

    });


    function effectiveHealthFormula(healthInput: HTMLTextAreaElement, defenceInput: HTMLTextAreaElement, effectiveHealth: HTMLTextAreaElement) {
        const health = parseInt(healthInput.value);
        const defence = parseInt(defenceInput.value);
        effectiveHealth.value = (health * (1 + defence / 100)).toString();
    }


    // Final Damage

    weaponDamageInput.addEventListener('input', () => {

        finalDamageFormula(weaponDamageInput, strengthInput, criticalDamageInput, finalDamage);

    });

    strengthInput.addEventListener('input', () => {

        finalDamageFormula(weaponDamageInput, strengthInput, criticalDamageInput, finalDamage);

    });

    criticalDamageInput.addEventListener('input', () => {

        finalDamageFormula(weaponDamageInput, strengthInput, criticalDamageInput, finalDamage);

    });


    function finalDamageFormula(weaponDamageInput: HTMLTextAreaElement, strengthInput: HTMLTextAreaElement, criticalDamageInput: HTMLTextAreaElement, finalDamage: HTMLTextAreaElement) {
        const weaponDamage = parseInt(weaponDamageInput.value);
        const strength = parseInt(strengthInput.value);
        const criticalDamage = parseInt(criticalDamageInput.value);
        finalDamage.value = (((5 + weaponDamage) * (1 + strength / 100)) * (1 + criticalDamage / 100)).toString();
    }


    // Ability Damage

    baseAbilityDamageInput.addEventListener('input', () => {

        abilityDamageFormula(baseAbilityDamageInput, intelligenceInput, abilityScalingInput, bonusAbilityDamageStatInput, abilityDamage);

    });

    intelligenceInput.addEventListener('input', () => {

        abilityDamageFormula(baseAbilityDamageInput, intelligenceInput, abilityScalingInput, bonusAbilityDamageStatInput, abilityDamage);

    });

    abilityScalingInput.addEventListener('input', () => {

        abilityDamageFormula(baseAbilityDamageInput, intelligenceInput, abilityScalingInput, bonusAbilityDamageStatInput, abilityDamage);

    });

    bonusAbilityDamageStatInput.addEventListener('input', () => {

        abilityDamageFormula(baseAbilityDamageInput, intelligenceInput, abilityScalingInput, bonusAbilityDamageStatInput, abilityDamage);

    });


    function abilityDamageFormula(baseAbilityDamageInput: HTMLTextAreaElement, intelligenceInput: HTMLTextAreaElement, abilityScalingInput: HTMLTextAreaElement, bonusAbilityDamageStatInput: HTMLTextAreaElement, abilityDamage: HTMLTextAreaElement) {
        const baseAbilityDamage = parseInt(baseAbilityDamageInput.value);
        const intelligence = parseInt(intelligenceInput.value);
        const abilityScaling = parseInt(abilityScalingInput.value);
        const bonusAbilityDamageStat = parseInt(bonusAbilityDamageStatInput.value);
        abilityDamage.value = (baseAbilityDamage * (1 + (intelligence / 100) * abilityScaling) * (1 + (bonusAbilityDamageStat / 100))).toString();
    }
};