function Jobs({ title, description, fulltime, remote, link }) {
  return (
    <div>
      <div className="mt-8">
        <div>
          <button className="float-right font-bold text-2xl">
            <a href={link} target="blank">
              Apply ↗
            </a>
          </button>
          <h1 className="font-semibold text-2xl ">{title}</h1>
        </div>

        <div className="pt-2 tracking-wider">
          <p>{description}</p>
        </div>

        <div className="mt-5">
          <span className="px-4 py-2 font-semibold border border-black w-32 h-10 rounded-full mr-4">
            {!remote ? "🏢 On-Site" : "📍100%remote"}
          </span>
          <span className="px-4 py-2 font-semibold border border-black w-32 h-10 rounded-3xl">
            {!fulltime ? "⌛ Part-time" : "🕓 Full-time"}
          </span>
        </div>
        <hr class="h-px my-8 bg-gray-700 border-2 "></hr>
      </div>
    </div>
  );
}
export default Jobs;
