export default async function fetchData(url: string) {
    try {
        const fetchdata = await fetch(url)
        const data = await fetchdata.json()
        return data
    } catch (error) {
        console.log(error)
    }
}