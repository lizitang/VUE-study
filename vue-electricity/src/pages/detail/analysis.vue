<template>
  <div class="sales-board">
      <div class="sales-board-intro">
        <h2>流量分析</h2>
        <p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
      </div>
      <div class="sales-board-form">
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  购买数量:
              </div>
              <div class="sales-board-line-right">
                	<v-add @on-computed="computeAll" :max="max" :min="min"></v-add>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  产品类型：
              </div>
              <div class="sales-board-line-right">
                  <v-selection :selection="productType" @on-change="productPrice"></v-selection>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  有效时间：
              </div>
              <div class="sales-board-line-right">
                  <multify-choose :chooseList="chooseList" @on-choose="timeArray"></multify-choose>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  产品版本：
              </div>
              <div class="sales-board-line-right">
                 <single-election :singleList="singleList" @on-single="editionType"></single-election>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  总价：
              </div>
              <div class="sales-board-line-right">
                  {{ buyNum * proType }}元
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">&nbsp;</div>
              <div class="sales-board-line-right">
                  <div class="button" @click="buyProduct">
                    立即购买
                  </div>
              </div>
          </div>
      </div>
      <div class="sales-board-des">
        <h2>产品说明</h2>
        <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

        <h3>用户行为指标</h3>
        <ul>
          <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
          <li>用户在网站的停留时间；</li>
          <li>用户来源网站（也叫“引导网站”）；</li>
          <li>用户所使用的搜索引擎及其关键词；</li>
          <li>在不同时段的用户访问量情况等。</li>
        </ul>

        <h3>浏览网站方式</h3>
        <ul>
          <li>用户上网设备类型</li>
          <li>用户浏览器的名称和版本</li>
          <li>访问者电脑分辨率显示模式</li>
          <li>用户所使用的操作系统名称和版本</li>
          <li>用户所在地理区域分布状况等</li>
        </ul>
      </div>
      <my-dialog :isShow="showDialog" @on-close="closeDialog">
      </my-dialog>
      <!-- <my-dialog  >
        <table class="buy-dialog-table">
          <tr>
            <th>购买数量</th>
            <th>产品类型</th>
            <th>有效时间</th>
            <th>产品版本</th>
            <th>总价</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <span ></span>
            </td>
            <td></td>
          </tr>
        </table>
        <h3 class="buy-dialog-title">请选择银行</h3>
        <bank-chooser ></bank-chooser>
        <div class="button buy-dialog-btn" >
          确认购买
        </div>
      </my-dialog>
      <my-dialog  >
        支付失败！
      </my-dialog>
      <check-order ></check-order> -->
  </div>
</template>

<script>
import VSelection from '../../components/selection'
import VAdd from '../../components/addReduce'
import MultifyChoose from '../../components/multifyChoose'
import SingleElection from '../../components/singleElection'
import Dialog from '../../components/dialog'
export default {
	components: {
    VSelection,
    VAdd,
    MultifyChoose,
    SingleElection,
    myDialog: Dialog
  },

	data () {
		return {
      showDialog: false,
			productType: [
				{
					label: '入门版',
					value: 0
				},
				{
					label: '中级版',
					value: 1
				},
				{
					label: '高级版',
					value: 2
				}
			],
			chooseList: [
				{
					name: '1个月',
					value: 0
				},
				{
					name: '3个月',
					value: 1
				},
				{
					name: '6个月',
					value: 2
				}
			],
			singleList: [
				{
					name: '低配',
					value: 0
				},
				{
					name: '中配',
					value: 1
				},
				{
					name: '高配',
					value: 2
				}
			],
			buyNum: 0,
			proType: 1000,
      ediType: 0,
      tArray: [],
			max: 100,
			min: 0
		}
	},
	methods: {
    buyProduct () {
      this.showDialog = true;
    },
		computeAll (num) {
			this.buyNum = num;
		},
    timeArray (timeArray) {
      this.tArray = timeArray;
    },
		productPrice (index) {
			if (index === 0) {
				this.proType = 1000;
			} else if (index === 1) {
				this.proType = 2000;
			} else {
				this.proType = 3000;
			}
		},
    editionType (index) {
      if (index === 0) {
        this.ediType = 0;
      } else if (index === 1) {
        this.ediType = 1;
      } else {
        this.ediType = 2;
      }
    },
    closeDialog () {
      this.showDialog = false;
    }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buy-dialog-title {
  font-size: 16px;
  font-weight: bold;
}
.buy-dialog-btn {
  margin-top: 20px;
}
.buy-dialog-table {
  width: 100%;
  margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th{
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 5px 0;
}
.buy-dialog-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
}
.sales-board-line-left {
	float: left;
}
.button {
  width: 80px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background-color: #4fc08d;
  color: #fff;
}
.button:hover {
  cursor: pointer;
}
</style>
