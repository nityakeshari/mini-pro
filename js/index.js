var a=[];
var b=[];
id=1;
var id1=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11"];
var id2=["b1","b2","b3","b4","b5","b6","b7","b8","b9","b10","b11","b12","b13","b14"];
var n=0;
var temp=0;
var c=[];
var xc=0;
class data{
    constructor(value,x,y)
    {
        this.value=value;
        this.x=x;
        this.y=y;
    }
}
var i=0;
var j=0;
var k=0;
var o=0;
function setupCanvas(canvas) {
    var dpr = window.devicePixelRatio || 1;
    canvas.width = 720*dpr;
    canvas.height = 380*dpr;
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return ctx;
  }
  var ctx = setupCanvas(document.querySelector('.Mycanvas'));
var cann = document.querySelector(".Mycanvas");
ctx = cann.getContext("2d");
function check_condition()
{

    if(document.getElementById('r1').checked==true &&  document.getElementById('r3').checked==true && document.getElementById('r4').checked==true && document.getElementById('r5').checked==true )
    {
             document.getElementById('modall').classList.remove("invs");
             document.getElementById('instructt').classList.add("invs");      
    }
    else
    if(document.getElementById('errror').classList.contains("invs"))
    document.getElementById('errror').classList.remove("invs");
}
function  Siz_validate()
{ console.log(parseInt(document.querySelector(".in01").value));
    if(parseInt(document.querySelector(".in01").value)>0&&parseInt(document.querySelector(".in01").value)<=5&&document.querySelector(".in01").value.indexOf('.')== -1)
{
    n=document.querySelector(".in01").value;            
    ctx.beginPath();
    ctx.moveTo(50,20);
    ctx.lineTo(30,20);
    ctx.lineTo(30,20+n*30);
    ctx.lineTo(50,20+n*30);
    ctx.stroke();
    ctx.moveTo(40+n*30,20);
    ctx.lineTo(60+n*30,20);
    ctx.lineTo(60+n*30,20+n*30);
    ctx.lineTo(40+n*30,20+n*30);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(270,20);
    ctx.lineTo(250,20);
    ctx.lineTo(250,20+n*30);
    ctx.lineTo(270,20+n*30);
    ctx.stroke();
    ctx.moveTo(260+n*30,20);
    ctx.lineTo(280+n*30,20);
    ctx.lineTo(280+n*30,20+n*30);
    ctx.lineTo(260+n*30,20+n*30);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(500,20);
    ctx.lineTo(480,20);
    ctx.lineTo(480,20+n*30);
    ctx.lineTo(500,20+n*30);
    ctx.stroke();
    ctx.moveTo(480+n*30,20);
    ctx.lineTo(500+n*30,20);
    ctx.lineTo(500+n*30,20+n*30);
    ctx.lineTo(480+n*30,20+n*30);
    ctx.stroke();
    var para = document.createElement("P");               
    var t = document.createTextNode("Size(n)="+n);      
    para.appendChild(t);                                          
    document.querySelector(".siz").appendChild(para); 
    document.querySelector(".inp_siz").classList.add("invs");
    a=[n];
    b=[n];
    c=[n];
    for(let u=0;u<n;u++)
    {
        a[u]=[n];
        b[u]=[n];
        c[u]=[n];
    }
   document.querySelector(".inp_mata").classList.remove("invs");
   var para = document.createElement("P");               
                            var t = document.createTextNode("Matrix A");      
                            para.appendChild(t);                                          
                            document.querySelector(".mat_a").appendChild(para); 
                            j++;
i=0;j=0;
}
else
alert("Wrong Input");
}
function MatrixA_validate()
{console.log(parseInt(document.getElementById('in03').value));
        if(i<n)
        {
            if(j<n)
            {
                if(j<n-1)
                {
                    if(parseInt(document.getElementById('in03').value)>=0&&parseInt(document.getElementById('in03').value)<=30&&document.querySelector(".in03").value.toString().indexOf('.') == -1)
                    {
                        a[i][j]=new data(parseInt(document.getElementById('in03').value),50+j*30,40+i*30);
                        ctx.fillText(a[i][j].value,a[i][j].x,a[i][j].y);
                        document.getElementById('in03').value="";
                        var para = document.createElement("P");               
                        var t = document.createTextNode("a["+i+"]["+j+"]="+a[i][j].value);      
                        para.appendChild(t);                                          
                        document.querySelector(".mat_a").appendChild(para); 
                        j++;
                    }
                    else
                    alert("Wrong input");
                }
                else if(i==n-1 && j==n-1)
        {   if(parseInt(document.getElementById('in03').value)>=0&&parseInt(document.getElementById('in03').value)<=30&&document.querySelector(".in03").value.toString().indexOf('.') == -1)
           { a[i][j]=new data(parseInt(document.getElementById('in03').value),50+j*30,40+i*30);
                        ctx.fillText(a[i][j].value,a[i][j].x,a[i][j].y);
                        document.getElementById('in03').value="";
                        var para = document.createElement("P");               
                        var t = document.createTextNode("a["+i+"]["+j+"]="+a[i][j].value);      
                        para.appendChild(t);                                          
                        document.querySelector(".mat_a").appendChild(para); 
            document.querySelector(".inp_mata").classList.add("invs");
            document.querySelector(".inp_matb").classList.remove("invs");
            i=0;
            j=0;
            var para = document.createElement("P");               
                            var t = document.createTextNode("Matrix B");      
                            para.appendChild(t);                                          
                            document.querySelector(".mat_b").appendChild(para); 
            }
            else
                    alert("Wrong input");
        }
                else
                {console.log(parseInt(document.getElementById('in03').value));
                    
                    if(parseInt(document.getElementById('in03').value)>0&&parseInt(document.getElementById('in03').value)<=30&&document.querySelector(".in03").value.toString().indexOf('.') === -1)
                    {
                        a[i][j]=new data(parseInt(document.getElementById('in03').value),50+j*30,40+i*30);
                        ctx.fillText(a[i][j].value,a[i][j].x,a[i][j].y);
                        document.getElementById('in03').value="";
                        var para = document.createElement("P");               
                        var t = document.createTextNode("a["+i+"]["+j+"]="+a[i][j].value);      
                        para.appendChild(t);                                          
                        document.querySelector(".mat_a").appendChild(para); 
                        i++;
                        j=0;
                    }
                    else
                    alert("Wrong Input");
        
                }
            }
        }
        
    }
    function MatrixB_validate()
    {console.log(parseInt(document.getElementById('in04').value));
            if(i<n)
            {
                if(j<n)
                {
                    if(j<n-1)
                    {
                        if(parseInt(document.getElementById('in04').value)>=0&&parseInt(document.getElementById('in04').value)<=30&&document.querySelector(".in04").value.toString().indexOf('.') == -1)
                        {
                            b[i][j]=new data(parseInt(document.getElementById('in04').value),270+j*30,40+i*30);
                            ctx.fillText(b[i][j].value,b[i][j].x,b[i][j].y);
                            document.getElementById('in04').value="";
                            var para = document.createElement("P");               
                            var t = document.createTextNode("b["+i+"]["+j+"]="+b[i][j].value);      
                            para.appendChild(t);                                          
                            document.querySelector(".mat_b").appendChild(para); 
                            j++;
                            //document.querySelector("#sett").disabled=false;
                        }
                        else
                        {
                            alert("Wrong Input");
                        }
                    }
                    else if(j==n-1 && i==n-1)
            { if(parseInt(document.getElementById('in04').value)>=0&&parseInt(document.getElementById('in04').value)<=30&&document.querySelector(".in04").value.toString().indexOf('.') == -1)
               { b[i][j]=new data(parseInt(document.getElementById('in04').value),270+j*30,40+i*30);
                            ctx.fillText(b[i][j].value,b[i][j].x,b[i][j].y);
                            document.getElementById('in04').value="";
                            var para = document.createElement("P");               
                            var t = document.createTextNode("b["+i+"]["+j+"]="+b[i][j].value);      
                            para.appendChild(t);                                          
                            document.querySelector(".mat_b").appendChild(para); 
                            document.querySelector("#sett").disabled=false;
                document.querySelector(".inp_matb").classList.add("invs");
                document.querySelector(".divdrop").classList.remove("invs");
            }
               else
            {
                alert("Wrong Input");
            } 
            }
                    else
                    {console.log(parseInt(document.getElementById('in04').value));
                        
                        if(parseInt(document.getElementById('in04').value)>0&&parseInt(document.getElementById('in04').value)<=30&&document.querySelector(".in04").value.toString().indexOf('.') == -1)
                        {
                            b[i][j]=new data(parseInt(document.getElementById('in04').value),270+j*30,40+i*30);
                            ctx.fillText(b[i][j].value,b[i][j].x,b[i][j].y);
                            document.getElementById('in04').value="";
                            var para = document.createElement("P");               
                            var t = document.createTextNode("b["+i+"]["+j+"]="+b[i][j].value);      
                            para.appendChild(t);                                          
                            document.querySelector(".mat_b").appendChild(para); 
                            i++;
                            j=0;
                            //document.querySelector("#sett").disabled=false;
                        }
                        else
                        alert("Wrong Input");
            
                    }
                }
            }
            
        }
