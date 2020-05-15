import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountry } from "../../api";

import styles from "./CountryPicker.css";

export default function CountryPicker({ handleCountryChange }) {
    const [countryData, setCountryData] = useState([]);

    useEffect(() => {
        const fetchCountryData = async () => {
            setCountryData(await fetchCountry());
        };
        fetchCountryData();
    }, [setCountryData]);

    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect
                    defaultValue=""
                    onChange={e => handleCountryChange(e.target.value)}
                >
                    {countryData.map((country, i) => (
                        <option value={country} key={i}>
                            {country}
                        </option>
                    ))}
                </NativeSelect>
            </FormControl>
        </div>
    );
}
