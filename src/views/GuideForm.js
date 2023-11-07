import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, Select, Upload, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { message } from 'antd';

const { Option } = Select;

const GuideForm = () => {
    const [image, setImage] = useState(null)
    const [adhaar, setAdhaar] = useState(null)
    const [pan, setPan] = useState(null)
    const [other, setOther] = useState(null)

    const handleChange = (e) => {
        setImage(e.target.files[0])
    }



    const onFinish = async (values) => {
        const formData = new FormData();
        // formData.append('guide_id', '12345678-1234-5678-1234-547812345678');
        formData.append('titles', values.titles);
        formData.append('first_name', values.first_name);
        formData.append('last_name', values.last_name);
        formData.append('bio', values.bio);
        formData.append('image', values?.image?.file);
        formData.append('dob', values.dob?.format('DD/MM/YYYY'));
        formData.append('gender', values.gender);
        formData.append('guide_city', values.guide_city);
        formData.append('guide_state', values.guide_state);
        formData.append('guide_country', values.guide_country);
        formData.append('contact_number', values.contact_number);
        formData.append('whatsapp_number', values.whatsapp_number);
        formData.append('email', values.email);
        formData.append('languages', values.languages);
        formData.append('activities', values.activities);
        formData.append('hobbies', values.hobbies);
        formData.append('guide_spot_city', values.guide_spot_city);
        formData.append('guide_spot_places', values.guide_spot_places);
        formData.append('experience', values.experience);
        formData.append('price_per_day', values.price_per_day);
        formData.append('aadhar_id', values?.aadhar_id?.file);
        // formData.append('pan_id', values?.pan_id?.file);
        // formData.append('other_id', values?.other_id?.file);
        formData.append('submitted_by', values.submitted_by);
        formData.append('submitted_name', values.submitted_name);
        formData.append('submitted_phone', values.submitted_phone);

        try {
            const response = await fetch('https://rashailmachinetest.pythonanywhere.com/test/guide_personal_details/', {
                method: 'POST',
                body: formData,

            });

            if (response.ok) {

                message.success('Form submitted successfully');
            } else {

                message.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Form
            name="guideForm"
            onFinish={onFinish}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
        >
            <Form.Item label="Title" name="titles">
                <Input />
            </Form.Item>
            <Form.Item label="First Name" name="first_name">
                <Input />
            </Form.Item>
            <Form.Item label="Last Name" name="last_name">
                <Input />
            </Form.Item>
            <Form.Item label="Bio" name="bio">
                <Input.TextArea />
            </Form.Item>
            <Form.Item label="Image" name="image">

                <Upload
                    beforeUpload={() => false}
                    accept="image/*"
                    maxCount={1}
                    listType="picture"
                >
                    <Button icon={<UploadOutlined />}>Select File</Button>
                </Upload>
            </Form.Item>
            <Form.Item label="Date of Birth" name="dob">
                <DatePicker />
            </Form.Item>
            <Form.Item label="Gender" name="gender">
                <Select>
                    <Option value="Male">Male</Option>
                    <Option value="Female">Female</Option>
                </Select>
            </Form.Item>
            <Form.Item label="Guide City" name="guide_city">
                <Input />
            </Form.Item>
            <Form.Item label="Guide State" name="guide_state">
                <Input />
            </Form.Item>
            <Form.Item label="Guide Country" name="guide_country">
                <Input />
            </Form.Item>
            <Form.Item label="Contact Number" name="contact_number">
                <Input />
            </Form.Item>
            <Form.Item label="WhatsApp Number" name="whatsapp_number">
                <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
                <Input />
            </Form.Item>
            <Form.Item label="Languages" name="languages">
                <Input />
            </Form.Item>
            <Form.Item label="Activities" name="activities">
                <Input />
            </Form.Item>
            <Form.Item label="Hobbies" name="hobbies">
                <Input />
            </Form.Item>
            <Form.Item label="Guide Spot City" name="guide_spot_city">
                <Input />
            </Form.Item>
            <Form.Item label="Guide Spot Places" name="guide_spot_places">
                <Input />
            </Form.Item>
            <Form.Item label="Experience" name="experience">
                <InputNumber />
            </Form.Item>
            <Form.Item label="Price Per Day" name="price_per_day">
                <InputNumber />
            </Form.Item>
            <Form.Item label="Aadhar ID" name="aadhar_id">
                <Upload
                    beforeUpload={() => false}
                    accept="image/*"
                    maxCount={1}
                    listType="picture"
                >
                    <Button icon={<UploadOutlined />}>Select File</Button>
                </Upload>
            </Form.Item>
            <Form.Item label="Pan ID" name="pan_id">
                <Upload
                    beforeUpload={() => false}
                    accept="image/*"
                    maxCount={1}
                    listType="picture"
                >
                    <Button icon={<UploadOutlined />}>Select File</Button>
                </Upload>
            </Form.Item>
            <Form.Item label="Other ID" name="other_id">
                <Upload
                    beforeUpload={() => false}
                    accept="image/*"
                    maxCount={1}
                    listType="picture"
                >
                    <Button icon={<UploadOutlined />}>Select File</Button>
                </Upload>
            </Form.Item>
            <Form.Item label="Submitted By" name="submitted_by">
                <Input />
            </Form.Item>
            <Form.Item label="Submitted Name" name="submitted_name">
                <Input />
            </Form.Item>
            <Form.Item label="Submitted Phone" name="submitted_phone">
                <Input />
            </Form.Item>
            <Form.Item label=" ">
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default GuideForm;
