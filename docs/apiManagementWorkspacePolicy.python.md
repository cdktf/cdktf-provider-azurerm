# `apiManagementWorkspacePolicy` Submodule <a name="`apiManagementWorkspacePolicy` Submodule" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementWorkspacePolicy <a name="ApiManagementWorkspacePolicy" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy azurerm_api_management_workspace_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_policy

apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy(
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
  id: str = None,
  timeouts: ApiManagementWorkspacePolicyTimeouts = None,
  xml_content: str = None,
  xml_link: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.apiManagementWorkspaceId">api_management_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#api_management_workspace_id ApiManagementWorkspacePolicy#api_management_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#id ApiManagementWorkspacePolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts">ApiManagementWorkspacePolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.xmlContent">xml_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#xml_content ApiManagementWorkspacePolicy#xml_content}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.xmlLink">xml_link</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#xml_link ApiManagementWorkspacePolicy#xml_link}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `api_management_workspace_id`<sup>Required</sup> <a name="api_management_workspace_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.apiManagementWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#api_management_workspace_id ApiManagementWorkspacePolicy#api_management_workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#id ApiManagementWorkspacePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts">ApiManagementWorkspacePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#timeouts ApiManagementWorkspacePolicy#timeouts}

---

##### `xml_content`<sup>Optional</sup> <a name="xml_content" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.xmlContent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#xml_content ApiManagementWorkspacePolicy#xml_content}.

---

##### `xml_link`<sup>Optional</sup> <a name="xml_link" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.Initializer.parameter.xmlLink"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#xml_link ApiManagementWorkspacePolicy#xml_link}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.resetXmlContent">reset_xml_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.resetXmlLink">reset_xml_link</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#create ApiManagementWorkspacePolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#delete ApiManagementWorkspacePolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#read ApiManagementWorkspacePolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#update ApiManagementWorkspacePolicy#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_xml_content` <a name="reset_xml_content" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.resetXmlContent"></a>

```python
def reset_xml_content() -> None
```

##### `reset_xml_link` <a name="reset_xml_link" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.resetXmlLink"></a>

```python
def reset_xml_link() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApiManagementWorkspacePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_policy

apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_policy

apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_policy

apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_policy

apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApiManagementWorkspacePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiManagementWorkspacePolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiManagementWorkspacePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementWorkspacePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference">ApiManagementWorkspacePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.apiManagementWorkspaceIdInput">api_management_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts">ApiManagementWorkspacePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.xmlContentInput">xml_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.xmlLinkInput">xml_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.apiManagementWorkspaceId">api_management_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.xmlContent">xml_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.xmlLink">xml_link</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.timeouts"></a>

```python
timeouts: ApiManagementWorkspacePolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference">ApiManagementWorkspacePolicyTimeoutsOutputReference</a>

---

##### `api_management_workspace_id_input`<sup>Optional</sup> <a name="api_management_workspace_id_input" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.apiManagementWorkspaceIdInput"></a>

```python
api_management_workspace_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ApiManagementWorkspacePolicyTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts">ApiManagementWorkspacePolicyTimeouts</a>

---

##### `xml_content_input`<sup>Optional</sup> <a name="xml_content_input" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.xmlContentInput"></a>

```python
xml_content_input: str
```

- *Type:* str

---

##### `xml_link_input`<sup>Optional</sup> <a name="xml_link_input" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.xmlLinkInput"></a>

```python
xml_link_input: str
```

- *Type:* str

---

##### `api_management_workspace_id`<sup>Required</sup> <a name="api_management_workspace_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.apiManagementWorkspaceId"></a>

```python
api_management_workspace_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `xml_content`<sup>Required</sup> <a name="xml_content" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.xmlContent"></a>

```python
xml_content: str
```

- *Type:* str

---

##### `xml_link`<sup>Required</sup> <a name="xml_link" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.xmlLink"></a>

```python
xml_link: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementWorkspacePolicyConfig <a name="ApiManagementWorkspacePolicyConfig" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_policy

apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_management_workspace_id: str,
  id: str = None,
  timeouts: ApiManagementWorkspacePolicyTimeouts = None,
  xml_content: str = None,
  xml_link: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.apiManagementWorkspaceId">api_management_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#api_management_workspace_id ApiManagementWorkspacePolicy#api_management_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#id ApiManagementWorkspacePolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts">ApiManagementWorkspacePolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.xmlContent">xml_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#xml_content ApiManagementWorkspacePolicy#xml_content}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.xmlLink">xml_link</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#xml_link ApiManagementWorkspacePolicy#xml_link}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `api_management_workspace_id`<sup>Required</sup> <a name="api_management_workspace_id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.apiManagementWorkspaceId"></a>

```python
api_management_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#api_management_workspace_id ApiManagementWorkspacePolicy#api_management_workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#id ApiManagementWorkspacePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.timeouts"></a>

```python
timeouts: ApiManagementWorkspacePolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts">ApiManagementWorkspacePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#timeouts ApiManagementWorkspacePolicy#timeouts}

---

##### `xml_content`<sup>Optional</sup> <a name="xml_content" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.xmlContent"></a>

```python
xml_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#xml_content ApiManagementWorkspacePolicy#xml_content}.

---

##### `xml_link`<sup>Optional</sup> <a name="xml_link" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyConfig.property.xmlLink"></a>

```python
xml_link: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#xml_link ApiManagementWorkspacePolicy#xml_link}.

---

### ApiManagementWorkspacePolicyTimeouts <a name="ApiManagementWorkspacePolicyTimeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_policy

apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#create ApiManagementWorkspacePolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#delete ApiManagementWorkspacePolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#read ApiManagementWorkspacePolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#update ApiManagementWorkspacePolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#create ApiManagementWorkspacePolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#delete ApiManagementWorkspacePolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#read ApiManagementWorkspacePolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_workspace_policy#update ApiManagementWorkspacePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementWorkspacePolicyTimeoutsOutputReference <a name="ApiManagementWorkspacePolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_workspace_policy

apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts">ApiManagementWorkspacePolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiManagementWorkspacePolicyTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicy.ApiManagementWorkspacePolicyTimeouts">ApiManagementWorkspacePolicyTimeouts</a>

---



