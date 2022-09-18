<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import { useRouter } from 'vue-router';
// import {getCurrentInstance} from 'vue'
// let ins = getCurrentInstance()
const router = useRouter()
// const toAdd = () => {
//     router.push('/addContract')
// }
function toAdd () {
    router.push('/addContract')
}
// ins.red
</script>

<template>
    <div class="contract-management">
        <div class="table-data">
            <div class="btns">
                <button type="button" class="btn btn-primary add" @click="toAdd">添加</button>
            </div>
            <table class="table table-striped">
                <thead>
                    <td>序号</td>
                    <td>币种名称</td>
                    <td>买入价</td>
                    <td>卖出价</td>
                    <td>操作</td>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>ETH</td>
                        <td>1500</td>
                        <td>2000</td>
                        <td>
                            <button type="button" class="btn btn-danger del">删除</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="xiyang">
            <img src="../assets/image/夕阳红资本.png" alt />
        </div>
    </div>
</template>