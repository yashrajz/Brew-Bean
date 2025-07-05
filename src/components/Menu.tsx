
import React, { useState } from 'react';
import { Coffee, Cake } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const menuItems = {
    coffee: [
      { 
        name: 'Espresso', 
        description: 'Rich and bold single shot of pure coffee perfection', 
        price: '$3.50', 
        popular: true,
        image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop&crop=center'
      },
      { 
        name: 'Cappuccino', 
        description: 'Perfect harmony of espresso, steamed milk, and velvety foam', 
        price: '$4.50', 
        popular: false,
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop&crop=center'
      },
      { 
        name: 'Latte', 
        description: 'Smooth espresso blended with silky steamed milk artistry', 
        price: '$5.00', 
        popular: true,
        image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300&fit=crop&crop=center'
      },
      { 
        name: 'Americano', 
        description: 'Pure espresso with hot water for a clean, robust taste', 
        price: '$3.75', 
        popular: false,
        image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=300&fit=crop&crop=center'
      },
      { 
        name: 'Mocha', 
        description: 'Decadent blend of espresso, chocolate, and steamed milk', 
        price: '$5.50', 
        popular: true,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center'
      },
      { 
        name: 'Macchiato', 
        description: 'Bold espresso marked with a cloud of milk foam', 
        price: '$4.25', 
        popular: false,
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop&crop=center'
      }
    ],
    pastries: [
      { 
        name: 'Croissant', 
        description: 'Buttery, flaky French pastry baked to golden perfection', 
        price: '$3.25', 
        popular: true,
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop&crop=center'
      },
      { 
        name: 'Blueberry Muffin', 
        description: 'Fresh baked delight bursting with wild blueberries', 
        price: '$3.75', 
        popular: false,
        image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=300&fit=crop&crop=center'
      },
      { 
        name: 'Chocolate Chip Cookie', 
        description: 'Warm, gooey homemade cookie with premium chocolate chips', 
        price: '$2.50', 
        popular: true,
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop&crop=center'
      },
      { 
        name: 'Banana Bread', 
        description: 'Moist, flavorful slice made with ripe bananas and love', 
        price: '$3.50', 
        popular: false,
        image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=300&fit=crop&crop=center'
      },
      { 
        name: 'Scone', 
        description: 'Traditional English scone served with house-made jam', 
        price: '$4.00', 
        popular: false,
        image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&h=300&fit=crop&crop=center'
      },
      { 
        name: 'Danish', 
        description: 'Flaky pastry filled with seasonal fruit and cream', 
        price: '$3.25', 
        popular: true,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop&crop=center'
      }
    ]
  };

  const categories = [
    { id: 'coffee', label: 'Coffee', icon: Coffee },
    { id: 'pastries', label: 'Pastries', icon: Cake }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-cream-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-6xl font-playfair font-bold text-coffee-800 mb-6">
            Our Exquisite Menu
          </h2>
          <p className="text-xl text-coffee-600 max-w-2xl mx-auto leading-relaxed">
            Carefully crafted beverages and fresh pastries made with the finest ingredients and endless passion
          </p>
        </div>

        {/* Enhanced Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/60 backdrop-blur-sm p-2 rounded-2xl shadow-lg border border-cream-200">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-coffee-600 to-coffee-700 text-white shadow-xl transform scale-105'
                    : 'text-coffee-700 hover:bg-cream-100/80 hover:scale-102'
                }`}
              >
                <category.icon className="w-6 h-6" />
                <span className="text-lg">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div
              key={item.name}
              className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-scale-in border border-cream-200/50`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-coffee-500 to-coffee-600 text-white text-sm px-3 py-1 rounded-full font-medium shadow-lg animate-pulse">
                    ⭐ Popular
                  </div>
                )}
                
                {/* Floating Add Button */}
                <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm hover:bg-coffee-600 text-coffee-600 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 hover:scale-110">
                  <Coffee className="w-5 h-5" />
                </button>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-playfair font-bold text-coffee-800 group-hover:text-coffee-600 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-3xl font-playfair font-bold text-coffee-700 bg-gradient-to-r from-coffee-600 to-coffee-700 bg-clip-text text-transparent">
                    {item.price}
                  </span>
                </div>
                
                <p className="text-coffee-600 leading-relaxed mb-4 group-hover:text-coffee-700 transition-colors duration-300">
                  {item.description}
                </p>
                
                <button className="w-full bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 text-white py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
