var queBox = document.getElementById('ques')
var options = document.querySelectorAll('.label-box')
var container = document.getElementById('container')
var answerBox = document.getElementById('option-box')
var btn = document.querySelectorAll('button')
var currQueIndex = 0


var questions = [
'What do you put in WhatsApp status often?',
'What type of games do you like?',
'If you are a character in Aladdin Movie, what do you want to become?',
'Do you like veg or non-veg?'
]
var answers = [
  ['Funny', 'Sad', 'Romantic', 'informative']
  , ['Board', 'Running', 'Paper & Pen']
  , ['Alladin', 'Jinnie', 'Nothing', 'Another option'],
  ['Veg', 'Non-Veg']
  ]

btn.forEach(function(i){
  i.addEventListener('click', loadQues)
})







function loadQues() {
  let currQue = questions[currQueIndex]
  queBox.innerHTML = currQue
  var currOpts = answers[currQueIndex]
  currOpts.forEach(function(i){
    var newDiv = document.createElement('div')
    newDiv.classList.add('label-box')
    container.append(newDiv)
    newDiv.innerHTML = i
  })
  currQueIndex++
}




loadQues()