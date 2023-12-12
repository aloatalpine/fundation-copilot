import { getJson } from "serpapi"

export async function siteSearch(query) {
  try {
    //fetch the json from https://help.planoly.com/_hcms/search?term=connect%20instagram&language=en&offset=0
    //then return the results
    
    const results = await fetch(`https://help.planoly.com/_hcms/search?term=${encodeURIComponent(query)}&language=en&offset=0`)
      .then(res => res.json())
      .then(json => json.results);
   
      console.log(results)
    return results
  } catch (e) {
    return []
  }
}

export async function searchById(id) {
  return null

}