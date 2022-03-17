let users = [{username: 'test1'},{username: 'test2'},{username: 'test3'},{username: 'test4'}];

module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
                           "Cool shirt!",
                           "Your Javascript skills are stellar.",
        ];

        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = [
            'A beautiful, smart, and loving person will be coming into your life.',
            'A dubious friend may be an enemy in camouflage.',
            'A faithful friend is a strong defense.',
            'A fresh start will put you on your way.',
            'A friend asks only for your time not your money.',
            'A friend is a present you give yourself.'
        ];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
      },
      getInspiringMessage: (req, res) => {
        const inspiringMessages = [
            "When you have a dream, you’ve got to grab it and never let go.",
            "Nothing is impossible. The word itself says ‘I’m possible!",
            'There is nothing impossible to they who will try.',
            "The bad news is time flies. The good news is you’re the pilot.",
            "Life has got all those twists and turns. You’ve got to hold on tight and off you go.",
            "Keep your face always toward the sunshine, and shadows will fall behind you."
        ];

        let randomIndex = Math.floor(Math.random() * inspiringMessages.length);
        let randomInspiringMessage = inspiringMessages[randomIndex];
      
        res.status(200).send(randomInspiringMessage);
      },
      getAllUsers: (req, res) => {
        console.log(users)
        res.status(200).send(users);
      }, 
      addUser: (req, res) => {
        //console.log(req.body);
        let newUser = req.body;
        users.push(newUser);
        res.status(200).send(users); 
      },
      editUser: (req, res) => {
        let oldAndNewUsername = req.params.username.split('&');
        // console.log(oldAndNewUsername);
        let oldUsername = oldAndNewUsername[0];
        let newUsername = oldAndNewUsername[1];
        for(let i = 0; i < users.length; i++){
            if(users[i].username === oldUsername){
                users[i].username = newUsername;
            }
          }
        res.status(200).send(users);  
      },
      deleteUser: (req, res) => {
          //console.log(req.params.username);
          let usernameToDelete = req.params.username
          for(let i = 0; i < users.length; i++){
            if(users[i].username === usernameToDelete){
                users.splice(i, 1);
            }
          }
          res.status(200).send(users);
      }
}