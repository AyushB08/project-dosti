import TeamItem from "./TeamItem";
export default function Team() {
    
    const teamMembers = [
        { name: 'Aarna Rajvansh', role: 'Social Media', imageUrl: '/images/image1.png' },
        { name: 'Abhijay Parija', role: 'Hardware', imageUrl: '/images/image2.png' },
        { name: 'Ahaan Anand', role: 'Social Media', imageUrl: '/images/image3.png' },
        { name: 'Devika Gupta', role: 'Social Media', imageUrl: '/images/image4.png' },
        { name: 'Aarna Rajvansh', role: 'Social Media', imageUrl: '/images/image5.png' },
        { name: 'Karan Raj', role: 'Project Lead', imageUrl: '/images/image6.png' },
        { name: 'Mannomay Gupta', role: 'Hardware', imageUrl: '/images/image7.png' },
        { name: 'Ranveer Kapoor', role: 'Research Head', imageUrl: '/images/image8.png' },
        { name: 'Reet Sehra', role: 'Fundraising', imageUrl: '/images/image9.png' },
        { name: 'Sparsh Ranjan', role: 'Software', imageUrl: '/images/image10.png' },
        { name: 'Suhaan Khurana', role: 'Project Lead', imageUrl: '/images/image11.png' },
        { name: 'Vansh Bhalla', role: 'Graphics', imageUrl: '/images/image12.png' },
       
    ];
    return (
        <div id="team" className="md:h-screen w-screen bg-blue-500 flex flex-col items-center justify-center">
            <h1 className="text-white text-5xl font-bold mt-10 md:mt-0">Meet the Team</h1>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-8 mt-8 max-w-6xl mx-auto mb-8 md:mb-0">
            {teamMembers.map((member, index) => (
                <TeamItem key={index} name={member.name} role={member.role} imageUrl={member.imageUrl} />
            ))}
            </div>
        </div>
    )
    
}