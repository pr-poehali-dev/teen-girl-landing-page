
import { Card, CardContent } from './ui/card';
import Icon from './ui/icon';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple mb-4">Обо мне</h2>
          <div className="w-20 h-1 bg-pink mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-pink-dark mb-4">Привет, я Алиса!</h3>
            <p className="text-foreground mb-4">
              Мне 15 лет, и я учусь в школе №42. Я люблю искусство, музыку и проводить время с друзьями. 
              В свободное время я занимаюсь рисованием, играю на гитаре и изучаю языки.
            </p>
            <p className="text-foreground mb-6">
              Мечтаю стать дизайнером и создавать красивые вещи, которые будут радовать людей. 
              Считаю, что главное в жизни — это быть собой и не бояться пробовать что-то новое!
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="hover-scale bg-pink-light border-none">
                <CardContent className="flex flex-col items-center p-4">
                  <div className="w-10 h-10 rounded-full bg-pink flex items-center justify-center mb-2">
                    <Icon name="Palette" className="text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground">Творчество</h4>
                </CardContent>
              </Card>
              
              <Card className="hover-scale bg-purple-light border-none">
                <CardContent className="flex flex-col items-center p-4">
                  <div className="w-10 h-10 rounded-full bg-purple flex items-center justify-center mb-2">
                    <Icon name="Music" className="text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground">Музыка</h4>
                </CardContent>
              </Card>
              
              <Card className="hover-scale bg-mint-light border-none">
                <CardContent className="flex flex-col items-center p-4">
                  <div className="w-10 h-10 rounded-full bg-mint-dark flex items-center justify-center mb-2">
                    <Icon name="Languages" fallback="Globe" className="text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground">Языки</h4>
                </CardContent>
              </Card>
              
              <Card className="hover-scale bg-pink-light border-none">
                <CardContent className="flex flex-col items-center p-4">
                  <div className="w-10 h-10 rounded-full bg-pink flex items-center justify-center mb-2">
                    <Icon name="Heart" className="text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground">Дружба</h4>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-pink-light p-2">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Фото Алисы" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
