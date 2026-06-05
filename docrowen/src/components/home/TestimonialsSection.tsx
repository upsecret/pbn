import Image from "next/image";

const avatars = [
  "https://images.unsplash.com/photo-1680458842540-b320ff0d0684?w=100&q=80",
  "https://images.unsplash.com/photo-1617136505992-a93c80ac5852?w=100&q=80",
  "https://images.unsplash.com/photo-1553861542-1461a2fe0c8f?w=100&q=80",
  "https://images.unsplash.com/photo-1601939964418-9dfadfda7db8?w=100&q=80",
];

const reviews = [
  {
    title: "Delicious and Healthy",
    text: "A must-try for all health-conscious food lovers! Our agency-consulting cuisine is authentic and delectable, using only fresh, natural ingredients.",
    author: "Carla Smith",
  },
  {
    title: "Nutritious and Tasty",
    text: "Our signature dishes are cooked with perfection and the seasonings used are full of flavor. Highly recommended!",
    author: "John Doe",
  },
  {
    title: "Delicious & Nutritious Meals",
    text: "Indulge in a guilt-free meal, prepared with the freshest ingredients and herbs. Our dishes are a perfect balance of taste and health, making us the top choice!",
    author: "Linda Davis",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between mb-12">
          <div>
            <p className="text-sm font-semibold text-primary mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Our Clients&apos; Feedback
            </h2>
          </div>
          <div className="mt-6 md:mt-0 flex items-center gap-4">
            <div className="flex -space-x-3">
              {avatars.map((src, i) => (
                <div
                  key={i}
                  className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white"
                >
                  <Image
                    src={src}
                    alt="Client"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="text-gold text-sm">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
              <p className="text-xs text-gray-500">
                <strong>4.8</strong> from 1,200+ reviews
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <p className="font-bold mb-3">&ldquo;{review.title}&rdquo;</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {review.text}
              </p>
              <p className="text-gold text-sm mb-1">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </p>
              <p className="text-xs text-gray-500">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
