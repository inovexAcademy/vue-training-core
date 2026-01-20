// 1. create reactive object for ref('World')
const myName = {
  topic: 'World',
  get() {
    // track dependency, activeEffect function
    return this.topic;
  },
  set(name) {
    // trigger dependency function
    this.topic = name;
  },
  dep: [
    // dependencies would be tracked here
  ]
}

// 2. execute render function (compiled from vue template)
// here vue will call the sayHi function and detect that a reactive value (name) is used
// which will add the the render function as a dependency to the dep field to be triggered later

// after the render execution the myName object looks like:
/* myName = {
**  topic: 'World',
**  get() { ... },
**  set() { ... },
**  dep: [ renderFunction ]
} */

// 🖌️ DOM output: Hi World

// 3. after the timeout, the name values is changed
myName.set('Vue');

// after the change the myName object looks like:
/* myName = {
**  topic: 'Vue',
**  get() { ... },
**  set() { ... },
**  dep: [ ... ]
} */

// 4. as the set method of name is called, all functions (/effects) within the dep field are called
// there the render function is triggered
// this will call the sayHi function with the new name value again and updates the DOM accordingly

// 🖌️ DOM output: Hi Vue 👋
