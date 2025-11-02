import Image from 'next/image'
import Header from '@/components/Header'

export default function AcademicsPage() {
  return (
    <div className="animate-fadeIn">
      <Header title="Academics & Hobbies" />

      <div className="space-y-12">
        {/* Education Section */}
        <section>
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Education</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Gadjah Mada University</h3>
            <p className="text-lg text-gray-600 mb-2">Biomedical Engineering (2025 - Present)</p>
            <h3 className="text-2xl font-semibold text-gray-800 mt-4">[SMAK 5 PENABUR]</h3>
            <p className="text-lg text-gray-600">[2025]</p>
          </div>
        </section>

        {/* Certificates Section */}
        <section>
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Certificate 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
              <img
                src="/Kebumian.jpg" 
                alt="Certificate 1"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">[KMTETI Design Course]</h3>
                <p className="text-gray-600">[A short course held in August, mainly focusing on understanding the base concept of design and application in Figma]</p>
              </div>
            </div>

            {/* Certificate 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
              <img
                src="Kebumianril.jpg" 
                alt="Certificate 2"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">[MCE ITB Earth Club Competition]</h3>
                <p className="text-gray-600">[A competition held by the Student Association Atmosphaira ITB, with a focus on Meteorology]</p>
              </div>
            </div>

            {/* IELTS Certificate */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
              <img
                src="IELTS.jpg" 
                alt="IELTS Certificate"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">IELTS Certificate</h3>
                <p className="text-gray-600">[Average Score of 8.0, taken in 2024 ]</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hobby: Theater Section */}
        <section>
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Hobby: Theater</h2>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6 items-center">
            <img
              src="DramaDocumentation.jpg" 
              alt="Theater hobby"
              width={400}
              height={300}
              className="w-full md:w-1/3 rounded-lg shadow-sm"
            />
            <p className="text-lg text-gray-700 md:w-2/3">
              [Involved in theater since middle school, participated in various plays and performance as the technical role and also as the actor. Theater has helped me build confidence and improve my public speaking skills.]
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}