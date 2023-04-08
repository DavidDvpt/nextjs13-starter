'use client';

import ResourceSearch from '@/components/resourceSearch.tsx';
import TransactionForm from '@/components/transactionForm.tsx';
import { Resource, TransactionType } from '@prisma/client';
import { useState } from 'react';
import styles from './buy.module.scss';
import BuyTransactionResourceList from './BuyTransactionResourceList';

function Buy(): React.ReactElement {
  const [resource, setResource] = useState<Resource | null>(null);
  const handleChange = (value: Resource) => {
    setResource(value);
  };

  return (
    <div className={styles.buy}>
      <ResourceSearch onChange={handleChange} />

      <section>
        <TransactionForm resource={resource} type={TransactionType.BUY} />
      </section>
      <section>
        <h4>Liste des précédents achats</h4>
        <BuyTransactionResourceList resourceId={resource?.id ?? undefined} />
      </section>
    </div>
  );
}

export default Buy;
