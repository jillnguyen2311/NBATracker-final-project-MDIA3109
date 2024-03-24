export default function NewsletterSection() {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Subscribe to Our Newsletter</h2>
          <form className="max-w-md mx-auto flex items-center">
            <input type="email" placeholder="Enter your email" className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none" />
            <button type="submit" className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded-r-md hover:bg-orange-400">Subscribe</button>
          </form>
        </div>
      </section>
    );
  }