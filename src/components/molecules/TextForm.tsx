import React from 'react';
import ErrorMessage from 'components/atoms/ErrorMessage';
import classnames from 'classnames';
import styles from './TextForm.module.scss';

type Props = {
  name: string;
  value: string;
  hint?: string;
};

const UserFrom: React.FC<Props> = ({ name, value, hint, children }) => {
  return (
    <>
      <div className={styles.inputBox}>
        <label
          htmlFor={name}
          className={classnames(styles.label, {
            [styles.blank]: !value,
          })}
        >
          {name}
        </label>
        {children}
      </div>
      <div>
        <ErrorMessage message={hint} />
      </div>
    </>
  );
};

export default UserFrom;
