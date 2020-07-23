    
// //                         Ch#01  (Alert)
// //  Task : 01
    
// alert("Thankyou It's good to see you!");

// // Task : 02
// alert("Error!Please enter a valid password.");

// // Task : 03
// alert( "welcome to JS Land...\n Happy Coding!");

// // Task : 04
// alert( "welcome to JS Land..");
// alert("Happy Coding!")

// // Task : 05
// console.log("Hello..I can run JS through my web browser's console");

// // Task 6 & 7 in html file.

// //End of ch#01



// //                         Ch#02  (VARIABLES FOR STRINGS)

// //   Task : 01
// var username;

// //   Task : 02
// var myName="Hafsa Gulzar";

// //  Task : 03
// var message;
// message="Hello World"
// alert(message);

// //  Task : 04
//  var name="jhone Doe";
//  var age="15 year old";
//  var msg="Certified Mobile Application Development";
//  alert(name);
//  alert(age);
//  alert(msg);

//  //  Task : 05
//  var pizza="PIZZA\nPIZZ\nPIZ\nPI\nP";
//  alert(pizza);

//  //  Task : 06
//  var email="hafsagulzar109@gmail.com"
//  var msg1="My email adress is "
//  alert(msg1 + email);

//   //  Task : 07
//   var book="A smarter way to learn JavaScript";
//   alert("I am trying to learn from the Book "+ book);

//   //  Task : 08
//   document.write("Yah! I can write hTML content through JavaSctipt.");

//  //  Task : 09
//   var pattern ="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
//   alert(pattern);



// //                         Ch#03  (VARIABLES FOR NUMBERS)

// //   Task : 01
// var age=21;
// alert(" I am "+ age +" years old ");

// //   Task : 02
// var visitor=15;
// alert(" You have visited this site "+ visitor +" times ");

// //   Task : 03
// var birthYear=1998;
// document.write(" <br> My birth year is" +birthYear +"<br>" +" Data type of my declared variable is number ");

// //   Task : 04
// var name,productTitle,quantity,
// name=prompt(" Enter your name ","Your name is:");
// productTitle=prompt(" Enter your product title","Your product title is:");
// quantity=+prompt(" Enter quantity of product you want to order","Product quantity is:");

// document.write("<br>" +name +" ordered " +quantity +"&nbsp" +productTitle +" on XYZ Clothing store." )


// //                         Ch#04  (VARIABLE NAMES: LEGAL & ILLEGAL)

// //   Task : 01
// var variable1,variable2,variable3;

// //   Task : 02
//       //Legal avriable
// var name,_age,$maks,grade,pecentage;
//       //Illegal avriable
// // var 1name,&_age,marks Sub,%age;

// //   Task : 03
// document.write("<br> <h1>Rules for naming JS variables</h1>")
// document.write("<br>Variable names can only contain numbers, $ and _. For example : $my_1stvariable");
// document.write("<br>Variable must begin with a letter $ and _. For example: $name, _name or name");
// document.write("<br> Variable name are case sensitive");
// document.write("<br>Variable name should not be JS Keywords");




//  //                         Ch#05  (MATH EXPRESSIONS )

//  //   Task : 01
//  var num1=+prompt(" Enter First Number","First number is:");
//  var num2=+prompt(" Enter Second Number","Second number is:");
//  var result=num1+num2;
//  document.write(" <br> Sum of " +num1 +" and " +num2 +" is " +result);

//  //   Task : 02
//                 //   Subtraction
//  var num1=+prompt(" Enter First Number","First number is:");
//  var num2=+prompt(" Enter Second Number","Second number is:");
//  var result=num1-num2;
//  document.write("<br> Subtraction of " +num1 +" and " +num2 +" is " +result);
//                //    Multiplication
//  var num1=+prompt(" Enter First Number","First number is:");
//  var num2=+prompt(" Enter Second Number","Second number is:");
//  var result=num1*num2;
//  document.write("<br> Multiplication of " +num1 +" and " +num2 +" is " +result);
//               // Divison
//  var num1=+prompt(" Enter First Number","First number is:");
//  var num2=+prompt(" Enter Second Number","Second number is:");
//  var result=num1/num2;
//  document.write("<br> divison of " +num1 +" and " +num2 +" is " +result);
//               // modulus
//  var num1=+prompt(" Enter First Number","First number is:");
//  var num2=+prompt(" Enter Second Number","Second number is:");
//  var result=num1%num2;
//  document.write("<br> Modulus of " +num1 +" and " +num2 +" is " +result);


// //   Task : 03
// var number;
// document.write( " <br> Value after variable declaration is " +number);
// number=10;
// document.write("<br>Initial value: " +number);
// ++number;
// document.write("<br>Value after increment is: " +number);
// number=number+7;
// document.write("<br>Value after addition is: " +number);
// --number;
// document.write("<br>Value after decrement is: " +number);
// number=number%3;
// document.write("<br>The remainder is : " +number);


// //   Task : 04
// var oneTicketPrice=600;
// var fiveTicketPrice=(oneTicketPrice*5);
// document.write("<br> Total price to buy 5 tickets to a movie is " +fiveTicketPrice +"PKR");

// //   Task : 05

// var table=prompt("Enter a table number you want to write ","Table number is:");
// document.write("<br>Table of " +table);
// for(var i=1; i<=10;i++)
// {
//     document.write("<br>" +table +"*" +i +"=" +(table*i) );
// }

// //   Task : 06
// var Celsius=prompt("Enter temperature in Celsius","Temperature in Celsius is :");
// var Fahrenheit = (Celsius*9/5)+32;
// document.write("<br>" +Celsius +"°C is " +Fahrenheit +"°F");

// var Fahrenheit=prompt("Enter temperature in fahrenheit","Temperature in fahrenheit is :");
// var Celsius = (Fahrenheit-32)*5/9;
// document.write("<br>" +Fahrenheit +"°F is " +Celsius +"°C");


// //   Task : 07
// var priceItem1=+prompt("Enter the price of item 1 ","Price of item 1 is :");
// var priceItem2=+prompt("Enter the price of item 2 ","Price of item 2 is :");
// var quantityItem1=+prompt("Enter the quantity of item 1 you want to order"," Quantity of item 1 is :");
// var quantityItem2=+prompt("Enter the quantity of item 2 you want to order"," Quantity of item 2 is :");
// var shipCharges=100;
// document.write("<br>Price of item 1 is " +priceItem1);
// document.write("<br>Quantity of item 1 is " +quantityItem1);
// totalPriceItem1= priceItem1*quantityItem1;
// document.write("<br>Price of item 2 is " +priceItem2);
// document.write("<br>Quantity of item 2 is " +quantityItem2);
// totalPriceItem2= priceItem2*quantityItem2;
// document.write("<br>Shipping charges " +shipCharges);

