import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { RenderTopTabs } from '../Renders';

const EATopTabs = ({ tabs, onTabChange }) => {
  const [State, setState] = useState({ selectedTab: tabs[0] });

  useEffect(() => {
    onTabChange?.(State.selectedTab);
  }, [State.selectedTab]);

  return (
    <View>
      <FlatList
        data={tabs}
        keyExtractor={(v, i) => String(i)}
        horizontal={true}
        contentContainerStyle={{ paddingHorizontal: 12, paddingVertical: 10 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <RenderTopTabs
            item={item}
            index={index}
            selectedTab={State.selectedTab.value === item.value}
            onPress={v => setState(p => ({ ...p, selectedTab: v }))}
          />
        )}
      />
    </View>
  );
};

export default EATopTabs;
