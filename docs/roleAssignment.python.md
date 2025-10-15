# `roleAssignment` Submodule <a name="`roleAssignment` Submodule" id="@cdktf/provider-azurerm.roleAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RoleAssignment <a name="RoleAssignment" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment azurerm_role_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_assignment

roleAssignment.RoleAssignment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  principal_id: str,
  scope: str,
  condition: str = None,
  condition_version: str = None,
  delegated_managed_identity_resource_id: str = None,
  description: str = None,
  id: str = None,
  name: str = None,
  principal_type: str = None,
  role_definition_id: str = None,
  role_definition_name: str = None,
  skip_service_principal_aad_check: bool | IResolvable = None,
  timeouts: RoleAssignmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.principalId">principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#principal_id RoleAssignment#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#scope RoleAssignment#scope}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.condition">condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#condition RoleAssignment#condition}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.conditionVersion">condition_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#condition_version RoleAssignment#condition_version}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.delegatedManagedIdentityResourceId">delegated_managed_identity_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#delegated_managed_identity_resource_id RoleAssignment#delegated_managed_identity_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#description RoleAssignment#description}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#id RoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#name RoleAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#principal_type RoleAssignment#principal_type}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#role_definition_id RoleAssignment#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.roleDefinitionName">role_definition_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#role_definition_name RoleAssignment#role_definition_name}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.skipServicePrincipalAadCheck">skip_service_principal_aad_check</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#skip_service_principal_aad_check RoleAssignment#skip_service_principal_aad_check}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeouts">RoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.principalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#principal_id RoleAssignment#principal_id}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#scope RoleAssignment#scope}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.condition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#condition RoleAssignment#condition}.

---

##### `condition_version`<sup>Optional</sup> <a name="condition_version" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.conditionVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#condition_version RoleAssignment#condition_version}.

---

##### `delegated_managed_identity_resource_id`<sup>Optional</sup> <a name="delegated_managed_identity_resource_id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.delegatedManagedIdentityResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#delegated_managed_identity_resource_id RoleAssignment#delegated_managed_identity_resource_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#description RoleAssignment#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#id RoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#name RoleAssignment#name}.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.principalType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#principal_type RoleAssignment#principal_type}.

---

##### `role_definition_id`<sup>Optional</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.roleDefinitionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#role_definition_id RoleAssignment#role_definition_id}.

---

##### `role_definition_name`<sup>Optional</sup> <a name="role_definition_name" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.roleDefinitionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#role_definition_name RoleAssignment#role_definition_name}.

---

##### `skip_service_principal_aad_check`<sup>Optional</sup> <a name="skip_service_principal_aad_check" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.skipServicePrincipalAadCheck"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#skip_service_principal_aad_check RoleAssignment#skip_service_principal_aad_check}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeouts">RoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#timeouts RoleAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetConditionVersion">reset_condition_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetDelegatedManagedIdentityResourceId">reset_delegated_managed_identity_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetPrincipalType">reset_principal_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetRoleDefinitionId">reset_role_definition_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetRoleDefinitionName">reset_role_definition_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetSkipServicePrincipalAadCheck">reset_skip_service_principal_aad_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#create RoleAssignment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#delete RoleAssignment#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#read RoleAssignment#read}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_condition_version` <a name="reset_condition_version" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetConditionVersion"></a>

```python
def reset_condition_version() -> None
```

##### `reset_delegated_managed_identity_resource_id` <a name="reset_delegated_managed_identity_resource_id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetDelegatedManagedIdentityResourceId"></a>

```python
def reset_delegated_managed_identity_resource_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_principal_type` <a name="reset_principal_type" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetPrincipalType"></a>

```python
def reset_principal_type() -> None
```

##### `reset_role_definition_id` <a name="reset_role_definition_id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetRoleDefinitionId"></a>

```python
def reset_role_definition_id() -> None
```

##### `reset_role_definition_name` <a name="reset_role_definition_name" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetRoleDefinitionName"></a>

```python
def reset_role_definition_name() -> None
```

##### `reset_skip_service_principal_aad_check` <a name="reset_skip_service_principal_aad_check" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetSkipServicePrincipalAadCheck"></a>

```python
def reset_skip_service_principal_aad_check() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RoleAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import role_assignment

roleAssignment.RoleAssignment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import role_assignment

roleAssignment.RoleAssignment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import role_assignment

roleAssignment.RoleAssignment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import role_assignment

roleAssignment.RoleAssignment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RoleAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RoleAssignment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RoleAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RoleAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference">RoleAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.conditionVersionInput">condition_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.delegatedManagedIdentityResourceIdInput">delegated_managed_identity_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.principalIdInput">principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.roleDefinitionIdInput">role_definition_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.roleDefinitionNameInput">role_definition_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.skipServicePrincipalAadCheckInput">skip_service_principal_aad_check_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeouts">RoleAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.conditionVersion">condition_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.delegatedManagedIdentityResourceId">delegated_managed_identity_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.roleDefinitionName">role_definition_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.skipServicePrincipalAadCheck">skip_service_principal_aad_check</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.timeouts"></a>

```python
timeouts: RoleAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference">RoleAssignmentTimeoutsOutputReference</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `condition_version_input`<sup>Optional</sup> <a name="condition_version_input" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.conditionVersionInput"></a>

```python
condition_version_input: str
```

