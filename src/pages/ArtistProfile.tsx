import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const ArtistProfile = () => {
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const artist = {
    id: "aurora-beats",
    name: "Aurora Beats",
    bio: "Электронный композитор из космоса, создающий атмосферные треки для медитации и работы. Более 10 лет в индустрии, миллионы стримов по всему миру.",
    followers: "1,234,567",
    monthlyListeners: "892,341",
    verified: true,
    genres: ["Electronic", "Ambient", "Chillout", "Lo-fi"],
    location: "Млечный Путь, Солнечная система",
    joinedDate: "2019",
    totalTracks: 156,
    totalAlbums: 12,
    avatar: "/img/cb8fa0a4-7185-4196-876a-12e10c67b38d.jpg",
    coverImage: "/img/fc7813ed-5841-4b65-a226-b8edcba02731.jpg"
  };

  const topTracks = [
    { title: "Midnight Dreams", plays: "12.5M", duration: "3:24", album: "Digital Soul", premium: false, image: "/img/cb8fa0a4-7185-4196-876a-12e10c67b38d.jpg" },
    { title: "Space Echoes", plays: "8.9M", duration: "4:12", album: "Cosmic Journey", premium: true, image: "/img/fc7813ed-5841-4b65-a226-b8edcba02731.jpg" },
    { title: "Stellar Wind", plays: "7.2M", duration: "3:56", album: "Digital Soul", premium: false, image: "/img/9222f9e6-ebd4-4db2-9486-71da8c64e3bd.jpg" },
    { title: "Aurora Nights", plays: "6.1M", duration: "5:18", album: "Northern Lights", premium: true, image: "/img/cb8fa0a4-7185-4196-876a-12e10c67b38d.jpg" },
    { title: "Quantum Pulse", plays: "5.8M", duration: "4:03", album: "Future Waves", premium: false, image: "/img/fc7813ed-5841-4b65-a226-b8edcba02731.jpg" }
  ];

  const albums = [
    { title: "Digital Soul", year: "2024", tracks: 12, image: "/img/cb8fa0a4-7185-4196-876a-12e10c67b38d.jpg", type: "Album" },
    { title: "Cosmic Journey", year: "2023", tracks: 8, image: "/img/fc7813ed-5841-4b65-a226-b8edcba02731.jpg", type: "EP" },
    { title: "Northern Lights", year: "2022", tracks: 10, image: "/img/9222f9e6-ebd4-4db2-9486-71da8c64e3bd.jpg", type: "Album" },
    { title: "Future Waves", year: "2021", tracks: 6, image: "/img/cb8fa0a4-7185-4196-876a-12e10c67b38d.jpg", type: "EP" }
  ];

  const stats = [
    { label: "Общие стримы", value: "89.2M", icon: "Play" },
    { label: "Ежемесячные слушатели", value: artist.monthlyListeners, icon: "Users" },
    { label: "Стран", value: "156", icon: "Globe" },
    { label: "Плейлистов", value: "45.2K", icon: "ListMusic" }
  ];

  const achievements = [
    { title: "Платиновый альбом", description: "Digital Soul - 1M стримов", icon: "Award", color: "text-primary" },
    { title: "Топ-10 чартов", description: "Midnight Dreams в Electronic чарте", icon: "TrendingUp", color: "text-green-400" },
    { title: "Артист года", description: "Electronic Music Awards 2023", icon: "Star", color: "text-gold-400" },
    { title: "Миллион подписчиков", description: "Достигнут в 2024", icon: "Users", color: "text-blue-400" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-['Open_Sans']">
      {/* Header with back button */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
              <Icon name="ArrowLeft" className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-['Montserrat'] font-semibold">Профиль артиста</h1>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      <div className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10"></div>
        <img 
          src={artist.coverImage} 
          alt={`${artist.name} cover`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Artist Info */}
      <section className="relative -mt-20 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-end space-y-6 md:space-y-0 md:space-x-8 mb-8">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-background shadow-2xl">
              <img 
                src={artist.avatar} 
                alt={artist.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-4xl md:text-6xl font-['Montserrat'] font-bold">
                  {artist.name}
                </h1>
                {artist.verified && (
                  <Icon name="BadgeCheck" className="w-8 h-8 text-primary" />
                )}
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                <span className="flex items-center space-x-1">
                  <Icon name="Users" className="w-4 h-4" />
                  <span>{artist.followers} подписчиков</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="MapPin" className="w-4 h-4" />
                  <span>{artist.location}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="Calendar" className="w-4 h-4" />
                  <span>На платформе с {artist.joinedDate}</span>
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {artist.genres.map((genre, index) => (
                  <Badge key={index} variant="outline" className="border-primary text-primary">
                    {genre}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-gold-400 hover:from-primary/90 hover:to-gold-400/90 text-black font-semibold px-8"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  <Icon name={isPlaying ? "Pause" : "Play"} className="w-5 h-5 mr-2" />
                  {isPlaying ? "Пауза" : "Слушать"}
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className={`border-primary ${isFollowing ? 'bg-primary text-black' : 'text-primary hover:bg-primary hover:text-black'} px-8`}
                  onClick={() => setIsFollowing(!isFollowing)}
                >
                  <Icon name={isFollowing ? "UserCheck" : "UserPlus"} className="w-5 h-5 mr-2" />
                  {isFollowing ? "Подписан" : "Подписаться"}
                </Button>
                
                <Button size="lg" variant="ghost" className="hover:text-primary">
                  <Icon name="Share2" className="w-5 h-5 mr-2" />
                  Поделиться
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-card/50 backdrop-blur border-border/50">
                <CardContent className="p-6">
                  <Icon name={stat.icon as any} className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="tracks" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-secondary/20">
              <TabsTrigger value="tracks" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                Популярные треки
              </TabsTrigger>
              <TabsTrigger value="albums" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                Альбомы
              </TabsTrigger>
              <TabsTrigger value="about" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                О себе
              </TabsTrigger>
              <TabsTrigger value="achievements" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                Достижения
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tracks" className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-['Montserrat'] font-semibold">Топ треков</h3>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Показать все
                </Button>
              </div>
              
              {topTracks.map((track, index) => (
                <Card key={index} className="group hover:bg-secondary/50 transition-all duration-200 cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl font-bold text-muted-foreground w-8">
                        {index + 1}
                      </div>
                      <Button 
                        size="icon" 
                        variant="ghost"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => setCurrentTrack(index)}
                      >
                        <Icon name="Play" className="w-4 h-4" />
                      </Button>
                      <div className="w-12 h-12 rounded-lg overflow-hidden">
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
                        <p className="text-sm text-muted-foreground">{track.album}</p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {track.plays} воспроизведений
                      </div>
                      <span className="text-sm text-muted-foreground">{track.duration}</span>
                      <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary">
                        <Icon name="Download" className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="albums" className="space-y-6">
              <h3 className="text-2xl font-['Montserrat'] font-semibold mb-6">Дискография</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {albums.map((album, index) => (
                  <Card key={index} className="group hover:bg-secondary/50 transition-all duration-200 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4 group-hover:scale-105 transition-transform">
                        <img 
                          src={album.image} 
                          alt={album.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button size="icon" className="bg-primary text-black hover:bg-primary/90">
                            <Icon name="Play" className="w-6 h-6" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold group-hover:text-primary transition-colors">{album.title}</h4>
                        <Badge variant="secondary">{album.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{album.year} • {album.tracks} треков</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="about" className="space-y-6">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-['Montserrat'] font-semibold mb-6">О художнике</h3>
                <Card className="bg-secondary/20">
                  <CardContent className="p-8">
                    <p className="text-lg leading-relaxed mb-6">{artist.bio}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">{artist.totalTracks}</div>
                        <div className="text-sm text-muted-foreground">Всего треков</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">{artist.totalAlbums}</div>
                        <div className="text-sm text-muted-foreground">Альбомов</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">5</div>
                        <div className="text-sm text-muted-foreground">Лет активности</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-primary/10 to-gold-400/10 border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4 flex items-center space-x-2">
                      <Icon name="Quote" className="w-5 h-5 text-primary" />
                      <span>Философия творчества</span>
                    </h4>
                    <blockquote className="text-muted-foreground italic">
                      "Музыка - это язык космоса. Каждый трек - это послание из далекой галактики, 
                      передающее эмоции и энергию через пространство и время. 
                      Я просто переводчик этих космических сигналов."
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              <h3 className="text-2xl font-['Montserrat'] font-semibold mb-6">Достижения</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="group hover:bg-secondary/50 transition-all duration-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon name={achievement.icon as any} className={`w-6 h-6 ${achievement.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{achievement.title}</h4>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-primary/5 to-gold-400/5 border-primary/10">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Icon name="Trophy" className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Общий рейтинг</h4>
                    <div className="text-3xl font-bold text-primary mb-4">9.2/10</div>
                    <Progress value={92} className="max-w-xs mx-auto h-2" />
                    <p className="text-sm text-muted-foreground mt-4">
                      Основано на отзывах слушателей и критиков
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default ArtistProfile;