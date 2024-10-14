export default function CareerDesign({ benefits }) {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
            <section className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div
                        className="space-y-2 relative before:absolute before:h-full before:w-1 before:bg-purple-600 
            before:-left-4 before:rounded-full"
                    >
                        <h2 className="text-sm font-semibold text-purple-800 tracking-wide uppercase">
                            BENEFITS
                        </h2>
                        <h3
                            className="text-4xl font-bold bg-gradient-to-r from-purple-900 to-purple-600 
            bg-clip-text text-transparent"
                        >
                            Why you Should Join Our Awesome Team
                        </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                        We want to feel like home when you are working at
                        JMC(Japan Marketing & Consultancy Limited) & for that we
                        have curated a great set of benefits for you! It all
                        starts with the free lunch!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300
              hover:shadow-xl hover:-translate-y-1 ${benefit.hoverBg}`}
                        >
                            <div
                                className={`p-3 ${benefit.iconBg} rounded-lg w-fit mb-4`}
                            >
                                <div className={benefit.iconColor}>
                                    {benefit.icon}
                                </div>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                {benefit.title}
                            </h4>
                            <p className="text-gray-600 text-sm">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="text-center space-y-8">
                <div className="max-w-2xl mx-auto space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                        COME JOIN US
                    </h2>
                    <h3
                        className="text-4xl font-bold bg-gradient-to-r from-purple-900 to-purple-600 
          bg-clip-text text-transparent"
                    >
                        Career Openings
                    </h3>
                    <p className="text-gray-600">
                        We're always looking for creative, talented
                        self-starters to join us. Check out our open roles below
                        and fill out an application.
                    </p>
                </div>

                {/* <div className="inline-flex bg-gray-100 rounded-full p-1">
        {['Design', 'Marketing', 'Support', 'Media/PR', 'Tech'].map((category, index) => (
          <button
            key={index}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${index === 0 
                ? 'bg-white text-purple-900 shadow-sm' 
                : 'text-gray-600 hover:text-purple-900 hover:bg-gray-200'
              }`}
          >
            {category}
          </button>
        ))}
      </div> */}
            </section>
        </div>
    );
}
