'use client';

import ResourceSearch from '@/components/common/resourceSearch.tsx';
import TransactionForm from '@/components/transaction/transactionForm.tsx';
import TransactionListByResourceId from '@/components/transaction/transactionListByResourceId';
import { Resource, TransactionType } from '@prisma/client';
import { useState } from 'react';
import styles from './buy.module.scss';

const headers: GenericHeadersTableType<TransactionRowForTable> = [
  { name: 'Date', key: 'date' },
  { name: 'Nom', key: 'name' },
  { name: 'Quantité', key: 'quantity' },
  { name: 'Cout TT', key: 'ttCost' },
  { name: 'Cout TT', key: 'ttCost' },
  { name: 'Cout TTC', key: 'ttcCost' },
  { name: 'Cout Extra', key: 'extraCost' },
  { name: 'Markup', key: 'markup' },
];

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

      {resource && (
        <section>
          <h4>Liste des précédents achats</h4>
          <TransactionListByResourceId
            headers={headers}
            resourceId={resource?.id ?? ''}
            type={TransactionType.BUY}
          />
        </section>
      )}
    </div>
  );
}

export default Buy;
