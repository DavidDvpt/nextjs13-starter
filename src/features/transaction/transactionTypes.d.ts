type TransactionState = {
  transactions: ApiType<
    import('@/app/extendedAppTypes').TransactionsExtended | null
  >;
  transactionProfit: ApiType<TransactionBenefitResult | null>;
  mutateStatus: ApiType<
    import('@/app/extendedAppTypes').TransactionExtended | null
  >;
};
type TransactionFormType = Pick<
  import('@prisma/client').Transaction,
  'itemId' | 'quantity' | 'sellStatus' | 'fee' | 'value' | 'type'
>;

interface IFetchTransactionsParams {
  type?: TransactionType;
  sellStatus?: SellStatus;
  resourceId?: string;
}

interface TransactionRow {
  date: string;
  name: '';
  quantity: number;
  ttCost: number;
  fee?: number;
  ttcCost: number;
  extraCost: number;
  markup: number;
}
interface TransactionRowForTable extends TransactionRow {
  name: string;
  quantity: string;
  ttCost: string;
  fee?: string;
  ttcCost: string;
  extraCost: string;
  markup: string;
}

type TransactionRows = TransactionRow[];
type TransactionRowsForTable = TransactionRowForTable[];
