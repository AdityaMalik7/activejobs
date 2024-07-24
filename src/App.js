import Button from "./components/Button";
import Jobs from "./Jobs";

function App() {
  const activeJobs = [
    {
      title: "Product Designer",
      desc: "We're looking for a talented product designer to join our team.",
      remote: true,
      fulltime: true,
      link: "https://www.linkedin.com/jobs/view/3976884377/?alternateChannel=search&refId=aOGw4gg3GmJ6uH6ATSgLPg%3D%3D&trackingId=8JyPB3lfcNq0x5JhYvd0dA%3D%3D",
      type: "Design",
    },
    {
      title: "Software Engineer",
      desc: "We need a software engineer to develop high-quality software solutions.",
      remote: false,
      fulltime: true,
      link: "https://www.linkedin.com/jobs/view/3926236738/?alternateChannel=search&refId=3RdTJWBnLD%2BlA62plyFy7g%3D%3D&trackingId=uiMThwVYHhnCJLcD0RtI%2Fw%3D%3D",
      type: "Engineering",
    },
    {
      title: "Marketing Specialist",
      desc: "We are seeking a marketing specialist to create and execute marketing strategies.",
      remote: true,
      fulltime: false,
      link: "https://www.linkedin.com/jobs/view/3960940203/?alternateChannel=search&refId=fo0xSVpYlqEuA1eeeTlbaw%3D%3D&trackingId=ueZ5VH7IQOn6yslxRUEmeQ%3D%3D",
      type: "Marketing",
    },
    {
      title: "Data Scientist",
      desc: "Looking for a data scientist to analyze large datasets and provide insights.",
      remote: false,
      fulltime: true,
      link: "https://www.linkedin.com/jobs/view/3959366208/?alternateChannel=search&refId=mSx2zNhhlfFchvp%2BWk6J9A%3D%3D&trackingId=Dcmg1ycwJmQNIKGb%2FaEpOA%3D%3D",
      type: "Data",
    },
    {
      title: "UX Researcher",
      desc: "We need a UX researcher to gather insights on user behavior.",
      remote: true,
      fulltime: true,
      link: "https://www.linkedin.com/jobs/view/3970116706/?alternateChannel=search&refId=fgBnPvnQKTWWUQoxJy%2FUZw%3D%3D&trackingId=h0tM8KXQ1kHou%2Fer3EF7nA%3D%3D",
      type: "Design",
    },
    {
      title: "DevOps Engineer",
      desc: "Seeking a DevOps engineer to manage and automate our infrastructure.",
      remote: false,
      fulltime: true,
      link: "https://www.linkedin.com/jobs/view/3980184780/?alternateChannel=search&refId=j4yQ5BASht9tIpciRYsvWQ%3D%3D&trackingId=kuZjC0b2PiC%2B%2BhFdL0vVDg%3D%3D",
      type: "Engineering",
    },
    {
      title: "Content Writer",
      desc: "We are looking for a content writer to create engaging content for our platforms.",
      remote: true,
      fulltime: false,
      link: "https://www.linkedin.com/jobs/view/3981399855/?alternateChannel=search&refId=d1377fee-034f-4630-a429-3d12d5225f3d&trackingId=3oNiEUAlT8K9qTnmwP%2F6NQ%3D%3D",
      type: "Marketing",
    },
    {
      title: "Business Analyst",
      desc: "Join us as a business analyst to evaluate and improve our business processes.",
      remote: false,
      fulltime: true,
      link: "https://www.linkedin.com/jobs/view/3981219614/?alternateChannel=search&refId=oqPXCdtk5rGUY2cPpMJFvA%3D%3D&trackingId=BpFzdi9ARgreJybZPw81EA%3D%3D",
      type: "Business",
    },
    {
      title: "Frontend Developer",
      desc: "We need a frontend developer to build user-friendly web interfaces.",
      remote: true,
      fulltime: true,
      link: "https://www.linkedin.com/jobs/view/3964668401/?alternateChannel=search&refId=huqbHRDmX3toc43sPYZMjA%3D%3D&trackingId=L9DtVuNZkNnl4x8znC5meQ%3D%3D",
      type: "Engineering",
    },
    {
      title: "HR Manager",
      desc: "Looking for an HR manager to oversee recruitment and employee relations.",
      remote: false,
      fulltime: true,
      link: "https://www.linkedin.com/jobs/view/3954528114/?alternateChannel=search&refId=f565f6d5-15d3-45e1-9d5b-df1e0298b78e&trackingId=48MTXBx2RwuHlfXbDdAeZQ%3D%3D",
      type: "Human Resources",
    },
    {
      title: "Sales Manager",
      desc: "We need a sales manager to lead our sales team and drive revenue growth.",
      remote: false,
      fulltime: true,
      link: "https://www.linkedin.com/jobs/view/3970767788/?alternateChannel=search&refId=7590e4a6-9b9d-4b22-8dc9-23c1b4cc3fe1&trackingId=0RwzLrfgQzK2Ns%2BNXZ5b4Q%3D%3D",
      type: "Sales",
    },
    {
      title: "IT Support Specialist",
      desc: "Seeking an IT support specialist to provide technical assistance to our team.",
      remote: true,
      fulltime: true,
      link: "https://www.linkedin.com/jobs/view/3960325178/?alternateChannel=search&refId=Vl%2FqsTGPqQEGCyDu%2BpLgsQ%3D%3D&trackingId=mjfOfIEBZRSw9jYY0qeS4Q%3D%3D",
      type: "Support",
    },
    {
      title: "Operations Manager",
      desc: "We are looking for an operations manager to improve our operational efficiency.",
      remote: false,
      fulltime: true,
      link: "https://www.linkedin.com/jobs/view/3982902627/?alternateChannel=search&refId=LjEUSSvDUnmb1YxaXiPaWQ%3D%3D&trackingId=4GQpCEn%2Bl9caSfYUYh14WQ%3D%3D",
      type: "Operations",
    },
    {
      title: "Graphic Designer",
      desc: "Join us as a graphic designer to create visually appealing designs.",
      remote: true,
      fulltime: true,
      link: "https://www.linkedin.com/jobs/view/3981212642/?alternateChannel=search&refId=ebcf7fa5-b821-4a81-b4fd-ade007df3361&trackingId=2HgGU3H3Sm2gI5xA3YMqwg%3D%3D",
      type: "Design",
    },
    {
      title: "Financial Analyst",
      desc: "We need a financial analyst to assess our financial performance.",
      remote: false,
      fulltime: true,
      link: "https://www.linkedin.com/jobs/view/3980717745/?alternateChannel=search&refId=f5cdee3e-1749-47e8-b47c-758295517504&trackingId=T5QpP7XgThOF2lXq6RsuCw%3D%3D",
      type: "Finance",
    },
    {
      title: "Customer Success Manager",
      desc: "Looking for a customer success manager to ensure our clients are satisfied.",
      remote: true,
      fulltime: true,
      link: "https://www.linkedin.com/jobs/view/3967146362/?refId=d32QgtL%2BTd6M5%2BuKkjBKuw%3D%3D&trackingId=d32QgtL%2BTd6M5%2BuKkjBKuw%3D%3D",
      type: "Customer Success",
    },
  ];

  return (
    <div className="p-20 bg-amber-50">
      <div>
        <p className=" p-2 border border-black rounded-3xl w-28 text-center h-10 font-medium">
          we're hiring!
        </p>
        <h1 className="  pt-5 font-semibold text-5xl tracking-wider">
          Be part of our mission
        </h1>
        <p className="pt-5 tracking-wider">
          we're looking for passionate people to join us on our mission. We
          value
        </p>
        <p className="pt-1 tracking-wider">
          flat hierarchies,clear communication,and full ownership and
          responsibility.
        </p>
        <div className="pt-14 flex justify-around mr-48">
          <div>
            <Button>View all</Button>
          </div>
          <div>
            <Button variant="outlined">Development</Button>
          </div>
          <div>
            <Button variant="outlined">Design</Button>
          </div>
          <div>
            <Button variant="outlined">Marketing</Button>
          </div>
          <div>
            <Button variant="outlined">Customer Service</Button>
          </div>
          <div>
            <Button variant="outlined">Operatins</Button>
          </div>
          <div>
            <Button variant="outlined">Finance</Button>
          </div>
          <div className="pb-5">
            <Button variant="outlined">Management</Button>
          </div>
        </div>
        <hr class="h-px my-8 bg-gray-700 border-2 "></hr>
      </div>
      <div>
        {activeJobs.map(function descAbout(i) {
          return (
            <>
              <Jobs
                title={i.title}
                description={i.desc}
                remote={i.remote}
                fulltime={i.fulltime}
                link={i.link}
              />
            </>
          );
        })}
      </div>

    </div>
  );
}

export default App;
