
// Import the functions from the corrected receipt file.
import { addItem, deleteItem, total, tax, printReceipt } from './fixed_receipt';// Group all tests for the grocery receipt program.
describe('Grocery receipt', () => {

  // Start a test for the subtotal and tax calculations.
  test('happy path: initial subtotal and 10% tax', () => {

    // Check that the subtotal equals $47.49.
    expect(total()).toBeCloseTo(47.49, 2);

    // Check that 10% tax equals $4.749.
    expect(tax(0.1)).toBeCloseTo(4.749, 3);

  }); // End the first test.

  // Start a test for adding and deleting an item.
  test('happy path: adding and deleting a named item', () => {

    // Save the subtotal before adding an item.
    const before = total();

    // Add an apple costing $2.50.
    addItem('test apple', 2.5);

    // Check that the subtotal increased by $2.50.
    expect(total()).toBeCloseTo(before + 2.5, 2);

    // Remove the apple from the grocery list.
    deleteItem('test apple');

    // Check that the subtotal returned to its original value.
    expect(total()).toBeCloseTo(before, 2);

  }); // End the second test.

  // Start a test for rejecting negative prices.
  test('unhappy path: reject a negative price', () => {

    // Check that adding an item with a negative price throws an error.
    expect(() => addItem('bad', -1)).toThrow();

  }); // End the third test.

  // Start a test for zero-price items and zero tax.
  test('edge case: zero-price item and zero tax', () => {

    // Save the subtotal before adding a free item.
    const before = total();

    // Add an item that costs nothing.
    addItem('free sample', 0);

    // Check that the subtotal stays the same.
    expect(total()).toBeCloseTo(before, 2);

    // Check that a zero tax rate produces zero tax.
    expect(tax(0)).toBe(0);

    // Remove the free item after testing.
    deleteItem('free sample');

  }); // End the fourth test.

  // Start a test for deleting an item that does not exist.
  test('unhappy path: deleting a missing item changes nothing', () => {

    // Save the subtotal before attempting deletion.
    const before = total();

    // Try to delete an item that is not in the list.
    deleteItem('missing-item');

    // Check that the subtotal has not changed.
    expect(total()).toBeCloseTo(before, 2);

  }); // End the fifth test.

  // Start a test for checking the printed receipt.
  test('receipt displays subtotal, tax and total', () => {

    // Capture console output without displaying it.
    const log = jest.spyOn(console, 'log').mockImplementation(() => {});

    // Start a protected section for testing.
    try {

      // Generate a receipt using a 10% tax rate.
      printReceipt(0.1);

      // Combine all captured console messages into one string.
      const output = log.mock.calls.map((call) => call.join(' ')).join('\n');

      // Check that the receipt displays the correct subtotal.
      expect(output).toContain('Subtotal: $47.49');

      // Check that the receipt displays the correct tax amount.
      expect(output).toContain('Tax: $4.75');

      // Check that the receipt displays the correct final total.
      expect(output).toContain('Total: $52.24');

    } finally {

      // Restore the original console.log function.
      log.mockRestore();

    } // End the protected section.

  }); // End the sixth test.

}); // End the grocery receipt test group.
