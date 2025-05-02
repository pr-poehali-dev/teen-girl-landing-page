
import Icon from './ui/icon';

const Interests = () => {
  const interestItems = [
    {
      title: "Рисование",
      description: "Я обожаю рисовать акварелью и цифровую иллюстрацию. Сейчас изучаю графический дизайн.",
      icon: "Palette",
      color: "bg-pink-light",
      iconBg: "bg-pink"
    },
    {
      title: "Музыка",
      description: "Играю на гитаре и пианино. Люблю инди-рок и поп-музыку, пишу свои песни.",
      icon: "Music",
      color: "bg-purple-light",
      iconBg: "bg-purple"
    },
    {
      title: "Танцы",
      description: "Занимаюсь современными танцами уже 5 лет. Мой любимый стиль — k-pop и contemporary.",
      icon: "Music2",
      color: "bg-mint-light",
      iconBg: "bg-mint-dark"
    },
    {
      title: "Фотография",
      description: "Люблю снимать природу и своих друзей. Мечтаю о хорошей камере и изучаю фотошоп.",
      icon: "Camera",
      color: "bg-pink-light",
      iconBg: "bg-pink"
    },
    {
      title: "Путешествия",
      description: "Обожаю путешествовать с семьей. Больше всего меня впечатлил Санкт-Петербург и Сочи.",
      icon: "Plane",
      color: "bg-purple-light",
      iconBg: "bg-purple"
    },
    {
      title: "Чтение",
      description: "Люблю фантастику и современную литературу. Мой любимый автор — Рэй Брэдбери.",
      icon: "BookOpen",
      color: "bg-mint-light",
      iconBg: "bg-mint-dark"
    }
  ];

  return (
    <section id="interests" className="py-20 bg-gradient-to-b from-white to-pink-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple mb-4">Мои интересы</h2>
          <div className="w-20 h-1 bg-pink mx-auto mb-6"></div>
          <p className="text-foreground max-w-2xl mx-auto">
            Вот чем я увлекаюсь и что мне нравится делать в свободное время
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interestItems.map((item, index) => (
            <div key={index} className={`interest-card ${item.color}`}>
              <div className={`w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center mb-4`}>
                <Icon name={item.icon} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-foreground/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
