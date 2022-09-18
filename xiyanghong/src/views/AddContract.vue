<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
    <div class="add-contract">
    <div class="form">
      <form action="">
        <h1>登记合约</h1>
        <div class="txtb">
          <label for="">合约地址:</label>
          <input type="text" placeholder="请输入合约地址" />
        </div>
        <div class="txtb">
          <label for="">币种名称:</label>
          <input type="email" placeholder="请输入币种名称" />
        </div>
        <div class="txtb">
          <label for="">买入目标价:</label>
          <input type="text" placeholder="请输入买入目标价" />
        </div>
        <div class="txtb">
          <label for="">卖出目标价:</label>
          <!-- <textarea name="" id="" ></textarea> -->
          <input type="text" placeholder="请输入卖出目标价" />
        </div>
        <span class="btn">提交</span>
      </form>
    </div>
    <div class="xiyang">
      <img src="../assets/image/夕阳红资本.png" alt="" />
    </div>
  </div>
</template>