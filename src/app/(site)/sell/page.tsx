'use client';

import { TransactionsExtended } from '@/app/extendedAppTypes';
import ResourceSearch from '@/components/common/resourceSearch.tsx';
import TransactionForm from '@/components/transaction/transactionForm.tsx';
import TransactionListByResourceId from '@/components/transaction/transactionListByResourceId';
import { Resource, TransactionType } from '@prisma/client';
import { useState } from 'react';
import AvailableQuantity from './AvailableQuantity';
import styles from './sell.module.scss';

const headers: GenericHeadersTableType<TransactionRowForTable> = [
  { name: 'Date', key: 'date' },
  { name: 'Nom', key: 'name' },
  { name: 'Quantité', key: 'quantity' },
  { name: 'Prix TT', key: 'ttCost' },
  { name: 'Fee', key: 'fee' },
  { name: 'Prix TTC', key: 'ttcCost' },
  { name: 'Marge', key: 'extraCost' },
  { name: 'Markup', key: 'markup' },
];

function Sell(): React.ReactElement {
  const [soldList, setSoldList] = useState<TransactionsExtended>([]);
  const [resource, setResource] = useState<Resource | null>(null);
  const [avaliableQuantity, setAvaliableQuantity] = useState(0);

  const handleExportList = (datas: TransactionsExtended) => {
    setSoldList(datas);
  };

  const handleChange = (value: Resource) => {
    setResource(value);
  };

  const handleQuantity = (value: number) => {
    setAvaliableQuantity(value);
  };

  return (
    <div className={styles.sell}>
      <ResourceSearch onChange={handleChange} />
      <section>
        <AvailableQuantity
          resourceId={resource?.id ?? null}
          setQuantity={handleQuantity}
        />
        <TransactionForm
          resource={resource}
          type={TransactionType.SELL}
          avaliableQty={avaliableQuantity}
          lastSoldItem={soldList[soldList.length - 1]}
        />
      </section>
      {resource && (
        <section>
          <TransactionListByResourceId
            headers={headers}
            resourceId={resource.id}
            type={TransactionType.SELL}
            exportList={handleExportList}
          />
        </section>
      )}
    </div>
  );
}

export default Sell;
