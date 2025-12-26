/*export default function Services() {
        const columnStyle = {
                padding: '1rem 2rem',
        };
       
        return (
                <section id="Services" className="section pt-5 bg-dark text-light" data-aos="fade-up">
                        <div className="container ">
                                
                                <h2 className="text-center mb-2 " style={{
                                        color: '#ffffff',
                                        fontWeight: 'bold'
                                }}>
                                        <i className="bi bi-lightbulb-fill me-2 text-info"></i>What I Can Help With
                                </h2>
       
       
       
       
<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <hr
                style={{
                        border: 'none',
                        height: '3px',
                        backgroundColor: '#00ffff',
                        width: '250px', // adjust width to center nicely
                        boxShadow: '0 0 10px #00ffff',
                        marginBottom: '40px',
                }}
        />
</div>
       
       
       
       
       
       
                        
                                
       
                                <div className="row px-md-5">
                                     
                                        <div className="col-md-6 " style={columnStyle} data-aos="fade-right">
                                                <h4 className="text-info mb-2" style={{color:"#00ffff"}}>Frontend Development</h4>
                                                <ul className="text-white-50 mb-4 ps-3">
                                                        <li>⚡ Responsive UI design using React and Bootstrap</li>
                                                        <li>🎨 Clean layouts with modern CSS and animations</li>
                                                        <li>📱 Mobile-first approach for all screen sizes</li>
                                                </ul>
       
                                                <h4 className="text-info mb-2" style={{color:"#00ffff"}}>Portfolio Setup</h4>
                                                <ul className="text-white-50 mb-4 ps-3">
                                                        <li>🌐 Building personal websites with React</li>
                                                        <li>🚀 Deploying to GitHub Pages or Netlify</li>
                                                        <li>🧩 Customizing layout and branding</li>
                                                </ul>
                                        </div>
       
                                        
                                        <div className="col-md-6" style={columnStyle} data-aos="fade-left">
                                                <h4 className="text-info mb-2" style={{color:"#00ffff"}}>API Integration</h4>
                                                <ul className="text-white-50 mb-4 ps-3">
                                                        <li>🔗 Connecting frontend to RESTful APIs</li>
                                                        <li>📡 Handling data flow and async operations</li>
                                                        <li>🧪 Testing and debugging API responses</li>
                                                </ul>
       
                                                <h4 className="text-info mb-2" style={{color:"#00ffff"}}>Collaboration & Learning</h4>
                                                <ul className="text-white-50 mb-4 ps-3">
                                                        <li>🤝 Teaming up on small projects</li>
                                                        <li>🧠 Sharing ideas and learning together</li>
                                                        <li>📘 Open to mentorship and community work</li>
                                                </ul>
                                        </div>
                                </div>
                        </div>
                </section>
        );
}
        */







export default function Services() {
    const columnStyle = {
        padding: '1rem 2rem',
    };

    return (
        <section id="Services" className="section pt-5 bg-dark text-light" data-aos="fade-up">
            <div className="container">
                {/* Section Title */}
                <h2
                    className="text-center mb-2"
                    style={{
                        color: '#ffffff',
                        fontWeight: 'bold',
                    }}
                >
                    <i className="bi bi-lightbulb-fill me-2 text-info"></i>What I Can Help With
                </h2>

                {/* Center Divider */}
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <hr
                        style={{
                            border: 'none',
                            height: '3px',
                            backgroundColor: '#00ffff',
                            width: '250px',
                            boxShadow: '0 0 10px #00ffff',
                            marginBottom: '40px',
                        }}
                    />
                </div>

                {/* Responsive Two-Column Layout */}
                <div className="row px-md-5">
                    {/* Left Column */}
                    <div
                        className="col-12 col-md-6"
                        style={columnStyle}
                        data-aos="fade-right"
                    >
                        <h4 className="text-info mb-2" style={{ color: '#00ffff' }}>
                            Frontend Development
                        </h4>
                        <ul className="text-white-50 mb-4 ps-3">
                            <li>⚡ Responsive UI design using React and Bootstrap</li>
                            <li>🎨 Clean layouts with modern CSS and animations</li>
                            <li>📱 Mobile-first approach for all screen sizes</li>
                        </ul>

                        <h4 className="text-info mb-2" style={{ color: '#00ffff' }}>
                            Portfolio Setup
                        </h4>
                        <ul className="text-white-50 mb-4 ps-3">
                            <li>🌐 Building personal websites with React</li>
                            <li>🚀 Deploying to GitHub Pages or Netlify</li>
                            <li>🧩 Customizing layout and branding</li>
                        </ul>
                    </div>

                    {/* Right Column */}
                    <div
                        className="col-12 col-md-6"
                        style={columnStyle}
                        data-aos="fade-left"
                    >
                        <h4 className="text-info mb-2" style={{ color: '#00ffff' }}>
                            API Integration
                        </h4>
                        <ul className="text-white-50 mb-4 ps-3">
                            <li>🔗 Connecting frontend to RESTful APIs</li>
                            <li>📡 Handling data flow and async operations</li>
                            <li>🧪 Testing and debugging API responses</li>
                        </ul>

                        <h4 className="text-info mb-2" style={{ color: '#00ffff' }}>
                            Collaboration & Learning
                        </h4>
                        <ul className="text-white-50 mb-4 ps-3">
                            <li>🤝 Teaming up on small projects</li>
                            <li>🧠 Sharing ideas and learning together</li>
                            <li>📘 Open to mentorship and community work</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
