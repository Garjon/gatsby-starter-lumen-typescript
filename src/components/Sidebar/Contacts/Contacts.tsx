import React from 'react';
import { getContactHref, getIcon } from '../../../utils';
import Icon from '../../Icon';
import styles from './Contacts.module.scss';

type Props = {
  contacts: {
    [name: string]: string;
  };
};

const Contacts = ({ contacts }: Props) => (
  <div className={styles['contacts']}>
    <ul className={styles['contacts__list']}>
      {Object.keys(contacts).map(name =>
        !contacts[name] ? null : (
          <li className={styles['contacts__list-item']} key={name}>
            <a className={styles['contacts__list-item-link']} href={getContactHref(name, contacts[name])} rel="noopener noreferrer" target="_blank">
              <Icon name={name} icon={getIcon(name)} />
            </a>
          </li>
        )
      )}
    </ul>
  </div>
);

export default Contacts;
