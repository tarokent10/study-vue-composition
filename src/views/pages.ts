// page routes
interface Page {
  title: string;
  routeName: string;
  tags: Array<string>;
}
const routes: Array<Page> = [
  { title: 'トップ画面', routeName: 'Top', tags: [] },
  { title: 'TypeScriptの基本文法学習', routeName: 'TsBase', tags: [] },
  { title: 'Block要素とInline要素', routeName: 'BlockInline', tags: [] },
  { title: 'flexデザインの学習', routeName: 'Flex', tags: [] }
];
export { routes };
