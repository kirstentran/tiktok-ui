import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { Wrapper as PropperWrapper } from "~/components/Popper";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);
function Menu({ children }) {
  return (
    <Tippy
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("content")} tabIndex="-1" {...attrs}>
          <PropperWrapper>
            <h2>Menu items</h2>
          </PropperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
