cat = Filtercategory.create(name: "Game")

cat.filters.create(name: "Counter Strike")
cat.filters.create(name: "League of Legends")
cat.filters.create(name: "Among Us")
cat.filters.create(name: "Need for Speed")

cat2 = Filtercategory.create(name: "Voicechat")

cat2.filters.create(name: "Discord")
cat2.filters.create(name: "MS Teams")
cat2.filters.create(name: "Teamspeak")

cat3 = Filtercategory.create(name: "Language")
cat3.filters.create(name: "German")
cat3.filters.create(name: "English")

cat4 = Filtercategory.create(name: "Skilllevel")
cat4.filters.create(name: "Beginner")
cat4.filters.create(name: "Intermediate")
cat4.filters.create(name: "Expert")
cat4.filters.create(name: "E-Sports Champion")

feci = User.create(username: "Baller", email: "mann@malle.com")
stef = User.create(username: "Stef", email: "asdf@asdf.com")

l = Lobby.create(name: "Lobby 1", description: "Feci carrien", user: feci, date: Time.now)
l2 = Lobby.create(name: "Lobby 2", description: "Feci carrien sonntags", user: feci, date: Time.now)

l.users.push(feci)
l.users.push(stef)
l2.users.push(stef)

l.save()
l2.save()
