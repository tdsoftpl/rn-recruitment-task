import React, {useEffect, useState} from 'react';
import {useCharacters} from '../../../../hooks/useCharacters';
import {Text, View} from 'react-native';
import Checkbox from '../../../../components/Checkbox/Checkbox';
import Button from '../../../../components/Button/Button';
import ChevronDownIcon from '../../../../icons/ChevronDown';
import {styles} from './Filters.styled';
import {colors} from '../../../../styles/global';
import type {Filters} from '../../../../types/Filters';

export default function Filters() {
  const {filters: appliedFilters, setFilters: setAppliedFilters} =
    useCharacters();

  const [open, setOpen] = useState(false);

  const [filters, setFilters] = useState<Filters>({
    status: appliedFilters?.status,
    species: appliedFilters?.species,
  });

  function handleFilter<K extends keyof Filters>(key: K, value: Filters[K]) {
    setFilters(prevState => ({
      ...prevState,
      [key]: prevState[key] === value ? undefined : value, // Toggle filter value if already selected
    }));
  }

  function resetFilters() {
    setFilters({
      status: undefined,
      species: undefined,
    });

    // Reset filters
    setAppliedFilters(undefined);
    setOpen(false);
  }

  function applyFilters() {
    // Apply filters only when they changed
    if (
      filters.status !== appliedFilters?.status ||
      filters.species !== appliedFilters?.species
    ) {
      setAppliedFilters(filters);
    }
    setOpen(false);
  }

  function onFilterPress() {
    if (open) {
      // If there are no `appliedFilters` and there are `filters`, reset `filters`
      if (
        !appliedFilters?.status &&
        !appliedFilters?.species &&
        (filters.status || filters.species)
      ) {
        resetFilters();
      } else if (
        // If `filters` changed but they are not applied then reset `filters`
        filters.status !== appliedFilters?.status ||
        filters.species !== appliedFilters?.species
      ) {
        setFilters({
          status: appliedFilters?.status,
          species: appliedFilters?.species,
        });
      }
    }

    // Toggle open/close
    setOpen(!open);
  }

  useEffect(() => {
    setFilters({
      status: appliedFilters?.status,
      species: appliedFilters?.species,
    });
  }, [appliedFilters]);

  return (
    <View style={styles.container}>
      <Button
        name="FILTER"
        variant={open ? 'primaryActive' : 'primary'}
        icon={
          <View style={open && styles.iconRotate}>
            <ChevronDownIcon color={colors.white} size={10} />
          </View>
        }
        style={styles.filterBtn}
        onPress={onFilterPress}
      />

      <View style={[styles.filtersContainer, open && styles.open]}>
        <View style={styles.filtersSection}>
          <Text style={styles.filtersHeader}>Status</Text>

          <Checkbox
            label="Alive"
            checked={filters.status === 'alive'}
            onPress={() => handleFilter('status', 'alive')}
          />
          <Checkbox
            label="Dead"
            checked={filters.status === 'dead'}
            onPress={() => handleFilter('status', 'dead')}
          />
          <Checkbox
            label="Unknown"
            checked={filters.status === 'unknown'}
            onPress={() => handleFilter('status', 'unknown')}
          />
        </View>

        <View style={styles.filtersSection}>
          <Text style={styles.filtersHeader}>Species</Text>

          <Checkbox
            label="Human"
            checked={filters.species === 'human'}
            onPress={() => handleFilter('species', 'human')}
          />
          <Checkbox
            label="Humanoid"
            checked={filters.species === 'humanoid'}
            onPress={() => handleFilter('species', 'humanoid')}
          />
        </View>

        <View style={styles.btnsContainer}>
          <Button name="RESET" variant="outline" onPress={resetFilters} />
          <Button name="APPLY" variant="primary" onPress={applyFilters} />
        </View>
      </View>
    </View>
  );
}
