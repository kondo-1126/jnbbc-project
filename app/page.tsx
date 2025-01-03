import styles from './page.module.css';
import Image from 'next/image';
import NewsList from '@/app/_components/NewsList';
import ButtonLink from '@/app/_components/ButtonLink';
import { News } from '@/app/_libs/microcms';

const data: { contents: News[] } = {
	contents: [
		{
			id: "1",
			title: "サイトを移転しました。",
			category: {
				name: "更新情報",
			},
			publishedAt: "2025/01/01",
			createdAt: "2025/01/01",
		},
		{
			id: "2",
			title: "2025年野球教室がスタートしました",
			category: {
				name: "更新情報",
			},
			publishedAt: "2025/01/02",
			createdAt: "2025/01/02",
		},
		{
			id: "3",
			title: "テスト投稿です！！！",
			category: {
				name: "更新情報",
			},
			publishedAt: "2025/01/03",
			createdAt: "2025/01/03",
		},
		{
			id: "4",
			title: "チームが大勝しました！",
			category: {
				name: "更新情報",
			},
			publishedAt: "2025/01/04",
			createdAt: "2025/01/04",
		},
	]
}

export default function Home() {
	const sliceData = data.contents.slice(0, 3);

	return (
		<>
			<section className={styles.top}>
				<div>
					<h1 className={styles.title}>Welcome to JNBBC</h1>
					<p className={styles.description}>私たちは佐久城山・中込ベースボールクラブです。</p>
				</div>
				<Image className={styles.bgimg} src="/img-mv.jpg" alt="" width={1600} height={840}/>
			</section>
			<section className={styles.news}>
				<h2 className={styles.newsTitle}>News</h2>
				<NewsList news={sliceData} />
				<div className={styles.newsLink}>
					<ButtonLink href="/news">もっとみる</ButtonLink>
				</div>
			</section>
		</>
	);
}
