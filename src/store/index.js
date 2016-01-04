/**
 * Created by Annatar on 2015/12/20.
 * Email: iamhele1994@gmail.com
 * Github: AnnatarHe
 */

'use strict';

import Vue from 'vue'
import Vuex from 'vuex'
import { navbarInitialState, navbarMutations } from './modules/nav'
import {
    activitiesInitialData,
    getActiviesMutations,
    currentInitialActivity,
    getCurrentActivityMutations
} from './modules/activities'
import {
    messageInitialInfo,
    setMessageMutations,
    headerInitialTitle,
    setHeaderTitleMutations,
    loadingInitialState,
    toggleLoadingStateMutations
} from './modules/common'
import {
    userInitialModalState,
    userInitialCurrentAtModal,
    toggleUserModalMutations,
    switchUserCurrentAtModalMutations
} from './modules/user'

import {
    allDepartmentInitialData,
    oneDepartmentInitialData,
    getAllDepartmentFromServerMutations,
    getOneDepartmentFromServerMutations
} from './modules/department'

import * as actions from './actions'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {
        // 导航栏
        nav: navbarInitialState,
        // 所有的活动
        activities: activitiesInitialData,
        // 弹出框消息，暂时没有用
        alertMsg: messageInitialInfo,
        // 头部的名字
        headerTitle: headerInitialTitle,
        // 当前活动
        currentActivity: currentInitialActivity,
        // loading 状态
        loading: loadingInitialState,
        // 用户登录的模糊框状态
        userModalState: userInitialModalState,
        // 用户当前在哪个状态，在登陆框的选择那里
        userCurrentAtModal: userInitialCurrentAtModal,
        // 所有部门的数据
        allDepartmentData: allDepartmentInitialData,
        // 当前部门的数据
        oneDepartmentData: oneDepartmentInitialData
    },
    actions,
    mutations: [
        navbarMutations,
        getActiviesMutations,
        setMessageMutations,
        setHeaderTitleMutations,
        getCurrentActivityMutations,
        toggleLoadingStateMutations,
        toggleUserModalMutations,
        switchUserCurrentAtModalMutations,
        getAllDepartmentFromServerMutations,
        getOneDepartmentFromServerMutations
    ],
    strict: debug,
    middlewares: debug ? [Vuex.createLogger()] : []
})
