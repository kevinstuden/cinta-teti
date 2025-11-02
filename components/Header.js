export default function Header({ title }) {
  return (
    <h1
      className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-blue-500 pb-2"
      style={{
        backgroundImage: 'url(/Gradientbg.png)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        WebkitBackgroundClip: 'text', 
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent', 
        color: 'transparent', 
      }}
    >
      {title}
    </h1>
  );
}