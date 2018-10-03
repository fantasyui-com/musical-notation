# musical-notation
Simple and lightweight musical notation based on beat sequencers and inspired by good ideas.

This is it:

```

[----][-x--][----][-x--]
[----][-x--][----][-x--]
[-x--][-x--][-x--][-x--]
[-x--][----][-x--][----]
[-x--][----][-x--][----]

```

Hyphen means empty space
brackets help you see divisions
and x marks the spot.

## About

This is a javascript library that converts the above notation to a multidimensional array, a matrix.

```JavaScript

input = `
  [----][-x--][----][-x--]
  [----][-x--][----][-x--]
  [-x--][-x--][-x--][-x--]
  [-x--][----][-x--][----]
  [-x--][----][-x--][----]
`;

```

```JavaScript

output = [
  [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
  [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
  [ 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ]
]

```