// totalPrice=totalPriceItem1+totalPriceItem2+shipCharges;
// document.write("<br> <br> Total cost of your order is " +totalPrice);

// //   Task : 08
// var Tmarks=prompt("Enter Enter total marks ","Total marks is :");
// var Omarks=prompt("Enter obtained marks ","Obtained marks is:");
// var percentage= (Omarks/Tmarks)*100;

// document.write("<br>Total marrks: " +Tmarks);
// document.write("<br>Marks obtained: " +Omarks);
// document.write("<br>Percentage: " +percentage +"%");

// //   Task : 09
// var USdollar=10;
// var saudiRayal=25;
// var totalCurrency = (USdollar*104.80)+(saudiRayal*28);
// document.write("Total Currency in PKR: " +totalCurrency);

// //   Task : 10
// var num=10;
// var res= ((num+5)*10)/2
// document.write("<br>Result after calculation is: " +res);

// //   Task : 11
// var currentYear=+prompt("Enter current year","Current year is:");
// var birthYear=+prompt("Enter your Birth year","Birth year is:");
// var age = currentYear-birthYear;

// document.write("<br>Current Year :" +currentYear);
// document.write("<br>Birth Year :" +birthYear);
// document.write("<br>Your Age is either " +age +" or " +(age-1));

// //   Task : 12
// var radius=+prompt("Enter he radius of circle","Radius is:");
// const Pi=3.142;
// var circumference=2*Pi*radius;
// var area= Pi*radius*radius;
// document.write("<br><br> Radius of a circle: " +radius);
// document.write("<br>The Circumference is: " +circumference);
// document.write("<br>The area is: " +area);

// //   Task : 13
// var favrtSnack=prompt("Enter the name of your favourite snack","Your favourite snack is:");
// var currentAge=+prompt("Enter your current age","Your current age is:");
// var maxAge=+prompt("Enter your maximum estimated age","Your maximum age is:");
// var amountSnackPerDay=+prompt("Enter the amount of snack you eat in a day","Number of snacks is:");
// var Total=(amountSnackPerDay*365)*(maxAge-currentAge);
// document.write("<br> <h1>The Lifetime Supply Calculator</h1>");
// document.write("<br><br>Favourite snack: "+favrtSnack);
// document.write("<br>Current Age: " +currentAge);
// document.write("<br>Estimated Maximum Age "+maxAge);
// document.write("<br>Amount of snacks per day: "+amountSnackPerDay);
// document.write("<br>You will need " +Total +" to last you until the ripe old age of " +maxAge);



// //                         Ch#(06-09)  (MATH EXPRESSIONS)

//    Task : 01
// var a=prompt("Enter a numner","The number is:");
// document.write("<br>Result:<br>The value of a is: " +a);
// ++a;
// document.write("<br>..................................");
// document.write("<br><br>The value of ++a is: " +a ,"<br>Now the value of a is: " +a);
// ++a;
// document.write("<br><br>The value of a++ is: " +a, "<br>Now the value of a is: " +a);
// --a;
// document.write("<br><br>The value of --a is: " +a, "<br>Now the value of a is: " +a);
// a--;
// document.write("<br><br>The value of a-- is: " +a, "<br>Now the value of a is: " +a);


//    Task : 02
//  var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
//         //      1 -  0 +  1  + 1
//         document.write("<br><br>a is " +a);
//         document.write("<br>b is " +b);
//         document.write("<br>result is " +result);

//  //   Task : 03
//  var name=prompt("Enter your name ","Your name is:");
//  document.write("<br>Thankyou " +name +"! It's good to see you " )

//  //   Task : 04 (missing in assignment)

//  //   Task : 05
//  var table=0;
//  table = +prompt("Enter a table number you want to write ");
//  document.write("<br>Table is " +table)
//  if(table == 0)
//  {
//    table=5;
//  }

//  for(var i=1; i<=10;i++)
//   {
//      document.write("<br>" +table +"*" +i +"=" +(table*i) );
//   }

//   //   Task : 06
//   var sub1=prompt("Enter first subject name","First subject is:");
//   var sub2=prompt("Enter second subject name","Second subject is:");
//   var sub3=prompt("Enter third subject name","Third subject is:");
//   var totalMarkssub=100;
//   var totalMarks=100*3;
//   var Osub1=+prompt("Enter first subject marks","First subject marks is:");
//   var Osub2=+prompt("Enter second subject marks","Second subject marks is:");
//   var Osub3=+prompt("Enter third subject marks","Third subject marks is:");

//   var obainedSubjectMarks=Osub1+Osub2+Osub3;

//   var percentageSub1=Osub1/totalMarkssub*100;
//   var percentageSub2=Osub2/totalMarkssub*100;
//   var percentageSub3=Osub3/totalMarkssub*100;

//   var totalpecentage= obainedSubjectMarks/totalMarks*100; 

//   document.write("<br><br>")
//   document.write("<table>")
//     document.write("<tr>")
//         document.write("<th>")
//         document.write("Subject")
//         document.write("</th>")

//         document.write("<th>")
//         document.write("Total Marks")
//         document.write("</th>")

//         document.write("<th>")
//         document.write("Obtained Marks")
//         document.write("</th>")

//         document.write("<th>")
//         document.write("Percentage")
//         document.write("</th>")
//     document.write("</tr>") 
//     document.write("<tr>")
//           document.write("<td>")
//           document.write(sub1)
//           document.write("</td>")

//           document.write("<td>")
//           document.write(totalMarkssub)
//           document.write("</td>")
          
//           document.write("<td>")
//           document.write(Osub1)
//           document.write("</td>")

//           document.write("<td>")
//           document.write(percentageSub1)
//           document.write("%")
//           document.write("</td>")
//     document.write("</tr>") 
//     document.write("<tr>")
//          document.write("<td>")
//          document.write(sub2)
//          document.write("</td>")

//          document.write("<td>")
//          document.write(totalMarkssub)
//          document.write("</td>")
    
//          document.write("<td>")
//          document.write(Osub2)
//          document.write("</td>")

//          document.write("<td>")
//          document.write(percentageSub2)
//          document.write("%")
//         document.write("</td>")
// document.write("</tr>") 
// document.write("<tr>")
//         document.write("<td>")
//         document.write(sub3)
//         document.write("</td>")

//         document.write("<td>")
//         document.write(totalMarkssub)
//         document.write("</td>")

//         document.write("<td>")
//         document.write(Osub3)
//         document.write("</td>")

//         document.write("<td>")
//         document.write(percentageSub3)
//         document.write("%")
//         document.write("</td>")
//         document.write("</tr>")

