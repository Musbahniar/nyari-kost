// const contentful = require("contentful");
import { createClient } from 'contentful'

// export default contentful.createClient({
  export default createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});
