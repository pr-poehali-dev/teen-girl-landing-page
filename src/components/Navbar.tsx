
import { useState } from 'react';
import { Button } from './ui/button';
import Icon from './ui/icon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="flex-shrink-0">
              <span className="font-cursive text-2xl text-pink-dark">Ирина</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#home" className="underline-animation text-foreground px-3 py-2 rounded-md text-sm font-medium">
              Главная
            </a>
            <a href="#about" className="underline-animation text-foreground px-3 py-2 rounded-md text-sm font-medium">
              Обо мне
            </a>
            <a href="#interests" className="underline-animation text-foreground px-3 py-2 rounded-md text-sm font-medium">
              Интересы
            </a>
            <a href="#gallery" className="underline-animation text-foreground px-3 py-2 rounded-md text-sm font-medium">
              Галерея
            </a>
            <a href="#contact" className="underline-animation text-foreground px-3 py-2 rounded-md text-sm font-medium">
              Контакты
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-pink-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-pink-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Обо мне
            </a>
            <a
              href="#interests"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-pink-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Интересы
            </a>
            <a
              href="#gallery"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-pink-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Галерея
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-pink-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
