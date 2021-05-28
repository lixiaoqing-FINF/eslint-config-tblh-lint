/*
 * @Author: your name
 * @Date: 2021-05-24 14:40:40
 * @LastEditTime: 2021-05-28 17:09:57
 * @LastEditors: liqingqing
 * @Description: In User Settings Edit
 * @FilePath: /eslint-config-tblh-lint/test.ts
 */

interface List {
  id: string;
  name: string;
  age: number;
}

type ABC = 'string';

const data: List[] = [{
  id: '131313',
  name: 'zhangsan',
  age: 24,
}];

const testName: ABC = 'aaa';

export default testName;
