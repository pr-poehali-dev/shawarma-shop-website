import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const menuCategories = [
  {
    id: 'shaurmama',
    name: 'Шаурмама',
    emoji: '🌯',
    items: [
      { name: 'Шаурмама Классическая', price: 170, description: '', popular: true },
      { name: 'Шаурмама Обычная', price: 170, description: '' },
      { name: 'Шаурмама Сырная', price: 170, description: '' },
      { name: 'Шаурмама Мюнхенская', price: 180, description: '' },
      { name: 'Шаурмама Цезарь', price: 180, description: '' },
      { name: 'Шаурмама Деревенская', price: 200, description: '' },
      { name: 'Шаурмама Мексиканская', price: 200, description: '' },
      { name: 'Шаурмама Грибная', price: 210, description: '' },
      { name: 'Шаурмама Итальянская', price: 210, description: '' },
      { name: 'Шаурмама BBQ', price: 220, description: '' },
      { name: 'Шаурмама Гавайская', price: 220, description: '' },
      { name: 'Шаурмама Морская', price: 250, description: '' },
      { name: 'Шаурмама Домашняя', price: 270, description: '' },
      { name: 'Шаурмама Вегетарианская', price: 120, description: '' },
    ]
  },
  {
    id: 'burgers',
    name: 'Бургеры',
    emoji: '🍔',
    items: [
      { name: 'Изи бургер', price: 230, description: '160 гр.' },
      { name: 'Бургер «Мне как обычно»', price: 300, description: '225 гр.' },
      { name: 'Бургер "Фродо"', price: 300, description: '228 гр.' },
      { name: 'Бургер "Иностранец"', price: 340, description: '222 гр.', popular: true },
      { name: 'Бургер "Побег из куртника"', price: 360, description: '280 гр.' },
      { name: 'Бургер "Кто здесь"', price: 420, description: '' },
      { name: 'Бургер "Рашн парадайз"', price: 430, description: '' },
      { name: 'Бургер "Черный рыцарь"', price: 440, description: '' },
      { name: 'Бургер "Шмургер"', price: 450, description: '' },
      { name: 'Бургер "Бенедикт"', price: 460, description: '' },
      { name: 'Чизбургер "Рокфор"', price: 510, description: '344 гр.' },
      { name: 'Бургер "Чокнутый профессор"', price: 630, description: '' },
      { name: 'Бургер "Арни"', price: 860, description: '' },
    ]
  },
  {
    id: 'pita',
    name: 'Пита',
    emoji: '🥙',
    items: [
      { name: 'Пита с курицей', price: 320, description: 'Курица, овощи, хумус' },
      { name: 'Пита с говядиной', price: 360, description: 'Говядина, овощи, соус' },
      { name: 'Фалафель пита', price: 290, description: 'Фалафель, овощи, тахини' },
    ]
  },
  {
    id: 'fries',
    name: 'Фритюр',
    emoji: '🍟',
    items: [
      { name: 'Картофель фри', price: 150, description: 'Классический картофель фри' },
      { name: 'Луковые кольца', price: 180, description: 'Хрустящие луковые кольца' },
      { name: 'Наггетсы', price: 220, description: '6 куриных наггетсов' },
    ]
  },
  {
    id: 'salads',
    name: 'Салаты/Сэндвичи/Хот-Доги',
    emoji: '🥗',
    items: [
      { name: 'Цезарь', price: 280, description: 'Курица, салат, пармезан, соус' },
      { name: 'Греческий салат', price: 250, description: 'Овощи, фета, оливки' },
      { name: 'Хот-дог', price: 180, description: 'Сосиска, булочка, соус' },
      { name: 'Клаб-сэндвич', price: 320, description: 'Курица, бекон, овощи' },
    ]
  },
  {
    id: 'quesadilla',
    name: 'Кесадия',
    emoji: '🌮',
    items: [
      { name: 'Кесадия с курицей', price: 340, description: 'Курица, сыр, овощи' },
      { name: 'Кесадия с говядиной', price: 380, description: 'Говядина, сыр, овощи' },
    ]
  },
  {
    id: 'desserts',
    name: 'Десерты',
    emoji: '🍰',
    items: [
      { name: 'Чизкейк', price: 180, description: 'Нежный чизкейк' },
      { name: 'Шоколадный брауни', price: 160, description: 'Брауни с шоколадом' },
      { name: 'Тирамису', price: 200, description: 'Классический тирамису' },
    ]
  },
  {
    id: 'drinks',
    name: 'Напитки',
    emoji: '🥤',
    items: [
      { name: 'Кола', price: 100, description: '0.5л' },
      { name: 'Фанта', price: 100, description: '0.5л' },
      { name: 'Вода', price: 70, description: '0.5л' },
      { name: 'Сок', price: 120, description: '0.3л' },
    ]
  },
  {
    id: 'other',
    name: 'Прочее',
    emoji: '🍴',
    items: [
      { name: 'Соусы', price: 30, description: 'Кетчуп, майонез, чесночный' },
      { name: 'Сырные палочки', price: 190, description: 'Моцарелла в панировке' },
    ]
  }
];



