import { createSelector } from 'reselect';
import CurrentOnArtVerifiedByAgeSex from './../../../views/CT/CurrentOnArt/CurrentOnArtVerifiedByAgeSex';

const listUnfiltered = state => state.currentOnArtVerifiedByCounty.listUnfiltered;
const listFiltered = state => state.currentOnArtVerifiedByCounty.listFiltered;
const listUnfilteredTxCurr = (state) => state.currentOnArtByCounty.listUnfiltered;
const listFilteredTxCurr = (state) => state.currentOnArtByCounty.listFiltered;
const filtered = state => state.filters.filtered;

export const getCurrentOnArtByCounty = createSelector(
    [
        listUnfiltered,
        listFiltered,
        filtered,
        listUnfilteredTxCurr,
        listFilteredTxCurr,
    ],
    (
        listUnfiltered,
        listFiltered,
        filtered,
        listUnfilteredTxCurr,
        listFilteredTxCurr
    ) => {
        const list = filtered ? listFiltered : listUnfiltered;
        const counties = [];
        const CurrentOnArtVerified = [];
        const listTxCurr = filtered ? listFilteredTxCurr : listUnfilteredTxCurr;
        const currentOnArt = [];

        for (let i = 0; i < listTxCurr.length; i++) {
            if (!listTxCurr[i].County) {
                continue;
            }
            counties.push(listTxCurr[i].County.toUpperCase());
            currentOnArt.push(listTxCurr[i].txCurr);
            CurrentOnArtVerified.push(
                list.find(
                    (x) =>
                        x.County.toUpperCase() ===
                        listTxCurr[i].County.toUpperCase()
                )?.NumNupi ?? 0 // 0 if NumNUPI isnt found
            );
        }

        return { counties, CurrentOnArtVerified, currentOnArt };
    }
);