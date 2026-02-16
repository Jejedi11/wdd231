export function showVisits() {
  let visits = localStorage.getItem('lastVisit');
  if (visits == null) {
    localStorage.setItem('lastVisit') = 1;
    console.log('First Visit');
  }
  else {
    console.log(`You have visited ${visits} times.`);
    localStorage.setItem('lastVisit', visits++);
  }
}
