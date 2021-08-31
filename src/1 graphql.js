// REST APIs

// Under and over fetching
// GET crabs
// GET places

// GraphQL, be specific!

import { buildSchema } from "graphql";

export const schema = buildSchema(`
interface Noun {
    name: String
}

type Crab implements Noun{
	name: String
	locations: [Location]
}

type Location implements Noun{
	name: String
    language: Language
    nationalFood: String
	population: Int
}

enum Language { FRENCH, ENGLISH, NYOONGAR, SPANISH, DREHU, BAHASA MALAY, YAWURU }

type Query {
    noun(name: String) : Noun
    crab(name: String): Crab
    location(name: String) : Location
}
`);


export const data = {
  crab: {
    name: "Mudcrab",
    locations: [
      {
        name: "France",
        language: "FRENCH",
        nationalFood: "Baguette",
        population: 67000000,
      },
      {
        name: "Broome",
        language: "YAWURU",
        nationalFood: "Gabiny Plum",
        population: 16000,
      },
    ],
  },
  crab: {
    name: "Blue Manna",
    locations: [
      {
        name: "Perth",
        language: "NYOONGAR",
        nationalFood: "Baguette",
        population: 1900000,
      },
      {
        name: "New Caledonia",
        language: "DREHU",
        nationalFood: "Bougna Casserole",
        population: 274000,
      },
    ],
  },
};

export default {schema, data}