
// Define the structure of a grocery item.
export type Item = { name: string; price: number };

// Create the grocery list.
const ITEMS: Item[] = [

  // Add paper towels costing $21.99.
  { name: 'paper towels', price: 21.99 },

  // Add a sandwich costing $8.75.
  { name: 'sandwich', price: 8.75 },

  // Add eggs costing $6.75.
  { name: 'eggs', price: 6.75 },

  // Add avocado oil costing $10.00.
  { name: 'avocado oil', price: 10.0 },
];

// Create a function to add grocery items.
export function addItem(name: string, price: number): void {

  // Check for an empty name, invalid price, or negative price.
  if (!name.trim() || !Number.isFinite(price) || price < 0) {

    // Reject invalid items with an error message.
    throw new Error('Item name must be nonempty and price must be nonnegative.');

  } // End validation.

  // Add the new item to the grocery list.
  ITEMS.push({ name, price });

} // End the addItem function.

// Create a function to delete grocery items.
export function deleteItem(name: string): Item[] {

  // Find the position of the item by its name.
  const idx = ITEMS.findIndex((item) => item.name === name);

  // Remove the item only if it exists.
  if (idx !== -1) ITEMS.splice(idx, 1);

  // Return the updated grocery list.
  return ITEMS;

} // End the deleteItem function.

// Create a function to calculate the subtotal.
export function total(): number {

  // Add all item prices together without tax.
  return ITEMS.reduce((sum, item) => sum + item.price, 0);

} // End the total function.

// Use a decimal tax rate, such as 0.10 for 10%.
export function tax(taxRate: number): number {

  // Check that the tax rate is valid and nonnegative.
  if (!Number.isFinite(taxRate) || taxRate < 0) throw new Error('Invalid tax rate');

  // Calculate the tax amount from the subtotal.
  return total() * taxRate;

} // End the tax function.

// Create a function to print the grocery receipt.
export function printReceipt(taxRate: number): void {

  // Calculate the subtotal before tax.
  const subtotal = total();

  // Calculate the tax amount.
  const taxAmount = tax(taxRate);

  // Print the top receipt separator.
  console.log('************************');

  // Go through each item in the grocery list.
  for (const item of ITEMS) {

    // Print the item name and price with two decimal places.
    console.log(`${item.name} : $${item.price.toFixed(2)}`);

  } // End the item loop.

  // Print the bottom receipt separator.
  console.log('************************');

  // Display the subtotal without tax.
  console.log(`Subtotal: $${subtotal.toFixed(2)}`);

  // Display the calculated tax amount.
  console.log(`Tax: $${taxAmount.toFixed(2)}`);

  // Display the final total including tax.
  console.log(`Total: $${(subtotal + taxAmount).toFixed(2)}`);

} // End the printReceipt function.
