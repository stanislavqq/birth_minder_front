import App from './App.svelte';
import './asset/Skeleton-2.0.4/css/normalize.css'
import './asset/Skeleton-2.0.4/css/skeleton.css'
import './theme/main/theme.scss'

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;