//         document.write("<tr>")
//         document.write("<td>")
//         document.write(" ")
//         document.write("</td>")

//         document.write("<td>")
//         document.write("&nbsp &nbsp")
//         document.write("<b>")
//         document.write(totalMarks)
//         document.write("</b>")
//         document.write("</td>")

//         document.write("<td>")
//         document.write("&nbsp &nbsp")
//         document.write("<b>")
//         document.write(obainedSubjectMarks)
//         document.write("</b>")
//         document.write("</td>")

//         document.write("<td>")
//         document.write("&nbsp &nbsp")
//         document.write("<b>")
//         document.write(totalpecentage)
//         document.write("</b>")
//         document.write("%")
//         document.write("</td>")
// document.write("</tr>") 

//   document.write("</table>")


// //                         Ch#(09-11)  (USER INPUT & CONDITIONAL STATEMENT)

// //    Task : 01
// var city=prompt("Enter the name of city","City name is:");
// if(city == "Karachi" ||city == "karachi" )
// {
//     alert("Welcome to city of lights");
// }

// //    Task : 02
// var gender=prompt("Enter your gender","Your gender is:");
// if(gender == "male" || gender == "Male")
// {
//     alert(" Good Morning Sir");
// }
// else 
// if(gender == "female" || gender == "Female")
// {
//     alert("Good Morning Ma’am");
// }

// //    Task : 03
// var lightColor=prompt("Enter color of road traffic signal ","Traffic signal color is:");
// if(lightColor === "red" || lightColor=== "Red")
// {
//     alert("Must Stop");
// }
// else
// if(lightColor === "yellow" || lightColor=== "Yellow")
// {
//     alert("Ready to move");
// }
// else
// if(lightColor === "green" || lightColor=== "Green")
// {
//     alert("Move now");
// }
// else
// alert("Wrong input")

// //    Task : 04
// var fuel=+prompt("Enter the  remaining fuel in car (in litres)");
// if(fuel<0.25)
// {
//     alert("“Please refill the fuel in your car");
// }

// //    Task : 05
// // a.
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//     //  output: message displayed

// //  b. 
//     var b = 82;
//     if (b++ === 83){
//     alert("given condition for variable b is true");
//     }
//     //  output: message not displayed

// // c. 
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//    //  output: condition 2 is true.

// // d.
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  //  output: message displayed

// // e.
//  if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

//     //  output: message displayed True

// // f. 
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

//     //  output: message displayed 



// //    Task : 06

// var obtainedMarks=+prompt("Enter 3 subject marks","subject marks is:");
// var Tmarks=+prompt("Enter total marks of 3 subject","Total marks is:")
// var prcnt=obtainedMarks/Tmarks*100;

// var grade,remarks;

// if(prcnt<=100 && prcnt>=80)
// {
//     grade="A-one";
//     remarks="Excellent";
// }
// else
// if(prcnt<80 && prcnt>=70)
// {
//     grade="A";
//     remarks="Good";
// }
// else
// if(prcnt<70 && prcnt>=60)
// {
//     grade="B";
//     remarks="You need t0 improve";
// }
// else
// if(prcnt<60 && prcnt>=0)
// {
//     grade="Fail";
//     remarks="Sorry";
// }

// document.write("<br><br> <h1>Marks sheet</h1>");
// document.write("<br>Total marks : " +Tmarks);
// document.write("<br>Obtained marks : " +obtainedMarks);
// document.write("<br>percentage : " +prcnt +"%");
// document.write("<br>Grade is : " +grade);
// document.write("<br>Remarks is : " +remarks);

// //    Task : 07
// var secretNo=7;
// var guessnumber=+prompt("Guess secret number between 1 t0 10","Gussed number is:");
// if(guessnumber === 7)
// {
//     alert("Bingo! Correct answer");
// }
// else
// if(guessnumber+1 === 7)
// {
//     alert("Close enough to the correct answer");
// }
// else
// {
//     alert("Wrong guessed")
// }


// //    Task : 08
// var number=+prompt("Enter a number","Number is:");
// if(number%3 == 0)
// {
//     alert("Number is divisible by 3");
// }
// else
// {
//       alert("Number is not divisible by 3");
// }


// //    Task : 09
// var number=+prompt("Enter a number","Number is:");
// if(number%2 == 0)
// {
//     alert("Even number");
// }
//  else
// {
//        alert("Odd number");
//  }


// //    Task : 10
// var temp=+prompt("Enter a temperature","Temperature is:");
// if(temp>40 && temp<70)
// {
//     alert("It is too hot outside.");
// }
// else
// if(temp>=30 && temp<40)
// {
//     alert("The Weather today is Normal.");
// }
// else
// if(temp>=20 && temp<30)
// {
//     alert("Today’s Weather is cool.");
// }
// else
// if(temp>=10 && temp<20)
// {
//     alert("OMG! Today’s weather is so Cool.");
// }
// else{
//     alert("You enter wrong temperature")
// }


// //    Task : 11
// var num1 = +prompt("Enter first number","First number is:");
// var num2 =+ prompt("Enter Second number","Sirst number is:");
// var operator=prompt("Enter operator  (+, -, *, /, %)","operator is:");

// if(operator === "+")
// {
//     alert("Result of " +num1 +operator +num2 +" = " +num1+num2);
// }
// if(operator === "-")
// {
//     alert("Result of " +num1 +operator +num2 +" = " +num1-num2);
// }
// if(operator === "*")
// {
//     alert("Result of " +num1 +operator +num2 +" = " +num1*num2);
// }
// if(operator === "/")
// {
//     alert("Result of " +num1 +operator +num2 +" = " +num1/num2);
// }
// if(operator === "%")
// {
//     alert("Result of " +num1 +operator +num2 +" = " +num1%num2);
// }

// //                         Ch#(12-13)  (IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS)

// //    Task : 01
// var char=+prompt("Enter a charcter or number (48-57 for 0-9 numbers, 65 to 90 for Uppercase letter , 97 to 122 for lowercase");
// if(char>=48 && char<57)
// {
//     alert("Its number " )
// }
// else
// if(char>=65 && char<90 )
// {
//     alert("Upercase leter" )
// }
// else
// if(char>=97 && char<122 )
// {
//     alert("Lowercase leter" )
// }

// //    Task : 02

// var int1=+prompt("Enter first interger","First Integer is:");
// var int2=+prompt("Enter second interger","Second Integer is:");
// if(int1 > int2)
// {
//     alert(int1 +" is greater than " +int2)
// }
// else
// if(int1 < int2)
// {
//     alert(int1 +" is less than " +int2)
// }
// else{
//     alert(int1 +" is equal to " +int2)
// }