function sett(){
   o=document.getElementById('dd01').value;
  if(o=="Addition")
  {
    ctx.font = "20px Ariel";
    ctx.fillText("+",110+n*30,20+n*15);
    ctx.fillText("=",300+n*30,20+n*15);  
    document.querySelector(".divdrop").classList.add("invs");
    document.querySelector("#run").classList.remove("invs");
    document.querySelector("#addd").classList.remove("invs");

  }
  else{
    ctx.font = "20px Ariel";
    ctx.fillText("x",100+n*30,20+n*15);
    ctx.fillText("=",340+n*30,20+n*15);  
    document.querySelector(".divdrop").classList.add("invs");
    document.querySelector("#run").classList.remove("invs");
    document.querySelector("#multi").classList.remove("invs");
    document.querySelector("#addd").style.visibility="hidden";
    document.querySelector("#addd").style.display="none";
    id=12;
  }
  
}
    
function run_code()
{document.querySelector("#run").disabled=true;i=0;j=0;
document.querySelector(".next").style.visibility="visible";
document.querySelector(".next").style.display="inline-block";
document.querySelector(".reset").style.visibility="visible";
document.querySelector(".reset").style.display="inline-block";
}
function next(){
    if(o=="Addition")
    {
        
            if(document.getElementById(id).classList.contains("yello")==false)
            document.getElementById(id).classList.add("yello");
            document.querySelector(".data_span").innerHTML=document.getElementById(id).innerHTML;
            if(id==4)
            {
                if(i==n)
                {id=11;test();}
            }
            if(id==8)
            {
                ctx.font = "10px sans-serif";
                yellow(a[i][j].x,a[i][j].y);
                yellow(b[i][j].x,b[i][j].y);
                c[i][j]=new data(a[i][j].value+b[i][j].value,500+j*30,40+i*30);
                ctx.fillText(c[i][j].value,c[i][j].x,c[i][j].y);
                j++;
            }
            if(id==9)
            {      if(j<n)
                { white(a[i][j-1].x,a[i][j-1].y);
                    white(b[i][j-1].x,b[i][j-1].y);
                    document.getElementById(id).classList.remove("yello");
                document.getElementById(id-1).classList.remove("yello");
                document.getElementById(id-2).classList.remove("yello");
                document.getElementById(id-3).classList.remove("yello");
                id=id-4;  }
                else{
                    white(a[i][j-1].x,a[i][j-1].y);
                    white(b[i][j-1].x,b[i][j-1].y);
                    i++;
                    j=0;
                }
                        
            }
            if(id==10)
            {document.getElementById(id).classList.remove("yello");
            document.getElementById(id-1).classList.remove("yello");
            document.getElementById(id-2).classList.remove("yello");
            document.getElementById(id-3).classList.remove("yello");
            document.getElementById(id-4).classList.remove("yello");
            document.getElementById(id-5).classList.remove("yello");
            
            id=id-7;

            }
            id++
            if(id==11)
            {
                document.getElementById(id).classList.add("yello");
                document.querySelector(".next").disabled = "true";
                
            }
      

    }
    else
    {
        
        
            if(document.getElementById(id).classList.contains("yello")==false)
            document.getElementById(id).classList.add("yello");
            document.querySelector(".data_span").innerHTML=document.getElementById(id).innerHTML;
            if(id==15)
            {
                if(i==n)
                {id=27; test();}
            }
            if(id==21)
            {   
                yellow(a[i][k].x,a[i][k].y);
                yellow(b[k][j].x,b[k][j].y);
                temp=temp+a[i][k].value*b[k][j].value;
                // ctx.font="20px sans-serif";
                // ctx.fillText("+",xc+=20,3*(20+n*15));
                ctx.fillText(a[i][k].value,xc+=20,3*(20+n*15));
                ctx.fillText("*",xc+=20,3*(20+n*15));
                ctx.fillText(b[k][j].value,xc+=20,3*(20+n*15));
                k++;
            }
            if(id==22)
            {
                if(k<n)
                {
                    white(a[i][k-1].x,a[i][k-1].y);
                   white(b[k-1][j].x,b[k-1][j].y);
                    document.getElementById(id).classList.remove("yello");
                    document.getElementById(id-1).classList.remove("yello");
                    document.getElementById(id-2).classList.remove("yello");
                    document.getElementById(id-3).classList.remove("yello");
                    ctx.font="20px sans-serif";
                ctx.fillText("+",xc+=20,3*(20+n*15));
                    id=id-4;
                }
                else{
                    white(a[i][k-1].x,a[i][k-1].y);
                    white(b[k-1][j].x,b[k-1][j].y);
                    k=0;
                    c[i][j]=new data(temp,500+j*30,40+i*30);
                    ctx.font="10px sans-serif";
                    ctx.fillText(c[i][j].value,c[i][j].x,c[i][j].y);
                    ctx.font="20px sans-serif";
                    ctx.fillText("= "+c[i][j].value,xc+=20,3*(20+n*15));
                    temp=0;
                    j++;
                }
            }
            if(id==25)
            {if(j<n)
                { document.getElementById(id).classList.remove("yello");
                document.getElementById(id-1).classList.remove("yello");
                document.getElementById(id-2).classList.remove("yello");
                document.getElementById(id-3).classList.remove("yello");
                document.getElementById(id-4).classList.remove("yello");
                document.getElementById(id-5).classList.remove("yello");
                document.getElementById(id-6).classList.remove("yello");
                document.getElementById(id-7).classList.remove("yello");
                document.getElementById(id-8).classList.remove("yello");
                id=id-9;
                ctx.clearRect(0,3*(20+n*15)-30,xc+50,30);
                xc=0;
                }
                else{
                    i++;
                    j=0;
                    ctx.clearRect(0,3*(20+n*15)-30,xc+50,30);
                    xc=0;
                    console.log(i,j);

                }
            }

                if(id==26)
                { document.getElementById(id).classList.remove("yello");
                document.getElementById(id-1).classList.remove("yello");
                document.getElementById(id-2).classList.remove("yello");
                document.getElementById(id-3).classList.remove("yello");
                document.getElementById(id-4).classList.remove("yello");
                document.getElementById(id-5).classList.remove("yello");
                document.getElementById(id-6).classList.remove("yello");
                document.getElementById(id-7).classList.remove("yello");
                document.getElementById(id-8).classList.remove("yello");
                document.getElementById(id-9).classList.remove("yello");
                document.getElementById(id-10).classList.remove("yello");
                document.getElementById(id-11).classList.remove("yello");
                id=id-12;

                ctx.clearRect(0,3*(20+n*15)-30,xc+50,30);
                ctx.rect(0,3*(20+n*15)-30,xc+50,30);
                    xc=0;
                // document.querySelector(".next").disabled=true;
                }
             
            id++;console.log(id);
            if(id==27)
            { document.getElementById(id).classList.add("yello");;
            document.querySelector(".next").disabled=true;
            }
      
    }
}
function test(){
    document.querySelector(".At").style.visibility="visible";
    document.querySelector(".At").style.display="block";
    document.querySelector(".At").scrollIntoView();
}

