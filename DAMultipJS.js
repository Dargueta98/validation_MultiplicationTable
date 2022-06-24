
 /*
File: DAMultipStyle.css
GUI Assignment: Making validation, sliders and tabs using validator jquery and jquery ui for a dynamic Multiplication table
Daury Argueta, UMass Lowell Computer Science, daury_argueta@student.uml.edu 

purpose: Had to write javascript jquery, html and css inorder to display a dynamic Multiplication table. Had to
create a table completely dynamically based on parameters entered in an HTML form.For this assignment we are required
 to do the validation using the jQuery Validation plugin. This plugin will allow you to do more powerful validation and 
 make the application more responsive to users. Then, I had to explore yet another JavaScript library called the
 jQuert user interface (ui) library to see its similarities and differences as compared to the library that we have
  already looked at: the jQuery Validator plugin.

Copyright (c) 2021 by Daury. All rights reserved. May be freely copied or excerpted for educational 
purposes with credit to the author.

Updated by Daury on June 23, 2022 at 11:00 PM
  src: Sources linked are commented in the code showing where I used what.
*/
 document.addEventListener('DOMContentLoaded', function() {
        var tableCount = false;
        document.getElementById("generate").addEventListener("click", generateTable);
    
        function generateTable () 
        {
            
            /*
            Putting this count statement inorder to keep the same page when putting different values for the dyanmic multiplication table.
            without a count and remove table, we will get different tables scattered around the webpage. If we keep track of the count, once 
            a count start a we remove the table, we will be able to erase the previous table and display the new one.
            */
            if (tableCount)
            {
                removeTable();
            };
            /*
             //Error Message if a value greater than 50 is inserted for the x min
        if(parseInt(document.getElementById("xAxisStart").value) < -50 || document.getElementById("xAxisStart").value > 50)
        {
            errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert a number between -50 and 50 for the x Min";
            document.getElementById("xAxisStart").value = "";
            removeTable();
        } 
        //Error Message if a value greater than 50 is inserted for the x max
        else if(parseInt(document.getElementById("xAxisEnd").value) < -50 || document.getElementById("xAxisEnd").value > 50)
        {
            errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert a number between -50 and 50 for the x Max";
            removeTable();
        } 
        //Error Message if a value greater than 50 is inserted for the y min
        else if(parseInt(document.getElementById("yAxisStart").value) < -50 || document.getElementById("yAxisStart").value > 50) 
        {
            errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert a number between -50 and 50 for the y Min";
            removeTable();
        } 
        //Error Message if a value greater than 50 is inserted for the y max
        else if(parseInt(document.getElementById("yAxisEnd").value) < -50 || document.getElementById("yAxisEnd").value > 50) 
        {
            errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert a number between -50 and 50 for the y Max";
            removeTable();
        } 
       
       //In JavaScript, NaN is short for "Not-a-Number". The Number.isNaN() method returns true if the value is NaN, and the type is a Number. if 
       //it is anything else other than a number, it will return false. the isNaN() function determines whether a value is NaN or not.
    
       //src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
    
        //Error Message if there is a wrong input for VALUE of the start of the X axis.
        else if(isNaN(parseInt(document.getElementById("xAxisStart").value)))
        {
            errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert correct val for X min!</span>";
            removeTable();
        } 
        //Error Message if there is a wrong input for VALUE of the end of the X axis.
        else if(isNaN(parseInt(document.getElementById("xAxisEnd").value))) 
        {
            errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert correct val for X max!</span>";
            removeTable();
        } 
        //Error Message if there is a wrong input for VALUE of the start of the Y axis.
        else if(isNaN(parseInt(document.getElementById("yAxisStart").value)))
        {
            errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert correct val for Y min!</span>";
            removeTable();
        } 
        //Error Message if there is a wrong input for VALUE of the end of the Y axis.
        else if(isNaN(parseInt(document.getElementById("yAxisEnd").value)))
        {
            errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert correct val for Y max!</span>";
            removeTable();
        }
        else 
        {
            errorMessage.innerHTML = "";
        }
        */
            //document.createElement() method creates the HTML element specified by tagName
            let div = document.createElement('div'); //will work with all what is within the div which is the user input choices box.??
            /*
            div.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element.
            This can then be used to manipulate the class list. src: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
    
            Although the classList property itself is read-only, you can modify its associated DOMTokenList using the add(). with add(),
            The add() method appends a new element with a specified value to the end of a Set object. here the new element is 'box'
            */
           div.classList.add('tableScoller');
            /*
            The JavaScript appendChild() is a method of the Node interface, used to append nodes (typically elements) at 
            the end of a specified parent node. It can be executed on existing child nodes or by creating new elements.
            src: https://flexiple.com/javascript/javascript-appendchild
            */
            document.body.appendChild(div);
            var table = document.createElement("table");
            document.body.appendChild(table);
    
            div.appendChild(table);
    
            /*
            Here I am declaring the rows and columns by selecting the value that the user inputs in the html.
            What parseInt does is that it The parseInt() function parses a string argument and returns an integer, since
            we are accepting strings, we convert it to a number. then .value represents the value of the value attribute 
            of the option element.
            */
            var rowBegin = parseInt(document.getElementById("xAxisStart").value);
            var rowEnd = parseInt(document.getElementById("xAxisEnd").value);
            var columnBegin = parseInt(document.getElementById("yAxisStart").value);
            var columnEnd = parseInt(document.getElementById("yAxisEnd").value);
            
            //xMin, xMax, Ymin, Ymax
            createTable(rowBegin, rowEnd, columnBegin, columnEnd);
    
            function createTable(rowBegin, rowEnd, columnBegin, columnEnd) {
                var i = columnBegin - 1;
                var j = rowBegin - 1;
                while (i < columnEnd + 1) {
                  var row = document.createElement("tr");
                  var NumofRow = table.appendChild(row);
                  for (var j = rowBegin - 1; j < rowEnd + 1; j++) {
                    var data = document.createElement("td");
                    if (i == columnBegin - 1 && j == rowBegin - 1) {
                      var gridValue = "";
                      data.textContent = gridValue;
                      data.style.cssText = 'background-Color:plum ; color: blue; position: sticky; left: 0'
                    } else if (j == rowBegin - 1) {
                      var gridValue = i;
                      data.textContent = gridValue;
                      data.style.cssText = 'background-Color:plum ; color: blue; position: sticky; left: 0'
                    } else if (i == columnBegin - 1) {
                      var gridValue = j;
                      data.textContent = gridValue;
                      data.style.cssText = 'background-Color:plum ; color: blue; position: sticky; left: 0'
                    } else {
                      var gridValue = i * j;
                      data.textContent = gridValue;
                    }
                    NumofRow.appendChild(data);
                  }
          
                  i++;
                }
              }
            tableCount = true; //Table Counter
        }
        /*
        Function that will not allow the repeating of tables in the website. It will delete the table when theres a error or already a table in.
        */
        function removeTable () 
        {
            var parent = document.body;
            var child = document.getElementsByClassName("tableScoller")[0];
            parent.removeChild(child);
        }
    });
    
    /*
    https://jqueryvalidation.org/documentation/
    */
    $(document).ready(function() {
        /*
         I used https://jsfiddle.net/tUPQc/2/ for this part.
        */
            $.validator.addMethod("greaterThan", function (value, element, param) {
                var $minValue = $(param);
                if (this.settings.onfocusout) {
                    $minValue.off(".validate-greaterThan").on("blur.validate-greaterThan", function () {
                        $(element).valid();
                    });
                } 
                return parseInt(value) > parseInt($minValue.val());
                
        }, " Max value must be greater than min value");
    
        $.validator.addMethod("lessThan",
        function (value, element, param) {
            var $minValue = $(param);
            if (this.settings.onfocusout) {
                $minValue.off(".validate-greaterThan").on("blur.validate-greaterThan", function () {
                    $(element).valid();
                });
            } 
            return parseInt(value) < parseInt($minValue.val());
            
    }, " Min value must be less than than Max value");
    //https://www.tutorialspoint.com/How-to-validate-a-form-using-jQuery
            $("#userInputs").validate({
            rules: {
                xAxisStart: {
                    required: true,
                    number:true,
                    min: -50,
                    max: 50,
                    lessThan:"xAxisEnd",
                },
                xAxisEnd: {
                    required: true,
                    number: true,
                    min: -50,
                    max: 50,
                    greaterThan:"#xAxisStart",
                },
                yAxisStart: {
                    required: true,
                    number: true,
                    min: -50,
                    max: 50,
                    lessThan:"yAxisEnd",
                },
                yAxisEnd: {
                    required: true,
                    number: true,
                    min: -50,
                    max: 50,
                    greaterThan:"#yAxisStart",
                }
            },
            messages: {
                xAxisStart: {
                    required: "It is required that you input a number for x Axis Min",
                    number: "You did not enter a valid number.<br/>Enter a number between -50 and 50 for x Axis Min value.",
                    min: "You DID NOT place a correct x minimum value. This number is TOO LOW! Please insert a number between -50 and 50 for the x max",
                    max: "You DID NOT place a correct x minimum value. This number is TOO HIGH! Please insert a number between -50 and 50 for the x max", 
                    lessThan:"x axis min must be less than x axis Max",
                },
                xAxisEnd: {
                    required: "It is required that you input a number for x Axis Max",
                    number: " you did not enter a valid number.<br/>Enter a number between -50 and 50 for x Axis Max value.",
                    min: "You DID NOT place a correct x maximum value. This number is TOO LOW! Please insert a number between -50 and 50 for the x max",
                    max: "You DID NOT place a correct x maximum value. This number is TOO HIGH! Please insert a number between -50 and 50 for the x max",
                    greaterThan:"x axis max must be greater than x axis Min",
                },
                yAxisStart: {
                    required: "It is required that you input a number for y Axis Min",
                    number: " you did not enter a valid number.<br/>Enter a number between -50 and 50 for y Axis Min value.",
                    min: "You DID NOT place a correct y maximum value. This number is TOO LOW! Please insert a number between -50 and 50 for the x max",
                    max: "You DID NOT place a correct y maximum value. This number is TOO HIGH! Please insert a number between -50 and 50 for the x max",
                    lessThan:"y axis min must be less than x axis Max",
                },
                yAxisEnd: {
                    required: "It is required that you input a number for y Axis Max",
                    number: " you did not enter a valid number.<br/>Enter a number between -50 and 50 for y Axis Max value.",
                    min: "You DID NOT place a correct y maximum value. This number is TOO LOW! Please insert a number between -50 and 50 for the y max",
                    max: "You DID NOT place a correct y maximum value. This number is TOO HIGH! Please insert a number between -50 and 50 for the y max",
                    greaterThan:"y axis max must be greater than y axis Min",
                }
            },
            submitHandler:function(form){
                form.submit();
            }
        });
    });
