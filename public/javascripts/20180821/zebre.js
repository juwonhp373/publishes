$('.photo-card-zone').masonry({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.photo-card-field',
  // use element for option
  //columnWidth: '.grid-sizer',
  percentPosition: true
})