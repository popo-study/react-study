
import * as types from './mutation-types';

types.GET_TEST;

const state = {
  testList : [
    {seq: 1, id: 'kimta98', name: '김태웅'},
    {seq: 2, id: 'darkehd', name: '이동수'}
  ]
};

const getters = {
  testList: state => state.testList
};

const actions = {};

const mutations = {}; 

export default {
  state,
  getters,
  actions,
  mutations
};
