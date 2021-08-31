import {graphql} from "graphql"
import {schema, data} from "./1 graphql.js"
import fs  from 'fs'


// Over fetching
// If we want to know the name of a Place that a Crab lives we don't want to know everything
graphql(
    schema,
    `
      {
        crab {
          name
          locations {
            name
          }
        }
      }
    `,
    data
  ).then((res) => {
      const json = JSON.stringify(res)
      fs.writeFileSync('out\\3 overfetching.json', json)
      console.log('Overfetching Result: ', res)
  });