// //    Task : 03
// var num=+prompt("Enter any number","Numberis:");
// if(num > 0)
// {
//     alert(num +" is positive number");
// }
// else
// if(num < 0)
// {
//     alert(num +" is negative number");
// }
// else{
//     alert(" number is 0");
// }

// //    Task : 04
// var char=prompt("Enter a charcter (i.e. string of length 1) ")
// if(char=='a' || char=='A' || char=='e'|| char =='E' || char=='i' ||char=='I' || char=='o' || char=='O' || char=='u' || char=='U')
// {
//     alert("True");
// }
// else
// {
//     alert("False");
// }


// //    Task : 05

// var correctPassword=prompt("Stor a correct password: ");
// var password=prompt("Enter your password");
// password=0;
// if(password == 0)
// {
//     alert(" Please enter your password");
//     var password=prompt("Enter your password");
// }
// if(password == correctPassword)
// {
//     alert("Correct! The password you entered matches the original password");
// }
// else{
//     alert("Incorrect password.")
// }


// //    Task : 06

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else
// {
// greeting = "Good evening";
// }


// //    Task : 07

// var time=+prompt("Enter a time 24 hours clock format like: 1900 = 7pm.");
// if(time>=0000 && time <1200)
// {
//     alert("Good Morning");
// }
// else
// if(time>=1200 && time<1700)
// {
//     alert("Good Afternoon");
// }
// else
// if(time>=1700 && time<2100)
// {
//     alert("Good Evening");
// }
// else
// if(time>=2100 && time<2359)
// {
//     alert("Good Night");
// }
// else{
//     alert("You enter wrong input");
// }

// //                         Ch#(14-16)  (ARRAYS )

// //    Task : 01

//     // Literals array empty
//     var literalArray=[];
//     // Literals array with data
//     var student=["Hafsa","Sana"];

// //    Task : 02
  
//     //   Object array Empty
//     var objectArray={};
//     //   Object array with data
//     var student={
//         firstName : "hafsa",
//         lastName  : "Gulzar"
//     }



// //    Task : 03

// var cities = ["Bahawalpur", "Islamabad", "Karachi", "Lahore", "Multan", "Muree"];

// //    Task : 04
// var number =[1,2,3,4,5,6,7,8,9,10];

// //    Task : 05

// var boolean =[true,false];

// //    Task : 06

// var mixedArray=[100,"nahawalpur","banana",900,5];

// //    Task : 07

// var eduQualification=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// document.write("<br><br>")
// document.write("<h1>Qualifications</h1>");

//   document.write("<br> 1) " +eduQualification[0]);
//   document.write("<br> 2) " +eduQualification[1]);
//   document.write("<br> 3) " +eduQualification[2]);
//   document.write("<br> 4) " +eduQualification[3]);
//   document.write("<br> 5) " +eduQualification[4]);
//   document.write("<br> 6) " +eduQualification[5]);
//   document.write("<br> 7) " +eduQualification[6]);
//   document.write("<br> 8) " +eduQualification[7]);


// //    Task : 08
// var totalMarks=500;
// var studentName=[];
// var studentMarks=[];
// var studentPercentage=[];
// for(var i=0; i<=2 ;i++)
// {
//     studentName[i]=prompt("Enter student name");
//     studentMarks[i]=prompt("Enter student marks");
//     studentPercentage[i]= studentMarks[i]/500*100;
// }
// for(var i=0; i<=2 ;i++){
// document.write("<br><br><b>Score of "+studentName[i] +" is " +studentMarks[i] +". Percentage: " +studentPercentage[i] +"%</b>");
// }



//    Task : 09


// var color=["red","blue","black","white","yellow"];
// document.write("<br><br>Array of color is : " +color);
// // a) add color to the beginning of the array
// var newColor=prompt("Which color add to the beginning of the array");
// color.unshift(newColor)
// document.write("<br>Array of Updated color is : " +color);

// // b) Add color to the end of the array
// var newColor=prompt("Which color add to the end of the array");
// color.push(newColor)
// document.write("<br>Array of Updated  color is : " +color);

// // c) Add two more color to the beginning of the array
//  var newColor=[];
//  var n=prompt("How many color you want to add inthe end of the array");
//  for(var i=0; i<n ;i++){
    
//  newColor[i]=prompt("Which two more color add to the end of the array");
//  }
// color.unshift(newColor)
// document.write("<br>Array of Updated  color is : " +color);

// // d) Delete the first color in the array
// color.shift();
// document.write("<br>Array of Updated color is : " +color);

// // e) Delete the last color in the array
// color.pop();
// document.write("<br>Array of Updated color is : " +color);


// // f) which index he/she wants to add a color & color name
// var newColor=prompt("Which color add to the end of the array");
// var index=prompt("In which index you want to add color");
// color.splice(index,0, newColor);
// document.write("<br>Array of Updated color is : " +color);

// //  g) which index he/she wants to delete color(s) & how many colors he/she wants to delete
// var index=prompt("In which index you want to delete color");
// var number=prompt("How namny colors you want to delete");
// color.splice(index,number);
// document.write("<br>Array of Updated color is : " +color);


// //    Task : 10

// var studentScores=[320,230,480,120];
// document.write("<br><br>Sores of Student : " +studentScores);
// studentScores.sort();
// document.write("<br>OrderedSores of Student : " +studentScores);

// //    Task : 11

// var cities=["bahawalpur","karachi","muree","islamabad","multan","lahore"];
// document.write("<br><br>Cities list: <br>" +cities)
// var selCities = cities.slice(2, 4);
// document.write("<br>Selected Cities list : <br>"+selCities);


// //    Task : 12
//  var arr =["This","is","my","cat"];
//  var JoinArr= arr.join(" ");
//  document.write("<br><h1>Array</h1><br>" +arr);
//  document.write("<br><h1>String</h1><br>" +JoinArr);


//  //    Task : 13



//   //    Task : 14



//    //    Task : 15




//  //                         Ch#(17-20)  (ARRAYS AND LOOP )
//  //  Task : 01
//  var multiDimension=[[],[],[],[]];

//   //  Task : 02

//  var multiDimension=[[1,2,3,],[1,2,3,],[1,2,3]];
//  document.write(multiDimension)


//  //  Task : 03
//  var number=[1,2,3,4,5,6,7,8,9,10]
//  for(var i=0;i<10;i++)
//  {
//      document.write("<br>" +number[i]) ;
//  }

// //  Task : 04

// var table=prompt("Enter a table number you want to write ",);
// var length=prompt("Enter a table lenghth  ",);
// document.write("<br>Multiplication Table of " +table +"<br>Length of " +length +"<br>");
// for(var i=1; i<=length;i++)
// {
//     document.write("<br>" +table +"*" +i +"=" +(table*i) );
// }

