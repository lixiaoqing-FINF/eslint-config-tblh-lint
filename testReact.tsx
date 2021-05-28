/*
 * @Author: liqingqing
 * @Date: 2021-05-28 14:35:37
 * @LastEditTime: 2021-05-28 17:19:08
 * @LastEditors: liqingqing
 * @Description: In User Settings Edit
 * @FilePath: /eslint-config-tblh-lint/testReact.tsx
 */
import React from 'react';
// import aa from './test';

interface IProps {
  name: string;
}

const Test = (props: IProps) => {
  const { name } = props;
  return <div>{name}</div>;
};

export default Test;
