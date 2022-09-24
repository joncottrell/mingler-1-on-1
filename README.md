# Mingler Engine for 1:1's

A library to help you create rounds of 1:1's until everyone in a group has met.

## Usage

### Installation

`npm install --save-dev mingler-1-on-1`
or
`yarn add --dev mingler-1-on-1`

### Getting all meeting rounds

```typescript
import { rounds } from "mingler-1-on-1";
...
rounds(["Jonathan Cottrell", "Trevor Appleseed", "Lucy Doe", "Granny Smith"])
```

### Results

```json
[
  [
    [
      "Jonathan Cottrell",
      "Trevor Appleseed"
    ],
    [
      "Lucy Doe",
      "Granny Smith"
    ]
  ],
  [
    [
      "Jonathan Cottrell",
      "Lucy Doe"
    ],
    [
      "Trevor Appleseed",
      "Granny Smith"
    ]
  ],
  [
    [
      "Jonathan Cottrell",
      "Granny Smith"
    ],
    [
      "Trevor Appleseed",
      "Lucy Doe"
    ]
  ]
]
```
