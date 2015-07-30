# CenterAligningJumbotron

This is a react-bootstrap Jumbotron that center-aligns its children, both
horizaontally and vertically.

- Vertical alignment is achieved using Flexbox
- Horizontal alignment is achieved using `text-align`
- This styling is achieved using the inline `style` property

```JSX
import CenterAligningJumbotron from 'center-aligning-jumbotron';

<CenterAligningJumbotron>
    <h1>Centered!</h1>
    <p>Yay Yay Yay Yay Yay Yay Yay Yay Yay Yay Yay Yay Yay Yay</p>
</CenterAligningJumbotron>
```

## Stilr mode

If you use [stilr](https://github.com/kodyl/stilr) along with
[stilr-classnames](https://www.npmjs.com/package/stilr-classnames), you'll find
`center-aligning-jumbotron/stilr` quite helpful.

```JSX
import CenterAligningJumbotron from 'center-aligning-jumbotron';
```

Same thing, it just works better with stilr-classnames.
