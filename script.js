/*
alert
confirm
prompt

   /n
 */

window.onload = function()
{
	
        alert("Czeœæ Magda. Mi³ego dnia");
        
        var odpowiedz = confirm("Czy jesteœ pewna ¿e chcesz usun¹c konto?");
        
        if (odpowiedz)
        {
          
        //
        alert("konto zosta³o usuniête");
        
        };
        
        var result = prompt("wpisz swoje imiê: ");
        
        alert("Bye Bye " + result);
        
        
};