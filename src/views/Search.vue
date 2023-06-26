<template>
     <div class="mt-4">
        <el-input
            v-model="input1"
            placeholder="Please input"
            class="input-with-select"
        >
        <template #prepend>
            <el-select v-model="select" placeholder="Select" style="width: 115px">
            <el-option label="Restaurant" value="1" />
            <el-option label="Order No." value="2" />
            <el-option label="Tel" value="3" />
            </el-select>
        </template>
        <template #append>
            <el-button :icon="Search" @click="goSearch(input1)"/>
        </template>
        </el-input>

        <el-table :data="pageList" border style="width: 100%" :header-cell-style="{background:'#cdd0d6',color:'#000000'}">
            <el-table-column v-for="(item,index) of tableHeader" :key="index" :prop="item" :label="item"  />
        </el-table>


        <!-- <el-pagination background layout="prev, pager, next" :total="1000" /> -->

    </div>
</template>

<script>
    import { computed, ref } from 'vue'
    import { Search } from '@element-plus/icons-vue'
    import { useSearchStore } from '@/stores/search'
    export default {
        name: 'Search',
        setup() {
            const input1 = ref('')
            const select = ref('')
            
            const searchStore = useSearchStore()

            // 调用搜索请求
            async function goSearch(keyword) {
                let data = {
                    page: 1,
                    limit: 10, 
                    sidx: 'id',
                    order: 'asc',
                    key: keyword
                }
                // 调用了store中的action方法
                searchStore.getSeachRes(data)
                
            } 
            return {
                input1,
                select,
                Search, // 这个是导入的那个搜索框的搜索图标，如果不放到setup上的话，就不能用，因为模板只能用组件实例对象中的内容
                goSearch,
                searchStore,
                pageList: computed(() => searchStore.pageList),
                tableHeader: computed(() => searchStore.tableHeader)
            }
        }
    }
</script>

<style scoped>
.input-with-select .el-input-group__prepend {
    background-color: var(--el-fill-color-blank);
}
.el-input-group {
    width: 76%;
    left: 12%;
    margin-top: 2%;
}
.el-table {
    margin-top: 30px;
    width: 90% !important;
    margin: 30px auto;
}
.el-pagination {
    justify-content: center;
}
.el-pagination .el-pager li {
    /* padding: 0 30px; */
    margin: 0 10px !important;
}
</style>