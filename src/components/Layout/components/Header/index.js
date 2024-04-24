import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faPlus,
  faSignIn,
  faSpinner,
  faEllipsisVertical,
  faEarthAmericas,
  faLightbulb,
  faQuestionCircle,
  faKeyboard,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import Button from "~/components/Button";
import { Wrapper as PropperWrapper } from "~/components/Popper";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import AccountItem from "~/components/AccountItem";
import Menu from "~/components/Popper/Menu";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLightbulb} />,
    title: "LIVE Creator Hub",
    to: "/livecreatorhub",
  },
  {
    icon: <FontAwesomeIcon icon={faEarthAmericas} />,
    title: "English",
  },
  {
    icon: <FontAwesomeIcon icon={faQuestionCircle} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: "Dark Mode",
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3, 4]);
    }, 0);
  }, []);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="TikTok" />
        </div>
        <Tippy
          visible={searchResult.length > 0}
          interactive
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              {/* <PropperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PropperWrapper> */}
            </div>
          )}
        >
          <div className={cx("search")}>
            <input
              placeholder="Search accounts and videos"
              spellCheck={false}
            />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("actions")}>
          <Button outline1 leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Upload
          </Button>
          <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
            Log In
          </Button>

          <Menu items={MENU_ITEMS}>
            <button className={cx("more-btn")}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}
export default Header;
