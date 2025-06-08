function Map() {
    return (
        <div className="py-16 lg:py-20">
            <div className="px-5 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h4 className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-2">
                        Location
                    </h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Find us here
                    </h2>
                </div>
                
                <div className="relative max-w-5xl mx-auto">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3861.856683329806!2d121.04834527590376!3d14.550187028307306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%F0%9F%93%8D%2017th%20floor%20high%20street%20south%20corporate%20plaza%20tower%202%2026th%20street%20bonifacio%20global%20city%20taguig%20metro%20manila!5e0!3m2!1sfil!2sph!4v1749047409498!5m2!1sfil!2sph"
                            width="100%"
                            height="500"
                            style={{border: 0}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Office Location"
                            className="w-full h-[400px] md:h-[500px] lg:h-[600px]"
                        />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none rounded-2xl"></div>
                </div>
            </div>
        </div>
    );
}

export default Map;