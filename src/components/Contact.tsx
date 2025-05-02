
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import Icon from './ui/icon';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном проекте здесь можно добавить отправку данных
    setIsSubmitted(true);
    // Сбрасываем форму
    setFormState({ name: '', email: '', message: '' });
    // Сбрасываем состояние через 3 секунды
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-pink-light/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple mb-4">Связаться со мной</h2>
          <div className="w-20 h-1 bg-pink mx-auto mb-6"></div>
          <p className="text-foreground max-w-2xl mx-auto">
            Есть вопросы или предложения? Напишите мне, и я отвечу вам как можно скорее!
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-pink flex items-center justify-center flex-shrink-0">
                <Icon name="Mail" className="text-white h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <p className="text-foreground/70">alisa@example.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-purple flex items-center justify-center flex-shrink-0">
                <Icon name="Phone" className="text-white h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Телефон</h3>
                <p className="text-foreground/70">+7 (999) 123-45-67</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-mint-dark flex items-center justify-center flex-shrink-0">
                <Icon name="MapPin" className="text-white h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Город</h3>
                <p className="text-foreground/70">Москва, Россия</p>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="font-semibold text-foreground mb-3">Я в социальных сетях</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-pink-light flex items-center justify-center hover:bg-pink transition-colors">
                  <Icon name="Instagram" className="text-pink-dark h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-purple-light flex items-center justify-center hover:bg-purple transition-colors">
                  <Icon name="Twitter" className="text-purple-dark h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-mint-light flex items-center justify-center hover:bg-mint-dark transition-colors">
                  <Icon name="Youtube" className="text-mint-dark h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-pink-light flex items-center justify-center hover:bg-pink transition-colors">
                  <Icon name="Smartphone" className="text-pink-dark h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            {isSubmitted ? (
              <div className="bg-mint-light rounded-xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-mint-dark mx-auto flex items-center justify-center mb-4">
                  <Icon name="CheckCheck" className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Сообщение отправлено!</h3>
                <p className="text-foreground/80">Спасибо за ваше сообщение. Я отвечу вам в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-xl p-6 shadow-sm">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Введите ваше имя"
                    className="bg-pink-light/30 border-pink-light focus:border-pink"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="Введите ваш email"
                    className="bg-pink-light/30 border-pink-light focus:border-pink"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    placeholder="Введите ваше сообщение"
                    className="min-h-[120px] bg-pink-light/30 border-pink-light focus:border-pink"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-pink hover:bg-pink-dark text-white"
                >
                  Отправить сообщение
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
