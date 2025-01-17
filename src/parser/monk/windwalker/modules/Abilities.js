import SPELLS from 'common/SPELLS';

import CoreAbilities from 'parser/core/modules/Abilities';

class Abilities extends CoreAbilities {
  spellbook() {
    const combatant = this.selectedCombatant;
    // Windwalker GCD is 1 second by default and static in almost all cases, 750 is lowest recorded GCD
    // Cooldown of chi spenders is doubled again when Serenity drops. This is handled in the Serenity module under Talents
    return [
      {
        spell: SPELLS.FISTS_OF_FURY_CAST,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        cooldown: haste => 24 / (1 + haste) * (combatant.hasBuff(SPELLS.SERENITY_TALENT.id) ? 0.5 : 1),
        gcd: {
          static: 1000,
        },
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.9,
          extraSuggestion: 'Delaying the cast somewhat to line up with add spawns is acceptable, however.',
        },
      },
      {
        spell: SPELLS.RISING_SUN_KICK,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        cooldown: haste => (10 / (1 + haste)) * (combatant.hasBuff(SPELLS.SERENITY_TALENT.id) ? 0.5 : 1),
        gcd: {
          static: 1000,
        },
        castEfficiency: {
          suggestion: true,
        },
      },
      {
        spell: SPELLS.WHIRLING_DRAGON_PUNCH_TALENT,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        cooldown: haste => 24 / (1 + haste),
        gcd: {
          static: 1000,
        },
        enabled: combatant.hasTalent(SPELLS.WHIRLING_DRAGON_PUNCH_TALENT.id),
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.85,
          extraSuggestion: 'Delaying the cast somewhat to line up with add spawns is acceptable, however.',
        },
      },
      {
        spell: SPELLS.FIST_OF_THE_WHITE_TIGER_TALENT,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        cooldown: 30,
        gcd: {
          static: 1000,
        },
        enabled: combatant.hasTalent(SPELLS.FIST_OF_THE_WHITE_TIGER_TALENT.id),
        castEfficiency: {
          suggestion: true,
        },
      },
      {
        spell: SPELLS.REVERSE_HARM,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        cooldown: 10,
        gcd: {
          base: 1000,
          minimum: 750,
        },
        enabled: combatant.hasEssence(SPELLS.CONFLICT.traitId) ? combatant.hasMajor(SPELLS.CONFLICT.traitId) : false,
        castEfficiency: {
          recommendedEfficiency: 0.75,
          suggestion: true,
          extraSuggestion: 'If you have a low amount of Reverse Harm casts, consider using another major essence',
        },
      },
      {
        spell: SPELLS.BLACKOUT_KICK,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          static: 1000,
        },
      },
      {
        spell: SPELLS.TIGER_PALM,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          static: 1000,
        },
      },
      {
        spell: SPELLS.CHI_WAVE_TALENT,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        cooldown: 15,
        gcd: {
          base: 1000,
          minimum: 750,
        },
        enabled: combatant.hasTalent(SPELLS.CHI_WAVE_TALENT.id),
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.65,
        },
      },
      {
        spell: SPELLS.SPINNING_CRANE_KICK,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          static: 1000,
        },
      },
      {
        spell: SPELLS.CHI_BURST_TALENT,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        cooldown: 30,
        gcd: {
          base: 1000,
          minimum: 750,
        },
        enabled: combatant.hasTalent(SPELLS.CHI_BURST_TALENT.id),
        castEfficiency: {
          suggestion: true,
        },
      },
      {
        spell: SPELLS.RUSHING_JADE_WIND_TALENT_WINDWALKER,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL_AOE,
        cooldown: haste => 6 / (1 + haste),
        gcd: {
          static: 1000,
        },
        enabled: combatant.hasTalent(SPELLS.RUSHING_JADE_WIND_TALENT_WINDWALKER.id),
      },
      // cooldowns
      {
        spell: SPELLS.TOUCH_OF_KARMA_CAST,
        buffSpellId: SPELLS.TOUCH_OF_KARMA_CAST.id,
        category: Abilities.SPELL_CATEGORIES.SEMI_DEFENSIVE,
        cooldown: 90,
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.6,
          extraSuggestion: "Touch of Karma is typically used offensively as often as possible, but use changes a lot varying on the encounter",
        },
      },
      {
        spell: SPELLS.TOUCH_OF_DEATH,
        category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
        cooldown: 120,
        gcd: {
          static: 1000,
        },
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.95,
        },
      },
      {
        spell: SPELLS.SERENITY_TALENT,
        category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
        cooldown: 90,
        gcd: {
          base: 1000,
          minimum: 750,
        },
        enabled: combatant.hasTalent(SPELLS.SERENITY_TALENT.id),
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.95,
        },
      },
      {
        spell: SPELLS.STORM_EARTH_AND_FIRE_CAST,
        category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
        cooldown: 90,
        gcd: {
          base: 1000,
          minimum: 750,
        },
        enabled: !combatant.hasTalent(SPELLS.SERENITY_TALENT.id),
        charges: 2,
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.95,
        },
      },
      {
        spell: SPELLS.INVOKE_XUEN_THE_WHITE_TIGER_TALENT,
        category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
        cooldown: 120,
        gcd: {
          static: 1000,
        },
        enabled: combatant.hasTalent(SPELLS.INVOKE_XUEN_THE_WHITE_TIGER_TALENT.id),
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.95,
        },
      },
      {
        spell: SPELLS.ENERGIZING_ELIXIR_TALENT,
        category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
        cooldown: 60,
        gcd: {
          static: 1000,
        },
        enabled: combatant.hasTalent(SPELLS.ENERGIZING_ELIXIR_TALENT.id),
      },
      // Utility
      {
        spell: SPELLS.RING_OF_PEACE_TALENT,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          base: 1000,
          minimum: 750,
        },
      },
      {
        spell: SPELLS.LEG_SWEEP,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          static: 1000,
        },
      },
      {
        spell: SPELLS.PARALYSIS,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          static: 1000,
        },
      },
      {
        spell: SPELLS.DISABLE,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          static: 1000,
        },
      },
      {
        spell: SPELLS.ROLL,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: combatant.hasTalent(SPELLS.CELERITY_TALENT.id) ? 15 : 20,
        charges: combatant.hasTalent(SPELLS.CELERITY_TALENT.id) ? 3 : 2,
        enabled: !combatant.hasTalent(SPELLS.CHI_TORPEDO_TALENT.id),
      },
      {
        spell: SPELLS.CHI_TORPEDO_TALENT,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 20,
        charges: 2,
        enabled: combatant.hasTalent(SPELLS.CHI_TORPEDO_TALENT.id),
      },
      {
        spell: SPELLS.FLYING_SERPENT_KICK,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 25,
        gcd: {
          static: 1000,
        },
      },
      {
        spell: SPELLS.TIGERS_LUST_TALENT,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 30,
        gcd: {
          static: 1000,
        },
        enabled: combatant.hasTalent(SPELLS.TIGERS_LUST_TALENT.id),
      },
      {
        spell: SPELLS.TRANSCENDENCE,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          static: 1000,
        },
      },
      {
        spell: SPELLS.TRANSCENDENCE_TRANSFER,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 45,
        gcd: {
          base: 1000,
          minimum: 750,
        },
      },
      {
        spell: SPELLS.VIVIFY,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          base: 1500,
          minimum: 750,
        },
      },
      {
        spell: SPELLS.DETOX_ENERGY,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          base: 1000,
          mininum: 750,
        },
      },
      {
        spell: SPELLS.SPEAR_HAND_STRIKE,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
      },
      {
        spell: SPELLS.PROVOKE,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
      },
      {
        spell: SPELLS.CRACKLING_JADE_LIGHTNING,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          base: 1000,
          minimum: 750,
        },
      },
      {
        spell: SPELLS.STORM_EARTH_AND_FIRE_FIXATE,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
      },
      // Defensives
      {
        spell: SPELLS.DIFFUSE_MAGIC_TALENT,
        buffSpellId: SPELLS.DIFFUSE_MAGIC_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.DEFENSIVE,
        cooldown: 90,
        enabled: combatant.hasTalent(SPELLS.DIFFUSE_MAGIC_TALENT.id),
      },
      {
        spell: SPELLS.DAMPEN_HARM_TALENT,
        buffSpellId: SPELLS.DAMPEN_HARM_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.DEFENSIVE,
        cooldown: 90,
        enabled: combatant.hasTalent(SPELLS.DAMPEN_HARM_TALENT.id),
      },
    ];
  }
}

export default Abilities;
