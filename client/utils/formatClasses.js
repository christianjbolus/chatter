export default function formatClasses (classList, styles) {
  return classList.split(' ').map(name => styles[name]).join(' ')
}