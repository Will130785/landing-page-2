// Get DOM elements
const hamburger = document.querySelector('.hamburger')
const sidebar = document.querySelector('.side-bar')
const openModalBtn = document.querySelector('.main-head-btn')
const closeModalBtn = document.querySelector('.close-modal-btn')
const modal = document.querySelector('.modal')
const modalWrapper = document.querySelector('.modal-wrapper')

// Function to handle hamburger click
const handleHamburger = () => {
  console.log('You clicked me')
  // Add active class to sidebar
  sidebar.classList.toggle('side-bar-active')
}

// Functions to handle modal
const openModal = () => {
  modal.classList.add('modal-active')
}

const closeModal = () => {
  modal.classList.remove('modal-active')
}

// Event Listeners
hamburger.addEventListener('click', handleHamburger)
openModalBtn.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)
modalWrapper.addEventListener('click', e => {
  if (e.target.classList.contains('modal-wrapper')) closeModal()
})
