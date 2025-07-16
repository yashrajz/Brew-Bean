import { Product } from '../types';

export const products: Product[] = [
  // Coffee Products
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'Rich and bold single shot of pure coffee perfection',
    price: 280,
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop&crop=center',
    category: 'coffee',
    popular: true,
    rating: 4.9,
    sizes: [
      { name: 'Single', price: 280 },
      { name: 'Double', price: 350 }
    ],
    customizations: [
      {
        name: 'Sweetener',
        options: ['None', 'Sugar', 'Honey', 'Stevia'],
        additionalCost: 0
      }
    ],
    inStock: true
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Perfect harmony of espresso, steamed milk, and velvety foam',
    price: 360,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop&crop=center',
    category: 'coffee',
    popular: false,
    rating: 4.6,
    sizes: [
      { name: 'Small', price: 360 },
      { name: 'Medium', price: 420 },
      { name: 'Large', price: 480 }
    ],
    customizations: [
      {
        name: 'Milk',
        options: ['Regular', 'Almond', 'Oat', 'Soy'],
        additionalCost: 20
      },
      {
        name: 'Flavor',
        options: ['None', 'Vanilla', 'Caramel', 'Hazelnut'],
        additionalCost: 30
      }
    ],
    inStock: true
  },
  {
    id: 'latte',
    name: 'Latte',
    description: 'Smooth espresso blended with silky steamed milk artistry',
    price: 400,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300&fit=crop&crop=center',
    category: 'coffee',
    popular: true,
    rating: 4.8,
    sizes: [
      { name: 'Small', price: 400 },
      { name: 'Medium', price: 460 },
      { name: 'Large', price: 520 }
    ],
    customizations: [
      {
        name: 'Milk',
        options: ['Regular', 'Almond', 'Oat', 'Soy', 'Coconut'],
        additionalCost: 20
      },
      {
        name: 'Flavor',
        options: ['None', 'Vanilla', 'Caramel', 'Hazelnut', 'Pumpkin Spice'],
        additionalCost: 30
      },
      {
        name: 'Extra Shot',
        options: ['No', 'Yes'],
        additionalCost: 50
      }
    ],
    inStock: true
  },
  {
    id: 'americano',
    name: 'Americano',
    description: 'Pure espresso with hot water for a clean, robust taste',
    price: 300,
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=300&fit=crop&crop=center',
    category: 'coffee',
    popular: false,
    rating: 4.3,
    sizes: [
      { name: 'Small', price: 300 },
      { name: 'Medium', price: 360 },
      { name: 'Large', price: 420 }
    ],
    customizations: [
      {
        name: 'Milk',
        options: ['None', 'Regular', 'Almond', 'Oat', 'Soy'],
        additionalCost: 20
      },
      {
        name: 'Sweetener',
        options: ['None', 'Sugar', 'Honey', 'Stevia'],
        additionalCost: 0
      }
    ],
    inStock: true
  },
  {
    id: 'mocha',
    name: 'Mocha',
    description: 'Decadent blend of espresso, chocolate, and steamed milk',
    price: 440,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
    category: 'coffee',
    popular: true,
    rating: 4.7,
    sizes: [
      { name: 'Small', price: 440 },
      { name: 'Medium', price: 500 },
      { name: 'Large', price: 560 }
    ],
    customizations: [
      {
        name: 'Milk',
        options: ['Regular', 'Almond', 'Oat', 'Soy'],
        additionalCost: 20
      },
      {
        name: 'Whipped Cream',
        options: ['No', 'Yes'],
        additionalCost: 25
      },
      {
        name: 'Extra Chocolate',
        options: ['No', 'Yes'],
        additionalCost: 30
      }
    ],
    inStock: true
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    description: 'Bold espresso marked with a cloud of milk foam',
    price: 340,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop&crop=center',
    category: 'coffee',
    popular: false,
    rating: 4.4,
    sizes: [
      { name: 'Small', price: 340 },
      { name: 'Medium', price: 400 },
      { name: 'Large', price: 460 }
    ],
    customizations: [
      {
        name: 'Flavor',
        options: ['None', 'Vanilla', 'Caramel'],
        additionalCost: 30
      }
    ],
    inStock: true
  },
  // Pastries
  {
    id: 'croissant',
    name: 'Croissant',
    description: 'Buttery, flaky French pastry baked to golden perfection',
    price: 260,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop&crop=center',
    category: 'pastries',
    popular: true,
    rating: 4.5,
    customizations: [
      {
        name: 'Filling',
        options: ['Plain', 'Almond', 'Chocolate', 'Ham & Cheese'],
        additionalCost: 40
      }
    ],
    inStock: true
  },
  {
    id: 'blueberry-muffin',
    name: 'Blueberry Muffin',
    description: 'Fresh baked delight bursting with wild blueberries',
    price: 300,
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=300&fit=crop&crop=center',
    category: 'pastries',
    popular: false,
    rating: 4.2,
    customizations: [
      {
        name: 'Add-ons',
        options: ['None', 'Butter', 'Cream Cheese'],
        additionalCost: 25
      }
    ],
    inStock: true
  },
  {
    id: 'chocolate-chip-cookie',
    name: 'Chocolate Chip Cookie',
    description: 'Warm, gooey homemade cookie with premium chocolate chips',
    price: 200,
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop&crop=center',
    category: 'pastries',
    popular: true,
    rating: 4.6,
    inStock: true
  },
  {
    id: 'banana-bread',
    name: 'Banana Bread',
    description: 'Moist, flavorful slice made with ripe bananas and love',
    price: 280,
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=300&fit=crop&crop=center',
    category: 'pastries',
    popular: false,
    rating: 4.1,
    customizations: [
      {
        name: 'Add-ons',
        options: ['None', 'Butter', 'Honey', 'Cream Cheese'],
        additionalCost: 25
      }
    ],
    inStock: true
  },
  {
    id: 'scone',
    name: 'Scone',
    description: 'Traditional English scone served with house-made jam',
    price: 320,
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&h=300&fit=crop&crop=center',
    category: 'pastries',
    popular: false,
    rating: 4.0,
    customizations: [
      {
        name: 'Jam',
        options: ['Strawberry', 'Raspberry', 'Apricot', 'Mixed Berry'],
        additionalCost: 0
      },
      {
        name: 'Add Cream',
        options: ['No', 'Yes'],
        additionalCost: 30
      }
    ],
    inStock: true
  },
  {
    id: 'danish',
    name: 'Danish',
    description: 'Flaky pastry filled with seasonal fruit and cream',
    price: 260,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop&crop=center',
    category: 'pastries',
    popular: true,
    rating: 4.4,
    customizations: [
      {
        name: 'Filling',
        options: ['Apple', 'Cherry', 'Blueberry', 'Cheese'],
        additionalCost: 0
      }
    ],
    inStock: true
  },
  // Merchandise
  {
    id: 'brew-bean-mug',
    name: 'Brew & Bean Mug',
    description: 'Premium ceramic mug with our signature logo',
    price: 650,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=300&fit=crop&crop=center',
    category: 'merchandise',
    popular: true,
    rating: 4.8,
    inStock: true
  },
  {
    id: 'coffee-beans-250g',
    name: 'Coffee Beans (250g)',
    description: 'Premium roasted coffee beans from our signature blend',
    price: 850,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop&crop=center',
    category: 'merchandise',
    popular: false,
    rating: 4.6,
    customizations: [
      {
        name: 'Roast Level',
        options: ['Light', 'Medium', 'Dark'],
        additionalCost: 0
      },
      {
        name: 'Grind',
        options: ['Whole Bean', 'Coarse', 'Medium', 'Fine'],
        additionalCost: 0
      }
    ],
    inStock: true
  }
];
