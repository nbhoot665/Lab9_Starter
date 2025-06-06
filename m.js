
    let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    });

    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

    // Start your code here

    const animals = [
        { id: 1, name: 'Sloth',   speed: 0.27 },
        { id: 2, name: 'Cheetah', speed: 29.0 }
      ];
      
    
      const buttons = {
        'Console Log'            : () => console.log('Logging demo', Date.now()),
        'Console Error'          : () => console.error(' Sample error message'),
        'Console Count'          : () => console.count('Count button'),
        'Console Warn'           : () => console.warn('Sample warning'),
        'Console Clear'          : () => console.clear(),
        'Console Dir'            : () => console.dir(document.body),
        'Console Dirxml'         : () => console.dirxml(document.body),
        'Console Group Start'    : () => console.group('Demo G'),
        'Console Group End'      : () => console.groupEnd(),
        'Console Table'          : () => console.table(animals),
        'Start Timer'            : () => console.time('timer-demo'),
        'End Timer'              : () => console.timeEnd('timer-demo'),
        'Console Trace'          : () => first(),                
        'Try/Catch Demo'         : () => tryCatchDemo(),
        'Throw CustomError'      : () => throwCustom(),
        'Trigger a Global Error' : () => notDefinedAnywhere()     
      };
      

      function first()  { second(); }
      function second() { console.trace('Stack trace'); }

      errorBtns.forEach(btn => {
        if (buttons[btn.textContent.trim()]) btn.addEventListener('click', buttons[btn.textContent.trim()]);
      });
      
      function tryCatchDemo() {
        try {
          const len = undefined.length;      
          console.log(len);
        } catch (err) {
          console.warn('Caught in try/catch:', err.message);
        } finally {
          console.log('finally runs');
        }
      }
      
  
      class ValidationError extends Error {
        constructor(msg) {
          super(msg);
          this.name = 'ValidationError';
        }
      }
      function throwCustom() {
        try {
          validateUsername('');
        } catch (err) {
          console.error(err.name, err.message);
        }
      }
      function validateUsername(name) {
        if (!name) throw new ValidationError('Username cannot be empty.');
      }

      window.addEventListener('error', evt => {
        console.log('🌐 Global handler caught:', evt.message);
        
      });