// //  Task : 05

// var fruits=["apple","banana","mango","orange","straberry"];
// for(var i=0; i<fruits.length;i++)
// {
//     document.write("<br>" +fruits[i]);
// }
// document.write("<br><br>")

// for(var i=0; i<fruits.length;i++)
// {
//     document.write("<br> Element of index " +i +" is " +fruits[i]);
// }


// //  Task : 06
// // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// document.write("<br><h1>Counting : </h1><br>")
// for(var i=1 ;i<16;i++)
// {
//     document.write(i +" , ");
// }

// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// document.write("<br><h1>Reverse Counting : </h1><br>")
// for(var i=10 ;i>0;i--)
// {
//     document.write(i +" , ");
// }

// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// document.write("<br><h1>Even : </h1><br>")
// for(var i=0 ;i<=20;i++)
// {
//     if(i%2==0)
//     {
//     document.write(i +" , ");
//     }
// }

// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// document.write("<br><h1>Odd : </h1><br>")
// for(var i=0 ;i<=20;i++)
// {
//     if(i%2!=0)
//     {
//     document.write(i +" , ");
//     }
// }

// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write("<br><h1>Series : </h1><br>")
// for(var i=1 ;i<=20;i++)
// {
//     if(i%2==0)
//     {
//     document.write(i +"K , ");
//     }
// }


// //  Task : 07

// var items =["cake","apple pie","cookie","chips","patties"];
// var orderItem=prompt("Welcome to Hafsa's Bakery. What do you want to ordr Sir/Ma'am ");

// for(var i=0 ; i<items.length ;i++)
// {
//     if(orderItem == items[i])
//     {
//         document.write(orderItem +" is available at index " +i +" in our bakery" );
//     }
// }
// document.write("We are Sorry " +orderItem +" is <b> not Available</b> in our bakery.");


// //  Task : 08
// var array = [24, 53, 78, 91, 12];
// var largest = 0;

// for (i=0; i<=largest;i++){
//     if (array[i]>largest) {
//         var largest=array[i];
//     }
// }
// for (var i = 1; i < array.length; i++) {

//     if (array[i] > largest) {
//       largest = array[i];
//     } 
// }
// document.write("<br>Array items is: " +array);
// document.write("<br>The Largest number is: "+largest);


// //  Task : 09
// var array = [24, 53, 78, 91, 12];
// var smallest = array[0];
// for (var i = 0; i < array.length; i++){
//     var temp = array[i];
//     if (temp < smallest)
//     {
//         smallest = array[i];
//     }
// }
// document.write("<br>Array items is: " +array);
// document.write("<br>The Smallest number is: "+smallest)






// //  Task : 10
// document.write("<br><br>")
// for(var i=1 ;i<=100;i++)
// {
//     if(i%5==0)
//     {
//         document.write(+i +" , " );
//     }
// }



                    //   __________......Ch#(21-25)......___________
                    //          Task :01

    //  var fName=prompt("Enter your first name ","Your first name is: ");
    //  var lName=prompt("Enter your last name ","Your last name is: ");
    //  var fullName=fName+lName;
    //  document.write(" Hello! " +fullName);

                   //          Task :02

    // var fvrtMobile=prompt("Enter yours favorite mobile phone model","Favourite mobile model is:");
    // var length=fvrtMobile.length;
    // document.write("<br>")
    // document.write(" My favourite phone is: " +fvrtMobile);
    // document.write("<br>")
    // document.write(" Length of string: " +length)
    

                      //          Task :03
        


// var country= "pakistan";
// for (i=0 ; i< country.length; i++)
// {
//      if(country.slice(i,i+1)==="n")
//      {
//          document.write("<br>")
//          document.write("String is " +country);
//          document.write("<br>")
//          document.write("Index of 'n' : " +i);
//      }
// }


//                       //         Task :04
//  var str = "Hello World"
// var lindex = str.lastIndexOf("l");
// document.write("String: "+ str + "<br>"+ "Last Index of l is:" +lindex)



//                        //         Task :05
// var str = "Pakistani"
// var index = str.substring(3,4)
// document.write("String: "+ str + "<br>"+ "Character at index 3 is: "+index)
                       


//                         //         Task :06

// var str1 = prompt("Enter your first name?")
// var str2 = prompt("Enter your last name?")
// var full = str1.concat(str2)
// document.write(full + "<br>" + "Welcome to this site.")


//                              // Task #07
//   var text = "Hyderabad"    
//    var replace = text.replace("Hyder", "Islam") 
//   document.write("City: "+text+"<br>"+"After Replacement: "+replace)

//                            //  Task #08
//  var message = "Ali and Sami are best friends. They play cricket and football together."; 
//  var replace = message.replace(/and/g, "&") 
//  document.write(replace)


//                             // Task #09
// var num = '472'
// document.write("Value: "+num+"<br>"+ "Type: string")
// var num1 = parseInt('472')
// document.write("<br>Value: "+num1 +"<br>"+ "Type: number")


//                        // Task #10
// var text = prompt("Enter any name/thing?")
// var capital = text.toUpperCase()
// document.write("User Input: "+text+"<br>Upper case: "+capital)


        //            //  Task #11
// var text = prompt("Enter any name/thing?")
// document.write(text[0].toUpperCase() + text.slice(1))


//                      // Task #12
// var num = 35.36;
// var strReplace = num.toString().replace(".", "")
// document.write("Number: "+ num+ "<br>Result: "+ strReplace)



//                         // Task #16
// var university = "U\nn\ni\nv\ne\nr\ns\ni\nt\ny\n o\nf\n K\na\nr\na\nc\nh\ni\n"; 
// var arr = university.split(" ")
// document.write(arr)


//                             // Task #17
// var input = prompt("Enter something")
// var lastChar = input.slice(-1)
// document.write("user input: "+input + "<br>Last  character of input: "+lastChar)


//                          // Task #18
// function countOccurences(string, word) {
//     return string.split(word).length - 1;
//  }
//  var text="the quick brown fox jumps over the lazy dog"; 
//  var count=countOccurences(text,"the");
// document.write("text: "+text+"<br>There are "+count+" occurences of word the.")




//               // __________......Ch#(26-30)......___________


//                             //  Task:01
// var num = prompt("Enter a positive number");
// // num1 = Math.random(0, num);
// document.write(" The number you enter is : " + num );
// var round = Math.round(num);
// document.write( "<br>Round off value is:" + round);
// var floor = Math.floor(num);
// document.write("<br>Floor value :" + floor);
// var ceil = Math.ceil(num);
// document.write("<br> Ceil Value: " +  ceil);

//                             //  Task:02

