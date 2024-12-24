# Uncaught Exception in Node.js HTTP Server

This repository demonstrates a common error in Node.js where an uncaught exception in an asynchronous operation leads to the server crashing.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version with proper error handling.

## Problem

The server simulates an asynchronous operation that might fail. If the operation fails, an error is thrown but not caught, causing the server to terminate unexpectedly.

## Solution

The solution involves using a `try...catch` block within the asynchronous operation to handle potential errors gracefully. This prevents the server from crashing and allows for more robust error management.

## How to run

1. Clone this repository
2. Navigate to the repository's directory
3. Run `node bug.js` to observe the server crashing
4. Run `node bugSolution.js` to see the corrected, more robust version.