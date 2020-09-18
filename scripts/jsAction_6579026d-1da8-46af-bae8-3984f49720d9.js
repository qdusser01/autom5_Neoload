// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var myVar = context.variableManager.getValue("stock");
if (myVar==null) {
        context.fail("Variable 'myVar' not found");
}

logger.debug("le stock est de : "+myVar);

