var firebaseConfig = {
    apiKey: "AIzaSyBJxdUZ9UowJqtuWMetNfbS8RAqnr3I4Xg",
    authDomain: "fguide.firebaseapp.com",
    databaseURL: "https://fguide-default-rtdb.firebaseio.com",
    projectId: "fguide",
    storageBucket: "fguide.appspot.com",
    messagingSenderId: "176720614978",
    appId: "1:176720614978:web:541ef38d24fe38505a3fdb",
    measurementId: "G-03TVSKXNFT"
      };

      firebase.initializeApp(firebaseConfig);
      const auth = firebase.auth()
      const database = firebase.database()
      

      function register() {
        email = document.getElementById('email').value
        password = document.getElementById('password').value
        name = document.getElementById('name').value
        
                auth.createUserWithEmailAndPassword(email, password)
                .then(function() {
        
                  var user = auth.currentUser
                  var database_ref = database.ref()
                  var user_data = {
                    name : name,
                    email : email
                  }
        
                  database_ref.child('users/' + user.uid).set(user_data)
        
        
                  alert("User created!")
        
        
                }).catch(function(error) {
                  var error_code = error.error_code
                  var error_message = error.messagingSenderId
                  alert(error_message)
                })
      }

  //  var messagesRef = firebase.database()
  //      .ref('Collected Data');
        
       
  //     document.getElementById('registrationform')
  //         .addEventListener('submit', submitForm);

  //     function submitForm(e) {
  //         e.preventDefault();

  //         // Get values
  //         var name = getInputVal('name');
  //         var email = getInputVal('email');
      // var password = getInputVal('password');

  //         saveMessage(name, email, password);
  //         document.getElementById('registrationform').reset();
  //     }

  //     // Function to get get form values
  //     function getInputVal(id) {
  //         return document.getElementById(id).value;
  //     }

  //     // Save message to firebase
  //     function saveMessage(name, email, password) {
  //         var newMessageRef = messagesRef.push();
  //         newMessageRef.set({
  //             name: name,
  //             email: email,
      //     password: password,
  //         });
  //     }