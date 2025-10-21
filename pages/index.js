import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Add scroll effect to navbar
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
      } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value.trim();
    if (searchTerm) {
      alert(`Searching for properties matching: "${searchTerm}". This would typically show filtered results.`);
    } else {
      alert('Please enter a search term');
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    if (!name || !email || !message) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Simulate form submission
    alert('Thank you for your message! We will contact you soon.');
    e.target.reset();
  };

  const categoryData = [
    {
      title: 'Studio Apartments',
      description: 'Perfect for singles and young professionals',
      count: '25+ Properties',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'One Bedroom',
      description: 'Ideal for couples and small families',
      count: '45+ Properties',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Two Bedroom',
      description: 'Comfortable living for small families',
      count: '60+ Properties',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
    },
    {
      title: 'Three Bedroom',
      description: 'Spacious homes for growing families',
      count: '80+ Properties',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80'
    },
    {
      title: 'Four Bedroom',
      description: 'Large family homes with extra space',
      count: '50+ Properties',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Five Bedroom',
      description: 'Luxury homes for large families',
      count: '30+ Properties',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Six Bedroom',
      description: 'Executive homes with premium features',
      count: '20+ Properties',
      image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Luxury Villas',
      description: 'Ultimate luxury living experience',
      count: '15+ Properties',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
    }
  ];

  const featuredProperties = [
    {
      title: 'Modern Luxury Apartment',
      location: 'Downtown District',
      price: '$850,000',
      badge: 'Featured',
      beds: 3,
      baths: 2,
      sqft: '1,200',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Spacious Family House',
      location: 'Suburban Area',
      price: '$1,200,000',
      badge: 'New',
      beds: 4,
      baths: 3,
      sqft: '2,500',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Exclusive Villa',
      location: 'Premium Location',
      price: '$2,500,000',
      badge: 'Luxury',
      beds: 6,
      baths: 5,
      sqft: '4,000',
      image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80'
    }
  ];

  return (
    <>
      <Head>
        <title>Premium Real Estate - Find Your Dream Home</title>
        <meta name="description" content="Premium Real Estate - Find your dream home with our extensive collection of studios, apartments, houses, and luxury villas. Professional real estate services with modern search and filtering." />
        <meta name="keywords" content="real estate, property, homes, apartments, villas, studios, houses, buy, rent, luxury properties" />
        <meta name="author" content="Premium Real Estate" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://premium-real-estate.vercel.app/" />
        <meta property="og:title" content="Premium Real Estate - Find Your Dream Home" />
        <meta property="og:description" content="Discover premium properties that match your lifestyle and budget. Browse studios, apartments, houses, and luxury villas." />
        <meta property="og:image" content="https://premium-real-estate.vercel.app/images/featured/property-1.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://premium-real-estate.vercel.app/" />
        <meta property="twitter:title" content="Premium Real Estate - Find Your Dream Home" />
        <meta property="twitter:description" content="Discover premium properties that match your lifestyle and budget. Browse studios, apartments, houses, and luxury villas." />
        <meta property="twitter:image" content="https://premium-real-estate.vercel.app/images/featured/property-1.jpg" />
        
        {/* Favicon */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏠</text></svg>" />
        
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2><i className="fas fa-home"></i> PremiumEstate</h2>
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link">Home</a>
            <a href="#properties" className="nav-link">Properties</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Find Your Perfect Home</h1>
          <p>Discover premium properties that match your lifestyle and budget</p>
          <form className="search-container" onSubmit={handleSearch}>
            <input 
              type="text" 
              name="search"
              placeholder="Search location, property type..." 
              className="search-input" 
            />
            <button type="submit" className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <h3>500+</h3>
            <p>Properties</p>
          </div>
          <div className="stat">
            <h3>1000+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Awards Won</p>
          </div>
        </div>
      </section>

      {/* Property Categories */}
      <section id="properties" className="properties-section">
        <div className="container">
          <h2 className="section-title">Browse by Property Type</h2>
          <p className="section-subtitle">Find the perfect space for your needs</p>
          
          <div className="property-categories">
            {categoryData.map((category, index) => (
              <div 
                key={index}
                className="category-card"
                onClick={() => alert(`Showing ${category.title.toLowerCase()} properties. This would typically filter the property listings.`)}
              >
                <div className="category-image">
                  <Image 
                    src={category.image} 
                    alt={category.title} 
                    className="category-img"
                    width={400}
                    height={250}
                  />
                  <div className="category-overlay">
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                    <span className="property-count">{category.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="featured-properties">
        <div className="container">
          <h2 className="section-title">Featured Properties</h2>
          <div className="properties-grid">
            {featuredProperties.map((property, index) => (
              <div key={index} className="property-card">
                <div className="property-image">
                  <Image 
                    src={property.image} 
                    alt={property.title}
                    width={400}
                    height={250}
                  />
                  <div className="price-tag">{property.price}</div>
                  <div className="property-badge">{property.badge}</div>
                </div>
                <div className="property-info">
                  <h3>{property.title}</h3>
                  <p className="location">
                    <i className="fas fa-map-marker-alt"></i> {property.location}
                  </p>
                  <div className="property-features">
                    <span><i className="fas fa-bed"></i> {property.beds} Beds</span>
                    <span><i className="fas fa-bath"></i> {property.baths} Baths</span>
                    <span><i className="fas fa-ruler-combined"></i> {property.sqft} sq ft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Why Choose PremiumEstate?</h2>
              <p>With over 15 years of experience in the real estate market, we&apos;ve helped thousands of families find their perfect homes. Our commitment to excellence and customer satisfaction sets us apart.</p>
              <div className="features-list">
                <div className="feature">
                  <i className="fas fa-shield-alt"></i>
                  <div>
                    <h4>Trusted Service</h4>
                    <p>Licensed and insured professionals</p>
                  </div>
                </div>
                <div className="feature">
                  <i className="fas fa-clock"></i>
                  <div>
                    <h4>24/7 Support</h4>
                    <p>Always available when you need us</p>
                  </div>
                </div>
                <div className="feature">
                  <i className="fas fa-dollar-sign"></i>
                  <div>
                    <h4>Best Prices</h4>
                    <p>Competitive rates and no hidden fees</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <Image 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80" 
                alt="Our Team"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Address</h4>
                  <p>123 Real Estate Ave, City, State 12345</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>info@premiumestate.com</p>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Your Phone" />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3><i className="fas fa-home"></i> PremiumEstate</h3>
              <p>Your trusted partner in finding the perfect home. Quality service, premium properties, satisfied customers.</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#properties">Properties</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Property Types</h4>
              <ul>
                <li><a href="#studios">Studios</a></li>
                <li><a href="#apartments">Apartments</a></li>
                <li><a href="#houses">Houses</a></li>
                <li><a href="#villas">Villas</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <ul>
                <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
                <li><i className="fas fa-envelope"></i> info@premiumestate.com</li>
                <li><i className="fas fa-map-marker-alt"></i> 123 Real Estate Ave</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 PremiumEstate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}