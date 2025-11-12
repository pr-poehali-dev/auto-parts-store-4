import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [vinCode, setVinCode] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Тормозная система', icon: 'Disc', count: 245 },
    { name: 'Масла и жидкости', icon: 'Droplet', count: 189 },
    { name: 'Фильтры', icon: 'Filter', count: 312 },
    { name: 'Аккумуляторы', icon: 'Battery', count: 87 },
    { name: 'Свечи зажигания', icon: 'Zap', count: 156 },
    { name: 'Ремни и цепи', icon: 'Link', count: 203 }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Тормозные колодки',
      brand: 'Brembo',
      price: 4500,
      image: 'https://cdn.poehali.dev/projects/f4e26118-3a06-4712-a9a0-eb2bcb23d39b/files/930a048a-202e-46dc-bdcb-073c5d36f68f.jpg',
      inStock: true,
      discount: 15
    },
    {
      id: 2,
      name: 'Масляный фильтр',
      brand: 'Mann Filter',
      price: 890,
      image: 'https://cdn.poehali.dev/projects/f4e26118-3a06-4712-a9a0-eb2bcb23d39b/files/9b98d61c-5f1b-41df-85f5-11a96860d622.jpg',
      inStock: true
    },
    {
      id: 3,
      name: 'Тормозной диск',
      brand: 'ATE',
      price: 3200,
      image: 'https://cdn.poehali.dev/projects/f4e26118-3a06-4712-a9a0-eb2bcb23d39b/files/930a048a-202e-46dc-bdcb-073c5d36f68f.jpg',
      inStock: true,
      discount: 10
    }
  ];

  const promos = [
    { title: 'Скидка 20% на масла', description: 'При покупке от 2 литров', valid: 'до 30.11.2025' },
    { title: 'Бесплатная доставка', description: 'При заказе от 5000 ₽', valid: 'постоянно' },
    { title: 'Зимняя акция', description: 'Антифриз + щетки -25%', valid: 'до 15.12.2025' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Car" className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold">AutoParts</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#catalog" className="text-sm font-medium hover:text-accent transition-colors">Каталог</a>
            <a href="#delivery" className="text-sm font-medium hover:text-accent transition-colors">Доставка</a>
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">О магазине</a>
            <a href="#contacts" className="text-sm font-medium hover:text-accent transition-colors">Контакты</a>
            <a href="#warranty" className="text-sm font-medium hover:text-accent transition-colors">Гарантии</a>
            <a href="#promos" className="text-sm font-medium hover:text-accent transition-colors">Акции</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="Search" className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="ShoppingCart" className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/f4e26118-3a06-4712-a9a0-eb2bcb23d39b/files/7d84ac7b-794f-4dda-b296-7d553720715b.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 container text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            ЗАПЧАСТИ ДЛЯ ВАШЕГО АВТО
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Оригинальные и аналоговые детали с доставкой по России
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="vin" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="vin">Поиск по VIN</TabsTrigger>
                <TabsTrigger value="search">Поиск по названию</TabsTrigger>
              </TabsList>
              
              <TabsContent value="vin" className="space-y-4">
                <div className="flex gap-2">
                  <Input 
                    placeholder="Введите VIN-код автомобиля (17 символов)"
                    value={vinCode}
                    onChange={(e) => setVinCode(e.target.value.toUpperCase())}
                    maxLength={17}
                    className="flex-1 h-14 text-lg bg-white text-black"
                  />
                  <Button className="h-14 px-8 bg-accent hover:bg-accent/90">
                    <Icon name="Search" className="mr-2 h-5 w-5" />
                    Подобрать
                  </Button>
                </div>
                <p className="text-sm text-gray-300">VIN находится в техпаспорте или на кузове автомобиля</p>
              </TabsContent>
              
              <TabsContent value="search" className="space-y-4">
                <div className="flex gap-2">
                  <Input 
                    placeholder="Название детали или артикул"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 h-14 text-lg bg-white text-black"
                  />
                  <Button className="h-14 px-8 bg-accent hover:bg-accent/90">
                    <Icon name="Search" className="mr-2 h-5 w-5" />
                    Найти
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Каталог запчастей</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-lg transition-all cursor-pointer hover:scale-105">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <Icon name={category.icon as any} className="h-12 w-12 mb-3 text-accent" />
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} товаров</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Популярные товары</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all">
                  <div className="relative h-64 bg-gray-100">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    {product.discount && (
                      <Badge className="absolute top-4 right-4 bg-accent">-{product.discount}%</Badge>
                    )}
                    {product.inStock && (
                      <Badge className="absolute top-4 left-4 bg-green-600">В наличии</Badge>
                    )}
                  </div>
                  <CardHeader>
                    <CardDescription>{product.brand}</CardDescription>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">{product.price.toLocaleString()} ₽</span>
                      {product.discount && (
                        <span className="text-muted-foreground line-through">
                          {Math.round(product.price / (1 - product.discount / 100)).toLocaleString()} ₽
                        </span>
                      )}
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                      В корзину
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="promos" className="py-16">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Акции и спецпредложения</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {promos.map((promo, index) => (
              <Card key={index} className="border-2 border-accent hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Icon name="Tag" className="h-5 w-5 text-accent" />
                    {promo.title}
                  </CardTitle>
                  <CardDescription className="text-base">{promo.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">Действует {promo.valid}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Доставка и оплата</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Icon name="Truck" className="h-12 w-12 mb-4 text-accent" />
                <CardTitle>Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Доставка по Москве — 1-2 дня. По России — 3-7 дней. Курьером или в пункты выдачи.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Icon name="CreditCard" className="h-12 w-12 mb-4 text-accent" />
                <CardTitle>Удобная оплата</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Наличными, картой, переводом. Безопасные платежи через защищенное соединение.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Icon name="Package" className="h-12 w-12 mb-4 text-accent" />
                <CardTitle>Самовывоз</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Забирайте заказы из наших пунктов выдачи в день оформления. Бесплатно.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="warranty" className="py-16">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Гарантии и возврат</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">Гарантия на товары</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Все товары имеют официальную гарантию производителя от 6 месяцев до 3 лет. 
                  Гарантийные обязательства прописаны в техническом паспорте изделия.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">Условия возврата</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Вы можете вернуть товар в течение 14 дней с момента получения, если он не был в эксплуатации 
                  и сохранены товарный вид, упаковка и комплектность.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">Обмен товара</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  При обнаружении брака или несоответствия заказу мы произведем обмен или возврат средств. 
                  Обмен производится за наш счет.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg">Подлинность запчастей</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Мы работаем напрямую с производителями и официальными дистрибьюторами. 
                  Все товары имеют сертификаты соответствия и голограммы подлинности.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">О магазине</h2>
            <p className="text-lg text-muted-foreground mb-8">
              AutoParts — это более 10 лет на рынке автозапчастей. Мы предлагаем широкий ассортимент 
              оригинальных и качественных аналоговых деталей для всех марок автомобилей.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">50K+</div>
                <p className="text-muted-foreground">Товаров в каталоге</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">25K+</div>
                <p className="text-muted-foreground">Довольных клиентов</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <p className="text-muted-foreground">Положительных отзывов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="h-5 w-5 text-accent" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="h-5 w-5 text-accent" />
                  <span>info@autoparts.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="h-5 w-5 text-accent" />
                  <span>Москва, ул. Автозаводская, 23</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" className="h-5 w-5 text-accent" />
                  <span>Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Напишите нам</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input type="email" placeholder="Email" />
                <Input placeholder="Телефон" />
                <Button className="w-full bg-accent hover:bg-accent/90">
                  Отправить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">AutoParts</h3>
              <p className="text-sm opacity-80">
                Надежный поставщик автозапчастей для вашего автомобиля
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Тормозная система</li>
                <li>Масла и жидкости</li>
                <li>Фильтры</li>
                <li>Аккумуляторы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О компании</li>
                <li>Доставка и оплата</li>
                <li>Гарантии</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" className="h-6 w-6 opacity-80 hover:opacity-100 cursor-pointer" />
                <Icon name="Youtube" className="h-6 w-6 opacity-80 hover:opacity-100 cursor-pointer" />
                <Icon name="Send" className="h-6 w-6 opacity-80 hover:opacity-100 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
            © 2025 AutoParts. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
