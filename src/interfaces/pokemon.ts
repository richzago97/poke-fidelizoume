export interface Ability {
   ability: {
      name: string;
      url: string;
   };
   is_hidden: boolean;
   slot: number;
}

export interface Sprites {
   back_default?: string;
   back_female?: string | null;
   back_shiny?: string;
   back_shiny_female?: string | null;
   front_default?: string;
}

export interface Stat {
   base_stat: number;
   effort: number;
   stat: {
      name: string;
      url: string;
   };
}

export interface Type {
   slot: number;
   type: {
      name: string;
      url: string;
   };
}

export interface Pokemon {
   abilities: Ability[];
   base_experience?: number;
   forms?: any[];
   game_indices?: any[];
   height: number;
   held_items?: any[];
   id: number;
   is_default?: boolean;
   location_area_encounters?: string;
   moves?: any[];
   name: string;
   order?: number;
   past_types?: any[];
   species?: {
      name: string;
      url: string;
   };
   sprites: Sprites;
   stats?: Stat[];
   types: Type[];
   weight: number;
}
