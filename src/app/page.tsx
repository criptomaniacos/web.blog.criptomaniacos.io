import Link from "next/link";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Image from "next/image";
import { Metadata } from "next";
import { BlogListHomeUltimosPosts } from "@/components/blog/blog-list-home-ultimos-posts";
import { BlogListHomeMaisLidas } from "@/components/blog/blog-list-home-mais-lidas";

export const metadata: Metadata = {
  title: "Blog da Criptomaníacos",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between flex-1">
      <div className="bg-neutral-950 w-full flex-1">
        <div className="container py-8 md:py-16">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 gap-4 flex flex-col">
              <h2 className="border-l-8 border-orange-500 pl-4 text-2xl">
                Últimos Posts
              </h2>
              <BlogListHomeUltimosPosts />
            </div>

            <div className="lg:w-1/4">
              <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-4 flex flex-col gap-4">
                <h3 className="text-xl ">
                  Junte-se a mais de 500k Criptomaníacos
                </h3>
                <p className="text-neutral-400">
                  A comunidade cripto que mais cresce no Brasil.
                </p>

                <Link
                  href="https://plataforma.criptomaniacos.com.br/auth/cadastrar"
                  target="_blank"
                  className="flex justify-between items-center bg-brand-orange-500 rounded-full px-2 py-2  text-neutral-900 max-w-[180px]"
                >
                  <span className="ml-4 mr-4">Criar Conta</span>
                  <BsArrowUpRightCircleFill
                    className="text-neutral-900"
                    size={24}
                  />
                </Link>
              </div>
              <div className="bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 flex flex-col gap-2 mt-4">
                <h3 className=" text-neutral-100  p-4">Mais lidos</h3>
                <BlogListHomeMaisLidas />
              </div>
              <div className="bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 flex flex-col gap-2 mt-4">
                <div>
                  <div className="bg-brand-green text-neutral-900  p-4">
                    Acompanhe nosso canal
                  </div>
                  <Link
                    href="https://cmania.co/site-youtube"
                    target="_blank"
                    className="block"
                  >
                    <Image
                      src="https://img.youtube.com/vi/qhGSraCMnOY/0.jpg"
                      alt="Picture of the author"
                      width={333}
                      height={188}
                    />
                  </Link>
                </div>
                <div className="p-4">
                  <h3 className=" ">
                    VIM DO FUTURO PRA FAZER 10X COM ALTCOINS 🚀
                  </h3>
                  <p className="text-neutral-400">
                    26 mil visualizações - há 1 dia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
