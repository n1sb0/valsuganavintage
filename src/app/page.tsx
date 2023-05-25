"use client"
import {api} from "../utils/api"

export default function HomePage() {
  const {data: article, isLoading, isError} = api.article.all.useQuery()

  return (
    <div>
      <div>
        <p>HELLO {article}</p>
      </div>
    </div>
  );
}