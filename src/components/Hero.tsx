
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-16 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-light via-purple-light to-mint-light opacity-70"></div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-purple rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float" style={{animationDelay: "1s"}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-mint rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float" style={{animationDelay: "2s"}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 mx-auto w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white/50 shadow-xl">
            <img 
              src="https://cdn.poehali.dev/files/4d7942ca-3ac5-4870-8503-961f38a2d37d.jpg" 
              alt="Ирина" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-cursive text-5xl sm:text-6xl md:text-7xl text-pink-dark mb-6 leading-tight">
            Привет, я Ирина!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground mb-8">
            Добро пожаловать на мою страничку! Я увлекаюсь фотографией, музыкой и рисованием.
            Здесь вы можете узнать больше обо мне и моих интересах.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-pink hover:bg-pink-dark text-white"
              size="lg"
              onClick={() => document.querySelector('#about')?.scrollIntoView({behavior: 'smooth'})}
            >
              Узнать больше
            </Button>
            <Button
              variant="outline"
              className="border-purple text-purple hover:bg-purple/10"
              size="lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({behavior: 'smooth'})}
            >
              Связаться
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
