import Image from "next/image";
import Link from "next/link";

export default function TestimonialSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
      <div className="flex flex-col justify-center">
        <p className="text-2xl md:text-3xl font-bold text-primary leading-snug">
          We <em>really</em> love our tribu.
        </p>
        <p className="mt-4 text-gray-600">
          Fusce gravida ut nisi et facilisis. Nullam ut mi fermentum, posuere
          dolor id, ultricies ipsum. Duis urna ipsum, tincidunt ut lorem.
        </p>
        <Link
          href="/"
          className="mt-6 text-sm font-bold hover:text-primary transition-colors"
        >
          Read all testimonials &gt;
        </Link>
      </div>

      <div className="relative h-[500px] rounded-2xl overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-[21%] bg-gradient-to-r from-primary to-primary-light z-10" />
        <Image
          src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80"
          alt="Martha Ramos"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
          <div className="bg-white rounded-xl px-6 py-4">
            <p className="font-bold">Martha Ramos</p>
            <p className="text-sm text-gray-500">Customer from 2007</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-white rounded-2xl p-10 flex items-center">
        <p className="text-xl md:text-2xl font-bold leading-relaxed">
          &ldquo;Here I can find original items, low prices without to lose
          quality or sustainability. Love it!&rdquo;
        </p>
      </div>
    </div>
  );
}
