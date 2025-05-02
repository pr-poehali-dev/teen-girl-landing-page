
import { useState } from 'react';
import { Button } from './ui/button';
import Icon from './ui/icon';

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      alt: "Рисунок акварелью",
      category: "art"
    },
    {
      src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: "Гитара",
      category: "music"
    },
    {
      src: "https://images.unsplash.com/photo-1523450001312-136cce27a4dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1584&q=80",
      alt: "Танцы",
      category: "dance"
    },
    {
      src: "https://images.unsplash.com/photo-1551730459-92db2a308d6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: "Фотография",
      category: "photo"
    },
    {
      src: "https://images.unsplash.com/photo-1522878129833-838a904a0e9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      alt: "Путешествие",
      category: "travel"
    },
    {
      src: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      alt: "Книги",
      category: "books"
    }
  ];

  const categories = [
    { id: "all", name: "Все" },
    { id: "art", name: "Рисунки" },
    { id: "music", name: "Музыка" },
    { id: "dance", name: "Танцы" },
    { id: "photo", name: "Фото" },
    { id: "travel", name: "Путешествия" },
    { id: "books", name: "Книги" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple mb-4">Галерея</h2>
          <div className="w-20 h-1 bg-pink mx-auto mb-6"></div>
          <p className="text-foreground max-w-2xl mx-auto mb-8">
            Здесь представлены некоторые моменты из моей жизни, связанные с моими увлечениями
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={activeCategory === category.id 
                  ? "bg-purple hover:bg-purple-dark" 
                  : "border-purple text-purple hover:bg-purple/10"}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-xl shadow-md hover-scale cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Icon name="Search" className="text-white h-10 w-10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" className="h-8 w-8" />
          </Button>
          <img 
            src={selectedImage} 
            alt="Увеличенное изображение" 
            className="max-w-full max-h-[80vh] object-contain" 
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
