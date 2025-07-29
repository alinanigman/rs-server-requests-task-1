import { useNavigate } from "react-router-dom";
import { PageHeader } from "../components";
import styles from "../App.module.css";

function NotFound() {
  const navigate = useNavigate();

  const handleGoBackBtnClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.App}>
      <PageHeader
        title={"Page not found"}
        onClick={handleGoBackBtnClick}
        showGoBackBtn
      />
      <div className="image">
        <img
          width={200}
          src="https://www.gstatic.com/mobilesdk/200817_mobilesdk/preview_channels_zero_state@2x.png"
        />
      </div>
    </div>
  );
}

export default NotFound;
