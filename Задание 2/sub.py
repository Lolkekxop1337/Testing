# test_calculator.py

import unittest
from calculator import add, subtract, multiply, divide, calculate

class TestCalculator(unittest.TestCase):

    def setUp(self):
        """Метод, который выполняется перед каждым тестом."""
        self.test_cases = [
            (1, 2, 3),
            (-1, 1, 0),
            (5, 3, 2),
            (3, 5, -2),
            (3, 7, 21),
            (-1, 1, -1),
            (10, 2, 5),
            (8, 2, 4),
        ]

    def test_add(self):
        for num1, num2, expected in self.test_cases[:2]:  
            with self.subTest(num1=num1, num2=num2):
                self.assertEqual(add(num1, num2), expected)

    def test_subtract(self):
        for num1, num2, expected in self.test_cases[2:4]:  
            with self.subTest(num1=num1, num2=num2):
                self.assertEqual(subtract(num1, num2), expected)

    def test_multiply(self):
        for num1, num2, expected in self.test_cases[4:5]:  
            with self.subTest(num1=num1, num2=num2):
                self.assertEqual(multiply(num1, num2), expected)

    def test_divide(self):
        self.assertEqual(divide(10, 2), 5)
        with self.assertRaises(ValueError):
            divide(10, 0)

    def test_calculate(self):
        operations = [
            (3, 4, '+', 7),
            (10, 5, '-', 5),
            (2, 3, '*', 6),
            (8, 2, '/', 4),
        ]
        for num1, num2, operation, expected in operations:
            with self.subTest(num1=num1, num2=num2, operation=operation):
                self.assertEqual(calculate(num1, num2, operation), expected)

        with self.assertRaises(ValueError):
            calculate(1, 1, '%')

if __name__ == '__main__':
    unittest.main()
