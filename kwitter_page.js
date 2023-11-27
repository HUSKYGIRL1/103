var firebaseConfig = {
      apiKey: "AIzaSyCD8iRABZfyxVel6ufKeJAE0uHv4Wdg0cI",
      authDomain: "kwitter-804e5.firebaseapp.com",
      databaseURL: "https://kwitter-804e5-default-rtdb.firebaseio.com",
      projectId: "kwitter-804e5",
      storageBucket: "kwitter-804e5.appspot.com",
      messagingSenderId: "549800964016",
      appId: "1:549800964016:web:380a272fdea73afd687075",
    };
    
      firebase.initializeApp(firebaseConfig);

      user_name=localStorage.getItem("user_name");
      room_name=localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message']
like=message_data['like'];
name_with_tag= "<h4>"+name+"<img class='user_tick' src=''></h4>";
message_with_tag="<h4 class='message_h4'>"+ message+"</h4>";
like_button="<button class='btn btn_warning' id="+firebase_message_id+" value="+like+" onclick=updatLike(this.id)>";
span_with_tage="<span class=glypcon glycon-thumbs-up> Like:"+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button;
document.getElementById("output").innerHTML=row;

//End code
      } });  }); }
getData();
