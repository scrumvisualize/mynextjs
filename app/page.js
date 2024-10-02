import TopSection from './topsection';

const Home = () =>{

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <TopSection/>
          <p className="mt-4">This is the home page.</p>
        </div>
    )
}
export default Home;