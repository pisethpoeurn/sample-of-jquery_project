$(document).ready(function(){
    $('#recipe').on('change',()=>{
        var fruit = $('#recipe').val();
        choose(fruit);
    });
    requestApi();
});

////// RequestApi ///
var requestApi = () => {
    $.ajax({
        dataType: 'json',
        url: getUrl(),
        success:(data) => getrecipe(data),
        error : () => getError(),
        
    })
}

//// get url 
var getUrl = () => {
    url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}

/// get Error
var getError = () => console.log("Error")

/// get recipe 
var getrecipe = (myData) => {
    myData.recipes.forEach(element => {
        /// get recipe : element.name......
        getIngredient(element.ingredients);
    });
};

/// get Ingredient 
var getIngredient = (ing) => {
    ing.forEach( item => {
        computeHtml(item);
    });
}

/// compute to html 
var computeHtml = (display) => {
    var compute = "";
    compute +=`
    <tr>
        <td> <img src="${display.iconUrl}" width="100"></td>
        <td> ${display.name}</td>
        <td> ${display.quanity}</td>
        <td> ${display.unit[0]}</td>
    </tr>
    `;
    resultOut(compute);
}

/// result out 
var resultOut = (out) => {
    $("#ingredient").append(out);
}

///// Switch case 
var choose = (fruit) =>{
    switch(parseInt(fruit)){
        case 1:
            getApple()
            break;
        case 2:
           getBanana();
            break;
        case 3:
            getCoconut();
            break;
        default:("Cannot get data");
    }
}

///// Get Apple 
var getApple = () => {
    var apple = " I love Apple";
    printOut(apple);
}

///// Get Banana 
var getBanana = () => {
    var banana = " I love banana";
    printOut(banana);
}

///// Get Coconut 
var getCoconut = () => {
    var coconut = " I love coconut";
    printOut(coconut);
}

// ///Print out to html
var printOut = (out) =>{
    $("#done").html(out);
}