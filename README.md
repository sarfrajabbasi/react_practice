
# React Basics

## Table of Contents

- [Conditional Rendering](#conditional-rendering)
- [Controlled Components](#controlled-components)
- [List Rendering](#list-rendering)
- [Props](#props)
- [Styles](#styles)

## Conditional Rendering

Conditional rendering in React allows components to render different UI elements based on certain conditions. It helps in creating dynamic and interactive user interfaces.

Example:
```jsx
{isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
```

## Controlled Components

Controlled components in React are form elements whose values are controlled by React state. They allow React to control the form element and handle its changes.

Example:
```jsx
<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
```

## List Rendering

List rendering in React involves iterating over an array of data and rendering a list of components. It helps in dynamically rendering UI elements based on data.

Example:
```jsx
<ul>
  {users.map(user => (
    <li key={user.id}>{user.name}</li>
  ))}
</ul>
```

## Props

Props (short for properties) are used to pass data from one component to another in React. They are read-only and help in making components reusable and customizable.

Example:
```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

## Styles

Styling in React can be done using CSS, inline styles, CSS modules, or libraries like styled-components. It allows developers to customize the appearance of components.

Example:
```jsx
const styles = {
  backgroundColor: 'lightblue',
  fontSize: '16px',
  padding: '10px',
};

function App() {
  return <div style={styles}>Hello, React!</div>;
}
```

