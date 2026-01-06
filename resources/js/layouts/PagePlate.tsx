import FooterMain from "@/features/footer/FooterMain";
import HeaderMain from "@/features/header/HeaderMain";
import { PAGE_PLATE_PROPS } from "@/types/pageplates/types";
import { Head } from '@inertiajs/react';


interface Props extends PAGE_PLATE_PROPS {
  children?: React.ReactNode;
}

export default function PagePlate({
  title = "CARDO - The Card Game",
  noHeader = false,
  noFooter = false,
  noContainer = false,
  clean = false,
  expectedHeight = "calc(100vh - 10rem)", // 5rem is header + footer height
  prefetch,
  description,
  html = {},
  children,
}:Props){

  //---> Preflight
  if(description == undefined){
    description = {
      title,
      type: "WebPage",
      description: "Experience CARDO, a strategic multiplayer card game where fusion mechanics meet tactical combat. Build your deck, master the sentinel system, and battle players in real-time.",
      author: "Mekina Game Studio",
      authorIs: "Organization",
    };
  }
  if(description && !description.title){
    description.title = title;
  }
  if(description && !description.fbAppId){
    // description.fbAppId = "__PROJECT_FB_APP_ID__";
  }
  return <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description?.description || ""} />
      {/* Add other SEO meta tags based on description prop as needed */}
    </Head>
    <div className="relative min-h-screen flex flex-col">
      {clean?"":<>
        {noHeader ? "":<>
          <HeaderMain />
        </>}
      </>}
      <slot name="header" />

      {noContainer ?<>
        {children}
      </>:<>
        <div className={`relative`} style={{minHeight: expectedHeight}}>
          {children}
        </div>
      </>}

      {clean?"": <>
        {noFooter ? "":<>
          <FooterMain />
        </>}
      </>}
    </div>
  </>
}