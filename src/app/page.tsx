"use client"
import {api} from "../utils/api"

export default function HomePage() {
    const {data: article, isLoading, isError} = api.example.getSecretMessage.useQuery()
    console.log('aaa',article);
  return (
    <div>
      <div>
        <p>HELLO {article}</p>
      </div>
    </div>
  );
}