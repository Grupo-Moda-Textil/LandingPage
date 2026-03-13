git init
git branch -M main
git remote remove origin 2>$null
git remote add origin https://github.com/Grupo-Moda-Textil/LandingPage.git

git add package.json package-lock.json tsconfig.json tsconfig.node.json tsconfig.app.json vite.config.ts index.html public/ eslint.config.js
git commit -m "chore: initialize Vite React + TS project"

git add src/index.css
git commit -m "style: configure Tailwind CSS strict color palette"

git add src/domain/ src/infrastructure/
git commit -m "feat: implement DDD domain abstractions and infrastructure mocks"

git add src/application/
git commit -m "feat: setup Framer Motion variants and physics"

git add src/App.tsx src/main.tsx src/vite-env.d.ts src/presentation/providers/ src/presentation/components/
git commit -m "feat: implement SmoothScrollProvider and base UI components"

git add src/presentation/sections/Navbar/
git commit -m "feat: build responsive and immersive Navbar"

git add src/presentation/sections/Hero/
git commit -m "feat: build cinematic Hero section with mask reveal"

git add src/presentation/sections/About/ src/presentation/sections/Services/ src/presentation/sections/Contact/ src/presentation/sections/Footer/
git commit -m "feat: implement About, Services, Contact and Footer sections"

git add .
git commit -m "chore: final adjustments and cleanup"

git push -u origin main
