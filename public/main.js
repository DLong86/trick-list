const form = document.querySelector('.form')
const trickInput = document.getElementById('trick-input')
const tricks = document.querySelector('.tricks')
const btn = document.querySelector('.btn')
const deleteItem = document.querySelector('.delete')

// Add trick
const submitTrick = (e) => {
  e.preventDefault()
  console.log(trickInput.value);

  const listWrapper = document.createElement('div')
  listWrapper.classList.add('list-wrapper')
  

  const addedTrick = document.createElement('li')
  addedTrick.classList.add('added-trick') 
  addedTrick.innerText = trickInput.value
  
  // const deleteBtn = listWrapper.innerHTML = '<i class="fa fa-ban" aria-hidden="true"></i>'
  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('delete-btn')
  deleteBtn.textContent = 'X'
  listWrapper.appendChild(deleteBtn)
  listWrapper.appendChild(addedTrick)
  tricks.appendChild(listWrapper)

  trickInput.value = ''

  const deleteTrick = (e) => {
    console.log(e.target.parentNode);

    if(e.target === deleteBtn) {
      e.target.parentNode.remove()
    }
  }
  
  listWrapper.addEventListener('click', deleteTrick)

  deleteBtn.addEventListener('mouseover', () => {
    listWrapper.classList.add('mouse-over')
  })
  deleteBtn.addEventListener('mouseleave', () => {
    listWrapper.classList.remove('mouse-over')
  })
}

form.addEventListener('submit', submitTrick)
