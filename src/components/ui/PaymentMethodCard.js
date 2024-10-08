import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../../theme/ThemeProvider';
import { Clipboard } from 'react-native';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';

function PaymentMethodCard() {
    const { theme } = useTheme();
    const navigation = useNavigation();

    const [selectedMethod, setSelectedMethod] = useState(1);
    const [isDifferentLocation, setIsDifferentLocation] = useState(false);
    const [isCardSelectionVisible, setIsCardSelectionVisible] = useState(false);

    const toggleCheckbox = () => setIsDifferentLocation(!isDifferentLocation);

    const paymentMethods = [
        { id: 1, name: 'Card Payment' },
        { id: 2, name: 'Bank Transfer' }
    ];

    const cards = [
        {
            id: 1,
            cardLogo: require("../../../assets/MasterCard.png"),
            cardNumber: "5344 **** **** 3456",
            expiringDate: "06 / 23"
        },
        {
            id: 2,
            cardLogo: require("../../../assets/Visa.png"),
            cardNumber: "4674 **** **** 8908",
            expiringDate: "Expiry Date"
        },
    ];

    const banks = [
        {
            id: 1,
            title: "Bank:",
            subTitle: "First Bank of Nigeria"
        },
        {
            id: 2,
            title: "Account Number:",
            subTitle: "1234567890"
        },
        {
            id: 3,
            title: "Account Name:",
            subTitle: "HiPrep Nigeria"
        },
    ];

    const handleSelectMethod = (id) => {
        setSelectedMethod(id);
    };

    const handlePay = () => {
        setIsCardSelectionVisible(true);
    };

    return (
        <View>
            <View style={styles.container}>
                {paymentMethods.map((method) => (
                    <TouchableOpacity 
                        key={method.id} 
                        style={[
                            styles.cardContainer, 
                            { borderColor: selectedMethod === method.id ? theme.colors.primary : "#E7F0F3" }
                        ]}
                        onPress={() => handleSelectMethod(method.id)} 
                    >
                        <View style={[styles.iconContainer, { backgroundColor: selectedMethod === method.id ? theme.colors.primary : "#fff" }]}>
                            {selectedMethod === method.id && (
                                <MaterialIcons name="check" size={18} color='#fff' />
                            )}
                        </View>
                        <Text style={[styles.cardText, { fontFamily: theme.fonts.bold, color: theme.colors.primary }]}>
                            {method.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {selectedMethod === 1 && !isCardSelectionVisible ? (
                <View style={styles.formContainer}>
                    <Text style={[styles.formHeader, { fontFamily: theme.fonts.bold, color: theme.colors.text }]}>Enter your card details to pay</Text>
                    <Text style={[styles.label, { fontFamily: theme.fonts.regular }]}>Card Holder Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your card holder name"
                    />
                    <Text style={[styles.label, { fontFamily: theme.fonts.regular }]}>Card Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your card number"
                    />
                    <View style={styles.daySelectionContainer}>
                        <View style={{ width: "45%" }}>
                            <Text style={[styles.label, { fontFamily: theme.fonts.regular }]}>Card Expiry</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Expiry Date"
                            />
                        </View>
                        <View style={{ width: "45%" }}>
                            <Text style={[styles.label, { fontFamily: theme.fonts.regular }]}>CVV</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your CVV"
                                secureTextEntry={true}
                            />
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={handlePay}
                    >
                        <Button
                            title='Pay'
                            style={[styles.button, { backgroundColor: theme.colors.buttonBackground }]}
                            textStyle={{ color: theme.colors.buttonText }}
                        />
                    </TouchableOpacity>
                </View>
            ) : selectedMethod === 1 && isCardSelectionVisible ? (
                <View style={styles.cardSelectionContainer}>
                    {cards.map((card, index) => (
                        <TouchableOpacity key={index} style={styles.cards}>
                            <Image source={card.cardLogo} />
                            <View>
                                <Text style={[styles.cardNumber, { fontFamily: theme.fonts.bold }]}>{card.cardNumber}</Text>
                                <Text style={[styles.expiringDate, { fontFamily: theme.fonts.regular }]}>{card.expiringDate}</Text>
                            </View>
                            <TouchableOpacity onPress={toggleCheckbox} style={styles.checkboxContainer}>
                                <TouchableOpacity
                                    style={[styles.checkbox, { borderColor: theme.colors.secondary }]}
                                    onPress={toggleCheckbox}
                                >
                                    {isDifferentLocation &&
                                        <View style={[styles.checkedBox, { backgroundColor: theme.colors.brand }]}>
                                            <MaterialIcons name="check" size={16} color="#fff" />
                                        </View>}
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity style={[styles.cardContainer, { width: "100%", borderColor: "#E7F0F3", justifyContent: 'center' }]}>
                        <MaterialIcons name="credit-card" size={21} color={theme.colors.brand} />
                        <Text style={[styles.newCard, { fontFamily: theme.fonts.regular, color: theme.colors.secondary }]}>Add New Card</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.formContainer}>
                    <Text style={[styles.formLabel, { fontFamily: theme.fonts.bold }]}>
                        Bank Details
                    </Text>
                    {banks.map((bank, index) => (
                        <TouchableOpacity key={index} style={[styles.cards, { justifyContent: "flex-start" }]}>
                            <View style={[styles.iconContainer, { width: 40, height: 40 }]}>
                                <MaterialIcons name="account-balance" size={24} color={theme.colors.brand} />
                            </View>

                            <TouchableOpacity onPress={() => Clipboard.setString(bank.subTitle)} style={styles.bankDetails}>
                                <Text style={[styles.cardNumber, { fontFamily: theme.fonts.bold }]}>{bank.title}</Text>
                                <Text style={[styles.expiringDate, { fontFamily: theme.fonts.regular }]}>{bank.subTitle}</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    ))}

                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('PaymentInfo')}>
                      <Button title='Confirm Payment' />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    // Styles remain the same as before
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 20
    },
    cardContainer: {
        padding: 16,
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        width: '48%',
    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#E7F0F3',
    },
    cardText: {
        fontSize: 14,
        marginLeft: 10,
    },
    formContainer: {
        paddingVertical: 24,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: "#E7F0F3",
        borderRadius: 8
    },
    formHeader: {
        fontSize: 16,
        marginBottom: 10
    },
    buttonContainer: {
        marginVertical: 20
    },
    input: {
        borderWidth: 2,
        borderColor: "#E7F0F3",
        padding: 16,
        borderRadius: 8,
        width: "100%",
        marginVertical: 5
    },
    daySelectionContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
        marginTop: 10,
    },
    cards: {
        padding: 16,
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: "#E7F0F3"
    },
    cardNumber: {
        fontSize: 14
    },
    expiringDate: {
        fontSize: 12,
        color: "#888"
    },
    checkboxContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkedBox: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    newCard: {
        marginLeft: 10
    },
    bankDetails: {
        marginLeft: 15
    },
});

export default PaymentMethodCard;