function test_board(){
    document.querySelector(".At").style.visibility="visible";
    document.querySelector(".At").style.display="block";
    document.querySelector(".At").scrollIntoView();
//   }
//   function checkk(){
   document.querySelector(".eval").disabled=true;
   var marks=0;
   
   if( document.getElementById("012").checked === true)
   {
    document.getElementById("CA1").style.visibility="visible";
    document.getElementById("CA1").style.display="block";
    marks=marks+1;
   }
   else
   {
    document.getElementById("WA1").style.visibility="visible";
    document.getElementById("WA1").style.display="block";
   }
   if( document.getElementById("021").checked === true)
   {
    document.getElementById("CA2").style.visibility="visible";
    document.getElementById("CA2").style.display="block";
    marks=marks+1;
   }
   else
   {
    document.getElementById("WA2").style.visibility="visible";
    document.getElementById("WA2").style.display="block";
   }
   if( document.getElementById("032").checked === true)
   {
    document.getElementById("CA3").style.visibility="visible";
    document.getElementById("CA3").style.display="block";
    marks=marks+1;
   }
   else
   {
    document.getElementById("WA3").style.visibility="visible";
    document.getElementById("WA3").style.display="block";
   }
//    if( document.getElementById("042").checked === true)
//    {
//     document.getElementById("CA4").style.visibility="visible";
//     document.getElementById("CA4").style.display="block";
//     marks=marks+1;
//    }
//    else
//    {
//     document.getElementById("WA4").style.visibility="visible";
//     document.getElementById("WA4").style.display="block";
//    }

   alert("You Scored "+marks+" out of 3");
}


function yellow(x,y)
{
    ctx.lineWidth=2;
    ctx.beginPath();
    ctx.strokeStyle = "#ffd571";
    ctx.arc(x+10, y-4, 15, 0, 2 * Math.PI);
ctx.stroke();
}
function white(x,y)
{
    ctx.lineWidth=3;
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.arc(x+10, y-4, 15, 0, 2 * Math.PI);
ctx.stroke();
}

   function reset()
   {
       location.reload();
   } 
