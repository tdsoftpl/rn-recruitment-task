import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Filter.styled';
import BlankCard from '../BlankCard/BlankCard';

type Filters = {
  status: 'Alive' | 'Dead' | 'Unknown' | null;
  species: 'Human' | 'Humanoid' | null;
};

type FilterProps = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  onApply: () => void;
};

function CustomCheckbox({
  value,
  onValueChange,
}: {
  value: boolean;
  onValueChange: (value: boolean) => void;
}) {
  return (
    <TouchableOpacity
      style={[styles.checkbox, value && styles.checked]}
      onPress={() => onValueChange(!value)}>
      {value && <Text style={styles.checkmark}>✔</Text>}
    </TouchableOpacity>
  );
}

function Filter({filters, setFilters, onApply}: FilterProps) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [tempFilters, setTempFilters] = useState(filters);

  const handleStatusChange = (status: Filters['status']) => {
    setTempFilters(prev => ({
      ...prev,
      status: prev.status === status ? null : status,
    }));
  };

  const handleSpeciesChange = (species: Filters['species']) => {
    setTempFilters(prev => ({
      ...prev,
      species: prev.species === species ? null : species,
    }));
  };

  const resetFilters = () => {
    setTempFilters({status: null, species: null});
    setFilters({status: null, species: null});
    setDropdownVisible(false);
    onApply();
  };

  const handleApply = () => {
    setFilters(tempFilters);
    setDropdownVisible(false);
    onApply();
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
    setTempFilters(filters);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filterButton} onPress={toggleDropdown}>
        <Text style={styles.filterButtonText}>
          FILTER {isDropdownVisible ? '▲' : '▼'}
        </Text>
      </TouchableOpacity>
      {isDropdownVisible && (
        <BlankCard>
          <Text style={styles.heading}>STATUS</Text>
          <View style={styles.checkboxContainer}>
            <CustomCheckbox
              value={tempFilters.status === 'Alive'}
              onValueChange={() => handleStatusChange('Alive')}
            />
            <Text style={styles.checkboxLabel}>Alive</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CustomCheckbox
              value={tempFilters.status === 'Dead'}
              onValueChange={() => handleStatusChange('Dead')}
            />
            <Text style={styles.checkboxLabel}>Dead</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CustomCheckbox
              value={tempFilters.status === 'Unknown'}
              onValueChange={() => handleStatusChange('Unknown')}
            />
            <Text style={styles.checkboxLabel}>Unknown</Text>
          </View>
          <Text style={styles.heading}>SPECIES</Text>
          <View style={styles.checkboxContainer}>
            <CustomCheckbox
              value={tempFilters.species === 'Human'}
              onValueChange={() => handleSpeciesChange('Human')}
            />
            <Text style={styles.checkboxLabel}>Human</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CustomCheckbox
              value={tempFilters.species === 'Humanoid'}
              onValueChange={() => handleSpeciesChange('Humanoid')}
            />
            <Text style={styles.checkboxLabel}>Humanoid</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.resetButton} onPress={resetFilters}>
              <Text style={styles.resetButtonText}>RESET</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
              <Text style={styles.applyButtonText}>APPLY</Text>
            </TouchableOpacity>
          </View>
        </BlankCard>
      )}
    </View>
  );
}

export default Filter;
