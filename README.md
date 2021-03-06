[![Netlify Status](https://api.netlify.com/api/v1/badges/d8a96ce1-3352-4e3f-87f3-52e90f82e6b0/deploy-status)](https://app.netlify.com/sites/cranky-hugle-0e78e2/deploys)
# flight-api
Flight API is a simple airport API service that allows developers to
query basic airport information for free. Information on how to use this
API can be found below.

## Current API Usage:
`/api/search/:search`

Query this url with any string to get an array of objects matching your search query.

Example Output:

`/api/search/KADW`

```
[
    0:{
        continent: "NA", 
        coordinates: "-76.866997, 38.810799",
        elevation_ft: "280",
        gps_code: "KADW",
        iata_code: "ADW",
        ident: "KADW",
        iso_country: "US",
        iso_region: "US-MD",
        local_code: "ADW",
        municipality: "Camp Springs",
        name: "Joint Base Andrews",
        score: 6.6,
        type: "large_airport",
        _id: "60c3f20520fe691bd452ab55",
    }
]
```


`/api/faa/:faa`

Query this url with any FAA identifier code and recieve an object for that airport.

Example output:

`/api/faa/KADW`

```
{
    continent: "NA", 
    coordinates: "-76.866997, 38.810799",
    elevation_ft: "280",
    gps_code: "KADW",
    iata_code: "ADW",
    ident: "KADW",
    iso_country: "US",
    iso_region: "US-MD",
    local_code: "ADW",
    municipality: "Camp Springs",
    name: "Joint Base Andrews",
    score: 6.6,
    type: "large_airport",
    _id: "60c3f20520fe691bd452ab55",
}
```
