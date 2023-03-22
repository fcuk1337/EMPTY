// light/dark mode

let lightMode = localStorage.getItem('lightMode')

const lightModeToggle = document.querySelector('#light-mode-toggle')

const enableLightMode = () => {
  document.body.classList.add('lightmode')
  localStorage.setItem('lightMode', 'enabled')
}

const disableLightMode = () => {
  document.body.classList.remove('lightmode')
  localStorage.setItem('lightMode', null)
}

if (lightMode === 'enabled') {
  enableLightMode()
}

lightModeToggle.addEventListener('click', () => {
  lightMode = localStorage.getItem('lightMode')

  if (lightMode !== 'enabled') {
    enableLightMode()
  } else {
    disableLightMode()
  }
})

// append cards

const cards = [
  {
    img: '/img/plugins/autotuneprox.webp',
    name: 'Auto-Tune',
    publisher: 'Antares',
    version: '10.2.0',
    source:
      '/source/plugins/Antares - Auto-Tune Pro X v10.2.0.torrent',
  },
  {
    img: '/img/plugins/fabfilter.webp',
    name: 'Bundle',
    publisher: 'FabFilter',
    version: '2023.02.06',
    source:
      '/source/plugins/FabFilter - Total Bundle v2023.02.06.torrent',
  },
  {
    img: '../img/plugins/valhalla.webp',
    name: 'Bundle',
    publisher: 'Valhalla DSP',
    version: '2022',
    source:
      '/source/plugins/Valhalla DSP - Plugins Bundle 2022.torrent',
  },
  {
    img: '../img/plugins/waves 1.svg',
    name: 'Bundle',
    publisher: 'Waves 14',
    version: '14.01.23',
    source:
      '/source/plugins/Waves - Complete v2023.02.07 [R2R].torrent',
  },
  {
    img: '/img/plugins/cableguys.webp',
    name: 'ShapeBox',
    publisher: 'Cableguys',
    version: '3.2.3',
    source:
      '/source/plugins/Cableguys - ShaperBox 3 v3.2.3.torrent',
  },
  {
    img: '/img/plugins/ozone.webp',
    name: 'Ozone',
    publisher: 'iZotope',
    version: '10.4.0',
    source:
      '/source/plugins/iZotope - Ozone 10 Advanced v10.4.0-V.R.torrent',
  },
  {
    img: '/img/plugins/rx.webp',
    name: 'RX',
    publisher: 'iZotope',
    version: '10.4.0',
    source:
      '/source/plugins/iZotope - RX 10 Audio Editor Advanced v10.4.0.torrent',
  },
  {
    img: '/img/plugins/rc-20.webp',
    name: 'RC-20',
    publisher: 'XLN Audio',
    version: '1.2.6.2',
    source:
      '/source/plugins/XLN Audio - RC-20 Retro Color v1.2.6.2-R2R.torrent',
  },
  {
    img: '/img/plugins/oek.webp',
    name: 'Soothe2',
    publisher: 'Oeksound',
    version: '1.1.2',
    source:
      '/source/plugins/Oeksound - Soothe2 v.1.1.2.torrent',
  },
  {
    img: '/img/plugins/oek.webp',
    name: 'Spiff',
    publisher: 'Oeksound',
    version: '1.3.0',
    source:
      '/source/plugins/Oeksound - Spiff v1.3.0.torrent',
  },
  {
    img: '/img/plugins/arturia.webp',
    name: 'FX Collection',
    publisher: 'Arturia',
    version: '2023.1',
    source:
      '/source/plugins/Arturia - FX Collection 2023.1 CE-V.R Rev2.torrent',
  },
  {
    img: '/img/plugins/soundtoys.webp',
    name: 'FX Solution',
    publisher: 'SoundToys',
    version: '5.0.1.10839',
    source:
      '/source/plugins/SoundToys - The Ultimate Effects Solution 5.0.1.10839.torrent',
  },
]

const cardsList = document.getElementById('card-list')

const displayCards = (cardList) => {
  const htmlString = cardList
    .map((cardList) => {
      return `
          <a class="card" href="${cardList.source}" download>
          <img class="card_image" src="${cardList.img}" alt="">
            <div class="card-info">
              <p class='card_name card_text'>${cardList.name}</p>
              <p class='card_subname card_text'>${cardList.publisher}</p>
              <p class='card_version card_text'>${cardList.version}</p>
            </div>
          </a>
        `
    })
    .join('')
  cardsList.innerHTML = htmlString
}

displayCards(cards)

// new Search

const searchBar = document.getElementById('search-item')

searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase()

  const filteredCards = cards.filter((card) => {
    return (
      card.name.toLowerCase().includes(searchString) ||
      card.publisher.toLowerCase().includes(searchString)
    )
  })
  displayCards(filteredCards)
})