export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={mobile ? 'flex flex-col space-y-4' : 'hidden lg:flex items-center space-x-8'}>
      <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
      <button onClick={() => scrollToSection('menu')} className="hover:text-primary transition-colors">Меню</button>
      <button onClick={() => scrollToSection('promos')} className="hover:text-primary transition-colors">Акции</button>
      <button onClick={() => scrollToSection('delivery')} className="hover:text-primary transition-colors">Доставка</button>
      <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button>
      <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
    </div>
  );

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-4xl">👵</div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-primary">Дом большой мамочки</h1>
                <p className="text-xs text-muted-foreground">Лучшая шаурма в городе</p>
              </div>
            </div>

            <NavLinks />

            <div className="hidden lg:flex items-center space-x-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="ShoppingCart" className="mr-2" size={20} />
                Заказать
              </Button>
            </div>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="mt-8">
                  <NavLinks mobile />
                  <Button className="w-full mt-8 bg-primary hover:bg-primary/90">
                    <Icon name="ShoppingCart" className="mr-2" size={20} />
                    Заказать
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section id="home" className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl lg:text-7xl font-bold mb-6 text-foreground">
                Шаурмама 🌯
              </h2>
              <p className="text-xl lg:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
                Настоящая восточная кухня от большой мамочки.<br />
                Готовим с душой и любовью!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90" onClick={() => scrollToSection('menu')}>
                  <Icon name="UtensilsCrossed" className="mr-2" size={24} />
                  Смотреть меню
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => scrollToSection('contacts')}>
                  <Icon name="Phone" className="mr-2" size={24} />
                  Позвонить
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-scale-in">
              <Card className="bg-card/50 backdrop-blur hover:scale-105 transition-transform">
                <CardContent className="pt-6">
                  <div className="text-6xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
                  <p className="text-muted-foreground">От 30 минут по всему городу</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur hover:scale-105 transition-transform">
                <CardContent className="pt-6">
                  <div className="text-6xl mb-4">🥇</div>
                  <h3 className="text-xl font-bold mb-2">Качество</h3>
                  <p className="text-muted-foreground">Только свежие продукты</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur hover:scale-105 transition-transform">
                <CardContent className="pt-6">
                  <div className="text-6xl mb-4">💝</div>
                  <h3 className="text-xl font-bold mb-2">С любовью</h3>
                  <p className="text-muted-foreground">Готовим как для семьи</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="promos" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">🎁 Бонусная программа</h2>
            <div className="max-w-5xl mx-auto">
              <Card className="overflow-hidden hover:scale-[1.02] transition-transform">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-[300px] lg:h-auto">
                    <img 
                      src="https://cdn.poehali.dev/projects/c849faab-0613-4b7d-8257-783610aa2e47/files/6f8af139-ea4c-4aab-8e72-6fbb7aa2d7f7.jpg" 
                      alt="Бонусная программа"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="pt-8 pb-8 flex flex-col justify-center">
                    <div className="text-6xl mb-6 text-center lg:text-left">⭐</div>
                    <h3 className="text-3xl font-bold mb-4 text-center lg:text-left">Ваши персональные бонусы</h3>
                    <div className="space-y-4 text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start space-x-3">
                        <Badge className="bg-primary text-primary-foreground text-2xl px-4 py-2">1 балл = 1 рубль</Badge>
                      </div>
                      <p className="text-xl text-muted-foreground leading-relaxed">
                        Накапливайте баллы с каждого заказа и оплачивайте ими следующие покупки
                      </p>
                      <div className="pt-4">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 w-full lg:w-auto">
                          <Icon name="Gift" className="mr-2" size={20} />
                          Узнать свой баланс
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="menu" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">🍽️ Меню</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">Выбирайте из нашего разнообразного меню</p>
            
            <div className="space-y-16">
              {menuCategories.map((category) => (
                <div key={category.id} className="animate-fade-in">
                  <h3 className="text-3xl font-bold mb-6 flex items-center">
                    <span className="text-4xl mr-3">{category.emoji}</span>
                    {category.name}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, idx) => (
                      <Card key={idx} className="hover:shadow-xl transition-shadow group">
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">{item.name}</h4>
                            {item.popular && (
                              <Badge className="bg-accent text-accent-foreground">Хит</Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground mb-4">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-primary">{item.price}₽</span>
                            <Button size="sm" className="bg-primary hover:bg-primary/90">
                              <Icon name="Plus" size={16} />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="delivery" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">🚗 Доставка и оплата</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-5xl mb-4">🕐</div>
                  <h3 className="text-2xl font-bold mb-3">Время доставки</h3>
                  <p className="text-muted-foreground mb-2">• В пределах центра: 30-40 минут</p>
                  <p className="text-muted-foreground mb-2">• По городу: 40-60 минут</p>
                  <p className="text-muted-foreground">• Самовывоз: 15-20 минут</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-5xl mb-4">💳</div>
                  <h3 className="text-2xl font-bold mb-3">Способы оплаты</h3>
                  <p className="text-muted-foreground mb-2">• Наличные курьеру</p>
                  <p className="text-muted-foreground mb-2">• Картой курьеру</p>
                  <p className="text-muted-foreground">• Онлайн на сайте</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-5xl mb-4">🎁</div>
                  <h3 className="text-2xl font-bold mb-3">Стоимость доставки</h3>
                  <p className="text-muted-foreground mb-2">• От 1000₽ — бесплатно</p>
                  <p className="text-muted-foreground mb-2">• От 500₽ — 100₽</p>
                  <p className="text-muted-foreground">• До 500₽ — 150₽</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-5xl mb-4">📦</div>
                  <h3 className="text-2xl font-bold mb-3">Минимальный заказ</h3>
                  <p className="text-muted-foreground mb-2">• Центр: 300₽</p>
                  <p className="text-muted-foreground mb-2">• Город: 500₽</p>
                  <p className="text-muted-foreground">• Самовывоз: без ограничений</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">❤️ О нас</h2>
            <div className="max-w-3xl mx-auto">
              <Card className="bg-card/50 backdrop-blur">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="text-7xl mb-6">👵</div>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    "Дом большой мамочки" — это место, где восточная кухня встречается с домашним уютом. 
                    Мы готовим для вас так же тщательно, как большая мамочка готовила бы для своей семьи.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    Наша главная фишка — Шаурмама! Это авторский рецепт, который мы совершенствовали годами. 
                    Сочная, ароматная, с идеальным балансом мяса, овощей и нашего фирменного соуса.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Работаем с 2018 года. Более 50 000 довольных клиентов. Используем только свежие продукты 
                    от проверенных поставщиков. Готовим с душой и любовью!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">📞 Контакты</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center hover:scale-105 transition-transform">
                <CardContent className="pt-8 pb-8">
                  <div className="text-5xl mb-4">📱</div>
                  <h3 className="text-xl font-bold mb-3">Телефон</h3>
                  <a href="tel:+79001234567" className="text-primary text-lg hover:underline">+7 (900) 123-45-67</a>
                  <p className="text-muted-foreground mt-2">Ежедневно 10:00 - 23:00</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:scale-105 transition-transform">
                <CardContent className="pt-8 pb-8">
                  <div className="text-5xl mb-4">📍</div>
                  <h3 className="text-xl font-bold mb-3">Адрес</h3>
                  <p className="text-muted-foreground">ул. Примерная, д. 10</p>
                  <p className="text-muted-foreground mt-2">Самовывоз и доставка</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:scale-105 transition-transform">
                <CardContent className="pt-8 pb-8">
                  <div className="text-5xl mb-4">💬</div>
                  <h3 className="text-xl font-bold mb-3">Соцсети</h3>
                  <div className="flex justify-center space-x-4 mt-4">
                    <Button variant="outline" size="icon">
                      <Icon name="Instagram" size={20} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="MessageCircle" size={20} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="text-4xl">👵</div>
            <h3 className="text-2xl font-bold text-primary">Дом большой мамочки</h3>
          </div>
          <p className="text-muted-foreground mb-4">Лучшая шаурма в городе с 2018 года</p>
          <p className="text-sm text-muted-foreground">© 2024 Дом большой мамочки. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}