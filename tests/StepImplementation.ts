
import { Step } from "gauge-ts";
import { equal } from "assert";

export default class StepImplementation1 {

    private vowels: Array<string>;

    @Step("Vowels in English language are <vowelString>.")
    public async setLanguageVowels(vowelString: string) {
        this.vowels = vowelString.split('');
    }

    @Step("The word <word> has <expectedCount> vowels.")
    public async verifyVowelsCountInWord(word: string, expectedCount: number) {
        equal(await this.countVowels(word), expectedCount);
    }

    @Step("Almost all words have vowels <wordsTable>")
    public async verifyVowelsCountInMultipleWords(wordsTable: any) {
        for (const row of wordsTable.rows) {
            equal(await this.countVowels(row.cells[0]), parseInt(row.cells[1]));
        }
    }

    private async countVowels(word: string) {
        return word.split("").filter((elem) => {
            return this.vowels.includes(elem);
        }).length;
    }

}
