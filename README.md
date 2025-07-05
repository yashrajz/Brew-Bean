# Brew & Bean - Premium Coffee Experience

A modern, responsive website for a premium coffee shop featuring artisan roasted beans and handcrafted beverages.

## Features

- **Modern Design**: Clean, elegant interface with premium coffee shop aesthetics
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Menu**: Showcase coffee products and beverages
- **Contact Information**: Easy-to-find location and contact details
- **Fast Performance**: Built with modern web technologies for optimal speed

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
```

2. Navigate to the project directory:
```sh
cd Coffee
```

3. Install dependencies:
```sh
npm install
```

4. Start the development server:
```sh
npm run dev
```

5. Open your browser and visit `http://localhost:5173` to view the website.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## Technologies Used

- **Vite** - Fast build tool and development server
- **React** - JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern React component library
- **React Router** - Client-side routing

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── ui/        # Base UI components (buttons, cards, etc.)
│   ├── About.tsx  # About section component
│   ├── Contact.tsx # Contact section component
│   ├── Footer.tsx # Footer component
│   ├── Hero.tsx   # Hero section component
│   ├── Menu.tsx   # Menu/products component
│   └── Navigation.tsx # Navigation component
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── App.tsx        # Main application component
└── main.tsx       # Application entry point
```

## Deployment

This project can be deployed to any static hosting service such as:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

To build for production, run:
```sh
npm run build
```

The built files will be in the `dist` directory.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
