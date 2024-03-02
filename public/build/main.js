"use strict";
window.onload = function () {
    var healthInput = document.getElementById('health-input');
    var defenceInput = document.getElementById('defence-input');
    var effectiveHealth = document.getElementById('effective-health-output');
    var weaponDamageInput = document.getElementById('weapon-damage-input');
    var strengthInput = document.getElementById('strength-input');
    var criticalDamageInput = document.getElementById('critical-damage-input');
    var finalDamage = document.getElementById('final-damage-output');
    var baseAbilityDamageInput = document.getElementById('base-ability-damage-input');
    var intelligenceInput = document.getElementById('intelligence-input');
    var abilityScalingInput = document.getElementById('ability-scaling-input');
    var bonusAbilityDamageStatInput = document.getElementById('bonus-ability-damage-stat-input');
    var abilityDamage = document.getElementById('ability-damage-output');
    // Effective Health
    healthInput.addEventListener('input', function () {
        effectiveHealthFormula(healthInput, defenceInput, effectiveHealth);
    });
    defenceInput.addEventListener('input', function () {
        effectiveHealthFormula(healthInput, defenceInput, effectiveHealth);
    });
    function effectiveHealthFormula(healthInput, defenceInput, effectiveHealth) {
        var health = parseInt(healthInput.value);
        var defence = parseInt(defenceInput.value);
        effectiveHealth.value = (health * (1 + defence / 100)).toString();
    }
    // Final Damage
    weaponDamageInput.addEventListener('input', function () {
        finalDamageFormula(weaponDamageInput, strengthInput, criticalDamageInput, finalDamage);
    });
    strengthInput.addEventListener('input', function () {
        finalDamageFormula(weaponDamageInput, strengthInput, criticalDamageInput, finalDamage);
    });
    criticalDamageInput.addEventListener('input', function () {
        finalDamageFormula(weaponDamageInput, strengthInput, criticalDamageInput, finalDamage);
    });
    function finalDamageFormula(weaponDamageInput, strengthInput, criticalDamageInput, finalDamage) {
        var weaponDamage = parseInt(weaponDamageInput.value);
        var strength = parseInt(strengthInput.value);
        var criticalDamage = parseInt(criticalDamageInput.value);
        finalDamage.value = (((5 + weaponDamage) * (1 + strength / 100)) * (1 + criticalDamage / 100)).toString();
    }
    // Ability Damage
    baseAbilityDamageInput.addEventListener('input', function () {
        abilityDamageFormula(baseAbilityDamageInput, intelligenceInput, abilityScalingInput, bonusAbilityDamageStatInput, abilityDamage);
    });
    intelligenceInput.addEventListener('input', function () {
        abilityDamageFormula(baseAbilityDamageInput, intelligenceInput, abilityScalingInput, bonusAbilityDamageStatInput, abilityDamage);
    });
    abilityScalingInput.addEventListener('input', function () {
        abilityDamageFormula(baseAbilityDamageInput, intelligenceInput, abilityScalingInput, bonusAbilityDamageStatInput, abilityDamage);
    });
    bonusAbilityDamageStatInput.addEventListener('input', function () {
        abilityDamageFormula(baseAbilityDamageInput, intelligenceInput, abilityScalingInput, bonusAbilityDamageStatInput, abilityDamage);
    });
    function abilityDamageFormula(baseAbilityDamageInput, intelligenceInput, abilityScalingInput, bonusAbilityDamageStatInput, abilityDamage) {
        var baseAbilityDamage = parseInt(baseAbilityDamageInput.value);
        var intelligence = parseInt(intelligenceInput.value);
        var abilityScaling = parseInt(abilityScalingInput.value);
        var bonusAbilityDamageStat = parseInt(bonusAbilityDamageStatInput.value);
        abilityDamage.value = (baseAbilityDamage * (1 + (intelligence / 100) * abilityScaling) * (1 + (bonusAbilityDamageStat / 100))).toString();
    }
};
