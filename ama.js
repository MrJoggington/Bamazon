var inquirer = require("inquirer")
var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "AllenS#1107",
    database: "bamazon"
});
connection.connect(function (err) {
    if (err) throw err;
    bam();
})
function bam() {
    inquirer.prompt([
        {
            type: "list",
            message: "BAM! what department are you buying from today?",
            choices: ['HOME', 'AUTO', 'FOOD', 'BEAUTY/HEALTHCARE', 'MANAGER OPTIONS'],
            name: "firstL"
        }
    ]).then(function (res) {
        if (res.firstL === 'HOME') {
            homeStorefront();
        } else if (res.firstL === 'AUTO') {
            autoStorefront();
        } else if (res.firstL === 'FOOD') {
            foodStorefront();
        } else if (res.firstL === 'BEAUTY/HEALTHCARE') {
            healthStorefront();
        } else if (res.firstL === 'MANAGER OPTIONS') {
            // devPortal();
        }
    })
}
function homeStorefront() {
    connection.query("SELECT * FROM products WHERE department_name= 'Home'", function (err, results) {
        if (err) throw err;
        inquirer.prompt([
            {
                name: "homeStr",
                type: "rawlist",
                choices: function () {
                    var homeArray = [];
                    for (var i = 0; i < results.length; i++) {
                        homeArray.push(results[i].product_name);
                    }
                    return homeArray
                },
                message: "What would you like to buy today?"
            }
        ])
            .then(function (answer) {
                for (var i = 0; i < results.length; i++) {
                    console.log(i, results[i])
                    if (results[i].product_name === answer.homeStr) {
                        connection.query(
                            "UPDATE products SET ? WHERE ?",
                            [
                                {
                                    stock_quantity: 199
                                },
                                {
                                    item_id: answer.homeStr
                                }
                            ],
                            function (error) {
                                if (error) throw err;

                                console.log("purchase successful")
                            }

                        )
                    }
                }
                bam()
            })
    })

}
function autoStorefront() {
    connection.query("SELECT * FROM products WHERE department_name= 'Auto'", function (err, results) {
        if (err) throw err;
        inquirer.prompt([
            {
                name: "autoStr",
                type: "rawlist",
                choices: function () {
                    var autoArray = [];
                    for (var i = 0; i < results.length; i++) {
                        autoArray.push(results[i].product_name);
                    }
                    return autoArray
                },
                message: "What would you like to buy today?"
            }
        ])
            .then(function (answer) {
                for (var i = 0; i < results.length; i++) {
                    console.log(i, results[i])
                    if (results[i].product_name === answer.autoStr) {
                        connection.query(
                            "UPDATE products SET ? WHERE ?",
                            [
                                {
                                    stock_quantity: 199
                                },
                                {
                                    item_id: answer.autoStr.item_id
                                }
                            ],
                            function (error) {
                                if (error) throw err;

                                console.log("purchase successful")
                            }

                        )
                    }
                }
                bam()
            })
    })
}
function foodStorefront() {
    connection.query("SELECT * FROM products WHERE department_name= 'Food'", function (err, results) {
        if (err) throw err;
        inquirer.prompt([
            {
                name: "foodStr",
                type: "rawlist",
                choices: function () {
                    var foodArray = [];
                    for (var i = 0; i < results.length; i++) {
                        foodArray.push(results[i].product_name);
                    }
                    return foodArray
                },
                message: "What would you like to buy today?"
            }
        ])
            .then(function (answer) {
                for (var i = 0; i < results.length; i++) {
                    console.log(i, results[i])
                    if (results[i].product_name === answer.foodStr) {
                        connection.query(
                            "UPDATE products SET ? WHERE ?",
                            [
                                {
                                    stock_quantity: 199
                                },
                                {
                                    item_id: answer.foodStr.item_id
                                }
                            ],
                            function (error) {
                                if (error) throw err;

                                console.log("purchase successful")
                            }

                        )
                    }
                }
                bam()
            })
    })
}
function healthStorefront() {
    connection.query("SELECT * FROM products WHERE department_name= 'Health'", function (err, results) {
        if (err) throw err;
        inquirer.prompt([
            {
                name: "healthStr",
                type: "rawlist",
                choices: function () {
                    var healthArray = [];
                    for (var i = 0; i < results.length; i++) {
                        healthArray.push(results[i].product_name);
                    }
                    return healthArray
                },
                message: "What would you like to buy today?"
            }
        ])
            .then(function (answer) {
                for (var i = 0; i < results.length; i++) {
                    console.log(i, results[i])
                    if (results[i].product_name === answer.healthStr) {
                        connection.query(
                            "UPDATE products SET ? WHERE ?",
                            [
                                {
                                    stock_quantity: 199
                                },
                                {
                                    item_id: answer.healthStr.item_id
                                }
                            ],
                            function (error) {
                                if (error) throw err;

                                console.log("purchase successful")
                            }

                        )
                    }
                }
                bam()
            })
    })
}
// function devPortal() {

// }