/*
alert
confirm
prompt

   /n
 */

window.onload = function()
{
	
        alert("Cze�� Magda. Mi�ego dnia");
        
        var odpowiedz = confirm("Czy jeste� pewna �e chcesz usun�c konto?");
        
        if (odpowiedz)
        {
          
        //
        alert("konto zosta�o usuni�te");
        
        };
        
        var result = prompt("wpisz swoje imi�: ");
        
        alert("Bye Bye " + result);
        
        
};