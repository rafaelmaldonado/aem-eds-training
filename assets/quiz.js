// Reusable quiz widget. Markup:
//   <div class="quiz" data-answer="1">
//     <div class="q">Question?</div>
//     <button class="opt">Option A</button>
//     <button class="opt">Option B</button>   <!-- index 1 = correct -->
//     <div class="feedback" data-correct="Nice." data-wrong="Not quite — ..."></div>
//   </div>
// data-answer is the 0-based index of the correct option.
document.querySelectorAll('.quiz').forEach((quiz) => {
  const answer = Number(quiz.dataset.answer);
  const opts = [...quiz.querySelectorAll('.opt')];
  const fb = quiz.querySelector('.feedback');
  opts.forEach((opt, i) => {
    opt.addEventListener('click', () => {
      opts.forEach((o) => { o.disabled = true; });
      opts[answer].classList.add('correct');
      if (i === answer) {
        fb.textContent = fb.dataset.correct || 'Correct.';
      } else {
        opt.classList.add('wrong');
        fb.textContent = fb.dataset.wrong || 'Not quite.';
      }
    });
  });
});
