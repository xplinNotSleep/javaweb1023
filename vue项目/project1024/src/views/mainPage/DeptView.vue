<template>
    <div>
        <!--整个element容器-->
        <el-container style="height:700px;border:3px solid #761267">
            <!--el-header标题栏-->
            <el-header style="font-size: 30px; background-color: rgb(27, 102, 60);">学习辅助系统</el-header>
            <el-container>
                <!--el-aside左侧选项卡-->
                <el-aside width="250px" style="border: 2px solid #133c75">
                    <el-menu :default-openeds="['1']"><!--默认展开菜单索引-->
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-message">系统信息管理</i>
                            </template>
                            <el-menu-item index="1-1">
                                <router-link to="/dept">部门管理</router-link>
                            </el-menu-item>
                            <el-menu-item index="1-2">
                                <router-link to="/emp">员工管理</router-link>
                            </el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>

                <!--主体部分-->
                <el-main>
                    <!--表格-->
                    <el-table :data="tableData" border>
                        <el-table-column prop="name" label="名称" width="200"></el-table-column>
                        <el-table-column prop="updatetime" label="最后操作时间" width="230"></el-table-column>
                        <el-table-column prop="operate" label="操作" >
                            <el-button type="primary" size="mini">编辑</el-button>
                            <el-button type="danger" size="mini">删除</el-button>
                        </el-table-column>
                    </el-table>

                    <br>

                    <!-- 分页条 -->
                    <!-- Pagination 分页 -->
                    <el-pagination background layout="total,sizes, prev, pager, next, jumper" 
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :total="1000"></el-pagination>

                </el-main>


            </el-container>

        </el-container>
    </div>


</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            tableData: [{
                id:1,
                name:"学工部",
                updatetime:"2010-01-01 12:00:00"
            },{
                id:2,
                name:"教研部",
                updatetime:"2010-01-01 12:00:00"
            },{
                id:3,
                name:"就业部",
                updatetime:"2010-01-01 12:00:00"
            },{
                id:4,
                name:"人事部",
                updatetime:"2010-01-01 12:00:00"
            },{
                id:5,
                name:"行政部",
                updatetime:"2010-01-01 12:00:00"
            }]
        }
    },
    methods: {
        
    }
}
</script>


<style>

</style>
