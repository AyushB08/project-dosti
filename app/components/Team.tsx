import TeamItem from "./TeamItem";
export default function Team() {
    
    const teamMembers = [
        { name: 'Suhaan Khurana', role: 'Project Lead', imageUrl: '/images/team1.png' },
        { name: 'Karan Raj', role: 'Project Lead', imageUrl: '/images/team2.png' },
        { name: 'Reet Sehra', role: 'Fundraising', imageUrl: '/images/team3.png' },
        { name: 'Ranveer Kapoor', role: 'Research Head', imageUrl: '/images/team4.png' },
        { name: 'Priya Mathur', role: 'Research Head', imageUrl: '/images/team5.png' },
        { name: 'Vansh Bhalla', role: 'Graphics', imageUrl: '/images/team6.png' },
        { name: 'Abhijay Parija', role: 'Hardware', imageUrl: '/images/team7.png' },
        { name: 'Gia Bhargava', role: 'Social Media', imageUrl: '/images/team8.png' },
        { name: 'Aarna Rajvansh', role: 'Social Media', imageUrl: '/images/team9.png' },
        { name: 'Sparsh Ranjan', role: 'Software', imageUrl: '/images/team10.png' },
        { name: 'Devika Gupta', role: 'Social Media', imageUrl: '/images/team11.png' },
        { name: 'Ahaan Anand', role: 'Research', imageUrl: '/images/team12.png' },
        {name: 'Sharika Kaul Dutta', role: 'Social Media', imageUrl: '/images/team13.png' },
        { name: 'Mannomay Gupta', role: 'Social Media', imageUrl: '/images/team14.png' },
        { name: 'Jiya Gupta', role: 'Research', imageUrl: '/images/team15.png' },
        
       
        
    
        
       
    ];
    return (
        <div id="team" className="md:h-grow max-w-screen bg-blue-500 flex flex-col items-center justify-center">
            <h1 className="text-white text-5xl font-bold mt-10">Meet the Team</h1>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-8 mt-8 max-w-6xl mx-auto mb-8 0">
            {teamMembers.map((member, index) => (
                <TeamItem key={index} name={member.name} role={member.role} imageUrl={member.imageUrl} />
            ))}
            </div>
        </div>
    )
    
}