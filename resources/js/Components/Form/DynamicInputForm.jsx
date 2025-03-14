import { formatRupiah } from '@/utils/format_rupiah';
import { Button, Card, CardBody, Input, Select, SelectItem, Switch } from '@heroui/react';
import { PlusIcon, XCircleIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const DynamicInputForm = ({
    data,
    setData,
    processing,
    errors,
}) => {
    const [inputItems, setInputItems] = useState(data.inputs || []);

    const handleAddInput = () => {
        const newInputs = [...inputItems, { label: "", name: "", type: "", placeholder: "" }];
        setInputItems(newInputs);
        setData('inputs', newInputs);
    };

    const handleRemoveInput = (index) => {
        const updatedInputs = inputItems.filter((_, i) => i !== index);
        setInputItems(updatedInputs);
        setData('inputs', updatedInputs);

        const updatedPrices = [...prices];
        updatedPrices.splice(index, 1);
        setPrices(updatedPrices);
    };

    const handleInputChange = (index, field, value) => {
        const updatedInputs = [...inputItems];
        updatedInputs[index][field] = value;
        setInputItems(updatedInputs);
        setData('inputs', updatedInputs);
    };

    if (inputItems.length === 0) {
        handleAddInput();
    }

    return (
        <Card className="w-full">
            <CardBody className="flex flex-col gap-4">
                {inputItems.map((input, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <div className="flex flex-row items-center">
                            <h4 className="text-small font-medium">Input {index + 1}</h4>
                            {index > 0 && (
                                <Button
                                    isIconOnly
                                    size="sm"
                                    variant="light"
                                    className="ml-2"
                                    onPress={() => handleRemoveInput(index)}
                                >
                                    <XCircleIcon size={16} />
                                </Button>
                            )}
                        </div>
                        <div className="flex flex-row gap-2">
                            <Input
                                isRequired
                                label="Label"
                                labelPlacement="outside"
                                placeholder="Enter input label"
                                type="text"
                                value={input.label || ""}
                                errorMessage={errors[`inputs.${index}.label`] || "Please enter a valid label"}
                                isInvalid={errors[`inputs.${index}.label`]}
                                onChange={(e) => handleInputChange(index, "label", e.target.value)}
                            />
                            <Input
                                isRequired
                                label="Name"
                                labelPlacement="outside"
                                placeholder="Enter input name"
                                type="text"
                                value={input.name || ""}
                                errorMessage={errors[`inputs.${index}.name`] || "Please enter a valid name"}
                                isInvalid={errors[`inputs.${index}.name`]}
                                onChange={(e) => handleInputChange(index, "name", e.target.value)}
                            />
                            <Input
                                isRequired
                                label="Placeholder"
                                labelPlacement="outside"
                                placeholder="Enter input placeholder"
                                type="text"
                                value={input.placeholder || ""}
                                errorMessage={errors[`inputs.${index}.placeholder`] || "Please enter a valid placeholder"}
                                isInvalid={errors[`inputs.${index}.placeholder`]}
                                onChange={(e) => handleInputChange(index, "placeholder", e.target.value)}
                            />
                            <Select
                                items={[{
                                    type: "text"
                                }, {
                                    type: "number"
                                }, {
                                    type: "textarea"
                                }]}
                                label="Type Input"
                                labelPlacement="outside"
                                placeholder="Select a Type Input"
                                defaultSelectedKeys={input.type ? [input.type] : []}
                                onChange={(e) => {
                                    handleInputChange(index, "type", e.target.value);
                                }}
                            >
                                {(item) => (
                                    <SelectItem key={item.type} textValue={item.type}>
                                        <span className="text-small">{item.type}</span>
                                    </SelectItem>
                                )}
                            </Select>
                        </div>
                    </div>
                ))}

                <div className="flex flex-row gap-2 mt-2">
                    <Button
                        variant="flat"
                        startContent={<PlusIcon size={16} />}
                        onPress={handleAddInput}
                        disabled={processing}
                    >
                        Add Another Input
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
};

export default DynamicInputForm
