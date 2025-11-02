import Image from 'next/image'
import Header from '@/components/Header'

// --- IMPORTANT ---
// Place your certificate images in 'public/images/'
// e.g., 'public/images/highschool.jpg', 'public/images/cert1.jpg', 'public/images/ielts.jpg'
// -----------------

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
              <Image
                src="https://placehold.co/600x400/EBF8FF/3182CE?text=Certificate+1" // <-- REPLACE
                // src="/images/cert1.jpg" // <-- Use this line
                alt="Certificate 1"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">[Certificate 1 Title]</h3>
                <p className="text-gray-600">[Brief description or issuing body]</p>
              </div>
            </div>

            {/* Certificate 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
              <Image
                src="https://placehold.co/600x400/EBF8FF/3182CE?text=Certificate+2" // <-- REPLACE
                // src="/images/cert2.jpg" // <-- Use this line
                alt="Certificate 2"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">[Certificate 2 Title]</h3>
                <p className="text-gray-600">[Brief description or issuing body]</p>
              </div>
            </div>

            {/* IELTS Certificate */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
              <Image
                src="https://placehold.co/600x400/EBF8FF/3182CE?text=IELTS+Cert" // <-- REPLACE
                // src="/images/ielts.jpg" // <-- Use this line
                alt="IELTS Certificate"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">IELTS Certificate</h3>
                <p className="text-gray-600">[Your Score or Date]</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hobby: Theater Section */}
        <section>
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Hobby: Theater</h2>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6 items-center">
            <Image
              src="https://placehold.co/400x300/EBF8FF/3182CE?text=Theater" // <-- REPLACE
              // src="/images/theater.jpg" // <-- Use this line
              alt="Theater hobby"
              width={400}
              height={300}
              className="w-full md:w-1/3 rounded-lg shadow-sm"
            />
            <p className="text-lg text-gray-700 md:w-2/3">
              [Write a short paragraph about your hobby in theater. What do you enjoy about it? Any notable roles or experiences?]
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}