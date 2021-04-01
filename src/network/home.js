import {request} from "./request";

  // 封装的一个函数
export function getHomeMultidata() {
  return request({
    url: '/home/multidata' // 对应的数据
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

// 函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
// 函数调用结束 -> 弹出函数栈(释放函数所有的变量)
// function test() {
//   const names = ['why', 'aaa']
// }
//
// test()
//
// test()

let totalNums = []

const nums1 = [20, 11, 222]
const nums2 = [111, 22, 333]

// for (let n of nums1) {
//   totalNums.push(n)
// }

totalNums.push(...nums1)
