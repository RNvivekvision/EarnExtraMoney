import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { RNContainer, RNHeader, RNPagginationLoader } from '../../Common';
import { RenderSmartWays } from '../App';
import { useInset } from '../../Hooks';
import { hp } from '../../Theme';

const LOCards = ({ title, data }) => {
  const inset = useInset();
  const [State, setState] = useState({
    data: data.slice(0, 10),
    dataEnd: 10,
    finished: false,
  });

  const loadMoreData = useCallback(() => {
    const newDataEnd = State.dataEnd + 10;
    const newData = data.slice(0, newDataEnd);
    setState(p => ({
      ...p,
      data: newData,
      dataEnd: newDataEnd,
      finished: newData.length === data.length,
    }));
  }, [State.dataEnd, State.data]);

  return (
    <RNContainer>
      <RNHeader title={title} back noScroll>
        <FlatList
          data={State.data}
          keyExtractor={(v, i) => String(i)}
          contentContainerStyle={{
            paddingVertical: hp(1),
            paddingBottom: inset.bottom + hp(1),
          }}
          renderItem={({ item, index }) => (
            <RenderSmartWays item={item} index={index} />
          )}
          onEndReached={loadMoreData}
          onEndReachedThreshold={2}
          ListFooterComponent={
            State.finished ? null : <RNPagginationLoader size={'small'} />
          }
        />
      </RNHeader>
    </RNContainer>
  );
};

export default LOCards;
