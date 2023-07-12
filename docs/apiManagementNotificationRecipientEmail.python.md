# `azurerm_api_management_notification_recipient_email`

Refer to the Terraform Registory for docs: [`azurerm_api_management_notification_recipient_email`](https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email).

# `apiManagementNotificationRecipientEmail` Submodule <a name="`apiManagementNotificationRecipientEmail` Submodule" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementNotificationRecipientEmail <a name="ApiManagementNotificationRecipientEmail" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email azurerm_api_management_notification_recipient_email}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_notification_recipient_email

apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_management_id: str,
  email: str,
  notification_type: str,
  id: str = None,
  timeouts: ApiManagementNotificationRecipientEmailTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.apiManagementId">api_management_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#api_management_id ApiManagementNotificationRecipientEmail#api_management_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#email ApiManagementNotificationRecipientEmail#email}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.notificationType">notification_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#notification_type ApiManagementNotificationRecipientEmail#notification_type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#id ApiManagementNotificationRecipientEmail#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts">ApiManagementNotificationRecipientEmailTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_management_id`<sup>Required</sup> <a name="api_management_id" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.apiManagementId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#api_management_id ApiManagementNotificationRecipientEmail#api_management_id}.

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#email ApiManagementNotificationRecipientEmail#email}.

---

##### `notification_type`<sup>Required</sup> <a name="notification_type" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.notificationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#notification_type ApiManagementNotificationRecipientEmail#notification_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#id ApiManagementNotificationRecipientEmail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts">ApiManagementNotificationRecipientEmailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#timeouts ApiManagementNotificationRecipientEmail#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#create ApiManagementNotificationRecipientEmail#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#delete ApiManagementNotificationRecipientEmail#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#read ApiManagementNotificationRecipientEmail#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_notification_recipient_email

apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_notification_recipient_email

apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_notification_recipient_email

apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference">ApiManagementNotificationRecipientEmailTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.apiManagementIdInput">api_management_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.notificationTypeInput">notification_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts">ApiManagementNotificationRecipientEmailTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.apiManagementId">api_management_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.notificationType">notification_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.timeouts"></a>

```python
timeouts: ApiManagementNotificationRecipientEmailTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference">ApiManagementNotificationRecipientEmailTimeoutsOutputReference</a>

---

##### `api_management_id_input`<sup>Optional</sup> <a name="api_management_id_input" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.apiManagementIdInput"></a>

```python
api_management_id_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `notification_type_input`<sup>Optional</sup> <a name="notification_type_input" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.notificationTypeInput"></a>

```python
notification_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApiManagementNotificationRecipientEmailTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts">ApiManagementNotificationRecipientEmailTimeouts</a>]

---

##### `api_management_id`<sup>Required</sup> <a name="api_management_id" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.apiManagementId"></a>

```python
api_management_id: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `notification_type`<sup>Required</sup> <a name="notification_type" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.notificationType"></a>

```python
notification_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmail.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementNotificationRecipientEmailConfig <a name="ApiManagementNotificationRecipientEmailConfig" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_notification_recipient_email

apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_management_id: str,
  email: str,
  notification_type: str,
  id: str = None,
  timeouts: ApiManagementNotificationRecipientEmailTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.apiManagementId">api_management_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#api_management_id ApiManagementNotificationRecipientEmail#api_management_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#email ApiManagementNotificationRecipientEmail#email}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.notificationType">notification_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#notification_type ApiManagementNotificationRecipientEmail#notification_type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#id ApiManagementNotificationRecipientEmail#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts">ApiManagementNotificationRecipientEmailTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_management_id`<sup>Required</sup> <a name="api_management_id" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.apiManagementId"></a>

```python
api_management_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#api_management_id ApiManagementNotificationRecipientEmail#api_management_id}.

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#email ApiManagementNotificationRecipientEmail#email}.

---

##### `notification_type`<sup>Required</sup> <a name="notification_type" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.notificationType"></a>

```python
notification_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#notification_type ApiManagementNotificationRecipientEmail#notification_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#id ApiManagementNotificationRecipientEmail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailConfig.property.timeouts"></a>

```python
timeouts: ApiManagementNotificationRecipientEmailTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts">ApiManagementNotificationRecipientEmailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#timeouts ApiManagementNotificationRecipientEmail#timeouts}

---

### ApiManagementNotificationRecipientEmailTimeouts <a name="ApiManagementNotificationRecipientEmailTimeouts" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_notification_recipient_email

apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#create ApiManagementNotificationRecipientEmail#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#delete ApiManagementNotificationRecipientEmail#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#read ApiManagementNotificationRecipientEmail#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#create ApiManagementNotificationRecipientEmail#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#delete ApiManagementNotificationRecipientEmail#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_notification_recipient_email#read ApiManagementNotificationRecipientEmail#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementNotificationRecipientEmailTimeoutsOutputReference <a name="ApiManagementNotificationRecipientEmailTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_notification_recipient_email

apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts">ApiManagementNotificationRecipientEmailTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementNotificationRecipientEmailTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementNotificationRecipientEmail.ApiManagementNotificationRecipientEmailTimeouts">ApiManagementNotificationRecipientEmailTimeouts</a>]

---



