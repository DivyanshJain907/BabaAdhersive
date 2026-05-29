import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Baba Adhesive's Panel Fixing Adhesive is exceptional! Perfect bond strength and incredibly reliable for all our construction projects. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
    name: "Rajesh Kumar",
    role: "Construction Manager",
  },
  {
    text: "We've been using Baba Adhesive's Furniture Adhesive for 5 years now. Superior quality, fast setting, and excellent durability. A game-changer for our business!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
    name: "Priya Singh",
    role: "Furniture Manufacturer",
  },
  {
    text: "Their Waterproof Adhesive is outstanding! Works perfectly in harsh weather conditions. Best product in the market. Highly trusted partner.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
    name: "Vikram Patel",
    role: "Contractor",
  },
  {
    text: "Industrial Glue from Baba Adhesive has revolutionized our production line. Consistent quality, fast delivery, and competitive pricing. Excellent partnership!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
    name: "Anita Gupta",
    role: "Manufacturing Head",
  },
  {
    text: "Outstanding customer service and premium quality adhesives. Baba Adhesive understands our industry needs perfectly and delivers consistently.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop",
    name: "Arjun Malhotra",
    role: "Production Engineer",
  },
  {
    text: "For over a decade, Baba Adhesive has been our go-to supplier. Their commitment to excellence and reliability is unmatched in the industry.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
    name: "Meera Sharma",
    role: "Supply Chain Manager",
  },
  {
    text: "Fast delivery, premium quality, and fair pricing. Baba Adhesive sets the standard for excellence in the adhesive industry.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop",
    name: "Sanjay Verma",
    role: "Industrial Buyer",
  },
  {
    text: "Professional team with deep expertise in adhesive technology. They've helped us achieve better results and reduce costs significantly.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
    name: "Divya Nair",
    role: "Project Manager",
  },
  {
    text: "Building our success with Baba Adhesive's reliable products and exceptional support. They're the foundation of our growth.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
    name: "Nikhil Sharma",
    role: "Business Owner",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section className="bg-white py-24 px-4 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-blue-300/30 py-1 px-4 rounded-lg text-blue-600">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-darkGray">
            What our customers say
          </h2>
          <p className="text-center mt-5 opacity-75 text-gray-600">
            See what our valued clients have to say about Baba Adhesive.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
