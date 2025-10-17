# `apiManagementWorkspacePolicyFragment` Submodule <a name="`apiManagementWorkspacePolicyFragment` Submodule" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementWorkspacePolicyFragment <a name="ApiManagementWorkspacePolicyFragment" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment azurerm_api_management_workspace_policy_fragment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_policy_fragment

apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_management_workspace_id: str,
  name: str,
  xml_content: str,
  description: str = None,
  id: str = None,
  timeouts: ApiManagementWorkspacePolicyFragmentTimeouts = None,
  xml_format: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.apiManagementWorkspaceId">api_management_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#api_management_workspace_id ApiManagementWorkspacePolicyFragment#api_management_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#name ApiManagementWorkspacePolicyFragment#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.xmlContent">xml_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#xml_content ApiManagementWorkspacePolicyFragment#xml_content}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#description ApiManagementWorkspacePolicyFragment#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#id ApiManagementWorkspacePolicyFragment#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts">ApiManagementWorkspacePolicyFragmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.xmlFormat">xml_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#xml_format ApiManagementWorkspacePolicyFragment#xml_format}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `api_management_workspace_id`<sup>Required</sup> <a name="api_management_workspace_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.apiManagementWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#api_management_workspace_id ApiManagementWorkspacePolicyFragment#api_management_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#name ApiManagementWorkspacePolicyFragment#name}.

---

##### `xml_content`<sup>Required</sup> <a name="xml_content" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.xmlContent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#xml_content ApiManagementWorkspacePolicyFragment#xml_content}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#description ApiManagementWorkspacePolicyFragment#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#id ApiManagementWorkspacePolicyFragment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts">ApiManagementWorkspacePolicyFragmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#timeouts ApiManagementWorkspacePolicyFragment#timeouts}

---

##### `xml_format`<sup>Optional</sup> <a name="xml_format" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.xmlFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#xml_format ApiManagementWorkspacePolicyFragment#xml_format}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetXmlFormat">reset_xml_format</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#create ApiManagementWorkspacePolicyFragment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#delete ApiManagementWorkspacePolicyFragment#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#read ApiManagementWorkspacePolicyFragment#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#update ApiManagementWorkspacePolicyFragment#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_xml_format` <a name="reset_xml_format" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetXmlFormat"></a>

```python
def reset_xml_format() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApiManagementWorkspacePolicyFragment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_policy_fragment

apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_policy_fragment

apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_policy_fragment

apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_policy_fragment

apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApiManagementWorkspacePolicyFragment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiManagementWorkspacePolicyFragment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiManagementWorkspacePolicyFragment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementWorkspacePolicyFragment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference">ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.apiManagementWorkspaceIdInput">api_management_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts">ApiManagementWorkspacePolicyFragmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlContentInput">xml_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlFormatInput">xml_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.apiManagementWorkspaceId">api_management_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlContent">xml_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlFormat">xml_format</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.timeouts"></a>

```python
timeouts: ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference">ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference</a>

---

##### `api_management_workspace_id_input`<sup>Optional</sup> <a name="api_management_workspace_id_input" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.apiManagementWorkspaceIdInput"></a>

```python
api_management_workspace_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ApiManagementWorkspacePolicyFragmentTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts">ApiManagementWorkspacePolicyFragmentTimeouts</a>

---

##### `xml_content_input`<sup>Optional</sup> <a name="xml_content_input" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlContentInput"></a>

```python
xml_content_input: str
```

- *Type:* str

---

##### `xml_format_input`<sup>Optional</sup> <a name="xml_format_input" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlFormatInput"></a>

```python
xml_format_input: str
```

- *Type:* str

---

##### `api_management_workspace_id`<sup>Required</sup> <a name="api_management_workspace_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.apiManagementWorkspaceId"></a>

```python
api_management_workspace_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `xml_content`<sup>Required</sup> <a name="xml_content" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlContent"></a>

```python
xml_content: str
```

- *Type:* str

---

##### `xml_format`<sup>Required</sup> <a name="xml_format" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlFormat"></a>

```python
xml_format: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementWorkspacePolicyFragmentConfig <a name="ApiManagementWorkspacePolicyFragmentConfig" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_policy_fragment

apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_management_workspace_id: str,
  name: str,
  xml_content: str,
  description: str = None,
  id: str = None,
  timeouts: ApiManagementWorkspacePolicyFragmentTimeouts = None,
  xml_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.apiManagementWorkspaceId">api_management_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#api_management_workspace_id ApiManagementWorkspacePolicyFragment#api_management_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#name ApiManagementWorkspacePolicyFragment#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.xmlContent">xml_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#xml_content ApiManagementWorkspacePolicyFragment#xml_content}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#description ApiManagementWorkspacePolicyFragment#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#id ApiManagementWorkspacePolicyFragment#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts">ApiManagementWorkspacePolicyFragmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.xmlFormat">xml_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#xml_format ApiManagementWorkspacePolicyFragment#xml_format}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `api_management_workspace_id`<sup>Required</sup> <a name="api_management_workspace_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.apiManagementWorkspaceId"></a>

```python
api_management_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#api_management_workspace_id ApiManagementWorkspacePolicyFragment#api_management_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#name ApiManagementWorkspacePolicyFragment#name}.

---

##### `xml_content`<sup>Required</sup> <a name="xml_content" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.xmlContent"></a>

```python
xml_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#xml_content ApiManagementWorkspacePolicyFragment#xml_content}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#description ApiManagementWorkspacePolicyFragment#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#id ApiManagementWorkspacePolicyFragment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.timeouts"></a>

```python
timeouts: ApiManagementWorkspacePolicyFragmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts">ApiManagementWorkspacePolicyFragmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#timeouts ApiManagementWorkspacePolicyFragment#timeouts}

---

##### `xml_format`<sup>Optional</sup> <a name="xml_format" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.xmlFormat"></a>

```python
xml_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#xml_format ApiManagementWorkspacePolicyFragment#xml_format}.

---

### ApiManagementWorkspacePolicyFragmentTimeouts <a name="ApiManagementWorkspacePolicyFragmentTimeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_policy_fragment

apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#create ApiManagementWorkspacePolicyFragment#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#delete ApiManagementWorkspacePolicyFragment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#read ApiManagementWorkspacePolicyFragment#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#update ApiManagementWorkspacePolicyFragment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#create ApiManagementWorkspacePolicyFragment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#delete ApiManagementWorkspacePolicyFragment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#read ApiManagementWorkspacePolicyFragment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#update ApiManagementWorkspacePolicyFragment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference <a name="ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_policy_fragment

apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts">ApiManagementWorkspacePolicyFragmentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiManagementWorkspacePolicyFragmentTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts">ApiManagementWorkspacePolicyFragmentTimeouts</a>

---



