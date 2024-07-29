function filterDataBySingle(data: any) {
    const dataByWladi = data.messages.filter((item: any) => {
        item.from === "Wladi" && item.text &&
            (item.text.length > 12 ||
                item.text.includes("madonna") ||
                item.text.includes("dio") ||
                item.text.includes("cristo"));
    });
    const dataByPaolo = data.messages.filter(
        (item: any) =>
            item.from === "piripicchio picchiopiro" &&
            item.text && (item.text.length > 12 ||
                item.text.includes("madonna") ||
                item.text.includes("dio") ||
                item.text.includes("cristo"))
    );
    const dataByJacopo = data.messages.filter(
        (item: any) =>
            item.from === "Jacopo" && item.text &&
            (item.text.length > 12 ||
                item.text.includes("madonna") ||
                item.text.includes("dio") ||
                item.text.includes("cristo"))
    );
    const dataByGhigno = data.messages.filter(
        (item: any) =>
            item.from === "Ghigno" && item.text &&
            (item.text.length > 12 ||
                item.text.includes("madonna") ||
                item.text.includes("dio") ||
                item.text.includes("cristo"))
    );
    const dataByTramo = data.messages.filter(
        (item: any) =>
            item.from === "Daniele" && item.text &&
            (item.text.length > 12 ||
                item.text.includes("madonna") ||
                item.text.includes("dio") ||
                item.text.includes("cristo"))
    );
    const dataByBeppe = data.messages.filter(
        (item: any) =>
            item.from === "Beppe" && item.text &&
            (item.text.length > 12 ||
                item.text.includes("madonna") ||
                item.text.includes("dio") ||
                item.text.includes("cristo"))
    );

    return {
        dataByWladi,
        dataByPaolo,
        dataByJacopo,
        dataByGhigno,
        dataByTramo,
        dataByBeppe,
    };
}

function filterDataByAuthors(data: any) {
    const dataByAuthors = data.messages.filter((item: any) => {
        return (
            item.from === "Wladi" ||
            item.from === "piripicchio picchiopiro" ||
            item.from === "Jacopo" ||
            item.from === "Ghigno" ||
            item.from === "Daniele" ||
            item.from === "Beppe"
        );
    });
    if (dataByAuthors.length > 0) {
        const filteredData = dataByAuthors.filter(
            (item: any) =>
                item.text && (item.text.length > 15 ||
                    item.text.includes("madonna") ||
                    item.text.includes("dio") ||
                    item.text.includes("cristo"))
        );
        return filteredData;
    }
}

export { filterDataBySingle, filterDataByAuthors };