// var num = prompt("Enter a negative floating point  number");
// // num1 = Math.random(0, num);
// document.write(" <br><br>The number you enter is : " + num );
// var round = Math.round(num);
// document.write( "<br>Round off value is:" + round);
// var floor = Math.floor(num);
// document.write("<br>Floor value :" + floor);
// var ceil = Math.ceil(num);
// document.write("<br> Ceil Value: " +  ceil);

//                             //  Task:03

// var num1 = prompt("Enter a positive or negative number");
// var num2 = Math.abs(num1);
// document.write(" <br><br>The absolute value of number is " +  num1 + " is " + num2);


//                             //  Task:04


// var num3 = Math.floor(Math.random() * 6) + 1 
// document.write("<br><br> Random dice value is " + num3)



//                             //  Task:05
// var num4 = Math.floor(Math.random() * 2) + 1 
// document.write("<br><br>  " + num4);
// if( num4 == 2)
// {

//     document.write("<br> Random coin values is : Head" );
// }
// if(num4 == 1 )
// {

//     document.write("<br> Random coin values is : Tail" );
// }


//                             //  Task:06
// var num3 = Math.floor(Math.random() * 100) + 1 
// document.write("<br><br> Random dice value between 1 and 100 is " + num3)

//                             //  Task:07

// var weight = prompt("Enter your weight ");
// document.write("The weight of user is: " + weight);


//                             //  Task:08
// var num3 = Math.floor(Math.random() * 10) + 1 
// document.write("<br><br>The random number is : " + num3);
// var num4 = prompt("Enter a value from range 1 to 10");
// document.write("<br> The user input number is : " + num4 );
// if(num3 == num4 )
// {
//     alert("Congratulation! You guess the secret number");
// }else
// {
//     alert("Try again");
// }

   //                     // __________......Ch#(31-34)......__________

   // Task#1
// var a = new Date()
// document.write(a)


// Task #2
// var m_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
//                'August', 'September', 'October', 'November', 'December'];
// d = new Date();
// var n = m_names[d.getMonth()]; 
// document.write(n)


// Task #3
// var today = new Date();
//   var day = today.getDay();
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   document.write("Today is : " + dayNames[day] + ".");


// Task #4
// var today = new Date();
// var day = today.getDate();
// var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
// daylist =0;
// if(daylist == daylist[0] || daylist[6]){
//     document.write("Its Funday.")
// }



// Task #6
// var a = new Date()
// document.write(a)
// var b = a.getTime()
// document.write("<br>Elapsed milliseconds since January 1, 1970: " +b)

// var date = new Date( "Jan 1, 1970")
// var datemili = date.getTime()

// var today = new Date()
// var todaymili =today.getTime()


// var diff = (todaymili - datemili);
// var accuage = Math.floor(diff/(1000*60))

// document.write("<br>Elapsed minutes since January 1, 1970:"+accuage)


// Task #7
// var dt = new Date();
//     var h =  dt.getHours(), m = dt.getMinutes();
//     var _time = (h > 12) ? (h-12 + ':' + m +' PM') : (h + ':' + m +' AM');
//     console.log(_time)



// Task #14
// var name = prompt("Enter your name?")
// var today = new Date();
//   var day = today.getDay();
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   document.write("<b>K-Electric Bill</b>"+"<br>Customer Name: "+name+"<br>Today is : " + dayNames[day] + ".");
// var UnitNo = +prompt("Enter number of units:")
// var ChargePerUnit = +prompt("Enter charges per unit:")
// document.write("<br>number of units: "+UnitNo+"<br>charges per unit:"+ChargePerUnit)
// surCharge = 350;
// var NetAmountPayable = UnitNo*ChargePerUnit;
// GrossamountPayable = NetAmountPayable + surCharge;
// document.write("<br>Net Amount Payable(within due date): "+ NetAmountPayable+"<br>Late payment surcharge: "+surCharge+"<br>Gross Amount Payable(after due date): "+GrossamountPayable)


// Task #13
// var dob = new Date(prompt("Enter your DOB", "Aug 31, 1999"))
// var dobmili = dob.getTime()
// var today = new Date()
// var todaymili =today.getTime()
// var diff = (todaymili - dobmili);
// var accuage = Math.floor(diff/(1000*60*60*24*30*12))
// document.write("your age is: "+accuage)


    //                     // __________......Ch#(35-38)......___________
    //     // Task.NO.01
    //     var date=new Date();
    //     document.write("<br>");
    //     document.write(date);

    //     // Task.NO.02

    // function greets(){
    //     var fName=prompt("Enter your first name","First name is : ");
    //     var lName=prompt("Enter your last name","First name is : ");
    //     document.write("<br>");
    //     document.write("Hello " +fName +lName);

    // }

    // greets();



    //    // Task.NO.03 

    // function add(){
    //     var num1 =+prompt("Enter first number");
    //     var num2 =+prompt("Enter second number") ;
    //     var sum=num1+num2;
    //     return sum
    // }

    // var sum=add();
    // document.write("<br>");
    // document.write("The sum of 2 number is : " +sum);



//           // Task.NO.04
     
// function calculator(){
//     var num1 =+prompt("Enter first number");
//     var num2 =+prompt("Enter second number") ;
//     var oprtr=prompt("Enter operator");
//     var res;
//     if(oprtr=="+"){
//        res = num1 + num2; 
//     }
//     else
//     if(oprtr=="-"){
//         res = num1 - num2; 
//      }
//      else
//      if(oprtr=="*"){
//          res = num1 * num2; 
//       }
//       else
//       if(oprtr=="/"){
//           res = num1/num2; 
//        }
//        else
//        if(oprtr=="%"){
//            res = num1 % num2; 
//         }
//         else
//         {
    // document.write("<br>");
//         document.write("You enter wrong input"); 
//          }
//          return res;
// }
 
