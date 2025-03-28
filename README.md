# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Features

- ⚡️ **Vite** for fast builds and development
- ⚛️ **React** with TypeScript for type-safe development
- 🔄 **Hot Module Replacement (HMR)** for instant updates
- ✅ **ESLint** with recommended and type-aware configurations
- 🛠️ Easily extendable for production-grade applications

## Project Structure

The project structure is as follows:

```
├── assets/                 # Static assets like icons, logos, etc.
├── images/                 # Image assets used in the project
│   ├── team-members/       # Images of all team members
├── src/                    # Source code
│   ├── components/         # Reusable UI components
│      ├── About.tsx/       # About section component
│      ├── BackgroundCanvas.tsx/ # Background animation component
│      ├── Events.tsx/      # Events section component
│      ├── Footer.tsx/      # Footer component
│      ├── Header.tsx/      # Header component
│      ├── Hero.tsx/        # Hero section component
│      ├── JoinTeamModal.tsx/ # Modal for joining the team
│      ├── JoinUsModal.tsx/ # Modal for joining the community
│      ├── MembershipModal.tsx/ # Modal for membership details
│      ├── Modal.tsx/       # Generic modal component
│      ├── Patners.tsx/     # Partners section component
│      ├── Preloader.tsx/   # Preloader animation component
│      ├── Speakers.tsx/    # Speakers section component
│      ├── SubmitPhotoModal.tsx/ # Modal for photo submission
│      ├── TeamSection.tsx/ # Team section component
│      ├── ThankYouModal.tsx/ # Thank you modal component
│   ├── pages/              # Page-level components
│      ├── AboutPage.tsx/   # About page
│      ├── FAQPage.tsx/     # FAQ page
│      ├── HomePage.tsx/    # Home page
│      ├── PhotoGalleryPage.tsx/ # Photo gallery page
│      ├── TeamPage.tsx/    # Team page
│   ├── App.css             # Global styles for the app
│   ├── App.tsx             # Main application component
│   ├── index.css           # Base styles for the app
│   ├── main.tsx            # Entry point for the app
│   └── vite-env.d.ts       # Vite environment types
├── index.html              # Main HTML file
|── package-lock.json       # Auto-generated dependency lock file
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.app.json       # TypeScript configuration for the app
├── tsconfig.json           # Base TypeScript configuration
├── tsconfig.node.json      # TypeScript configuration for Node.js
├── tsconfig.tsbuildinfo    # TypeScript build info (auto-generated)
├── vite.config.ts          # Vite configuration
└── README.md               # Project documentation
```

## Getting Started

Follow these steps to set up and run the project:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview the production build**:
   ```bash
   npm run preview
   ```


```

## License

This project is licensed under the [MIT License](LICENSE).
