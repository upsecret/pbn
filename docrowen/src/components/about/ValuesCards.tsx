import Image from "next/image";

const values = [
  {
    title: "Let's be fair",
    subtitle: "Because fashion need to be fair, always",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
  },
  {
    title: "Let's be for all",
    subtitle: "Discover why and how our shop is totally inclusive",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
  },
  {
    title: "Let's clean up",
    subtitle: "Discover our sustainability initiatives",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
  },
];

export default function ValuesCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {values.map((value) => (
        <div key={value.title} className="relative h-96 rounded-2xl overflow-hidden group">
          <Image
            src={value.image}
            alt={value.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="bg-white rounded-xl p-5">
              <p className="text-primary font-semibold">{value.title}</p>
              <p className="text-sm font-semibold text-gray-800 mt-1">
                {value.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
