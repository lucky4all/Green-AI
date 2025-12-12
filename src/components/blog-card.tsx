import Link from "next/link"
export type Card = {
    title: string
    date: string
    description: string
    slug: string
}

export function BlogCard({ title, date, description, slug }: Card) {

    return (
        <>
            <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-xs transition hover:shadow-lg sm:p-6">
                <div>
                    <p className="text-gray-500">{date}</p>
                </div>

                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    {title}
                </h3>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {description}
                </p>
                <Link href={`/blog/${slug}`} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                    Leer blog
                    <span
                        aria-hidden="true"
                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                        →
                    </span>
                </Link>
            </article>
            <BlogSeparator />

        </>
    )
}

export function BlogSeparator() {
    return (
        <div className="border-b-2 border-gray-600">---------------------------------------------</div>
    )
}