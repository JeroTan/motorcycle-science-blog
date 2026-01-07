import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Link } from '@inertiajs/react'

type Props = {
  id: string,
  title: string,
  description: string,
  datePublished: string,
  image: string,
}

export default function Item({
  id,
  title,
  description,
  datePublished,
  image,
}: Props) {
  return (
    <Link href={"/blog/"+id} className="block group">
      <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 pt-0">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={title}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <CardHeader>
          <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {new Date(datePublished).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {description}
          </p>
        </CardContent>

        <CardFooter>
          <span className="text-sm font-medium text-primary group-hover:underline">
            Read more →
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}