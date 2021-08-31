import {graphql} from "graphql"
import {schema, data} from "./1 graphql.js"
import fs  from 'fs'

// Under fetching
// If we need Crabs and Places we have to send two requests
graphql(
    schema,
    `
      {
        crab {
          name
          locations {
            name
            language
            nationalFood
            population
          }
        }
      }
    `,
    data
  ).then((res) => {
    const json = JSON.stringify(res)
    fs.writeFileSync('out\\2 underfetching.json', json)
    console.log('Underfetching Result: ', res)
  });