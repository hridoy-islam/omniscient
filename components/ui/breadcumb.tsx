interface BreadcumbProps {
  tagline?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function Breadcumb({
  tagline,
  title,
  subtitle,
  description,
}: BreadcumbProps) {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header Content */}
        <div className="text-center space-y-6 animate-fade-in-up">
          <p className="text-blue-600 font-semibold text-lg">{tagline}</p>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {title}
            <span className="block text-gradient">{subtitle}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
