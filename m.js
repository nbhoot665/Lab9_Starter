
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
      
      /* All console-API actions keyed to the EXACT button text */
      const buttons = {
        'Console Log'            : () => console.log('Logging demo', Date.now()),
        'Console Error'          : () => console.error('❌ Sample error message'),
        'Console Count'          : () => console.count('Count button'),
        'Console Warn'           : () => console.warn('⚠️  Sample warning'),
        'Console Clear'          : () => console.clear(),
        'Console Dir'            : () => console.dir(document.body),
        'Console Dirxml'         : () => console.dirxml(document.body),
        'Console Group Start'    : () => console.group('Demo Group'),
        'Console Group End'      : () => console.groupEnd(),
        'Console Table'          : () => console.table(animals),
        'Start Timer'            : () => console.time('timer-demo'),
        'End Timer'              : () => console.timeEnd('timer-demo'),
        'Console Trace'          : () => first(),                 // call-stack demo
        'Try/Catch Demo'         : () => tryCatchDemo(),
        'Throw CustomError'      : () => throwCustom(),
        'Trigger a Global Error' : () => notDefinedAnywhere()     // uncaught RefErr
      };
      
      /* Small helpers for the trace demo */
      function first()  { second(); }
      function second() { console.trace('Stack trace'); }
      
      /* Attach each button to its action */
      errorBtns.forEach(btn => {
        const fn = buttons[btn.textContent.trim()];
        if (fn) btn.addEventListener('click', fn);
      });
      
      /* try/catch/finally demo */
      function tryCatchDemo() {
        try {
          const len = undefined.length;       // TypeError
          console.log(len);
        } catch (err) {
          console.warn('Caught in try/catch:', err.message);
        } finally {
          console.log('finally always runs ✅');
        }
      }
      
      /* Custom Error subclass + throw */
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
      
      /* Global error handler */
      window.addEventListener('error', evt => {
        console.log('🌐 Global handler caught:', evt.message);
        // TrackJS (or similar) auto-reports this if its script is in <head>.
      });
