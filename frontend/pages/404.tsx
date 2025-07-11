import { GetStaticProps } from "next"
import { Trans, useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { NextSeo } from "next-seo"

export default function Custom404({ locale }: { locale: string }) {
  const { t } = useTranslation()
  return (
    <>
      <NextSeo
        title={t("page-not-found", { errorCode: "404" })}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_BASE_URI}/${locale}/404`,
        }}
        noindex
      />
      <div className="max-w-11/12 sm:w-max-1/2 mx-auto my-0 mt-12 w-11/12 sm:w-1/2 2xl:w-[900px] 2xl:max-w-[900px]">
        <h1 className="mb-8 text-4xl font-extrabold">
          {t("page-not-found", { errorCode: "404" })}
        </h1>
        <p>{t("could-not-find-page")}</p>
        <p>
          <Trans i18nKey={"common:retry-or-go-home"}>
            You might want to retry or go back{" "}
            <a className="no-underline hover:underline" href={`/${locale}`}>
              home
            </a>
            .
          </Trans>
        </p>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({
  locale,
}: {
  locale: string
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locale,
    },
  }
}