- *Type:* str

---

##### `delegated_managed_identity_resource_id_input`<sup>Optional</sup> <a name="delegated_managed_identity_resource_id_input" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.delegatedManagedIdentityResourceIdInput"></a>

```python
delegated_managed_identity_resource_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `principal_id_input`<sup>Optional</sup> <a name="principal_id_input" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.principalIdInput"></a>

```python
principal_id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `role_definition_id_input`<sup>Optional</sup> <a name="role_definition_id_input" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.roleDefinitionIdInput"></a>

```python
role_definition_id_input: str
```

- *Type:* str

---

##### `role_definition_name_input`<sup>Optional</sup> <a name="role_definition_name_input" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.roleDefinitionNameInput"></a>

```python
role_definition_name_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `skip_service_principal_aad_check_input`<sup>Optional</sup> <a name="skip_service_principal_aad_check_input" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.skipServicePrincipalAadCheckInput"></a>

```python
skip_service_principal_aad_check_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | RoleAssignmentTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeouts">RoleAssignmentTimeouts</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `condition_version`<sup>Required</sup> <a name="condition_version" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.conditionVersion"></a>

```python
condition_version: str
```

- *Type:* str

---

##### `delegated_managed_identity_resource_id`<sup>Required</sup> <a name="delegated_managed_identity_resource_id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.delegatedManagedIdentityResourceId"></a>

```python
delegated_managed_identity_resource_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `role_definition_id`<sup>Required</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.roleDefinitionId"></a>

```python
role_definition_id: str
```

- *Type:* str

---

##### `role_definition_name`<sup>Required</sup> <a name="role_definition_name" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.roleDefinitionName"></a>

```python
role_definition_name: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `skip_service_principal_aad_check`<sup>Required</sup> <a name="skip_service_principal_aad_check" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.skipServicePrincipalAadCheck"></a>

```python
skip_service_principal_aad_check: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RoleAssignmentConfig <a name="RoleAssignmentConfig" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_assignment

roleAssignment.RoleAssignmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  principal_id: str,
  scope: str,
  condition: str = None,
  condition_version: str = None,
  delegated_managed_identity_resource_id: str = None,
  description: str = None,
  id: str = None,
  name: str = None,
  principal_type: str = None,
  role_definition_id: str = None,
  role_definition_name: str = None,
  skip_service_principal_aad_check: bool | IResolvable = None,
  timeouts: RoleAssignmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.principalId">principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#principal_id RoleAssignment#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#scope RoleAssignment#scope}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.condition">condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#condition RoleAssignment#condition}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.conditionVersion">condition_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#condition_version RoleAssignment#condition_version}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.delegatedManagedIdentityResourceId">delegated_managed_identity_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#delegated_managed_identity_resource_id RoleAssignment#delegated_managed_identity_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#description RoleAssignment#description}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#id RoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#name RoleAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#principal_type RoleAssignment#principal_type}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#role_definition_id RoleAssignment#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.roleDefinitionName">role_definition_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#role_definition_name RoleAssignment#role_definition_name}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.skipServicePrincipalAadCheck">skip_service_principal_aad_check</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#skip_service_principal_aad_check RoleAssignment#skip_service_principal_aad_check}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeouts">RoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#principal_id RoleAssignment#principal_id}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#scope RoleAssignment#scope}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.condition"></a>

```python
condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#condition RoleAssignment#condition}.

---

##### `condition_version`<sup>Optional</sup> <a name="condition_version" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.conditionVersion"></a>

```python
condition_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#condition_version RoleAssignment#condition_version}.

---

##### `delegated_managed_identity_resource_id`<sup>Optional</sup> <a name="delegated_managed_identity_resource_id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.delegatedManagedIdentityResourceId"></a>

```python
delegated_managed_identity_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#delegated_managed_identity_resource_id RoleAssignment#delegated_managed_identity_resource_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#description RoleAssignment#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#id RoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#name RoleAssignment#name}.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#principal_type RoleAssignment#principal_type}.

---

##### `role_definition_id`<sup>Optional</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.roleDefinitionId"></a>

```python
role_definition_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#role_definition_id RoleAssignment#role_definition_id}.

---

##### `role_definition_name`<sup>Optional</sup> <a name="role_definition_name" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.roleDefinitionName"></a>

```python
role_definition_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#role_definition_name RoleAssignment#role_definition_name}.

---

##### `skip_service_principal_aad_check`<sup>Optional</sup> <a name="skip_service_principal_aad_check" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.skipServicePrincipalAadCheck"></a>

```python
skip_service_principal_aad_check: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#skip_service_principal_aad_check RoleAssignment#skip_service_principal_aad_check}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentConfig.property.timeouts"></a>

```python
timeouts: RoleAssignmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeouts">RoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#timeouts RoleAssignment#timeouts}

---

### RoleAssignmentTimeouts <a name="RoleAssignmentTimeouts" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_assignment

roleAssignment.RoleAssignmentTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#create RoleAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#delete RoleAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#read RoleAssignment#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#create RoleAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#delete RoleAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/role_assignment#read RoleAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### RoleAssignmentTimeoutsOutputReference <a name="RoleAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_assignment

roleAssignment.RoleAssignmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeouts">RoleAssignmentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RoleAssignmentTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.roleAssignment.RoleAssignmentTimeouts">RoleAssignmentTimeouts</a>

---



