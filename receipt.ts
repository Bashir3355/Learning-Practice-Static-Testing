
// Requirements
// Items can be added to the grocery list.
// Items can be deleted from the grocery list.
// The subtotal is calculated without tax.
// The total is calculated with tax.
// A receipt can be printed.

// Inventory
const ITEMS = [
  { name: "paper towels", price: 21.99 }, // Item
  { name: "sandwich", price: 8.75 },       // Item
  { name: "eggs", price: 6.75 },           // Item
  ,                                       // ERROR: Syntax
  { name: "avocado oil", price: 10.0 },    // Item
];

// Addition
export function addItem(name: string, price: number) {
  // ERROR: Syntax
  const newItem = { "name" = name, "price" = price };

  ITEMS.push(newItem); // Insert
}

// Deletion
export function deleteItem(name: string) {
  // ERROR: Lookup
  const idx = ITEMS.indexOf("name");

  // ERROR: Deletion
  ITEMS.pop();

  return ITEMS; // Return
}

// Subtotal
export function total() {
  // ERROR: Loop
  for (const i of 3) {

    // ERROR: Variable
    total = total + ITEMS[i]["price"];
  }

  return total; // Return
}

// Tax
export function tax(taxRate: number) {
  // ERROR: Calculation
  const tax = total() + taxRate;

  return tax; // Return
}

// Receipt
export function printReceipt(taxRate: number) {

  // Header: Prints the top decorative separator
  console.log("************************");

  // ERROR: Indexing
  for (const i of ITEMS) {

    // ERROR: Properties
    console.log('${ITEMS[i][name]} : $${ITEMS[i][price]}}');
  }

  // Footer: Prints the bottom decorative separator
  console.log("************************");

  // ERROR: Function
  console.log(`Subtotal: $${String(total)}`);

  // ERROR: Formatting
  console.log(`Tax: $ + ${String(taxRate)}");

  // ERROR: Syntax
  console.log(`Total: $ + ${tax(String(taxRate))}");
}
