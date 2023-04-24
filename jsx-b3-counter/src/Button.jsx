import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

/**
 * @typedef ButtonProps
 *
 * @property {React.ReactElement} children - Text hiển thị
 * @property {() => void} onClick - Hàm xử lý sự kiện click
 */

/**
 * Hiển thị một cái nút bấm thật là đẹp
 *
 * @param {ButtonProps} props
 */
export default function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.displayName = "Button";

Button.defaultProps = {
  children: null,
  onClick: () => {},
};

Button.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func,
};
