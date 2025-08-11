import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [volume, setVolume] = useState([75]);
  const [progress, setProgress] = useState(45);

  const tracks = [
    { title: "Midnight Dreams", artist: "Aurora Beats", album: "Digital Soul", duration: "3:24", premium: false, image: "/img/cb8fa0a4-7185-4196-876a-12e10c67b38d.jpg" },
    { title: "Golden Hours", artist: "Echo Chamber", album: "Premium Collection", duration: "4:12", premium: true, image: "/img/fc7813ed-5841-4b65-a226-b8edcba02731.jpg" },
    { title: "Neon Nights", artist: "Synth Masters", album: "Retro Future", duration: "3:56", premium: false, image: "/img/9222f9e6-ebd4-4db2-9486-71da8c64e3bd.jpg" },
    { title: "Crystal Rain", artist: "Ambient Flow", album: "Nature Sounds", duration: "5:18", premium: true, image: "/img/cb8fa0a4-7185-4196-876a-12e10c67b38d.jpg" },
  ];

  const playlists = [
    { name: "Мои любимые", tracks: 42, image: "/placeholder.svg" },
    { name: "Рабочие треки", tracks: 28, image: "/placeholder.svg" },
    { name: "Релакс", tracks: 15, image: "/placeholder.svg" },
    { name: "Вечерняя музыка", tracks: 33, image: "/placeholder.svg" },
  ];

  const artists = [
    { name: "Aurora Beats", followers: "1.2M", image: "/placeholder.svg" },
    { name: "Echo Chamber", followers: "890K", image: "/placeholder.svg" },
    { name: "Synth Masters", followers: "2.1M", image: "/placeholder.svg" },
    { name: "Ambient Flow", followers: "654K", image: "/placeholder.svg" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-['Open_Sans']">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-['Montserrat'] font-bold bg-gradient-to-r from-primary to-gold-400 bg-clip-text text-transparent">
                SoundWave
              </h1>
              <nav className="hidden md:flex space-x-6">
                <Button variant="ghost" className="text-primary hover:bg-primary/10">
                  <Icon name="Home" className="w-4 h-4 mr-2" />
                  Главная
                </Button>
                <Button variant="ghost" className="hover:text-primary">
                  <Icon name="Music" className="w-4 h-4 mr-2" />
                  Музыка
                </Button>
                <Button variant="ghost" className="hover:text-primary">
                  <Icon name="ListMusic" className="w-4 h-4 mr-2" />
                  Плейлисты
                </Button>
                <Button variant="ghost" className="hover:text-primary">
                  <Icon name="Users" className="w-4 h-4 mr-2" />
                  Артисты
                </Button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Icon name="Search" className="w-4 h-4 mr-2" />
                Поиск
              </Button>
              <Button 
                className="bg-gradient-to-r from-primary to-gold-400 hover:from-primary/90 hover:to-gold-400/90 text-black font-semibold"
                onClick={() => setShowSubscriptionModal(true)}
              >
                <Icon name="Crown" className="w-4 h-4 mr-2" />
                Premium
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="User" className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-premium-dark to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-['Montserrat'] font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-gold-400 bg-clip-text text-transparent">
              Музыка без границ
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Стримите миллионы треков, создавайте плейлисты и наслаждайтесь музыкой высокого качества без рекламы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-gold-400 hover:from-primary/90 hover:to-gold-400/90 text-black font-semibold px-8 py-3"
                onClick={() => setShowSubscriptionModal(true)}
              >
                <Icon name="Play" className="w-5 h-5 mr-2" />
                Начать слушать
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3">
                <Icon name="Download" className="w-5 h-5 mr-2" />
                Скачать треки
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Music Player */}
      <section className="py-12 bg-card/30 backdrop-blur">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-['Montserrat'] font-semibold mb-8 text-center">Сейчас играет</h3>
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-card to-secondary/50 border-border/50 backdrop-blur">
            <CardContent className="p-8">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-gradient-to-br from-primary to-gold-400">
                  <img 
                    src={tracks[currentTrack].image} 
                    alt={tracks[currentTrack].album}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold">{tracks[currentTrack].title}</h4>
                  <p className="text-muted-foreground">{tracks[currentTrack].artist}</p>
                  <p className="text-sm text-muted-foreground">{tracks[currentTrack].album}</p>
                </div>
                {tracks[currentTrack].premium && (
                  <Badge className="bg-primary text-black">Premium</Badge>
                )}
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">1:32</span>
                  <Progress value={progress} className="flex-1 h-2" />
                  <span className="text-sm text-muted-foreground">{tracks[currentTrack].duration}</span>
                </div>
                
                <div className="flex items-center justify-center space-x-6">
                  <Button size="icon" variant="ghost" className="hover:text-primary">
                    <Icon name="Shuffle" className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="hover:text-primary">
                    <Icon name="SkipBack" className="w-6 h-6" />
                  </Button>
                  <Button 
                    size="icon" 
                    className="w-12 h-12 bg-primary hover:bg-primary/90 text-black"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    <Icon name={isPlaying ? "Pause" : "Play"} className="w-6 h-6" />
                  </Button>
                  <Button size="icon" variant="ghost" className="hover:text-primary">
                    <Icon name="SkipForward" className="w-6 h-6" />
                  </Button>
                  <Button size="icon" variant="ghost" className="hover:text-primary">
                    <Icon name="Repeat" className="w-5 h-5" />
                  </Button>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Button size="icon" variant="ghost" className="hover:text-primary">
                    <Icon name="Download" className="w-5 h-5" />
                  </Button>
                  <div className="flex items-center space-x-2 flex-1 justify-end">
                    <Icon name="Volume2" className="w-4 h-4" />
                    <Slider
                      value={volume}
                      onValueChange={setVolume}
                      max={100}
                      step={1}
                      className="w-20"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Track List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-['Montserrat'] font-semibold">Популярные треки</h3>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Показать все
            </Button>
          </div>
          <div className="grid gap-4">
            {tracks.map((track, index) => (
              <Card key={index} className="group hover:bg-secondary/50 transition-all duration-200 cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <Button 
                      size="icon" 
                      variant="ghost"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => setCurrentTrack(index)}
                    >
                      <Icon name="Play" className="w-4 h-4" />
                    </Button>
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-gold-400/20">
                      <img 
                        src={track.image} 
                        alt={track.album}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold group-hover:text-primary transition-colors">{track.title}</h4>
                        {track.premium && <Badge variant="outline" className="border-primary text-primary">Premium</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground">{track.artist}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{track.duration}</span>
                    <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary">
                      <Icon name="Download" className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Playlists */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-['Montserrat'] font-semibold mb-8 text-center">Мои плейлисты</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {playlists.map((playlist, index) => (
              <Card key={index} className="group hover:bg-card/80 transition-all duration-200 cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-gold-400/20 rounded-lg mb-4 flex items-center justify-center group-hover:from-primary/30 group-hover:to-gold-400/30 transition-all">
                    <Icon name="Music" className="w-12 h-12 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">{playlist.name}</h4>
                  <p className="text-sm text-muted-foreground">{playlist.tracks} треков</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Artists */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-['Montserrat'] font-semibold mb-8 text-center">Популярные артисты</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {artists.map((artist, index) => (
              <Card key={index} className="group hover:bg-secondary/50 transition-all duration-200 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-gold-400 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon name="User" className="w-10 h-10 text-black" />
                  </div>
                  <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">{artist.name}</h4>
                  <p className="text-sm text-muted-foreground">{artist.followers} подписчиков</p>
                  <Button size="sm" className="mt-3 bg-primary text-black hover:bg-primary/90">
                    Подписаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-12 bg-gradient-to-r from-secondary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-['Montserrat'] font-semibold mb-8 text-center">Рекомендации для вас</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-primary/10 to-gold-400/10 border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="Sparkles" className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold">Новые релизы</h4>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Свежие треки от ваших любимых исполнителей</p>
                <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Посмотреть все
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-gold-400/10 to-primary/10 border-gold-400/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="TrendingUp" className="w-6 h-6 text-gold-400" />
                  <h4 className="font-semibold">В тренде</h4>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Самые популярные треки сейчас</p>
                <Button size="sm" variant="outline" className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black">
                  Слушать
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-secondary/20 to-primary/5 border-secondary">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="Heart" className="w-6 h-6 text-red-400" />
                  <h4 className="font-semibold">Для вас</h4>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Персональные рекомендации на основе ваших вкусов</p>
                <Button size="sm" variant="outline" className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white">
                  Открыть микс
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subscription Modal */}
      {showSubscriptionModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-gradient-to-br from-background to-secondary border-primary">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-gold-400 rounded-full flex items-center justify-center">
                <Icon name="Crown" className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-['Montserrat'] font-bold">SoundWave Premium</h3>
              <p className="text-muted-foreground">Неограниченная музыка без рекламы</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="w-5 h-5 text-primary" />
                  <span>Неограниченное прослушивание</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="w-5 h-5 text-primary" />
                  <span>Скачивание треков для офлайн</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="w-5 h-5 text-primary" />
                  <span>Высокое качество звука</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="w-5 h-5 text-primary" />
                  <span>Без рекламы</span>
                </div>
              </div>
              <div className="text-center py-4">
                <div className="text-3xl font-bold">
                  <span className="bg-gradient-to-r from-primary to-gold-400 bg-clip-text text-transparent">399 ₽</span>
                </div>
                <p className="text-sm text-muted-foreground">в месяц</p>
              </div>
              <div className="space-y-2">
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-gold-400 hover:from-primary/90 hover:to-gold-400/90 text-black font-semibold"
                  size="lg"
                >
                  Оформить подписку
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full" 
                  onClick={() => setShowSubscriptionModal(false)}
                >
                  Позже
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-secondary/20 py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-['Montserrat'] font-bold mb-4 bg-gradient-to-r from-primary to-gold-400 bg-clip-text text-transparent">
              SoundWave
            </h2>
            <p className="text-muted-foreground mb-6">Ваша музыка, ваши эмоции, ваш мир</p>
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Github" className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Twitter" className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Instagram" className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;