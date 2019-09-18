var inquirer = require("inquirer")
var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Smitty#1",
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
                    return homeArray;
                },
                message: "What would you like to buy today?"
            }
        ])
            .then(function (answer) {
                for (var i = 0; i < results.length; i++) {
                    if (results[i].product_name == answer.homeStr) {
                        var product = answer.homeStr;
                        var id = i
                        inquirer.prompt(
                            {
                                name: "stuff",
                                type: "number",
                                message: "how many you want to buy",

                            }
                        ).then(function (ans) {
                            if ((results[id].stock_quantity - ans.stuff) > 0) {
                                connection.query("UPDATE products SET stock_quantity='" + (results[id].stock_quantity - ans.stuff) + "'WHERE product_name='" + product + "'", function (err, res2) {
                                    console.log("PRODUCT BOUGHT")
                                    console.log(results)

                                    bam()
                                })
                            }

                        })

                    }
                }

            })
    })
}
function foodStorefront() {
    connection.query("SELECT * FROM products WHERE department_name= 'Food'", function (err, results) {
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
                    return homeArray;
                },
                message: "What would you like to buy today?"
            }
        ])
            .then(function (answer) {
                for (var i = 0; i < results.length; i++) {
                    if (results[i].product_name == answer.homeStr) {
                        var product = answer.homeStr;
                        var id = i
                        inquirer.prompt(
                            {
                                name: "stuff",
                                type: "number",
                                message: "how many you want to buy",

                            }
                        ).then(function (ans) {
                            if ((results[id].stock_quantity - ans.stuff) > 0) {
                                connection.query("UPDATE products SET stock_quantity=" + (results[id].stock_quantity - ans.stuff) + "WHERE product_name=" + product, function (err, res2) {
                                    console.log("PRODUCT BOUGHT")
                                    console.log(results)

                                    bam()
                                })
                            }

                        })

                    }
                }

            })
    })
}
function autoStorefront() {
    connection.query("SELECT * FROM products WHERE department_name= 'auto'", function (err, results) {
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
                    return homeArray;
                },
                message: "What would you like to buy today?"
            }
        ])
            .then(function (answer) {
                for (var i = 0; i < results.length; i++) {
                    if (results[i].product_name == answer.homeStr) {
                        var product = answer.homeStr;
                        var id = i
                        inquirer.prompt(
                            {
                                name: "stuff",
                                type: "number",
                                message: "how many you want to buy",

                            }
                        ).then(function (ans) {
                            if ((results[id].stock_quantity - ans.stuff) > 0) {
                                connection.query("UPDATE products SET stock_quantity=" + (results[id].stock_quantity - ans.stuff) + "WHERE product_name=" + product, function (err, res2) {
                                    console.log("PRODUCT BOUGHT")
                                    console.log(results)

                                    bam()
                                })
                            }

                        })

                    }
                }

            })
    })
}
function healthStorefront() {
    connection.query("SELECT * FROM products WHERE department_name= 'Health'", function (err, results) {
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
                    return homeArray;
                },
                message: "What would you like to buy today?"
            }
        ])
            .then(function (answer) {
                for (var i = 0; i < results.length; i++) {
                    if (results[i].product_name == answer.homeStr) {
                        var product = answer.homeStr;
                        var id = i
                        inquirer.prompt(
                            {
                                name: "stuff",
                                type: "number",
                                message: "how many you want to buy",

                            }
                        ).then(function (ans) {
                            if ((results[id].stock_quantity - ans.stuff) > 0) {
                                connection.query("UPDATE products SET stock_quantity=" + (results[id].stock_quantity - ans.stuff) + "WHERE product_name=" + product, function (err, res2) {
                                    console.log("PRODUCT BOUGHT")
                                    console.log(results)

                                    bam()
                                })
                            }

                        })

                    }
                }

            })
    })
}
// function devPortal() {

// }