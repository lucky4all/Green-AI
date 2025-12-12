export default async function Page(props: PageProps<'/blog/[slug]'>) {
    const { slug } = await props.params
    return (
        <>
            <h1>Hola, { slug }!</h1>
        </>
    )
}