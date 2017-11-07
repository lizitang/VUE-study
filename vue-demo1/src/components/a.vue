<template>
	<div>
		{{ hello }}
		<p>
			{{ data }}
		</p>
		<slot></slot>
	</div>
</template>
<script>
	export default {
		props: {
			'data': [Number, String]
		},
		data () {
			return {
				hello: 'I am component a'
			}
		}
	}
</script>