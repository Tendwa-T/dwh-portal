import _ from 'lodash';
import { createSelector } from 'reselect';

const listUnfiltered = state => state.artOptimizationOverview.listUnfiltered;
const listFiltered = state => state.artOptimizationOverview.listFiltered;
const filtered = state => state.filters.filtered;

export const getAdults = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.ageGroup === "Adult")
            .sumBy("txCurr")
            .value();
    }
);

export const getAdultsOnFirstLine = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.ageGroup === "Adult" && list.regimenLine === "First Regimen Line")
            .sumBy("txCurr")
            .value();
    }
);

export const getAdultsOnSecondLine = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.ageGroup === "Adult" && list.regimenLine === "Second Regimen Line")
            .sumBy("txCurr")
            .value();
    }
);

export const getAdultsOnThirdLine = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.ageGroup === "Adult" && list.regimenLine === "Third Regimen Line")
            .sumBy("txCurr")
            .value();
    }
);

export const getAdultsOnUndocumentedLine = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.ageGroup === "Adult" && list.regimenLine === "Undocumented Regimen Line")
            .sumBy("txCurr")
            .value();
    }
);


export const getChildren = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.ageGroup === "Child")
            .sumBy("txCurr")
            .value();
    }
);

export const getChildrenOnFirstLine = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.ageGroup === "Child" && list.regimenLine === "First Regimen Line")
            .sumBy("txCurr")
            .value();
    }
);

export const getChildrenOnSecondLine = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.ageGroup === "Child" && list.regimenLine === "Second Regimen Line")
            .sumBy("txCurr")
            .value();
    }
);

export const getChildrenOnThirdLine = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.ageGroup === "Child" && list.regimenLine === "Third Regimen Line")
            .sumBy("txCurr")
            .value();
    }
);

export const getChildrenOnUndocumentedLine = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.ageGroup === "Child" && list.regimenLine === "Undocumented Regimen Line")
            .sumBy("txCurr")
            .value();
    }
);

export const getMaleAdultsOnFirstLine = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.ageGroup === "Adult" && list.gender === "Male" && list.regimenLine === "First Regimen Line")
            .sumBy("txCurr")
            .value();
    }
);

export const getMaleAdultsOnSecondLine = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.ageGroup === "Adult" && list.gender === "Male" && list.regimenLine === "Second Regimen Line")
            .sumBy("txCurr")
            .value();
    }
);

export const getMaleAdultsOnThirdLine = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.ageGroup === "Adult" && list.gender === "Male" && list.regimenLine === "Third Regimen Line")
            .sumBy("txCurr")
            .value();
    }
);

export const getMaleAdultsOnUndocumentedLine = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.ageGroup === "Adult" && list.gender === "Male" && list.regimenLine === "Undocumented Regimen Line")
            .sumBy("txCurr")
            .value();
    }
);

export const getFemaleAdultsOnFirstLine = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.ageGroup === "Adult" && list.gender === "Female" && list.regimenLine === "First Regimen Line")
            .sumBy("txCurr")
            .value();
    }
);

export const getFemaleAdultsOnSecondLine = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.ageGroup === "Adult" && list.gender === "Female" && list.regimenLine === "Second Regimen Line")
            .sumBy("txCurr")
            .value();
    }
);

export const getFemaleAdultsOnThirdLine = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.ageGroup === "Adult" && list.gender === "Female" && list.regimenLine === "Third Regimen Line")
            .sumBy("txCurr")
            .value();
    }
);

export const getFemaleAdultsOnUndocumentedLine = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.ageGroup === "Adult" && list.gender === "Female" && list.regimenLine === "Undocumented Regimen Line")
            .sumBy("txCurr")
            .value();
    }
);

export const getAdultsOnTld = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.ageGroup === "Adult" && list.currentRegimen === "TLD")
            .sumBy("txCurr")
            .value();
    }
);

export const getMales = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.gender === "Male")
            .sumBy("txCurr")
            .value();
    }
);

export const getFemales = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.gender === "Female")
            .sumBy("txCurr")
            .value();
    }
);

export const getMalesOnTld = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.gender === "Male" && list.currentRegimen === "TLD")
            .sumBy("txCurr")
            .value();
    }
);

export const getFemalesOnTld = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.gender === "Female" && list.currentRegimen === "TLD")
            .sumBy("txCurr")
            .value();
    }
);

export const getAdultsOnNonTld = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.ageGroup === "Adult" && list.currentRegimen !== "TLD")
            .sumBy("txCurr")
            .value();
    }
);

export const getAdultsOnNvp = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        return _.chain(list)
            .filter(list => list.ageGroup === "Adult" && list.currentRegimen === "NVP")
            .sumBy("txCurr")
            .value();
    }
);
