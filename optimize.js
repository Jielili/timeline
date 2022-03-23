function debounce (fn, delay) {
  let timer
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

function throttle (fn, delay) {
  let pre = 0
  return (...args) => {
    const now = new Date()
    if (now - pre > delay) {
      fn.apply(this, args)
      pre = now
    }
  }
}
