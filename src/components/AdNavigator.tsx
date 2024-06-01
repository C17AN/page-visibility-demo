import clsx from "clsx";
import styles from "../styles/index.module.scss";

type AdProps = {
  watched: boolean;
  onClick: () => void;
};

const AdNavigator = ({ watched, onClick }: AdProps) => {
  const content = "할인 정보를 확인하고 게시물을 이어서 읽어보세요";
  return (
    <div className={clsx(styles["backdrop"], { [styles.watched]: watched })}>
      <div className={styles.adNavigator} onClick={onClick}>
        {content}
      </div>
    </div>
  );
};

export default AdNavigator;
