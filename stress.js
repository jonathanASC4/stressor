function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".newText1").append( profile.getName());
    $(".email").text(profile.getEmail());
    $(".signs").append("<p><a href='file:///C:/Users/ASC%20Guest/Desktop/stressors/stress2.html'>Continue to page</a></p>");
    }

//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        //setting back to default
        $(".newText1").text("");
        
       $(".email").text("example@example.com");
        $(".scoreA").text("");
    });
    
}