import "./modalHeader.scss";

type User = {
  id: string;
  lifetimeStakingRewards: string;
  unstaking: string;
  staked: string;
  available: string;
  totalBalance: string;
};

interface MyProps {
  active: boolean;
  setActive: (active: boolean) => void;
  user: User | null;
}

function ModalHeader(props: MyProps) {
  const { setActive, active, user }: MyProps = props;

  return (
    <div className={active ? "active" : "not-active"}>
      <div
        className="overlay"
        onClick={() => {
          setActive(!active);
        }}
      ></div>

      <div className="content">
        <div className="balance">
          <p className="lable"> Balance:</p>
          <p className="balance-amount">
            {user?.totalBalance ? user?.totalBalance : "0 XAI"}
          </p>
        </div>
        <div className="list">
          <a href="./">
            <span>CONNECT WALLET</span>
          </a>

          <a href="./">
            <span>CONNECT WALLET</span>
          </a>

          <a href="./">
            <span>BUY XAY</span>
          </a>

          <a href="./">
            <span>ACCOUNT</span>
          </a>

          <a href="./">
            <span>REFER A HUMAN</span>
          </a>

          <a href="./">
            <span>HELP</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ModalHeader;
