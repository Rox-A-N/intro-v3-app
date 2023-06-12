const getData = async () => {
  await new Promise((res) => setTimeout(() => res(0), 2000))
  return  {data: [1, 2, 3]}
    
}

const Home = async () => {
  const data = getData()
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }

  export default Home