function insert(num)
{
    document.form1.textview.value=document.form1.textview.value+num;
}

function back()
{
    var exp=document.form1.textview.value;
    document.form1.textview.value=exp.substring(0,exp.length-1);
}

function equal()

    {
        var exp=document.form1.textview.value;
        if(exp)
        {
            document.form1.textview.value=eval(exp);
        }
    }
