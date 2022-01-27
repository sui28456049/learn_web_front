<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间。</text>
		</uni-card>
		<uni-section title="只选择图片" type="line">
			<view class="example-body">
				<uni-file-picker limit="9" title="最多选择9张图片" @progress="progress" @success="success" @fail="fail"></uni-file-picker>
			</view>
		</uni-section>


		<uni-section title="选择任意文件" type="line">
			<view class="example-body">
				<uni-file-picker @progress="progress" @success="success" @fail="fail" limit="5" file-mediatype="all"
					title="最多选择5个文件"></uni-file-picker>
			</view>


		</uni-section>
		<uni-section title="上传地址" type="line">
			<view class="example-body">
				<view v-for="item,index in fileLists">
					<view @click="copy(item)">{{item}}</view>
				</view>
			</view>
		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageStyles: {
					width: 64,
					height: 64,
					border: {
						radius: '50%'
					}
				},
				listStyles: {
					// 是否显示边框
					border: true,
					// 是否显示分隔线
					dividline: true,
					// 线条样式
					borderStyle: {
						width: 1,
						color: 'blue',
						style: 'dashed',
						radius: 2
					}
				},
				fileLists: []
			}
		},
		methods: {
			// 获取上传进度
			progress(e) {
				console.log('上传进度：', e)
			},

			// 上传成功
			success(e) {
				this.fileLists = e.tempFilePaths;
				console.log(e)
			},

			// 上传失败
			fail(e) {
				console.log('上传失败：', e)
			},
			copy(item) {
				console.log(item);
				uni.setClipboardData({
					data: item,
					success: () => {
						uni.showToast({
							title: "复制成功"
						});
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.example-body {
		padding: 10px;
		padding-top: 0;
	}

	.custom-image-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.text {
		font-size: 14px;
		color: #333;
	}
</style>
