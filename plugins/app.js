const search = () => {
    const searchBox = document.getElementById('search-item').value.toUpperCase()
    const storeItems = document.getElementById('card-list')
    const card = document.querySelectorAll('.card')
    const cardName = storeItems.getElementsByTagName('p')

    for (let i = 0; i < cardName.length; i++) {
      const match = card[i].getElementsByTagName('p')[0]
  
      if (match){
        let textValue = match.textContent || match.innerHTML
  
        if (textValue.toUpperCase().indexOf(searchBox) > -1){
          card[i].style.display = ' '
        } else {
          card[i].style.display = 'none'
        }
      }
    }
  }