// var res=calculator();
// document.write("<br>");
// document.write("Output is " +res);


      

    //         // Task.NO.05
    //     var num =prompt("Enter a number you want to square");

    // function square(num){
    //     var res = num*num;
    // document.write("<br>");
    //     document.write("Square of a number is " +res);
    // }
    
    // square(num);



    //            // Task.NO.06
        
    // var num =prompt("Enter a number for factorial");

    // function factorial(num){
    //     var fac=1
    //      for(i=1 ;i<=num;i++)
    //        {
    //            fac=fac*i;
    //        }
    // document.write("<br>");
    //        document.write("Factorial of number is " +fac);
    // }

    // factorial(num);


                
    //          // Task.NO.07

    // function counting(){
    //     var sNum=+prompt("Enter starting number of counting");
    //     var eNum=+prompt("Enter ending number of counting");

    //     for(i=sNum;i<=eNum;i++)
    //     {
    //         document.write("<br>");
    //         document.write(i);
    //     }
    // }

    // counting();


    //            // Task.NO.08
       
    //    var base=2;
    //    var perpendicular=2;        

    // function calculateHypotenuse(base,perpendicular){
    //        var hyp=base+perpendicular;
    //        document.write("<br>");
    //        document.write("The Hypotenuse is " +hyp);
    //        calculateSquare(base,perpendicular);

    //        function  calculateSquare(base,perp,hyp)
    //        {
    //               var hypSquar= (base*base)+(perp*perp);
    //               document.write("<br>");
    //               document.write("The square of Hypotenuse is " +hypSquar)
    //        }
           
    // }

    // calculateHypotenuse(base,perpendicular);





    // //  Task.NO.09  (i)
        
    // function area(w,h){
    //     var area = w*h
    //     document.write("<br>");
    //     document.write("Area of squrae by using Arguments as value is : "+area )
    // }
  
    // area(10,10);

    // //  Task.NO.09  (ii)

    // var width=9;
    // var height=9;

    // function area1(w,h){
    //     var area = w*h
    //     document.write("<br>");
    //     document.write("Area of squrae by using Arguments as variables is "+area )
    // }

    // area1(width,height);



//   //   Task.NO.10
// var str_entry = prompt("Enter string to check plindrome or not");
// function check_Palindrome(str_entry){
//     // Change the string into lower case and remove  all non-alphanumeric characters
//        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
//     // Check whether the string is empty or not
//         if(cstr==="") {
//             document.write("Nothing found!");
//             return false;
//         }
//     // Check if the length of the string is even or odd 
//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {
//     // If the length of the string is 1 then it becomes a palindrome
//             if (cstr.length === 1) {
//             document.write("Entry is a palindrome.");
//                 return true;
//             } else {
//     // If the length of the string is odd ignore middle character
//                 ccount = (cstr.length - 1) / 2;
//             }
//         }
//     // Loop through to check the first character to the last character and then move next
//         for (var x = 0; x < ccount; x++) {
//     // Compare characters and drop them if they do not match 
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 document.write("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         document.write("The entry is a palindrome.");
//         return true;
//     }
//     check_Palindrome(str_entry);


// //   Task.NO.11
// var str = prompt("Enter a string to capital first letter of each word");
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase(str));

// //   Task.NO.12
// var str = prompt("Enter a string to find longest word from the string");
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word(str));


// //   Task.NO.13
// var str = prompt("Enter the string");
// var letter = prompt("Enter letter to find maximum occurance");
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count(str, letter));

// //   Task.NO.14
// var radius = prompt("Enter the radius");
// function calcCircumfrence(radius) {
//     var y = (Math.PI * radius) * 2;
//   document.write("<br>The circumfrence is " + y + ".");
//   }
//   function calcArea(radius) {
//     var x = (Math.PI * radius) * radius;
//   document.write("<br>The area is " + x + ".");
//   }
  
//   calcCircumfrence(radius);
//   calcArea(radius);



//     // **********************Ch 38 to 42*************************
//                     //  *****Task # 01*****

//         var a=prompt("Enter value of number");
//         var b=prompt("Enter value of power");

//     function power(a,b){
//         var res=a;
//          for(var i=1;i<b;i++)
//          {
//              res=res*a;
//          }
//          document.write( "The value of " +a +" raised to " +b +" is " +res);
//     }

//     power(a,b);

    
// document.write("<br>");
// document.write("<br>");

//                         //  *****Task # 02*****
   
//             var year=prompt("Enter a year");

//     function leapYear(year){
//         if((year % 4 && year % 100 && year % 400)==0)
//         {
//             document.write(year +" is leap year. ")
//         }
//         else
//         {
//             document.write(year +" is not leap year. ")
//         }
//     }

//     leapYear(year);
//     document.write("<br>");
//     document.write("<br>");

    //                         //  *****Task # 03*****
    //     var a=+prompt("Enter the side a of triangle");
    //     var b=+prompt("Enter the side b of triangle");
    //     var c=+prompt("Enter the side c of triangle");

    //     function calculate_S(a,b,c){
    //         var s=(a+b+c)/2;
    //         return s;
            
    //     }

    //     function area(a,b,c,s){
    //         var area=(s(s-a)(s-b)(s-c));
    //         document.write("Area is " +area);
    //     }
    //     var s= calculate_S(a,b,c);
    //     area(a,b,c,s);

    // document.write("<br>");
    // document.write("<br>");

//                                 //  *****Task # 04*****
//     main();
//         function main(){
//             var sunject1=+prompt("Enter a marks of subject 1");
//             var sunject2=+prompt("Enter a marks of subject 2");
//             var sunject3=+prompt("Enter a marks of subject 3");
//             var total=+prompt("Enter total marks of 3 subjects")
             
//            var avg= average(sunject1,sunject2,sunject3)
//             document.write("Average of 3 subjects is " +avg )
//             document.write("<br>");
//             var percnt= percentage(sunject1,sunject2,sunject3,total)
//             document.write("Percenatge of 3 subjects is " +percnt +"%" )
//         }

//         function average(sunject1,sunject2,sunject3){
//                   var avg=(sunject1+sunject2+sunject3)/3;
//                   return avg;          
//         }

//         function percentage(sunject1,sunject2,sunject3,total){
//             var totalGainmarks=sunject1+sunject2+sunject3;
//             var percnt=((totalGainmarks/total)*100);
//             return percnt;

//         }
//   document.write("<br>");
//   document.write("<br>");

//                                         //  *****Task # 05*****


//                                         //  *****Task # 06****

// var string = "hello friends...whats going on ?";
// var vowel = ["a", "e", "i", "o", "u"];

// String.prototype.character = function name() {
//     var i;
//     for ( i = 0; i < vowel.length; i++) {
//         var secondLoop = string.length;
//         for ( j = 0; j < secondLoop; j++) {
//             if (vowel[i] == string.charAt(j)) {
//                 string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
//             }

//         }
//     }
// }

// string.character();
// console.log(string);


