var bidTime = new Date("2020-11-22T17:03:38");
var bidTimeMS = bidTime.getTime();
var checks = 0;
function check()
{
    var nowMS = Date.now(); 
    if (nowMS >= bidTimeMS)
        {
            document.getElementById("reviewbid").submit();
            clearInterval(interval);
        }
    else
    {
        var diffDate = new Date(bidTimeMS - nowMS);
        console.log(diffDate.getHours() - 1 + ":" + diffDate.getMinutes() + ":" + diffDate.getSeconds() + " (" + diffDate.getTime() / 1000 + " seconds left)");
        if (checks > 10000)
        {
            console.clear();
            checks = 0;
        }
    }
    checks++;
}
var interval = setInterval(check, 0);