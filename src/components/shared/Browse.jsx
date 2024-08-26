import JobCard from "../JobCard"

const allJobs = [1,2,3,4,5,6]

const Browse = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">Search Results number</h1>
        <div className="grid grid-cols-3 gap-4">
          {
            allJobs.map((job,index) => {
              return (
                <JobCard key={index}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Browse