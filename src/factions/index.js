// The faction item IDs are kept with the other item IDs
import {
  OLD_BONE_SKELETON_KEY,
  ENGRAVED_PEWTER_TANKARD,
  DIARY_OF_THE_DEAD,
  NODULE_OF_PULSATING_AMBER,
  ROOKERY_PASSWORD,
  BRIGHT_BRASS_SKULL,
  ANTIQUE_CONSTABLES_BADGE,
  COPPER_CIPHER_RING,
  TINY_JEWELLED_RELIQUARY,
  ORNATE_TYPEWRITER,
  RED_FEATHERED_PIN,
  ENTRY_IN_SLOWCAKES_EXCEPTIONALS,
} from '../items';

// IDs for faction qualities
export const BOHEMIANS = 'Bohemians';
export const CHURCH = 'Church';
export const CONSTABLES = 'Constables';
export const CRIMINALS = 'Criminals';
export const DOCKS = 'Docks';
export const GREAT_GAME = 'Great Game';
export const HELL = 'Hell';
export const REVOLUTIONARIES = 'Revolutionaries';
export const RUBBERIES = 'Rubberies';
export const SOCIETY = 'Society';
export const TOMB_COLONIES = 'Tomb-Colonies';
export const URCHINS = 'Urchins';

// Map each item's ID to its corresponding faction
export const items = {
  [OLD_BONE_SKELETON_KEY]: CRIMINALS,
  [ENGRAVED_PEWTER_TANKARD]: DOCKS,
  [DIARY_OF_THE_DEAD]: TOMB_COLONIES,
  [NODULE_OF_PULSATING_AMBER]: RUBBERIES,
  [ROOKERY_PASSWORD]: URCHINS,
  [BRIGHT_BRASS_SKULL]: HELL,
  [ANTIQUE_CONSTABLES_BADGE]: CONSTABLES,
  [COPPER_CIPHER_RING]: GREAT_GAME,
  [TINY_JEWELLED_RELIQUARY]: CHURCH,
  [ORNATE_TYPEWRITER]: BOHEMIANS,
  [RED_FEATHERED_PIN]: REVOLUTIONARIES,
  [ENTRY_IN_SLOWCAKES_EXCEPTIONALS]: SOCIETY,
  // ENDOWMENT_OF_A_UNIVERSITY_FELLOWSHIP: UNIVERSITY,
  // O_BOYLES_PRACTICAL_PRIMER: WIDOW,
};
