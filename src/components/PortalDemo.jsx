import React from "react";
import ReactDOM from "react-dom";

// PortalDemo component that renders a heading inside a portal
// The portal will render the content into a DOM node with the id "portal-root"
// This allows the component to be rendered outside of its parent hierarchy in the DOM
// This is useful for modals, tooltips, and other components that need to break out
function PortalDemo() {
	return ReactDOM.createPortal(<h1>PortalDemo</h1>, document.getElementById("portal-root"));
}

export default PortalDemo;
