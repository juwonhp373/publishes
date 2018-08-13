const $input = $('.input-field');

$input.on('click', function () {
  const $this = $(this);
  const $search = $input.find('input');
  const $cover = $('.nav-cover-zone');
  const $logo = $('.logo-field');

  $cover.attr('type', 'input');
  $logo.attr('type', 'input');
  $this.attr('type', 'input');

})


const $profile = $('.profile-field');

$profile.on('click', function () {
  const $logout = $('.logout-field');
  const attr = $logout.attr('type');
  $logout.attr('type', attr === 'false' ? 'true' : 'false')

})


const $users = $('i.fas.fa-users');

$users.on('click', function () {
  const $sidebar = $('.side-bar-cover');
  $sidebar.attr('type', 'true');
})

const $sidebar = $('.side-bar-cover');

$sidebar.on('click', function () {
  const $this = $(this);
  $this.attr('type', 'false');
});


const $th = $('.icon-button-field');

$th.on('click', function () {
  const $this = $(this);
  const attr = $this.attr('type');
  if(attr === 'list' || attr === 'card')
    $this.attr('type', attr === 'card' ? 'list' : 'card');
  else
    $this.attr('type', attr === 'down' ? 'up' : 'down');
})


const $cog = $('i.fas.fa-user-cog')

$cog.on('click', function () {
  const $condition = $('.condition-bar-field');
  let attr = $condition.attr('type');
  $condition.attr('type', attr === 'true' ? 'false' : 'true');
  $('.changing-field').attr('type', attr === 'true' ? 'false' : 'true');
})

let sidebar = document.getElementById('.left-side-bar');

// window.onclick = function (event) {
//   if(event.target === sidebar) {
//     // sidebar.style.display = "none";
//     console.log('sdfsefses')
//     sidebar.attr('type', 'false');
//   }
// }
//
// document.on('click', function (event) {
//   if(event.target === sidebar) {
//     console.log('sdfsdf')
//   }
//
// })