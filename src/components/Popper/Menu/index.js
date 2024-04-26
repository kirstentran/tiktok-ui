import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { useState } from "react";
import { Wrapper as PropperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      visible
      interactive
      delay={[0, 1000]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PropperWrapper className={cx("menu-popper")}>
            {/* <Header title="Language" /> */}
            {history.length > 1 && (
              <Header title="Language" onBack={() => {}} />
            )}
            {renderItems()}
          </PropperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
