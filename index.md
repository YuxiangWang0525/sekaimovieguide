<script setup lang="ts">
import { useShare } from '@vueuse/core'
import Groupsheet from './widget/groupsheet.vue'
const { share } = useShare()
const ShareThisPage = () => {
 share({
 title: '剧场版世界计划观影指南',
 text: '收下这份剧场版观影指南,Hello SEKAI!',
 url: location.href,
 })
}
</script>
# 欢迎来到剧场版世界计划观看指南

> 这是一份给所有想要观看剧场版世界计划的观众的一份指南，不论是否玩过世界计划原作、是否已迫不及待前往香港等地区观影。这份指南都用得到。

## 我没有玩过原作

推荐先了解原作的世界观、定义:[无原作基础观前设定快速阅读](/fastibh)

## 我是玩过原作的玩家

### 前往香港观影

参考[赴港观影指南](/to-hk)

### 内地观影

该电影内地目前未上映,也没有公映许可证信息。暂时没有观影教程和观影群公示。

如您有像组建观影群的打算,可以将群号和地区发送邮件到[wongyukcheung@outlook.com](mailto:晚江右海<wongyukcheung@outlook.com>?subject=申请观影群展示&body=我是[更改成您的CN]%2C我想组建[要组建观影会的区域]区域的观影群%2C群号是%3A[群号]%2C该群号是[QQ/Discord/其他平台]群号。) 或添加QQ 3194607988 备注来意为:登记观影群。即可登记到这个页面。

> [!WARNING] 注意哦
> 
> 如果观影会群主为未成年人，无论是否为年满16周岁且具有自主收入的完全民生行为能力人，都需要经过监护人的同意再登记哦!

> [!DANGER] 格外注意
> 
> 本站为公益性质的站点,群聊登记全程不会要求收取任何费用!! 任何让你赞助/付费登记的均为诈骗!!!! 请勿上当!!!

#### 内地观影群列表:

> [!TIP] 提示
> 
> 信息非实时更新

<Groupsheet />
## 分享本页

如果你觉得这个网站对你有用,请分享给他人

<button @click="ShareThisPage">分享</button>

