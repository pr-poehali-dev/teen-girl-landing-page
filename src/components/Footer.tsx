
import Icon from './ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-pink-dark text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="font-cursive text-2xl inline-block mb-2">Алиса</a>
            <p className="text-white/80 max-w-md">
              Моя личная страничка о творчестве, увлечениях и всём, что мне интересно.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-pink-light transition-colors">
                <Icon name="Instagram" />
              </a>
              <a href="#" className="hover:text-pink-light transition-colors">
                <Icon name="Twitter" />
              </a>
              <a href="#" className="hover:text-pink-light transition-colors">
                <Icon name="Youtube" />
              </a>
              <a href="#" className="hover:text-pink-light transition-colors">
                <Icon name="Mail" />
              </a>
            </div>
            <p className="text-white/80 text-sm">
              &copy; {currentYear} Алиса. Все права защищены.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <nav className="mb-4">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <li><a href="#home" className="text-white/80 hover:text-white transition-colors">Главная</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">Обо мне</a></li>
              <li><a href="#interests" className="text-white/80 hover:text-white transition-colors">Интересы</a></li>
              <li><a href="#gallery" className="text-white/80 hover:text-white transition-colors">Галерея</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </nav>
          <p className="text-white/60 text-sm">
            Сделано с <Icon name="Heart" className="inline-block text-pink-light h-4 w-4" /> в 2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
