import { CompletedTest, themesInterface } from "../../../types/TypeInterfaces";

export const complatedHeader = {
    link: (item: CompletedTest) => item.slug ?? '',
    title: (item: CompletedTest) => item.name ?? '',
    questionCount: (item: CompletedTest) => item.questions_count,
    score: (item: CompletedTest) => item.score,
    // theme=(item: CompletedTest) => item.
}

export const testHeader = {
    link: (item: themesInterface) => item.slug,
    title: (item: themesInterface) => item.name,
    questionCount: (item: themesInterface) => item.questions_count,
    fanlar: (item: themesInterface) => item.fanlar.name
    // userCount: (item: themesInterface) => item.
}
