export const ProfileView = function () {
    //Essentials for getting full user info 
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');
    //Display user info
    var {userForename, userSurname, userUsername, userEmail, userCelebrate} = storedUser;
    var birthdayArray = userCelebrate.split('-');
    function monthRead(n) {
        wordMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var num = parseInt(n);
        return wordMonths[num - 1];
    };
    var trueBirthday = `${birthdayArray[2].split('T')[0]} ${monthRead(birthdayArray[1])} (${birthdayArray[2].split('T')[0]} ${birthdayArray[1]})`;
    return (
            <div>
                <div><b>YOUR PROFILE</b></div>
                <div><b>Forename: </b>{userForename}</div>
                <div><b>Surname: </b>{userSurname}</div>
                <div><b>Username: </b>{userUsername}</div>
                <div><b>Email: </b>{userEmail}</div>
                <div><b>Birthday: </b>{trueBirthday}</div>
            </div>
        );
};