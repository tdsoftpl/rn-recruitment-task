import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import Checkbox from 'expo-checkbox';

interface FilterModalProps {
  visible: boolean;
  selectedStatus: string[];
  selectedSpecies: string[];
  onSelectStatus: (sortType: string[]) => void;
  onSelectedSpecies: (sortType: string[]) => void;
  onClose: () => void;
  onConfirm: () => void;
}

const FiltersModal = ({
  visible,
  selectedStatus,
  selectedSpecies,
  onSelectStatus,
  onSelectedSpecies,
  onClose,
  onConfirm,
}: FilterModalProps) => {
  const statusOptions = ['Alive', 'Dead', 'Unknown'];
  const speciesOptions = ['Human', 'Humanoid'];
  const toggleItem = (
    value: string,
    currentList: string[],
    onChange: (list: string[]) => void,
  ) => {
    if (currentList.includes(value)) {
      onChange(currentList.filter(item => item !== value));
    } else {
      onChange([...currentList, value]);
    }
  };

  const resetFilters = () => {
    onSelectStatus([]);
    onSelectedSpecies([]);
  };

  return (
    <>
      {visible && (
        <View className="absolute mt-[150] justify-center items-center">
          <View className="flex-1 justify-center items-center w-full h-full">
            <View className="flex-1 justify-center items-center mb-6">
              <View className="relative">
                <View className="absolute bg-[#162C1B] rounded-3xl w-[358] h-[325] z-10 top-2 left-2" />
                <View className="border border-[#162C1B] p-4 rounded-3xl bg-white z-10 w-[358] h-[325]">
                  <View className="mb-4">
                    <Text className="text-[#59695C] font-medium text-lg mb-2">
                      STATUS
                    </Text>
                    {statusOptions.map(option => (
                      <TouchableOpacity
                        key={option}
                        className="flex-row items-center mb-2"
                        onPress={() =>
                          toggleItem(option, selectedStatus, onSelectStatus)
                        }>
                        <Checkbox
                          value={selectedStatus.includes(option)}
                          onValueChange={() =>
                            toggleItem(option, selectedStatus, onSelectStatus)
                          }
                          color={
                            selectedStatus.includes(option)
                              ? '#162C1B'
                              : undefined
                          }
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: 4,
                            borderWidth: 1.5,
                            borderColor: selectedStatus.includes(option)
                              ? '#162C1B'
                              : '#B3C2B0',
                            backgroundColor: selectedStatus.includes(option)
                              ? '#162C1B'
                              : 'white',
                          }}
                        />
                        <Text className="ml-2 text-[#162C1B] text-lg">
                          {option}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>

                  <View className="mb-6">
                    <Text className="text-[#59695C] font-medium text-lg mb-2">
                      SPECIES
                    </Text>
                    {speciesOptions.map(option => (
                      <TouchableOpacity
                        key={option}
                        className="flex-row items-center mb-2"
                        onPress={() =>
                          toggleItem(option, selectedSpecies, onSelectedSpecies)
                        }>
                        <Checkbox
                          value={selectedSpecies.includes(option)}
                          onValueChange={() =>
                            toggleItem(
                              option,
                              selectedSpecies,
                              onSelectedSpecies,
                            )
                          }
                          color={
                            selectedSpecies.includes(option)
                              ? '#162C1B'
                              : undefined
                          }
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: 4,
                            borderWidth: 1.5,
                            borderColor: selectedSpecies.includes(option)
                              ? '#162C1B'
                              : '#DAE4DC',
                            backgroundColor: selectedSpecies.includes(option)
                              ? '#162C1B'
                              : 'white',
                          }}
                        />
                        <Text className="ml-2 text-[#162C1B] text-lg">
                          {option}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>

                  <View className="flex-row justify-between">
                    <TouchableOpacity
                      onPress={resetFilters}
                      className="px-4 py-2 border border-[#162C1B] rounded-full">
                      <Text className="text-[#162C1B] font-semibold text-base">
                        RESET
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={onConfirm}
                      className="px-5 py-2 bg-[#162C1B] rounded-full">
                      <Text className="text-white font-semibold text-base">APPLY</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default FiltersModal;
