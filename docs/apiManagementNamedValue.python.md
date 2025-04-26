# `apiManagementNamedValue` Submodule <a name="`apiManagementNamedValue` Submodule" id="@cdktf/provider-azurerm.apiManagementNamedValue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementNamedValue <a name="ApiManagementNamedValue" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value azurerm_api_management_named_value}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_named_value

apiManagementNamedValue.ApiManagementNamedValue(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_management_name: str,
  display_name: str,
  name: str,
  resource_group_name: str,
  id: str = None,
  secret: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None,
  timeouts: ApiManagementNamedValueTimeouts = None,
  value: str = None,
  value_from_key_vault: ApiManagementNamedValueValueFromKeyVault = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.apiManagementName">api_management_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#api_management_name ApiManagementNamedValue#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#display_name ApiManagementNamedValue#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#name ApiManagementNamedValue#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#resource_group_name ApiManagementNamedValue#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#id ApiManagementNamedValue#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.secret">secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#secret ApiManagementNamedValue#secret}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#tags ApiManagementNamedValue#tags}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeouts">ApiManagementNamedValueTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#value ApiManagementNamedValue#value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.valueFromKeyVault">value_from_key_vault</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVault">ApiManagementNamedValueValueFromKeyVault</a></code> | value_from_key_vault block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.apiManagementName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#api_management_name ApiManagementNamedValue#api_management_name}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#display_name ApiManagementNamedValue#display_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#name ApiManagementNamedValue#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#resource_group_name ApiManagementNamedValue#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#id ApiManagementNamedValue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.secret"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#secret ApiManagementNamedValue#secret}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#tags ApiManagementNamedValue#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeouts">ApiManagementNamedValueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#timeouts ApiManagementNamedValue#timeouts}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#value ApiManagementNamedValue#value}.

---

##### `value_from_key_vault`<sup>Optional</sup> <a name="value_from_key_vault" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.Initializer.parameter.valueFromKeyVault"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVault">ApiManagementNamedValueValueFromKeyVault</a>

value_from_key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#value_from_key_vault ApiManagementNamedValue#value_from_key_vault}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.putValueFromKeyVault">put_value_from_key_vault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.resetSecret">reset_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.resetValueFromKeyVault">reset_value_from_key_vault</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#create ApiManagementNamedValue#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#delete ApiManagementNamedValue#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#read ApiManagementNamedValue#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#update ApiManagementNamedValue#update}.

---

##### `put_value_from_key_vault` <a name="put_value_from_key_vault" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.putValueFromKeyVault"></a>

```python
def put_value_from_key_vault(
  secret_id: str,
  identity_client_id: str = None
) -> None
```

###### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.putValueFromKeyVault.parameter.secretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#secret_id ApiManagementNamedValue#secret_id}.

---

###### `identity_client_id`<sup>Optional</sup> <a name="identity_client_id" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.putValueFromKeyVault.parameter.identityClientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#identity_client_id ApiManagementNamedValue#identity_client_id}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.resetSecret"></a>

```python
def reset_secret() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_value_from_key_vault` <a name="reset_value_from_key_vault" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.resetValueFromKeyVault"></a>

```python
def reset_value_from_key_vault() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApiManagementNamedValue resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_named_value

apiManagementNamedValue.ApiManagementNamedValue.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_named_value

apiManagementNamedValue.ApiManagementNamedValue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_named_value

apiManagementNamedValue.ApiManagementNamedValue.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_named_value

apiManagementNamedValue.ApiManagementNamedValue.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApiManagementNamedValue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiManagementNamedValue to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiManagementNamedValue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementNamedValue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference">ApiManagementNamedValueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.valueFromKeyVault">value_from_key_vault</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference">ApiManagementNamedValueValueFromKeyVaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.apiManagementNameInput">api_management_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.secretInput">secret_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeouts">ApiManagementNamedValueTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.valueFromKeyVaultInput">value_from_key_vault_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVault">ApiManagementNamedValueValueFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.apiManagementName">api_management_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.secret">secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.value">value</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.timeouts"></a>

```python
timeouts: ApiManagementNamedValueTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference">ApiManagementNamedValueTimeoutsOutputReference</a>

---

##### `value_from_key_vault`<sup>Required</sup> <a name="value_from_key_vault" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.valueFromKeyVault"></a>

```python
value_from_key_vault: ApiManagementNamedValueValueFromKeyVaultOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference">ApiManagementNamedValueValueFromKeyVaultOutputReference</a>

---

##### `api_management_name_input`<sup>Optional</sup> <a name="api_management_name_input" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.apiManagementNameInput"></a>

```python
api_management_name_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.secretInput"></a>

```python
secret_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApiManagementNamedValueTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeouts">ApiManagementNamedValueTimeouts</a>]

---

##### `value_from_key_vault_input`<sup>Optional</sup> <a name="value_from_key_vault_input" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.valueFromKeyVaultInput"></a>

```python
value_from_key_vault_input: ApiManagementNamedValueValueFromKeyVault
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVault">ApiManagementNamedValueValueFromKeyVault</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.apiManagementName"></a>

```python
api_management_name: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.secret"></a>

```python
secret: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.value"></a>

```python
value: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementNamedValueConfig <a name="ApiManagementNamedValueConfig" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_named_value

apiManagementNamedValue.ApiManagementNamedValueConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_management_name: str,
  display_name: str,
  name: str,
  resource_group_name: str,
  id: str = None,
  secret: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None,
  timeouts: ApiManagementNamedValueTimeouts = None,
  value: str = None,
  value_from_key_vault: ApiManagementNamedValueValueFromKeyVault = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.apiManagementName">api_management_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#api_management_name ApiManagementNamedValue#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#display_name ApiManagementNamedValue#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#name ApiManagementNamedValue#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#resource_group_name ApiManagementNamedValue#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#id ApiManagementNamedValue#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.secret">secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#secret ApiManagementNamedValue#secret}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#tags ApiManagementNamedValue#tags}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeouts">ApiManagementNamedValueTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#value ApiManagementNamedValue#value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.valueFromKeyVault">value_from_key_vault</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVault">ApiManagementNamedValueValueFromKeyVault</a></code> | value_from_key_vault block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.apiManagementName"></a>

```python
api_management_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#api_management_name ApiManagementNamedValue#api_management_name}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#display_name ApiManagementNamedValue#display_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#name ApiManagementNamedValue#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#resource_group_name ApiManagementNamedValue#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#id ApiManagementNamedValue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.secret"></a>

```python
secret: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#secret ApiManagementNamedValue#secret}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#tags ApiManagementNamedValue#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.timeouts"></a>

```python
timeouts: ApiManagementNamedValueTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeouts">ApiManagementNamedValueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#timeouts ApiManagementNamedValue#timeouts}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#value ApiManagementNamedValue#value}.

---

##### `value_from_key_vault`<sup>Optional</sup> <a name="value_from_key_vault" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueConfig.property.valueFromKeyVault"></a>

```python
value_from_key_vault: ApiManagementNamedValueValueFromKeyVault
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVault">ApiManagementNamedValueValueFromKeyVault</a>

value_from_key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#value_from_key_vault ApiManagementNamedValue#value_from_key_vault}

---

### ApiManagementNamedValueTimeouts <a name="ApiManagementNamedValueTimeouts" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_named_value

apiManagementNamedValue.ApiManagementNamedValueTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#create ApiManagementNamedValue#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#delete ApiManagementNamedValue#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#read ApiManagementNamedValue#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#update ApiManagementNamedValue#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#create ApiManagementNamedValue#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#delete ApiManagementNamedValue#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#read ApiManagementNamedValue#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#update ApiManagementNamedValue#update}.

---

### ApiManagementNamedValueValueFromKeyVault <a name="ApiManagementNamedValueValueFromKeyVault" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVault.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_named_value

apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVault(
  secret_id: str,
  identity_client_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVault.property.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#secret_id ApiManagementNamedValue#secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVault.property.identityClientId">identity_client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#identity_client_id ApiManagementNamedValue#identity_client_id}. |

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVault.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#secret_id ApiManagementNamedValue#secret_id}.

---

##### `identity_client_id`<sup>Optional</sup> <a name="identity_client_id" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVault.property.identityClientId"></a>

```python
identity_client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/api_management_named_value#identity_client_id ApiManagementNamedValue#identity_client_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementNamedValueTimeoutsOutputReference <a name="ApiManagementNamedValueTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_named_value

apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeouts">ApiManagementNamedValueTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementNamedValueTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueTimeouts">ApiManagementNamedValueTimeouts</a>]

---


### ApiManagementNamedValueValueFromKeyVaultOutputReference <a name="ApiManagementNamedValueValueFromKeyVaultOutputReference" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_named_value

apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.resetIdentityClientId">reset_identity_client_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_client_id` <a name="reset_identity_client_id" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.resetIdentityClientId"></a>

```python
def reset_identity_client_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.property.identityClientIdInput">identity_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.property.identityClientId">identity_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVault">ApiManagementNamedValueValueFromKeyVault</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_client_id_input`<sup>Optional</sup> <a name="identity_client_id_input" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.property.identityClientIdInput"></a>

```python
identity_client_id_input: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `identity_client_id`<sup>Required</sup> <a name="identity_client_id" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.property.identityClientId"></a>

```python
identity_client_id: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVaultOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementNamedValueValueFromKeyVault
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementNamedValue.ApiManagementNamedValueValueFromKeyVault">ApiManagementNamedValueValueFromKeyVault</a>

---



