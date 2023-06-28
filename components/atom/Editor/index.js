import { Avatar, Form, Button, List, Input } from "antd";

const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item style={{ width: "100%" }}>
      <TextArea
        rows={4}
        onChange={e => {
          onChange(e.target.value);
        }}
        value={value}
      />
    </Form.Item>
    <Form.Item
      style={{
        width: "100%",
        textAlign: "right",
      }}
    >
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
);

export default Editor;
