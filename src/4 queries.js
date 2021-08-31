import {buildSchema, graphql} from "graphql"
import {data} from "./1 graphql.js"
import fs  from 'fs'

const schema = buildSchema(`
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

fragment crabsFromPlaces on Crab {
  name
  locations {
    name
  }
}
`);

graphql(
    schema,
    `
      {
        crabsFromPlaces
      }
    `,
    data
  ).then((res) => {
      const json = JSON.stringify(res)
      fs.writeFileSync('out\\4 queries.json', json)
      console.log('Overfetching Result: ', res)
  });