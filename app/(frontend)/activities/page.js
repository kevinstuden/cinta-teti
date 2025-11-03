import Image from 'next/image'
import Header from '@/components/Header'

export default function ActivitiesPage() {
  const activities = [
    {
      title: "Vice Head of Enforun 2025",
      description: "Leading and coordinating one of the major events in my departement. This role involves strategic planning, team management, and ensuring the successful execution of the event.",
      imageSrc: "VHoD.jpg",
    },
    {
      title: "Part-time at GMRT",
      description: "Working part-time with the Gadjah Mada Robotic Team (GMRT). I'm contributing to exciting projects and gaining hands-on experience in engineering and teamwork.",
      imageSrc: "GMRT.jpg",
      footer: "Wish me luck!"
    },
    {
      title: "Hobby: Archery",
      description: "My new hobby! I'm learning the art of archery, which teaches me focus, discipline, and precision. It's a fantastic way to clear my mind and build mental strength.",
      imageSrc: "ukmpanah.jpg",
    },
  ];

  return (
    <div className="animate-fadeIn">
      <Header title="Current Activities" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {activities.map((activity) => (
          <div 
            key={activity.title} 
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl"
          >
            <img
              src={activity.imageSrc}
              alt={activity.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex-grow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{activity.title}</h2>
              <p className="text-gray-700">
                {activity.description}
              </p>
            </div>
            {activity.footer && (
              <div className="p-6 pt-0">
                <p className="text-lg italic text-blue-600 font-medium">{activity.footer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}