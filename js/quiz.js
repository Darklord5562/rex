var queBox = document.getElementById('ques')
var answerBox = document.getElementById('option-box')
var nextBtn = document.getElementById('next-btn')
var quesCounterBtn = document.getElementById('ques-counter')
var score = document.getElementById('score')
var totalQues = document.getElementById('total-ques')
var attempted = document.getElementById('attempted')
score.innerHTML = 0

var currQueIndex = 0
var arr = []
var userAns

nextBtn.addEventListener('click', submitAns)

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
totalQues.innerHTML = questions.length




function loadQues() {
  quesCounterBtn.innerHTML = currQueIndex + 1
  answerBox.innerHTML = ''
  queBox.innerHTML = questions[currQueIndex]
  var ans = answers[currQueIndex]
  for (let ii = 0; ii < ans.length; ii++) {
    var divMade = document.createElement('div')
    divMade.setAttribute('class', 'label-box')
    divMade.addEventListener('click', setAns)
    divMade.innerHTML = ans[ii]
    answerBox.appendChild(divMade)
  }
}



function setAns(elem) {
  var y = elem.target.parentNode.children
  for (var i = 0; i < y.length; i++) {
    y[i].classList.remove('flash-blue')
  }
  elem.target.classList.add('flash-blue')
  userAns = elem.target.innerHTML
  if (arr[currQueIndex]) {
    arr[currQueIndex] = userAns
  } else {
    arr.push(userAns)
  }
}


var counter = 0
var end
var counting = 0



function submitAns() {
  if (arr.length !== currQueIndex + 1) {
    alert('Please select one of the options')
  } else {
    if (currQueIndex < arr.length) {
      currQueIndex++
      loadQues()
      counting += 1
      end = checkLastQue()
      if (end) {
        console.log('done')
      }
      counter += 1
    }
  }
}


function checkLastQue() {
  return counting == questions.length ? true : false
}





loadQues()