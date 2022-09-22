function Page({ data }) {
    // Render data...
    return (<ul>
        <li>profileId: {data[1].profileId}</li>
        <li>FirstName: {data[1].firstName}</li>
    </ul>)
  }
  
  // This gets called on every request
  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/v1/getPeople/123`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }
  
  export default Page
