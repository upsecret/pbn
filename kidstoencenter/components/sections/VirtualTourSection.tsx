export default function VirtualTourSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-3" style={{ color: "#333333" }}>
          A Virtual Tour of our KidsTown<br />Child Care Centers
        </h2>
        <p className="text-gray-500 text-sm mb-10 max-w-xl mx-auto">
          See what makes KidsTown special — explore our safe, bright, and fun spaces designed for children to learn and play.
        </p>

        {/* YouTube embed */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/DyWg0XKzQNI"
            title="A Virtual Tour of KidsTown Child Care Centers"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
