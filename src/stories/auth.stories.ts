// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from "@storybook/svelte"
import AuthField from "@lib/components/auth/AuthField.svelte"

const meta = {
    title: "Auth/Field",
    component: AuthField,
    tags: ["autodocs"]
} satisfies Meta<AuthField>

export default meta
type Story = StoryObj<typeof meta>

export const TextType: Story = {
    args: {
        type: "text",
        label: "Text Type",
        value: ""
    }
}

export const EmailType: Story = {
    args: {
        type: "email",
        label: "Email Type",
        value: ""
    }
}

export const PasswordType: Story = {
    args: {
        type: "password",
        label: "Password Type",
        value: ""
    }
}
