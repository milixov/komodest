import React from 'react';
import { Drawer, useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next'

const DrawerContent = (props) => {

    const { state, navigation } = props;
    const isFocused = navigation.isFocused();
    const { t } = useTranslation('drawer')
    const { colors } = useTheme();

    function handleItemPress(item) {
        if (isFocused) {
            navigation.closeDrawer()
        } else {
            navigation.navigate(item.name)
        }
    }

    return (
        <Drawer.Section title={t('title')} style={{backgroundColor: colors.background}}>
            {
                state && state.routes && Array.isArray(state.routes) &&
                state.routes.map((item) =>
                    <Drawer.Item
                        key={item.key}
                        label={t(item.name)}
                        active={isFocused}
                        style={{
                            backgroundColor: isFocused ? colors.text : colors.primary,
                            color: isFocused ? colors.primary : colors.text,
                        }}
                        onPress={() => handleItemPress(item)}
                    />
                )
            }
        </Drawer.Section>
    )
};

export default DrawerContent;