//                                         //  *****Task # 07****

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
//     return count
//   }
//   console.log(findOccurrences());


        







               // **********************Ch 43 to 48*************************
                               //  *****Task # 01*****
                               function showalert(){
                                alert("Welcome to my mobile!");
                           }
                      
                      
                      
                      //                                //  *****Task # 02*****    
                      //      function showMsg(){
                      //          alert("Thanks for purchasing a phone for us")
                      //      }
                      
                      
                      
                           
                      //                                  //  *****Task # 03***** 
                      //      var index,table=document.getElementById('table');
                      //      for(var i=0;i<table.rows.length ;i++)
                      //      {
                      //          table.rows[i].cells[2].onclick=function()
                      //          {
                      //              index=this.parentElement.rowIndex;
                      //              table.deleteRow(index);
                      
                      //          }
                      //      }
                                         
                      //                                  //  *****Task # 04*****
                                                       
                      //     function newImage(){
                      //         document.getElementById('img').src="images/cat2.jpg";
                      //     }
                      
                      //     function oldImage(){
                      //         document.getElementById('img').src="images/cat1.jpg";
                      //     }
                      
                      
                      //                                      //  *****Task # 05*****
                      //    click=0;
                      //     function increaseValue(){
                      //         click += 1;
                      //         var value=document.getElementById('count').innerHTML=click;
                             
                      //     }
                      
                      //     function decreaseValue(){
                      //         click -= 1;
                      //         var value=document.getElementById('count').innerHTML=click;
                             
                      //     }
                      
                      //             // **********************Ch 52 to 57*************************
                      //                                //  *****Task # 01*****
                      //         function showImage(e){
                      //         var modalImage=document.getElementById("modalImage");
                      //         modalImage.src=e.src;
                                                  
                      //          }
                      
                      //                              //  *****Task # 02*****
                                                                                
                      //         function zoomIn() {
                      //         document.getElementById("myP").style.fontSize = "40px";
                      //         }
                      //         function zoomOut() {
                      //         document.getElementById("myP").style.fontSize = "20px";
                      //         }
                                                  
                      
                      //                // **********************Ch 49 to 52*************************
                      //                function showInput() {
                      //                 document.getElementById('display').innerHTML = 
                      //                             document.getElementById("user_data").value;
                                                 
                      //             }
                      //              function expandLoris() {
                      //                  var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which" +
                      //                " make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of"+
                      //                 "distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several" +
                      //                " adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time." +
                      //                " Slow lorises have a toxic bite, a rare trait among mammals.";
                                  
                      //                  document.getElementById("slowLoris").innerHTML = expandedParagraph;
                      //                  }
                                  
                                  
                                  
                      //                  function edit_row(no)
                      //                  {
                      //                   document.getElementById("edit_button"+no).style.display="none";
                      //                   document.getElementById("save_button"+no).style.display="block";
                                           
                      //                   var rollno =document.getElementById("rollno_row"+no);
                      //                   var name=document.getElementById("name_row"+no);
                      //                   var country=document.getElementById("country_row"+no);
                                           
                      //                   var rollno_data=rollno.innerHTML;
                      //                   var name_data=name.innerHTML;
                      //                   var country_data=country.innerHTML;
                                           
                      //                   rollno.innerHTML="<input type='text' id='rollno_text"+no+"' value='"+rollno_data+"'>";
                      //                   name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
                      //                   country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
                      //                  }
                                       
                      //                  function save_row(no)
                      //                  {
                      //                   var rollno_val=document.getElementById("rollno_text"+no).value;
                      //                   var name_val=document.getElementById("name_text"+no).value;
                      //                   var country_val=document.getElementById("country_text"+no).value;
                                       
                      //                   document.getElementById("rollno_row"+no).innerHTML=rollno_val;
                      //                   document.getElementById("name_row"+no).innerHTML=name_val;
                      //                   document.getElementById("country_row"+no).innerHTML=country_val;
                                       
                      //                   document.getElementById("edit_button"+no).style.display="block";
                      //                   document.getElementById("save_button"+no).style.display="none";
                      //                  }
                                       
                      //                  function delete_row(no)
                      //                  {
                      //                   document.getElementById("row"+no+"").outerHTML="";
                      //                  }
                                       
                      //                  function add_row()
                      //                  {
                      //                   var new_rollno=document.getElementById("new_rollno").value;
                      //                   var new_name=document.getElementById("new_name").value;
                      //                   var new_country=document.getElementById("new_country").value;
                                           
                      //                   var table=document.getElementById("data_table");
                      //                   var table_len=(table.rows.length)-1;
                      //                   var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='rollno_row"+table_len+"'>"+new_rollno+"</td><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
                                       
                      //                   document.getElementById("new_rollno").value="";
                      //                   document.getElementById("new_name").value="";
                      //                   document.getElementById("new_country").value="";
                      //                  }
                           
                      
                      
                      
                      //                    // **********************Ch 58 to 67*************************
                      //                                // ******Part 1 *******
                      //                                //  *****Task # 01*****
                                                  
                      //     var content = document.getElementById("main-content")
                      
                      //                               //  *****Task # 02*****
                      
                      //      var content = document.getElementById("main-content")
                      //      content.childNodes;
                      //      console.log(content);
                      
                      //                             //  *****Task # 03*****
                      //     var main = document.getElementsByClassName("render")
                      //     document.write(main[0].innerHTML +"<br>")
                      //     document.write(main[1].innerHTML +"<br>")
                      //     document.write(main[2].innerHTML +"<br>")
                      //     document.write(main[3].innerHTML +"<br>")
                      //     document.write(main[4].innerHTML +"<br>")
                      
                      //                            //  *****Task # 04*****
                      //     document.getElementById("first-name").value = "Hafsa";
                      
                      
                      //                               //  *****Task # 05*****
                      //     document.getElementById("last-name").value = "Gulzar"
                      //     document.getElementById("email").value = "hafsagulzar109@gmail.com"
                        
                          
                      //                                    // ******Part 2 *******
                      //                                //  *****Task # 01*****
                      //     var type = document.getElementById("form-content").nodeType;
                      //     console.log(type)
                      
                      //                               //  *****Task # 02*****
                      
                      //     var type = document.getElementById("lastName").nodeType;
                      //     console.log(type)
                      //     var child = document.getElementById("lastName").childNodes;
                      //     console.log(child)
                      
                      //                                //  *****Task # 04*****
                      //     var first = document.getElementById("main-content")
                      //     var firstChild = first.firstChild;
                      //     console.log(firstChild)
                      
                      //     var first = document.getElementById("main-content")
                      //     var firstChild = first.firstChild;
                      //     console.log(firstChild)
                      
                      //                                //  *****Task # 05*****
                      
                      // var next = document.getElementById("lastName");
                      // nextElement = next.nextSibling;
                      // console.log(nextElement)
                      
                      //  var firstEl = document.getElementById("lastName");
                      //  var nonexistentEl = firstEl.previousSibling;
                      //  console.log(nonexistentEl)
                      
                      
                      
                      
                      //                                //  *****Task # 06*****
                      
                         
                      // var node = document.getElementById("email")
                      //  var pNode = node.parentNode;
                      //  console.log(pNode)
                      
                      // var node = document.getElementById("email")
                      //  var pNode = node.nodeType;
                      //  console.log(pNode)