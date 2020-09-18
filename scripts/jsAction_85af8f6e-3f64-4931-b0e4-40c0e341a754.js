// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var up = context.variableManager.getValue("unit_price");
if (up==null) {
        context.fail("Variable 'myVar' not found");
}
var st = context.variableManager.getValue("SubTotal");
if (up==null) {
        context.fail("Variable 'myVar' not found");
}


// Do some computation using the methods
// you defined in the JS Library
var computedValue = parseInt(up)+parseInt(st);
logger.debug("La somme des deux valeur est égale à :"+computedValue);

// Inject the computed value in a runtime variable
context.variableManager.setValue("somme",computedValue);